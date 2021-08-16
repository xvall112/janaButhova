import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery, Grid } from "@material-ui/core"
import { SectionHeader } from "components/molecules"
import { CardReview } from "components/organisms"
import SwiperComponent from "../../../components/swiper"

const query = graphql`
  {
    allContentfulRecenze {
      nodes {
        text
        jmeno
        fotka {
          file {
            url
          }
        }
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {},
}))

const Reviews = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()
  const data = useStaticQuery(query)
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  return (
    <div className={classes.root} {...rest}>
      <Grid container>
        <Grid item xs={12}>
          <SectionHeader
            title="Recenze"
            subtitle=""
            subtitleColor="primary"
            fadeUp
            align="left"
          />
        </Grid>
        <Grid item xs={12}>
          <SwiperComponent
            data={data.allContentfulRecenze.nodes.map(
              (review: any, index: number) => (
                <CardReview
                  key={index}
                  variant="contained"
                  text={review.text}
                  authorName={review.jmeno}
                  authorPhoto={review.fotka && review.fotka.file.url}
                />
              )
            )}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Reviews
