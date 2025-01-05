# Backend
FROM maven:3.8.5-openjdk-17 AS backend-build
WORKDIR /app
COPY backend/ ./
RUN mvn clean package -DskipTests

# Frontend
FROM node:18 AS frontend-build
WORKDIR /app
COPY src/ ./src/
COPY public/ ./public/
COPY package.json ./
RUN npm install && npm run build

# Final Image
FROM openjdk:17
COPY --from=backend-build /app/target/backend-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
