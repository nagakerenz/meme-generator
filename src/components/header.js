import React from "react"
import Troll from "../image/troll-face.png"

export default function Header() {
    return(
        <header className="header">
            <img src={Troll} alt="Troll" className="header--image"></img>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}

