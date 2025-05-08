"use strict";
function triangle(value1, type1, value2, type2) {
    console.log("Usage: triangle(value1, type1, value2, type2)");
    console.log("Types: 'leg', 'hypotenuse', 'adjacent angle', 'opposite angle', 'angle'");
    const toRadians = (degrees) => (degrees * Math.PI) / 180;
    const toDegrees = (radians) => (radians * 180) / Math.PI;
    if (value1 <= 0 || value2 <= 0) {
        console.log("Values must be positive numbers.");
        return "failed";
    }
    if (!["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"].includes(type1) ||
        !["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"].includes(type2)) {
        console.log("Invalid type. Please use one of the defined types.");
        return "failed";
    }
    let a = 0, b = 0, c = 0;
    let alpha = 0, beta = 0;
    if (type1 === "leg" && type2 === "leg") {
        a = value1;
        b = value2;
        c = Math.sqrt(a ** 2 + b ** 2);
        alpha = toDegrees(Math.asin(a / c));
        beta = 90 - alpha;
    }
    else if ((type1 === "leg" && type2 === "hypotenuse") || (type1 === "hypotenuse" && type2 === "leg")) {
        const leg = type1 === "leg" ? value1 : value2;
        const hypotenuse = type1 === "hypotenuse" ? value1 : value2;
        if (leg >= hypotenuse) {
            console.log("Invalid triangle dimensions: the leg cannot be greater than or equal to the hypotenuse.");
            return "failed";
        }
        const otherLeg = Math.sqrt(hypotenuse ** 2 - leg ** 2);
        a = leg;
        b = otherLeg;
        c = hypotenuse;
        alpha = toDegrees(Math.asin(a / c));
        beta = 90 - alpha;
    }
    else if ((type1 === "leg" && type2 === "angle") || (type1 === "angle" && type2 === "leg")) {
        const leg = type1 === "leg" ? value1 : value2;
        const angle = type1 === "angle" ? value1 : value2;
        if (angle >= 90 || angle <= 0) {
            console.log("Angle must be between 0 and 90 degrees.");
            return "failed";
        }
        const hypotenuse = leg / Math.sin(toRadians(angle));
        const otherLeg = Math.sqrt(hypotenuse ** 2 - leg ** 2);
        a = leg;
        b = otherLeg;
        c = hypotenuse;
        alpha = angle;
        beta = 90 - alpha;
    }
    else if ((type1 === "hypotenuse" && type2 === "angle") || (type1 === "angle" && type2 === "hypotenuse")) {
        const hypotenuse = type1 === "hypotenuse" ? value1 : value2;
        const angle = type1 === "angle" ? value1 : value2;
        if (angle >= 90 || angle <= 0) {
            console.log("Angle must be between 0 and 90 degrees.");
            return "failed";
        }
        const legA = hypotenuse * Math.sin(toRadians(angle));
        const legB = Math.sqrt(hypotenuse ** 2 - legA ** 2);
        a = legA;
        b = legB;
        c = hypotenuse;
        alpha = angle;
        beta = 90 - alpha;
    }
    else {
        console.log("Invalid combination of inputs. Please check the instructions.");
        return "failed";
    }
    console.log(`a = ${a.toFixed(2)}, b = ${b.toFixed(2)}, c = ${c.toFixed(2)}`);
    console.log(`alpha = ${alpha.toFixed(2)}°, beta = ${beta.toFixed(2)}°`);
    return "success";
}
// Приклади використання
triangle(4, "leg", 8, "hypotenuse"); // Виправлена логіка, має тепер працювати правильно
triangle(30, "angle", 10, "hypotenuse");
triangle(6, "leg", 8, "leg");
