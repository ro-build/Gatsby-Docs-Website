import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import userGuideListing from "../components/userGuideListing"
import Login from "../components/login"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/userGuides" component={userGuideListing} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App