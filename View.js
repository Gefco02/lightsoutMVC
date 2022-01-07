class Lampa {
    constructor(szuloelem,id) {
        this.node = szuloelem;
        this.node.append("<div></div>");
        this.allapot=false;
        this.id=id;
        this.elem = this.node.children("div:last");

        this.elem.on("click", () => {

                this.kattintasTrigger();
        })


    }
    atvalt(){
        this.allapot =! this.allapot;
        this.setLampa();
        
    }

    setLampa(){
        if(this.allapot){
            this.elem.css("background-color" , "yellow");
        } else{
            this.elem.css("background-color" , "red");
        }
    }
    kattintasTrigger() {
        let esemeny = new CustomEvent("lampaKattintas", { detail: this })
        window.dispatchEvent(esemeny);
    }
}
class jatekter {
    constructor(tomb) {
        const meret = 9;
        this.tomb = tomb
        const szuloelem = $("article");
        for (let k = 0; k < meret; k++) {
            tomb.push(new Lampa(szuloelem,k));
        }
        


    }



}