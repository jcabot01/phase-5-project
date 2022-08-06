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
              -Setup:
            </Typography>
            <Typography sx={{marginLeft: 2}}>
              Prior to playing the game, students and teachers need to signup via the landing page.  It is recommended that usernames are lowercase first-name and uppercase last initial; ex: "johnS" for John Smith.  The username is displayed in the large Global Student Edit table. For easy viewing and identification, this format for username is recommended.  Additionally, pick a password that you will not forget.  Password retrievel and resetting are not built into this application.  If the student forgets their password, the teacher will have to delete their account via the Global Student Edit table.  If the teacher forgets their password, they will have to start a new account and all of the students will have to start a new account.  If starting a second account, the students will have to select the second instance of the teacher's name in the dropdown menu for Teacher on the Student signup page.
            </Typography>

        <Box sx={{height: 20}}>
        </Box>

          <Typography sx={{marginLeft: 1, fontWeight: 'bold'}} >
            -Prior to the 1st Day of the Month:
          </Typography>
          <Typography sx={{marginLeft: 2}}>
            Students volunteer for a job that interests them. Once they decide, the Teacher assigns the job in the "Global Student Edit" table found in the menu at the top of this page.  Once the "Job" is selected, the "Salary" associated with that particular job will be automatically updated to match the job.
          </Typography>

        <Box sx={{height: 20}}>
        </Box>

          <Typography sx={{marginLeft: 1, fontWeight: 'bold'}} >
            -On the 1st Day of the Month
          </Typography>
          <Typography sx={{marginLeft: 2}}>
            The student "Accountant" pays their class a monthly salary by pressing the "Payday!" button for each student. If a student rents a desk, the Accountant will deduct the rent by pressing the "Pay Rent" button. If a student owns their desk, they don't owe any rent for the month.  If a student owns a 2nd desk, then the Accountant must also click the "Collect Rent" button to pay the owner.  In order for students to purchase a 2nd desk, they MUST have already purchased the original desk that they were renting.  If student A is renting Desk #1, and student B buys Desk #1 as a rental property, then student B is the rightful owner.  Therefore student A will have to rent Desk #1 from student B for the whole year.  Student A can go buy other desks for rental income, but they will not be able to own their original desk, and they will have to pay rent for the rest of the game.  The Accountant needs to double-check the rental vs. owned column before performing any desk transactions.
          </Typography>
        
        <Box sx={{height: 20}}>
        </Box>
        
          <Typography sx={{marginLeft: 2}}>
            -At this point the student has received their monthly income (salary and real estate investment income (collected rent from their tenant(s)). They have fulfilled their living expense obligations. Now it is time to spend!        
          </Typography>

        <Box sx={{height: 20}}>
        </Box>

          <Typography variant='h6' sx={{marginLeft: 1, fontWeight: 'bold'}} >
            Privileges
          </Typography>
          <Typography sx={{marginLeft: 2}}>
            Students can look at their remaining balance to see how they want to spend. Do they save (do nothing)? Do they invest (buy a another desk or purchase into the Investment Fund)? Do they splurge on fun and entertainment (Music and Snack cards)? Careful though, there are NO REFUNDS, once the Priviledge is submitted, there is no turning back. You must live with your choice!  By clicking the "Investments" button, you can see your investment history into the Investment Fund; more on that later.
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
            Students can buy additional desks for rental income; ex: if they purchased it in month 2, they collect rent on it in month 3.  Desks cost $50, and they only produce $10 a month in cashflow income.  So it doesn't make sense to buy it near the end of the game, right? Not necessarily.  Desks are worth $100 at the end of the game, so they produce a great return on investment over the long term.   
          </Typography>
          <Typography sx={{marginLeft: 1, fontWeight: 'bold'}} >
            -Investment Fund:
          </Typography>
          <Typography sx={{marginLeft: 2}}>
            Students will be given a "Work Habit Score" by the Teacher at the end of the month. This score will be combined and averaged as a class. The Analyst will have to perform the calculation (by hand) to find the average. The Teacher can check their work by pressing "Click to Average" button at the bottom of the Class Global Edit table. If the class average went up from the previous month, the students who invested into the Investment Fund will double their investment. If not, they will lose their entire investment. Students must place their "bets" at some point during the month, prior to the end-of-month average calculation.  When a student makes a Fund investment via the "Privileges" button, it is immediately deducted from the Student's balance, therefore if the investment turns out to be a loss, it will already be reflected in the student's balance.  If the investment wins, the Analyst will need to multiply the Investment amount by 2x, then apply that amount to the Student's Current Balance.  A student's investment history can be found by pressing the "Investments" button.  It provides a timestamped history of investments to see if they participated in the monthly Investment Fund.
          </Typography>

        <Box sx={{height: 20}}>
        </Box>

          <Typography variant='h6' sx={{marginLeft: 1, fontWeight: 'bold'}} >
            End of the Month
          </Typography>
          <Typography sx={{marginLeft: 2}}>
            By the end of the month, all tasks will have been completed and students can begin to apply for new jobs to start a new month. At the end of the school year, students will be able to tally all of their money and assets together. Owned Desks are worth $100, Priviledge Cards are worth $20, and of course the student's ending balance can all be combined into a final amount.
          </Typography>

        <Box sx={{height: 20}}>
        </Box>
          <Typography variant='h6' sx={{marginLeft: 1, fontWeight: 'bold'}} >
            Student Profile
          </Typography>
          <Typography sx={{marginLeft: 2}}>
            Students will be able to see their assets and balance. They will be able to edit their Avatar (just click on the picture) and their Goal. Goals should be made at the end of the month; reflecting on goals for next month: "This month I'd like to get a better job so I can buy a snack card. I want to make an investment, too."
            When a student purchases a new asset they receive a special icon on their avatar.  
          </Typography>
        <Box sx={{height: 20}}>
        </Box>
          <Typography textAlign='center' variant='h6' sx={{fontWeight: 'bold'}} >
            Ready, set, GO!!!
          </Typography>

          <Box sx={{height: 40}}>
          </Box>
      </Box>
    
  )
}

export default RulesOverview