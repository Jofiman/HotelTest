$(document).ready(function () {
     $('#load-hotels').click(function () {
            var showData = $('#show-data');
         $.ajax({
             url: 'http://fake-hotel-api.herokuapp.com/api/hotels',
             type: 'GET',
             data: data,
             dataType: 'json',
             success: function (data) {
                 console.log(data);
                 var items = [];
                 var name = data[1].name;
                 var id = data[1].id;
                 var country = data[1].country;
                 var city = data[1].city;
                 var img = data[1].images;
                 $('<p/>', {
                     html: name + '<br/> ' + id + ' <br/>' + country + '<br/> ' + city + ' <br/>' + img
                  }).appendTo('#showData');
                  $.each( data, function( key, val ) {
                    items.push( '<li id=\'' + key + '\'>' + val + '</li>' );
                  });

                  $( '<ul/>', {
                    'class': 'my-new-list',
                    html: items.join( '' )
                  }).appendTo( '#showData' );
                 },
                 error: function () {
                     console.log('Error in Operation');
                 }
            });
//         $.getJSON('http://fake-hotel-api.herokuapp.com/api/hotels', function (data) {
//          console.log(data[0].name);
//             var items = [];
//             var name = data[1].name;
//             var id = data[1].id;
//             var country = data[1].country;
//             var city = data[1].city;
//             var img = data[1].images;
//             $("<p/>", {
//                 html: name + "<br/> " + id + " <br/>" + country + "<br/> " + city + " <br/>" + img
//              }).appendTo("#showData");
//              $.each( data, function( key, val ) {
//                items.push( "<li id='" + key + "'>" + val + "</li>" );
//              });
//              
//              $( "<ul/>", {
//                "class": "my-new-list",
//                html: items.join( "" )
//              }).appendTo( "#showData" );
//        });
     });
 });
