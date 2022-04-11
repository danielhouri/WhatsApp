import videoFile from '../../Resources/movie.mp4';
import imageFile from '../../Resources/img_girl.jpg';
import voiceFile from '../../Resources/horse.ogv';

const logHistory = [{
    username: "Gali4", data: [{ messagetype: "text", side: true, time: "17:25", contenet: "pablo" },
    { messagetype: "text", side: false, time: "17:25", contenet: "hey" },
    { messagetype: "text", side: false, time: "17:25", contenet: "what a nice day" },
    { messagetype: "text", side: true, time: "20:25", contenet: "yes" },
    { messagetype: "video", side: true, time: "20:25", contenet: videoFile },
    { messagetype: "image", side: true, time: "20:25", contenet: imageFile },
    { messagetype: "voice", side: false, time: "20:25", contenet: voiceFile },]
},
{
    username: "ronel5", data: [{ messagetype: "text", side: true, time: "17:25", contenet: "hey" },
    { messagetype: "text", side: false, time: "17:25", contenet: "hey" },
    { messagetype: "text", side: false, time: "17:25", contenet: "whatsup" },
    { messagetype: "text", side: true, time: "17:25", contenet: "you mean whatsapp" },]
},
{
    username: "eviatar1", data: [{ messagetype: "text", side: true, time: "17:25", contenet: "hey" },
    { messagetype: "text", side: false, time: "17:25", contenet: "hello" },
    { messagetype: "text", side: false, time: "17:25", contenet: "bye" },
    { messagetype: "text", side: true, time: "17:25", contenet: "bye" },]
},
{
    username: "coral", data: [{ messagetype: "text", side: true, time: "17:25", contenet: "hey" },
    { messagetype: "text", side: false, time: "17:25", contenet: "hey" },
    { messagetype: "text", side: false, time: "17:25", contenet: "go to work" },
    { messagetype: "text", side: true, time: "17:25", contenet: "ok" },]
},
{
    username: "home", data: [{ messagetype: "text", side: true, time: "17:25", contenet: "hey" },
    { messagetype: "text", side: false, time: "17:25", contenet: "hey" },
    { messagetype: "text", side: false, time: "17:25", contenet: "what is your name?" },
    { messagetype: "text", side: true, time: "17:25", contenet: "my nickname is hemi" },]
},
{
    username: "manu2", data: [{ messagetype: "text", side: true, time: "17:25", contenet: "hey" },
    { messagetype: "text", side: false, time: "17:25", contenet: "hey" },
    { messagetype: "text", side: false, time: "17:25", contenet: "12*7?" },
    { messagetype: "text", side: true, time: "17:25", contenet: "84" },]
}];

export default logHistory;