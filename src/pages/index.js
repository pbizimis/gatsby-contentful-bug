import * as React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = ({ data }) => {
  console.log(data);
  return (
  <Layout>
    <Seo title="Home" />
  </Layout>
)}

export default IndexPage

export const query = graphql`
query {
  allContentfulAsset {
    edges {
      node {
        localFile {
          id
        }
      }
    }
  }
}
`
