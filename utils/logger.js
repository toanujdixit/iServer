const { format, createLogger, transports, config } = require('winston');
const { timestamp, combine, errors, json, printf, align } = format;
require('winston-daily-rotate-file');


const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${level}] : ${stack || message}`;
});

let transport = new transports.DailyRotateFile({
  filename: '%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  dirname: process.env.hasOwnProperty("LABD_LOGS_DIR")?process.env["LABD_LOGS_DIR"] :(__dirname + "/logs/"),
  zippedArchive: false,
  maxSize: '20m',
  prepend: true,
  maxFiles: 30,
  utc: true,
  level: 'info',
});

let consoletransport = new transports.Console({
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }),
    json(),
    align(),
    logFormat
  ),
});

  transport.on('rotate', function (oldFilename, newFilename) {
    // do something fun
  });

buildLogger = createLogger({
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }),
    json(),
    align(),
    logFormat),
   transports: [transport, consoletransport],
  //transports: [transport]
});

buildLogger.stream = {
  write: (mess, encoding) => {
    buildLogger.info(mess);
  }
};

module.exports = buildLogger;