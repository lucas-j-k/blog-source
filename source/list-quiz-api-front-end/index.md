---
title: List Quiz App
date: 2018-07-18 21:07:01
subtitle: A REST API server and separate front end client in React
seo_title: List Quiz App | React | Javascript | Express
description: A REST API server and separate front end client in React
custom_stylesheet:
type: project
slug:
thumbnail: https://res.cloudinary.com/duua3lsu1/image/upload/v1531948343/list-quiz-thumb.jpg
show_portfolio_links:
github_link: https://github.com/lucas-j-k/list-quiz-front-end
live_link: https://list-quiz-front-end.herokuapp.com/
technologies: [React, Javascript, CSS, Sass, Sequelize, Express]
---

![Header thumbnail for page](https://res.cloudinary.com/duua3lsu1/image/upload/v1531948343/list-quiz-thumb.jpg "Header Thumbnail")

A quiz app, to aid with memorising lists of information.

## Back end (API)
The lists are stored in a MySQL database, and I built a REST API server in Express to serve the lists to the front end. I used Sequelize as the ORM to connect to the database and manage migrations, data seeds and models.

The endpoints for the API are as follows:

**api/list** - display names and IDs of all lists in database  

**api/list/{id}/** - display name and ID of a single list based on id parameter  

**api/list/{id}/entries** - display plain text entries in a particular list based on list id  

**api/list/{list id}/entries?transformation={transformation id}** - display the plain text list entries and a modified version, based on the transformation ID passed in (e.g remove consonants, remove the middle of the words). This is used to build the question and answer logic on the front end.

![Screenshot of API JSON result](https://res.cloudinary.com/duua3lsu1/image/upload/v1532734034/blog/list-quiz-api-screenshot-1.jpg "Screenshot of API JSON result")

The transformations are algorithms which run as part of the server response, based on the transformation ID passed into the URL.

<hr />


## Front End (React App)
The front end is a standalone React app, built with the standard Create-React-App template.

![Screenshot of React front end](https://res.cloudinary.com/duua3lsu1/image/upload/v1532734237/blog/list-quiz-front-end-screenshot-1.jpg "Screenshot of React front end")

When the main App component is mounted, it fetches the list data from the API. Once the user chooses a list to run the quiz on, the app sends another request for the requested list ID, and uses this to create the question prompts and answers.

All of the quiz logic happens in React.
