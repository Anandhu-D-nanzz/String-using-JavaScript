
function lengthStr() {
    input_Str = document.getElementById("input").value;
    Str_length = input_Str.length;
    document.getElementById("output").value = Str_length;
}

function replaceStr() {
    input_Str = document.getElementById("input").value;
    replaced = prompt("Enter the String to replace");
    new_Str = prompt("Enter your new word");
    replaced_Str = input_Str.replace(replaced, new_Str);
    document.getElementById("output").value = replaced_Str;
}

function upperCase() {
    input_Str = document.getElementById("input").value;
    to_Upper = input_Str.toUpperCase();
    document.getElementById("output").value = to_Upper
}

function lowerCase() {
    input_Str = document.getElementById("input").value;
    document.getElementById("output").value = input_Str.toLowerCase();
//We can also use this below method too:
    // to_Lower = input_Str.toLowerCase();
    // document.getElementById("output").value = to_Lower
}

function repeatStr() {
    input_Str = document.getElementById("input").value;
    n_o_t = prompt("Enter Num.Of time's to repeate");
    document.getElementById("output").value = input_Str.repeat(n_o_t);
}

function mathStr() {
    input_Str = document.getElementById("input").value;
    matched = prompt("Enter a value to match");
    document.getElementById("output").value = input_Str.match(matched);
}

function searchStr() {
    input_Str = document.getElementById("input").value;
    searched = prompt("Enter a value to search");
    document.getElementById("output").value = input_Str.search(searched);
}

function concatStr() {
    input_Str = document.getElementById("input").value;
    add = prompt("Enter a value to add");
    document.getElementById("output").value = input_Str.concat(add);
}

function splitStr() {
    input_Str = document.getElementById("input").value;
    document.getElementById("output").value = input_Str.split("");
}

function trimStr() {
    input_Str = document.getElementById("input").value;
    document.getElementById("output").value = input_Str.trim();
}

function sliceStr() {
    input_Str = document.getElementById("input").value;
    start = prompt("Enter your starting index position");
    end = prompt("Enter your ending index position");
    document.getElementById("output").value = input_Str.slice(start,end);
}


function Clear() {
    document.getElementById("input").value = " ";
    document.getElementById("output").value = " ";
}




