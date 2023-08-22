//fetch from https://final-project-api-lugr.onrender.com/order everytime the page is loaded
//loop through the output in the html id order-cards
//implements a cancel button as well

const orderCards = document.getElementById('order-cards');

fetch('https://final-project-api-lugr.onrender.com/order')
    .then(response => response.json())
    .then(data => {
        data.forEach(order => {
            orderCards.innerHTML += `
            <div class="card-body">
                <h5 class="card-title text-dark">${order.tipe_paket}</h5>
                <p class="card-text">${order.nama_pasangan_pengantin}</p>
                <button class="btn btn-danger" onclick="deleteOrder(${order.id})">Hapus</button>
            </div>
            </div>
            `
        });
    }
    )
    .catch(error => console.error('Error:', error));   

function deleteOrder(id) {
    fetch(`https://final-project-api-lugr.onrender.com/order/${id}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        location.reload();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}