class LICH_PIPE {
    fuse(lich){
        return {
            light: lich.output,
            anchor: LICH_ANCHOR.get()
        };
    }
}

window.LICH_PIPE = new LICH_PIPE();
