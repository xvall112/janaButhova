import * as React from "react"
import { Link } from "gatsby"
import { makeStyles, Divider } from "@material-ui/core"

//components
import Hero from "./components/Hero"
import FourPictures from "./components/FoutPictures"
import AboutMe from "./components/AboutMe"
import Training from "./components/Training"
import Price from "./components/Price"
import Galery from "./components/Galery"
import Reviews from "./components/Reviews"
import Recepy from "./components/Recepy"
import Contact from "./components/Contact"
import Section from "../../components/organisms/Section/Section"
import SectionAlternate from "../../components/organisms/SectionAlternate/SectionAlternate"
import {
  promo,
  training,
  pricePersonal,
  priceGroup,
  pricePoradenstvi,
  aboutMe,
  reviews,
} from "./components/data"
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
  const classes = useStyles()
  return (
    <div>
      <Section className={classes.sectionNoPaddingY}>
        <Hero />
      </Section>
      <FourPictures />
      <SectionAlternate>
        <AboutMe data={aboutMe} />
      </SectionAlternate>
      <Training data={training} />
      <SectionAlternate primary>
        <Price
          pricePersonal={pricePersonal}
          priceGroup={priceGroup}
          pricePoradenstvi={pricePoradenstvi}
        />
      </SectionAlternate>
      <section className={classes.promoSection}>
        <Galery data={promo} />
      </section>
      <Section>
        <Reviews data={reviews} />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <Recepy />
      </Section>
      <SectionAlternate className={classes.sectionNoPaddingTop}>
        <Contact />
      </SectionAlternate>
    </div>
  )
}

export default IndexPage
