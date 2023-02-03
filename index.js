// Create a function that takes in a sentence. It should look for the word "Waldo" and return another sentence indicating which word in the argument string "Waldo" exists as.
// If you can't find Waldo, return "404: Waldo not found!".

function findWaldo(waldoString) {
    const waldoArr = waldoString.split(' ')
    if (waldoArr.indexOf("Waldo") === -1) {
      return console.log( "404: Waldo not found!")
    }
    else {
    return console.log( `I found Waldo at ${waldoArr.indexOf("Waldo") + 1}`)
    }
  }

  findWaldo("Waldo is in this sentence")