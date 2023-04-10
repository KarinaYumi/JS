let texto = document.getElementById("texto");
let res = document.getElementById("res");

texto.addEventListener("input", function(event) {
  let texto = event.target.value;
  res.textContent = texto ? ` ${texto}` : "";
});