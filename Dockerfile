FROM nginx:alpine

# Clean out default content (nginx launch page)
RUN rm -rf /usr/share/nginx/html/*

COPY . /usr/share/nginx/html
EXPOSE 25252:80
CMD ["nginx", "-g", "daemon off;"]