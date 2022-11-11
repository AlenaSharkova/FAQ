let blocks = document.querySelectorAll('.faqBlock')

blocks.forEach(block => {

    block.onclick = () => {
        // if (block.classList.contains('active')) {
        //     block.classList.remove('active')
        // } else {
        //     block.classList.add('active')
        // }
        block.classList.toggle('active')
        // Я тебе зачем рассказывал про тоггл класс, мелочь ты, по жопе дам. 
        // Как будто мне для этого нужен повод..
    }
})