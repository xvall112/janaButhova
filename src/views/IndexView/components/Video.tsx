import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Grid, Box } from "@material-ui/core"
import { SectionHeader } from "components/molecules"
import ReactPlayer from "react-player/youtube"
import SwiperComponent from "../../../components/swiper"
import InstagramEmbed, {
  isInstagramUrl,
} from "../../../components/InstagramEmbed"

const query = graphql`
  {
    allContentfulYoutubeVideo {
      nodes {
        linkNaVideo
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  root: {},
  sectionNoPaddingY: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}))

const Video = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const data = useStaticQuery(query)
  const classes = useStyles()
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })
  const isSm = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  })

  const nodes = (data?.allContentfulYoutubeVideo?.nodes || []).filter(
    (item: any) => item?.linkNaVideo
  )

  if (nodes.length === 0) {
    return <></>
  }

  return (
    <div className={classes.root} {...rest}>
      <Grid container>
        <Grid item xs={12}>
          <SectionHeader
            title="Videa"
            subtitle=""
            subtitleColor="primary"
            fadeUp
            align="left"
          />
        </Grid>
        <Grid item xs={12}>
          <SwiperComponent
            data={nodes.map((item: any, index: number) => {
              if (isInstagramUrl(item.linkNaVideo)) {
                return (
                  <InstagramEmbed key={index} url={item.linkNaVideo} />
                )
              }
              return (
                <ReactPlayer
                  key={index}
                  url={item.linkNaVideo}
                  controls={true}
                  width="100%"
                  height="200px"
                />
              )
            })}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Video
