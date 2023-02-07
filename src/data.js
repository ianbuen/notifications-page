import chess from "./images/image-chess.webp";

// dynamically import other assets from a dir

const loadImages = (images) => {
    return images.keys().map(images);
};

const images = loadImages(require.context('./images', false, /\.webp$/));

const getUser = (name) => {
    let user = { 'name': name };
    name = name.replace(' ', '-').toLowerCase();
    user.avatar = images.filter(image => image.includes(name))[0];
    return user;
};

// ---------------------------------------


// build notifications data
export const data = [
    {
        type: 'react',
        from: getUser("Mark Webber"),
        subject: 'My first tournament today!',
        text: 'reacted to your recent post',
        time: '1m ago',
        unread: true
    },
    
    {
        type: 'follow',
        from: getUser("Angela Gray"),
        subject: '',
        text: 'followed you',
        time: '5m ago',
        unread: true
    },
    
    {
        type: 'group',
        from: getUser("Jacob Thompson"),
        subject: 'Chess Club',
        text: 'has joined your group',
        time: '1 day ago',
        unread: true
    },
    
    {
        type: 'message',
        from: getUser("Rizky Hasanuddin"),
        subject: '',
        text: 'sent you a private message',
        content: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        time: '5 days ago',
        unread: false
    },
    
    {
        type: 'photo',
        preview: chess,
        from: getUser("Kimberly Smith"),
        subject: '',
        text: 'commented on your picture',
        time: '1 week ago',
        unread: false
    },
    
    {
        type: 'react',
        from: getUser("Nathan Peterson"),
        subject: '5 end-game strategies to increase your win rate',
        text: 'reacted to your recent post',
        time: '2 weeks ago',
        unread: false
    },
    
    {
        type: 'group',
        from: getUser("Anna Kim"),
        subject: 'Chess Club',
        text: 'left the group',
        time: '2 weeks ago',
        unread: false
    }    
];

export default data;