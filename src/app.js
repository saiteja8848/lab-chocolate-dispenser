var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, color, count) {
    if (count <= 0) {
        return "Number cannot be zero/negative";
    }
    else
        for (let i = 0; i < count; i++) {
            chocolates.unshift(color);
        }
}



//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
    var result = [];
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    else if (number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    else
        for (let i = 0; i < number; i++) {
            result.push(chocolates.shift());
        }
    return result;
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates, number) {
    var result = [];
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    else if (number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    else
        for (let i = 0; i < number; i++) {
            result.push(chocolates.pop());
        }
    return result;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates, number, color) {
    var result = [], count = 0;
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    else if (number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    else
        for (let i = 0; i < chocolates.length; i++) {
            if (chocolates[i] == color) {
                result.push(color);
            }
        }
    return result;

}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {
    var result = [], count = 0;
    var data = chocolates.slice();
    for (let i = 0; i < data.length; i++) {

        count = 1;
        for (let j = i + 1; j < data.length; j++) {
            if (data[i] == data[j] && data[j] != -1) {
                count++;

                data[j] = -1;
            }
        }
        if (data[i] != -1)
            result.push(count);
    }
    return result;

}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
    var result = [], count = 0;
    var data = chocolates.slice();
    for (let i = 0; i < data.length; i++) {
        count = 1;
        for (let j = i + 1; j < data.length; j++) {
            if (data[i] == data[j] && data[j] != -1) {
                count++;

                data[j] = -1;
            }
        }
        if (data[i] != -1) {
            var obj = { name: data[i], freq: count };
            result.push(obj);
        }
    }
    result.sort(function (a, b) {
        if (b.freq == a.freq) {
            return a.name.localeCompare(b.name);
        }
        else {
            return b.freq - a.freq;
        }
    });
    var finalResult = [];
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].freq; j++) {
            finalResult.push(result[i].name);
        }
    }
    console.log(finalResult);

    return finalResult;

}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor) {
    var count = 0;
    if (color == finalColor)
        return "Can't replace the same chocolates";
    else if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    else
        for (let i = 0; i < chocolates.length; i++) {
            if (color == chocolates[i] && count < number) {
                chocolates[i] = finalColor;
            }
        }
    return chocolates;
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
    var result = [];
    if (color == finalColor)
        return "Can't replace the same chocolates";
    else
        for (let i = 0; i < chocolates.length; i++) {
            if (color == chocolates[i]) {
                chocolates[i] = finalColor;
            }
        }
    result.push(chocolates.length);
    result.push(chocolates);
    return result;
}

//Challenge 1: Remove one chocolate of ____ color from the top
function removeChocolateOfColor(chocolates, color) {
    for (let i = 0; i < chocolates.length; i++) {
        if (color == chocolates[i]) {
            chocolates.shift();
        }
    }
}


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates(number) {

}