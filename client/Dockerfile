FROM node:alpine

RUN mkdir /app

WORKDIR /app
COPY package.json .
RUN npm install

COPY . .

CMD ["nodemon", "--exec", "npm", "run", "start"]