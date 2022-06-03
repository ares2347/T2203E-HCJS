var x;
x=10;
var y;
y="hello world";

x="T2203E";
y=20;
y=y+10;
console.log(x);
console.log(y);

console.log(y==="30")
for (var i=0; i<20; i++){
    console.log("i= "+(i+1))
}

var arr=[];
arr[0] = 20;
arr[1] = "hello";
arr[2] = true;
arr[3]=[1, 2, 3, 4]
arr[3]= [...arr[3], ...arr[3]]
console.log(arr[3])
var arr2=[]
for (let i = 0;i<20; i++){
    arr2[i] = i*i+1;
}
console.log(arr2)
//them 1 phan tu vao arr2
arr2 [arr2.length] = 1001;
//c2 de them 1 phan tu vao mang
arr2.push(1002);

tinhTong(2, 7)
tinhTong("hello ", "world")

function tinhTong (a,b){
    console.log(a+b)
}

function gt (n){
    let gt=1;
    for (let i=1; i<=n; i++){
        gt*=i;
    }
    return gt;
}
console.log(gt(5));

var nhapMang = (n) => {
    let arr = [];
    for (let i=0; i<n; i++){
        arr.push(i);
    }
    return arr;
}
console.log(nhapMang)

let arr3 = nhapMang("22a")
console.log(arr3)


console.log(prompt("input id: "))

do{
    var n = parseInt(prompt("Nhap 1 so nguyen duong"));
    console.log(n)
}while(isNaN(n) || n<=0)
