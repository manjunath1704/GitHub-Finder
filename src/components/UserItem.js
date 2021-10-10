import React from "react";
import { Link } from "react-router-dom";
const UserItem = (props) => {
    const { login, avatar_url } = props.user;
    return (
        <div className="gf-usercard">
            <img className="gf-usercard__avatar" src={avatar_url} alt="" />
            <p className="gf-usercard__username">{login}</p>
            <Link className="gf-usercard__button" to={`/user/${login}`}>
                View Profile
            </Link>
        </div>
    );
};
export default UserItem;
