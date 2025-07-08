// #1
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(let i = 0; i < names.length; i++){
    people.push({name: names[i], age: ages[i]});
}
// console.log(people); // Works wuth debug



// #2
for(let pObj of people){
    console.log(`${pObj.name} is ${pObj.age} years old`);
}



// #3
const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]

for(let postIndx in posts){
    if(posts[postIndx].id == 2){
        posts.splice(postIndx, postIndx);
    }
}



// #4
const posts2 = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]

for(let postIndx in posts2){
    if(posts2[postIndx].id === 2){
        for(let commentIndx in posts2[postIndx].comments){
            if((posts2[postIndx].comments)[commentIndx].id === 3){
                posts2[postIndx].comments.splice(commentIndx, commentIndx);
            }

        }
    }
}




// #5
const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

let keysArr = Object.keys(dictionary);

for(let key of keysArr){
    console.log(`Words that begin with ${key}: `);
    for(word of dictionary[key]){
        console.log(word);
    }
    console.log();
}
