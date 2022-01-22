import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="bg-gradient-to-b from-slate-200 to-slate-900 w-full h-full"
      >
        <main>{children}</main>
        <footer className="justify-center mt-10 pb-4 flex" >
          <a
          href="https://www.hhaluk.me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-semibold "
          >
            © 2022, hhaluk.me
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout