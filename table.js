$(document).ready(function() {
  $.getJSON("https://api.covid19india.org/data.json", function(data) {
    var x = "";
    $.each(data["statewise"], function(key, value) {
      if (value.state != "Total") {
        x += "<tr>";
        x += "<td data-title='State' > " + value.state + "</td>";
        x += "<td data-title='Confirmed'>" + value.confirmed + "</td>";
        x += "<td data-title='death'>" + value.deaths + "</td>";
        x += "<td data-title='recovered'>" + value.recovered + "</td>";
        x +=
          "<td data-title='last updated time'>" +
          value.lastupdatedtime +
          "</td>";
      }
    });
    $("#table").append(x);
  });
});

// total 
$(document).ready(function() {
  $.getJSON("https://api.covid19india.org/data.json", function (data) {
    
      $.each(data["statewise"], function (key, value) {
        if (value.state == "Total") {
          $("#Confirmed").append(value.confirmed);
          $("#Today_Confirmed").append(value.deltaconfirmed);
          $("#Death").append(value.deaths);
          $("#Today_Death").append(value.deltadeaths);
          $("#Recovered").append(value.recovered);
          $("#Today_Recovered").append(value.deltarecovered);
          $("#Updated").append(value.lastupdatedtime);
        }
      });
    
    
  });
});

