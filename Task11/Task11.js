function precise_round(num, dec) {
  if (typeof num !== "number" || typeof dec !== "number") return false;

  var num_sign = num >= 0 ? 1 : -1;

  return (
    Math.round(num * Math.pow(10, dec) + num_sign * 0.0001) / Math.pow(10, dec)
  ).toFixed(dec);
}
document.getElementById("output").innerText = `${precise_round(12.375, 2)} 
${precise_round(12.37499, 2)}  
${precise_round(-10.3079499, 3)}`;
