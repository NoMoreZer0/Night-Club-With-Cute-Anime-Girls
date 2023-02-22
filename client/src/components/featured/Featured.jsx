import React from "react";
import "./featured.css";

const Featured = ({ type, selectedGenre, onChange }) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "animes" && "Animes"}</span>
                    <select
                        name="genre"
                        id="genre"
                        value={selectedGenre}
                        onChange={onChange}
                        className="decorated"
                    >
                        <option value="default">All</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
        </div>
    );
};

export default Featured;
