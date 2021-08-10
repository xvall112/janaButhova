import React from "react"

//material UI
import { makeStyles } from "@material-ui/core/styles"

//components

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
  },
}))

interface Props {
  children: React.ReactNode
}

const Minimal = ({ children }: Props): JSX.Element => {
  const classes = useStyles()
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Minimal
