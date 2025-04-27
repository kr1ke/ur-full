# Build stage
FROM node:20-alpine as build-stage

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Generate static files
RUN npm run generate

# Production stage with Nginx
FROM nginx:stable-alpine as production-stage

# Copy built static files from build stage to nginx serve directory
COPY --from=build-stage /app/.output/public /usr/share/nginx/html

# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 5555 instead of 80
EXPOSE 5555

# Configure Nginx to listen on port 5555
RUN sed -i 's/listen\s*80;/listen 5555;/g' /etc/nginx/conf.d/default.conf

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
