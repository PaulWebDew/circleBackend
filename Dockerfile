FROM node:18.16.0-alpine3.17
WORKDIR /app
COPY package.json .
RUN npm install
COPY  . .
EXPOSE 4000
CMD [ "node", "app.js"]