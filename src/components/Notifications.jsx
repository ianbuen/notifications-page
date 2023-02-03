import notifs from "../data";
import "./Notifications.css";

export default () => {
    return (
        <div className="notifications">
            <h1>Notifications</h1>
            <p>Mark all as read</p>

            {notifs ? notifs.map((notif, index) => {
                
            }) : <h2>Loading...</h2> }        
        </div>
    );
}


const Notification = () => {
    return (
        <div className="notification">
            
        </div>
    );
};