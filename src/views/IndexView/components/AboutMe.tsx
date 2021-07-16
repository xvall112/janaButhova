import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import scrollTo from "gatsby-plugin-smoothscroll"
import {
  useMediaQuery,
  Grid,
  Button,
  colors,
  Box,
  Typography,
} from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import { SectionHeader, IconAlternate } from "components/molecules"
import { DescriptionListIcon } from "components/organisms"
import { Icon } from "components/atoms"
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined"
const useStyles = makeStyles(() => ({
  image: {
    maxWidth: 420,
  },
}))

const AboutMe = ({ data, className, ...rest }): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  return (
    <div className={className} {...rest} id="aboutMe">
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        direction={isMd ? "row" : "column-reverse"}
      >
        <Grid
          item
          container
          alignItems="center"
          justify="flex-start"
          xs={12}
          md={8}
          data-aos={"fade-up"}
          spacing={4}
        >
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
                    ALE SÍLA A VYTRVALOST
                  </Typography>
                </span>
              }
              subtitle="„Postavíme dům od základů“ – není to pouze o tom si stoupnout před klienta a začít s ním cosi cvičit….spousta trenérů v dnešní době jde s klienty rovnou cvičit náročné cviky, jako je např. plank, benchpress a jiné v domnění, že z nich rovnou udělají mistry ve cvičení. Opak je ale pravdou."
              align="left"
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
        <Grid
          item
          container
          justify={isMd ? "flex-end" : "flex-start"}
          alignItems="center"
          xs={12}
          md={4}
          data-aos={"fade-up"}
        >
          <StaticImage
            src="../../../assets/images/IMG-20210627-WA0025.jpg"
            alt="Jana Buthova"
            placeholder="blurred"
            layout="fixed"
            width={400}
            height={500}
          />
        </Grid>
      </Grid>
      <Box mt={4}>
        <Grid container spacing={4}>
          {data.map((item: any, index: number) => (
            <Grid key={index} item xs={12} sm={6} md={3} data-aos="fade-up">
              <DescriptionListIcon
                align="left"
                title={item.title}
                subtitle={item.description}
                icon={
                  <Icon
                    fontIconClass={item.icon}
                    size="medium"
                    fontIconColor={theme.palette.primary.main}
                  />
                }
              />
            </Grid>
          ))}
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
