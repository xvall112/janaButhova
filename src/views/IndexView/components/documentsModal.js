import * as React from "react"
import Dialog from "@material-ui/core/Dialog"
import Button from "@material-ui/core/Button"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core"

export default function AlertDialog({ documents }) {
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button
        ml={2}
        variant="contained"
        size="large"
        color="primary"
        onClick={handleClickOpen}
        fullWidth
      >
        Dokumenty
      </Button>
      <Dialog
        open={open}
        maxWidth="sm"
        onClose={handleClose}
        fullWidth
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          <Typography variant="h5" color="secondary">
            Dokumenty
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container direction="column" spacing={2}>
            {documents?.map((document, index) => (
              <Grid item xs={12} key={index}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={"a"}
                  href={document.file.url}
                  fullWidth
                  download
                >
                  {document.title}
                </Button>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  )
}
