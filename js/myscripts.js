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
    }
    else {
        alert("Invalid data!");
    }
}