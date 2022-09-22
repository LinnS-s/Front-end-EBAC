function abrir1(){
    const modal1 = document.getElementById("modal1")
    modal1.classList.add("abrir")

    modal1.addEventListener("click",(e)=>{
        if(e.target.id=="fechar" || e.target.id == "modal1")
        modal1.classList.remove("abrir")
    })
}

function abrir2(){
    const modal2 = document.getElementById("modal2")
    modal2.classList.add("abrir")

    modal2.addEventListener("click",(e)=>{
        if(e.target.id=="fechar" || e.target.id == "modal2")
        modal2.classList.remove("abrir")
    })
}

function abrir3(){
    const modal3 = document.getElementById("modal3")
    modal3.classList.add("abrir")

    modal3.addEventListener("click",(e)=>{
        if(e.target.id=="fechar" || e.target.id === "modal3")
        modal3.classList.remove("abrir")
    })
}
