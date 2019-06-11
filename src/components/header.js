import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
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
                      marginBottom: `0`
                    }}>
            <Link to="/userGuideListing"  style={{color: `white`}}>User Guides</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
