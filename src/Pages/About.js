import React from 'react';
const About = () => {
    return (
        <div className="gf-about">
            <div className="gf-container">
                <h2 className="gf-about__heading">About Github Finder</h2>
                <p className="gf-about__caption">
                    React app to search Github profiles. This app uses the  API https://api.github.com/users/ along with the useState and useEffect hooks for state management and is part of the "Reactjs course" MicroDegree course.
                </p>
            </div>
        </div>
    )

}
export default About