let body=document.querySelector('body')

const containerSize='640px'

let container=document.querySelector('.container')
container.style.display='flex'
container.style.width=containerSize
container.style.height=containerSize
container.style.flexWrap='wrap'
container.style.border='1px solid black'

function createDiv(grid){
    let div=document.createElement('div')
    div.style.border='1px solid black'
    div.style.boxSizing='border-box'
    div.style.height=parseInt(containerSize)/grid+'px'
    div.style.width=parseInt(containerSize)/grid+'px'
    container.append(div)
    
    function backgroundColor(){
        let arr=[]
        let tenpercent=[]
        for (let i=0;i<3;i++){
            let random=Math.floor(Math.random()*256)
            arr.push(random)
            tenpercent.push(random*(0.1))
        }
        return [arr,tenpercent]
    }

    function reduceBackgroundColor(arr){
        for (let i=0;i<3;i++){
            arr[0][i]=arr[0][i]-arr[1][i]
        }
        return arr
    } 

    let rgb=backgroundColor()
    let counter=1
    div.addEventListener('mouseenter',(event)=>{
        let target=event.target
        if (counter>1){
            rgb=reduceBackgroundColor(rgb)
        }
        target.style.backgroundColor=`rgb(${rgb[0].join(', ')})`
        counter+=1
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
    
    while (grid<=0 || isNaN(grid)){
        alert('ERROR, put a postive integer')
        grid=prompt('Number of squares per side for the new grid: ')
        grid=parseInt(grid)
    }
    
    container.innerHTML=''
    for (i=0;i<grid**2;i++){
        createDiv(grid)
    }
})