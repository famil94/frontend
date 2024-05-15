
function swapCase(string) {
    var olcuDeyishen = "";
    for (var i = 0; i < string.length; i++) {
        var char = string.charAt(i);
        if (char === char.toUpperCase()) {
            olcuDeyishen += char.toLowerCase();
        } else {
            olcuDeyishen += char.toUpperCase();
        }
    }
    return olcuDeyishen;
}

console.log(swapCase("aBcD")); 
console.log(swapCase("jAvaScRIPt")); 
console.log(swapCase("ItAcAdemY")); 
