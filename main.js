(async () => {
    let data;
    await fetch('./data.json', {mode: 'no-cors'})
    .then((response) => response.json())
    .then((json) => data = json);

    document.getElementById("reaction-score").innerHTML = data[0]["score"] + " <span>/ 100</span>";
    document.getElementById("memory-score").innerHTML = data[1]["score"] + " <span>/ 100</span>";
    document.getElementById("verbal-score").innerHTML = data[2]["score"] + " <span>/ 100</span>";
    document.getElementById("visual-score").innerHTML = data[3]["score"] + " <span>/ 100</span>";
})();