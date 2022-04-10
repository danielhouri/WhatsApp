# WhatsApp Web Client

This project use react and bootstrap.
The following is a list of the modules the project uses:
- react-bootstrap
- react-router-dom

## Code Structure

The Webclient contains 3 main section:
- Signin - Default page, If the connection succeeds there is a fluid transfer to the 'Chat' page, otherwise an error will appear. If the user is not registered there is a button that transfers to the 'Signup' page.
- Signup - The registration page where the user needs to insert a user name and a password that contains digits and letters both.
- Chat - The main part of the Web client, this section contains the following components: SideBar and Message (where the messages are shown). This Message's components support the following type of content: text, voice, image, and video.

## Components:
The website was built using react-js so there is a complete separation between the different components:

-SignIn - as mentioned is the Default page and you can route between site pages if you enter the correct username and password you get the chat screen.
-Sign up - is for registering with the site but only if the user enters an all the valid content that the page asks if the user doesn't meet the Criteria user will get an appropriate message verifying what he needs to change for a successful login -the chat hold a lot of components we specify some of the main ones
•	we have the sidebar component which holds all chat of the user so he can get any chat from the list by clicking on the wanted chat and all the details of the user who logged in are presented on the top of the screen(username and image profile) sidebar also arrange every chat in the same format like last message display on the sidebar, the timestamp of the message, the image of the user, etc
•	note that all chat logs that are on the default chat page are stored in a hard codded list in the file ChatLog -we have components for every type of message: text, voice, image, video, and every type of message(except text) have a modal component so you can manage to send the requested message type -for the record, user get by clicking the voice icon the popup for a record which contains a start and stops button when you hit to stop the recording will stop and message will automatically send in chat -for image and video we also have a popup a choose file and for the image you upload the only image file and same for video -user can add a new chat by clicking the message icon that on the top of the sidebar user only need to enter the name and chat will appear on sidebar chat -the site also supports finding a specific chat from the list by writing the nickname aka name that is on the chat -the site support using click functionality and pressing the enter key

### `Run the project`
To run the project you need to enter in the terminal. You have to install the following before to run:
* node JS
* npm 
* react-router-dom
* react-bootstrap
If it's already installed, enter in the terminal "npm start", open [http://localhost:3000](http://localhost:3000) to view it, and enjoy.

### Submitting:
- Daniel Houri: 314712563
- Dor Huri: 209409218
