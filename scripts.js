let mathZone = document.getElementById('mathZone');


document.addEventListener("keydown", keyPush);



function calculateStr(userInput) {
    return new Function('return ' + userInput)();
}

function pushBtn(btn) {
    let pushed = btn.innerHTML;
    console.log(pushed);

    if (pushed == '='){
        mathZone.innerHTML = calculateStr(mathZone.innerHTML)
    }

    else if (pushed =='C') {

        //clears back to 0
        mathZone.innerHTML = 0;

    }
    else if (pushed =="bk"){
        mathZone.innerHTML = mathZone.innerHTML.slice(0,-1)
        if (mathZone.innerHTML.length == 0){
            mathZone.innerHTML=0;
        }
    }

    else {
        if (mathZone.innerHTML == "0"){
            mathZone.innerHTML = pushed;
        }
        else { 
            mathZone.innerHTML += pushed;
        }
    }
}

function keyPush(event){
    switch (event.key){
        case "1":
            if (mathZone.innerHTML.length < 27){
                if (mathZone.innerHTML == "0"){
                mathZone.innerHTML = 1;
                break;
                }
                else { 
                mathZone.innerHTML += 1;
                break;
                }
            } else {
                break;
            }

        case "2":
            if (mathZone.innerHTML.length < 27){
                if (mathZone.innerHTML == "0"){
                    mathZone.innerHTML = 2;
                    break;
                }
                else { 
                    mathZone.innerHTML += 2;
                    break;
                }
            } else{break;};
        case "3":
            if (mathZone.innerHTML.length < 27){
                    if (mathZone.innerHTML == "0"){
                        mathZone.innerHTML = 3;
                        break;
                    }
                    else { 
                        mathZone.innerHTML += 3;
                        break;
                    }
                }else{break;};
        case "4":
            if (mathZone.innerHTML.length < 27){
                if (mathZone.innerHTML == "0"){
                    mathZone.innerHTML = 4;
                    break;
                }
                else { 
                     mathZone.innerHTML += 4;
                    break;
                }
            }else{break;};
                
        case "5":
            if (mathZone.innerHTML.length < 27){
                if (mathZone.innerHTML == "0"){
                    mathZone.innerHTML = 5;
                    break;
                }
                else { 
                    mathZone.innerHTML += 5;
                    break;
                }
                        }else{break;};
        case "6":
            if (mathZone.innerHTML.length < 27){
                if (mathZone.innerHTML == "0"){
                    mathZone.innerHTML = 6;
                    break;
                }
                else { 
                    mathZone.innerHTML += 6;
                    break;
                }
            }else{break;};
                

        case "7":
            if (mathZone.innerHTML.length < 27){
                if (mathZone.innerHTML == "0"){
                    mathZone.innerHTML = 7;
                    break;
                }
                else { 
                    mathZone.innerHTML += 7;
                    break;
                }
            }else{break;};


        case "8":
            if (mathZone.innerHTML.length < 27){
                if (mathZone.innerHTML == "0"){
                    mathZone.innerHTML = 8;
                    break;
                }
                else { 
                    mathZone.innerHTML += 8;
                    break;
                }
            }else{break;};

        case "9":
            if (mathZone.innerHTML.length < 27){
                if (mathZone.innerHTML == "0"){
                    mathZone.innerHTML = 9;
                    break;
                }
                else { 
                    mathZone.innerHTML += 9;
                    break;
                }
            }else{};

        case "0":
            if (mathZone.innerHTML.length < 27){
                if (mathZone.innerHTML == "0"){
                    mathZone.innerHTML = 0;
                    break;
                }
                else { 
                    mathZone.innerHTML += 0;
                    break;
                }
            }else{break;};

        case ".":
            if (mathZone.innerHTML.length < 27){
                if (mathZone.innerHTML == "0"){
                    mathZone.innerHTML = ".";
                    break;
                }
                else { 
                    mathZone.innerHTML += ".";
                    break;
                }
            }else{break;};

        case "+":
            if (mathZone.innerHTML.length < 27){
                if (mathZone.innerHTML == "0"){
                    mathZone.innerHTML = "+";
                    break;
                }
                else { 
                    mathZone.innerHTML += "+";
                    break;
                }
            }else{break;};
        case "-":
            if (mathZone.innerHTML.length < 27){
                if (mathZone.innerHTML == "0"){
                    mathZone.innerHTML = "-";
                    break;
                }
                else { 
                    mathZone.innerHTML += "-";
                    break;
                }
            }else{break;};

        case "/":
            if (mathZone.innerHTML.length < 27){
                if (mathZone.innerHTML == "0"){
                    mathZone.innerHTML = "/";
                    break;
                }
                else { 
                    mathZone.innerHTML += "/";
                    break;
                }
            }else{break;};

        case "*":
            if (mathZone.innerHTML.length < 27){
                if (mathZone.innerHTML == "0"){
                    mathZone.innerHTML = "*";
                    break;
                }
                else { 
                    mathZone.innerHTML += "*";
                    break;
                }
            }else{break;};

        case "%":
            if (mathZone.innerHTML.length < 27){
                if (mathZone.innerHTML == "0"){
                    mathZone.innerHTML = "%";
                    break;
                }
                else { 
                    mathZone.innerHTML += "%";
                    break;
                }
            }else{break;};

        case "Enter":
            {
                mathZone.innerHTML = calculateStr(mathZone.innerHTML)
                break;
            }

        case "Backspace":
            {
                mathZone.innerHTML = mathZone.innerHTML.slice(0,-1)
                if (mathZone.innerHTML.length == 0){
                    mathZone.innerHTML=0;
                }
                break;
            }
    }
}