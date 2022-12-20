const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sport = urlParams.get('sport'); // sport=boxing or kickboxing based on the URL

const sports_title = document.getElementById("sports_title");
sports_title.innerHTML = sport + " level";