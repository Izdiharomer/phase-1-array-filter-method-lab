

  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
 
  function findMatching(drivers, name) {
  const lowercaseName = name.toLowerCase();
  return drivers.filter(driver => driver.toLowerCase() === lowercaseName);
}

  function fuzzyMatch(drivers, letters) {
    const pattern = new RegExp(`^${letters}`, 'i');
    return drivers.filter(driver => pattern.test(driver));
  }
  findMatching()

  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  



