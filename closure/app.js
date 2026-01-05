
// document.getElementById(id).addEventListener(
//   "click",
//   (function () {
//     let count = 0;
//     return function () {
//       count++;
//       console.log("Button clicked " + count + " times");
//     };
//   })()
// );

function createCounter(id) {
const btn = document.getElementById(id);
let count = 0;
btn.addEventListener('click',function(){
    count++;
    btn.innerText = "Clicked " + count + " times";
});
}

createCounter("btn1");
createCounter("btn2");
createCounter("btn3");