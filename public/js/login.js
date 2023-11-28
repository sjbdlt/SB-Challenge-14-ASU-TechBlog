const login = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#LginEmail').value.trim();
    const password = document.querySelector('#LginPass').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  const signup = async (event) => {
    event.preventDefault();
  
    const currentDate = new Date().toDateString();
    const username = document.querySelector('#sgnUserName').value.trim();
    const email = document.querySelector('#sgnEmail').value.trim();
    const password = document.querySelector('#sgnPassword').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ username, email, password, currentDate }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document.querySelector('#btnlogin').addEventListener('click', login);

  document.querySelector('#btnsignup').addEventListener('click', signup);
  