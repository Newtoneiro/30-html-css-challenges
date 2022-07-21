const items = document.querySelectorAll('.accordion button')

const toggleAccordion = (item) => {
    const itemToggle = item.getAttribute('aria-expanded')
    items.forEach((item) => {
        item.setAttribute('aria-expanded', 'false')
    })
    if (itemToggle=='false'){
        item.setAttribute('aria-expanded', 'true');
    }
}

items.forEach((item) => item.addEventListener('click', () => toggleAccordion(item)))