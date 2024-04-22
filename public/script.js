// $(document).ready(function () {
//   $.getJSON('/data', function (data) {
//     const tableContainer = $('#table-container');
//     const table = $('<table>');
//     const tableHeader = $('<tr>');
//     tableHeader.html('<th>ID</th><th>Manufacturer</th><th>Model</th><th>Year</th><th>Image</th>');
//     table.append(tableHeader);
//     $.each(data, function (index, car) {
//       const row = $('<tr>');
//       row.html(`<td>${car.id}</td><td>${car.manufacturer}</td><td>${car.model}</td><td>${car.year}</td><td><img src="${car.image}" alt="${car.manufacturer} ${car.model}" style="max-width: 100px;"></td>`);
//       table.append(row);
//     });
//     tableContainer.append(table);
//   }).fail(function (jqXHR, textStatus, errorThrown) {
//     console.error('Error fetching data:', errorThrown);
//   });
// });



// $(document).ready(function () {
//   $.getJSON('/data', function (data) {
//     const tableBody = $('#car-table-body');
//     data.forEach(car => {
//       const row = $('<tr>');
//       row.html(`<td>${car.id}</td><td>${car.manufacturer}</td><td>${car.model}</td><td>${car.year}</td><td><img src="${car.image}" alt="${car.manufacturer} ${car.model}" style="max-width: 100px;"></td>`);
//       tableBody.append(row);
//     });
//   }).fail(function (jqXHR, textStatus, errorThrown) {
//     console.error('Error fetching data:', errorThrown);
//   });
// });


// 2nd segment of code
$(document).ready(function () {

  function createTable(data) {
    const tableBody = $('#car-table-body');
    tableBody.empty();

    data.forEach(car => {
      const row = $('<tr>');
      row.html(`<td>${car.id}</td><td>${car.manufacturer}</td><td>${car.model}</td><td>${car.year}</td><td><img src="${car.image}" alt="${car.manufacturer} ${car.model}" style="max-width: 100px;"></td>`);
      tableBody.append(row);
    });
  }

//  1st segment data fech
  $.getJSON('/data', function (data) {
    createTable(data);
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.error('Error fetching data:', errorThrown);
  });

// 3rd segment
  $('#submitBtn').click(function () {
    const model = $('#modelInput').val().trim();
    if (model !== '') {
      // Filter JSON data based on model
      $.getJSON('/data', function (data) {
        const filteredData = data.filter(car => car.model.toLowerCase() === model.toLowerCase());
        createTable(filteredData); // Update table with filtered data
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.error('Error fetching data:', errorThrown);
      });
    }
  });
});
