// Create a car object with properties for Make, Model, Year, Mileage, and Color
const car = {
    make: 'Acura',
    model: 'TLX',
    year: 2020,
    mileage: 2000,
    color: 'Silver',
  
    // Create a method for driving to work and adding miles to the car's mileage property
    driveToWork: function() {
      const oldMileage = this.mileage; // Store the current mileage
      const newMileage = oldMileage + 33; // Add 33 miles to the current mileage
      this.mileage = newMileage; // Update the car's mileage property with the new mileage
      console.log(`Old mileage: ${oldMileage} | New mileage: ${newMileage}`); // Log the old and new mileage
    },
  
    // Create a method for driving around the world and adding miles to the car's mileage property
    driveAroundTheWorld: function() {
      const oldMileage = this.mileage; // Store the current mileage
      const newMileage = oldMileage + 24000; // Add 24000 miles to the current mileage
      this.mileage = newMileage; // Update the car's mileage property with the new mileage
      console.log(`Old mileage: ${oldMileage} | New mileage: ${newMileage}`); // Log the old and new mileage
    },
  
    // Create a method for running errands and adding miles to the car's mileage property
    runErrands: function() {
      const oldMileage = this.mileage; // Store the current mileage
      const newMileage = oldMileage + 30; // Add 30 miles to the current mileage
      this.mileage = newMileage; // Update the car's mileage property with the new mileage
      console.log(`Old mileage: ${oldMileage} | New mileage: ${newMileage}`); // Log the old and new mileage
    }
  };
  
  car.driveToWork(); // Output: old mileage: 2000 | new mileage: 2033
  car.driveAroundTheWorld(); // Output: old mileage: 2033 | new mileage: 26033
  car.runErrands(); // Output: old mileage: 26033 | new mileage: 26063
    