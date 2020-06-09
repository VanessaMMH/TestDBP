


function change_color(action,value) {

  
    input_email  = document.getElementById("email");
    button = document.getElementById("button").disabled=!action
    input= input_email 
 
    if(action) {
      input.style.backgroundColor = "#b1ffb0";
     
    } else {
      input.style.backgroundColor = "#ff0006";
   
    }
    
  }


function check_email(email) {
    
    if (email.length ==8) {
      
      alert("corrreo valido ")
      console.log("OK:" + email);
      change_color(true,'email');
      return
    }
    change_color(false,'email');
    console.log(" formato incorrecto " + email);
    
    return false;
  }






