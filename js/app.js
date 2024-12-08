let select1 = document.querySelector('select')
let article1 = document.querySelectorAll('.container article')
select1.addEventListener('change', () => {
    for (const element of article1) {
        if(select1.value == element.dataset.type || select1.value == 'All'){
            element.style.display = 'grid'
        }else{
            element.style.display = 'none'
        }
    }
})