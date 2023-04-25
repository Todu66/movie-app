import React from "react";
import "./Navigation.css"
import path from "../../assets/path.svg"
import squares from "../../assets/icon-nav.svg"
import television from "../../assets/televison.svg"
import film from "../../assets/film.svg"
import bookmark from "../../assets/bookmark.svg"
import person from "../../assets/person.png"
class Navigation extends React.Component {
    render () {
        return (
            <div className="navigation-container">
                <header>
                    <nav>
                        <div>
                            <img src={path} />
                            <img src={squares} />
                            <img src={film} />
                            <img src={television} />
                            <img src={bookmark} />
                        </div>

                        <div>
                            <img src={person} />
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navigation