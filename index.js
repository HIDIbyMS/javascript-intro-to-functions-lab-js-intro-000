function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

var lowercase = 'hello'


function sayHiToGrandma(string) {
  if (string.toLowerCase() === lowercase){
  return "I can't hear you!"
  }  
}

// var lowerCase = 'hello!'
function sayHiToGrandma(string) {
  if (string.toLowerCase()){
  return "I can't hear you!"
  }  
}


var upperCase = 'HELLO!'
function sayHiToGrandma(string) {
  if (string.toUpperCase() === upperCase) {
    return "YES INDEED!"
  } 
}

var mixedCase = 'Hi there!'
function sayHiToGrandma(string) {
  if (string.toLowerCase() === mixedCase || string.toUpperCase() === mixedCase){
    return "I love you, too."
  }
}










