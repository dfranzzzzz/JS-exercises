// My solution

const findTheOldest = function(obj) {
  let oldest =  obj.sort((a,b) => {
    const first = getAge(a.yearOfBirth, a.yearOfDeath);
    const second = getAge(b.yearOfBirth, b.yearOfDeath);
    return first > second ? 1 : -1;
  })
  return oldest[oldest.length - 1];
}

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

module.exports = findTheOldest

// Provided solution

// const findTheOldest = function(array) {
//   return array.reduce((oldest, currentPerson) => {
//     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
//     const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
//     return oldestAge < currentAge ? currentPerson : oldest
//   })
// }

// const getAge = function(birth, death) {
//   if (!death) {
//     death = new Date().getFullYear();
//   }
//   return death - birth;
// }