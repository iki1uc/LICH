class LICH {

    constructor(){
        this.intensity = 0;
        this.phase = 0;
        this.output = 0;
    }

    set(intensity, phase){
        this.intensity = intensity;
        this.phase = phase;
    }

    compute(){
        this.output = (this.intensity * this.phase) % 999;
        return {
            intensity: this.intensity,
            phase: this.phase,
            output: this.output
        };
    }
}

window.LICH = new LICH();
