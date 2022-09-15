function abrir(){
    const modal = document.getElementById("modal")
    modal.classList.add("abrir")

    modal.addEventListener("click",(e)=>{
        if(e.target.id=="fechar" || e.target.id == "modal")
        modal.classList.remove("abrir")
    })
}
