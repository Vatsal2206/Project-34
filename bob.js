class Bob {
    constructor(x, y) {
      var Boptions = {
        'isStatic': false,
        'restitution': 1,
        'friction': 0,
        'frictionAir': 0,
        'slop': 1,
        'inertia': Infinity
      }
      this.x = x;
      this.y = y;
      this.radius = 30;
      this.body = Bodies.circle(x, y,this.radius, Boptions);
      
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x,this.body.position.y)
      ellipseMode(RADIUS);
      strokeWeight(2)
      stroke(91, 252, 88)
      fill(0);
      ellipse(0,0, this.radius,this.radius);
      pop();
    }
  };