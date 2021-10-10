import React from "react";
import { useState } from "react";
const Search = (props) => {
    const [text, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.searchName(text);
        setText("");
    };
    return (
        <div
            style={{ backgroundImage: "url(/writing-code-laptop.jpg)" }}
            className="gf-Search"
        >
            <div className="gf-container z-3">
                <h1 className="hf-heading">Find Developers on GitHub</h1>
                <form onSubmit={handleSubmit} className="gf-form">
                    <input
                        className="gf-form__input"
                        type="text"
                        name="gh-user"
                        placeholder="Find a developer"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <input className="gf-form__submit" type="submit" value="search" />
                </form>
                {props.showButton && (
                    <div className="gf-clear-button" onClick={props.clearGrid}>
                        Clear
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
