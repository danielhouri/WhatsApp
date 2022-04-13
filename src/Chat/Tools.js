import UserList from '../SignIn/UserList'
import ChatLog from './Components/ChatLog'

function getMessageByUsername(username, ownerUsername) {
    let result;
    let db = ChatLog[ownerUsername];

    db.forEach(element => {
        if (element.username == username) {
            result = element.data;
        }
    })
    return result;
};

function getUsernameChat(username, ownerUsername) {
    let result = '';
    let db = ChatLog[ownerUsername];

    if (db != null) {
        db.map((element,key) => {
            if (element.username == username) {
                result = element.data.username;
            }
        })    
    }
    return result;
};

function getImageByUsername (username) {
    let result = "";

    UserList.forEach(element => {
        if (element.username == username) {
            result = element.src;
        }
    })
    return result;
};

function getNicknameByUsername (username) {
    let result = "";

    UserList.forEach(element => {
        if (element.username == username) {
            result = element.nickname;
        }
    })
    return result;
};

function addNewContact(username, ownerUsername) {
    let db = ChatLog[ownerUsername];
    if(db != null) {
        db.push({username: username, data: [{ messagetype: "", side: true, time: "", contenet: "" }]});
    }
    else {
        ChatLog[ownerUsername] = [{username: username, data: [{ messagetype: "", side: true, time: "", contenet: "" }]}];
    }
}

function addNewMessage(username, messagetype, side, time, contenet, ownerUsername) {
    let x = getMessageByUsername(username, ownerUsername);
    x.push({ messagetype: messagetype, side: side, time: time, contenet: contenet});
}

export {getImageByUsername, getNicknameByUsername, getMessageByUsername, addNewContact, addNewMessage, getUsernameChat};