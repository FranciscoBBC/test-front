FROM node:20-alpine AS development
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
ENV NODE_ENV development
EXPOSE 3000
CMD ["yarn", "dev"]

FROM node:20-alpine AS build
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM node:20-alpine as production
COPY --from=build /app/dist /app/dist
COPY package.json .
COPY vite.config.ts .
RUN yarn add typescript
ENV NODE_ENV production
EXPOSE 9000
CMD [ "yarn", "preview" ]