var person = { name: 'nhan', age: 18, occupation: 'Student' }

function displayInformation(person) {
    for (let key in person) {
        console.log(key + ":" + person[key])
    }
}
displayInformation(person)