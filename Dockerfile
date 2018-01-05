FROM node:latest

WORKDIR .

ADD  package*.json ./

RUN npm install

ADD . .

EXPOSE 8080

CMD [ "npm" ,"start"]
