

const form = document.getElementById('order-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    // push data to https://final-project-api-lugr.onrender.com/order
    fetch('https://final-project-api-lugr.onrender.com/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then( alert('Order Anda Berhasil') )
        .catch(error => console.error('Error:', error));
}
);