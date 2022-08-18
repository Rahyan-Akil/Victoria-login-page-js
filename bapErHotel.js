/* step-1: add click handler with the submit button */

document.getElementById('btn-submit').addEventListener('click',function(){
    /* step-2: get the email address inside the email input field 
    always remember to use .value to get text from an input field*/
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
   /*  step-3 get password 
    1.set id on the html Elemens
    2.get the Elements
    3.get the value from the element  */
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;
    console.log(email,password)


    /* DANGER: donot varify email password on the client side  */
    /* step-4: varify the email password  */

    if(email=== 'admin@rahyan.com' && password ==='admin'){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }

})