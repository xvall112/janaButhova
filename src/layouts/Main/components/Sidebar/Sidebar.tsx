import React from "react"
import { Link } from "gatsby"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"

//components
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
import {
  navigation,
  contact,
} from "../../../../views/IndexView/components/data"

const useStyles = makeStyles(theme => ({
  drawer: {
    width: "100vw",
    backgroundColor: theme.palette.alternate.main,
    zIndex: 10000,
  },
  root: {
    height: "100vh",
    width: "100vw",
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
              width: "100vw",
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
                    <a href={contact.instagram}>
                      <IconButton aria-label="instagram" color="primary">
                        <InstagramIcon fontSize="large" />
                      </IconButton>
                    </a>
                  </Grid>
                  <Grid item>
                    <a href={contact.facebook}>
                      <IconButton aria-label="facebook" color="primary">
                        <FacebookIcon fontSize="large" />
                      </IconButton>
                    </a>
                  </Grid>
                  <Grid item>
                    <a href={contact.youtube}>
                      <IconButton aria-label="facebook" color="primary">
                        <YouTubeIcon fontSize="large" />
                      </IconButton>
                    </a>
                  </Grid>
                  <Grid item>
                    <a href={`mailto:${contact.email}`}>
                      <IconButton aria-label="email" color="primary">
                        <EmailOutlinedIcon fontSize="large" />
                      </IconButton>
                    </a>
                  </Grid>
                  <Grid item>
                    <a href={`tel:${contact.phone}`}>
                      <IconButton aria-label="phone" color="primary">
                        <PhoneOutlinedIcon fontSize="large" />
                      </IconButton>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <StaticImage
            src="../../../../assets/images/LOGOo.png"
            alt="logo"
            style={{
              top: "20%",
              height: "50vh",
              gridArea: "1/1",
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
