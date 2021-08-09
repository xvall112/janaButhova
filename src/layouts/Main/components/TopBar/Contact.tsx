import React from "react"

import MenuIcon from "@material-ui/icons/Menu"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined"
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined"
import YouTubeIcon from "@material-ui/icons/YouTube"

import { contact } from "../../../../views/IndexView/components/data/index"
import { Grid, IconButton } from "@material-ui/core"
const Contact = () => {
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <a href={contact.instagram}>
            <IconButton aria-label="instagram" color="primary">
              <InstagramIcon />
            </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a href={contact.facebook}>
            <IconButton aria-label="facebook" color="primary">
              <FacebookIcon />
            </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a href={contact.youtube}>
            <IconButton aria-label="facebook" color="primary">
              <YouTubeIcon />
            </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a href={`mailto:${contact.email}`}>
            <IconButton aria-label="email" color="primary">
              <EmailOutlinedIcon />
            </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a href={`tel:${contact.phone}`}>
            <IconButton aria-label="phone" color="primary">
              <PhoneOutlinedIcon />
            </IconButton>
          </a>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact
