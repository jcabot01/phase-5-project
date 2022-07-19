Student.destroy_all
Job.destroy_all
StudentDesk.destroy_all
Desk.destroy_all

puts "seeding database..."

s1 = Student.create(first_name: "Jeff", last_name: "Smith", balance: 15)
s2 = Student.create(first_name: "Sara", last_name: "Johnson", balance: 15)
s3 = Student.create(first_name: "LeBron", last_name: "James", balance: 15)

j1 = Job.create(title: "Accountant", salary: 35, student_id: s1.id)
j2 = Job.create(title: "Student #1", salary: 15, student_id: s2.id)
j3 = Job.create(title: "Class Tutor #1", salary: 32, student_id: s3.id)

d1 = Desk.create(desk_number: 1, renting: false, owned: true, rental: false)
d2 = Desk.create(desk_number: 2, renting: true, owned: true, rental: true)
d3 = Desk.create(desk_number: 3, renting: true, owned: false, rental: false)

sd1 = StudentDesk.create(is_owned_or_rented: "owned", desk_id: d1.id, student_id: s1.id)
sd2 = StudentDesk.create(is_owned_or_rented: "rented", desk_id: d2.id, student_id: s2.id)
sd3 = StudentDesk.create(is_owned_or_rented: "rented", desk_id: d3.id, student_id: s3.id)
sd4 = StudentDesk.create(is_owned_or_rented: "owned", desk_id: d2.id, student_id: s1.id)

puts "database seeded"
