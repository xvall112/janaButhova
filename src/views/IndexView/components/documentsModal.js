import * as React from "react"
import Dialog from "@material-ui/core/Dialog"
import Button from "@material-ui/core/Button"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Grid from "@material-ui/core/Grid"

export default function AlertDialog({ currentPath }) {
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
        variant="outlined"
        size="large"
        color="primary"
        onClick={handleClickOpen}
      >
        Dokumenty
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        width={{ xs: 300, md: 450 }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Dokumenty</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container direction="column" spacing={2}>
              <Grid item>
                {currentPath === "/nabizim/detske-cviceni" && (
                  <Button
                    variant="outlined"
                    color="primary"
                    component={"a"}
                    href="/src/assets/documents/organizationInformation.docx"
                    fullWidth
                  >
                    Organizační informace
                  </Button>
                )}

                <Button
                  variant="outlined"
                  color="primary"
                  component={"a"}
                  href="/src/assets/documents/certifikat_jana_buthova.jpg"
                  fullWidth
                >
                  Osvědčení
                </Button>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  )
}
