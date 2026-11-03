document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("search");
  const result = document.getElementById("result");

  function searchHeroes() {
    // encodeURIComponent keeps the query string safe; PHP sanitizes on its side too
    const query = encodeURIComponent(searchInput.value.trim());

    fetch("superheroes.php?query=" + query)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Request failed: " + response.status);
        }
        return response.text();
      })
      .then(function (html) {
        result.innerHTML = html;
      })
      .catch(function (error) {
        result.innerHTML = "<p class=\"not-found\">Something went wrong. Please try again.</p>";
        console.error(error);
      });
  }

  searchBtn.addEventListener("click", searchHeroes);
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") searchHeroes();
  });
});
