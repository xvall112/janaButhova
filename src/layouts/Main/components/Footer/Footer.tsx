import React from "react"
//components
import ContactForm from "./ContactForm"
import SocialContact from "./SocialContact"
import { SectionAlternate } from "components/organisms"
//materialUI
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core"

const Footer = () => {
  return (
    <SectionAlternate>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <SocialContact />
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </SectionAlternate>
  )
}

export default Footer
