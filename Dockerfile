# Set the base image
FROM node:alpine

# Set the Working directory
WORKDIR /home/application

# Copy depencency manager file
COPY package.json .
COPY yarn.lock .

# Install dependencies
RUN yarn install --$FLIGHTS_CACHE_ADMIN_PROFILE

# Bundle application source
COPY . .

# Expose 3000 port
EXPOSE 3000

# Start the application
CMD npm run start:$FLIGHTS_CACHE_ADMIN_PROFILE
