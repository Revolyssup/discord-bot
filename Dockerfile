FROM node:latest

RUN apt update
RUN npm install -g typescript 
WORKDIR /app
COPY . /app
RUN npm install


CMD ["npm","start"]