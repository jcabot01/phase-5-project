import React, {useState} from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Select, MenuItem, FormControl, InputLabel} from '@mui/material'
// import BuyDeskSelect from './BuyDeskSelect';


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
  


  function handleBuyDeskSubmit(e) {
    e.preventDefault()
    console.log(deskNum)
    console.log(studentId)
    console.log(isOwnedOrRented)
    console.log(studentDeskId[0])

    // const newOwnDeskObject = {
    //   is_owned_or_rented: "owned",
    //   student_id: studentId,
    //   desk_id: deskNum
    // }

    const updateOwnershipObject = {
      is_owned_or_rented: 'owned'
    }
  // if desk_id params from cell === form values; it's a PATCH to student_desks/:id (based on params.row.student_desks.id); it's an update of is_owned_or_rented to "owned" from the existing "rented", otherwise, they already own it and can't buy it again.
  // if desk_id params from cell !=== form values; it's a POST to student_desks; the student is not affiliated with that desk yet.  We need studentId and deskNum and is_owned_or_rented to "owned"
  
      // if (params.row.student_desks.map((desk) => desk.desk_id) === deskNum && params.row.student_desks.map((desk) => desk.is_owned_or_rented) === "rented") {
      //   // if (params.row.student_desks.desk_id === deskNum && params.row.student_desks.is_owned_or_rented === "rented") {
       
  
    fetch(`/student_desks/${studentDeskId[0]}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateOwnershipObject)
    })
    .then((res) => res.json())
    .then((updatedStudentDeskObject) => console.log(updatedStudentDeskObject)) 
  }
   

    function handleChange(e) {
      setDeskNum(e.target.value)
      setStudentId(params.row.id)
      setIsOwnedOrRented(params.row.student_desks.map((desk) => desk.is_owned_or_rented))
      setStudentDeskId(params.row.student_desks.map((desk) => desk.id))
      // console.log(e.target.value, params.row.id, params.row.student_desks.map((desk) => desk.is_owned_or_rented))
      
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