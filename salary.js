// Function to calculate Tax based on basic salary
function calculatePayee(basicSalary) {
    let tax = 0;
    if (basicSalary <= 24000) {
        tax = 0;
    } else if (basicSalary <= 32333) {
        tax = (basicSalary - 24000) * 0.1;
    } else if (basicSalary <= 40333) {
        tax = 833 + (basicSalary - 32333) * 0.15;
    } else if (basicSalary <= 48333) {
        tax = 2496 + (basicSalary - 40333) * 0.2;
    } else if (basicSalary <= 57333) {
        tax = 4996 + (basicSalary - 48333) * 0.25;
    } else {
        tax = 8996 + (basicSalary - 57333) * 0.3;
    }
    return tax;
}
console.log(calculatePayee());

// Function to calculate nhif deductions
function calculateNHIF(basicSalary) {
    let nhif = 0;
    if (basicSalary <= 5999) {
        nhif = 150;
    } else if (basicSalary <= 7999) {
        nhif = 300;
    } else if (basicSalary <= 11999) {
        nhif = 400;
    } else if (basicSalary <= 14999) {
        nhif = 500;
    } else if (basicSalary <= 19999) {
        nhif = 600;
    } else if (basicSalary <= 24999) {
        nhif = 750;
    } else if (basicSalary <= 29999) {
        nhif = 850;
    } else if (basicSalary <= 34999) {
        nhif = 900;
    } else if (basicSalary <= 39999) {
        nhif = 950;
    } else if (basicSalary <= 44999) {
        nhif = 1000;
    } else if (basicSalary <= 49999) {
        nhif = 1100;
    } else if (basicSalary <= 59999) {
        nhif = 1200;
    } else if (basicSalary <= 69999) {
        nhif = 1300;
    } else if (basicSalary <= 79999) {
        nhif = 1400;
    } else if (basicSalary <= 89999) {
        nhif = 1500;
    } else if (basicSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }
    return nhif;
}
console.log(calculateNHIF());

// Function to calculate nssf deduction
function calculateNSSFContributions(pensionablePay){
    const tierIRate = 0.06;
    const tierIILowerLimit = 7001

    if(pensionablePay <= tierIILowerLimit){
        return pensionablePay * tierIRate;
    }
    else{
        return tierIILowerLimit* tierIRate;
    }
    }
    console.log (calculateNSSFContributions())

// Function to calculate gross salary
function calculateGrossSalary(basicSalary, benefits) {
    return basicSalary + benefits;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const payee = calculatePayee(basicSalary);
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);
    const grossSalary = calculateGrossSalary(basicSalary, benefits);
    const deductions = payee + nhif + nssf;
    const netSalary = grossSalary - deductions;
    return netSalary;
}
console.log(calculateNetSalary());