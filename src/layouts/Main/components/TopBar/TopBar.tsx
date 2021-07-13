import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//components

//material UI
import {
  useMediaQuery,
  AppBar,
  Toolbar,
  Grid,
  Box,
  Container,
} from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import {
  createStyles,
  useTheme,
  Theme,
  makeStyles,
} from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import InstagramIcon from "@material-ui/icons/Instagram"

interface Props {
  themeMode: string
  themeToggler: Function
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
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

const TopBar = ({ themeMode, themeToggler }: Props): JSX.Element => {
  const classes = useStyles()
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })
  return (
    <header>
      <Container className={classes.root}>
        <AppBar position="fixed" color="transparent">
          <Toolbar className={classes.toolbar}>
            <StaticImage
              src="../../../../assets/images/logo.jpg"
              alt="Logo Jana Buthova"
              placeholder="blurred"
              layout="fixed"
              width={100}
              height={100}
            />
          </Toolbar>
        </AppBar>
      </Container>
    </header>
  )
}

export default TopBar
