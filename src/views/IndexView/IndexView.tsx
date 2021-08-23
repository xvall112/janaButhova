import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { makeStyles } from "@material-ui/core"

//components
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Training from "./components/Training"
import Price from "./components/Price"
import Video from "./components/Video"
import Reviews from "./components/Reviews"

import SectionAlternate from "../../components/organisms/SectionAlternate/SectionAlternate"
import { pricings, reviews } from "./components/data"

const query = graphql`
  {
    allContentfulNabizim(sort: { fields: contentfulid, order: ASC }) {
      nodes {
        obrazek {
          gatsbyImageData(placeholder: BLURRED, width: 500)
          title
        }
        id
        slug
        title
        shortDescription
        longDescription {
          raw
        }
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  sectionNoPaddingTop: {
    paddingTop: 0,
  },

  sectionNoPaddingY: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  promoSection: {
    background: theme.palette.alternate.main,
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(12, 2),
    },
  },
}))

const IndexPage = () => {
  const data = useStaticQuery(query)
  const classes = useStyles()
  return (
    <>
      <Hero />
      <SectionAlternate id="aboutMe">
        <AboutMe />
      </SectionAlternate>
      <div id="training">
        <Training data={data} />
      </div>
      <SectionAlternate primary id="price">
        <Price price={pricings} />
      </SectionAlternate>
      <SectionAlternate id="video">
        <Video />
      </SectionAlternate>
      <SectionAlternate secondary id="review">
        <Reviews data={reviews} />
      </SectionAlternate>
    </>
  )
}

export default IndexPage
