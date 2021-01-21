// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.status === 200){
//         if(xhr.readyState === 4){
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=b45dfb17&s=avenger');
// xhr.send();

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi ( then / catch)

// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditepati!');
//     }else {
//         reject('Ingkar Janji...');
//     }
// });

// janji1
// .then(response => console.log('Ok : ' + response))
// .catch(response => console.log('NOT OK : ' + response));

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati){
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!');
//         }, 2000);
//     }else {
//         setTimeout(() => {
//             resolve('tidak ditepati setelah beberapa waktu!');
//         }, 2000);
//     }
// });

// console.log('mulai');
// janji2
// .then(response => console.log('Ok : ' + response))
// .catch(response => console.log('NOT OK : ' + response));
// console.log('selesai');

// Promise,all()
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul : 'Avengers',
            sutradara : 'Joban',
            pemeran : 'joban1,  Joban2'
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota : 'Bogor',
            temp : 26,
            kondisi : 'Cerah Berawan'
        }]);
    }, 500);
});

Promise.all([film, cuaca])
.then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
});