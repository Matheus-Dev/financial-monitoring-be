FROM node:14-alpine AS base

WORKDIR /usr/src/app

COPY package*.json ./

EXPOSE 3000

RUN npm install glob rimraf

RUN npm run build

FROM base AS development

ENV NODE_ENV=development

RUN npm install --only=development

COPY . .

FROM base as production

ENV NODE_ENV=production

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
