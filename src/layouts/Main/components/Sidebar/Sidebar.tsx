import React, { useContext } from "react"
import { graphql, useStaticQuery, Link, navigate } from "gatsby"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"

//components

import { CardBase } from "components/organisms"
//materialUI
import InstagramIcon from "@material-ui/icons/Instagram"
import { makeStyles } from "@material-ui/core/styles"
import {
  Drawer,
  Typography,
  Box,
  IconButton,
  Grid,
  Button,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import FacebookIcon from "@material-ui/icons/Facebook"
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined"
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined"
import YouTubeIcon from "@material-ui/icons/YouTube"
//data
import { navigation } from "../../../../views/IndexView/components/data"

const useStyles = makeStyles(theme => ({
  drawer: {
    width: "100vw",
    backgroundColor: theme.palette.alternate.main,
    zIndex: 10000,
  },
  root: {
    "& a": { textDecoration: "none", paddingTop: theme.spacing(2) },
    "& a:hover": {
      textDecoration: "underline",
      color: theme.palette.text.primary,
    },
  },
  logoCard: {
    backgroundColor: "black",
    /*  borderRadius: theme.shape.borderRadius, */
    "& .MuiCardContent-root": {
      padding: theme.spacing(1),
    },
  },
  nav: {
    marginBottom: theme.spacing(1),
  },
}))

interface Props {
  className?: string
  onClose: any
  open: boolean
  variant: "permanent" | "persistent" | "temporary" | undefined
}

const Sidebar = ({
  onClose,
  open,
  variant,
  className,
  ...rest
}: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.drawer }}
      onClose={() => onClose()}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <div style={{ display: "grid" }}>
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              height: "100vh",
              zIndex: 100,
              // This centers the other elements inside the hero component
              display: "grid",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
            }}
          >
            <Grid container direction="column">
              <Grid item>
                <Box mx={2} mt={3} textAlign="right">
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={() => onClose()}
                  >
                    <CloseIcon fontSize="large" color="primary" />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item>
                <Box my={5} onClick={() => onClose()}>
                  {navigation.map((item, index) => {
                    return (
                      <Link to={`/${item.slug}`} key={index}>
                        <Typography variant="button" color="primary">
                          <Box
                            py={1}
                            key={index}
                            textAlign="center"
                            fontSize={24}
                            fontWeight="bold"
                          >
                            {item.title}
                          </Box>
                        </Typography>
                      </Link>
                    )
                  })}
                </Box>
              </Grid>
              <Grid item>
                <Grid container direction="row" justify="space-evenly">
                  <Grid item>
                    <IconButton edge="start" color="inherit">
                      <InstagramIcon fontSize="large" color="primary" />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton edge="start" color="inherit">
                      <FacebookIcon fontSize="large" color="primary" />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton edge="start" color="inherit">
                      <YouTubeIcon fontSize="large" color="primary" />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton edge="start" color="inherit">
                      <EmailOutlinedIcon fontSize="large" color="primary" />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton edge="start" color="inherit">
                      <PhoneOutlinedIcon fontSize="large" color="primary" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <StaticImage
            src="../../../../assets/images/logo.jpg"
            alt="obrazek"
            style={{
              gridArea: "1/1",
              width: "auto",
              height: "auto",
              zIndex: 1,
              // You can set a maximum height for the image, if you wish.
              // maxHeight: 600,
            }}
          />
        </div>
      </div>
    </Drawer>
  )
}

export default Sidebar
