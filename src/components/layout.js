import * as React from "react"
import { Link } from "gatsby"
import {
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'


const Layout = ({ location, title, children }) => {

  
  let header
    
    header = (
      <h1 className="main-heading">
 
        <Link to="/blog">{title}</Link>
        
        </h1>
    )


  return (
    <div className="global-wrapper">
      <header className="global-header">{header}</header>
      <main>
      <nav>
<ul className={navLinks}>
  <li className={navLinkItem}>
    <Link to="/" className={navLinkText}>
      Home
    </Link>
  </li>
  <li className={navLinkItem}>
     <Link to="/blogone" className={navLinkText}>
     Building the Earth Data Store(s)Blog
     </Link>
   </li>
   <li className={navLinkItem}>
     <Link to="/blogtwo" className={navLinkText}>
       Project2 Blog
     </Link>
   </li>
   <li className={navLinkItem}>
     <Link to="/contact" className={navLinkText}>
       Contact
     </Link>
   </li>
  </ul>
</nav>
    
     {/* <h1>{title}</h1> */}
 {children}
        </main>
      <footer>
        {/* © {new Date().getFullYear()}, Contact: */}
        
        
        {/* <a href="https://www.gatsbyjs.com">Gatsby</a> */}
      </footer>
    </div>
  )
}

export default Layout




// <nav>
// <ul className={navLinks}>
//   <li className={navLinkItem}>
//     <Link to="/blog" className={navLinkText}>
//       Home
//     </Link>
//   </li>
//   {/* <li className={navLinkItem}>
//     <Link to="/blog" className={navLinkText}>
//       Blog
//     </Link>
//   </li> */}
// </ul>
// </nav>
// {/* <h1>{title}</h1> */}
// {children}
