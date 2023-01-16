let data =[
{nama:"depi",jurusan:"RPL"},
{nama:"kikik",jurusan:"TKJ"}
]

console.log(data.length);
console.log("nama data 1 = " + data[0].nama);


// tambah array objek
let kota=["malang","kediri"];
console.log(kota);
console.log("isi array kota");
console.log("jumlah data = " + kota.length);
console.log("--------------------------------------");

kota.push("jombang");
console.log("hasil jumlah kota setelah ditambah = " + kota.length);
console.log("isi kota sekarang");
console.log(kota);

// hapus data
data =['devi','lia','aorel'];
console.log(data.length);
console.log("data sebelum ada yg dihapus = ");
console.log(data);
console.log("====================");
data.splice(0,1);
console.log("data setelah ada yg dihapus = ");
console.log(data);

// {}=objek,[]=array

// 