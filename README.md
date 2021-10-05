#  ACTSERV frontend

#### This a frontend for passwordless authentication,  09/06/2021

#### By **Eston Kagwima**

## Description
This is a front end created with react that connencts to a django rest API  to enable a user to login without using a password instead, a token is sent to them in their email or mobile number depending on the one they choose to log in with. Upon registration a user is also sent a confirmation email to verify their email address


### User stories Specification
- When a user enters their email or phone number Django should detect if a user exists or not.

- If the user exists with that email it sends them both an OTP and a magic link with the URL having both a OTP and the user email;

- For an existing user, after the user enters their email or phone number, it should redirect them to enter the OTP;

- For a new user, it should prompt the user to confirm their new account creation details then send out the same, OTP for phone number registration and both OTP and magic link for an email account registration;

- For users using their phone number it sends only the OTP.


- It uses the sent back credentials either OTP or URL to create JWT which will be used  to authenticate the user. The magic link  automatically logs in the user.

 - Twillio account is usedfor sending out the SMS OTP.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## link to live site on heroku

## Support and contact details

| Eston | ekagwima745@gmail.com |
| ----- | --------------------- |

### License

License
[MIT License](https://choosealicense.com/licenses/mit/)
Copyright (c) 2021 Eston Kagwima
