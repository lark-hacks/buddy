import React from 'react'
import "./menu.css"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active") }>
            <ul>
                <li onClick={() =>setMenuOpen(false)}>
                    <a>Pick an animal</a>
                    
                </li>
            </ul>
        </div>
    )
}