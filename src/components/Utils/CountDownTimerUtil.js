import dayjs from "dayjs";

export function getRemainingTimeUntilMsTimeStamp(timeStampFormat) {


    const timeStampMS = dayjs(timeStampFormat)

    const timeStampDayJs = dayjs(timeStampMS)
    const currentDayjs = dayjs();


    // condition to check past dates
    if(timeStampDayJs.isBefore(currentDayjs)){
        return
    }

    // difference between current time to next time
  return {
    seconds: getRemainingSeconds(currentDayjs, timeStampDayJs),
    minutes: getRemainingMinutes(currentDayjs, timeStampDayJs),
    hours: getRemainingHours(currentDayjs, timeStampDayJs),
    days: getRemainingDays(currentDayjs, timeStampDayJs)
  };
}

// remaining seconds
const getRemainingSeconds = (currentDayjs, timeStampDayJs) => {
    const seconds = timeStampDayJs.diff(currentDayjs, 'seconds') % 60;
    return padWithZeros(seconds,2)
}

// remaining minutes
const getRemainingMinutes = (currentDayjs, timeStampDayJs) => {
    const minutes = timeStampDayJs.diff(currentDayjs, 'minutes') % 60;
    return padWithZeros(minutes,2)
}

// remaining hours
const getRemainingHours = (currentDayjs, timeStampDayJs) => {
    const hours = timeStampDayJs.diff(currentDayjs, 'hours') % 24;
    return padWithZeros(hours,2)
}

// remaining days
const getRemainingDays = (currentDayjs, timeStampDayJs) => {
    const days = timeStampDayJs.diff(currentDayjs, 'days') % 30;
    return padWithZeros(days, 2)
}

// add 0 in single digits
const padWithZeros = (number, minLength) => {
    const numberString = number.toString();
    if(numberString.lenght >= minLength) return numberString
    return "0".repeat(minLength - numberString.length) + numberString
}
