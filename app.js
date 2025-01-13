// UYGA VAZIFA
// 1-misol("Savol"  For1. k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.)
// let k = prompt("K sonini kiriting");
// let n = prompt("N sonini kiriting");
// for (let i = 0; i < n; i++) {
//   console.log(k);
// }

// 2-misol("Savol"
//     For2. Bir kg konfetning narxi berilgan (haqiqiy son). 0.1, 0.2, …, 0.9, 1 kg konfetni narxini chiqaruvchi programma tuzilsin.
//     )
// let narx = prompt("Narx kiriting");
// for (let i = 1; i <= 10; i++) {
//   console.log(${i / 10} kg=${+((i / 10) * narx).toFixed(2)} so'm);
// }
// 3-misol("Savol" For3. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = n^2 +(n+1)^2+(n+2)^2 + ... +(2*n)^2
// )
// let n = 5;
// let S = 0;
// for (let i = n; i <= 2 * n; i++) {
//   S += i  2;
// }
// console.log("Yig'indi S =", S);
// 4-misol("Savol"
//     For4. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
//     1^N+2^(N-1) + ...+ N^1
//     Input: N = 5;
//     1 ^ 5 + 2 ^ 4 + 3 ^ 3 + 4 ^ 2 + 5 ^ 1
//     Output: 65
//     )
// let N = prompt("butun son kiriting");
// let sum = 0;
// for (let i = 1; i <= N; i++) {
//   sum += i  (N - i + 1);
// }
// console.log(sum);
// 5-misol("Savol" For5. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda har bir son o'zining qiymaticha chiqarilsin. Ya'ni 3 soni 3 marta chiqariladi.
// )
// let A = parseInt(prompt("A sonini kiriting: "));
// let B = parseInt(prompt("B sonini kiriting: "));

// for (let i = A + 1; i < B; i++) {
//   let result = "";
//   for (let j = 0; j < i; j++) {
//     result += i + " ";
//   }
//   console.log(result.trim());
// }
// 6-misol("Savol" For6. Sonning bo’luvchilarini topish;)
// let son = prompt("Son kiriting");
// for (let i = 1; i <= son; i++) {
//   if (son % i == 0) {
//     console.log(i);
//   }
// }
// 7-misol("Savol" While1. N va K butun musbat sonlari berilgan. Faqat ayirish va qo'shish amallarini ishlatib N sonini K soniga bo'lgandagi qoldiq va butun qismini aniqlovchi programma tuzilsin.)
// let N = parseInt(prompt("N sonini kiriting: "));
// let K = parseInt(prompt("K sonini kiriting: "));
// let butunQism = 0;
// let qoldiq = N;
// for (; qoldiq >= K; butunQism++) {
//   qoldiq = qoldiq - K;
// }
// console.log("Butun qism: " + butunQism);
// console.log("Qoldiq: " + qoldiq);

// 8-misol("Savol" While2. 2 sonining qandaydir darajasini bildiruvchi n butun soni berilgan (n > 0). n = 2^k ni aniqlovchi programma tuzilsin.
// Input: 128
// Output: 7`
// )
// let n = parseInt(prompt("n sonini kiriting: "));
// let k = 0;
// for (; n > 1; k++) {
//   n = n / 2;
// }
// console.log("k ning qiymati: " + k);
// 9-misol("Savol"
//     For1. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin).
//     )
//let a = 35;
//let b = 65;
//if (a < b) {
// for (let i = b; i > a; i--) {
//    console.log(i);
// }
//}

// 10-misol("Savol"
//     For2. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari) kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi progma tuzilsin.
//     )
//let a = 35;
//let b = 65;
//if (a < b) {
// for (let i = b; i > a; i--) {
//    console.log(i);
// }
//}

// 11-misol("Savol" For3. Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, 10 kg konfetni narxini chiqaruvchi programma tuzilsin.)
//let konfet = Number(prompt("1kg konfet 16ming sum, necha kg kerak?"));
//let a = 0;
//for (let i = 0; i < konfet; i++) {
//  a++;
//}
//alert(`${(a * 16000) / 1000}.ming sum berasiz`);

// 12-misol("Savol"
//     For4. Bir kg konfetning narxi berilgan (haqiqiy son). 1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.
//     )
//let konfet = Number(prompt("1kg konfet 16ming sum necha kg kerak?"));
//let a = konfet;
//for (let i = 1; i < konfet; i++) {}
//alert(`${(a * 16000) / 10} sum bo'ldi`);

// 13-misol("Savol"
//     For5. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini chiqaruvchi programma tuzilsin.
//     )
// let a = 5;
// let b = 20;
// let counter = 0;
// if (a < b) {
//   for (let i = 0; i <= b; i++) {
//     counter += i;
//   }
// }
// console.log(counter);
