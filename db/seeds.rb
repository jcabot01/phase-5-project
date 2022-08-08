Student.destroy_all
Job.destroy_all
StudentDesk.destroy_all
StudentJob.destroy_all
Desk.destroy_all
User.destroy_all
Privilege.destroy_all


puts "seeding database..."



# t1 = Teacher.create(first_name: "Kristel", last_name: "Lunn", username: "klunn")

# these can go if needed
# s1 = Student.create(first_name: "Jeff", last_name: "Smith", balance: 15, class_period: 1, work_habit_score: 4, goal: "Buy a Snack Card next month & invest!", username: "jeffS", teacher_id: t1.id, avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwy0tXDjDYjpMzIeO0A1qeY8_a3Zo6BjM99A&usqp=CAU")
# s2 = Student.create(first_name: "Sara", last_name: "Johnson", balance: 15, class_period: 1, work_habit_score: 3, goal: "Buy a rental property to make money while I sleep.", username: "saraJ", teacher_id: t1.id, avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFCpyn1iyXLKdIwXF0s7Kn2BSk3R6cb1eeg&usqp=CAU")
# s3 = Student.create(first_name: "LeBron", last_name: "James", balance: 15, class_period: 1, work_habit_score: 4, goal: "Try to get a better job to earn more.", username: "lebronJ", teacher_id: t1.id, avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKjqBUTrXc_t6Q4pOLHTCfmY1_cOngpx6KQw&usqp=CAU")
# s4 = Student.create(first_name: "Test", last_name: "Test", balance: 15, class_period: 1, work_habit_score: 4, goal: "Test", username: "Test", teacher_id: t1.id, avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKjqBUTrXc_t6Q4pOLHTCfmY1_cOngpx6KQw&usqp=CAU")


# these can go if needed
# p1 = Privilege.create(event: "Music Card", amount: 20, value: 20, student_id: s1.id)
# p2 = Privilege.create(event: "Music Card", amount: 20, value: 20, student_id: s2.id)
# p3 = Privilege.create(event: "Invest", amount: 20, value: 20, student_id: s1.id)
# p4 = Privilege.create(event: "Snack Card", amount: 20, value: 20, student_id: s1.id)
# p5 = Privilege.create(event: "Snack Card", amount: 20, value: 20, student_id: s3.id)

# don't delete these, they are needed for student_job relationships
j1 = Job.create(title: "Accountant", salary: 35)
j2 = Job.create(title: "Point Pusher #1", salary: 35)
j3 = Job.create(title: "Point Pusher #2", salary: 35)
j4 = Job.create(title: "Class tutor #1", salary: 32)
j5 = Job.create(title: "Class tutor #2", salary: 32)
j6 = Job.create(title: "Financial Analyst", salary: 30)
j7 = Job.create(title: "Crate Buster #1", salary: 30)
j8 = Job.create(title: "Crate Buster #2", salary: 30)
j9 = Job.create(title: "Paper Pusher #1", salary: 30)
j10 = Job.create(title: "Paper Pusher #2", salary: 30)
j11 = Job.create(title: "Techie", salary: 30)
j12 = Job.create(title: "Teacher's Pet", salary: 25)
j13 = Job.create(title: "Substitute", salary: 25)
j14 = Job.create(title: "Picker Upper #1", salary: 22)
j15 = Job.create(title: "Picker Upper #2", salary: 22)
j16 = Job.create(title: "Student #1", salary: 15)
j17 = Job.create(title: "Student #2", salary: 15)
j18 = Job.create(title: "Student #3", salary: 15)
j19 = Job.create(title: "Student #4", salary: 15)
j20 = Job.create(title: "Student #5", salary: 15)
j21 = Job.create(title: "Student #6", salary: 15)
j22 = Job.create(title: "Student #7", salary: 15)
j23 = Job.create(title: "Student #8", salary: 15)
j24 = Job.create(title: "Student #9", salary: 15)
j25 = Job.create(title: "Student #10", salary: 15)
j26 = Job.create(title: "Student #11", salary: 15)
j27 = Job.create(title: "Student #12", salary: 15)
j28 = Job.create(title: "Student #13", salary: 15)
j29 = Job.create(title: "Student #14", salary: 15)
j30 = Job.create(title: "Student #15", salary: 15)
j31 = Job.create(title: "Default", salary: 0)

# these can go if needed
# sj1 = StudentJob.create(job_id: j1.id, student_id: s1.id)
# sj2 = StudentJob.create(job_id: j2.id, student_id: s2.id)
# sj3 = StudentJob.create(job_id: j3.id, student_id: s3.id)
# sj4 = StudentJob.create(job_id: j4.id, student_id: s4.id)
# sj5 = StudentJob.create(job_id: j5.id, student_id: s5.id)
# sj6 = StudentJob.create(job_id: j6.id, student_id: s6.id)
# sj7 = StudentJob.create(job_id: j7.id, student_id: s7.id)
# sj8 = StudentJob.create(job_id: j8.id, student_id: s8.id)
# sj9 = StudentJob.create(job_id: j9.id, student_id: s9.id)
# sj10 = StudentJob.create(job_id: j10.id, student_id: s10.id)
# sj11 = StudentJob.create(job_id: j11.id, student_id: s11.id)
# sj12 = StudentJob.create(job_id: j12.id, student_id: s12.id)
# sj13 = StudentJob.create(job_id: j13.id, student_id: s13.id)
# sj14 = StudentJob.create(job_id: j14.id, student_id: s14.id)
# sj15 = StudentJob.create(job_id: j15.id, student_id: s15.id)
# sj16 = StudentJob.create(job_id: j16.id, student_id: s16.id)
# sj17 = StudentJob.create(job_id: j17.id, student_id: s17.id)
# sj18 = StudentJob.create(job_id: j18.id, student_id: s18.id)
# sj19 = StudentJob.create(job_id: j19.id, student_id: s19.id)
# sj20 = StudentJob.create(job_id: j20.id, student_id: s20.id)
# js21 = StudentJob.create(job_id: j21.id, student_id: s21.id)
# sj22 = StudentJob.create(job_id: j22.id, student_id: s22.id)
# sj23 = StudentJob.create(job_id: j23.id, student_id: s23.id)
# sj24 = StudentJob.create(job_id: j24.id, student_id: s24.id)
# sj25 = StudentJob.create(job_id: j25.id, student_id: s25.id)
# sj26 = StudentJob.create(job_id: j26.id, student_id: s26.id)
# sj27 = StudentJob.create(job_id: j27.id, student_id: s27.id)
# sj28 = StudentJob.create(job_id: j28.id, student_id: s28.id)
# sj29 = StudentJob.create(job_id: j29.id, student_id: s29.id)
# sj30 = StudentJob.create(job_id: j30.id, student_id: s30.id)

# don't delete these, they are needed for student_desk relationships
d1 = Desk.create(desk_number: 1, cost: 50, value: 100)
d2 = Desk.create(desk_number: 2, cost: 50, value: 100)
d3 = Desk.create(desk_number: 3, cost: 50, value: 100)
d4 = Desk.create(desk_number: 4, cost: 50, value: 100)
d5 = Desk.create(desk_number: 5, cost: 50, value: 100)
d6 = Desk.create(desk_number: 6, cost: 50, value: 100)
d7 = Desk.create(desk_number: 7, cost: 50, value: 100)
d8 = Desk.create(desk_number: 8, cost: 50, value: 100)
d9 = Desk.create(desk_number: 9, cost: 50, value: 100)
d10 = Desk.create(desk_number: 10, cost: 50, value: 100)
d11 = Desk.create(desk_number: 11, cost: 50, value: 100)
d12 = Desk.create(desk_number: 12, cost: 50, value: 100)
d13 = Desk.create(desk_number: 13, cost: 50, value: 100)
d14 = Desk.create(desk_number: 14, cost: 50, value: 100)
d15 = Desk.create(desk_number: 15, cost: 50, value: 100)
d16 = Desk.create(desk_number: 16, cost: 50, value: 100)
d17 = Desk.create(desk_number: 17, cost: 50, value: 100)
d18 = Desk.create(desk_number: 18, cost: 50, value: 100)
d19 = Desk.create(desk_number: 19, cost: 50, value: 100)
d20 = Desk.create(desk_number: 20, cost: 50, value: 100)
d21 = Desk.create(desk_number: 21, cost: 50, value: 100)
d22 = Desk.create(desk_number: 22, cost: 50, value: 100)
d23 = Desk.create(desk_number: 23, cost: 50, value: 100)
d24 = Desk.create(desk_number: 24, cost: 50, value: 100)
d25 = Desk.create(desk_number: 25, cost: 50, value: 100)
d26 = Desk.create(desk_number: 26, cost: 50, value: 100)
d27 = Desk.create(desk_number: 27, cost: 50, value: 100)
d28 = Desk.create(desk_number: 28, cost: 50, value: 100)
d29 = Desk.create(desk_number: 29, cost: 50, value: 100)
d30 = Desk.create(desk_number: 30, cost: 50, value: 100)

# these can go if needed
# sd1 = StudentDesk.create(is_owned_or_rented: "owned", desk_id: d1.id, student_id: s1.id)
# sd2 = StudentDesk.create(is_owned_or_rented: "rented", desk_id: d2.id, student_id: s2.id)
# sd3 = StudentDesk.create(is_owned_or_rented: "rented", desk_id: d3.id, student_id: s3.id)
# sd4 = StudentDesk.create(is_owned_or_rented: "owned", desk_id: d2.id, student_id: s1.id)
# sd5 = StudentDesk.create(is_owned_or_rented: "rented", desk_id: d4.id, student_id: s4.id)


puts "database seeded"
