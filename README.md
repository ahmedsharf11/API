# API

This Project is for Advanced lab 7th sem .

"F el Cinema" is an App to show what are the current movies in the cinema and is done using nodejs and mongodb ,
the aim of this servise is to get the new movies in cinema now , our app request moviedb API and store the results 
in a Database (Mongodb)

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

After running these commands you should get the result as a list of New Movies in cinema Now .





