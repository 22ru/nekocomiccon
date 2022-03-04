function cropOutput(x) {
    return Number.parseFloat(x).toFixed(1);
}

function calculatePattern () {
    h = document.getElementById("h").valueAsNumber;
    ws = document.getElementById("ws").valueAsNumber;
    sl = document.getElementById("sl").valueAsNumber;

    w = ws / (2*1.875);

    // piece measurements
    document.getElementById("cut_sl").textContent = cropOutput(2*(sl+1));
    document.getElementById("cut_sw").textContent = cropOutput((w+2*1));
    document.getElementById("cut_bl").textContent = cropOutput(2*(h+1)+1);
    document.getElementById("cut_bw").textContent = cropOutput(2*(.875*w+1)+1);
    document.getElementById("cut_ol").textContent = cropOutput(.805*h+2);
    document.getElementById("cut_ow").textContent = cropOutput(w*.453+3);
    document.getElementById("cut_el").textContent = cropOutput(1.22*h+2);
    document.getElementById("cut_ew").textContent = cropOutput(.172*w*2+2);
    document.getElementById("cut_tl").textContent = cropOutput(.564*h+2);
    document.getElementById("cut_tw").textContent = cropOutput(2*.172*w+2);

    // body
    document.getElementById("cut_center").textContent = cropOutput(h+1);
    document.getElementById("cut_neck").textContent = cropOutput(.8*w);
    document.getElementById("back_fold").textContent = cropOutput(.255*h);

    // collar
    document.getElementById("eri_end").textContent = cropOutput(.47*h+1);

    // sleeves
    document.getElementById("sodetsuke").textContent = cropOutput(.141*h);
    document.getElementById("sodetsuke1").textContent = cropOutput(.141*h);
    document.getElementById("sode_guchi").textContent = cropOutput(2*.141*h);
    document.getElementById("sode_guchi1").textContent = cropOutput(2*.141*h);

    document.getElementById("miyatsukuchi_f").textContent = cropOutput(h*.094);
};