FROM node:24-alpine AS Builder

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . . 

RUN npm run build 

FROM nginx:alpine

COPY --from=Builder /app/dist /usr/share/nginx/html

EXPOSE 80 
