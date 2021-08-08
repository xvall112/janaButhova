import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/core/styles"
import { Button } from "@material-ui/core"
import { LearnMoreLink } from "components/atoms"
import { SectionHeader } from "components/molecules"
import { HeroShaped } from "components/organisms"

const useStyles = makeStyles(theme => {
  const toolbar = theme.mixins.toolbar as any
  return {
    root: {
      "& .hero-shaped": {
        borderBottom: 0,
      },
      "& .hero-shaped__wrapper": {
        [theme.breakpoints.up("md")]: {
          minHeight: `calc(100vh - ${toolbar["@media (min-width:600px)"].minHeight}px)`,
        },
      },
    },
    formContainer: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("sm")]: {
        maxWidth: 500,
        margin: `0 auto`,
      },
    },
    image: {
      objectFit: "cover",
    },
    label: {
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  }
})

const NotFoundCover = (): JSX.Element => {
  const classes = useStyles()

  const handleClick = (): void => {
    window.history.back()
  }

  return (
    <div className={classes.root}>
      <HeroShaped
        leftSide={
          <div className={classes.formContainer}>
            <SectionHeader
              subtitleColor="secondary"
              label="404"
              title="Tudy cesta nevede"
              subtitle={<span>Vrať se zpět a pojď si dát do těla </span>}
              titleProps={{
                variant: "h3",
              }}
              labelProps={{
                color: "primary",
                className: classes.label,
                variant: "h5",
              }}
              ctaGroup={[
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                >
                  Vrátit se zpět
                </Button>,
              ]}
              disableGutter
            />
          </div>
        }
        rightSide={
          <StaticImage
            src="../../assets/images/404.jpg"
            alt="404"
            className={classes.image}
          />
        }
      />
    </div>
  )
}

export default NotFoundCover
