import React, { useState } from "react"

//material UI
import { makeStyles, useTheme } from "@material-ui/core/styles"

//components
import TopbarOffers from "./components/TopBar/TopBarOffers"
import Footer from "./components/Footer/Footer"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
  },
}))

interface Props {
  children: React.ReactNode
}

const Offers = ({ children }: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <>
      <TopbarOffers />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Offers
