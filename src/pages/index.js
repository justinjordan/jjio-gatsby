import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/posts"
// import Image from "../components/image"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`web development`]} />
    <Posts />
  </Layout>
)

export default IndexPage
