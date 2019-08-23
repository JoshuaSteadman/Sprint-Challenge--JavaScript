// 1. Copy and paste your prototype in here and refactor into class syntax.
/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMaker {
    constructor(attr){
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

class CubeMaker extends CuboidMaker {
    constructor(attr){
        super(attr);
        // No new attributes yet just inherit cuboid length,width,height
    }
    cubeVolume(){
        return this.length * this.width * this.height;
    }
    //hexahedron surface area formula = 6a^2
    cubeSurfaceArea(){
        return (6 * (this.length * this.length));
    }
}
  const cuboid = new CuboidMaker({length: 4, width: 5, height: 5});
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.
// Test your work by logging out your volume and surface area.

const hexahedron = new CubeMaker({length: 5, width: 5, height: 5});

console.log(hexahedron.cubeVolume()); // 125
console.log(hexahedron.cubeSurfaceArea()); // 150

const hexahedron_two = new CubeMaker({length: 6, width: 6, height: 6});

console.log(hexahedron_two.cubeVolume()); // 216
console.log(hexahedron_two.cubeSurfaceArea()); // 216
