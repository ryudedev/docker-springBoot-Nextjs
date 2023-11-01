FROM ubuntu:latest
WORKDIR /app/demo
COPY ./demo /app/demo
RUN apt update 
RUN apt install -y openjdk-17-jdk
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
CMD [ "java", "--version" ]
RUN ./mvnw clean package
EXPOSE 8080