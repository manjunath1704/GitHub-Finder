import React from "react";
import UserItem from './UserItem'
const Users = (props) => {
    return (
        <div className="gf-container">
            <div className="gf-users__wrap">
                {props.users.map((user, key) => (
                    <UserItem user={user} key={key} />
                ))}
            </div>
        </div>
    );
};

export default Users;
