import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { isLoggedIn, logout } from "../services/auth"

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        background: `#192736`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`,
        }}
      >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `2rem`,
          }}
        >
          {siteTitle}
        </Link>
        <nav>
          <ul style={{ 
                      margin: 0,
                      display: `flex`,
                      alignItems: `center`,
                    }}>
            <li style={{
                        listStyle: `none`,
                        margin: `0 1.5rem 0`,
                      }}>
              <Link to="/user-guides"  style={{color: `white`}}>User Guides</Link>
            </li>
            <li style={{
                        listStyle: `none`,
                        marginBottom: `0`
                      }}>
            {isLoggedIn() ? (
              <a style={{color: `white`}}
                href="/"
                onClick={event => {
                  event.preventDefault()
                  logout(() => navigate(`/user-guides/login`))
                }}
              >
                Logout
              </a>
            ) : null}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
