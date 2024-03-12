import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import clsx from "clsx"
import { graphql, useStaticQuery } from "gatsby"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import {
  useMediaQuery,
  Grid,
  Typography,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core"

import { CardBasePrice, CardBase } from "components/organisms"

export const query = graphql`
  {
    rozvrh: allContentfulRozvrh {
      nodes {
        id
        kde
        kdy {
          kdy
        }
      }
    }
    osvedceni: allContentfulOsvedceni {
      nodes {
        osvedceni {
          gatsbyImageData(placeholder: BLURRED)
          title
        }
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  cardTreninky: {
    backgroundColor: theme.palette.primary.main,
  },
  cardOsvedceni: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      cursor: "pointer",
    },
  },
}))

const Price = ({ price, className, ...rest }) => {
  const data = useStaticQuery(query)
  const classes = useStyles()
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  return (
    <>
      <div className={clsx(className)} {...rest}>
        <Grid container spacing={2}>
          {price.map((item: any, index: number) => {
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
                {data.rozvrh.nodes.map((item, index) => {
                  return (
                    <Box key={index} mt={2}>
                      <Typography variant="h5" color="secondary">
                        {item.kde}
                      </Typography>
                      <Box key={index}>
                        <pre>
                          <Typography variant="body1" color="secondary">
                            {item.kdy.kdy}
                          </Typography>
                        </pre>
                      </Box>
                      {/* {item.days.map((item, index) => {
                      return (
                        <Box key={index}>
                          <Typography variant="body1" color="secondary">
                            {item}
                          </Typography>
                        </Box>
                      )
                    })} */}
                    </Box>
                  )
                })}
              </>
            </CardBase>
          </Grid>

          {data.osvedceni?.nodes.map((item, index) => {
            const { osvedceni } = item
            const [open, setOpen] = useState(false)
            const handleClose = () => {
              setOpen(false)
            }
            return (
              <>
                <Grid item xs={12} md={4} key={index}>
                  <CardBase
                    liftUp
                    align="left"
                    className={classes.cardOsvedceni}
                    onClick={() => setOpen(true)}
                  >
                    <GatsbyImage
                      image={osvedceni.gatsbyImageData}
                      alt={osvedceni.title}
                      style={{
                        gridArea: "1/1",
                        width: "100%",
                        height: "100%",
                        zIndex: 1,
                        opacity: 0.9
                      }}
                    />
                  </CardBase>
                </Grid>
                <Dialog
                  open={open}
                  
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogContent>
                    <GatsbyImage
                      image={osvedceni.gatsbyImageData}
                      alt={osvedceni.title}
                      style={{
                        gridArea: "1/1",

                        height: "100%",
                        zIndex: 1,
                      }}
                    />
                  </DialogContent>
                </Dialog>
              </>
            )
          })}
        </Grid>
      </div>
    </>
  )
}
export default Price
