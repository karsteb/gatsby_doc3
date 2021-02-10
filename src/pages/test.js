import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Oversikt</h1>
    <p>Her ligger dokumentasjon for prosjekter og utvikling. Markdownbasert...</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>


<p>Lag nye sider ved å lage ny*.js fil i pages, trykk rfc+tab</p>

  </Layout>
)

export default IndexPage
