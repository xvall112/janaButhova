import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.alternate.main,
    overflow: "hidden",
  },
  primary: {
    background:
      " linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(254,221,88,0.7968137938769257) 100%)",
    overflow: "hidden",
  },
  secondary: {
    background: "transparent",
    overflow: "hidden",
  },
  inner: {
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(6, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(8, 8),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(12, 8),
    },
  },
  innerNarrowed: {
    maxWidth: 800,
  },
}))

/**
 * Component to display the alternative sections
 *
 * @param {Object} props
 */
const SectionAlternate = ({
  children,
  innerNarrowed,
  className,
  primary,
  secondary,
  ...rest
}: SectionAlternateProps): JSX.Element => {
  const classes = useStyles()

  return (
    <section
      className={
        primary
          ? clsx("section-alternate", classes.primary, className)
          : secondary
          ? clsx("section-alternate", classes.secondary, className)
          : clsx("section-alternate", classes.root, className)
      }
      {...rest}
    >
      <div
        className={clsx(
          "section-alternate__content",
          classes.inner,
          innerNarrowed ? classes.innerNarrowed : {}
        )}
      >
        {children}
      </div>
    </section>
  )
}

export default SectionAlternate
