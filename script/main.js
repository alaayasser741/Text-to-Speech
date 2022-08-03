const button = document.querySelector("button");
const textarea = document.querySelector("textarea");

button.addEventListener("click", () => {
  saywelcome(text);
});

function saywelcome(text) {
  text = textarea.value;
  const sp = new SpeechSynthesisUtterance(text);
  if (textarea.value === "") {
    text = "No text";
    const sp = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(sp);
  } else {
    text = textarea.value;
  }
  sp.addEventListener("end", () => {
    textarea.disabled = false;
  });
  textarea.disabled = true;
  speechSynthesis.speak(sp);
}
