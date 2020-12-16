FROM node:12-alpine

# setup working dir and copy source
WORKDIR /workspace
ADD . .

# install deps and build site
RUN yarn && yarn build

# serve site
# FROM nginx:stable-alpine
# COPY --from=0 /workspace/build/ /usr/share/nginx/html/
