/**
 * Title: Human Readable Time
 * 
 * Rank: 5 kyu
 * 
 * Description: Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

  The maximum time never exceeds 359999 (99:59:59)
 *
 * Link: https://www.codewars.com/kata/52685f7382004e774f0001f7
 */

function addZero(time) {
  if (time < 10) {
    return `0${time}`;
  } else {
    return `${time}`;
  }
}

function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600);
  const secondsAfterHours = seconds - hours * 3600;
  const mins = Math.floor(secondsAfterHours / 60);
  const secondsAfterMins = secondsAfterHours - mins * 60;

  return addZero(hours) + ":" + addZero(mins) + ":" + addZero(secondsAfterMins);
}
