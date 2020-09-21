# Project Overview

## Project Description

For project four of the General Assembly SEi course, I will be creating a full CRUD web application. I will create the frontend using Vue.

I will build a check in app for students that keeps track of their attendance  Students will check in to every class they attend via a username and password that they will create. There will be a home page where users can see all the events listed. When an Admin is signed in, they will have access to the admin dashboard where they can create, update, and delete an event. Admin will be able to see the percentage of attendance each student has. 

PostMVP will include adding a pin to sign in, as well as using the QR code generator API to have students log in by scanning a QR code from their phone. Post MVP will also include Admins being able to check off events that they have gone to.

A big influence for this project are check-ins for gyms, where a member would scan their keychain before entering the gym area.
 
I hope to be able to implement this app in my martial arts school, where sign-ins are made via pen and paper in a notebook. The instructor must manually review 3,6, or 12 months worth of entries for each student when it's time to take the test. By automating this process, it will be easier to track the students attendance.

Link to [Backend](https://github.com/RosmaryFC/p4backend)

## User Stories

- Users can log in
- students can check in for class via a specific URL
- admins can add, update, and remove events that will be shown on homepage
- admins can view overall attendance percentage for students
- All users can view homepage, where events will be located

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Fri-Sun, Sept 11-13, 2020 (Day 1-3)  | Project Description | Complete
|Mon, Sept 14, 2020 (Day 4)           | Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Complete
|Mon-Tues, Sept 14-15, 2020 (Day 4-5) | Backend: RestAPI MVP| Incomplete
|Mon-Tues, Sept 14-15, 2020 (Day 4-5) | Frontend: Home page / Login Modal | Incomplete
|Wed, Sept 16, 2020 (Day 6)           | Frontend: check-in page / Admin page| Incomplete
|Thurs, Sept 17, 2020 (Day 7)         | Frontend: CSS, MVP, bug fixes | Incomplete
|Fri-Sat, Sept 18, 2020 (Day 8-9)     | Post-MVP backend/frontend | Incomplete
|Sun, Sept 20, 2020 (Day 8)           | Update documentation | Incomplete
|Mon, Sept 21, 2020 (Day 8)           | Final Touches| Incomplete
|Tues, Sept 22, 2020 (Day 11)         | Present | Incomplete


## Wireframes - STILL BEING WORKED ON

Here are some pen and paper wireframes for desktop
- [home page](https://res.cloudinary.com/rosefc/image/upload/v1600179424/project%204/home%20page%20wireframe.jpg)
- [login/signup](https://res.cloudinary.com/rosefc/image/upload/v1600179424/project%204/login%20signup%20wireframe.jpg)
- [check in](https://res.cloudinary.com/rosefc/image/upload/v1600179424/project%204/check%20in%20wireframe.jpg)
- [admin dashboard](https://res.cloudinary.com/rosefc/image/upload/v1600179424/project%204/admin%20dashboard%20wireframe.jpg)

---- 
Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

- [Mobile](https://git.generalassemb.ly/SEIR-629/project-1-portfolio/blob/master/readme-assets/mobile.png)
- [Tablet](https://git.generalassemb.ly/SEIR-629/project-1-portfolio/blob/master/readme-assets/nav-highlight.gif)
- [Desktop](https://git.generalassemb.ly/SEIR-629/project-1-portfolio/blob/master/readme-assets/desktop.png)

Wireframing Resources:

- [Mockflow](https://mockflow.com/app/#Wireframe)
- [Figma](https://www.figma.com/)


## Time/Priority Matrix

[Time/Priority Matrix](https://res.cloudinary.com/rosefc/image/upload/v1600115746/project%204/frontend_time_priority_matrix.png)

### MVP/PostMVP 

#### MVP 

- Student: Create an Account
- Student: check-in to class
- Student: Log in
- Admin: Create an Account
- Admin: Log in
- Admin: Access Admin dashboard - can see student status
- Admin: Create/Remove/Update/Delete Event
- Navigation Bar with Hamburger menu
- Mobile responsiveness first
- Deploy to netlify
- Homepage: Navbar, Footer, carousel, About, Events
- Create User/ Login page: Navbar, Footer, Login Module, Sign up Module
- Check in page: Navbar, Footer, check in module, list of checked in students
- Admin dashboard: student status list, add upcoming event

#### PostMVP 

- User profile page with their progress status
- Login: PIN
- Login: QR code
- Admin can select which students attended event 

## Functional Components 

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Navbar with Hamburger       | H | 1hr | -hr | -hr|
| Deploying Frontend          | H | .25hr | .25hr | -hr|
| Mobile Responsiveness       | H | 3hr | -hr | -hr|
| Home Page                   | M | 4hr| -hr | -hr |
| Check In Page               | M | 2hr | 2hr | -hr|
| Log in                      | H | 1hrs| 2hr | -hr |
| Sign up                     | H | 1hr | -hr | -hr|
| Admin Page                  | H | 4hr | -hr | -hr|
| Total                       |   | 16hrs| -hrs | -hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Refactor                                     | L | 3hr | -hr | -hr|
| User Profile                                 | M | 2hr | -hr | -hr|
| Login: PIN                                   | L | 1hr | -hr | -hr|
| Login: QR Code                               | M | 4hr | -hr | -hr|
| Admin can select which students attend event | L | 4hr | -hr | -hr|
| Total                                        |   | 14hrs| -hrs | -hrs |

## Additional Libraries 
[Vue](https://vuejs.org/)
[QR API](https://www.qr-code-generator.com/qr-code-api/)
[Bootstrap](https://getbootstrap.com/)
[Beufy](https://buefy.org/)
[Bulma](https://bulma.io/)

## Code Snippet - STILL BEING WORKED ON

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

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
