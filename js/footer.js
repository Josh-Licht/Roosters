function createOpeningHoursTable() {
  // Create the table element
  var table = document.createElement('table');
  table.className = 'table foot-hours';

  // Create the table body element
  var tbody = document.createElement('tbody');

  // Define the opening hours data
  var openingHours = [
    'Thursday: 4:00 pm - 9:00 pm',
    'Friday: 4:00 pm - 1:00 am',
    'Saturday: 12:00 pm - 1:00 am',
    'Sunday: 12:00 pm - 7:00 pm'
  ];

  // Loop through the opening hours data and create table rows
  for (var i = 0; i < openingHours.length; i++) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = openingHours[i];
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  // Append the table body to the table element
  table.appendChild(tbody);

  return table;
}

// Find the existing table element by class name
var existingTable = document.querySelector('.table.foot-hours');

// Check if the table was found
if (existingTable) {
  // Call the function to create the table and append it to the existing table
  var newTable = createOpeningHoursTable();
  existingTable.parentNode.replaceChild(newTable, existingTable);
} else {
  console.log('Table element with class "table foot-hours" not found.');
}