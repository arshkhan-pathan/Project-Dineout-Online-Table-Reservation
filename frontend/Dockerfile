# Frontend Dockerfile (React for Development)
FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose React's default port
EXPOSE 3000

# Run the development server
CMD ["npm", "run", "dev"]
