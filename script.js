document.getElementById("absensiForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    var nama = document.getElementById("nama").value;
    var tanggal = document.getElementById("tanggal").value;
  
    var listItem = document.createElement("li");
    listItem.innerHTML = "<strong>" + nama + "</strong> - " + tanggal;
  
    document.getElementById("daftarAbsensi").appendChild(listItem);
  
    document.getElementById("absensiForm").reset();
  });
  