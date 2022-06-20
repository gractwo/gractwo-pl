FROM node:16.10.0
WORKDIR /app
COPY ./ ./
RUN npm install
CMD ["npm", "run", "build"]