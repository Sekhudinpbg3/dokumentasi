# versi image runtime nodejs 
FROM node:lts-alpine3.17

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]

