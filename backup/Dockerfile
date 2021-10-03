#frontend
FROM docker2021repos/nginx:latest
COPY build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/* /etc/nginx/conf.d/
RUN cat etc/hosts
EXPOSE 80

