// Function for determinning grade
function determineGrade(marks) {
    if (marks > 79 && marks <= 100) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else if (marks >= 0 && marks < 40) {
        return 'E';
    } else {
        return 'Invalid input. Marks should be between 0 and 100.';
    }
}
// Function for input and display grade
function promptForGrade() {
    let marks = parseFloat(prompt("Enter student marks (between 0 and 100):"));
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        let grade = determineGrade(marks);
        alert(`The grade for ${marks} marks is ${grade}.`);
    } else {
        alert('Invalid input. Marks should be between 0 and 100.');
    }
}

promptForGrade(); // display grade prompt