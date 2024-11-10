    const numbers = [5, 8, 1, 15, 47, 26, 52, 14];

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenSum += numbers[i];
    } else {
        oddSum += numbers[i];
    }
    }

    console.log("Сумма четных чисел:", evenSum);
    console.log("Сумма нечетных чисел:", oddSum);



-------------------------------------------------------------------------------------------------------------------------


    const grades = [5, 4, 5, 3, 2, 1, 3];
    const americanGrades = [];

    for (let i = 0; i < grades.length; i++) {
    switch (grades[i]) {
        case 5:
        americanGrades.push("A");
        break;
        case 4:
        americanGrades.push("B");
        break;
        case 3:
        americanGrades.push("C");
        break;
        case 2:
        americanGrades.push("D");
        break;
        case 1:
        americanGrades.push("E");
        break;
        default:
        console.log("Неизвестная оценка:", grades[i]);
    }
    }

    console.log("Американские оценки:", americanGrades.join(", "));