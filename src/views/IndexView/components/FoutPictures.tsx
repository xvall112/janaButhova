import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
//materialUI
import Grid from "@material-ui/core/Grid"

const query = graphql`
  {
    contentfulHlavniStranka4Obrazky {
      obrazky {
        gatsbyImageData
      }
    }
  }
`

const FoutPictures = () => {
  const data = useStaticQuery(query)
  console.log(data)
  return (
    <div>
      <Grid container>
        {data.contentfulHlavniStranka4Obrazky.obrazky.map((item, index) => {
          return (
            <Grid item xs={6} md={3} key={index}>
              <GatsbyImage image={item.gatsbyImageData} alt={item.title} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default FoutPictures
