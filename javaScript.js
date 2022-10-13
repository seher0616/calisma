// const sayilar = [1, 50, 2, 41, 41, 84, 8, 35, 3];
// const isimler = ["sezer", "ali", "hasan", "ayse"];
// const ogrenciler = [
//   { id: 12, isim: "sezer", yas: 30 },
//   { id: 22, isim: "hasan", yas: 15 },
//   { id: 32, isim: "fatma", yas: 55 },
//   { id: 13, isim: "nuriye", yas: 19 },
//   { id: 92, isim: "kemal", yas: 45 },
//   { id: 15, isim: "mustafa", yas: 75 },
//   { id: 44, isim: "ceren", yas: 30 },
// ];



//  const silme = sayilar.shift();
//  console.log(sayilar);
//  const dosya = isimler.shift();
//  console.log(isimler);

//  const a = ogrenciler.pop();
//  console.log(a);
//  const ek = isimler.unshift("noah");
//  console.log(isimler);
//  const s = sayilar.push(5);
//  console.log(sayilar);

//  const ck = ogrenciler.unshift({id:33, isim:"noah", yas:85});
//  console.log(ogrenciler);
//   const b = ogrenciler.find(x => x.id === 13);

//  const y = ogrenciler.find(k => k.yas === 45)
//  console.log(y);
//  const k = ogrenciler.find(bul => bul.id === 32);
//  console.log(k);
//  const l = ogrenciler.findIndex(ger => ger.isim === "nuriye");
//  console.log(l)
//  const h = sayilar.findIndex(say => say === 8);
//  console.log(sayilar)
// const al = isimler.findIndex(kisi => kisi === "ali");
// console.log(al)
// const seher = isimler.includes("ayse");
// console.log(seher)
// const arda  = ogrenciler.includes(kisi => kisi.id === 44);
// console.log(arda)
// const x = sayilar.filter(sayi => sayi %2 !== 0)
// console.log(x)
// const fit = ogrenciler.filter (kisi => kisi.id % 2 === 1)
// console.log(fit)
// const f = ogrenciler.filter( kisi => kisi.yas> 30);
// console.log(f)
// const h = ogrenciler.filter(kisi => kisi.yas > 20 && kisi.yas < 50);
// console.log(h)

// const a = sayilar.concat(isimler);
// console.log(a
// )
// const a = ogrenciler.concat(sayilar,isimler,"seher");
// console.log(a)
// const x =a.unshift(reis);
// console.log(a)
//  const k= sayilar.map(sayi => sayi*3);
// console.log(k)

// const j = sayilar.map(say => (say+7)/3.);


// console.log(j)

// const kk = ogrenciler.filter(ss => ss.id % 2 === 0);
// console.log(kk)

// let ad =  " seher";
// let dizi = Array.from(ad);
// console.log(dizi);

// let k = "seher";
// let kkkk = [..."seher"];
// console.log(kkkk)

// let sonuc = Array.from();
// console.log(sonuc);
// const  a = Array(5,  ogrenciler, 777,isimler,sayilar,7);
// console.log(sonuc)
// let sonuc = Array(5);
// console.log(sonuc)

// const a = sayilar.toString();
// console.log(a)


// const b = isimler.toString();
// console.log(b)
// const c = ogrenciler.toString();
// console.log(c)

// const aaa = isimler.join(  , );
// console.log(aaa)


// const sayi = sayilar.sort();
// console.log(sayi)

// const a = sayilar.sort((x,y) => (x-y));
// console.log(a);


// let f = isimler.sort().reverse().join( , );
// console.log(f)


// const x = ogrenciler.sort((x,y) => x.yas -y.yas);
// console.log(x)
// const sayi = sayilar.reduce((x,y) => x + y );
// console.log(sayi);

// const sayilar = [1, 50, 2, 41, 41, 84, 8, 35, 3];
// const isimler = ['sezer', 'ali', 'hasan', 'ayse'];
// const ogrenciler = [
//     {id : 12, isim : "sezer", yas : 30, maas : 12000},
//     {id : 13, isim : "hasan", yas : 15, maas : 15000},
//     {id : 32, isim : "fatma", yas : 55, maas : 17000},
//     {id : 13, isim : "nuriye", yas : 1, maas : 190009},
//     {id : 92, isim : "kemal", yas : 45, maas : 22000},
//     {id : 15, isim : "mustafa", yas : 75, maas : 28000},
//     {id : 44, isim : "ceren", yas : 30, maas : 30000}
// ];





// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];
// 1) Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim

// const dizi = salaries.filter(x => x>1000);
// console.log(dizi)

// const dizi =salaries.filter(x => x>6000 && x<10000)
// console.log(dizi)


// const x = salaries
// .filter(y => y<9000)
// .map(z => Math.trunc(z*1.1))
// .forEach(m => console.log(m));
// const a = salaries.filter(x => x<12000).map(y => Math.trunc(y*4))
// .forEach(m => console.log(m));
 
// const maas = salaries.reduce((a,b) => a+b);
// console.log(maas)





// const zaam = salaries.filter(x => x<9000)
// .map(y => Math.trunc(y*1.1)).
// reduce((a,b) => a+b)
// console.log(zaam);
// const zaam = salaries.filter(x => x<18000 )
// .map(y => Math.trunc(y*0.25)
// .reduce((a,b)=> a+b)



// const cift = ogrenciler.filter(k => k.id % 2 === 0 && k.yas> 20 && k.maas>16500)
// .map(a => a.maas)
// .reduce((a,b) => a+b)
// console.log(cift);

// const worker = {
//   name: "Sezer",
//   surname: "Ökmen",
//   age: 30,
//   job: "mechanical engineer",
//   languages: ["HTML", "CSS", "JAVASCRİPT", "REACT"],
//   salary: 140000,
// };
// let yeni = JSON.parse(JSON.stringify(worker));



// let x = worker;
// x.name = "seher";
// console.log(x);
// console.log(worker);

// let b = JSON.parse(JSON.stringify(worker));

// b.name = "arda";
// console.log(worker);
// const personal = {
//   name: "Sezer",
//   surname: "Ökmen",
//   dateOfBirthday: 1992,
//   job: "mechanical engineer",
//   salary: 140000,
//   drivingLicense: true,
//   calculateAge: function () {
//     return new Date().getFullYear() - this.dateOfBirthday;
//   },
//   summary: function () {
//     return `${this.name} is ${this.calculateAge()} years old`;
//   },
// };


// console.log(personal);
// console.log(personal.salary);
//  console.log(object);


// const people = {
//     person1: {
//       name: "Can",
//       surname: "Canan",
//       dob: "1990",
//       job: "developer",
//       salary: "140000",
//       drivingLicense: true,
//     },
//     person2: {
//       name: "John",
//       surname: "Sweet",
//       dob: "1990",
//       job: "tester",
//       salary: "110000",
//       drivingLicense: false,
//     },
//     person3: {
//       name: "Steve",
//       surname: "Job",
//       dob: "2000",
//       job: "developer",
//       salary: "90000",
//       drivingLicense: true,
//     }

// }
// let x = people;
// console.log(x.name);


// const team = [
//   { name: "Josh", surname: "Adams", job: "developer", age: 30 },
//   { name: "Mary", surname: "Bary", job: "tester", age: 22 },
//   { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
// ];

// const a = team.map((z) => x.age +1)
// .forEach((y)=> console.log(y); 

// const b = team.map((x) => ({
//   fullName: x.name.toLowerCase() + "" + x.surname.toLowerCase(), age: x.age+5
// }));
// console.log(b);
// const a = team.filter((x) => x.age<=22)
// .forEach((f) => console.log(f.name , f.surname))
// console.log(a);
function selamla (ad, soyad = ""){
  console.log("merhaba ${ad} ${soyad}");
}
selamla("seher", "sezgin");
