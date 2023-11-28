
  const enterblog = async (event) => {
    event.preventDefault();
  
    const created_date = new Date().toDateString();
    const title = document.querySelector('#blogtitle').value.trim();
    const subject = document.querySelector('#blogsubject').value.trim();
    const note = document.querySelector('#blognote').value.trim();
  
    if (title && subject && note) {
      const response = await fetch('/api/blog', {
        method: 'POST',
        body: JSON.stringify({ title, subject, note, created_date }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/api/blog');
      } else {
        alert('Failed to add blog');
      }
    }
  };


document.querySelector('#blogsubmit').addEventListener('click', enterblog);

