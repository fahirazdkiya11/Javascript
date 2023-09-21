// 1. Syntax Percabangan if

var totalBelanja = 20000;

if(totalBelanja > 10000) {
    document.getElementById("if").innerHTML = "Selamat Kamu Dapat Piring";
}

// 2. Syntax Percabangan if else

var umurPengunjung = 17;

if(umurPengunjung >= 17) {
    document.getElementById("ifelse").innerHTML = "Kamu Boleh Masuk Wahana Ini";
} else {
    document.getElementById("ifelse").innerHTML = "Maaf Kamu Tidak Dapat Masuk Wahana Ini";
}

// 3. Syntax Percabangan If Else If

var tiket = 8;

if(tiket >=6) {
    document.getElementById("ifelseif").innerHTML = "Dapat Popcorn";
} else if(tiket >=4) {
    document.getElementById("ifelseif").innerHTML = "Dapat Makanan Ringan";
} else if(tiket >=2) {
    document.getElementById("ifelseif").innerHTML = "Dapat Permen";
} else {
    document.getElementById("ifelseif").innerHTML = "Tidak Mendapat Snack";
}

// 4. Syntax Percabangan Switch Case

// CARA PERTAMA

// var umurPengunjung = prompt("Masukkan Umur Anda");
// var wahana;

// switch(true) {
//     case umurPengunjung >= 18: 
//     wahana = "Boleh Masuk Wahana Kora-Kora";
//     document.getElementById("switchcase").innerHTML = wahana;
//     break;

//     case umurPengunjung >= 16: 
//     wahana = "Boleh Masuk Wahana Flying Fox";
//     document.getElementById("switchcase").innerHTML = wahana;
//     break;

//     case umurPengunjung >= 14: 
//     wahana = "Boleh Masuk Wahana Halilintar";
//     document.getElementById("switchcase").innerHTML = wahana;
//     break;

//     default: "Terima Kasih Sudah Berkunjung";
//     document.getElementById("switchcase").innerHTML = wahana;
// }

// CARA KEDUA

// var nilai = prompt("Masukkan Nilai Anda");
// var grade = "";

// switch(true) {
//     case nilai > 90:
//     grade = "A+";
//     break
//     document.getElementById("switchcase").innerHTML = grade;
//     case nilai > 85:
//     grade = "A";
//     break
//     document.getElementById("switchcase").innerHTML = grade;
//     case nilai > 75:
//     grade = "B+";
//     break
//     document.getElementById("switchcase").innerHTML = grade;

//     default: 
//     grade = "C";
//     document.getElementById("switchcase").innerHTML = grade;            
// }

// 5. Syntax Percabangan Ternary

// var tanya = prompt("Apakah Serang Ibukota Banten");
// var jawaban = (tanya.toUpperCase() == "Iya") ? "Benar": "Salah";
// document.getElementById("ternary").innerHTML = jawaban;

// 6. Syntax Percabangan Nested

var user = {
    nama: "Fath",
    email: "azzf@gmail.com",
    password: "3340",
    role: "admin",
}

function masuk() {
    var email = document.getElementById("email").Value;
    var password = document.getElementById("password").Value;

    console.log(email);
    if(user.email == email) {
        if(user.password == password) {
            if(user.role == "admin") {
                alert("Selamat Datang" + user.nama);
            }
        } else {
            alert("Tidak Bisa Masuk");
            } 
        } else {
            alert("Bukan Admin Woiii");
            }
}