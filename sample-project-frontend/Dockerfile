FROM node:lts-hydrogen as build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

FROM nginx:1.23-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
