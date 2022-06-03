var SinhVien = {
    name:0,
    age:0,
    address:0,
    gender:0
}
function onChangeName (obj) {
    SinhVien.name = obj.value;
}
function onChangeAge (obj) {
    SinhVien.age = parseInt(obj.value);
}
function onChangeAddress (obj) {
    SinhVien.address = obj.value;
}
function onChangeGender (obj) {
    SinhVien.gender = obj.value;
}
function submit(){
    console.log(SinhVien)
}