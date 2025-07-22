const gods = ["athena", "hestia", "zeus", "orpheus", "sisyphus", "hera", "dionysus", "poseidon", "demeter"];
let scores = new Map();
for (let k = 0; k < gods.length; k++) {
    scores.set(gods[k], {val: 0});
}

let resultsImgMap = new Map();
for (let m = 0; m < gods.length; m++) {
    resultsImgMap.set(gods[m], (`results/${gods[m]}.png`));
}

let glowing = document.createElement('img'); 
glowing.src='glowing.gif';
glowing.className = 'center';
glowing.style.marginTop = '100px';
glowing.style.width = '348px';
glowing.style.height = '370px';
let loadingText = document.createElement('div');
loadingText.className = 'center';
loadingText.style.margin = 'auto';
loadingText.textContent = 'You feel your ancestors blood surging through you...';

function restart() {
    window.location.href = "start.html";
    for (let k = 0; k < gods.length; k++) {
        scores.set(gods[k], {val: 0});
    }
}

function share() {
    alert('i dont wanna code this feature pls just screenshot');
}

function getsrc() {
    let keyOfHighestValue = sessionStorage.getItem('resultGod');
    document.getElementById('resultimg').src = resultsImgMap.get(keyOfHighestValue);
}

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.endsWith("results.html"))
        getsrc();
});

function updateScore(prevQnum, butid) {
    
    switch (prevQnum) {
        case 1:
            switch (butid) {
                case 'a':
                    for (let god of ['dionysus', 'poseidon']) {
                        scores.get(god).val++;
                }
                    break;
                case 'b':
                    for (let god of ['dionysus', 'poseidon']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'c':
                    for (let god of ['athena', 'zeus', 'orpheus', 'sisyphus']) {
                        scores.get(god).val++;
                    }
                    break;
            }
            break;
        case 2:
            switch (butid) {
                case 'a':
                    for (let god of ['orpheus', 'dionysus']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'b':
                    for (let god of ['hestia', 'zeus', 'poseidon', 'demeter']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'c':
                    for (let god of ['athena', 'hera', 'sisyphus']) {
                        scores.get(god).val++;
                    }
                    break;
            }
            break;
        case 3:
            switch (butid) {
                case 'a':
                    for (let god of ['athena', 'zeus', 'orpheus', 'dionysus', 'poseidon']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'b':
                    for (let god of ['hestia', 'sisyphus', 'hera', 'demeter']) {
                        scores.get(god).val++;
                    }
                    break;
            }
            break;
        case 4:
            switch (butid) {
                case 'a':
                    for (let god of ['orpheus', 'dionysus']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'b':
                    for (let god of ['hestia', 'zeus', 'poseidon', 'demeter']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'c':
                    for (let god of ['athena', 'hera', 'sisyphus']) {
                        scores.get(god).val++;
                    }
                    break;
            }
            break;
        case 5:
            switch (butid) {
                case 'a':
                    for (let god of ['zeus', 'hera', 'dionysus']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'b':
                    for (let god of ['athena', 'orpheus', 'demeter']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'c':
                    for (let god of ['hestia', 'sisyphus', 'poseidon']) {
                        scores.get(god).val++;
                    }
                    break;
            }
            break;
        // case 6: cutscene
        case 7:
            switch (butid) {
                case 'a':
                    for (let god of ['zeus', 'orpheus', 'hera', 'dionysus', 'demeter']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'b':
                    for (let god of ['athena', 'hestia']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'c':
                    for (let god of ['sisyphus', 'poseidon']) {
                        scores.get(god).val++;
                    }
                    break;
            }
            break;
        case 8:
            switch (butid) {
                case 'a':
                    for (let god of ['athena', 'orpheus', 'hera']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'b':
                    for (let god of ['zeus', 'sisyphus', 'poseidon']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'c':
                    for (let god of ['hestia', 'dionysus', 'demeter']) {
                        scores.get(god).val++;
                    }
                    break;
            }
            break;
        case 9:
            switch (butid) {
                case 'a':
                    for (let god of ['zeus', 'orpheus', 'dionysus']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'b':
                    for (let god of ['sisyphus', 'hera', 'poseidon']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'c':
                    for (let god of ['athena', 'demeter', 'hestia']) {
                        scores.get(god).val++;
                    }
                    break;
            }
            break;
        case 10:
            switch (butid) {
                case 'a':
                    for (let god of ['athena', 'hera', 'dionysus']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'b':
                    for (let god of ['zeus', 'sisyphus', 'poseidon']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'c':
                    for (let god of ['hestia', 'orpheus', 'demeter']) {
                        scores.get(god).val++;
                    }
                    break;
            }
            break;
        case 11:
            switch (butid) {
                case 'a':
                    for (let god of ['hestia', 'zeus', 'orpheus']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'b':
                    for (let god of ['athena', 'sisyphus', 'hera', 'poseidon']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'c':
                    for (let god of ['dionysus', 'demeter']) {
                        scores.get(god).val++;
                    }
                    break;
            }
            break;
        case 12:
            switch (butid) {
                case 'a':
                    for (let god of ['athena', 'zeus', 'orpheus']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'b':
                    for (let god of ['sisyphus', 'hera', 'poseidon']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'c':
                    for (let god of ['hestia', 'dionysus', 'demeter']) {
                        scores.get(god).val++;
                    }
                    break;
            }
            break;
        case 13:
            switch (butid) {
                case 'a':
                    for (let god of ['hestia', 'dionysus']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'b':
                    for (let god of ['zeus', 'hera', 'demeter', 'poseidon']) {
                        scores.get(god).val++;
                    }
                    break;
                case 'c':
                    for (let god of ['athena', 'orpheus', 'sisyphus']) {
                        scores.get(god).val++;
                    }
                    break;
            }
            break;
    }

}

function newQuestion(questionNumber, butid) {
   // update scores
    updateScore(questionNumber, butid);

    // qnum var for use, adjusted for cutscene
    let qnum = questionNumber;
    if (questionNumber < 5) {
        qnum = questionNumber + 1;
    } else{
        qnum = questionNumber;
    }
    
    // questions and answers in order
    const questionsList = [
        /* 1 */ 'You come home from school to find a letter on your nightstand.',
        /* 2 */ `The letter says you're invited to a special summer camp. No return address.`,
        /* 3 */ 'That night, strange sounds come from outside your window.',
        /* 4 */ 'The next day, your teacher calls you into a private meeting—only they suddenly have goat legs.',
        /* 5 */ `You're told that you are a demigod.`,
        /* cutscene */ `Your teacher escorts you outside where there is a private bus waiting for you.`,
        /* 6 */ `The bus driver drops you off outside a gate. A big sign reads "Camp Half-God".`,
        /* 7 */ `During orientation, your camp counselor leads you into a cabin with weapons on every wall and table. You pick...`,
        /* 8 */ `During dinner, the camp director pulls you aside. You’re asked to join a quest to retrieve a stolen artifact.`,
        /* 9 */ 'On the road, your first obstacle is a cyclops who asks riddles.',
        /* 10 */ 'You and your team camp out for the night. You take on the role of...',
        /* 11 */ 'You reach the final temple where the artifact is hidden. But it’s cursed.',
        /* 12 */ 'You return to camp a hero. They offer to make your stay permanent.'
    ];

    const pics = [];
    for (t = 1; t <= 13; t++) {
        pics.push(`q${t}.png`);
    }

    const numButtonsPerQuestion = [
        3, // 1
        3, // 2
        2, // 3
        3, // 4
        3, // 5
        1,  /* cutscene */
        3, // 6
        3, // 7
        3, // 8
        3, // 9
        3, // 10
        3, // 11
        3 // 12
    ];
    const nestedAnswersList = [
        ['A letter? I wonder what it is. You open it with excitement.', 'Hmm.. I wonder what this could be... You open it with caution.', `Where did this come from? Whatever, I have to do my homework first, I'll look at it later.`],
        [`Okay, this is either super cool or how a horror movie starts. I'm in.`, `No return address? This screams shady. But... I am curious.`, `Yeah, no. Not going anywhere that doesn't at least have a website.`],
        ['You grab a flashlight and peek out. Curiosity killed the cat but satisfaction brought it back.', `You pull the covers over your head and pretend it's the wind.`],
        [`So... I guess this is the part where you tell me I'm magical?`, `Yep. Definitely hallucinating. I knew I shouldn’t have eaten that gas station sushi.`, `Cool. And here I thought my weirdest teacher was the one who juggled staplers.`],
        ['Awesome. When do I get a sword?', `Wait—me? Are you sure it’s not the other kid in the hallway?`, `Does this mean I can skip gym class forever? Because then I’m in.`],
        ['Continue'],
        ['This place looks like summer camp meets medieval chaos. Love it.', `Is there WiFi? Or am I about to live my worst rustic nightmare? I need to call home. And my BFF.`, `Do I have to share a cabin? I value my alone time and my snacks.`],
        ['A sword. Classic. Stylish.', 'A bow and arrow. Distance is safety, obviously.', `A shield. You’d rather not fight at all, thanks.`],
        [`YES. Do I get a cool code name?`, `Can I get back to you after dinner? Or like... never?`, 'Only if someone else handles the snakes. And the creepy caves. And the bees.'],
        [`Let’s go, I dominate Wordle. Hit me with your best riddle!`,  `Can we just… walk around it? Like, is that allowed?`, `How much time do I have before it eats me for guessing 'potato'?`],
        ['Fire-starter and ghost-story teller.', 'Night watch.', 'Sleeping burrito.'],
        ['Charge in. I came here to complete a mission.', 'Examine everything, Indiana Jones-style. No pressure plates left unchecked.', 'Let someone else go first...'],
        [`Accept. This is your new home now, weird monsters and all.`, 'Ask for a part-time gig. Hero-ing on weekends only.', `Thank them politely and Uber home. You’ve got homework to catch up on.`]
    ];
    const answerIDs = ['a', 'b', 'c'];
    
    // changing the question number display
    const qnumDisplay = document.getElementById('qnumDisplay');
    if (questionNumber == questionsList.length) {
        let highestValue = -1;
        let keyOfHighestValue = null;
        for (const [key, value] of scores.entries()) {
            if (value.val > highestValue) {
              highestValue = value.val;
              keyOfHighestValue = key;
            }
          }
        sessionStorage.setItem('resultGod', keyOfHighestValue);
        qnumDisplay.textContent = '';
        document.getElementById('pic').style.display = 'none';
        document.body.appendChild(loadingText); 
        document.body.appendChild(glowing);
        setTimeout(function () {window.location.href = "results.html";}, 2500);
        

    } else if (questionNumber!=5) { // quiz over
        qnumDisplay.textContent = `✰   ${qnum}   ✰`;
    } else { //cutscene
        qnumDisplay.textContent = `✰`;
    }
    const promptDisplay = document.getElementById('promptDisplay');
    promptDisplay.textContent = questionsList[questionNumber];
    
    // changing story picture
    const pic = document.getElementById('pic');
    pic.src = `qimgs/${pics[questionNumber]}`;

    // clearing all buttons from the container
    const answerDisplay = document.getElementById('answerDisplay');
    answerDisplay.innerHTML = '';

    // creating answer buttons
    for (let i = 0; i < numButtonsPerQuestion[questionNumber]; i++) {
        const qbutton = document.createElement('button');
        qbutton.id = answerIDs[i];
        qbutton.className = 'button';
        qbutton.textContent = nestedAnswersList[questionNumber][i];
        qbutton.addEventListener('click', () => {newQuestion((questionNumber + 1), answerIDs[i]);});
        answerDisplay.appendChild(qbutton);
    }
}