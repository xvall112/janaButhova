import React from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Grid, Typography, Box } from "@material-ui/core"

import { CardBasePrice, CardBase } from "components/organisms"

const useStyles = makeStyles(theme => ({
  cardTreninky: {
    backgroundColor: theme.palette.primary.main,
  },
}))

const Price = ({ data, treninkData, className, ...rest }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  return (
    <div className={clsx(className)} {...rest}>
      <Grid container spacing={2}>
        {data.map((item: any, index: number) => {
          return (
            <Grid item xs={12} md={4} data-aos="fade-up" key={index}>
              <CardBasePrice
                liftUp
                noBorder
                title={item.title}
                buttonText={item.button}
                data={item.features}
              />
            </Grid>
          )
        })}
        <Grid item xs={12} md={4}>
          <CardBase align="left" className={classes.cardTreninky}>
            <>
              <Typography variant="h4" color="secondary">
                Tréninky
              </Typography>
              {treninkData.map((item, index) => {
                return (
                  <Box key={index} mt={2} key={index}>
                    <Typography variant="h5" color="secondary">
                      {item.title}
                    </Typography>
                    {item.days.map((item, index) => {
                      return (
                        <Box key={index}>
                          <Typography variant="body1" color="secondary">
                            {item}
                          </Typography>
                        </Box>
                      )
                    })}
                  </Box>
                )
              })}
            </>
          </CardBase>
        </Grid>
      </Grid>
    </div>
  )
}
export default Price
