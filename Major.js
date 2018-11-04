/*
FILE NAME: coffee.js
WRITTEN BY: CS115 Faculty
DATE: Oct 2016
PURPOSE: CS115, Lab on conditionals
*/


function Major()
{
var major = prompt("Please enter your major", "ECON");//prompts user for major
//to min and stores in var
var year = prompt("Please enter your intended graduation year", "2022");//prompts user 
//for graduation year


var econCourses = ("ECON 101, ECON 102, ECON 103, ECON 201, ECON 202, \
ECON 203, 200 elective, 300 elective, two 300 levels");

var csCourses = ('CS 111, CS 230, CS 231, CS 235, CS 240, CS 251, 200 or \
 300 elective, one math course at 200 or 300 level, two 300 levels');

  

var message; //creates empty var to be filled by conditional statement

//conditional statement stores something in message var depending on the value of time var
if (major == "ECON"|| major == "Econ") {
    message = "You need to take the following to fulfill the Econ major: " + econCourses;
    } else if (major == "CS" || major == "cs"){
    message = "You need to take the following to fulfill the CS major: " + csCourses;
    } else {
    message = "We'll get back to you...please leave a message after the beep...beeeeep"
    }

 	//presents information on page and console and links js to html
    console.log(message);
    document.getElementById('hungry').innerHTML = message;
   }
 

