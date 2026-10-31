# Node.js alpine (hafif) imajını kullan
FROM node:20-alpine

# Çalışma dizinini ayarla
WORKDIR /app

# Bağımlılıkları kopyala ve yükle
COPY package*.json ./
RUN npm install --production

# Tüm backend kodlarını kopyala
COPY . .

# Node.js uygulamasının çalıştığı port (varsayılan 5000 diyelim)
EXPOSE 5000

# Uygulamayı başlat
CMD ["node", "server.js"]

RUN apk update && apk upgrade
