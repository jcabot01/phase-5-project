# Class-o-poly

![](https://media.giphy.com/media/jmf0eduszYFNtnJyIq/giphy.gif)


## Intro
This application has 'gamified' student work habits, behavior, and personal finance.  Players must manage their behavior, as well as their money, to play this year-long game of boom and bust.  Class-o-poly was composed using PostgreSQL, Ruby on Rails, ReactJS, ReduxJS, Material UI v.5, and Material UI X-Datagrid.

## User Journey
When users arrive at Class-o-poly they are given a choice of "student" or "teacher" to login or signup.  When logging in as a student, they are immediately navigated to their profile page.  The Student Profile page, shows students their progress in the game; assets accumluated, current $ balance, goals, etc.  Additionally, students are able to update their avatar by clicking on their current avatar. For each new asset or privilege accumlated, students receive an icon on their avatar to encourage their financial behavior.  Also, students are encouraged to write a new goal each month related to what they want to acommplish; ex. "This month I would like to get a better job that pays more so that I can buy more privileges".  Yes, in this game, students have jobs with salaries, and they are able to spend their earnings on privileges such as "Snack Cards", "Music Cards" (they get to pick the classroom playlist), and lastly the "Investment Fund"; which provides an opportunity for students to risk their money for a potential double of their investment.  A detailed list of rules and functionality is provided for the teachers when they login.  

Once a Teacher logs in, they are navigated to the rules and timelines page.  Once they feel comfortable, they may use the hamburger-menu button to navigate to the Global Student Edit page.  The Global Student Edit page provides a data table (MUI Datagrid) in which the teacher can perform the game with the help of the students.  The teacher can edit nearly every attribute of the student, as well as perform the functions of the game; assign students jobs, pay students their salary, rent a desk, buy a desk, collect rent on desk, buy a privilege, and delete a student entirely.  Essentially, the teacher model functions as the admin; they have complete control over the students.  Following the rules and timelines throughout the school year, the student with the highest balance consisting of cash and liquidation-value of asssets is determined to be the WINNER!

## Supporting Tech

As stated before, this app features PostgreSQL, Ruby on Rails API, ReactJS, ReduxJS, and Material UI:
- Ruby "2.7.4"
- Rails '~> 6.1.3', '>= 6.1.3.2'
- PostgreSQL '~> 1.1'
- React "^17.0.2"
- React-router-dom "^6.3.0"
- React-Redux "^8.0.2"
- "@reduxjs/toolkit": "^1.8.3",
- "@mui/material": "^5.9.1",
- "@mui/x-data-grid": "^5.13.1",
- NodeJS (v16), and npm
- Heroku CLI
---there's plenty of other dependencies, be sure to check them out (package.json & Gemfile, respectively) in the [GitHub] repo if you have any questions.

## Installation

Check above for the supporting tech.  Make sure you have those versions installed on your local machine.  

```sh
cd "Your Folder of Choice---this is not code"
git clone git@github.com:jcabot01/phase-5-project.git
cd phase-5-project
bundle install
npm install --prefix client
```

You can use the following commands to run the application:

- run the backend on http://localhost:3000
 ```sh 
rails s
```
- run the frontend on http://localhost:4000
```sh
npm start --prefix client
```

## Deployment
The app is deployed, however it is strictly being licensed to school clients at the moment.  Here is a link to the YouTube walk-through: https://youtu.be/4IIus_EDyTE 

## Planning and Design
Here is the Canva link to the design deck I did prior to coding:  <a href="https://www.canva.com/design/DAFGcb3vBrc/0dVhapFy6qU7wjIyf1zEwA/view?utm_content=DAFGcb3vBrc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Design Deck</a>

## License

MIT


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [GitHub]: <https://github.com/jcabot01/phase-5-project.git>

