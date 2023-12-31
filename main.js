'esversion: 7';
'use strict';
//Make a shortcut for document.getElementById
function get(id) {
    try {
        return document.getElementById(id);
    } catch (error) {
        console.error("Error in get function:", error);
        return null;
    }
}
//Make random number functions.
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
}
function randomNumberFloat(min, max) {
    return (Math.random() * (max - min + 1)) + parseFloat(min);
}
/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/
var Base64 = {
    // private property
    _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    // public method for encoding
    encode : function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = Base64._utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
            this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
            this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
        }
        return output;
    },
    // public method for decoding
    decode : function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = Base64._utf8_decode(output);
        return output;
    },
    // private method for UTF-8 encoding
    _utf8_encode : function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    },
    // private method for UTF-8 decoding
    _utf8_decode : function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while ( i < utftext.length ) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}
  //Declare function that does math stuff
  function doMathStuff() {
    get('sineResult').innerText = Math.sin(get('sineInput').value);
    get('cosineResult').innerText = Math.cos(get('cosineInput').value);
    get('logarithmResult').innerText = Math.log(get('logarithmInput').value);
    get('tangentResult').innerText = Math.cos(get('tangentInput').value);
    get('sqrtResult').innerText = Math.log(get('sqrtInput').value);
    get('C1').innerText = Math.sqrt(((get('A1').value * get('B1').value) + get('B1').value * get('B1').value));
    if(get('C2').value > get('B2').value) {
    get('A2').innerText = Math.sqrt(((get('C2').value * get('C2').value) - get('B2').value * get('B2').value));
    }
    if(get('C2').value <= get('B2').value) {
        get('A2').innerText = 'C must be more than B';
    }
    if(get('C3').value > get('A3').value) {
    get('B4').innerText = Math.sqrt(((get('C3').value * get('C3').value) - get('A3').value * get('A3').value));
    }
    if(get('C2').value <= get('B2').value) {
        get('A2').innerText = 'C must be more than A';
    }
    if(get('A1').value < 0.00000000000000001 || get('B1').value < 0.00000000000000001) {
        get('C1').value = 'A and B should be positive.';
    }
    if(get('C2').value < 0.00000000000000001 || get('B2').value < 0.00000000000000001) {
        get('A2').value = 'C and B should be positive.';
    }
    if(get('C3').value < 0.00000000000000001 || get('A3').value < 0.00000000000000001) {
        get('B4').value = 'C and A should be positive.';
    }
}
//Declare the function that updates the page and checks user input for errors
function myMethod() {
    amount = Math.round(parseInt(get('amount').value) || 0);
    runtimes = Math.round(parseInt(get('runtimes').value) || 0);
    amount2 = Math.round(parseInt(get('amount2').value) || 0);
    if (amount * runtimes > 50139473) {
        get('start').disabled = true; 
        get('start').innerText = 'Cannot run, total amount to count to is too large.';
        get('start').style.backgroundColor = 'gray';
    } else {
        get('start').disabled = false;
        get('start').innerText = 'Run';
        get('start').style.backgroundColor = 'black';
}
}
//Declare function that finds average of all numbers in an array passed in.
function averageOf(inputarray) {
    try {
        console.log('Calculating the average of ' + inputarray.length + ' numbers from the array.');
        for (var k = 0; k < inputarray.length; k++) {
            total = total + inputarray[k];
            avg = total / inputarray.length;
        }
        return 'The average time to count to ' + amount + ' was ' + avg + " milliseconds. That's " + avg / 1000 + ' seconds. Based on this, I estimate counting to ' + amount2 + ' would take ' + avg * (amount2 / amount) + " ms. That's " + (avg * (amount2 / amount)) / 1000 + " seconds. That's " + (avg * (amount2 / amount)) / 1000 / 60 + ' minutes, and ' + (avg * (amount2 / amount)) / 1000 / 60 / 60 + ' hours.';
    } catch (err) {
        console.log('An error occurred in the average calculation. It reads: ' + err);
    }
}
//Initialize all variables
    var array = [];
    var total = 0;
    var avg = 0;
    var endTime = 0;
    var elapsedTime = 0;
    var startTime = 0;
    var amount = 0;
    var runtimes = 0;
    var amount2 = 0;
        //Check if html is loaded before running the function that updates the page or letting the run button function
        document.addEventListener("DOMContentLoaded", function() {
            setInterval(function(){
            get('Title').innerText = get('pageTitle').value;
        });
            setInterval(myMethod, 1);
            setInterval(doMathStuff, 1);
            get('generate').onclick = function() {
                if(get('allowDec').checked == false) {
                    get('random').innerText = randomNumber(get('minInput').value, get('maxInput').value);
                } else if(get('allowDec').checked == true) {
                    get('random').innerText = randomNumberFloat(get('minInput').value, get('maxInput').value);
                } else {
                    console.log("This REALLY shouldn't happen.");
                }
            };
            get('start').onclick = function() {
            array = [];
            total = 0;
            avg = 0;
            endTime = 0;
            elapsedTime = 0;
            startTime = 0;
            //Idk how to explain this
                for (var i = 0; i < runtimes; i++) {
                    for (var j = 0; j < amount; j++) {
                        startTime = Date.now();
                        endTime = Date.now();
                        elapsedTime = endTime - startTime;
                        array.push(elapsedTime);
                    }
                }
                //Actually run the average of function
                get('results').innerText = averageOf(array);
           };
        });