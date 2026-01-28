let body=document.querySelector('body')

const containerSize='640px'

let container=document.querySelector('.container')
container.style.display='flex'
container.style.width=containerSize
container.style.height=containerSize
container.style.flexWrap='wrap'
container.style.border='1px solid black'

function createDiv(grid){
    div=document.createElement('div')
    div.style.border='1px solid black'
    div.style.boxSizing='border-box'
    div.style.height=parseInt(containerSize)/grid+'px'
    div.style.width=parseInt(containerSize)/grid+'px'
    container.append(div)

    div.addEventListener('mouseenter',(event)=>{
        let target=event.target
        target.style.backgroundColor='pink'
    })
}

for (i=0;i<256;i++){
    createDiv(16)
}

btn=document.createElement('button')
btn.textContent='RESET GRID'
body.append(btn)

btn.addEventListener('click',()=>{
    let grid=prompt('Number of squares per side for the new grid: ')
    container.innerHTML=''
    for (i=0;i<grid**2;i++){
        createDiv(grid)
    }
})