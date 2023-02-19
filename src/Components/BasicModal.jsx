import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography, Modal, TextField } from "@mui/material";

import { RiLightbulbFlashLine } from "react-icons/ri";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  transition: "all 0.5s ease",
};

export function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="flex items-center gap-3" onClick={handleOpen}>
        <RiLightbulbFlashLine className="text-2xl font-bold " />
        <button className="" >
          Contact me
        </button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex flex-col gap-3">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Contact Form
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Enter the information to contact us 😀
          </Typography>
          <div className="flex flex-col gap-4 mt-4">
            <TextField
              required
              id="outlined-required"
              label="Your name"
              placeholder="pepito perez"
            />
            <TextField
              required
              id="outlined-required"
              label="Your Email "
              placeholder="pepito@mail.com"
            />
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              placeholder="We want to work together"
            />
            <div className=" flex justify-end gap-4">
              <button
                className="w-20 text-white  bg-red-500 rounded-xl p-2 text-center"
                variant="contained"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className="w-20 text-white  bg-blue-500 rounded-xl p-2 text-center"
                variant="contained"
              >
                Send
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
