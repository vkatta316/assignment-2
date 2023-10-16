document.addEventListener("DOMContentLoaded", function() {
    var signInForm = document.getElementById("signIn")
    signInForm.addEventListener("submit" , function(e){
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        
        let flag = true;
        let errMsg =  validateInputs(email, password);
       
        if(errMsg.length !== 0){
            document.getElementById('errMsg').setAttribute("className", "redText");
            document.getElementById('errMsg').innerText = errMsg;
            flag =false;
        }
        else{
            document.getElementById('errMsg').innerText = "";
        }

        if (!flag) {
            e.preventDefault(); 
        }
    });

    function validateInputs(email, password){
        let msg = "";
        var passwordCheck = password.length;
        
        if(email == '' && password == '' ){
            msg = "Email and Password should not be empty";
            return msg;
        }
        else if(email == ''){
            msg = "Email should not be empty";
            return msg;
        }
        else if(password == ''){
            msg = "Password should not be empty";
            return msg;
        }
        else if(passwordCheck <= 5 || passwordCheck >= 20){
             msg = "Password should be minimum of 5 and maximum of 20";
            return msg;
        }
        return msg;
    }

});
