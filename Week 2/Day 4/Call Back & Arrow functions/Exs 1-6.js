// #1
const push = function () {
  console.log("pushing it!")
}

const pull = function () {
  console.log("pulling it!")
}

const pushPull = function(func){
    func();
}

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"

// Lo Kashur
// const square = num => (console.log(num*num));
// const getFormalTitle = (str1, str2) => str1 + " " + str2;

// #2
const returnTime = function (time) {
  console.log('The current time is: ' + time)
}

const getTime = function(func){
    func(new Date());
}

getTime(returnTime)




// #3
const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

const logData = function(str){
    console.log(str);
}

displayData(console.error, logData, "I like to party");




// #4
const sum3Numbers = (a, b, c) => a + b + c;



// #5
const capitalize = str =>  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

//console.log(capitalize("sAsSi")); // Check




// #6
const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}

const commentOnWeather = tmp => "It's " + determineWeather(tmp);

console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"
