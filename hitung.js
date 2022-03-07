function kosong1() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
}

function kosong2() {
    let frm = document.getElementById("formulir");
    frm.a2.value = "";
}

function kosongAll() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
    frm.a2.value = "";
    frm.hasil.value = "";
}

//onclick operasi
function hitung(y){
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    //operasi

    if (isNaN(a1) || a1 == '') {
        alert("Harap Isi Data Berupa Angka");
    } else if (isNaN(a2) || a2 == '') {
        alert("Harap Isi Data Berupa Angka");
    } else {
        //jika inputan benar
        let hasil;
    switch (y){
        case "tambah" : hasil = parseInt(a1) + parseInt(a2); break;
        case "kurang" : hasil = parseInt(a1) - parseInt(a2); break;
        case "kali" : hasil = parseInt(a1) * parseInt(a2); break;
        case "bagi" : hasil = parseInt(a1) / parseInt(a2); break;
        case "pangkat" : hasil = Math.pow(parseInt(a1) , parseInt(a2)); break;
    }
    frm.hasil.value = hasil; //penempatan hasil di element form hasil
    } 
}