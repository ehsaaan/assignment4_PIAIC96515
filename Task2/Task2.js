var value = "472";
var result;
document.getElementById("value").innerText = `Value:${value}`;
document.getElementById("type").innerText = `Type:${typeof value}`;

result = Number(value);
document.getElementById("resultValue").innerText = `Value:${result}`;
document.getElementById("resultType").innerText = `Type:${typeof result}`;
