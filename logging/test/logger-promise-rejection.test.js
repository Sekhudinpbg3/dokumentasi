import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(), //menambahkan timestamp
    winston.format.ms(), // menambahkan jarak(waktu) dari log lainya
    winston.format.json() //WAJIB ditambahkan diakhir--> untuk menyajikan log dalam format apa?
  ), // format--> mengkombinasika beberapa format

  transports: [
    new winston.transports.File({
      level: "info",
      dirname: "./test/log",
      filename: "promise-rejection.log",
      handleExceptions: true, //akan menangkap exception yang tidak tertangkap
      handleRejections: true, // akan menangkap promise rejection
    }),
  ],
});

// 
async function call(){
    return Promise.reject("Ups")
}
call(); //fungsi hello akan error sehingga akan mentrigger logger untuk mencatatat promise reject
