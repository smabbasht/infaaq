import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import Switch from "@mui/material/Switch";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";

function SimpleModal() {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  const [checked, setChecked] = useState(true);

  const handleChecked = () => setChecked(!checked);

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} justifyContent="right" mx="auto">
          <MKButton variant="gradient" color="info" onClick={toggleModal}>
            Add Event
          </MKButton>
        </Grid>
        <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
          <Slide direction="down" in={show} timeout={500}>
            <MKBox
              position="relative"
              width="500px"
              display="flex"
              flexDirection="column"
              borderRadius="xl"
              bgColor="white"
              shadow="xl"
            >
              <MKBox display="flex" alignItems="center" justifyContent="space-between" p={2}>
                <MKTypography variant="h5">Add Event</MKTypography>
                <CloseIcon fontSize="medium" sx={{ cursor: "pointer" }} onClick={toggleModal} />
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <MKBox p={2}>
                <Container>
                  <Grid container item xs={12} sx={{ mx: "auto" }}>
                    <MKBox width="100%" component="form" method="post" autoComplete="off">
                      <MKBox p={3}>
                        <Grid container spacing={3}>
                          <Grid item xs={12}>
                            <MKInput variant="standard" label="Event Name" fullWidth />
                          </Grid>
                          {/* <Grid item xs={12} md={6}>
                            <MKInput variant="standard" label="Last Name" fullWidth />
                          </Grid> */}
                          <Grid item xs={12} md={6}>
                            <MKInput
                              variant="standard"
                              type="date"
                            //   label="Date"
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <MKInput
                              variant="standard"
                              type="time"
                            //   label="Time"
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <MKInput
                              variant="standard"
                              label="Address"
                              fullWidth
                            />
                            </Grid>
                            <Grid item xs={12} md={6}>
                            <MKInput
                              variant="standard"
                              type="number"
                              label="Contact"
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <MKInput
                              variant="standard"
                              type="number"
                              label="Donation"
                              fullWidth
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <MKInput
                              variant="standard"
                              label="Description"
                              multiline
                              fullWidth
                              rows={2}
                            />
                          </Grid>
                        </Grid>
                      </MKBox>
                    </MKBox>
                  </Grid>
                </Container>
              </MKBox>
              <Divider sx={{ my: 0 }} />
              <MKBox display="flex" justifyContent="space-between" p={1.5}>
                <MKButton variant="gradient" color="dark" onClick={toggleModal}>
                  close
                </MKButton>
                <MKButton variant="gradient" color="info">
                  Post
                </MKButton>
              </MKBox>
            </MKBox>
          </Slide>
        </Modal>
      </Container>
    </MKBox>
  );
}

export default SimpleModal;
