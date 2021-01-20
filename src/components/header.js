import { Link } from 'gatsby'
import React from 'react'
import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1>Logo</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/bio">Bio</Link> </li>
                    <li><Link to="/unterricht">Unterricht</Link> </li>
                    <li><Link to="/teamtraining">Teamtraining</Link> </li>
                    <li><Link to="/kontakt">Kontakt</Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
