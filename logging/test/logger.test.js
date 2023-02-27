import winston from "winston";

test("logger-basic", () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})],
  });

  logger.log({
    level: "info",
    message: "logger basic",
  });
});
