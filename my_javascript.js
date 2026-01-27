let container=document.querySelector('.container')
container.style.display='flex'

for (i=1;i<17;i++){
    let column=document.createElement('div')
    column.style.flexGrow='1'
    container.append(column)

    container.append(column)
    for (j=1;j<17;j++){
        let div=document.createElement('div')
        div.setAttribute('id',`${i},${j}`)
        div.style.border='1px solid black'
        div.style.padding='5px'
        div.style.flexGrow='1'
        column.append(div)
    }
}

container.addEventListener('mouseover',(event)=>{
    let target=event.target
    console.log(target.id)
})