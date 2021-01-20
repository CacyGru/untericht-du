import { Link } from 'gatsby'
import React from 'react'
import footerStyles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            c by CG |&nbsp;
            <nav>
                <ul>
                    <li>
                        <Link to="/impressum">Impressum</Link> |
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
