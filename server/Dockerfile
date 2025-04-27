FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Configure npm to use Google DNS and increase network timeout/retry settings
RUN npm config set registry http://registry.npmjs.org/ && \
    npm config set dns_servers 8.8.8.8,8.8.4.4 && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose the port the app runs on
EXPOSE 4444

# Command to run the application
CMD ["node", "src/index.js"]
