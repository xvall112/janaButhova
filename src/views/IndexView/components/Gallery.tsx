import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

//material UI
import { makeStyles, useTheme } from "@material-ui/core/styles"
import {
  useMediaQuery,
  Grid,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

import { SectionHeader } from "components/molecules"

const query = graphql`
  {
    allContentfulFotogalerie(sort: { fields: poradi, order: ASC }) {
      nodes {
        id
        nazev
        nahledovyObrazek {
          gatsbyImageData(placeholder: BLURRED, width: 800)
          title
        }
        fotky {
          id
          title
          thumb: gatsbyImageData(placeholder: BLURRED, width: 300, height: 300)
          full: gatsbyImageData(placeholder: BLURRED, width: 1600)
        }
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {},
  tile: {
    cursor: "pointer",
    "& > div": {
      borderRadius: 18,
      overflow: "hidden",
    },
    "& img": {
      transition: "transform .6s cubic-bezier(0.16, 1, 0.3, 1)",
      transform: "scale(1.0)",
    },
    "&:hover img": {
      transform: "scale(1.08)",
    },
    "&:hover $overlay": {
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.8) 100%)",
    },
    "&:hover $accent": {
      width: 90,
    },
  },
  overlay: {
    gridArea: "1/1",
    position: "relative",
    height: "40vh",
    zIndex: 100,
    placeItems: "center",
    display: "grid",
    transition: "background .5s ease",
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.7) 100%)",
  },
  accent: {
    width: 48,
    height: 4,
    borderRadius: 4,
    background: theme.palette.primary.main,
    margin: theme.spacing(1.5, "auto", 1),
    transition: "width .4s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  thumb: {
    cursor: "pointer",
    "& .gatsby-image-wrapper": {
      borderRadius: 12,
      overflow: "hidden",
    },
  },
  dialogPaper: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  lightboxContent: {
    position: "relative",
    padding: 0,
    background: "black",
    display: "grid",
    placeItems: "center",
    "&:first-child": {
      paddingTop: 0,
    },
  },
  lightboxButton: {
    position: "absolute",
    zIndex: 10,
    color: "white",
    background: "rgba(0, 0, 0, 0.3)",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.5)",
    },
  },
  lightboxPrev: {
    left: theme.spacing(1),
    top: "50%",
    transform: "translateY(-50%)",
  },
  lightboxNext: {
    right: theme.spacing(1),
    top: "50%",
    transform: "translateY(-50%)",
  },
  lightboxClose: {
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  lightboxTitle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 5,
    color: "white",
    textAlign: "center",
    padding: theme.spacing(2, 8),
    background:
      "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
  },
}))

const Gallery = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const data = useStaticQuery(query)
  const classes = useStyles()
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  const [openCategory, setOpenCategory] = React.useState(null)
  const [selectedIndex, setSelectedIndex] = React.useState(null)

  const categories = (data?.allContentfulFotogalerie?.nodes || []).filter(
    (node: any) => node?.fotky?.length > 0
  )

  if (categories.length === 0) {
    return <></>
  }

  const photos = openCategory?.fotky || []

  const showNext = () => setSelectedIndex((selectedIndex + 1) % photos.length)
  const showPrev = () =>
    setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length)

  const handleClose = () => {
    setOpenCategory(null)
    setSelectedIndex(null)
  }

  const handleKeyDown = (event: any) => {
    if (selectedIndex === null || photos.length <= 1) return
    if (event.key === "ArrowRight") showNext()
    if (event.key === "ArrowLeft") showPrev()
  }

  return (
    <div className={classes.root} {...rest}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SectionHeader
            title="Fotogalerie"
            subtitle=""
            subtitleColor="primary"
            fadeUp
            accent
            align="left"
          />
        </Grid>
        {categories.map((category: any, index: number) => {
          const cover = category.nahledovyObrazek || category.fotky[0]
          return (
            <Grid
              item
              xs={12}
              md={6}
              key={category.id || index}
              className={classes.tile}
              onClick={() => setOpenCategory(category)}
            >
              <div style={{ display: "grid" }}>
                <div className={classes.overlay}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    data-aos="fade-up"
                  >
                    <Typography component="span" variant="button">
                      <Box
                        fontSize={32}
                        fontWeight="bold"
                        letterSpacing={2}
                        textAlign="center"
                        color="white"
                      >
                        {category.nazev}
                      </Box>
                      <div className={classes.accent} />
                      <Box fontSize={18} textAlign="center" color="white">
                        {category.fotky.length} fotek
                      </Box>
                    </Typography>
                  </Grid>
                </div>
                <GatsbyImage
                  image={cover.gatsbyImageData || cover.thumb}
                  alt={category.nazev}
                  style={{
                    gridArea: "1/1",
                    height: "40vh",
                    zIndex: 1,
                  }}
                />
              </div>
            </Grid>
          )
        })}
      </Grid>

      <Dialog
        open={!!openCategory}
        onClose={handleClose}
        onKeyDown={handleKeyDown}
        maxWidth="md"
        fullWidth
        fullScreen={!isMd}
        PaperProps={{ className: classes.dialogPaper }}
      >
        {selectedIndex === null ? (
          <>
            <DialogTitle disableTypography>
              <Grid container justify="space-between" alignItems="center">
                <Typography variant="h5" color="secondary">
                  {openCategory?.nazev}
                </Typography>
                <IconButton
                  onClick={handleClose}
                  aria-label="zavřít"
                  color="secondary"
                >
                  <CloseIcon />
                </IconButton>
              </Grid>
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={1}>
                {photos.map((photo: any, index: number) => (
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    md={3}
                    key={photo.id || index}
                    className={classes.thumb}
                    onClick={() => setSelectedIndex(index)}
                  >
                    <GatsbyImage
                      image={photo.thumb}
                      alt={photo.title || openCategory?.nazev}
                    />
                  </Grid>
                ))}
              </Grid>
            </DialogContent>
          </>
        ) : (
          <DialogContent className={classes.lightboxContent}>
            <GatsbyImage
              image={photos[selectedIndex].full}
              alt={photos[selectedIndex].title || openCategory?.nazev}
              style={{ maxHeight: "90vh", width: "100%" }}
              objectFit="contain"
            />
            {photos.length > 1 && (
              <>
                <IconButton
                  className={`${classes.lightboxButton} ${classes.lightboxPrev}`}
                  onClick={showPrev}
                  aria-label="předchozí"
                >
                  <ChevronLeftIcon fontSize="large" />
                </IconButton>
                <IconButton
                  className={`${classes.lightboxButton} ${classes.lightboxNext}`}
                  onClick={showNext}
                  aria-label="další"
                >
                  <ChevronRightIcon fontSize="large" />
                </IconButton>
              </>
            )}
            <IconButton
              className={`${classes.lightboxButton} ${classes.lightboxClose}`}
              onClick={() => setSelectedIndex(null)}
              aria-label="zpět na náhledy"
            >
              <CloseIcon />
            </IconButton>
            {photos[selectedIndex].title && (
              <Typography variant="subtitle1" className={classes.lightboxTitle}>
                {photos[selectedIndex].title}
              </Typography>
            )}
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}

export default Gallery
