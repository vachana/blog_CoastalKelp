import * as React from "react"
import { Link } from "gatsby"
import {
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">

        <Link to="/">{title}</Link>
        
        </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
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
        {children}</main>
      <footer>
        {/* © {new Date().getFullYear()}, Some Footer */}
        {/* {` `} */}
        -----Footer----
        {/* <a href="https://www.gatsbyjs.com">Gatsby</a> */}
      </footer>
    </div>
  )
}

export default Layout
