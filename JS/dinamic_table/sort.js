import { getAverageGrade } from "./utils.js";

export function compareNumbers(sorting, header) {
    return function (a, b) {
        if (sorting === "asc") {
            return a[header] - b[header];
        }
        return b[header] - a[header];
    };
}

export function compareStrings(sorting, header) {
    return function (a, b) {
        const x = a[header].toLowerCase();
        const y = b[header].toLowerCase();

        if (x < y) {
            return sorting === "asc" ? -1 : 1;
        }
        if (y < x) {
            return sorting === "asc" ? 1 : -1;
        }
        return 0;
    };
}


export function compareAverage(sorting) {
    return function (a, b) {
        const averageA = getAverageGrade(a.grades);
        const averageB = getAverageGrade(b.grades);

        if (sorting === "asc") {
            return averageA - averageB;
        }

        return averageB - averageA;
    }

}


export function compareGrades(sorting, subject) {
    return function (a, b) {
        const subjectGradeA = a.grades.find((subjectGrade) => subjectGrade.subject === subject);
        const subjectGradeB = b.grades.find((subjectGrade) => subjectGrade.subject === subject);

        if (sorting === "asc") {
            return subjectGradeA.grade - subjectGradeB.grade;
        }
        return subjectGradeB.grade - subjectGradeA.grade;
    }
}