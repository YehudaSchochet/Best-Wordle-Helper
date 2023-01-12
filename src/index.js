import './css/index.css';
import $ from 'jquery';
import wordlist from 'an-array-of-english-words'

//get list of engish five letter words
let wordList = wordlist.filter(word => word.length === 5);

let filteredWords = $('#filteredWords')

$('#done').on('click', () => {
  let words=wordList
  let excludedLetters = $('#excluded').val().toLowerCase();

  //array of letter in the correct spots
  let greenLetters = [
    $('#firstGreen').val().toLowerCase(),
    $('#secondGreen').val().toLowerCase(),
    $('#thirdGreen').val().toLowerCase(),
    $('#fourthGreen').val().toLowerCase(),
    $('#fifthGreen').val().toLowerCase()
  ]

  //array of letters in incorrect spots
  let yellowSpots = [
    $('#firstYellow').val().toLowerCase(),
    $('#secondYellow').val().toLowerCase(),
    $('#thirdYellow').val().toLowerCase(),
    $('#fourthYellow').val().toLowerCase(),
    $('#fifthYellow').val().toLowerCase()
  ]
  
  //function to to filter the wordlist via callback passed in
  function wordlistFilter(callback) {
    words = words.filter(callback)
  }

  //filter words with excluded letters
  for (let i = 0; i < excludedLetters.length; i++) {
    wordlistFilter(word => !word.includes(excludedLetters[i]))
  }

  for (let i = 0; i < 5; i++) {
    //filter words with letter in the correct spot
    const greenLetter = greenLetters[i];
    if (greenLetter !== '') {
      wordlistFilter(word => word[i].includes(greenLetter))
    }
    //filter words with letter in the wrong spot 
    const spot = yellowSpots[i];
    if (spot !== '') {
      for (let j = 0; j < spot.length; j++) {
        wordlistFilter(word => word.includes(spot[j]))
        wordlistFilter(word => !word[i].includes(spot[j]))
      }
    }

  }
  filteredWords.empty();
  words.forEach(word=>{
    $(`<div class="finalWord"> <a href="https://en.wiktionary.org/wiki/${word}" target="_blank"> ${word}</a> </div> `).appendTo(filteredWords)
  })
});

$('#clear').on('click', () => {
  //clear inputs, final word display, and reset wordlist
  $('.inputs').val('');
  filteredWords.empty();
})
