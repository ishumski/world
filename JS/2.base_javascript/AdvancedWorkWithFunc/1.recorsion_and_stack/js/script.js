const company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

function sumSalary(department) {
    if (Array.isArray(department)) {
        return department.reduce((accumulator, currentValue) => accumulator + currentValue.salary, 0);
    } else {
        let sum = 0;
        for (let prop of Object.values(department)) {
            sum += sumSalary(prop);
        }
        return sum;
    }
}
console.log(sumSalary(company));
console.log(sumSalary(company.sales));
console.log(sumSalary(company.development));
console.log(sumSalary(company.development.sites));
console.log(sumSalary(company.development.internals));
