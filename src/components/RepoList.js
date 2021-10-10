import React from "react";
const RepoList = (props) => {
    return (
        <div className="gf-repo__list">
            <div className="gf-container">
                <h4 className="gf-repo__list-title"> Repositeries</h4>
                {props.repos.map((repo, key) => (
                    <div className="gf-repo__item" key={key}>
                        <a href={repo.html_url}>{repo.name}</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RepoList;
