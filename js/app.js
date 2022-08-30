const loadPhones = async () =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
    const response = await fetch(url)
    const data = await response.json()
    displayPhones(data.data)
}

const displayPhones = phones =>{
    const phonesContainer = document.getElementById('phone-container')
    phones.forEach(phone =>{
        
    })
}

loadPhones()
