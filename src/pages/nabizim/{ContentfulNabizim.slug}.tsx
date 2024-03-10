import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import scrollTo from "gatsby-plugin-smoothscroll"
//components
import LayoutOffers from "../../layouts/Main/Offers"
import SEO from "../../components/seo"
import WithLayout from "../../../WithLayout"
import { Section } from "components/organisms"
import ContentfulBody from "../../components/contentfulBody"
import NextOffer from "../../components/NextOffer"
import DocumentsModal from "../../views/IndexView/components/documentsModal"
//material UI
import { makeStyles } from "@material-ui/core/styles"
import { Button, Grid, Box, Typography } from "@material-ui/core"

export const query = graphql`
  query($slug: String!) {
    contentfulNabizim(slug: { eq: $slug }) {
      slug
      longDescription {
        raw
      }
      obrazek {
        gatsbyImageData(placeholder: BLURRED)
        title
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
  console.log(props.location.pathname)
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
                  <Box
                    fontWeight="bold"
                    mt="auto"
                    px={1}
                    className={classes.title}
                  >
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

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={8}>
            <Section>
              <>
                <Typography color="secondary" component="span">
                  <ContentfulBody
                    body={props.data.contentfulNabizim.longDescription}
                  />
                </Typography>

                <Box
                  display="flex"
                  flexDirection={{ xs: "column", sm: "row" }}
                  alignItems="center"
                  justifyContent="center"
                  mt={4}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => scrollTo("#contact")}
                  >
                    Jdu do toho!
                  </Button>
                  <DocumentsModal currentPath={props.location.pathname} />
                </Box>
              </>
            </Section>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box mt={{ xs: 0, md: 6 }}>
              <Typography color="secondary" variant="h4">
                <Box fontWeight="bold" py={2} pl={{ xs: 2, md: 0 }}>
                  Další
                </Box>
              </Typography>

              <NextOffer />
            </Box>
          </Grid>
        </Grid>
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
