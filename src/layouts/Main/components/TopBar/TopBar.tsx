import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    appBar: {
      backgroundColor: theme.palette.alternate.main,
    },
    navigation: {
      "& :hover": {
        cursor: "pointer",
        color: theme.palette.primary.light,
      },
    },
    toolbar: {
      zIndex: 999,
      maxWidth: theme.layout.contentWidth,
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
  return (
    <header>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <StaticImage
                src="../../../../assets/images/logoo.png"
                alt="Logo Jana Buthova"
                placeholder="blurred"
                layout="fixed"
                width={80}
                height={80}
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
            <Grid item>
              <IconButton aria-label="instagram" color="primary">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="facebook" color="primary">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="email" color="primary">
                <EmailOutlinedIcon />
              </IconButton>
              <IconButton aria-label="phone" color="primary">
                <PhoneOutlinedIcon />
              </IconButton>
              <Hidden smUp>
                <IconButton
                  aria-label="phone"
                  color="primary"
                  onClick={() => {
                    openSideBar()
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default TopBar
