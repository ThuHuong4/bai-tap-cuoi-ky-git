FROM node:18-alpine
WORKDIR /app

# 1. Copy file khai báo thư viện trước
COPY package.json ./

# 2. Cài đặt thư viện (Lúc này chưa copy code nên rất sạch)
RUN npm install

# 3. Copy toàn bộ code còn lại (Nhờ file .dockerignore, nó sẽ không copy cái node_modules lỗi vào nữa)
COPY . .

EXPOSE 3000
CMD ["node", "server.js"]