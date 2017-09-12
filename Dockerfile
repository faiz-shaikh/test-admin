# Set the base image
FROM node:alpine

# Set the Working directory
WORKDIR /home/application

# Copy depencency manager file
COPY package.json .

# Install dependencies
RUN npm install

# Bundle application source
COPY ./build .

# Expose 3000 port
EXPOSE 3000

# Start the application
CMD cross-env NODE_ENV=$FLIGHTS_CACHE_ADMIN_PROFILE node server
