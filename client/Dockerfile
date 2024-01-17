FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
#CMD ["npm", "start"]

FROM nginx:1.25.3-alpine
COPY --from=build /app/build/ /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]