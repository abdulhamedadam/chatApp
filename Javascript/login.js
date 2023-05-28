const form =document.querySelector(".login form"),
continueBtn=form.querySelector(".button input"),
errorText=form.querySelector(".error-txt");

form.onsubmit = (e)=>{
    e.preventDefault();
    
}

continueBtn.onclick = () =>{
   let xhr=new XMLHttpRequest();   //creating XML object;
   xhr.open("POST", "php/login.php",true);
   xhr.onload =()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status ===200){
                let data=xhr.response;
                
                if(data == "success😎")
                {
                     location.href="users.php";
                }
                else
                {
                    errorText.style.display="block";
                     errorText.textContent=data;
                    
                }
             }
        }
   }

   //send data form through ajax to php
   let formData =new FormData(form);    //create new foem data object

   xhr.send(formData);//send the form data to php
}