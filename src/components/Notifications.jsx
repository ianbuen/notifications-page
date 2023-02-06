import notifs from "../data";
import "./Notifications.css";

export const Notifications = () => {
    return (
        <div className="notifications">
            <h1>Notifications</h1>
            <p>Mark all as read</p>

            {notifs ? notifs.map((notif, index) => 
                <Notification key={`notif-${index}`} notif={notif} />
            ) : <h2>Loading...</h2> }        
        </div>
    );
}


const Notification = ({notif}) => {
    const {from: { name, avatar }, text, subject, 
           type, unread, time, content} = notif;

    const getNotifBody = () => {

        return (
            <div className="notif-body">
                <p>{name}</p>
                <p>{text}</p>
                {subject && <p className={type === "group" ? "group" : "post"}>{subject}</p>}
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