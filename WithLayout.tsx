import React, { useEffect } from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import { Paper } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import getTheme from "./src/theme/index"
import { Helmet } from "react-helmet"
import AOS from "aos"
import "aos/dist/aos.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    width: "90vh",
  },
}))

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
  const classes = useStyles()
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <ThemeProvider theme={getTheme("light")}>
      <CssBaseline />
      <Helmet>
        <script
          src="https://kit.fontawesome.com/4c273e6d43.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

      <Paper elevation={0}>
        <Layout>
          <Component themeMode={"light"} {...rest} />
        </Layout>
      </Paper>
    </ThemeProvider>
  )
}
