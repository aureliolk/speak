const utterance = new SpeechSynthesisUtterance();
const read = document.querySelector('#read')


utterance.lang = "pt-BR";
utterance.rate = 1.8;


function speak() {
    utterance.text = read.value
    if (utterance.text.length > 0) {
        speechSynthesis.speak(utterance);
    } else {
        utterance.text = 'Oi meu amigo! insira um texto para continuar'
        speechSynthesis.speak(utterance);
    }
}

function stop() {
    speechSynthesis.cancel();
}