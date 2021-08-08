import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

//materialUI
import { makeStyles, useTheme } from "@material-ui/core/styles"
import {
  useMediaQuery,
  Grid,
  Button,
  colors,
  Box,
  Typography,
} from "@material-ui/core"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { SectionHeader, IconAlternate } from "components/molecules"
import { DescriptionListIcon } from "components/organisms"
import { Icon } from "components/atoms"

const query = graphql`
  {
    allContentfulOMneDalsi {
      nodes {
        popis
        titulek
        icon
        obrazek {
          gatsbyImageData(width: 400, placeholder: BLURRED)
          title
        }
      }
    }
  }
`

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: 420,
  },
}))

const AboutMe = ({ data, className, ...rest }): JSX.Element => {
  const classes = useStyles()
  const dataDalsi = useStaticQuery(query)
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  return (
    <div className={className} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        direction={isMd ? "row" : "column-reverse"}
      >
        <Grid item xs={12} md={8} data-aos={"fade-up"}>
          <Grid container alignItems="center" justify="flex-start" spacing={4}>
            <Grid item xs={12}>
              <SectionHeader
                title={
                  <span>
                    <span>ŽÁDNÉ FITNESS CENTRUM!</span>{" "}
                    <Typography
                      component="span"
                      variant="inherit"
                      color="primary"
                    >
                      ALE SÍLA A VYTRVALOST V USPĚCHANÉ DOBĚ
                    </Typography>
                  </span>
                }
                subtitle="„Postavíme dům od základů“ – není to pouze o tom si stoupnout před klienta a začít s ním cosi cvičit….spousta trenérů v dnešní době jde s klienty rovnou cvičit náročné cviky, jako je např. plank, benchpress a jiné v domnění, že z nich rovnou udělají mistry ve cvičení. Opak je ale pravdou."
                align="center"
                disableGutter
                subtitleProps={{
                  variant: "body1",
                }}
              />
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              direction="column"
              xs={12}
              sm={12}
              md={6}
              data-aos="fade-up"
            >
              <DescriptionListIcon
                icon={
                  <IconAlternate
                    fontIconClass="fas fa-check"
                    color={colors.green}
                  />
                }
                title="Co získáte se mnou?"
                subtitle="Perfektní stabilizaci těla, dechový stereotyp a napravení dosavadních dysbalancí. Proto musím být při své práci především trpělivá a předat klientovi co nejvíce potřebných informací a zkušeností se cvičením."
                align="left"
              />
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              direction="column"
              xs={12}
              sm={12}
              md={6}
              data-aos="fade-up"
            >
              <DescriptionListIcon
                icon={
                  <IconAlternate
                    fontIconClass="fas fa-times"
                    color={colors.red}
                  />
                }
                title="Fitness objemové tréninky ode mne nečekejte."
                subtitle=" Specializuji se hlavně na cvičení s vlastním tělem a funkční cvičení. Tělo tak získává postupem času velkou sílu, vytrvalost, rychlost, dynamiku."
                align="left"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify={isMd ? "flex-end" : "flex-start"}
          alignItems="center"
          xs={12}
          md={4}
          data-aos={"fade-up"}
        >
          <Box mx="auto">
            <StaticImage
              src="../../../assets/images/aboutMe.png"
              alt="Jana Buthova"
              placeholder="blurred"
              layout="fixed"
              width={300}
            />
          </Box>
        </Grid>
      </Grid>
      <Box mt={4}>
        <Grid container spacing={4}>
          {dataDalsi.allContentfulOMneDalsi.nodes.map(
            (item: any, index: number) => (
              <Grid key={index} item xs={12} sm={6} md={4} data-aos="fade-up">
                <div
                  style={{
                    display: "grid",
                    height: "200px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      // By using the same grid area for both, they are stacked on top of each other
                      gridArea: "1/1",
                      position: "relative",
                      height: "auto",
                      zIndex: 100,
                      // This centers the other elements inside the hero component
                      display: "grid",
                      background:
                        "radial-gradient(circle, rgba(0,0,0,0.4990371148459384) 0%, rgba(0,0,0,1) 77%)",
                      width: "100%",
                      padding: "20px 0",
                    }}
                  >
                    <DescriptionListIcon
                      align="left"
                      title={item.titulek}
                      subtitle={item.popis}
                      icon={
                        <Icon
                          fontIconClass={item.icon}
                          size="large"
                          fontIconColor={theme.palette.primary.main}
                        />
                      }
                    />
                  </div>
                  <GatsbyImage
                    image={item.obrazek.gatsbyImageData}
                    alt={item.obrazek.title}
                    style={{
                      gridArea: "1/1",

                      zIndex: 1,
                      // You can set a maximum height for the image, if you wish.
                      // maxHeight: 600,
                    }}
                  />
                </div>
              </Grid>
            )
          )}
        </Grid>
      </Box>
      <Box mt={5}>
        <Grid container spacing={4}>
          <Grid item container xs={12} justify="center">
            <Button
              variant="outlined"
              size="large"
              color="primary"
              onClick={() => scrollTo("#training")}
            >
              začni hned
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default AboutMe
