const dialogueText = document.getElementsByClassName('dialogue_txt_main')[0];
const btnNext = document.getElementsByClassName('btn_next')[0];
const txtArray = [
    'You can call me... just... KANA',
    'I do not know how you got to this place...',
    'This is the old version of the site ...',
    'You shouldnt be here, its my mistake.',
    'Oh ... My boss will be very angry at me.',
    'Maybe we pretend that nothing happened and I will take you to the new version of the site?',
    'Oh, thank u!'


]

let txtCounter = 0;


btnNext.addEventListener('click', function() {
    dialogueText.innerText = txtArray[txtCounter];
    txtCounter += 1;

    if (txtCounter === 6) {
        btnNext.innerText = 'Ok';
    }

    if (txtCounter === 7) {
        window.location.assign("glitch.html");
    }

});