var data;
const currentUrl = window.location;

(async () => {
    await fetch('./data.json', {mode: 'no-cors', headers: {'Content-Type': 'application/json'}})
    .then((response) => response.json())
    .then((json) => data = json);

    console.log(data);
})();