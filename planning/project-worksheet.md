# Project Overview

## Project Description

For project four of the General Assembly SEi course, I will be creating a full CRUD web application. I will create the frontend using Vue.

I will build a check in app for students that keeps track of their attendance for events.  Students will check in to every event they attend through the student dashboard via a username and password that they will create. There will be a home page where users can see all the events listed. When an Admin is signed in, they will have access to the admin dashboard where they can create, update, and delete an event.

PostMVP will include adding a pin to sign in for classes, as well as using the QR code generator API to have students log in by scanning a QR code from their phone. Post MVP will also include Admins being able to check off events that they have gone to.

A bg influence for this projects MVP are sites like [meetup](https://www.meetup.com/) where you can see who attended an event.

A big influence for this projects post MVP are check-ins for gyms, where a member would scan their keychain before entering the gym area.
 
I hope to be able to implement this app in my martial arts school, where sign-ins are made via pen and paper in a notebook. The instructor must manually review 3,6, or 12 months worth of entries for each student when it's time to take the test. By automating this process, it will be easier to track the students attendance.

Link to [Backend](https://github.com/RosmaryFC/p4backend)

## User Stories

- Users can log in
- Students can update their attendance for events they have attended via the student dashboard
- Admins can add, update, and remove events via the admin dashboard 
- All users can view homepage, where events will be located

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Fri-Sun, Sept 11-13, 2020 (Day 1-3)  | Project Description | Complete
|Mon, Sept 14, 2020 (Day 4)           | Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Complete
|Mon-Tues, Sept 14-15, 2020 (Day 4-5) | Backend: RestAPI MVP| Complete
|Mon-Tues, Sept 14-15, 2020 (Day 4-5) | Frontend: Home page / Login Modal | Complete
|Wed, Sept 16, 2020 (Day 6)           | Frontend: User page / Admin page| Complete
|Thurs, Sept 17, 2020 (Day 7)         | Frontend: CSS, MVP, bug fixes | Complete
|Fri-Sat, Sept 18, 2020 (Day 8-9)     | Post-MVP backend/frontend | Partial complete
|Sun, Sept 20, 2020 (Day 8)           | Update documentation | Complete
|Mon, Sept 21, 2020 (Day 8)           | Final Touches| Complete
|Tues, Sept 22, 2020 (Day 11)         | Present | Incomplete


## Wireframes -

Here are some pen and paper wireframes for desktop
- [home page](https://res.cloudinary.com/rosefc/image/upload/v1600179424/project%204/home%20page%20wireframe.jpg)
- [login/signup](https://res.cloudinary.com/rosefc/image/upload/v1600179424/project%204/login%20signup%20wireframe.jpg)
- [check in](https://res.cloudinary.com/rosefc/image/upload/v1600179424/project%204/check%20in%20wireframe.jpg)
- [admin dashboard](https://res.cloudinary.com/rosefc/image/upload/v1600179424/project%204/admin%20dashboard%20wireframe.jpg)


## Time/Priority Matrix

[Time/Priority Matrix](https://res.cloudinary.com/rosefc/image/upload/v1600115746/project%204/frontend_time_priority_matrix.png)

### MVP/PostMVP 

#### MVP 

- Student: Create an Account
- Student: update attendance for event
- Student: Log in
- Admin: Create an Account
- Admin: Log in
- Admin: Access Admin dashboard - can see events edit area
- Admin: Create/Read/Update/Delete Event
- Navigation Bar with Hamburger menu
- Mobile responsiveness first
- Deploy to netlify
- Homepage: Navbar, Footer, carousel, About, Events
- Create User/ Login page: Navbar, Footer, Login Module, Sign up or login area
- Admin dashboard: admins can update events here
- User dashboard: students can update their attendance here


#### PostMVP 

- User profile page with their progress status
- Attendance for classes
- Login: PIN
- Login: QR code
- Admin can select which students attended event 

## Functional Components 

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Navbar with Hamburger       | H | 1hr | 0hr | 0hr|
| Deploying Frontend          | H | .25hr | .25hr | -.25hr|
| Mobile Responsiveness       | H | 3hr | .5hr | .5hr|
| Home Page                   | M | 4hr| 6hr | 6hr |
| User Profile Page           | M | 2hr | 10hr | 10hr|
| Log in Page                 | H | 1hrs| 2hr | 2hr |
| Sign up                     | H | 1hr | 4hr | 4hr|
| Admin Page                  | H | 4hr | 10hr | 10hr|
| Total                       |   | 16hrs| 32.75hrs | 32.75hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Refactor                                     | L | 3hr | 2hr | 2hr|
| Check-in                                     | L | 2hr | -hr | -hr|
| Login: PIN                                   | L | 1hr | -hr | -hr|
| Login: QR Code                               | L | 4hr | -hr | -hr|
| Admin can view checkin attendance            | L | 4hr | -hr | -hr|
| Total                                        |   | 14hrs| 2hrs | 2hrs |

## Additional Libraries 

MVP
- [Merced-vuer](https://github.com/AlexMercedCoder/merced-vuer) - This is a command-line tool for generating Vue projects with router and the Buefy component library made by one of my amazing instructors [Alex Merced](https://www.alexmercedcoder.com/jslib/).
- [Beufy](https://buefy.org/)
- [Bulma](https://bulma.io/)
- [Vue](https://vuejs.org/v2/guide/)
- [Vue Router](https://router.vuejs.org/)


POST MVP

[QR API](https://www.qr-code-generator.com/qr-code-api/)


## Code Snippet - STILL BEING WORKED ON

Below is the template of a custom vue component that I built. I'm proud of it because I made it re-usable for creating and updating events! I learned how to pass data up and down from a parent vue to a child vue. I also learned how to incorporate my own componenets! 

```
<template>
    <section>
        <button class="button is-primary "
            @click="isCardModalActive = true">
            {{btnname}}
        </button>
        <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="card-content">
                    <section>
                        <b-field label="Title">
                            <b-input value="Kevin Garvey" v-model="name"></b-input>
                        </b-field>
                        <b-field label="Type">
                            <b-input value="Kevin Garvey" v-model="type"></b-input>
                        </b-field>
                        <b-field label="Flyer">
                            <b-input value="Kevin Garvey" v-model="flyer"></b-input>
                        </b-field>
                        <b-field label="Date">
                            <b-input value="Kevin Garvey" v-model="date"></b-input>
                        </b-field>
                        <b-field label="Time">
                            <b-input value="Kevin Garvey" v-model="time"></b-input>
                        </b-field>
                        <b-field label="Price" >
                            <b-input value="Kevin Garvey" v-model="price"></b-input>
                        </b-field>
                        <b-field label="Address">
                            <b-input value="Kevin Garvey" v-model="address"></b-input>
                        </b-field>
                    </section>
                </div>
                <button class="button is-primary is-medium"
                @click="saveModal">
                    Save
                </button>
                <button class="button is-primary is-medium"
                @click="closeModal">
                    Close
                </button>
            </div>

        </b-modal>

    </section>
</template>
```

## Issues and Resolutions

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object

**ERROR**: I could not run my server
```
Rosmarys-MacBook-Pro:p4frontend Rosemary$ npm run serve

> vuetemplate@0.1.0 serve /Users/Rosemary/Documents/LagccTechHire/webDev/1 General Assembly/seir-6-29/student/unit04/week11/day05/project4/p4frontend
> vue-cli-service serve

sh: vue-cli-service: command not found
npm ERR! code ELIFECYCLE
npm ERR! syscall spawn
npm ERR! file sh
npm ERR! errno ENOENT
npm ERR! vuetemplate@0.1.0 serve: `vue-cli-service serve`
npm ERR! spawn ENOENT
npm ERR! 
npm ERR! Failed at the vuetemplate@0.1.0 serve script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/Rosemary/.npm/_logs/2020-09-17T16_42_28_965Z-debug.log
```
**RESOLUTION**: I ran npm update and then tried to rerun again and it worked!
```
Rosmarys-MacBook-Pro:p4frontend Rosemary$ npm update

```
**ERROR**: I was trying to incorporate a modal but it kept getting an error
```
error  The "ModalForm" component has been registered but not used  vue/no-unused-components

```
**RESOLUTION**: I at first tried to incorporate the Modal directily into the view, but i got a "component is not getting pre-rendered" error. I then created a seperate componenet for the ModalForm, and imported that component into the view  I was using it in. I still got an error. I stripped the Modal down to a basic modal and then it worked!

https://stackoverflow.com/questions/59821385/component-has-been-registered-but-not-used-vue-no-unused-components


https://forum.vuejs.org/t/vue-2-0-warn-you-are-using-the-runtime-only-build-of-vue-where-the-template-compiler-is-not-available/9429

**ERROR**: I am successfully deleting my event but I get an error which will not allow my modal to close
```
DeleteModal.vue?ddf5:53 Uncaught (in promise) SyntaxError: Unexpected end of JSON input
    at eval (DeleteModal.vue?ddf5:53)
```
I believe it is because my delete request does not give me a response back, I'm not sure why, it was working before.
In my fetch request
```
	fetch(`${this.$route.query.URL}api/events/${this.event.id}/`, {
		method: 'delete',
		headers: {
			authorization: `JWT ${this.token}`
		}
	})
	.then(response => response.json())
	.then(data => {
		console.log('data', data)
		this.isCardModalActive = false
		this.$emit('deleteEvent', event)                        
	})
```
I have response => response.json(), but there is no response so it throws an error
**RESOLUTION**: I fixed my delete request method to return a response. 

**ERROR**: my switch element was showing whether user was logged in or not.
```
home token:  
Home.vue?76f2:60 home loggedIn:  false
Home.vue?76f2:61 home $URL: http://127.0.0.1:8000/
Home.vue?76f2:65 home token:  
Home.vue?76f2:66 home loggedIn:  false
Home.vue?76f2:77 events (4) [{…}, {…}, {…}, {…}, __ob__: Observer]
Home.vue?76f2:59 home token:  
Home.vue?76f2:60 home loggedIn:  false
Home.vue?76f2:61 home $URL: http://127.0.0.1:8000/
Home.vue?76f2:66 home token:  
Home.vue?76f2:67 home loggedIn:  false <---ACTUAL BOOLEAN
Home.vue?76f2:78 events (4) [{…}, {…}, {…}, {…}, __ob__: Observer]
Home.vue?76f2:59 home token:  
Home.vue?76f2:60 home loggedIn:  false
Home.vue?76f2:61 home $URL: http://127.0.0.1:8000/
Home.vue?76f2:66 home token:  
Home.vue?76f2:67 home loggedIn:  true <-------ACTUAL BOOLEAN
Home.vue?76f2:78 events (4) [{…}, {…}, {…}, {…}, __ob__: Observer]
Home.vue?76f2:59 home token:  
Home.vue?76f2:60 home loggedIn:  false
Home.vue?76f2:61 home $URL: http://127.0.0.1:8000/
Home.vue?76f2:65 home token:  
Home.vue?76f2:66 home loggedIn:  false
Home.vue?76f2:77 events (4) [{…}, {…}, {…}, {…}, __ob__: Observer]
```
**RESOLUTION**: I tested it by manually adding a true statement and a false statement. I realized that the reason the boolean wasn't working was because it was acually a string!

https://codippa.com/how-to-convert-string-to-boolean-javascript/#:~:text=JSON%20is%20a%20built%2Din,as%20true%20and%20false%20otherwise.


**ERROR**: I could not get the on click for a beufy switch to register
```
<b-switch :value="checkAttendance(event)" v-on:click="updateAttendance(event)" type="is-success">
attended
</b-switch>
```
**RESOLUTION**: After some research, I realized I should have read the documentation for the switch on beufy, it says to use click.native in order to get the on click to work
https://buefy.org/documentation/switch
```
<b-switch :value="checkAttendance(event)" v-on:click.native="updateAttendance(event)" type="is-success">
attended
</b-switch>
```
