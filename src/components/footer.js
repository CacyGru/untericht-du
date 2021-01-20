import { Link } from 'gatsby'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <h3>Footer</h3>
            <nav>
                <ul>
                    <li>
                        <Link to="/impressum">Impressum</Link>
                    </li>
                    <li>
                        <Link to="/datenschutz">Datenschutz</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer
