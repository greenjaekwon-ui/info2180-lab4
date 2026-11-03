document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("searchBtn").addEventListener("click", function () {
    fetch("superheroes.php")
      .then(function (response) { return response.text(); })
      .then(function (html) { alert(html); });
  });
});