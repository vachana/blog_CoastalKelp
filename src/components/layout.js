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
     <Link to="/blog" className={navLinkText}>
       Blog
     </Link>
   </li>
  </ul>
</nav>
    
     {/* <h1>{title}</h1> */}
 {children}
        </main>
      <footer>
        © {new Date().getFullYear()}, Contact:
        
        The instructional lead on the project, Dr. Yvonne Coady, holds joint appointments at the University of Victoria and Northeastern University’s Vancouver campus. She is an expert on cloud computing and distributed systems. She has a passion for teaching and a deep interest in community-based education efforts. She can be reached at <a href="mailto: ycoady@gmail.com">email</a>

<br/>The project lead, Dr. Derek Jacoby, worked in industry for many years before returning to academia. His career has revolved around numerous areas of machine learning and data analytics. Dr. Jacoby lives and works on the traditional unceded territories of the MÁLEXEȽ (Malahat) Nation and can be reached at <a href="mailto: derekja@coastalcomputing.ca">email</a>
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
