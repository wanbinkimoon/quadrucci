import p5 from 'p5';
import 'p5/lib/addons/p5.sound';


const sketch = p => {
  let canvas;
  const radiusDefault = 800
  let radius = radiusDefault
  let els = 30
  let distance = 100

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.translate(p.width / 2, p.height / 2);
    p.background(255);
    
    p.strokeWeight(8);
    p.noFill()
    let i
    for(i = 0; i <= els; i++){
      // p.ellipse((distance * -1), (distance * -1), radius, radius)
      // p.ellipse(distance, distance, radius, radius)
      // p.ellipse(distance, (distance * -1), radius, radius)
      // p.ellipse((distance * -1), distance, radius, radius)

      p.ellipse(0, distance, radius, radius)
      p.ellipse(0, (distance * -1), radius, radius)
      radius = radius - (radiusDefault / els) 
    }
  };

  p.draw = () => {
    
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.keyPressed = () => {};
};

new p5(sketch);
