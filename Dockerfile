# Build vue project
FROM node:lts-alpine 

# installing server
RUN npm install -g http-server

# for refering till apps mapp
WORKDIR /app

# Copying from local file system to docker Image
COPY package.json ./

# installing all npm node  packages
RUN npm install

# Copying all the code current working directory
COPY . .
# build the project
RUN npm run build


#STEP 2
EXPOSE 8080

CMD [ "http-server", ".dist/" ]