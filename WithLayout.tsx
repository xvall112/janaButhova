import React, { useState, useEffect } from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import { Paper } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import getTheme from "./src/theme/index"
import { Helmet } from "react-helmet"
import AOS from "aos"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {},
}))

export const useDarkMode = () => {
  const [themeMode, setTheme] = useState("light")
  const [mountedComponent, setMountedComponent] = useState(false)

  const setMode = mode => {
    window.localStorage.setItem("themeMode", mode)
    setTheme(mode)
  }

  const themeToggler = () => {
    themeMode === "light" ? setMode("light") : setMode("light")
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("themeMode")
    localTheme ? setTheme(localTheme) : setMode("light")
    setMountedComponent(true)
    AOS.refresh()
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [themeMode])

  return [themeMode, themeToggler, mountedComponent]
}

interface Props {
  layout: any
  component: any
  // All other props
  [x: string]: any
}

export default function WithLayout({
  component: Component,
  layout: Layout,
  ...rest
}: Props): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: "ease-in-out",
    })
  }, [])

  const [themeMode, themeToggler, mountedComponent] = useDarkMode()
  useEffect(() => {
    AOS.refresh()
  }, [mountedComponent])
  const classes = useStyles()
  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />
      <Helmet>
        <script
          src="https://kit.fontawesome.com/4c273e6d43.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

      <Paper elevation={0}>
        <Layout className={classes.root}>
          <Component themeMode={themeMode} {...rest} />
        </Layout>
      </Paper>
    </ThemeProvider>
  )
}
