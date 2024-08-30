//ex1
function textChange(){
    document.getElementById('tc').innerHTML="wellcome to my home";
}
// ex2
function showDate(){
    document.getElementById('sd').innerHTML=Date();
}
// ex3
function bulbon(){
    document.getElementById('bulb').src='images/pic_bulbon.gif';
}
function bulboff(){
    document.getElementById('bulb').src='images/pic_bulboff.gif';
}
// ex4
function changeCss(){
    document.getElementById('css').style.color='red';
}
// ex5
function textShow(){
    document.getElementById('txh').style.display="block";
}
function textHide(){
    document.getElementById('txh').style.display='none';
}
//ex6
function textShow1(){
    document.getElementById('show').innerHTML='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis nisi praesentium laborum sunt accusantium vitae sapiente nemo animi, voluptatibus similique obcaecati excepturi dolorem dolor quo a. Laborum pariatur similique dolore!';
}
// ex7
function demoResult1(){
    document.getElementById('cr1').innerHTML=2070+9-37;
}
// ex8
function demoResult2(){
    document.getElementById('cr2').innerHTML=(2070+9-370)*790/3;
}
// ex9
function demoResult4(){
    window.alert(2070+9)
}
// ex10
function demoResult3(){
    alert(2070+9*2)
}
// 11
function demoresult5(){
    console.log(685-5+863)
}
// 12
function demoResult6(){ 
    window.print()
}
// 13
function demoResult7(){
    document.getElementById('js_num').innerHTML='50.4';
}
// 14
function demoResult8(){
    let x, y;
    x=270
    y=90
    document.getElementById('xy1').innerHTML=x + y;
}
// 15
function demoResult9(){
    let x, y, z;
    x=270
    y=90
    z=9
    document.getElementById('xyz1').innerHTML=(x + y)*z;
}
// 16
function demoResult10(){
    let lastname, lastName;
    lastName = "Doe";
    lastname = "Peterson";
    document.getElementById("last-name").innerHTML = lastName;
}
// 17
function demoResult11(){
    let x, y;
    x=2070
    y=x+9
    document.getElementById("xy2").innerHTML = y;
}
// 18
function demoResult12(){
    let x, y;
    x=2070
    y=9
    z=x-y
    document.getElementById("xyz2").innerHTML = "The value of z is: " + z;
}
// 19
function demoResult13(){
    const pi = 2.65;
    let name="montasir alam";
    let answer="your name  is John Doe na?";
    document.getElementById("quotes").innerHTML = pi + "<br>" + name + "<br>" + answer;;
}
// 20
function Flow() {
    document.getElementById("textr8").style.direction = "rtl";
}
// 21
function bshow(){
	document.getElementById('boder').style.border='5px dashed pink';
}

function bhide(){
	document.getElementById('boder').style.border= 'none';
}
// 22
function promptBox() {
    let text;
    let person = prompt("Please enter your name:", "Montasir Alam");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        text = "Hello " + person + "! How are you today?";
    }
    document.getElementById("prmt_box").innerHTML = text;
}
