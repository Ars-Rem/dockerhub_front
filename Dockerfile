#frontend
FROM docker2021repos/nginx:latest
COPY build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d/
#RUN mkdir -p /etc/nginx/sites-available/
#COPY nginx/* /etc/nginx/sites-available/
#RUN mkdir -p /etc/nginx/sites-enabled/
#RUN ln -s /etc/nginx/sites-available/to_app.conf /etc/nginx/sites-enabled/
#RUN ln -s /etc/nginx/sites-available/default.conf /etc/nginx/sites-enabled/
EXPOSE 80

