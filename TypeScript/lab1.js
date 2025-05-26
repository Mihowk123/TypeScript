function triangle(val1 = 3, type1 = "leg", val2 = 4, type2 = "leg") {
  const validTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
  const anglesTypes = ["adjacent angle", "opposite angle", "angle"];

  const isValidType = (type) => validTypes.includes(type);
  const isValidValue = (val) => val > 0;
  const isAngle = (type) => anglesTypes.includes(type);
  const isValidAngle = (angle) => angle < 90;
  const isLeg = (type) => type === "leg";
  const isHypotenuse = (type) => type === "hypotenuse";
  const isValidTriangle = (a, b, c) => a + b > c && a + c > b && c + b > a;
  const toDegrees = (angle) => angle * (180 / Math.PI);
  const toRadians = (angle) => angle * (Math.PI / 180);

  let a, b, c, alpha, beta;

  if (!isValidType(type1) || !isValidType(type2)) return "failed";
  if (!isValidValue(val1) || !isValidValue(val2)) return "Invalid input: Values must be positive numbers.";
  if (type1 === "hypotenuse" && type2 === "hypotenuse") return "failed";

  if (
    (isHypotenuse(type1) && isLeg(type2) && val1 <= val2) ||
    (isHypotenuse(type2) && isLeg(type1) && val2 <= val1)
  )
    return "Hypotenuse must be greater than the leg";

  if (isAngle(type1) && isAngle(type2)) return "failed";
  if ((isAngle(type1) && !isValidAngle(val1)) || (isAngle(type2) && !isValidAngle(val2)))
    return "The angles of the triangle must be acute";

  switch (type1) {
    case "leg":
      a = val1;
      switch (type2) {
        case "hypotenuse":
          c = val2;
          b = Math.sqrt(c * c - a * a);
          alpha = toDegrees(Math.asin(a / c));
          beta = 90 - alpha;
          break;
        case "leg":
          b = val2;
          c = Math.sqrt(a * a + b * b);
          alpha = toDegrees(Math.asin(a / c));
          beta = 90 - alpha;
          break;
        case "adjacent angle":
          beta = val2;
          alpha = 90 - beta;
          c = a / Math.cos(toRadians(beta));
          b = Math.sqrt(c * c - a * a);
          break;
        case "opposite angle":
          alpha = val2;
          beta = 90 - alpha;
          c = a / Math.sin(toRadians(alpha));
          b = Math.sqrt(c * c - a * a);
          break;
        default:
          return "Not enough information to perform calculations";
      }
      break;
    case "hypotenuse":
      c = val1;
      switch (type2) {
        case "leg":
          a = val2;
          b = Math.sqrt(c * c - a * a);
          alpha = toDegrees(Math.asin(a / c));
          beta = 90 - alpha;
          break;
        case "angle":
          alpha = val2;
          beta = 90 - alpha;
          a = c * Math.sin(toRadians(alpha));
          b = Math.sqrt(c * c - a * a);
          break;
        default:
          return "Not enough information to perform calculations";
      }
      break;
    case "adjacent angle":
      alpha = val1;
      beta = 90 - alpha;
      switch (type2) {
        case "leg":
          a = val2;
          c = a / Math.cos(toRadians(alpha));
          b = Math.sqrt(c * c - a * a);
          break;
        case "hypotenuse":
          c = val2;
          a = c * Math.sin(toRadians(alpha));
          b = Math.sqrt(c * c - a * a);
          break;
        default:
          return "Not enough information to perform calculations";
      }
      break;
    case "opposite angle":
      alpha = val1;
      beta = 90 - alpha;
      switch (type2) {
        case "leg":
          a = val2;
          c = a / Math.sin(toRadians(alpha));
          b = Math.sqrt(c * c - a * a);
          break;
        case "hypotenuse":
          c = val2;
          a = c * Math.sin(toRadians(alpha));
          b = Math.sqrt(c * c - a * a);
          break;
        default:
          return "Not enough information to perform calculations";
      }
      break;
    case "angle":
      alpha = val1;
      beta = 90 - alpha;
      c = val2;
      a = c * Math.sin(toRadians(alpha));
      b = Math.sqrt(c * c - a * a);
      break;
  }

  if (!isValidTriangle(a, b, c)) return "Invalid triangle: the sum of any two sides must be greater than the third side.";
  if (!isValidAngle(alpha) || !isValidAngle(beta)) return "The angles of the triangle must be acute";

  console.log(`a = ${a.toFixed(2)}, b = ${b.toFixed(2)}, c = ${c.toFixed(2)}`);
  console.log(`alpha = ${alpha.toFixed(2)}°, beta = ${beta.toFixed(2)}°`);

  return "success";
}
