# Use the official Node.js image (Alpine version)
FROM node:22-alpine AS builder

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the application (if applicable)
# RUN npm run build

# Use a smaller base image for the final image
FROM node:22-alpine

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy only the necessary files from the builder stage
COPY --from=builder /usr/src/app .

# Copy the APK file using an absolute path
COPY fosha.apk ./mobile-app/fosha.apk

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]

