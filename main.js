var elInp = document.querySelector(".inp")
function fnBtn(){
    var on = document.querySelector(".on")
    switch (Math.floor(elInp.value / 10)) {
        case 1:
          on.textContent = "on-";
          break;
        case 2:
          on.textContent = "yigirma-";
          break;
        case 3:
          on.textContent = "ottiz-";
          break;
        case 4:
          on.textContent = "qiriq-";
          break;
        case 5:
          on.textContent = "ellik-";
          break;
        case 6:
          on.textContent = "oltmish-";
          break;
        case 7:
          on.textContent = "yetmish-";
          break;
        case 8:
          on.textContent = "sakson-";
          break;
        case 9:
          on.textContent = "toqson-";
          break;
      }
    
    var bir = document.querySelector(".bir")
    switch (elInp.value % 10) { 
        case 0:
            bir.textContent = ' '
        case 1: 
            bir.textContent = "bir"; 
            break; 
        case 2: 
            bir.textContent = "ikki"; 
            break; 
        case 3: 
            bir.textContent = "uch"; 
            break; 
        case 4: 
            bir.textContent = "to'rt"; 
            break; 
        case 5: 
            bir.textContent = "besh"; 
            break; 
        case 6: 
            bir.textContent = "olti"; 
            break; 
        case 7: 
            bir.textContent = "yetti";  
            break; 
        case 8: 
            bir.textContent = "sakkiz"; 
            break; 
        case 9: 
            bir.textContent = "toqqiz"; 
            break; 
        default: 
            console.log('son emas'); 
            break;
    }
    elInp.value = ""
}