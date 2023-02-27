import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("logger-transport-daily-rotate", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(), //menambahkan timestamp
      winston.format.ms(), // menambahkan jarak(waktu) dari log lainya
      winston.format.json() //WAJIB ditambahkan diakhir--> untuk menyajikan log dalam format apa?
    ), // format--> mengkombinasika beberapa format

    transports: [
      new winston.transports.Console({}),
      new DailyRotateFile({
        dirname : "./test/log",
        filename: "app-%DATE%.log",
        datePattern: "DD-MM-YYYY",
        zippedArchive: true, //akan diarsipkan agar tidak terlalu besar ukuran filenya
        maxSize: '1m', //maksimal zise file 1 MB
        maxFiles: '14d', //log file akan dihapus setelah 14 hari,
      })
    ],
  });

  for (let index = 0; index < 1000; index++) {
    logger.error("logger Error");
  }
});
