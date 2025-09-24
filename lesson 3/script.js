// Задание 1.1
function hellon(name) {
    console.log(name);
}

hellon(`Привет Иван Петров с Возрастом 17`)

//Задание 1.2
const salary = (chislo) => {
    return chislo ** 2
}

const moni = Number(prompt('Возведи число'))
console.log(salary(moni));
//Задание 1.3

 function chetovod(a) {
  if (a>0) {
     alert(`число ${a} +++`)
  } else {
      alert(`число ${a} ---`)
    }
  }

  chetovod(9)


 // Задание 2.1 AND 2.2

 let param1 = 1
 let param2 = 2
 let param3 = 3

 function summa(number1,number2,number3) {
    alert(number1+number2+number3)
 }

 summa(param1,param2,param3)

// Задание 2.3

function func(num = 5) {
    console.log(num * num);
}

 func(2); // === 4
 func(3); //=== 9
 func();  //=== 25

 //Задание 3
 alert(cor(3))
 alert(cor(4))
 function cor(num) {
  
   return Math.sqrt(num)
  
 }

 function bol(num1,num2) {
     if (num1>num2) { 
            alert(num2)  
         }
 else  {
   alert(num1)
 }
      
 }

 bol(5,4)

 //Задание 4.1
  function weekday(dayNumber) {  
    if (dayNumber < 1 || dayNumber > 7) {  
         throw new Error('Число должно быть от 1 до 7');  
     }  
      
  
    const days = [  
         'Понедельник',  
         'Вторник',  
          'Среда',  
         'Четверг',  
         'Пятница',  
         'Суббота',  
         'Воскресенье'  
     ];  
      
  
     return days[dayNumber - 1];  
 }  
 alert(weekday(6))

 //Задание 4.2

  function gret(name) {  
    const hours = new Date().getHours();  
      
     if (hours < 6) {  
        return `Доброй ночи ${name}`;  
     } else if (hours < 12) {  
         return `Доброе утро ${name}`;  
     } else if (hours < 18) {  
         return `Добрый день ${name}`;  
     } else  if (hours < 23) {
         return `Добрый вечер ${name}`;  
     }  
 }  
 alert(gret("Глебушка"))

