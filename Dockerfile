FROM node:14

WORKDIR /My_nodejs_app
COPY package.json .
RUN npm install
COPY . .
CMD npm start