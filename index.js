// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, name) {
    // console.log(drivers, name)
    let matches = drivers.filter(function (eachDriver){return eachDriver.toLowerCase() === name.toLowerCase()});
    return matches;
  }

function fuzzyMatch(drivers, letters){
    let filteredDrivers = drivers.filter(function (item){return item.slice(0, 1) === letters.slice(0, 1)});
    return filteredDrivers
}

function matchName(drivers, name){
    let matchFound = drivers.filter(function (item){return item.name === name})
    return matchFound
}