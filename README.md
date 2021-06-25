# Realm Digital Simple Practical Assessment

## Birthday-Wishes-To-Employee


## Tasks
Design and implement a service component that will send birthday wishes to employees.

The service must extract a list of employees whose birthdays occur today using the Realm Digital Employee API
and create a generic message E.g. “Happy Birthday {name 1}, {name 2}” and send the message to an email
address configured for the component | ✔ 


The following needs to be considered:
* Leap year | ✔ 
* Employee exclusions. An exclusion can be any of the following: 
  * The employee no longer works for Realm Digital | ✔ 
  * The employee has not started working for Realm Digital | ✔ 
  * Or the employee has been specifically configured to not receive birthday wishes | ✔ 


The component must support being executed at most once for a specific employee’s birthday wish, regardless of
how many times the service is scheduled to run on a specific day | ✖️

Architecturally, the solution must be designed to support additional messaging functionality such as sending work
anniversary messages.| ✔

Note: The work anniversary requirement does not need to be coded but the solution design should cater for the
additional requirement 


## Setting up and running
### With NPM 
1. Assuming `NPM` is already installed in your local machine.
2. Clone the project.
3. Create .env file in the root directory.
4. Set the PORT to 5000, EXTERNAL_API_BASE_URL to `"https://interview-assessment-1.realmdigital.co.za"` (external api), SENDER_EMAIL (use the gmail account to Send emails from), SENDER_PASSWORD (password of the gmail account) and RECEIVER_EMAIL (any email address to send the emails too - assuming employee email) in your .env file.
5. Disable `Less Secure` of your gmail account. <a href="https://nodemailer.com/usage/using-gmail/" target="_blank">Documentation</a> (Easy Step).
6. Open the project diroctory in your terminal/command and run ➡️ `npm install` to get all dependencies
7. Run ➡️ `npm run dev`
8. Go to your faviourte browser and visit this url `localhost:5000/greeting`.

### With Docker
1. Assuming `docker` is already installed in your local machine.
2. Perfom number 1, 2, 3, and 4 from npm section 🆙
3. Open the project diroctory in your terminal/command and run ➡️ `docker-compose build`
4. Run ➡️ `docker-compose up -d`
5. Go to your faviourte browser and visit this url `localhost:5000/greeting`.

## Sample Response:
`[{"isSent":true,"message":"Successfully Sent!","employeeName":"Lizbeth"},{"isSent":true,"message":"Successfully Sent!","employeeName":"Eura"}]`
  


## Technology / tools
- Node.js (Express Framwork)
- Typedi
- Axios
- Nodemailer
- Docker
- Moment
- Mocha 
- Chai 
- Supertest 


## Author
<a href="https://linkedin.com/in/alihewiagh37" target="_blank">Ali Algmaty</a> – alihewaigh@gmail.com
