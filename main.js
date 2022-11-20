function preload() {
}
    
    function setup() {
      canvas = createCanvas(640,480);
      canvas.position(110, 250);
      video = createCapture(VIDEO);
      video.hide();

    }
    
    function draw() {
      image(video,0,0,640,480);

      circle(10, 50, 100);
      circle(70, 50, 100);
      circle(100, 70 , 100);
      circle(100, 10, 100);

    }

    function take_snapshot(){
        save('bday_images.png');
    }
