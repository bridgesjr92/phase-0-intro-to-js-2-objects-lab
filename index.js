// Write your solution in this file!

let employee = {}



function updateEmployeeWithKeyAndValue(employee, name , streetAddress){
    let newEmployee = {...employee}
    newEmployee[name] = streetAddress
        return newEmployee
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, name , streetAddress){
    // let newEmployee = {...employee}
    employee[name] = streetAddress
        return employee
}


function deleteFromEmployeeByKey(employee, name){
    let newEmployee = {...employee}
    delete newEmployee[name]
        return newEmployee
}


function destructivelyDeleteFromEmployeeByKey(employee, name){
    // let newEmployee = {...employee}
    delete employee[name]
        return employee
}


// function updateEmployeeWithKeyAndValue(employee, key, value){}


// function updateEmployeeWithKeyAndValue(employee, key, value){}


// function updateEmployeeWithKeyAndValue(employee, key, value){}