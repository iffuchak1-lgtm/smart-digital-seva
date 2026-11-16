const searchInput = document.getElementById("search");
const services = document.querySelectorAll(".service");

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();

  services.forEach(function (service) {
    const serviceName = service.textContent.toLowerCase();

    if (serviceName.includes(searchText)) {
      service.style.display = "block";
    } else {
      service.style.display = "none";
    }
  });
});