//challenge 3
//import a readline module for node js environme
const readline = require('readline')
//write the tax rates functions
function calculateTax(income){
 //TaxSlabs
 const taxSlabs = [
    {limit: 24000, rate:  0.10}, //tax rate of 10% upto 24000
    {limit: 32333, rate:  0.25},
    {limit: 50000, rate:  0.30}, 
    {limit: 800000, rate:  0.325},
    {above: 800000, rate:  0.35},

 ];

 //init
 let tax = 0;
 let remainingIncome = income;
 //iterate 
 for (const slab of taxSlabs){
    //check remaining income amount to be taxed
    if(remainingIncome <= 0 ) break;

    //calc taxable amount withing every slab
    const taxableAmount = Math.min(remainingIncome, slab.limit);

    //calc actual tax for the taxable amount
    tax += taxableAmount * slab.rate;
    //update
    remainingIncome -= taxableAmount;

 }

return tax;

}

//NHIF
function calculateNHIFDeductions(grosspay){
    const nhifRates =[
        {limit: 5999, deductions: 150},
        {limit: 100000, deductions: 1700},
    ];

    for(const rate of nhifRates){
        if(grosspay <= rate.limit){
            return rate.deductions;
        }
    }
    //if it exceeds
    return nhifRates[nhifRates.length -1].deductions;
}

//nssf
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

    // find net salary
    function calculateNetSalary(basicSalry, benefits){
const grossSalary = basicSalry + benefits;

const tax = calculateTax(grossSalary);

const NHIFDeductions = calculateNHIFDeductions(grossSalary);

const NSSFDeductions = calculateNSSFContributions(basicSalry);

const netSalary = grossSalary - tax - NHIFDeductions - NSSFDeductions;

return{
    grossSalary,
    tax,
    NHIFDeductions,
    NSSFDeductions,
    netSalary
};
    }

    //user inputs interface
function getUserInput(question){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(question, (answer)=>{
            rl.close();
            resolve(parseFloat(answer));
        });
    });
}

//for the program to run

async function run (){
    const basicSalry = await getUserInput("Basic Sal = ");

    const benefits = await getUserInput( "Benefits = ");

    const salaryDetails = calculateNetSalary(basicSalry, benefits);

    //to print out

    console.log("Gross Sal = ", salaryDetails.grossSalary);
    console.log("TAX  = ", salaryDetails.tax);
    console.log("NHIF  = ", salaryDetails.NHIFDeductions);
    console.log("NSSF = ", salaryDetails.NSSFDeductions);
    console.log("Net Sal = ", salaryDetails.netSalary);
}
//
run();