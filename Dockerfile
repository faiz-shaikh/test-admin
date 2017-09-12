# Set the base image
FROM node:alpine

# Set the Working directory
WORKDIR /home/application

# Copy depencency manager file
#COPY package.json .

# Install dependencies
RUN npm install cross-env

# Bundle application source
COPY ./build .

# Expose 3000 port
EXPOSE 3000

# Start the application
CMD npm run start:$FLIGHTS_CACHE_ADMIN_PROFILE
