import * as React from "react"
import { navigate } from "gatsby"

//material UI
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft"

import {
  useMediaQuery,
  AppBar,
  Toolbar,
  Grid,
  IconButton,
} from "@material-ui/core"

import {
  createStyles,
  useTheme,
  Theme,
  makeStyles,
} from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
)

const TopBar = (): JSX.Element => {
  const classes = useStyles()
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  return (
    <header>
      <AppBar position="absolute" color="transparent">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item>
            <IconButton onClick={() => navigate("/")}>
              <KeyboardArrowLeftIcon fontSize="large" color="primary" />
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>
    </header>
  )
}

export default TopBar
