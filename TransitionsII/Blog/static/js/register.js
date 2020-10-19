const inputUsername=document.querySelector('#inputUsername');
const feedBackArea = document.querySelector('.invalid_feedback')
inputUsername.addEventListener("keyup",(e)=>{
    console.log('777777', 9999999);
    const usernameVal = e.target.value;

    inputUsername.classList.remove('is-invalid');
    feedBackArea.style.display="none";
   
   
    if(usernameVal.length > 0){
        fetch('/authentication/validate-username', {
            body:JSON.stringify({username: usernameVal}),
            method: "POST",
        })
        .then((res)=>res.json())
        .then(data=>{
            console.log('data', data);
            if(data.username_error){
                inputUsername.classList.add('is-invalid');
                feedBackArea.style.display="block";
                feedBackArea.innerHTML=`<p>${data.username.error}</p>`
            }
        });
}
});