FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build   # nest build → dist/

EXPOSE 8080

CMD ["npm", "run", "start:prod"]
