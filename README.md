# NYT Article Search

This is a React-based application that uses the New York Times API to allow users to search for articles based on a title and a range of years.  The application is powered by MongoDB and allows the user to save their favorite articles.  The user is prompted to enter a search topic, a start year, and an end year, which the NYT API uses to return 9 articles and allows the user to save articles to view later.


![NYT Logo](client/public/nyt.png "NYT Logo")



The website is can be found here: [NYT Article Search](https://glacial-hollows-18585.herokuapp.com/ "deployed application")

## Features

NYT Article Search has two main features:

- Search the NYT article database by topic, start year, and end year
- Save your favorite articles

## Downloading the Application

This web application requires Node.js, MongoDB, and npm/yarn to run.  If all of these are installed on your computer, follow these steps:

```
git@github.com:zachha/NYT-Article-Search.git
```

1. Clone the above repo to your machine

2. Navigate inside the project and install your  back-end node dependencies by typing:

```
yarn install
```

2. Navigate inside the client folder and install your front-end dependencies by typing:

```
cd /client
yarn install
```

4. Use your command line to navigate back to the root project folder and start server and react front end by using yarn:

```
cd ..
yarn start
```

4. If successful, your CLI will show you what port the server is running on as well as what server the application is using.  The application should automatically open in your browser as well. Enjoy!


## Libraries and Technologies
* [React.js](https://reactjs.org/ "React.js")
* [MongoDB](https://www.mongodb.com/ "MongoDB")
* [Mongoose.js](http://mongoosejs.com/ "Mongoose.js")
* [Node.js](https://nodejs.org/en/ "Node.js")
* [Express.js](https://expressjs.com/ "Express.js")
* [npm](https://www.npmjs.com/ "npm")
* [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/ "Bootstrap 4")
* [Reactstrap](https://reactstrap.github.io/ "Reactstrap")
* [axios](https://www.npmjs.com/package/axios "axios")
* [body parser](https://www.npmjs.com/package/body-parser "body parser")
* [Heroku](https://dashboard.heroku.com "heroku")

## Things to Come

I have a list of planned improvements that I'm working on:

- Removing the card and/or adding popup to tell user that an article has been saved

- Allow users to put comments on saved articles

- Limit articles to ~10 per page with button to see previous/next 10

- UI improvements/Style Changes

## Contact Info
	
##### **Zach Harmon [Github](https://www.github.com/zachha) - Full-Stack Developer**
##### zachha@gmail.com
	