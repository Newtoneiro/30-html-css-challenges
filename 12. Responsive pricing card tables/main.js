const cards = [
    {
        name: 'Basic',
        price_annually: '19.99',
        price_monthly: '199.99',
        perks: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB'] 
    },
    {
        name: 'Professional',
        price_annually: '24.99',
        price_monthly: '249.99',
        perks: ['1 TB Storage', '5 Users Allowed', 'Send up to 10 GB'] 
    },
    {
        name: 'Master',
        price_annually: '39.99',
        price_monthly: '399.99',
        perks: ['10 TB Storage', '10 Users Allowed', 'Send up to 20 GB'] 
    }
]

const checkbox = document.getElementById('checkbox')
checkbox.addEventListener('click', () => {
    const checkbox = document.getElementById('checkbox')
    fillCards(checkbox.checked)
})

const fillCards = (monthly) => {
    const cards_div = document.getElementById('cards')
    cards_div.innerHTML = ''
    cards.forEach((card) => {
        const card_div = document.createElement('div')
        card_div.classList.add('card')
        const title = document.createElement('h1')
        title.innerHTML = card.name
        card_div.appendChild(title)
        const price = document.createElement('h1')
        price.classList.add('price')
        price.innerHTML = `$${monthly?card.price_monthly:card.price_annually}`
        card_div.appendChild(price)
        const card_perks = document.createElement('div')
        card_perks.classList.add('card_perks')
        card.perks.forEach((perk) => {
            const perk_h = document.createElement('h2')
            perk_h.innerHTML = perk
            card_perks.appendChild(perk_h)
        })
        card_div.appendChild(card_perks)
        const button = document.createElement('button')
        button.innerHTML = 'LEARN MORE'
        card_div.appendChild(button)
        cards_div.appendChild(card_div)
    })
}

fillCards(false)