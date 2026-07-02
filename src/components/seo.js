/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            siteDescription
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `
  )
  const { siteTitle, siteDescription, siteUrl } = site.siteMetadata

  const seo = {
    title: title || siteTitle,
    description: description || siteDescription,
    image: "../assets/images/heroImage.jpg",
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title} | ${siteTitle}`}
    >
      {/* Declared here so react-helmet keeps them: otherwise it strips the
          favicon links injected by gatsby-plugin-manifest on hydration. */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {/* facebook cards */}
      <meta property="og:url" content={seo.ulr} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="100%" />
      <meta property="og:image:height" content="auto" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `cs`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
