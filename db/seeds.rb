Student.destroy_all
Job.destroy_all
StudentDesk.destroy_all
Desk.destroy_all

puts "seeding database..."

t1 = Teacher.create(first_name: "Kristel", last_name: "Lunn", username: "klunn")

s1 = Student.create(first_name: "Jeff", last_name: "Smith", balance: 15, class_period: 1, work_habit_score: 4, goal: "Buy a Snack Card next month & invest!", username: "jeffS", teacher_id: t1.id, avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwy0tXDjDYjpMzIeO0A1qeY8_a3Zo6BjM99A&usqp=CAU")
s2 = Student.create(first_name: "Sara", last_name: "Johnson", balance: 15, class_period: 1, work_habit_score: 3, goal: "Buy a rental property to make money while I sleep.", username: "saraJ", teacher_id: t1.id, avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFCpyn1iyXLKdIwXF0s7Kn2BSk3R6cb1eeg&usqp=CAU")
s3 = Student.create(first_name: "LeBron", last_name: "James", balance: 15, class_period: 1, work_habit_score: 4, goal: "Try to get a better job to earn more.", username: "lebronJ", teacher_id: t1.id, avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKjqBUTrXc_t6Q4pOLHTCfmY1_cOngpx6KQw&usqp=CAU")
s4 = Student.create(first_name: "Test", last_name: "Test", balance: 15, class_period: 1, work_habit_score: 4, goal: "Test", username: "Test", teacher_id: t1.id, avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKjqBUTrXc_t6Q4pOLHTCfmY1_cOngpx6KQw&usqp=CAU")

p1 = Privilege.create(event: "Music Card", amount: 20, value: 20, student_id: s1.id)
p2 = Privilege.create(event: "Music Card", amount: 20, value: 20, student_id: s2.id)
p3 = Privilege.create(event: "Invest", amount: 20, value: 20, student_id: s1.id)
p4 = Privilege.create(event: "Snack Card", amount: 20, value: 20, student_id: s1.id)
p5 = Privilege.create(event: "Snack Card", amount: 20, value: 20, student_id: s3.id)


j1 = Job.create(title: "Accountant", salary: 35, student_id: s1.id)
j2 = Job.create(title: "Student #1", salary: 15, student_id: s2.id)
j3 = Job.create(title: "Class Tutor #1", salary: 32, student_id: s3.id)
j4 = Job.create(title: "Student #2", salary: 15, student_id: s4.id)

d1 = Desk.create(desk_number: 1, cost: 50, value: 100)
d2 = Desk.create(desk_number: 2, cost: 50, value: 100)
d3 = Desk.create(desk_number: 3, cost: 50, value: 100)

sd1 = StudentDesk.create(is_owned_or_rented: "owned", desk_id: d1.id, student_id: s1.id)
sd2 = StudentDesk.create(is_owned_or_rented: "rented", desk_id: d2.id, student_id: s2.id)
sd3 = StudentDesk.create(is_owned_or_rented: "rented", desk_id: d3.id, student_id: s3.id)
sd4 = StudentDesk.create(is_owned_or_rented: "owned", desk_id: d2.id, student_id: s1.id)


puts "database seeded"
