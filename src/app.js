import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

const sketch = p => {
  let canvas;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB)
  };

  p.draw = () => {
    p.background(0,0,100);
    
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.mousePressed = () => {
    distance -= 1;
  };
};

new p5(sketch);
