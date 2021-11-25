

async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/feed');
      } else {
        alert(response.statusText);
      }
    }
  }

  async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username, 
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        
        //check response status
        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }
}




  
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
// document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

document.querySelector('#test').addEventListener('click', (e) => {
  e.preventDefault()
  console.log('success!')
})