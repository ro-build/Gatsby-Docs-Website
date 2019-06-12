import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
// import PrivateRoute from "../components/privateRoute"
import UserGuideListing from "../components/userGuideListing"
import Login from "../components/login"
import { isLoggedIn } from "../services/auth"

const UserGuides = () => {
  return (
    <Layout>
      { isLoggedIn() &&
        <UserGuideListing /> 
      }
      { !isLoggedIn() &&
        <Login path="/user-guides/login" />
      }
    </Layout>
  )
}

export default UserGuides

{/* <Router>
<PrivateRoute path="userGuides/userGuides" component={UserGuideListing} loginPage={`/userGuides/login`} />
<Login path="/userGuides/login" />
</Router> */}