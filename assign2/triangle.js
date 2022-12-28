
function findTriangleType(side1, side2, side3) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      return "Invalid side(s)";
    }
    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side3 + side1 <= side2) {
      return "Not a triangle";
    }
    if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
      return "Scalene triangle";
    }
    if (side1 === side2 || side2 === side3 || side1 === side3) {
      return "Isosceles triangle";
    }
    return "Equilateral triangle";
  }
  
  function findTriangleArea(base, height) {
    if (base <= 0 || height <= 0) {
      return "Invalid base or height";
    }
    return (base * height) / 2;
  }
  
   module.exports = {
    findTriangleType: findTriangleType,
    findTriangleArea: findTriangleArea
  };
  