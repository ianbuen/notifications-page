import { useEffect, useState } from "react";
import notifData from "../data";
import "./Notifications.css";

export const Notifications = () => {

    const [notifs, setNotifs] = useState([]);

    useEffect(() => {
        if (notifData)
            setNotifs(notifData.map((notif, id) => {
                notif['id'] = id;
                return notif;
            }));
    }, []);

    const countUnread = () => {
        let count = 0;
        
        notifs.forEach(notif => {
            count = count + (notif.unread ? 1 : 0)
        });

        return count;
    };

    const markAllRead = () => {
        setNotifs(notifs.map(notif => { notif.unread = false; return notif; }))
    };

    const markAsRead = (index) => {
        const copy = [...notifs]
        copy[index]['unread'] = false;

        setNotifs(copy);
    }

    const unreads = countUnread();

    return (
        <div className="notifications">
            <h1>Notifications {unreads > 0 && <span>{unreads}</span>}</h1>
            <p onClick={markAllRead}>Mark all as read</p>

            {notifs ? notifs.map((notif, index) => 
                <Notification key={`notif-${index}`} notif={notif} onClick={() => { markAsRead(index) }} />
            ) : <h2>Loading...</h2> }        
        </div>
    );
}


const Notification = ({notif, onClick}) => {
    const {from: { name, avatar }, text, subject, 
           unread, time, content, preview} = notif;

    const getNotifBody = () => {

        return (
            <div className="notif-body" onClick={onClick}>
                {preview && <img className="preview" src={preview} alt="preview" />}
                <p>{name}</p>
                <p>{text}</p>
                {subject && <p className="subject">{subject}</p>}
                {unread && <span></span>}
                <p className="time">{time}</p>
                {content && <p className="content">{content}</p>}
            </div>
        );
    };

    return (
        <div className={`notification${unread ? ` unread` : ''}`}>
            <img src={avatar} alt="user-avatar" />
            
            {getNotifBody()}
        </div>
    );
};


export default Notifications;