import React, {useState} from 'react';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function StudentAvatarChange({user, onUpdateUser}) {
  const [open, setOpen] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  function handleSubmit(e) {
    e.preventDefault();
    console.log("clicked")
    fetch(`/students/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({avatar_url: avatarUrl})
    })
    .then((res) => res.json())
    .then((student) => onUpdateUser(student))
  }

  return (
    <div>
    <Avatar onClick={handleClickOpen} src={user.avatar_url} sx={{ width: 90, height: 90 }}/>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Update Avatar</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Change your avatar by entering a URL.  This image will be visible on your Teacher's dashboard, so choose wisely.
        </DialogContentText>
        <form onSubmit={handleSubmit} id="avatar">
          <TextField
            autoFocus
            margin="dense"
            id="avatar"
            label="Avatar URL"
            type="text"
            fullWidth
            value={avatarUrl}
            onChange={(e) => setAvatarUrl(e.target.value)}
            variant="standard"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type='submit' form="avatar" onClick={handleClose}>Submit</Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default StudentAvatarChange