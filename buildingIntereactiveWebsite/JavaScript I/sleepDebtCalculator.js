const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 7;
  } else if (day === "wednesday") {
    return 7;
  } else if (day === "thursday") {
    return 7;
  } else if (day === "friday") {
    return 9;
  } else if (day === "saturday") {
    return 6;
  } else if (day === "sunday") {
    return 6;
  }
};

// console.log(getSleepHours('monday'));

function getActualSleepHours() {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
}

// console.log(getActualSleepHours());

function getIdealSleepHours() {
  const idealHours = 8;
  return idealHours * 7;
}

// console.log(getIdealSleepHours());

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log(`You sleep ${actualSleepHours}.`);
    console.log("You got perfect amount of sleep!");
  } else if (actualSleepHours >= idealSleepHours) {
    console.log(`You sleep ${actualSleepHours - idealSleepHours} hours.`);
    console.log("You got more sleep than needed!");
  } else if (actualSleepHours <= idealSleepHours) {
    console.log(`You miss ${idealSleepHours - actualSleepHours} hours.`);
    console.log("You should get some more rest!");
  } else {
    console.log("Something is wrong!");
  }
}

calculateSleepDebt();
