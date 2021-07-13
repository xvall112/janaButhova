import * as React from "react"
import { Link } from "gatsby"
import { makeStyles, Divider } from "@material-ui/core"

//components
import Hero from "./components/Hero"

const useStyles = makeStyles(() => ({
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionNoPaddingY: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}))

//components
import Section from "../../components/organisms/Section/Section"

const IndexPage = () => {
  const classes = useStyles()
  return (
    <div>
      <Section className={classes.sectionNoPaddingY}>
        <Hero />
      </Section>
    </div>
  )
}

export default IndexPage
