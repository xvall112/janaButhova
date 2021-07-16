import React, { useState } from "react"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"
//material UI
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Divider } from "@material-ui/core"
//components
import Topbar from "./components/TopBar/TopBar"
import Footer from "./components/Footer/Footer"
import Sidebar from "./components/Sidebar/Sidebar"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
  },
}))

interface Props {
  children: React.ReactNode
}

const Main = ({ children }: Props): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  const [openSidebar, setOpenSidebar] = useState<boolean>(false)

  const handleSidebarOpen = (): void => {
    setOpenSidebar(true)
  }

  const handleSidebarClose = (): void => {
    setOpenSidebar(false)
  }

  const open = isMd ? false : openSidebar

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar openSideBar={handleSidebarOpen} />
      <Sidebar onClose={handleSidebarClose} open={open} variant="temporary" />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Main
