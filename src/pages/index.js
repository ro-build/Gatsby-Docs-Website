import React from "react"
import { Link } from "gatsby"
import { isLoggedIn } from "../services/auth"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Reason Docs</h1>
    <p>You will need to log in to see the content</p>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 767 806" width="275" height="288"><path d="M693.8 398.8c-1-32.7-3.8-65.5-9.7-97.8-8.8-47.9-24.2-92.7-59.7-127.6-24.7-24.2-56-36.5-86.3-50.7-84.9-39.8-172.6-54-264.6-31.4-32.5 8-64.8 16.1-91.4 38.8-35.6 30.3-58.1 69.6-74.5 112.8-29 76.6-40.3 155.9-31.8 237.7 3 28.5 8.1 57.1 25 81C164.4 651 247.1 704.5 354 701.4c56.3.9 105.6-9.6 153.7-26.7C625.3 633 697.9 525.8 693.8 398.8zm-220.3-42.9c-33.4 0-60.5-27.1-60.5-60.6 0-5.8.8-11.4 2.4-16.7-14.4 18.4-22.3 40.1-24.9 48.2v14.7l.1-.1v116.4c0 17.2 3 28.2 8.9 33.2 5.9 5 18.1 7.4 36.6 7.4H447V543H258.6v-44.6h10.9c18.4 0 30.6-2.5 36.6-7.4 5.9-4.9 8.9-16 8.9-33.2v-108c-.1-7-1.1-11.7-3.1-14.1-2.1-2.4-5.3-3.7-9.5-3.7-3.9 0-18.4 1.1-43.7 3.2v-44.3c34.7-4.2 59.4-21.4 74.2-51.7h57.6v50.1c11.2-21 29.4-44.8 56-53.3 23.8-7.6 42.3-1.6 54.2 5.4 19.7 10 33.2 30.4 33.2 54 0 33.4-27 60.5-60.4 60.5z" fill="#ff5042"></path></svg>
    </div>
    <p>
      {isLoggedIn() ? (
        <>
          You are logged in, so check your{" "}
          <Link to="/user-guides/">user guides</Link>
        </>
      ) : (
        <>
          You should <Link to="/user-guides/login">log in</Link> to see restricted
          content
        </>
      )}
    </p>
  </Layout>
)

export default IndexPage
