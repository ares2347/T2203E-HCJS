const heading1 = document.getElementById("heading1");
const para1= document.getElementById("para1");
const button=document.getElementById("btn");
const aim=document.getElementById("aim");
// function clickMe () {
//     x*=-1;
//     heading1.style.transform= "translateY("+x+"%)";
//     heading1.innerText="Hello";
//     heading1.innerHTML="<i>Hello world</i>";
// function hover(){
//     x*=-1;
//     button.style.transform= "translateY("+x+"%)"
// }
// function jump(){
//     setInterval(()=>{
//         let x=Math.random()*100;
//         let y=Math.random()*100;
//         aim.style.transform= "translateX("+x+"vw), translateY("+y+"vh)";
//     },100ms)
// }
const sec=document.getElementById("sec");
const mils=document.getElementById("ms")
function countDown (){
    let x =document.getElementById("im").value ;
    var y = 0;
    const tm = setInterval(() => {

        if(y<10 && 0<y){
            mils.innerText="0"+y;
        }
        else if (y<0){
            x--;
            y=59;
        }
        else {mils.innerText=y}
        if (x<10){
            sec.innerText="0"+x;
        }
        else if(x<0){
            clearInterval(tm);}
        else{sec.innerText=x}
        y--;
    }, 1000)



}