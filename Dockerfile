FROM docker.arvancloud.ir/node:18-alpine

RUN npm install -g pnpm@10.10.0

WORKDIR /app

COPY package.json ./

RUN pnpm install

COPY . .

EXPOSE 3000

CMD pnpm build && pnpm start