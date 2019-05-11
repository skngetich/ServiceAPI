# ServiceAPI

## Question 1 

Install packages
`npm install`

 To Run Test :`npm test` or `mocha`

## Question 2

Install packages
```
npm install
```

Routes that protected:
`/api` : to access the the routes you need to send a **JWT token** 
 `secret_token` in the  **param** when sending the request
 
  `http://localhost:4000/api/carmodel/blue?secret_token={{jwt_token}}`
 

To get jwt you need to sign up
`/signup` 
Pass in 
```
{
	"email" :"a valid email", 
	"password" :"you password" 
} 
```
Then

Head to `/login` to login and pass in `email` and `password`. You will get a jwt token on successfull authentication

## Question 3

Install packages
```
npm install
```
Run Test


`npm test` or `mocha`
