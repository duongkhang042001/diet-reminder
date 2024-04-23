FROM node:18-alpine 

EXPOSE 3000/tcp

WORKDIR /app

COPY package*.json ./

COPY . /app

RUN npm ci --omit=dev && npm cache clean --force

USER node

CMD ["node", "server.js"]
