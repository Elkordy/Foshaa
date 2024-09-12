# Use the official Node.js image
FROM node:22

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Update npm registry and clean cache, then install dependencies
RUN npm config set registry https://registry.npmjs.org/ \
    && npm cache clean --force \
    && npm install

# Copy the rest of the application code
COPY . .

# Copy the APK file using an absolute path
COPY fosha.apk ./mobile-app/fosha.apk

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]

