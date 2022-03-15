function checkLogin() {
    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    if(name=="john" && pass=="1234") {
        window.location.href = "dashboard.html";
    } 
    else {
        alert("Wrong user name or password!");
    }
}

function showLogs() {
    window.location.href = "logs.html";
}

function showDashboard() {
    window.location.href = "dashboard.html";
}
const dashboard = [
    ["TV", "00:1B:44:11:3A:B7", "127.0.0.2", "2021-05-31", "50"],
    ["Washer", "00:1B:44:11:3A:B8", "127.0.0.3", "2021-05-31", "60"],
    ["Refrigerator", "00:1B:44:11:3A:B9", "127.0.0.4", "2021-05-31", "80"],
    ["Selling Fan", "00:1B:44:11:3A:B2", "127.0.0.5", "2021-05-31", "100"]
];
function insertTableData() {
    var table = document.getElementById("device");
    var length = dashboard.length;
    for(var i=length-1; i>=0; i--) {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = dashboard[i][0];
        cell2.innerHTML = dashboard[i][1];
        cell3.innerHTML = dashboard[i][2];
        cell4.innerHTML = dashboard[i][3];
        cell5.innerHTML = dashboard[i][4];
    }
}

function createChart() {
    const data = {
        labels: [
          'TV',
          'Washer',
          'Refrigerator',
          'Selling Fan'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [50, 60, 80, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(245, 172, 37)',
            'rgb(255, 205, 86)',
            'rgb(54, 162, 235)'
          ],
          hoverOffset: 4
        }]
      };
    
      const config = {
      type: 'doughnut',
      data: data,
    };
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}

function loadingPageDashboard() {
    createChart();
    insertTableData();
}

function addDevice() {
    var device = document.getElementById("deviceName").value;
    var ip = document.getElementById("ip").value;
    if(device!=""&&ip!="") {
        var table = document.getElementById("device");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = device;
        cell2.innerHTML = "";
        cell3.innerHTML = ip;
        row.insertCell(3).innerHTML = "";
        row.insertCell(4).innerHTML = "";
    }
    else {
        alert("Invalid data!");
    }
}
const dataLogs = [
    ["101","TV", "Turn On", "124689"],
    ["102","Washer", "Sleep", "124689"],
    ["103","Selling Fan", "Turn Off", "124689"],
    ["104","TV", "Turn Off", "124689"],
    ["105","TV", "Turn On", "124689"],
    ["106","Washer", "Sleep", "124689"],
    ["107","Selling Fan", "Turn Off", "124689"],
    ["108","TV", "Turn Off", "124689"],
    ["109","TV", "Turn On", "124689"],
    ["110","Washer", "Sleep", "124689"],
    ["111","Selling Fan", "Turn Off", "124689"],
    ["112","TV", "Turn Off", "124689"],
    ["113","TV", "Turn On", "124689"],
    ["114","Washer", "Sleep", "124689"],
    ["115","Selling Fan", "Turn Off", "124689"],
    ["116","TV", "Turn Off", "124689"],
    ["117","TV", "Turn On", "124689"],
    ["118","Washer", "Sleep", "124689"],
    ["119","Selling Fan", "Turn Off", "124689"],
    ["120","TV", "Turn Off", "124689"],
    ["121","TV", "Turn On", "124689"],
    ["122","Washer", "Sleep", "124689"],
    ["123","Selling Fan", "Turn Off", "124689"],
    ["124","TV", "Turn On", "124689"],
    ["125","Washer", "Sleep", "124689"],
    ["126","Selling Fan", "Turn Off", "124689"],
    ["127","TV", "Turn On", "124689"],
];
function loadingPageLogs() {
    addPageBtn(dataLogs);
    paginationTable(1, dataLogs);
}
function searchByName() {

    //Delete all data in table
    var myTable = document.getElementById("logs-table");
    for(var i=1; i<myTable.rows.length; i++) {
        myTable.deleteRow(i);
        i--;
    }
    //Remove button page
    btns = document.getElementsByClassName("block-detail-data-page-btn");
    for(var i=0; i<btns.length; i++) {
        btns[i].remove();
        i--;
    }

    //Get result of search and count (number of results)
    var name = document.getElementById("search").value;
    length = dataLogs.length;
    result = [];
    var count = 0;
    for(var i=0; i<length; i++) {
        if(dataLogs[i][1] == name) {
            result[count] = dataLogs[i];
            count++;
        }
    }
    //Insert data and button
    paginationTable(1,result);
    addPageBtn(result);
}
function paginationTable(currentPage, tableData) {
    //Set opacity for curren page button
    btns = document.getElementsByClassName("block-detail-data-page-btn");
    for(var i=0; i<btns.length; i++) {
        if(i==currentPage-1) {
            btns[i].style.opacity = "0.5";
        }
        else btns[i].style.opacity = "1";
    }

    //Delete all current data in table
    var table = document.getElementById("logs-table");
    for(var i=1; i<table.rows.length; i++) {
        table.deleteRow(i);
        i--;
    }

    //Show data from tableData to screen
    var maxLenght = 12;
    var length = tableData.length;
    var start = (currentPage-1)*maxLenght;
    var end = currentPage*maxLenght;
    if(end > length) {
        end = length;
    }
    for(var i=end-1; i>=start; i--) {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = tableData[i][0];
        cell2.innerHTML = tableData[i][1];
        cell3.innerHTML = tableData[i][2];
        cell4.innerHTML = tableData[i][3];
    }
}
function addPageBtn(tableData) {

    //Cal number of pages
    var length = tableData.length;
    var maxLenght = 12;
    var numberOfPages = length/maxLenght + 1;
    if(length%maxLenght==0) {
        numberOfPages = length/maxLenght;
    }
    numberOfPages = parseInt(numberOfPages);

    //Add the button base on number of pages
    for(var i=0; i<numberOfPages;i++) {
        let button = document.createElement("button");
        button.className = "block-detail-data-page-btn";
        button.id = (i+1);
        button.innerHTML = i+1;
        button.onclick = function() {
            paginationTable(button.id, tableData);
        };
        var div = document.getElementById("page");
        div.appendChild(button);
    }
}