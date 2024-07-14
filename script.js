let display = document.getElementById('display');

/*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/

function appendToDisplay(input){
    display.value += input;
};

function clearDisplay(){
    display.value = "";
};

let userHiddenTexts = [];
if (!localStorage.getItem('userHiddenTexts')) {
    localStorage.setItem('userHiddenTexts', JSON.stringify(userHiddenTexts));
} else {
    try {
        userHiddenTexts = JSON.parse(localStorage.getItem('userHiddenTexts'));
        if (!Array.isArray(userHiddenTexts)) {
            userHiddenTexts = [];
        }
    } catch (e) {
        userHiddenTexts = [];
    }
}
/*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/

let pin1;
let pin2;

function calculate(){
    display = document.getElementById('display');
    if(display.value==1900){
        let proceed = confirm("dude, u wanna hide somethin?");
        if(proceed){
            alert("Lets start with making the new pin.");
            alert("You can access your hidden files by entering your secret pin on the calculator");

            let isValidInput = false;

            while(!isValidInput){
                pin1 = window.prompt("Enter the new pin:");
                if (pin1 === null || pin1=="") {
                    alert("Process has been canceled.");
                    isValidInput = false;
                    break;
                } else if (/^\d+$/.test(pin1)) {
                    isValidInput = true;
                } else {
                    alert("Please enter numbers only.");
                }
            }
            
            if(isValidInput){
                
                pin2 = window.prompt("Confirm the new pin:");
            
                if(pin1==pin2){

                    let hidingText = window.prompt("Enter the text you want to hide:");
                    userHiddenTexts.push({ pin: pin2, text: hidingText });
                    localStorage.setItem('userHiddenTexts', JSON.stringify(userHiddenTexts));

                    alert("Successfully created the new pin and hidden text!");
                    display.value = "";
                    return;

                }else if(!(pin1==pin2)){
                    alert("confirmed pin doesnt match with the new pin! you've to start the process again");
                    display.value = "";
                    return;
                }
            }

        }else{
            display.value = "";
            return;
        }
    }else if(display.value===""){
        display.value="";
        return;
    }
    
    else if(/^\d+$/.test(display.value)){
        let enteredPin = display.value;
        if (enteredPin==1899) {
            let proceeds = confirm("Are you sure you want to clear all saved pins and texts?");
            if (proceeds) {
                localStorage.removeItem('userHiddenTexts');
                userHiddenTexts = [];
                alert("All saved pins and texts have been cleared.");
                display.value = "";
                return;
            }else {
                display.value = "";
                return;
            }
        }else if(enteredPin==1898){
            console.log(userHiddenTexts);
        };
        let found = userHiddenTexts.find(item => item.pin === enteredPin);
        if (found) {
            alert("Hidden text: " + found.text);
            display.value = "";
            return;
        }
    }else{
        display.value = display.value.replace(/x/g, '*');
        display.value = display.value.replace(/÷/g, '/');
        display.value = eval(display.value);
    }
    };

function back(){
    display.value = display.value.slice(0, -1);
};
function modulus(){
    if((display.value.slice(0, -1))>0){
        display.value = '-'+display.value;

    }else if((display.value.slice(0, -1))<0){
        display.value = display.value.slice(1);
    }
};
function toPercent(){
    display.value = display.value/100;
}

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  }, false);
  /*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/


    /*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/