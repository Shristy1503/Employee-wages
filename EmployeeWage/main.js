const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;

function getWorkHours(work){
    let workHours;
    switch(work){
        case 1:
            workHours = PART_TIME_HOURS;
            console.log("Employee worked Part Time");
            break;
        case 2:
            workHours = FULL_TIME_HOURS;
            console.log("Employee worked Full Time");
            break;
        default:
            workHours = 0;
            console.log("Employee did not work");
            break;
    }
    return workHours;
}   
let work = Math.floor(Math.random() * 3);
let workHours = getWorkHours(work);
let wage = workHours * WAGE_PER_HOUR;
console.log("Employee wage is $" + wage)
