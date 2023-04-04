const employee = {
    name: `Bob`,
    streetAddress: `1234 franks st`
}

function updateEmployeeWithKeyAndValue(obj, key, value){
   return{ 
    ...obj, [key]: value}
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj;   
}

function deleteFromEmployeeByKey(employee, key){
    const newbie = {...employee}
    delete newbie[key]
    return newbie;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
}