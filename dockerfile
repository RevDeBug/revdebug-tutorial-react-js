# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

ARG REVDEBUG_SERVER_HOSTNAME_COMMAND

RUN npm config set @revdebug:registry https://nexus.revdebug.com/repository/npm/
RUN npm install
RUN npm install @revdebug/revdebug

# Copy the rest of the application files
COPY . .

RUN npx revd ${REVDEBUG_SERVER_HOSTNAME_COMMAND}

# Build the React app
RUN npm run build

# Use a lightweight web server to serve the built React app
FROM nginx:alpine

# Copy custom Nginx configuration to the correct directory
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build folder from the previous step
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80 to the outside
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
