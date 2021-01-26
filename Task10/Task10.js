var html = "<p><strong><em>Only print this</em></strong></p>";
var div = document.createElement("div");
div.innerHTML = html;
var text = div.textContent || div.innerText || "";
document.getElementById("output").innerText = `Output:: ${text}.`;
