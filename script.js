const codes = [
  "guizerayt",
  "morespins",
  "GOSLAYERBOUND",
  "datafix",
  "YOKO",
  "300KVISITS",
  "thxfor5k"
];

const codesSection = document.querySelector(".codes");
const updatedText = document.querySelector(".updated");

codes.forEach((code, index) => {
  const card = document.createElement("div");
  card.className = "code-card";
  card.style.animationDelay = `${index * 0.08}s`;

  card.innerHTML = `
    <span class="code">${code}</span>
    <button class="copy-btn">Copy</button>
  `;

  codesSection.insertBefore(card, updatedText);
});

document.addEventListener("click", e => {
  if (!e.target.classList.contains("copy-btn")) return;

  const button = e.target;
  const code = button.previousElementSibling.innerText;

  navigator.clipboard.writeText(code);

  button.innerText = "Copied";
  button.classList.add("copied");

  setTimeout(() => {
    button.innerText = "Copy";
    button.classList.remove("copied");
  }, 1400);
});

document.getElementById("date").innerText =
  new Date().toLocaleDateString("en-US");
