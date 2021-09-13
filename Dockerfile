#frontend
FROM nginx:1.17
COPY ./build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/* /etc/nginx/conf.d/
CMD [ "nginx" ]


