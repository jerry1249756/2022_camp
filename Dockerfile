FROM node:14.17-alpine
WORKDIR /app

# Install app dependencies
COPY ./backend ./backend
COPY ./frontend/build ./frontend/build
COPY ./index.js ./index.js
COPY package*.json ./
COPY backend/package*.json ./backend/
RUN yarn install-backend

# Bundle app source
ENV NODE_ENV=production
ARG MONGO_URL
ENV MONGO_URL=${MONGO_URL:-}
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=${REACT_APP_API_URL:-}

EXPOSE 2022
CMD [ "node", "index.js" ]