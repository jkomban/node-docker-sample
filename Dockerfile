FROM node:latest

WORKDIR C:\\Development_Avecto\\DevSpace\\VS\\sample\\node-docker-test

ADD  package*.json ./

RUN npm install

ADD . .

EXPOSE 8080

CMD [ "npm" ,"start"]