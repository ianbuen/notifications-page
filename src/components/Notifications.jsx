import notifs from "../data";
import "./Notifications.css";

export const Notifications = () => {
    return (
        <div className="notifications">
            <h1>Notifications</h1>
            <p>Mark all as read</p>

            {notifs ? notifs.map((notif, index) => {
                <Notification key={`notif-${index}`} props={notif} />
            }) : <h2>Loading...</h2> }        
        </div>
    );
}


const Notification = ({notif}) => {
    return (
        <div className="notification">
            <img src="" alt="" />
        </div>
    );
};


export default Notifications;