import p5 from 'p5';
import 'p5/lib/addons/p5.sound';


const sketch = p => {
  let canvas;
  const radiusDefault = 800
  let els = 50
  let distance = 30
  
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);
    
    p.strokeWeight(4);
    p.noFill()
  };
  
  p.draw = () => {
    let radius = radiusDefault
    p.background(255);
    
    if(distance > 100) {
      distance += 1
    } else {
      distance -= 1
    }

    p.translate(p.width / 2, p.height / 2);

    let i
    for(i = 0; i <= els; i++){
      p.ellipse((distance * -1), (distance * -1), radius, radius)
      p.ellipse(distance, distance, radius, radius)
      p.ellipse(distance, (distance * -1), radius, radius)
      p.ellipse((distance * -1), distance, radius, radius)
      p.ellipse(0, distance, radius, radius)
      p.ellipse(0, (distance * -1), radius, radius)
      p.ellipse(distance, 0, radius, radius)
      p.ellipse((distance * -1), 0, radius, radius)
      radius = radius - (radiusDefault / els) 
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.keyPressed = () => {};
};

new p5(sketch);
