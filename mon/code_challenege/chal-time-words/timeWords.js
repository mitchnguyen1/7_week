// Write a function that turns a string of 24-hour time into words.

// You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

// Handle noon and midnight specially:

// timeWord("00:00")
// // 'midnight'

// timeWord("12:00")
// // 'noon'
// Otherwise, covert times to text:

// timeWord("01:00")
// // "one o'clock am"

// timeWord("06:01")
// // 'six oh one am'

// timeWord("06:10")
// // 'six ten am'

// timeWord("06:18")
// // 'six eighteen am'

// timeWord("06:30")
// // 'six thirty am'

// timeWord("10:34")
// // 'ten thirty four am'
// Don’t forget to handle early morning properly:

// timeWord("00:12")
// // 'twelve twelve am'
// For times after noon, add ‘pm’:

// timeWord("12:09")
// // 'twelve oh nine pm'

// timeWord("23:23")
// // 'eleven twenty three pm'

//handle the hours first
//00=midnight
//12=noon
//01 || 13 =one
//02 || 14 =two
//03 || 15 =three
//09 || 21 =nine
//10 || 22 =ten
//11 || 23 =eleven

//handle the minute
//00=o'clock
//11-19=eleven-nineteen
//if minutes >= 20 || minutes <= 10
//01-10=one-ten
//20-29=twenty-twenty nine
//30-39=thirty-thirty nine
//40-49=forty-forty nine
//50-59=fifty-fifty nine

const timeWord = (time) => {
  //edge cases for midnight and noon
  if (time === "00:00") {
    return "midnight";
  } else if (time === "12:00") {
    return "noon";
  }

  //split the time by hour and minute
  let newTime = time.split(":");
  let ans = "";

  //handle the hours
  switch (+newTime[0]) {
    case 01:
    case 13:
      ans += "one";
      break;
    case 02:
    case 14:
      ans += "two";
      break;
    case 03:
    case 15:
      ans += "three";
      break;
    case 04:
    case 16:
      ans += "four";
      break;
    case 05:
    case 17:
      ans += "five";
      break;
    case 06:
    case 18:
      ans += "six";
      break;
    case 07:
    case 19:
      ans += "seven";
      break;
    case 08:
    case 20:
      ans += "eight";
      break;
    case 09:
    case 21:
      ans += "nine";
      break;
    case 10:
    case 22:
      ans += "ten";
      break;
    case 11:
    case 23:
      ans += "eleven";
      break;
    case 12:
    case 00:
      ans += "twelve";
      break;
  }

  //edge case for 00 minute
  if (+newTime[1] == 00) {
    ans += " o' clock";
  }
  //handle the minutes
  let firstMin = +newTime[1].charAt(0);
  let secondMin = +newTime[1].charAt(1);

  if (+newTime[1] >= 10 && +newTime[1] <= 19) {
    switch (+newTime[1]) {
      case 10:
        ans += " ten";
        break;
      case 11:
        ans += " eleven";
        break;
      case 12:
        ans += " twelve";
        break;
      case 13:
        ans += " thirteen";
        break;
      case 14:
        ans += " fourteen";
        break;
      case 15:
        ans += " fifteen";
        break;
      case 16:
        ans += " sixteen";
        break;
      case 17:
        ans += " seventeen";
        break;
      case 18:
        ans += " eighteen";
        break;
      case 19:
        ans += " nineteen";
        break;
    }
  } else {
    switch (firstMin) {
      case 0:
        ans += " oh";
        break;
      case 2:
        ans += " twenty";
        break;
      case 3:
        ans += " thirty";
        break;
      case 4:
        ans += " forty";
        break;
      case 5:
        ans += " fifty";
        break;
    }
    switch (secondMin) {
      case 0:
        ans = ans.split(" oh").join("");
        break;
      case 1:
        ans += " one";
        break;
      case 2:
        ans += " two";
        break;
      case 3:
        ans += " three";
        break;
      case 4:
        ans += " four";
        break;
      case 5:
        ans += " five";
        break;
      case 6:
        ans += " six";
        break;
      case 7:
        ans += " seven";
        break;
      case 8:
        ans += " eight";
        break;
      case 9:
        ans += " nine";
        break;
    }
  }

  //handle am or pm
  if (+newTime[0] < 12) {
    ans += " am";
  } else {
    ans += " pm";
  }
  return ans;
};

console.log(timeWord("00:00"))
// 'midnight'

console.log(timeWord("12:00"))
// 'noon'


console.log(timeWord("01:00"))
// "one o'clock am"

console.log(timeWord("06:01"))
// 'six oh one am'

console.log(timeWord("06:10"))
// 'six ten am'

console.log(timeWord("06:18"))
// 'six eighteen am'

console.log(timeWord("06:30"))
// 'six thirty am'

console.log(timeWord("10:34"))
// 'ten thirty four am'


console.log(timeWord("00:12"))
// 'twelve twelve am'


console.log(timeWord("12:09"))
// 'twelve oh nine pm'

console.log(timeWord("23:23"))
// 'eleven twenty three pm'