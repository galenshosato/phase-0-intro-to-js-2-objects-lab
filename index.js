const employee = {
    name: 'G',
    streetAddress: 'Astoria' 
}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    return {
        ...employee,
        [key]: value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    let destroyedEmployee = employee
    delete destroyedEmployee[key]
    return destroyedEmployee
}