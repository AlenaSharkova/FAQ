let blocks = document.querySelectorAll('.faqBlock')

blocks.forEach(block => {

    block.onclick = () => {
        if (block.classList.contains('active')) {
            block.classList.remove('active')
        } else {
            block.classList.add('active')
        }
    }
})