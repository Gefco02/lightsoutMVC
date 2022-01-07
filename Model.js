class Model {

    constructor(tomb) {
        this.tomb = tomb;

    }
atvalt2(azon){

    
             let meret = 3;
 
 
             this.tomb[azon].atvalt();
             if (azon > meret - 1) {
                 
                 this.tomb[azon - meret].atvalt();
             }
             if (azon < meret * meret - meret) {
                 this.tomb[azon + meret].atvalt();
             }
             if (azon % meret !== 0) {
                 this.tomb[azon - 1].atvalt();
             }
             if (azon % meret !== meret - 1) {
                 this.tomb[azon + 1].atvalt();
             }
}
    ellenorzes() {
        
        

        let allapot = false
        let win = 0;
        this.tomb.forEach(element => {
            if (element.allapot === true) {
                win++;
            }
        });
        if (win == 9) {
            allapot = true

        }
        return allapot
    }
}