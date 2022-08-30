const loadPhones = async (searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const response = await fetch(url)
    const data = await response.json()
    displayPhones(data.data)
}

const displayPhones = phones =>{
    console.log(phones)
    const phonesContainer = document.getElementById('phone-container')
    phonesContainer.textContent = ''
    // Display 10 phones Only
    phones = phones.slice(0, 10)

    // Display No Phones Found
    const noPhone = document.getElementById('no-found-message')
    if(phones.length === 0){
        noPhone.classList.remove('d-none')
    }
    else{
        noPhone.classList.add('d-none')
    }
    // Display All Phones
    phones.forEach(phone =>{
        const phoneDiv = document.createElement('div')
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML = `
        <div class="card p-2">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title fw-bold">${phone.phone_name}</h5>
                <h6 class="text-muted" >Brand: ${phone.brand}</h6>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <h6 class="text-muted" >Model:${phone.slug}</h6>
            </div>
        </div>
        `
        phonesContainer.appendChild(phoneDiv);

    })
}

document.getElementById('btn-search').addEventListener('click',function(){
    const searchField = document.getElementById('input-field')
    const searchText = searchField.value 
    searchField.value = ''
    loadPhones(searchText)

})

// loadPhones()
