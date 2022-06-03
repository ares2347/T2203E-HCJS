function clickMe() {
    alert("Someone just clicked!");
}

function hoverMe(){
    console.log("hovering");
}

function outMe(){
    console.log("out");
}

function keyPress () {
    console.log("key press");
}
function keyDown () {
    console.log("key down");
}
function keyUp(){
    console.log("key up")
}
function onChange(i){
    alert("change " + i.value)
}

var SinhVien = {
    name: "Tran Hoang Tu",
    age: 22,
    address: "HaiPhong",
    class: {
        name: "T2203E",
        room: 16
    },
    group: {
        name: 2,
        member: [SinhVien2,SinhVien3]
    }
}
var SinhVien2 ={
    name: "A",
    tel: 123456789
}
var SinhVien3={
    name: "B",
    tel: 987654321
}