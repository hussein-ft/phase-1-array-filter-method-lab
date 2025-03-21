// Function to find drivers with exact name match (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find drivers whose names start with the provided letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // Function to find driver objects with a matching name property
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  const drivers = ['Alice', 'Bob', 'Charlie', 'alice'];
  const driverObjects = [
    { name: 'Alice', hometown: 'Seattle' },
    { name: 'Bob', hometown: 'Denver' },
    { name: 'Charlie', hometown: 'New York' },
    { name: 'alice', hometown: 'Los Angeles' }
  ];
  
  console.log(findMatching(drivers, 'alice'));
  // Output: ['Alice', 'alice']
  
  console.log(fuzzyMatch(drivers, 'Al'));
  // Output: ['Alice', 'alice']
  
  console.log(matchName(driverObjects, 'alice'));
  // Output: [{ name: 'Alice', hometown: 'Seattle' }, { name: 'alice', hometown: 'Los Angeles' }]
    
