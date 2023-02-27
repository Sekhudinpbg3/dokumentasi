import winston from "winston";

test("logger-console-transports", () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})],
  });

  logger.log({ level: "error", message: "logger Error" });
  logger.log({ level: "warn", message: "logger Warn" });
  logger.log({ level: "info", message: "logger Info" });
  logger.log({ level: "http", message: "logger HTTP" });
  logger.log({ level: "verbose", message: "logger Verbose" });
  logger.log({ level: "debug", message: "logger Debug" });
  logger.log({ level: "silly", message: "logger Silly" });
  const name = "Sekhudin"
  expect(name).toBe("Sekhudin");
});
