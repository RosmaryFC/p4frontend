# **Hiraldo's Kai**

## [Link to Backend](https://github.com/RosmaryFC/p4backend)

***

## Project Snapshots STILL BEING WORKED ON


<details class="cursor">
<summary>Desktop View</summary>
<img src="https://res.cloudinary.com/dpggcudix/image/upload/v1598748671/Screen_Shot_2020-08-29_at_8.43.01_PM.png_20-49-28-430_hoyxmy.png" width="400" height= "150">
<img src="https://res.cloudinary.com/dpggcudix/image/upload/v1598748671/Screen_Shot_2020-08-29_at_8.43.35_PM.png_20-49-31-670_qbdnzm.png" width="400" height= "150">
<img src="https://res.cloudinary.com/dpggcudix/image/upload/v1598748671/Screen_Shot_2020-08-29_at_8.45.13_PM.png_20-49-35-575_safobt.png" width="400" height= "150">
</details>
<details class="cursor">
<summary>Mobile View</summary>
<img src="https://res.cloudinary.com/dpggcudix/image/upload/v1598748671/Screen_Shot_2020-08-29_at_8.46.01_PM.png_20-49-38-775_hxojlh.png" width="200" height= "320">
<img src="https://res.cloudinary.com/dpggcudix/image/upload/v1598748671/Screen_Shot_2020-08-29_at_8.46.19_PM.png_20-49-41-642_fz764y.png" width="200" height= "320">
</details>

***

## Website Link

[frontend](https://hiraldokai.netlify.app/) 


[backend](https://rf-p4backend.herokuapp.com/)

***


## Description


Checking into events for students will be much easier now with the ability to select which event you went to based on your profile!

Hiraldo's kai has incorporated a login system for students to always be up to date with upcoming events as well as attendance!

Students can log in and select which events they have attended in order to meet requirements for belt advancement.

Admin users can Create, Update or Delete events once they are no longer needed.

Hiraldo's Kai is a great place to stay up to date with school events and the martial arts community.


The frontend is made with HTML, CSS, JavaScript, and Vue. We also used the BootStrap library and FontAwesome to choose a variety of icons. It is deployed through Netlify. 

***

## Technologies


[<img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png" width="50" height="50">](https://www.w3schools.com/html/)
[<img src ="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png" width="50" height="50">](https://www.w3schools.com/css/)
[<img src ="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" width="50" height="50">](https://www.javascript.com/)
[<img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" width="50" height="50">](https://vuejs.org/)
[<img src="https://buefy.org/static/img/buefy.1d65c18.png" width="50" height="50">](https://buefy.org/)
[<img src ="https://www.netlify.com/img/press/logos/logomark.png" width="50" height="50">](https://www.netlify.com/)

***

## Features


- Users can create an account only if they have a secret key given to them by the school
- Users can create either an admin account or a student account
- admins can create events that will show up on the home page for anyone to see
- admins can also update and delete events
- admins are also students and have all the functionality a student would have
- students can update their attendance for each event they have gone to
- events are displayed on the home page for everyone to see!

***

## Future Implementation


- daily check-in to beginner, intermediate, advanced classes
- user can upload a flyer for an event
- daily check-in with QR code
- User dashboard will have user status (belt, rank, personal info, requirements for advancement, attendance)
- admin can modify  event attendance, and modify or update student user status's
- Nicer frontend design

***

## Inspirational Designs


Link To Site  | One Thing I'd Like To Incorporate | Initial Research On That Item
| ------------- | ------------- | ------------- |
| [https://www.ufcgym.com/](https://www.ufcgym.com/)| Although I feel their website is very cluttered, I like the color scheme and the animations, as well as the pictures! I would like to incorporate a similar color scheme as well as pictures!| Since I am building an app based off of my martial arts school, I'm basing it off of how the instructor and the students would use this website, but design wise, I thing ufcgym has a lot of things I would like to incorporate!|
|[http://www.hiraldoskai.com/](http://www.hiraldoskai.com/) |This is inspiration for what I want to fix! This is not a good website for martial arts school and it has been this way for 3 or more years! | As a student myself, I think if what I expect a website to have, my user experience, and I go based off of that. |

***

## The Frontend

Each Page consists of a navbar, a View, and a footer

### Home View

The homepage view has a carousel of images, a small about area, and lists all the upcoming events happening with details. 

### Login View

The login view has a form where the user would insert their username and password. Once logged in, the user will either be routed to the admin dashboard or the student dashboard.

### Sign up View

The sign up view has a form where the user would insert their full name, email, username, password, and secret key given to by the instructor. Only students from the school can create a user.

### Admin Dashboard View

The admin dashboard can only be access when an admin is logged in. The dashboard allows admin users to create, update, or delete events.

### User Dashboard View

The user dashboard can be accessed by any signed in user. The dashboard allows users to create or delete their attendance for events.