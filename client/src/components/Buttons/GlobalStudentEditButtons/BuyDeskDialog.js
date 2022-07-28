import React, {useState} from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Select, MenuItem, FormControl, InputLabel} from '@mui/material'



function BuyDeskDialog({params}) {
  //dialog state and helper functions/////////////////////////////////////////////////////
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  //select state and helper functions////////////////////////////////////////////////////
  const [deskNum, setDeskNum] = useState('');
  const [studentId, setStudentId] = useState('');
  const [isOwnedOrRented, setIsOwnedOrRented] = useState("");
  const [studentDeskId, setStudentDeskId] = useState("")
  const [paramsStudentDeskObj, setParamsStudentDeskObj] = useState('')
  const [deskId, setDeskId] = useState('')
  
  
  function handleBuyDeskSubmit(e) {
    e.preventDefault()

    const ownershipStatus = isOwnedOrRented[0]
    const deskID = deskId[0]
       
    const newOwnDeskObject = { //POST object for new student_desk instance
      is_owned_or_rented: "owned",
      student_id: studentId,
      desk_id: deskNum
    }

    const updateOwnershipObject = {//PATCH object for updating existing student_desk from 'rented' to 'owned'
      is_owned_or_rented: 'owned'
    }

   if (ownershipStatus === 'rented' && deskNum === deskID ) {
    fetch(`/student_desks/${studentDeskId[0]}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateOwnershipObject)
    })
    .then((res) => res.json())
    .then((updatedStudentDeskObject) => console.log(updatedStudentDeskObject)) 
   
  } else {

    fetch('/student_desks', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newOwnDeskObject)
    })
    .then((res) => res.json())
    .then((newStudentDeskObject) => console.log(newStudentDeskObject))
   }
  }
   
  function handleChange(e) {
    setDeskNum(e.target.value)
    setStudentId(params.row.id)
    setIsOwnedOrRented(params.row.student_desks.map((desk) => desk.is_owned_or_rented))
    setStudentDeskId(params.row.student_desks.map((desk) => desk.id))
    setParamsStudentDeskObj(params.row.student_desks.map((desk) => desk.student_id))
    setDeskId(params.row.student_desks.map((desk) => desk.desk_id))
  }

  return (
    <div>
      <Button 
        variant="contained"
        onClick={handleClickOpen}
        size="small"
        color='info'
      >
        Buy Desk
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Buy a Desk</DialogTitle>
          <DialogContent>
            <form onSubmit={handleBuyDeskSubmit} id="deskSelect"> 
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-simple-select-label">Select one</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={deskNum}
                label="Desks"
                onChange={handleChange}
              >    
                <MenuItem value={1}>Desk #1</MenuItem>
                <MenuItem value={2}>Desk #2</MenuItem>
                <MenuItem value={3}>Desk #3</MenuItem>
                <MenuItem value={4}>Desk #4</MenuItem>
                <MenuItem value={5}>Desk #5</MenuItem>
                <MenuItem value={6}>Desk #6</MenuItem>
                <MenuItem value={7}>Desk #7</MenuItem>
                <MenuItem value={8}>Desk #8</MenuItem>
                <MenuItem value={9}>Desk #9</MenuItem>
                <MenuItem value={10}>Desk #10</MenuItem>
                <MenuItem value={11}>Desk #11</MenuItem>
                <MenuItem value={12}>Desk #12</MenuItem>
                <MenuItem value={13}>Desk #13</MenuItem>
                <MenuItem value={14}>Desk #14</MenuItem>
                <MenuItem value={15}>Desk #15</MenuItem>
                <MenuItem value={16}>Desk #16</MenuItem>
                <MenuItem value={17}>Desk #17</MenuItem>
                <MenuItem value={18}>Desk #18</MenuItem>
                <MenuItem value={19}>Desk #19</MenuItem>
                <MenuItem value={20}>Desk #20</MenuItem>
                <MenuItem value={21}>Desk #21</MenuItem>
                <MenuItem value={22}>Desk #22</MenuItem>
                <MenuItem value={23}>Desk #23</MenuItem>
                <MenuItem value={24}>Desk #24</MenuItem>
                <MenuItem value={25}>Desk #25</MenuItem>
                <MenuItem value={26}>Desk #26</MenuItem>
                <MenuItem value={27}>Desk #27</MenuItem>
                <MenuItem value={28}>Desk #28</MenuItem>
                <MenuItem value={29}>Desk #29</MenuItem>
                <MenuItem value={30}>Desk #30</MenuItem>
              </Select>
            </FormControl>
            </form>
          </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit' form="deskSelect" onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default BuyDeskDialog