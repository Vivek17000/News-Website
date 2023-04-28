FROM node:alpine3.16 as nodework
WORKDIR /newsapp
COPY package.json .
RUN npm install
COPY . .
RUN npm run build




#SERVER

FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=nodework /newsapp/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]