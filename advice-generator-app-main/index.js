const btn = document.querySelector(".btn");
const advice_p = document.querySelector(".advice_p");
const advice_no = document.querySelector(".advice_no");
const url = "https://api.adviceslip.com/advice";
let count = 1;
btn.addEventListener("click", async function () {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("please check your internet connection!!");
  }
  const data = await res.json();
  console.log(data.slip.advice);
  advice_p.textContent = `"${data.slip.advice}"`;
  count++;
  advice_no.innerHTML = count;
});
