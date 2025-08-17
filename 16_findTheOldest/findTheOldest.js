const findTheOldest = function(people) {
    let oldestPerson = null, oldestAge = 0;
    for(let i = 0; i < people.length; i++) {
        const person = people[i];
        let birth = person.yearOfBirth;
        let death = person.yearOfDeath ? person.yearOfDeath : new Date().getFullYear();

        let age = death - birth;
        if(age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        }

        
    }

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
