# Spoon

A Tinder-like swiping web app that matches users based on food preferences. Utilizing React, Yelp API, React-Spring-Hooks, Leaflet Maps API, Rails, Postgres

In this repository, you will find the frontend for this project built with React JS. The Rails backend is located: [here](https://github.com/danherrera0/SPOON_Server)

📌 Swipe away and check it out live: https://letzspoon.netlify.com

- TO SEE OUR WEB APP IN ACTION, view the [demo on YouTube](https://www.youtube.com/watch?v=OA4ye_u4Gfc)

### Dashboard Page

![Spoon1](https://raw.githubusercontent.com/diaaanek/lets-spoon/master/public/spoon.png)

### My Plate

![Spoon2](https://raw.githubusercontent.com/diaaanek/SPOON/master/public/myplate.png)

## 🎯 Stretch Goals

- Open Table API
- Implement social authentication

## 🛠 Built With

- [Javascript](https://www.javascript.com/)
- [React](https://reactjs.org/)
- [Ruby on Rails](https://rubyonrails.org/)
- [Postgres](https://www.sqlite.org/)

## 📑 Installation Guide

In this repository, you will find the front-end for this project built with React JS.

The Rails/Postgres back-end is located: [here](https://github.com/danherrera0/SPOON_Server)

Our API is live and running restaurant [data](https://spoon-server.herokuapp.com/api/v1/restaurants)

### (1) Run API

If you prefer to get started locally, fork and clone [this](https://github.com/danherrera0/SPOON_Server) repo to have the server up and running.

Install all dependencies and necessary gems:

`bundle install`

This app uses Postgres, create database scheme with migrations:

`rake db:create`

Seed database:

`rake db:seed`

Start local server:

`rails s`

### (2) Fork the front end repo

In the project directory, located: [here](https://github.com/diaaanek/lets-spoon), you can run:

`npm i && npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### 💻 Supporting Versions

- Ruby 2.0.0, 2.1.x, 2.2.x, 2.3.x
- React

### 🤩 Contributing

Contributions are welcomed! Fork, fix, then send a pull request.

Bug reports and pull requests are welcome on GitHub at [Spoon repo](https://github.com/diaaanek/lets-spoon), please open Issues to provide feedback.
