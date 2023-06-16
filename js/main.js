let base = document.querySelector("#base")
let template__main = document.querySelector("#template__main").content
let fragmentTemp = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded", () =>{
    dataFech()
})


const dataFech = async () =>{
    try{
        let res = await fetch("data.json")
        let data = await res.json()
        //console.log(data)
        
        pintarElementos(data)

    }catch(error){
        console.log(" Error de carga en el JSON")
    }
}


const pintarElementos = (data) =>{
    data.forEach(element => {
        console.log(element)
        template__main.querySelector("#texto").textContent = element.category
        template__main.querySelector("#texto").style.color = element.color
        template__main.querySelector("#number").textContent = element.score
        template__main.querySelector("#iconos").setAttribute("src",element.icon)
        template__main.querySelector("#iconos").setAttribute("alt",element.category)

        //caja
        template__main.querySelector("#box").style.background = element.hex


        let dataClone = template__main.cloneNode(true)
        fragmentTemp.appendChild(dataClone)
    });
    base.appendChild(fragmentTemp)
}


