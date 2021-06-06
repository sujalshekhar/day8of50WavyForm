const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

document.querySelector('.fas').addEventListener('click', () => {
    document.body.classList.toggle('light');
    console.log('press')
})