import winston from "winston";

test("logger-format", () => {
  const logger = winston.createLogger({
    level: "info", //akan menampilkan log dengan level lebih besar sama dengan this.level
    // format:winston.format.json(), --> default

    // format:winston.format.simple(), // format text biasa

    // format: winston.format.printf((value) => {
    //   return `${new Date()} : ${value.message}`;
    // }), // menggunakan format log sendiri

    format:winston.format.combine(
        winston.format.timestamp(), //menambahkan timestamp
        winston.format.ms(), // menambahkan jarak(waktu) dari log lainya
        winston.format.json(), //WAJIB ditambahkan diakhir--> untuk menyajikan log dalam format apa?
    ), // format--> mengkombinasika beberapa format

    transports: [new winston.transports.Console({})],
  });

  logger.error("logger Error");
  logger.warn("ogger Warn");
  logger.info("ogger Info");
  logger.http("ogger HTTP");
  logger.verbose("logger Verbose");
  logger.debug("logger Debug");
  logger.silly("logger Silly");
});
