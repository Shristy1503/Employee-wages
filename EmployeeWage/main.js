let dailyWageArr = [160, 80, 160, 0, 160, 80, 160];  // Example array
let totalWage = 0;

function sum(dailyWage) {
    totalWage += dailyWage;
}

dailyWageArr.forEach(sum);
console.log("Total wage: " + totalWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

console.log("Employee wage with reduce: " + dailyWageArr.reduce(totalWages, 0));

let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + " = " + dailyWage;
}

let mapDayWithWageArr = dailyWageArr.map(mapDayWithWage);
console.log("Daily wage map:");
console.log(mapDayWithWageArr);

function fullTimeWage(dailyWage) {
    return dailyWage === 160;
}

let fullDayWageArr = dailyWageArr.filter(fullTimeWage);
console.log("Daily wage filter when full-time wage earned:");
console.log(fullDayWageArr);

function findFulltimeWage(dailyWage) {
    return dailyWage === 160;
}

console.log("First time full-time wage was earned on day: " + (dailyWageArr.findIndex(findFulltimeWage) + 1));

function isAllFullTimeWage(dailyWage) {
    return dailyWage === 160;
}

console.log("Check if all elements have full-time wage: " + fullDayWageArr.every(isAllFullTimeWage));

function isAnyPartTimeWage(dailyWage) {
    return dailyWage === 80;
}

console.log("Check if any part-time wage exists: " + dailyWageArr.some(isAnyPartTimeWage));

function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}

console.log("Number of days employee worked: " + dailyWageArr.reduce(totalDaysWorked, 0));
