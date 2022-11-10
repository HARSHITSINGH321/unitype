
//[
//   "paragraph you your he she them their her him me my it its our these this that those who what acceptable all competent satisfying sound which efficient adept honest just even first many one two some like other more new any down and or because but with on than of in to for if by out into about",
//   "paragraph it is true that bananas have no bones but i like bananas because they are tasty and healthy not because they have no bones i would thus say something false if i said i like bananas because they have no bones Thats why i like bananas because they have no bones is a statement dding some random keywords ignore if you are reading it",
//   "paragraph village order shadow age jam banquet original bulb reach mechanism abridge ribbon interface plaster equal market medieval qualified sigh grand braid echo ratio shatter diagram arrange bait frighten movement chin club kick kitchen leg mother dome spread bottom mosquito fat oral delete king lease promote accent umbrella burial know thread",
//   "paragraph what does make a statement mean make acontinue hold remain occur transpire when now how also not as up here there so very immediately initially additionally nearby extremely greatly time year people day man thing woman work child life world way back i statement is a phrase that means to express an idea or mood without using words, as in Adam made a statement about how he felt about his opponent when he didn't shake their hand.Adding some random keywords, ignore if you are reading it.Adding some random keywords, ignore if you are reading it adding some random keywords ignore if you are reading it",
//   "paragraph imprison milky modern rare early overwrought behavior broken apparel defective trick massive rise disease oval stretch knowing legs word comparison chilly political neat recognize cruel sample goat prohibit victorious pleasure arrest far flung need find answer ragged shop in conclusive kids broad sea heavenly friction thinkable quarrel support bead",
// ];
const homerow=["adfa dfsd fasd fdsa sdkl k;lk ljkl ;ads jasd hk;f ask; all; ash; gas; dash; flash; flask; fall; sall; das; glass; kalf; has; had; dalda; flad; klad; slash; josh jolla;"];
const quotes=["[ ] ; ' , . / \ ( ) { } : < > ? () {} \/ /\ <> >< )( }{ [ ] ; ' , . / \ ( ) { } : < > ? () {} \/ /\ ( ) { } : < > ? () {} \/ /\ <> >< )( }{ [ ] ; ' , . / \ ( ) { } [ ] ; ' , . / \ ( ) { } : < > ?"];
const firstrow=["q e r t yu i o o qwe qwer qr tr y ety yu ty ue r  tq tqw t retwe rt q rt r tw er tewrt ewrt we rt wert wer t qtw  rw  tw t"];
const bottomrow=["z x c v b n m , , /"];
const uppercase=["AEF FVQWBTE RYB YHB YEVD GBHS G"];
const mixed=["1 2 fad c ; [] wur vc asdf ASDF cvsdtA g sfa"];



let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let caps_lock_key = document.querySelector('.caps_lock_key');
let toggle_circle = document.querySelector('.toggle_circle');
let night_mode = document.querySelector('.night_mode');
let body = document.querySelector('body');
let text_input = document.querySelector('.text');
let change_color = document.querySelector('.change_light_color');
let colors_input = document.querySelector('.colors_input');
let keyboard_lights = document.querySelector('.keyboard_lights');
let keyboard_wrapp = document.querySelector('.keyboard_wrapp');

for(let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active')
        }
        if(e.code == 'Space') {
            spaceKey.classList.add('active')
        }
        if(e.code == 'ShiftLeft') {
            shift_right.classList.remove('active')
        }
        if(e.code == 'ShiftRight') {
            shift_left.classList.remove('active')
        }
        if(e.code == 'CapsLock') {
            caps_lock_key.classList.toggle('active');
        }
    }
})

window.addEventListener('keyup', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active')
            

            keys[i].classList.add('remove')
        }
        if(e.code == 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        if(e.code == 'ShiftLeft') {
            shift_right.classList.remove('active')
            shift_right.classList.remove('remove')
        }
        if(e.code == 'ShiftRight') {
            shift_left.classList.remove('active')
            shift_left.classList.remove('remove')
        }
        setTimeout(()=> {
            keys[i].classList.remove('remove')
        },200)
    }
})


night_mode.addEventListener('click',function() {
    toggle_circle.classList.toggle('active');
    body.classList.toggle('active');
    night_mode.classList.toggle('active');
    keyboard_wrapp.classList.toggle('active');
    text_input.classList.toggle('active');
    change_color.classList.toggle('active');
    for(let i = 0; i < keys.length; i++) {
        keys[i].classList.toggle('keys_night')
    }
})

colors_input.addEventListener('input',function() {
    for(let i = 0; i < keys.length; i++) {
        keys[i].style.color = colors_input.value
    }
    keyboard_lights.style.background = colors_input.value;
})
























//S H U B H A M CODE

const typingText = document.querySelector(".typing-text p"),
inpField = document.querySelector(".wrapper .input-field"),
mistakeTag = document.querySelector(".mistake span"),
timeTag = document.querySelector(".time span b"),//timeTag stores what is inside the span
CPMTag = document.querySelector(".cpm span"),
WPMTag = document.querySelector(".wpm span"),
tryAgainButton= document.querySelector("ul button");
let selection=document.querySelector('#feature select');
let lessonSelection=document.querySelector("#rowtype select");
let paragraph=homerow;
    
lessonSelection.addEventListener('change',()=>{
  Loption = lessonSelection.options[lessonSelection.selectedIndex].value;
  
  // console.log(Loption=="homerow");
  if(Loption=="homerow"){
    typingText.innerHTML="";
    paragraph=homerow;
    randomParagraph();
  }

  if(Loption=="firstrow"){
    typingText.innerHTML="";
    paragraph=firstrow;
    randomParagraph();
    
  }

  if(Loption=="quotes"){
    // let paragraph=quotes;
    typingText.innerHTML="";
    paragraph=quotes;
    randomParagraph();
    
  }

  if(Loption=="uppercase"){
    typingText.innerHTML="";
    paragraph=uppercase;
    randomParagraph();
    
  }

  if(Loption=="mixed"){
    typingText.innerHTML="";
    paragraph=mixed;
    randomParagraph();
    
  }
  if(Loption=="bottomrow"){
    typingText.innerHTML="";
    paragraph=bottomrow;
    randomParagraph();
  }
})





timeTag.value=60;
let timer;
let maxTime = timeTag.value; //creating a variable
let timeleft =timeTag.value; //creating a variable
let characterindex = 0;
let mistakes = 0;
let isTyping = 1;
let wpm = 0;


//using dropdown menu to change the time of the challenge
selection.addEventListener('change',()=>{
  timeTag.value=selection.options[selection.selectedIndex].value;
  timeTag.innerText=selection.options[selection.selectedIndex].value;
  maxTime = timeTag.value; //creating a variable
  timeleft = timeTag.value; //creating a variable
})


function randomParagraph() {
  let randomIndex = Math.floor(Math.random() * paragraph.length);//chosing random index of paragraph
  paragraph[randomIndex].split("").forEach((span) => {
    //here span is the variable that stores all the letter one by one because of for each loop
    let spanTag = `<span>${span}</span>`; //creating span tag containing each character of the choosen paragraph
    typingText.innerHTML += spanTag; //adding to the inner written paragraph
  }); //getting random item from the paragraphs array,splitting all character of it, adding each character insider span and then adding this span inside the paragraph tag

  document.addEventListener("keydown", () => inpField.focus()); //focuing input field on key down
  typingText.addEventListener("click", () => inpField.focus()); //or click event
}




function initTyping() {
  inpField.focus();
  const characters = typingText.querySelectorAll("span");//characters will be the list of all the characters in the paragraph
  let typedCharacter = inpField.value.split("")[characterindex];
  if (characterindex < characters.length-1 && timeleft > 0) {
    if (isTyping) {
      //once the timer has started it wont be called again on each user input hence eleminating the timer acceleration
      timer = setInterval(initTimer, 1000); //decresing remaining time by one every second by calling initTimer funtion every second
      isTyping = 0;
    }
    //backspace is considered null.
    if (typedCharacter == null) {
      characterindex--; //moving backword on pressing backspace
      characters[characterindex].classList.remove("correct", "incorrect"); //removing corrent or incorrect class form classlist if backword key is pressed
    } else {
      if (characters[characterindex].innerText === typedCharacter) {
        characters[characterindex].classList.add("correct"); //if typed text is correct class is added to the span
      } else {
        characters[characterindex].classList.add("incorrect");
        mistakes++; //if character didn't matched then mistake is considered
      }
      characterindex++;
    }

    characters.forEach((span) => span.classList.remove("active"));
    characters[characterindex].classList.add("active");
    mistakeTag.innerHTML = mistakes; //storing the mistake value in the mistakeTag
    CPMTag.innerHTML = characterindex - mistakes; //cpm means character permiute
    wpm = Math.round(
     (((characterindex - mistakes) / 5 )/ (maxTime - timeleft) * timeTag.value)
    ); //average word length is taken 5.
    if (wpm < 0 || !wpm || wpm === Infinity || wpm > 250) {
      wpm = 0;
      WPMTag.innerText = wpm;
    } else {
      WPMTag.innerText = wpm;
    }
  }
  else{
    inpField.value="OVER!";
    clearInterval(timer);
  }
}



function initTimer() {
  if (timeleft > 0) {
    timeleft--;
    timeTag.innerText = timeleft;
  } else {
    clearInterval(timer); //this will clears/stops the timer
  }
  CPMTag.innerHTML =(Number) (characterindex - mistakes)/(timeTag.value/60); //cpm means character permiute
    wpm = Math.round(
     (((characterindex - mistakes) / 5 )/ (maxTime - timeleft) * timeTag.value)
    ); //average word length is taken 5.
    if (wpm < 0 || !wpm || wpm === Infinity || wpm > 250) {
      wpm = 0;
      WPMTag.innerText = wpm;
    } else {
      WPMTag.innerText = wpm;
    }
}



function restart(){//this will add a new paragraph and set variables to defalut, and delete the previous one.
  typingText.innerHTML="";//firstly remove the previous paragraph
  randomParagraph();
  inpField.value="";//cleaning the input field
  clearInterval(timer);
  maxTime = timeTag.value; //creating a variable
  timeleft = timeTag.value; //creating a variable
  characterindex = 0;
  mistakes = 0;
  isTyping = 1;
  wpm = 0;
  timeTag.innerHTML=timeTag.value;
  mistakeTag.innerHTML = mistakes; //storing the mistake value in the mistakeTag
  CPMTag.innerHTML = 0; //cpm means character permiute
  WPMTag.innerText = 0;
}


randomParagraph();
inpField.addEventListener("input", initTyping); //what to do when an input is given from keyboard
tryAgainButton.addEventListener("click",restart);


