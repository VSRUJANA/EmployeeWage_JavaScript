// UC2 - Ability to Calculate Daily Employee Wage based on part time or full time work.
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHours = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) 
{
    case IS_PART_TIME:
        console.log("Employee is working part time");
        empHours = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        console.log("Employee is working full time");
        empHours = FULL_TIME_HOURS;
        break;
    default:
        empHours = 0;
        break;
}
let empWage = empHours * WAGE_PER_HOUR;
console.log("Employee wage: " + empWage);