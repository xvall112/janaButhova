import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import {
  Card,
  CardContent,
  Box,
  Grid,
  Button,
  Typography,
} from "@material-ui/core"
import scrollTo from "gatsby-plugin-smoothscroll"

const useStyles = makeStyles(theme => ({
  root: {
    height: "auto",
    [theme.breakpoints.up("md")]: {
      height: "650px",
    },
    backgroundColor: theme.palette.alternate.main,
    width: "100%",
  },
  withShadow: {
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
  },
  button: {
    marginTop: theme.spacing(6),
    [theme.breakpoints.up("md")]: {
      marginTop: "auto",
    },
  },
  noShadow: {
    boxShadow: "none",
  },
  noBorder: {
    border: 0,
  },
  noBg: {
    background: "transparent",
  },
  liftUp: {
    transition:
      "box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease",
    "&:hover": {
      boxShadow:
        "0 1.5rem 2.5rem rgba(22,28,45,.1),0 .3rem 0.5rem -.50rem rgba(22,28,45,.05) !important",
      transform: "translate3d(0,-5px,0)",
    },
  },
  content: {
    height: "90%",
    padding: theme.spacing(2, 2),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3, 3),
    },
  },

  left: {
    alignItems: "flex-start",
  },
  right: {
    alignItems: "flex-end",
  },
  center: {
    alignItems: "center",
  },
  cardTitle: {
    color: theme.palette.alternate.main,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "24px",
    width: "100%",
    height: "auto",
  },
}))

/**
 * Component to display the basic card
 *
 * @param {Object} props
 */
const CardBasePrice = ({
  data,
  title,
  withShadow,
  noShadow,
  noBorder,
  noBg,
  liftUp,

  align = "center",
  className,
  textButton,
  buttonText,
  cardContentProps = {},
  ...rest
}) => {
  const classes = useStyles()

  return (
    <Card
      className={clsx(
        "card-base",
        classes.root,
        withShadow ? classes.withShadow : {},
        noShadow ? classes.noShadow : {},
        noBorder ? classes.noBorder : {},
        noBg ? classes.noBg : {},
        liftUp ? classes.liftUp : {},
        className
      )}
      {...rest}
    >
      <Box className={classes.cardTitle}>{title}</Box>
      <CardContent
        className={clsx("card-base__content", classes.content, classes[align])}
        {...cardContentProps}
      >
        <Box display="flex" flexDirection="column" height="100%">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <Box mt={3}>
                  <Typography variant="h5">
                    <Box fontWeight="bold">{item.title}</Box>
                  </Typography>
                </Box>
                {item.price.map((item, index) => {
                  return (
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                      key={index}
                    >
                      <Grid item xs={8}>
                        <Box mt={1}>
                          <Typography variant="body1" color="textSecondary">
                            {item.titlePrice}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box textAlign="right" mt={1}>
                          <Typography variant="h6" color="primary">
                            <Box fontWeight="bold">{item.cost} Kč</Box>
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  )
                })}
              </div>
            )
          })}

          <Box className={classes.button}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              fullWidth
              onClick={() => scrollTo("#contact")}
            >
              {buttonText}
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardBasePrice
