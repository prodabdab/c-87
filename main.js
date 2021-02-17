var canvas = new fabric.Canvas('idofcan');

widht = 30;
height = 30;

player_x = 10;
player_y = 10;

var objectct ="";
 function player_move() {
     fabric.Image.fromURL("player.png", function (Img) {
        objectct=Img;
        objectct.scaleToWidth(140);
        objectct.scaleToHeight(150);
        objectct.set({top:player_y,left:player_x});
        canvas.add(objectct);
     });
 } 

 var Block_objectct ="";
 function block_move(getimg) {
     fabric.Image.fromURL(getimg, function (Img) {
        Block_objectct=Img;
        Block_objectct.scaleToWidth(widht);
        Block_objectct.scaleToHeight(height);
        Block_objectct.set({top:player_y,left:player_x});
        canvas.add(Block_objectct);
     });
 }
 
 window.addEventListener("Keydown",My_Keydown);
 function My_Keydown(e) {
keypressed=e.keyCode;
if (e.shiftKey==true&&keypressed=='77'){
    widht=widht+10;
    height=height+10;
    document.getElementById("num_1").innerHTML=widht;
    document.getElementById("num_2").innerHTML=height;
}
if (e.shiftKey==true&&keypressed=='78'){
    widht=widht+10;
    height=height+10;
    document.getElementById("num_1").innerHTML=widht;
    document.getElementById("num_2").innerHTML=height;
}
if (keypressed=='38') {
    up();
    console.log("up");
}
if (keypressed=='40') {
    down();
    console.log("down");
}
if (keypressed=='37') {
    left();
    console.log("left");
}
if (keypressed=='39') {
    right();
    console.log("right");
}
if (keypressed=='67'){
    block_move(' cloud.jpg ');
    console.log("pressed c");
 }
 if (keypressed=='68'){
    block_move(' dark_green.jpg');
    console.log("pressed d");
 }
 if (keypressed=='71'){
    block_move(' ground.jpg ');
    console.log("pressed g");
 }if (keypressed=='76'){
    block_move(' light_green.jpg ');
    console.log("pressed l");
 }if (keypressed=='82'){
    block_move(' roof.jpg ');
    console.log("pressed r");
 }if (keypressed=='84'){
    block_move(' trunk.jpg ');
    console.log("pressed t");
 }if (keypressed=='85'){
    block_move(' unique.jpg ');
    console.log("pressed u");
 }if (keypressed=='87'){
    block_move(' wall.jpg ');
    console.log("pressed w");
 }
 if (keypressed=='89'){
    block_move(' yellow_wall.jpg ');
    console.log("pressed y");
 }
}

