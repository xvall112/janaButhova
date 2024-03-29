import React from "react"
import { useFormik } from "formik"
import * as yup from "yup"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import cogoToast from "cogo-toast"
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    "& a": { textDecoration: "none" },
    "& .MuiFormHelperText-root": {
      backgroundColor: theme.palette.alternate.main,
      margin: 0,
    },
    "& .MuiInputBase-root": {
      borderRadius: 0,
    },
  },

  form: {
    margin: `0 auto`,
    marginTop: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(10),
    },
    "& .MuiTextField-root": {
      background: theme.palette.background.paper,
    },
    "& .MuiOutlinedInput-input": {
      background: theme.palette.background.paper,
      color: theme.palette.alternate.main,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.1)",
      border: "solid 1px rgba(0, 0, 0, 0.2)",
    },
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
}))

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const validationSchema = yup.object({
  name: yup.string("Jmeno").required("Vyplňte jméno"),
  email: yup
    .string("Email")
    .email("Napište email ve správném tvaru")
    .required("Vyplňte email"),
  zprava: yup.string("Enter your email").required("Napiš zprávu"),
})

const ContactForm = props => {
  const { className, ...rest } = props
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      zprava: "",
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "KontaktniFormular",
          ...values,
        }),
      })
        .then(() => {
          cogoToast.success("Zpráva byla odeslána", {
            position: "top-right",
          })
          formik.resetForm()
        })
        .catch(error => cogoToast.alert(error, { position: "top-right" }))
    },
  })

  return (
    <div className={classes.root} {...rest}>
      <form
        onSubmit={formik.handleSubmit}
        data-netlify="true"
        name="KontaktniFormular"
        method="post"
      >
        <input type="hidden" name="KontaktniFormular" value="contact" />
        <div className={classes.form}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} data-aos="fade-up">
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.inputTitle}
              >
                Jméno
              </Typography>
              <TextField
                placeholder="Vaše jméno"
                variant="outlined"
                size="medium"
                fullWidth
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.inputTitle}
              >
                E-mail
              </Typography>
              <TextField
                placeholder="Váš Email"
                variant="outlined"
                size="medium"
                name="email"
                fullWidth
                type="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.inputTitle}
              >
                Zpráva
              </Typography>
              <TextField
                placeholder="Napište nám zprávu"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                id="zprava"
                name="zprava"
                value={formik.values.zprava}
                onChange={formik.handleChange}
                error={formik.touched.zprava && Boolean(formik.errors.zprava)}
                helperText={formik.touched.zprava && formik.errors.zprava}
              />
            </Grid>
            <Grid item container justify="center" xs={12}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                size="large"
              >
                odeslat
              </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
