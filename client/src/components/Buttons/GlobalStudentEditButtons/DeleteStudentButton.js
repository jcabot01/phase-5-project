import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../features/studentsSlice';

function DeleteStudentButton({params}) {
  const [open, setOpen] = React.useState(false);
  const studentId = params.row.id
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleDelete() {
    dispatch(deleteUser({id: studentId}))
    fetch(`/students/${studentId}`, {
      method: "DELETE",
    })
  }

  return (
    <div>
      <Button sx={{fontSize: "10px"}}
        variant="contained"
        size="small"
        color='error'
        onClick={handleClickOpen}>
          Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to DELETE this user?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action cannot be un-done.  Once you confirm, this student's data will be gone forever.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose  &&  handleDelete} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteStudentButton