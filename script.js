


/* 
let nba = +prompt('Введите код');
let number = 7777
let i = 0

while (i !== 10) { // выводит 0, затем 1, затем 2
    i++
    prompt('Введено не правельный код');
}
 */
/* 


*/
/* let nba = +prompt('Введите код');
let number = 7777
let i = 0

do {
    (i === number)
    alert("Всё ок")
    i < 1
   
    


} while (i !== 10){
     i++
    prompt('Введено не правельный код');
}; */


// с do...while //
let i = 10;
let password = + prompt('Пароль');
let nba = 7777;
do {
    if (password !== nba) {
        password = +prompt(`У вас ещё ${i} попытки`);
    }
    else if (password === nba, i === 10) {
        alert('Добро пожаловать');

    }
    else if (0)
        console.log("Попробуйте позже");

    i--;
}
while (i > 0);