# Use the official Node.js image as the base
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Install dependencies before copying the entire code to speed up builds
COPY package*.json ./

# Install only the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the development port (React defaults to port 3000)
EXPOSE 3000

# Start the React app in development mode
CMD ["npm", "start"]
