# API

This Project is for Advanced lab 7th sem .

F el Cinema is an App to show what are the current movies in the cinema and is done using nodejs and mongodb 

To run Code dependencies for our app we used nodejs and npm to install the dependencies :

we can install the dependencies without using docker by :
```
$ npm install
```
and then run our main app by :
```
node index.js
```

With docker we can install the dependencies and run main app  ``` index.js ``` 
```
docker-compose up
```
The dependencies wrote in the  ``` package.json ```  and ``` package-lock.json ``` and passed to ``` Dockerfile ```
and ``` docker-compose.yml ``` contains the services in our app (app and mongodb)





