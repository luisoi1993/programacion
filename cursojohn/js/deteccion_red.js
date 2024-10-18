const d = document,
w = window,
n = navigator;

export default  function networkStatus(){
    const isOnline = () =>{
        const isOnline = () =>{
            const $div = d.createElement("div");

            if(n.online){
                $div.textContent = "Conexion restrablecidda";
                $div.classList.add("online");
                $div.classList.remove("offline");
            }else{
                $div.textContent = "Conexion Perdida";
                $div.classList.add("offline");
                $div.classList.remove("online");
            }

            d.body.insertAdjacentElement("afterbegin", $div);
        };

    };
    
    w.addEventListener("online",(e)=> isOnline());
    w.addEventListener("offline",(e)=> isOnline());
}