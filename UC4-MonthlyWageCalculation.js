// UC3 - Refactor the Code to write a function to get work hours.
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
function getWorkingHrs(empCheck) 
{
    switch (empCheck) 
    {
        case IS_PART_TIME:
            //console.log("Employee is working part time");
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            //console.log("employee is working full time");
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

// UC4 - Calculate total employee wage for a month assuming 20 working day in a month
const NUM_OF_WORKING_DAYS = 20;
let empHours = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) 
{
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHours += getWorkingHrs(empCheck);
}
empWage = WAGE_PER_HOUR * empHours;
console.log("Total working hours in month : " + empHours + "\nTotal monthly employee wage  : " + empWage);