FROM node:14-alpine AS base

WORKDIR /usr/src/app

COPY package*.json ./

EXPOSE 3000

RUN npm install glob rimraf

RUN npm run build

FROM base AS development

ENV NODE_ENV=development

RUN npm install --only=development

CMD ["node", "dist/main"]
