
let dolphinImage;
let vaporButton;
let ecoSong;

function preload() {
	soundFormats('mp3','ogg');
	ecoSong = loadSound('assets/ecozones.mp3');
}
vaporButton.mousePressed(toggleDolphin);

function setup() {
 noCanvas();
 vaporButton = select('#vaporButton');
 dolphinImage = select('#dolphin');

function toggleDolphin(){
	ecoSong.setVolume(0.3);
	ecoSong.play();

}



}








function draw() {



}
