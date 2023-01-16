

// CARA SIMPLE NYA

const phi = 3.14;
let r = 10
let L = phi *(r**2);
let K = 2 * phi * r;
console.log("hasil luas lingkaran = " + L);
console.log("hasil keliling lingkaran = " + K);



console.log("------------------------")
// NYOBA PAKE CLASS
class lingkaran{
    constructor(r,phi) {
        this.phi = 3.14;
        this.r = r;
}
luas=()=>{
    return this.phi * (this.r **2);
}

keliling=()=>{
    return 2 * this.phi * this.r;
}}
let hasil=new lingkaran(10,3.14)
console.log("luas lingkaran = " + hasil.luas());
console.log("keliling lingkaran = " + hasil.keliling());