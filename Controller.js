class Controller{
    constructor() {
        let lampak=[];
        let elem = new jatekter(lampak);
        let model = new Model(lampak);
        $(window).on("lampaKattintas", (event) => {
             //console.log(event.detail);// aktuális kártya adata
             
            console.log(event.detail.id)
            console.log(lampak)
            model.atvalt2(event.detail.id);
            if(model.ellenorzes()){
                alert("Nyertél");
            }

            
        });

}
}