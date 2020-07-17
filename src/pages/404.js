import React from "react"
import LogoFancy from "../components/LogoFancy"
import Layout from "../components/layout"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout pageType="404">
    <div className="404-container text-center flex flex-col justify-center content-center">
      <div className="logo logo-container">
        <Link to="/" className="logo ">
          <LogoFancy />
          <div className="mt-8">
            <h3>Нa жaль, тут немa тісточок.</h3>
            <p>
              Але, є <strong>404</strong> комaрів.
            </p>
          </div>
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
