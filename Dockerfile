FROM node

WORKDIR /app 

COPY package.json /app

RUN npm install

COPY . .
# эквивалентно COPY . /app

ENV PORT 3000

EXPOSE $PORT

VOLUME [ "/app/data" ]

CMD ["node", "index.js"]