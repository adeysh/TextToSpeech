const message = document.getElementById('message');
const button = document.getElementById('button');
const speech = new SpeechSynthesisUtterance();

message.innerHTML = "Greetings, seeker of knowledge. Here, thou mayst inscribe thy words, and through our humble means, they shall be rendered into speech!";

let voices = [];

let voiceSelect = document.getElementById('voices');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

button.addEventListener("click", () => {
    speech.text = message.value;
    window.speechSynthesis.speak(speech);
});