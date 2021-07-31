You are given a string, attendance that represents a student’s class attendance throughout the semester. A student can be marked, A for absent, L, for late, or P for present. To get credit for the class, a student cannot miss more than one class and cannot come late to class twice in a row. Given the current students attendance record, return whether or not the student has passed the class.

Ex: Given the following attendance of a student…

attendance = "PLPAPPPA", return false.
Ex: Given the following attendance of a student…

attendance = "PLPLPLPALP", return true.


solution: 
------------------


function isValid(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") {
      count++;
      if (count >= 2) return false;
    }
    if (str[i] === "L" && str[i + 1] === "L") return false;
  }
  return true;
}
