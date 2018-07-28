---
title: Capital Cities Quiz
github_link: https://github.com/lucas-j-k/geo-quiz
live_link: http://geo-quiz-react.herokuapp.com/
technologies: [React, Javascript, CSS]
date: 2018-07-01 14:49:08
subtitle: React app, creating a randomised quiz from Rest API data
seo_title: Capital Cities Quiz
description: A React app, creating a randomised quiz from Rest API data
custom_stylesheet:
type: project
slug:
thumbnail: https://res.cloudinary.com/duua3lsu1/image/upload/v1530453386/blog/capital-quiz-thumb.jpg
show_portfolio_links:
---

![Capital Cities Quiz thumbnail](https://res.cloudinary.com/duua3lsu1/image/upload/v1530453386/blog/capital-quiz-thumb.jpg)

A React app made as an example of loading and using data from an external public API.

When the app loads, it fetches data on the capital cities of the world from the [REST Countries API](https://restcountries.eu/rest/v2/all?fields=name;capital), filtered down to return a list of the country names and their capital cities.

The returned JSON is then stored in the parent App state. Each time a new question is requested, the app picks a random country from the state data, renders the country name as the prompt, and gives the correct answer and three additional random incorrect answers to choose from.

The animation on the scoreboard tabs is a CSS keyframe definition, which is fired by passing a *className* down to the Scoreboard component. This is then added to the relevant tab, depending on if the previous answer was correct or incorrect.
