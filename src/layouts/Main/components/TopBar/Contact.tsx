import React from "react"

import MenuIcon from "@material-ui/icons/Menu"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined"
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined"
import YouTubeIcon from "@material-ui/icons/YouTube"

import { Grid, IconButton } from "@material-ui/core"
const Contact = () => {
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <IconButton aria-label="instagram" color="primary">
            <InstagramIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="facebook" color="primary">
            <FacebookIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="facebook" color="primary">
            <YouTubeIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="email" color="primary">
            <EmailOutlinedIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="phone" color="primary">
            <PhoneOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact
