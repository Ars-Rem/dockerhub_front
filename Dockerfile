#frontend
FROM nginx:latest
COPY build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/* /etc/nginx/conf.d/
EXPOSE 80

