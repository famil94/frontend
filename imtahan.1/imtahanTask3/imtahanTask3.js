axios.get('https://restcountries.com/v3.1/name/azerbaijan')
.then(response => {
    const country = response.data[0];
    const name = country.name.common;
    const flag = country.flags.png;
    const area = country.area;
    const capital = country.capital[0];
    const coatOfArms = country.flags.svg;

    const countryInfo = `
        <h2>${name}</h2>
        <img src="${flag}" alt="Flag of ${name}" style="width: 200px; height: auto;">
        <p><strong>Sahə:</strong> ${area} km²</p>
        <p><strong>Paytaxt:</strong> ${capital}</p>
        <img src="${coatOfArms}" alt="Coat of Arms of ${name}" style="width: 200px; height: auto;">
    `;

    document.getElementById('country-info').innerHTML = countryInfo;
})
.catch(error => {
    console.log ('fetching country data:');
});