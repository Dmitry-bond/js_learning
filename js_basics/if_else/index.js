
//Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//1, если значение больше нуля,
//-1, если значение меньше нуля,
//0, если значение равно нулю.
//Предполагается, что пользователь вводит только числа.

let num = prompt("Введите число", "");

if(num > 0){
	alert(1);
}
else if(num < 0){
	alert(-1);
}
else{
	alert(0);
}

// Перепишите конструкцию if с использованием условного оператора '?':

//let message = num > 0 ? '1':num < 0 ? '-1': '0';
//alert(message);