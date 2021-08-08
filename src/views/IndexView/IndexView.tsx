import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { makeStyles, Divider } from "@material-ui/core"

//components
import { Hidden } from "@material-ui/core"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Training from "./components/Training"
import Price from "./components/Price"
import Video from "./components/Video"
import Reviews from "./components/Reviews"
import Section from "../../components/organisms/Section/Section"
import SectionAlternate from "../../components/organisms/SectionAlternate/SectionAlternate"
import {
  video,
  pricings,
  aboutMe,
  reviews,
  TreninkTime,
} from "./components/data"

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
        <AboutMe data={aboutMe} />
      </SectionAlternate>
      <Training data={data} id="training" />
      <SectionAlternate primary id="price">
        <Price data={pricings} treninkData={TreninkTime} />
      </SectionAlternate>
      <SectionAlternate id="video">
        <Video data={video} />
      </SectionAlternate>
      <Section id="review">
        <Reviews data={reviews} />
      </Section>
    </>
  )
}

export default IndexPage
