var input = "Hyderabad";

document.getElementById("input").innerText = `City:${input}`;

document.getElementById(
  "output"
).innerText = `After replacement:${input.replace("Hyder", "Islam")}`;
