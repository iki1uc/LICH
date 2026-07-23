class LICH_ANCHOR {
    constructor(){
        this.value = 0;
    }
    set(v){
        this.value = Math.abs(v);
    }
    get(){
        return this.value;
    }
}

window.LICH_ANCHOR = new LICH_ANCHOR();
