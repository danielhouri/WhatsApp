import UserList from '../SignIn/UserList'
import ChatLog from './Components/ChatLog'

function getMessageByUsername (username) {
    let result;
    ChatLog.forEach(element => {
        if (element.username == username) {
            result = element.data;
        }
    })
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

export {getImageByUsername, getNicknameByUsername, getMessageByUsername};