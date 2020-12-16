FROM nginx:stable-alpine

WORKDIR /workspace
ADD . .
COPY ./build/ /usr/share/nginx/html/
