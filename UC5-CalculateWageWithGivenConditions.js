// UC5 - Calculating Wages til a condition of total working hours of 160 or max days of 20 is reached for a month.
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let totalEmpHours = 0;
let totalWorkingDays = 0;

function getWorkingHrs(empCheck)
{
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

const MAX_HOURS_IN_MONTHS = 160;
const MAX_NUMBER_OF_DAYS = 20;

while (totalEmpHours < MAX_HOURS_IN_MONTHS && totalWorkingDays < MAX_NUMBER_OF_DAYS) 
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHours += getWorkingHrs(empCheck);
}
let totalEmpWage = WAGE_PER_HOUR * totalEmpHours;
console.log("Total working days  : " + totalWorkingDays + "\nTotal working hours : " + totalEmpHours + " \nTotal employee wage : " + totalEmpWage);