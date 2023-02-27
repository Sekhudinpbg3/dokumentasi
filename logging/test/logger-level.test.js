import winston from "winston";

test("logger-level", () => {
  const logger = winston.createLogger({
    level: "info", //akan menampilkan log dengan level lebih besar sama dengan this.level
    transports: [new winston.transports.Console({})],
  });

  logger.log({ level: "error", message: "logger Error" });
  logger.log({ level: "warn", message: "logger Warn" });
  logger.log({ level: "info", message: "logger Info" });
  logger.log({ level: "http", message: "logger HTTP" });
  logger.log({ level: "verbose", message: "logger Verbose" });
  logger.log({ level: "debug", message: "logger Debug" });
  logger.log({ level: "silly", message: "logger Silly" });
});

test("logger-shortcut-function", () => {
    const logger = winston.createLogger({
      level: "debug", //akan menampilkan log dengan level lebih besar sama dengan this.level
      transports: [new winston.transports.Console({})],
    });
  
    logger.error("logger Error");
    logger.warn("ogger Warn") 
    logger.info("ogger Info") 
    logger.http("ogger HTTP") 
    logger.verbose("logger Verbose");
    logger.debug("logger Debug");
    logger.silly("logger Silly");
  });
