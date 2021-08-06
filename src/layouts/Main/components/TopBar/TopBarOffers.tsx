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
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <IconButton onClick={() => navigate(-1)}>
                <KeyboardArrowLeftIcon fontSize="large" color="primary" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default TopBar
