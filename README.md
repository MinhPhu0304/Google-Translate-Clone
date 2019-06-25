This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Google translate clone
>  With the help of Azure cognitive service.

#### Tasklist: 
- [x] call translate api
- [x] show translated word to the screen
- [x] adding naviagtion for single page application
- [x] Make nice UI  - (I tried)
- [ ] login?? -  maybe using Auth0
- [ ] Add content for other pages

## I. Getting started

Assumption: you already have nodeJS installed

1. Open the terminal then run ```npm install``` to install all dependencies
1. Getting Azure translate text Api key from [here](https://docs.microsoft.com/en-us/azure/cognitive-services/translator/translator-text-how-to-signup)
2. Create a environment variable:
    * Navigate to backend folder 
    * Create a new file and name it .env - has to be exact name
    * open the file using your favourite code editor then add 
    ```azureKey=YOUR_KEY_IN_HERE```
3. Open your terminal.
4. Navigate into directory of the project
5. run this command ```npm start```
6. Open web browser ```localhost:WHATEVER_THE_PORT_THE_TERMINAL_SAY```

## II. Q&A
### 1. Q: Why?
    A: Just for fun
I did this for learn more about cloud computing and getting used to call api from the "cloud"
### 2. Q: Google might contact you for copying their ideal. Are you not scared?
    A: I hope not. But this is just a simple little project so I think they won't do anything

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

### Deployment
 You are on your on about this :fire:
