import UserList from '../SignIn/UserList'


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

export {getImageByUsername, getNicknameByUsername};