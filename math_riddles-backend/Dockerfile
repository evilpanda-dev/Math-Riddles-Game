FROM node:latest

WORKDIR /app

RUN npm install nodemon -g
COPY package.json .
COPY package-lock.json .
COPY . .

RUN npm install

EXPOSE 8080

CMD ["nodemon","-L","src/index.js"]