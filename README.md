# PAINEL_SSH


# INSTALAR SERVIDOR
sudo apt update
sudo apt install nginx


# CONFIGURAR PROXY
nano /etc/nginx/sites-available/node_app.conf
server {  
    listen 80;
    server_name SUBDOMAIN.DOMAIN.TLD;
    location / {  
                 proxy_pass http://0.0.0.0:3000;  
                 proxy_http_version 1.1;  
                 proxy_set_header Upgrade $http_upgrade;  
                 proxy_set_header Connection 'upgrade';  
                 proxy_set_header Host $host;  
                 proxy_cache_bypass $http_upgrade;  
    }  
}

# FAZER CHECAGEM DE ERROS
nginx -t

`
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful

`
systemctl reload nginx
Created with CodeSandbox
