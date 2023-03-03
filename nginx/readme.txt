--- konteks upstream <hostname>:port
- konteks upstream diikuti dengan nama host dan number port yang digunakan.
jika menggunakan docker, host adalah nama kontainer. sementara, port adalah port lokal dari kontainer yang berjalan.
misalnya kontainer app berjalan pada ( -p 8080:5000 ) maka nilai port adalah 5000 bukan 8080.