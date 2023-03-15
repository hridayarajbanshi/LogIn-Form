const logBtn = document.getElementById("loginBtn").addEventListener("submit", function(e){
  //form ma timro php ko data haru halnu 
  fetch('', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert('Thank you for submitting the form!');
      document.getElementById('loginForm').reset(); 
    } else {
      alert('There was a problem submitting the form.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('There was a problem submitting the form.');
  });
});
const loginForm = document.getElementById("loginForm").addEventListener('submit',function(e){
  e.preventDefault();
  let email = document.getElementById("form1Example1").value;
  let pwd = document.getElementById("form2Example2").value; 
})
//sign up section 
let signUp = document.getElementById("signinForm").addEventListener("submit", function(e){
  e.preventDefault();
  let formData2 = new FormData(document.getElementById('signinForm'));

  fetch('', {
    method: 'POST',
    body: formData2
  }).then(res=>{
    if(res.status == 200){
      console.log("You're a member");
      document.getElementById("signinForm").reset();
    }else{
      alert("there is a problem");
    }
  })
  .catch(error => {
    console.log("Error: ", error);
  })
})