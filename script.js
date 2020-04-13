const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');


// List of words for game
const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
  ];

  
  // init word
let randomWord;

// init score  
let score =0 ;

// init time  
let time = 10;

// Focus on Text on start

text.focus();

// start counting down
const timeInterval = setInterval(updateTime, 1000);


// get Random word from array
function getRandomWord(){
    return words[Math.floor(Math.random()* words.length)]
}

// Add word to DOM

addWordToDom = () => {
    randomWord=getRandomWord();
    word.innerHTML = randomWord;
}

// function update score
updateScore = () => {
    score++;
    scoreEl.innerHTML = score;
}

// Update Time
function updateTime() {
    time--; 
    timeEl.innerHTML = time + 's'

    if(time === 0) {
        clearInterval(timeInterval);

        // end the game
        gameOver();
    }
}

// game over 
function gameOver(){
    endgameEl.innerHTML= `
    <h1>Time ran out </h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
    `
    endgameEl.style.display = 'flex';
}

addWordToDom()

// Event listeners 

text.addEventListener('input', e =>{
    const insertedText = e.target.value;
    if(insertedText === randomWord) {
        addWordToDom();
        updateScore();
    // clear 
    e.target.value = ''; 
    
    time += 5;

    updateTime();

    }
})

