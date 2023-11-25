const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const phone = document.getElementById("p-no")
const password = document.getElementById("password")
const cPassword = document.getElementById("c-password")

// calling validate function when user submits the form element
// adding event for form 
form.addEventListener("submit",(e) => {
   e.preventDefault()  // preventing default behaviour of browser
   validate()  //  calling validate function inside call back function of this event

})

//  defining isEmail
// email value  will be valid if ->  
function isEmail(emailValue){
    
    // checking @ symbol position
    // @ should not be at 0th index
     let atsymbol = emailValue.indexOf("@") 
     if(atsymbol == 0){
          return false
     }
    
    //  checking dot position
    //  if dot is at last position , it will be invalid
     let dot = emailValue.lastIndexOf(".")
     if(dot == emailValue.length-1){
        return false
     }
    // position of last occured dot in email should be  @ symbol position + 5 // @gmail.
    if(atsymbol + 6 != dot)
    {
        return false
    }
    else{
        return true
    }
}

// defining setErrorMsg
function setErrorMsg(input, errormsg){
    const formInput = input.parentElement // selecting corresponding div to which this input field belongs , so that we can perform actions inside this perticular div element 
    // selecting small tag of this selected div tag
    const small = formInput.querySelector("small")
    small.innerText = errormsg
    
    // firstly removing the success class if it contains and then add error class to this perticular div
      if(formInput.classList.contains("success") === true){
        formInput.classList.remove("success")
    }

    formInput.classList.add("error")  // adding error class to this div tag . so that error class properties will be applied to the elements inside this div tag
}

// defining setSuccessMsg
function setSuccessMsg(input){
    const formInput = input.parentElement // selecting corresponding div to which this input field belongs , so that we can perform actions inside this perticular div element 
    // selecting small tag of this selected div tag
    // const small = formInput.querySelector("small")
    // small.innerText = errormsg
   
    // firstly removing the error class if it contains and then add success class to this perticular div
    if(formInput.classList.contains("error") === true){
        formInput.classList.remove("error")
    }
    formInput.classList.add("success")  // adding error class to this div tag . so that error class properties will be applied to the elements inside this div tag


}




// creating a function and assigning it to a variable 
function validate(){

    let usernameValue = username.value.trim()  // trim function in js is used to remove starting and ending spaces or tab and return string
    // sp removing spaces from input if user accidently entered spaces before his name or after his name
    // same actions has been taken for other input values
    let emailValue = email.value.trim()
    let phoneValue = phone.value.trim()
    let passwordValue = password.value.trim()
    let cPasswordValue = cPassword.value.trim()


    // after converting input value into suitable format 
    // validating username input value 

    // valid username will be if  -> if it is not empty and it's length sholud be minimum 3.
     if(usernameValue === ""){
        setErrorMsg(username, "username cannot be blank")
     }else if (usernameValue.length <3){
        setErrorMsg(username, "min length is 3 char")
     }
     else{
        // now if username not matches with above two cases so, it is a valid username
        setSuccessMsg(username) 
     }
    //  defining setErrorMsg later... 
    // defining setSuccess later...


    // validating email value
    
    if(emailValue === ""){
        setErrorMsg(email , "email cannot be blank")
    }else if(isEmail(emailValue) !== true){
        // isEmail() will be created later to validate email value based on different conditions
        // isEmail() will return true if email Value is valid and return false if invalid
        // if isEmail returns false , means email is  invalid then calling setErrorMsg
        setErrorMsg(email , "Not a valid Email")
    }
    else{
        setSuccessMsg(email)
    }
    
   // validating phone number
    if(phoneValue === ""){
        setErrorMsg(phone , "phone cannot be blank")
    }
    else if(phoneValue.length != 10){
        setErrorMsg(phone , "phone number must be 10 char")
    }
    else{
        setSuccessMsg(phone)
    }

    // validating password
    // entered password will be valid if -> it's minimum length is 6 char
    if(passwordValue === ""){
        setErrorMsg(password, "password cannot be blank")
    }
    else if(passwordValue.length < 6){
        setErrorMsg(password, "password must be 6 char")
    }else{
        setSuccessMsg(password)
    }
    // checking for confirm password input that is it same to password value provided
    if(cPasswordValue === ""){
        setErrorMsg(cPassword, "confirming password is mandatory")
    }else if(cPasswordValue !== passwordValue){
        setErrorMsg(cPassword, "please provide correct password")
    }else{
        setSuccessMsg(cPassword)
    }

}

//  after all .form-input class div classList contains success class than after submiting the form
// a success pop-up box will be shown

form.addEventListener("submit", ()=>{
    allSuccess = true
    allInput = document.getElementsByClassName("form-input")
    for(var i = 0 ; i< allInput.length ; i++){
        console.log(allInput[i].classList.contains("success"))
        if(allInput[i].classList.contains("success") != true){
               allSuccess=false
               console.log("hello")
               break
        }
    }
    if(allSuccess == true){
        //    if all form input fields are filled successfully
        // pop-up box will be visible (if submit button is clicked) and form will disappear
        // showing only pop-up box 
        popUp= document.getElementsByClassName("popup-box")[0]
        popUp.style.visibility = "visible"
        form.style.visibility = "hidden"

        // removing success class so, that due to success class properties , icons would not shown up
        for(var i = 0 ; i< allInput.length ; i++){
            allInput[i].classList.remove("success")
        }
    }

})

document.querySelector(".popup-box button").addEventListener("click",(e)=>{
    e.preventDefault()
    // opening new html page 
    window.location.href = "page1.html"

   
})
