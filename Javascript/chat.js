const form =document.querySelector(".typing-area"),
inputfield =form.querySelector(".input-field"),
sendBtn=form.querySelector("button"),
chatBox=document.querySelector(".chat-box");

form.onsubmit =(e)=>{
    e.preventDefault();
}

sendBtn.onclick =() =>{
    let xhr=new XMLHttpRequest();//creating XML object;
    xhr.open("POST", "php/insert-chat.php",true);
    xhr.onload =()=>{
         if(xhr.readyState === XMLHttpRequest.DONE){
             if(xhr.status ===200){
               let data=xhr.response;
               inputfield.value='';
               scrollToBottom();


              }
         }
    }
 
    //send data form through ajax to php
    let formData =new FormData(form);    //create new foem data object
 
    xhr.send(formData);//send the form data to php
}

chatBox.onmouseenter =()=>{
    chatBox.classList.add("active")
}
chatBox.onmouseleave =()=>{
    chatBox.classList.remove("active")
}
setInterval( ()=>{

    let xhr=new XMLHttpRequest();//creating XML object;
    xhr.open("POST", "php/get_chat.php", true);
    xhr.onload = ()=>{
         if(xhr.readyState === XMLHttpRequest.DONE){
             if(xhr.status === 200){
                 let data=xhr.response;
                 chatBox.innerHTML=data;
                 if(!chatBox.classList.contains("active"))
                 {
                    scrollToBottom();
                 }
 
              }
         }
    }
    let formData =new FormData(form);    //create new foem data object
    xhr.send(formData);//send the form data to php
 }, 500);

 function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
 }