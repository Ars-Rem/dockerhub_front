#frontend
FROM nginx:1.18
COPY ./build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY / /etc/nginx/conf.d/
#CMD [ "nginx" ]


