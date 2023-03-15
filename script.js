const mainTitle = document.getElementById("main-title");
const logBtn = document.getElementById("loginBtn").addEventListener("submit", function(e){
  mainTitle.innerText = "Login";
  //form ma timro php ko data haru halnu 
  fetch('submit-form.php', {
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
const signBtn = document.getElementById("signBtn").addEventListener("submit", function(){
  mainTitle.innerText = "Sign up";
});
const loginForm = document.getElementById("loginForm").addEventListener('submit',function(e){
  e.preventDefault();
  let email = document.getElementById("form1Example1").value;
  let pwd = document.getElementById("form2Example2").value;
  

})
