# =========================================================
# Serves the pure HTML/CSS/JS EventSphere frontend via Nginx
# =========================================================
FROM nginx:1.27-alpine

COPY index.html /usr/share/nginx/html/index.html
COPY login.html /usr/share/nginx/html/login.html
COPY booking.html /usr/share/nginx/html/booking.html
COPY my-bookings.html /usr/share/nginx/html/my-bookings.html
COPY admin.html /usr/share/nginx/html/admin.html
COPY user-management.html /usr/share/nginx/html/user-management.html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
