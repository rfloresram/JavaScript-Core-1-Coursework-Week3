/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

function elementOnlyStudents(name) {
  return students.includes(name);
  }
 
var arrayIsOnlyStudents = group.every(elementOnlyStudents); // complete this statement
  if (arrayIsOnlyStudents) {
   console.log("The group contains only students");
  } else {

/* EXPECTED RESULT */
// The group does not contain only students

  console.log("The group does not contain only students");
}


