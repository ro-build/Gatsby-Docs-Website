import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"

const PrivateRoute = ({ component: Component, location, ...rest }, loginPage) => {
  if (!isLoggedIn() && location.pathname !== loginPage) {
    // If the user is not logged in, redirect to the login page.
    navigate(`${loginPage}`)
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute