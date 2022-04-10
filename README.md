# WhatsApp Web Client

This project use react and bootstrap.
The following is a list of the modules the project uses:
- react-bootstrap
- react-router-dom

## Code Structure

The Webclient contains 3 main section:
- Signin - Default page, If the connection succeeds there is a fluid transfer to the 'Chat' page, otherwise an error will appear. If the user is not registered there is a button that transfers to the 'Signup' page.
- Signup - page for registering to the website user need to input a user name and a password that contains numbers and letters otherwise. the signup woludnt be succssful when all d
- Chat. - the main part of the site after logIn of an existing user or signUp for a new user we get the chat screen whice contians a defult chat log between of some alredy registerd user and you can sent them or other user masseges of 4 type: text,voice,image,video

## Components:
-the webstie was built using react js so for good programing the site structure from component we elaborate mostly on chat component
-signIn like mentioned is the Default page and you can route between site pages and if you enter a correct username and password you get the chat screen
-sugnUp is for registering with the site but only if the user enter a all the valid content that the page ask if the user dont meet the Criteria
user will get an appropriate message verfiyng what he need to change for a succssful login
-the chat hold alot of component we specifies some of the main ones
- we have the sidebar component which hold all chat of the user so he can get any chat from the list by clicking on the wanted chat and all the deatlis of the user who logged in is presented on the top of the screen(username and image profile) sidebar also arrange every chat in the same format like last message display on the sidebar, the time stemp of the massege, image of user etc
- note that all chat loged that are in the defulat chat page are stored in a hard codded list in file ChatLog
-we have components for every type of massege: text,voice,image,video and every type of message(execpt text) have a modal component so you can
manage to send the requsted message type
-for record user get by clicking the voice icon the popup for record whice contains a start and stop button when you hit stop the recording will stop and message will automaticly sent in chat
-for image and video we also have a popup a choose file and for image you upload only image file and same for video
-user can add a new chat by clicking the message icon that on the top of the sidebar user only need to enter the name and chat will appper on sidebar chat
-the site also support finding a spcific chat from list by writing the nickname aka name that is on the chat
-the site support using click functionality and pressing the enter key

### `npm start`
to run the project you need to enter in the terminal the follwing snippet
if you dont alredy have react you need:
npm install
npm start
if you have react install on your idea enter only:
npm start
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

-hope you like our project
-submitting:
-Daniel Huri
-id:314712563
-Dor Huri
-id:209409218

The page will reload when you make changes.\
You may also see any lint errors in the console.

