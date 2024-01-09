FROM node:alpine

RUN mkdir /app

WORKDIR /app
COPY package.json .
RUN npm install

RUN npm install -g nodemon

COPY . .

CMD ["nodemon", "-L", "--exec", "npm", "run", "start"]