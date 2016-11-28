function httpGetAsync(theUrl, callback)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        xmlHttp.send(null);
    }



var myList=[
  {
    "id": "12345678",
    "KwhAmount": "0.4",
    "PriceKwh": "0.22",
    "TimeStart": "1436260149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": true
  },
  {
    "id": "83028494",
    "KwhAmount": "0.2",
    "PriceKwh": "0.12",
    "TimeStart": "1436270149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": true
  },
  {
    "id": "83947265",
    "KwhAmount": "0.3",
    "PriceKwh": "0.13",
    "TimeStart": "1436280149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": false
  },
  {
    "id": "49581029",
    "KwhAmount": "0.7",
    "PriceKwh": "0.14",
    "TimeStart": "1436290149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": false
  },
  {
    "id": "38495067",
    "KwhAmount": "1.5",
    "PriceKwh": "0.15",
    "TimeStart": "1436300149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": false
  },
  {
    "id": "34598727",
    "KwhAmount": "2.3",
    "PriceKwh": "0.12",
    "TimeStart": "1436310149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": true
  },
  {
    "id": "98754317",
    "KwhAmount": "1.3",
    "PriceKwh": "0.32",
    "TimeStart": "1436320149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": false
  },
  {
    "id": "67841276",
    "KwhAmount": "0.6",
    "PriceKwh": "0.14",
    "TimeStart": "1436330149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": true
  },
  {
    "id": "34578925",
    "KwhAmount": "0.7",
    "PriceKwh": "0.15",
    "TimeStart": "1436340149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": true
  },
  {
    "id": "41568767",
    "KwhAmount": "0.5",
    "PriceKwh": "0.13",
    "TimeStart": "1436350149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": true
  },
  {
    "id": "52367856",
    "KwhAmount": "0.9",
    "PriceKwh": "0.17",
    "TimeStart": "1436360149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": true
  },
  {
    "id": "65342187",
    "KwhAmount": "0.2",
    "PriceKwh": "0.13",
    "TimeStart": "1436370149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": true
  },
  {
    "id": "17638987",
    "KwhAmount": "1.5",
    "PriceKwh": "0.19",
    "TimeStart": "1436380149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": false
  },
  {
    "id": "77456232",
    "KwhAmount": "2.2",
    "PriceKwh": "0.16",
    "TimeStart": "1436390149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": false
  },
  {
    "id": "69987563",
    "KwhAmount": "1.2",
    "PriceKwh": "0.15",
    "TimeStart": "1436400149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": true
  },
  {
    "id": "66455342",
    "KwhAmount": "0.7",
    "PriceKwh": "0.15",
    "TimeStart": "1436410149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": true
  },
  {
    "id": "33456745",
    "KwhAmount": "0.5",
    "PriceKwh": "0.12",
    "TimeStart": "1436420149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": true
  },
  {
    "id": "22246577",
    "KwhAmount": "0.7",
    "PriceKwh": "0.18",
    "TimeStart": "1436430149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": false
  },
  {
    "id": "39707668",
    "KwhAmount": "0.6",
    "PriceKwh": "0.12",
    "TimeStart": "1436440149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": true
  },
  {
    "id": "23654978",
    "KwhAmount": "0.8",
    "PriceKwh": "0.18",
    "TimeStart": "1436450149",
    "Duration": "800",
    "SellerId": "john1",
    "SoldBool": true
  }
];

function buildtime(unix_timestamp){
    var date = new Date(unix_timestamp*1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
    return formattedTime
}


// Builds the HTML Table out of myList json data from Ivy restful service.
 function buildHtmlTable() {
     var columns = addAllColumnHeaders(myList);
 
     for (var i = 0 ; i < myList.length ; i++) {
         var row$ = $('<tr/>');
         for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
             var cellValue = myList[i][columns[colIndex]];
 
             if (cellValue == null) { cellValue = ""; }
            if(colIndex == 3){
                row$.append($('<td/>').html(buildtime(cellValue)));

            }
            else{
             row$.append($('<td/>').html(cellValue));

            }
         }
         $("#excelDataTable").append(row$);
     }
 }
 
 // Adds a header row to the table and returns the set of columns.
 // Need to do union of keys from all records as some records may not contain
 // all records
 function addAllColumnHeaders(myList)
 {
     var columnSet = [];
     var headerTr$ = $('<tr/>');
 
     for (var i = 0 ; i < myList.length ; i++) {
         var rowHash = myList[i];
         for (var key in rowHash) {
             if ($.inArray(key, columnSet) == -1){
                 columnSet.push(key);
                 headerTr$.append($('<th/>').html(key));
             }
         }
     }
     $("#excelDataTable").append(headerTr$);
 
     return columnSet;
 }
