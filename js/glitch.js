const kanaChat = document.getElementsByClassName('kana__chat')[0];
const kanaBtn = document.getElementsByClassName('kana__button')[0];
const falseKey = document.getElementsByClassName('false_key')[0];
const trueKey = document.getElementsByClassName('true_key')[0];
const kanaAvatar = document.getElementsByClassName('kana_avatar')[0];
let progressOne = false;
let progressTwo = false;
const kanaArray = [
    'Oh .. I do not know ...',
    'Something...Doesnt let us pass...',
    'Try to look around and find the KEY.exe to get out of here ...',
    'noneJustPlaceholderImSOlazyforFixIt',
    'Oh, sorry, this is not KEY. Try look around again!',
    'Just....try look around again!',
    'noneJustPlaceholderImSOlazyforFixIt',
    'Now I will send you where you should have been from the beginning.',
    'I do not know whether we will meet in the future or not.',
    'Just dont say anything to my boss (about errors), okay?',
    'He can be so angry at me,if he finds out that I am working with.. errors. '
];
const playerArray = [
    'Next',
    'Next',
    'Ok',
    'noneJustPlaceholderImSOlazyforFixIt',
    'What?! What is the key I need to find?',
    'Okay',
    'noneJustPlaceholderImSOlazyforFixIt',
    'Next',
    'Next',
    'Next',
    'Okay k4n4, i promise ;)'

];
let txtCounter = 0;

kanaBtn.addEventListener('click', () => {
    if (txtCounter === 3) {
        kanaBtn.innerText = '?';
        kanaChat.innerText = 'zzzzzzzZZzz';
        return;
    }
    if (txtCounter === 5) {
        trueKey.classList.remove('display__none');

    }
    if (txtCounter === 6) {
        kanaChat.innerText = 'zzzzzzzZZzz';
        return;
    }
    if (txtCounter === 11) {
        window.location.assign("new-version.html");
        return;
    }


    kanaBtn.innerText = playerArray[txtCounter];
    kanaChat.innerText = kanaArray[txtCounter];
    txtCounter += 1;
});

falseKey.addEventListener('click', () => {
    falseKey.classList.add('display__none');
    progressOne = true;
    txtCounter = 4;
    kanaBtn.innerText = 'I found KEEEY! Wake up!';
    alert('You found KEY!');

});

trueKey.addEventListener('click', () => {
    progressTwo = true;
    trueKey.classList.add('display__none');
    kanaAvatar.src = 'img/kana-glitch-two.png';
    kanaBtn.innerText = 'Next';
    kanaChat.innerText = 'I see you found what we need.';
    txtCounter += 1;
    alert('You found KEY!');
});