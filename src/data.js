// dynamically import assets from a dir

const loadImages = (images) => {
    return images.keys().map(images);
};

const images = loadImages(require.context('./images', false, /\.webp$/));

const getUser = (name) => {
    let user = { 'name': name };
    name = name.replace(' ', '-').toLowerCase();
    user.avatar = images.filter(image => image.includes(name))[0];
};

// ---------------------------------------


// build notifications data
export const data = [
    {
        type: 'react',
        from: getUser("Mark Webber"),
        subject: '',
        text: 'reacted to your recent post My first tournament today!',
        time: '1m ago',
        read: true
    },
    
    {
        type: 'follow',
        from: getUser("Angela Gray"),
        subject: '',
        text: 'followed you',
        time: '5m ago',
        read: true
    },
    
    {
        type: 'group',
        from: getUser("Jacob Thompson"),
        subject: '',
        text: 'has joined your group Chess Club',
        time: '1 day ago',
        read: true
    },
    
    {
        type: 'message',
        from: getUser("Rizky Hasanuddin"),
        subject: '',
        text: 'sent you a private message',
        content: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        time: '5 days ago',
        read: false
    },
    
    {
        type: 'comment',
        from: getUser("Kimberly Smith"),
        subject: '',
        text: 'commented on your picture',
        time: '1 week ago',
        read: false
    },
    
    {
        type: 'react',
        from: getUser("Nathan Peterson"),
        subject: '5 end-game strategies to increase your win rate',
        text: 'reacted to your recent post',
        time: '2 weeks ago',
        read: false
    },
    
    {
        type: 'group',
        from: getUser("Anna Kim"),
        subject: 'Chess Club',
        text: 'left the group',
        time: '2 weeks ago',
        read: false
    }    
];

export default data;