FROM node:lts

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install 

COPY src/config/prisma /app/src/config/prisma

RUN npx prisma generate --schema=/app/src/config/prisma/schema.prisma

COPY . .

EXPOSE 4000

CMD [ "node", "index.js" ]