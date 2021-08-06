import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import scrollTo from "gatsby-plugin-smoothscroll"
//data
import { navigation } from "../../../../views/IndexView/components/data"
//components

//material UI
import {
  useMediaQuery,
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Hidden,
  Box,
  Container,
} from "@material-ui/core"

import Typography from "@material-ui/core/Typography"
import {
  createStyles,
  useTheme,
  Theme,
  makeStyles,
} from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined"
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined"
import YouTubeIcon from "@material-ui/icons/YouTube"

export const query = graphql`
  {
    contentfulAsset(title: { eq: "LOGO" }) {
      gatsbyImageData(width: 80, height: 80)
    }
  }
`
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    navigation: {
      "& :hover": {
        cursor: "pointer",
        color: theme.palette.primary.light,
      },
    },
    toolbar: {
      zIndex: 999,

      width: "100%",
      margin: "0 auto",
      padding: theme.spacing(0, 2),
      [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(0, 8),
      },
    },
  })
)

const TopBar = ({ openSideBar }): JSX.Element => {
  const classes = useStyles()
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })
  const data = useStaticQuery(query)
  return (
    <header>
      <AppBar position="absolute" color="transparent">
        <Toolbar className={classes.toolbar}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <GatsbyImage
                image={data.contentfulAsset.gatsbyImageData}
                alt="Logo Jana Buthova"
                style={{ marginTop: "10px" }}
              />
            </Grid>
            <Hidden smDown>
              <Grid item>
                <Grid container direction="row" spacing={2}>
                  {navigation.map((item, index) => {
                    return (
                      <Box
                        px={2}
                        key={index}
                        onClick={() => scrollTo(item.slug)}
                        className={classes.navigation}
                      >
                        <Typography color="primary" variant="button">
                          <Box fontWeight="bold">{item.title}</Box>
                        </Typography>
                      </Box>
                    )
                  })}
                </Grid>
              </Grid>
            </Hidden>
            <Hidden smUp>
              <Grid item xs={2}>
                {/*  <Hidden smDown>
                <IconButton aria-label="instagram" color="primary">
                  <InstagramIcon />
                </IconButton>
                <IconButton aria-label="facebook" color="primary">
                  <FacebookIcon />
                </IconButton>
                <IconButton aria-label="facebook" color="primary">
                  <YouTubeIcon />
                </IconButton>
                <IconButton aria-label="email" color="primary">
                  <EmailOutlinedIcon />
                </IconButton>
                <IconButton aria-label="phone" color="primary">
                  <PhoneOutlinedIcon />
                </IconButton>
              </Hidden> */}

                <IconButton
                  aria-label="menu"
                  color="primary"
                  onClick={() => {
                    openSideBar()
                  }}
                >
                  <MenuIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default TopBar
