
// для отображения количества отработанных дней в компании 
let timeWorkedOn32 = document.getElementById('expTime');
let dString = "Jan, 01, 2024";
let currentTime = new Date();
let hireDate = new Date(dString);
timeWorkedOn32.textContent = Math.floor((currentTime-hireDate)/(24*3600*1000)) // вывод в блок time с id expTime
// для отображение количества отработанных дней в РМК
let timeWorkedOnRmk = document.getElementById('expTimeRmk');
let dString2 = "Mar, 06, 2023";
let dString3 = "Sep, 07, 2023";
let hireDateRmk = new Date(dString2);
let firedDate = new Date(dString3);
timeWorkedOnRmk.textContent = Math.floor((firedDate - hireDateRmk)/(24*3600*1000)) //  вывод в блок time с id expTimeRmk


// блок aside
document.getElementById('aside').style.display = "none"
document.getElementById('aside').style.display = "flex"