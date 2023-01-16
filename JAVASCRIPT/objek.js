let siswa1 = {
    nis: 1,
    nama: "depi juga",
    jurusan: "RPL"
}
let siswa2 = {
    nis: 2,
    nama: "depi ke3",
    jurusan: "RPL"
}
console.log(siswa2);
console.log(" nama siswa 1 = " + siswa1.nama);
console.log(siswa1.nis);



// update data 
let murid1 = {
    nis: 2,
    nama: "kikik",
    jurusan: "RPL"
}
console.log("murid sebelum update nama = "+ murid1.nama);
murid1.nama ="nama baru";
console.log("murid update "+ murid1.nama);

console.log("----------------------");
let siswa= [
   {nama:"depi",jurusan:"rpl"},
   {nama:"kiki",jurusan:"tkj"}
]
siswa.map(
    (siswa, index )=>{
        console.log("index ke "+ index +" = "+ siswa.nama +" "+ siswa.jurusan);
    }

)