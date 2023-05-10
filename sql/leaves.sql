-- Active: 1679228630052@@127.0.0.1@3306
SELECT * from staff_details
WHERE strftime('%m', leave_approved_on) = strftime('%m', '2023-04-03'); 
