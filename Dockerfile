FROM node:16.10.0
WORKDIR /app
COPY ./ ./
CMD ["npm","install"]
CMD ["npx","next","build"]
CMD ["npx","next","start"]
