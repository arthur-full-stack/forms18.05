document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const formData = new FormData(this);
    const jsonData = {};
    for (const [key, value] of formData.entries()) {
      jsonData[key] = value;
    }
    console.log(jsonData);
    fetch('http://127.0.0.1:5500/index.html', {
      method: 'POST',
      headers: {
    
        'Content-Type': 'application/json',
      },
      body: jsonData,

    })
    
  });
