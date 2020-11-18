// UC7 - Perform Array Helper Functions on Daily Wage Array

// Get working hours of the employee
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;

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

// Store Daily wage in 'dailyWages' array along with Total wage
const MAX_HOURS_IN_MONTHS = 160;
const MAX_NUMBER_OF_DAYS = 20;
const WAGE_PER_HOUR = 20;
let totalEmpHours = 0;
let totalWorkingDays = 0;
let dailyWages = [];

while (totalEmpHours < MAX_HOURS_IN_MONTHS && totalWorkingDays < MAX_NUMBER_OF_DAYS) 
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let dailyEmpHours = getWorkingHrs(empCheck);
    totalEmpHours += dailyEmpHours;
    dailyWages.push(dailyEmpHours * WAGE_PER_HOUR);
}

// UC 7A - Calculate total Wage using Array forEach or reduce method
let totalEmpWage=0;
function sum(dailyWage)
{
  totalEmpWage+=dailyWage;
}
dailyWages.forEach(sum);
console.log("Total working days  : " + totalWorkingDays + "\nTotal working hours : " + totalEmpHours);
console.log("UC7A - Total employee wage using Array forEach : " + totalEmpWage );
function totalWages(totalWage, dailyWage)
{
  return totalWage+dailyWage;
}
console.log("UC7A - Total employee wage using reduce method : "+dailyWages.reduce(totalWages,0));
 
 
// UC 7B - Show the day along with daily wage using Array map helper function
 
let dayCounter=0;
function mapDayWithWage(dailyWage)
{
    dayCounter++;
    return "Day " + dayCounter + " -> " + dailyWage;
} 
let mapDayWithWageArr = dailyWages.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);
 
//UC 7C - Show Days when Full time wage of 160 were earned
 
function fulltimeWage(dailyWage)
{
   return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC 7C - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);
 
//UC 7D - Find the first occurence when Full Time Wage was earned using find function

function findFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC 7D - First time Fulltime wage was earned on Day: " + mapDayWithWageArr.find(findFulltimeWage));
 
//UC 7E - Check if Every Element of Full Time Wage is truly holding Full time Wage

function isAllFulltimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
 
console.log("UC 7E - Check All Elements have Full Time Wage: " + fullDayWageArr.every(isAllFulltimeWage));
 
//UC 7F - Check if there is any Part Time Wage

function isAnyPartTimeWage(dailyWage)
{
   return dailyWage.includes("80");
}
console.log("UC 7F - Check If Any Part Time Wage: " + mapDayWithWageArr.some(isAnyPartTimeWage)); 
 
//UC 7G - Find the number of Days the employee worked.

function totalDaysWorked(numOfDays, dailyWage)
{
  if(dailyWage>0) return numOfDays+1;
  return numOfDays;
}
console.log("UC 7G - Number of Days Emp Worked: " + dailyWages.reduce(totalDaysWorked,0));
 