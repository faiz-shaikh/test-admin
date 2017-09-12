# Set the base image
FROM node:alpine

# Set the Working directory
WORKDIR /home/application

# Copy depencency manager file
COPY package.json .

# Install dependencies
RUN npm install

# Bundle application source
COPY . .

# Expose 3000 port
EXPOSE 3000

RUN echo $FLIGHTS_CACHE_ADMIN_PROFILE

# Start the application
CMD [ "npm", "run", "build" ]
