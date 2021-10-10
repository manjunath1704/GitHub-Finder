import React, { useEffect } from "react";
import {
    FaChevronLeft,
    FaUser,
    FaGlobe,
    FaLocationArrow,
    FaHotel,
    FaCheck,
    FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import RepoList from "./RepoList";
const UserDetail = (props) => {
    useEffect(() => {
        props.getDetails(props.match.params.anything);
        props.getRepo(props.match.params.anything);
    }, []);

    return (
        <>
            <div className="gf-profile">
                <div
                    style={{ backgroundImage: "url(/profile-bg.jpg)" }}
                    className="gf-profile__banner"
                >
                    <div className="gf-container gf-flexing">
                        <div className="gf-profile__topbar">
                            <div className="gf-profile__col">
                                <Link to="/">
                                    <FaChevronLeft />
                                </Link>
                            </div>
                            <div className="gf-profile__col">
                                <h4 className="gf-profile__title">Profile</h4>
                            </div>
                            <div className="gf-profile__col">
                                <div className="gf-hire">
                                    {" "}
                                    hireable:{props.user.hireable ? <FaCheck /> : <FaTimes />}
                                </div>
                            </div>
                        </div>

                        <div className="gf-profile__details">
                            <img
                                className="gf-profile__avatar"
                                src={props.user.avatar_url}
                                alt={props.user.login}
                            />
                            <p className="gf-profile__name">{props.user.name}</p>
                            <p className="gf-profile__bio">{props.user.bio}</p>
                            <a className="gf-usercard__button" href={props.user.html_url}>
                                Check me on GitHub
                            </a>
                        </div>
                        <div className="gf-profile__count">
                            <div className="gf-profile__count-col">
                                <p className="gf-profile__count-num">{props.user.followers}</p>
                                <p className="gf-profile__count-name">Followers</p>
                            </div>
                            <div className="gf-profile__count-col">
                                <p className="gf-profile__count-num">{props.user.following}</p>
                                <p className="gf-profile__count-name">Following</p>
                            </div>
                            <div className="gf-profile__count-col">
                                <p className="gf-profile__count-num">
                                    {props.user.public_repos}
                                </p>
                                <p className="gf-profile__count-name">Repos</p>
                            </div>
                            <div className="gf-profile__count-col">
                                <p className="gf-profile__count-num">
                                    {props.user.public_gists}
                                </p>
                                <p className="gf-profile__count-name">Gists</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gf-more-details">
                    <div className="gf-container">
                        <div className="gf-more-details-row">
                            <div className="gf-more-details-col">
                                <p className="gf-more-details-icon">
                                    <FaUser />
                                </p>
                                <p className="gf-more-details-heading">{props.user.login}</p>
                            </div>
                            <div className="gf-more-details-col">
                                <p className="gf-more-details-icon">
                                    <FaGlobe />
                                </p>
                                <p className="gf-more-details-heading">{props.user.blog}</p>
                            </div>
                            <div className="gf-more-details-col">
                                <p className="gf-more-details-icon">
                                    <FaLocationArrow />
                                </p>
                                <p className="gf-more-details-heading">{props.user.location}</p>
                            </div>
                            <div className="gf-more-details-col">
                                <p className="gf-more-details-icon">
                                    <FaHotel />
                                </p>
                                <p className="gf-more-details-heading">{props.user.company}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RepoList repos={props.repos} />
        </>
    );
};

export default UserDetail;
