import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  useMediaQuery,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
  Box,
} from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"

import PhoneIcon from "@material-ui/icons/Phone"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import YouTubeIcon from "@material-ui/icons/YouTube"
import { contact } from "../../../../views/IndexView/components/data/index"

export const query = graphql`
  {
    contentfulAsset(title: { eq: "LOGO" }) {
      gatsbyImageData(width: 250, height: 250)
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    "& a": { textDecoration: "none" },
  },

  listItemText: {
    display: "flex",
    flexDirection: "column",
    flex: "0 0 auto",
  },
  listItem: {
    justifyContent: "flex-start",
    padding: 0,
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.alternate.main,
  },
  icon: {
    background: "transparent",
    borderRadius: 0,
  },
}))

const SocialContact = () => {
  const classes = useStyles()
  const data = useStaticQuery(query)
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems={isMd ? "flex-start" : "center"}
        spacing={2}
      >
        <Grid item xs={12}>
          <GatsbyImage
            image={data.contentfulAsset.gatsbyImageData}
            alt="Logo Jana Buthova"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" color="primary">
            <Box fontWeight="bold">Jana Búthová</Box>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row">
            <Grid item>
              <a href={contact.facebook}>
                <ListItemAvatar>
                  <Avatar variant="square" className={classes.avatar}>
                    <FacebookIcon />
                  </Avatar>
                </ListItemAvatar>
              </a>
            </Grid>
            <Grid item>
              <a href={contact.instagram}>
                <ListItemAvatar>
                  <Avatar variant="square" className={classes.avatar}>
                    <InstagramIcon />
                  </Avatar>
                </ListItemAvatar>
              </a>
            </Grid>
            <Grid item>
              <a href={contact.youtube}>
                <ListItemAvatar>
                  <Avatar variant="square" className={classes.avatar}>
                    <YouTubeIcon />
                  </Avatar>
                </ListItemAvatar>
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box mt={2}>
        <Grid item xs={12}>
          <Grid item>
            <ListItem
              disableGutters
              data-aos="fade-up"
              className={classes.listItem}
            >
              <ListItemAvatar>
                <Avatar variant="square" className={classes.avatar}>
                  <PhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <a href={`tel:${contact.phone}`}>
                <ListItemText
                  className={classes.listItemText}
                  primary="Telefon"
                  secondary={contact.phone}
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                    component: "span",
                  }}
                />
              </a>
            </ListItem>
          </Grid>
          <Grid item>
            <ListItem
              disableGutters
              data-aos="fade-up"
              className={classes.listItem}
            >
              <ListItemAvatar>
                <Avatar variant="square" className={classes.avatar}>
                  <MailOutlineIcon />
                </Avatar>
              </ListItemAvatar>
              <a href={`mailto:${contact.email}`}>
                <ListItemText
                  className={classes.listItemText}
                  primary="Email"
                  secondary={contact.email}
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                  secondaryTypographyProps={{
                    variant: "subtitle1",
                    color: "textPrimary",
                  }}
                />
              </a>
            </ListItem>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default SocialContact
