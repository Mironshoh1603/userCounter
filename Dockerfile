#MAin Apps
FROM node:alpine3.15



#add dependency
WORKDIR /usr/visits
COPY ./ ./
Run npm install

#Run command
CMD [ "npm","start" ]