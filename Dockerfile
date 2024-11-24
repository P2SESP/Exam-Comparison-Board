FROM node:latest

WORKDIR /exams 
COPY package.json .
COPY  *config* .

RUN npm install 

COPY . .

RUN npx next build

ENTRYPOINT [ "npm", "run", "start" ]
