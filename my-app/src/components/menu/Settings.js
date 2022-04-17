import React from 'react'
import "./settings.css"

export default function Settings({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active") }>
            <ul>
                <li onClick={() =>setMenuOpen(false)}>
                    Home
                </li>
            </ul>
        </div>
    )
}