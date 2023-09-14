import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useDataCall from "../hooks/useDataCall";
import { btnGreen, btnRed, emojiStyle } from "../styles/globalStyles";
import { useNavigate } from "react-router";

const DeleteModal = ({ open, handleClose, id }) => {
  const { deleteData } = useDataCall();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    deleteData(id);
    handleClose();
    navigate("/");
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={emojiStyle}>
          <Typography mb={2} id="modal-modal-title" variant="h6" component="h2">
            Do you really want to delete this blog?
          </Typography>
          <Box display={"flex"} justifyContent={"center"} gap={2}>
            <Button onClick={() => handleDelete(id)} sx={btnGreen}>
              YES
            </Button>
            <Button onClick={handleClose} sx={btnRed}>
              NO
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteModal;
