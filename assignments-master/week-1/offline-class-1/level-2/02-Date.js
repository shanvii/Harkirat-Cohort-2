function dateMethods() {
  const currentDate = new Date();

  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getYear() + 1900);
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);


  // The Unix epoch is a specific point in time used as a reference point for timekeeping in computing, 
  // and it is set to:
  // January 1, 1970, 00:00:00 UTC
  // This point in time is significant because it serves as the "zero" time for Unix-based systems.
  const checkDate = new Date(1970, 1, 1);
  console.log("New Date:", checkDate);
  console.log("Time in milliseconds since 1970:", checkDate.getTime());
}

// Example Usage for Date Methods
dateMethods();
