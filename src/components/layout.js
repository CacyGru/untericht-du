import React from 'react'
import Footer from './footer'
import Header from './header'
import './layout.scss'

const Layout = (props) => {
    return (
        <>
        <div className="container">
        <Header />
            <div className="content">
            
         {props.children} 
            </div>
        
        
         <Footer /> 
         </div> 
        </>
    )
}

export default Layout
