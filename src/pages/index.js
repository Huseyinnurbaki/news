import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Seo from "../components/seo"
import RepositoryList from "../components/repositoryList";
import Layout from "../components/layout"


function IndexPage(){
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          siteUrl
          }
        buildTime
        }
    }
  `);
  const { site } = data;

  return (

    <Layout>
      <Seo site={site} />
      <div className="flex flex-col items-center justify-center">

        <div className="grid xl:grid-cols-1 md:grid-cols-1 gap-3 mt-3 lg:gap-x-12 ">
          <RepositoryList />
        </div>

      </div>
    </Layout>

  )
}

export default IndexPage
