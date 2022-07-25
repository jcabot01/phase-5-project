import React from 'react'
import JobSalaryTable from '../components/JobSalaryTable'
import { Box, Typography } from '@mui/material'




function RulesOverview() {
  

  return (
    
      <Box sx={{bgcolor: '#f3f6f4', backgroundSize: 'cover', backgroundPosition: 'center', marginLeft: 15, marginRight: 15}}>
          <Typography variant='h6' textAlign={'center'} sx={{fontWeight: 'bold', textDecoration: 'underline'}}>
            How "Class-o-poly" works
          </Typography>
          
        <Box sx={{height: 20}}>
        </Box>

          <Box component={'div'} display='flex' justifyContent='center' alignItems='center' >
            <JobSalaryTable/>
          </Box>

        <Box sx={{height: 20}}>
        </Box>

          <Typography sx={{marginLeft: 1, fontWeight: 'bold'}} >
            -Prior to the 1st Day of the Month:
          </Typography>
          <Typography sx={{marginLeft: 2}}>
            Students volunteer for a job that interests them. Once they decide, the Teacher assigns the job on the "Students" page, in the Class Global Edit table.
          </Typography>

        <Box sx={{height: 20}}>
        </Box>

          <Typography sx={{marginLeft: 1, fontWeight: 'bold'}} >
            -On the 1st Day of the Month
          </Typography>
          <Typography sx={{marginLeft: 2}}>
            The student Accountant pays their class a monthly Salary by pressing on the "GET PAID!" button for each student. If a student rents a desk, the Accountant will deduct the rent by pressing the "Pay Rent" button. If a student owns their desk, they don't owe any rent for the month.  If a student owns a 2nd desk, then the Accountant must also click the "Collect Rent" button to pay the owner.
          </Typography>
        
        <Box sx={{height: 20}}>
        </Box>
        
          <Typography sx={{marginLeft: 2}}>
            -At this point the student has received their monthly income (salary and real estate investment (collected rent from tenant). They have fulfilled their living expense obligation. Now it is time to spend!        
          </Typography>

        <Box sx={{height: 20}}>
        </Box>

          <Typography variant='h6' sx={{marginLeft: 1, fontWeight: 'bold'}} >
            Privileges
          </Typography>
          <Typography sx={{marginLeft: 2}}>
            Students can look at their remaining balance to see how they want to spend. Do they save (do nothing)? Do they invest (buy a another desk or Investment fund)? Do they splurge on fun and entertainment (Music and Snack cards)? Careful though, there are NO REFUNDS, once the Priviledge is submitted, there is no turning back. You must live with your choice!
          </Typography>

        <Box sx={{height: 20}}>
        </Box>

          <Typography variant='h6' sx={{marginLeft: 1, fontWeight: 'bold'}} >
            Investing
          </Typography>
          <Typography sx={{marginLeft: 1, fontWeight: 'bold'}} >
            -Rental Desks:
          </Typography>
          <Typography sx={{marginLeft: 2}}>
            Students can buy additional desks for rental income; ex: if purchased in month 2, student collects rent in month 3.
          </Typography>
          <Typography sx={{marginLeft: 1, fontWeight: 'bold'}} >
            -Investment Fund:
          </Typography>
          <Typography sx={{marginLeft: 2}}>
            Students will be given a "Work Habit Score" by the Teacher at the end of the month. This score will be combined and averaged as a class. The Analyst will have to perform the calculation (by hand) to find the average. The Teacher can check their work by pressing "Click to Average" button at the bottom of the Class Global Edit table. If the class average went up from the previous month, the students who invested into the Investment Fund will double their investment. If not, they will lose their entire investment. Students must place their "bets" at some point during the month, prior to the end-of-month average calculation.  When a student makes a Fund investment, it is immediately deducted from the Student's balance, therefore if the investment turns out to be a loss, it will already be reflected.  If the investment wins, then the Analyst needs to multiply the Investment $ by 2, then apply that amount to the Student's Current Balance.
          </Typography>

        <Box sx={{height: 20}}>
        </Box>

          <Typography variant='h6' sx={{marginLeft: 1, fontWeight: 'bold'}} >
            End of the Month
          </Typography>
          <Typography sx={{marginLeft: 2}}>
            By the end of the first month, all tasks will have been completed and students can begin to apply for new jobs to start a new month. At the end of the school year, students will be able to tally all of their money and assets together. Desks and Cards reflect monetary "values" which can be applied to the student's ending balance at the end of the game.
          </Typography>

        <Box sx={{height: 20}}>
        </Box>
          <Typography variant='h6' sx={{marginLeft: 1, fontWeight: 'bold'}} >
            Student Profile
          </Typography>
          <Typography sx={{marginLeft: 2}}>
            Students will be able to see their assets and balance. They will be able to edit their Avatar and the Goal. Goals should be made at the end of the month; reflecting on goals for next month: "This month I'd like to get a better job so I can buy a snack card. I want to make an investment, too."
          </Typography>
      </Box>
    
  )
}

export default RulesOverview