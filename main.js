var canvas = new fabric.Canvas("MyCanvas")
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
player_object = "";
block_image_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (img) {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        })
        canvas.add(player_object)
    })
}

function new_image(get_image) {
    console.log("cloud.jpg","dark_green.png","ground.png")
    fabric.Image.fromURL(get_image, function (img) {
        block_image_object = img
        block_image_object.scaleToWidth(block_image_width)
        block_image_object.scaleToHeight(block_image_height)
        block_image_object.set({
            top: player_y,
            left: player_x
        })
        canvas.add(block_image_object)
    })
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log("keypressed =" + keypressed);
    if (e.shiftKey == true && keypressed == '80') {
        console.log("p and the shift key has been pressed");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && keypressed == '77') {
        console.log("p and the shift key has been pressed");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keypressed == '38') {
        key_up();
        console.log("up has been pressed")
    }

    if (keypressed == '40') {
        key_down();
        console.log("down has been pressed")
    }

    if (keypressed == '37') {
        key_left();
        console.log("left has been pressed")
    }

    if (keypressed == '39') {
        key_right();
        console.log("right has been pressed")
    }

    if (keypressed == '67') {
        new_image('cloud.jpg');
        console.log("C has been pressed")
    }

    if (keypressed == '68') {
        new_image('dark_green.png');
        console.log("D has been pressed")
    }
    if (keypressed == '71') {
        new_image('ground.png');
        console.log("G has been pressed")
    }

    if (keypressed == '76') {
        new_image('light_green.png');
        console.log("L has been pressed")
    }
    if (keypressed == '82') {
        new_image('roof.jpg');
        console.log("R has been pressed")
    }
    if (keypressed == '84') {
        new_image('trunk.jpg');
        console.log("T has been pressed")
    }
    if (keypressed == '85') {
        new_image('unique.png');
        console.log("U has been pressed")
    }
    if (keypressed == '87') {
        new_image('wall.jpg');
        console.log("W has been pressed")
    }
    if (keypressed == '89') {
        new_image('yellow_wall.png');
        console.log("Y has been pressed")
    }
}
player_update();
function key_down(){
if(player_y>=500){
    player_y = player_y+block_image_height;
    console.log("block image height = "+block_image_height);
    console.log("When down arrow is pressed,X="+player_x+" Y="+player_y);
    canvas.remove(player_object);
    player_update();
}
}
function key_left(){
    if(player_x<=0){
        player_y = player_y+block_image_width;
        console.log("block image width = "+block_image_width);
        console.log("When left arrow is pressed,X="+player_x+" Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function key_up(){
    if(player_y>=0){
        player_y = player_y-block_image_height;
        console.log("block image height = "-block_image_height);
        console.log("When up arrow is pressed,X="+player_x+" Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function key_right(){
    if(player_x<=900){
        player_y = player_y+block_image_width;
        console.log("block image width = "+block_image_width);
        console.log("When right arrow is pressed,X="+player_x+" Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}