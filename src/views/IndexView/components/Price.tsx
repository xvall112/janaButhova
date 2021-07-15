import React from "react"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import { AccordionDetails, Grid } from "@material-ui/core"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      fontSize: "16px",
      fontWeight: "bold",
    },
    secondaryHeading: {
      color: theme.palette.primary.main,
      float: "right",
      fontWeight: "bold",
      fontSize: "18px",
    },
  })
)

const Price = ({ pricePersonal, priceGroup, pricePoradenstvi }) => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={classes.root} id="price">
      <h2>Skupinové</h2>
      {priceGroup.map((item, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item xs={8}>
                    <Typography className={classes.heading} variant="button">
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography className={classes.secondaryHeading}>
                      {item.price} Kč
                    </Typography>
                  </Grid>
                </Grid>
              </>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.description} </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
      <h2>Osobní</h2>
      {pricePersonal.map((item, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item xs={8}>
                    <Typography className={classes.heading} variant="button">
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography className={classes.secondaryHeading}>
                      {item.price} Kč
                    </Typography>
                  </Grid>
                </Grid>
              </>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.description} </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
      <h2>Poradenství</h2>
      {pricePoradenstvi.map((item, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item xs={8}>
                    <Typography className={classes.heading} variant="button">
                      {item.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography className={classes.secondaryHeading}>
                      {item.price} Kč
                    </Typography>
                  </Grid>
                </Grid>
              </>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.description} </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  )
}
export default Price
