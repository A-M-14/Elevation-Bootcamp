// #1
const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]


const capitalize = function(str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase();     // first letter, capitalized
  capitalizedStr += str.slice(1);              // rest of the string
  return capitalizedStr;
}

function capitalizeEachWord(sentence){
  let capitalizedSentence = "";
  for(let word of sentence.split(" ") ){
    capitalizedSentence += `${capitalize(word)} `;
  }
  return capitalizedSentence;
}

function getAge(age){
  if(age < 21){
    return "an Underage";
  } else if(age > 55){
    return "a 55+";
  } 
  
  return `${age} years old`;
}

function mergeCountryWithCity(city, country){
  let capitalizedCity = capitalize(city);
  let capitalizedCountry = capitalize(country);
 
  return `${capitalizedCity}, ${capitalizedCountry}. `;

  //return capitalizedCity + ', ' + capitalizedCountry
}

function formatCatchPhrase(phrase){
  return `"${capitalize(phrase)}"`;
}


const getSummary = function(person){
  let summary = "";
  summary += capitalize(person.name);
  summary += ` is ${getAge(person.age)} `; //Yes - you can put a function call inside the tick quotes!
  summary += `${capitalizeEachWord(person.profession)}from `;                        
  summary += `${mergeCountryWithCity(person.city, person.country)}`;                        
  summary += `${capitalize(person.name)} loves to say ${formatCatchPhrase(person.catchphrase)}.`;
  return summary;
}

console.log(getSummary(people_info[2]));




// #2
const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}


function removerSpecialChars(str){
  for(let specialChar of specialChars){
    str = str.split(specialChar).join("")
  }
  return str;
}

function cleanText(sentence){
  return (sentence.toLowerCase()).split(" ");
}

function formattedStoryToArr(story){
  let storyWithoutSpecialChars = removerSpecialChars(story);
  let storyArr = cleanText(storyWithoutSpecialChars);

  return storyArr;
}


function addToCounter(arrOfStrs){
  for(let str of arrOfStrs){
    if(wordCounts[str]){
      wordCounts[str]++;
    } else{
      wordCounts[str] = 1;
    }
  }
}


function countWords(sentence){
  sentenceArray = formattedStoryToArr(sentence);
  addToCounter(sentenceArray);
}


countWords(story);
//console.log(wordCounts);