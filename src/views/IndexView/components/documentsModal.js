import * as React from "react"
import Dialog from "@mui/material/Dialog"
import Button from "@mui/material/Button"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Grid from "@mui/material/Grid"

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
        color="primary"
        onClick={handleClickOpen}
        fullWidth
      >
        Dokumenty
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
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
                    variant="contained"
                    color="secondary"
                    component={"a"}
                    href="../../../assets/documents/organizationInformation.docx"
                    sx={{ minWidth: { xs: 250, md: 400 } }}
                  >
                    Organizační informace
                  </Button>
                )}

                <Button
                  variant="contained"
                  color="secondary"
                  component={"a"}
                  href="../../../assets/documents/certifikat_jana_buthova.jpg"
                  sx={{ minWidth: { xs: 250, md: 400 } }}
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
