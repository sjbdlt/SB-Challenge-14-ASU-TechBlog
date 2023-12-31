
const enterreview = async (event) => {
    event.preventDefault();
  
    const comment_date = new Date().toDateString();
    const blog_id = document.querySelector('#blogid').innerHTML;
    const comment = document.querySelector('#review-comment').value.trim();
  
    if (comment && blogid) {
      const response = await fetch('/api/blog/review', {
        method: 'POST',
        body: JSON.stringify({ comment, comment_date, blog_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/api/blog');
      } else {
        alert('Failed to add comment');
      }
    }
  };

  const deleteblog = async (event) => {
    event.preventDefault();
  
    const blog_id = document.querySelector('#blogid').innerHTML;
  
    if (blogid) {
      const response = await fetch(`/api/blog/${blog_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/api/blog');
      } else {
        alert('Failed to delete blog');
      }
    }
  };
  



document.querySelector('#reviewsubmit').addEventListener('click', enterreview);

document.querySelector('#deleteblog').addEventListener('click', deleteblog);