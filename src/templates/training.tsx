import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
//components
import LayoutOffers from "../layouts/Main/Offers"
import SEO from "../components/seo"
import WithLayout from "../../WithLayout"
import { Section } from "components/organisms"
import ContentfulBody from "./components/contentfulBody"
import NextOffer from "./components/NextOffer"
//material UI
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { Button, useMediaQuery, Grid, Box, Typography } from "@material-ui/core"

export const query = graphql`
  query($slug: String!) {
    contentfulNabizim(slug: { eq: $slug }) {
      slug
      longDescription {
        raw
      }
      obrazek {
        gatsbyImageData
      }
      title
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },
  title: {
    textTransform: "uppercase",
  },
}))

const Training = props => {
  const classes = useStyles()
  const Offers = () => {
    return (
      <>
        <div style={{ display: "grid" }}>
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              height: "30vh",
              zIndex: 100,
              // This centers the other elements inside the hero component
              placeItems: "end",
              display: "grid",
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.9) 88%)",
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-end"
            >
              <Grid item xs={12}>
                <Typography variant="h2" color="textPrimary" align="center">
                  <Box fontWeight="bold" mt="auto" className={classes.title}>
                    {props.data.contentfulNabizim.title}
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </div>
          <GatsbyImage
            image={props.data.contentfulNabizim.obrazek.gatsbyImageData}
            alt={props.data.contentfulNabizim.obrazek.title}
            style={{
              gridArea: "1/1",
              height: "30vh",
              zIndex: 1,

              // You can set a maximum height for the image, if you wish.
              // maxHeight: 600,
            }}
          />
        </div>
        <Section>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={8}
          >
            <Grid item xs={12} md={8}>
              <Typography color="secondary">
                <ContentfulBody
                  body={props.data.contentfulNabizim.longDescription}
                />
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography color="secondary" variant="h5">
                <Box fontWeight="bold" mb={2}>
                  Další
                </Box>
                <NextOffer />
              </Typography>
            </Grid>
          </Grid>
        </Section>
      </>
    )
  }
  return (
    <>
      <SEO title={props.data.contentfulNabizim.title} />
      <WithLayout component={Offers} layout={LayoutOffers} />
    </>
  )
}

export default Training
