// const request = new XMLHttpRequest();

const container = document.querySelector(".container_country");
const search_input = document.querySelector(".search");
const search_btn = document.querySelector(".button");

// search_btn.addEventListener("click", function () {
// let search_country = search_input.value;

//   request.open("GET", `https://restcountries.com/v2/name/${search_country}`);
//   request.send();
//   request.addEventListener("load", function () {
//     request.responseText;

//     const [data] = JSON.parse(request.responseText);
//     console.log(data);

//     const html = `
//         <article>
//           <div class="img_container">
//             <img src="${data.flag}" alt="" />
//           </div>
//           <h1 class="country_name">${data.name}</h1>
//           <h2 class="country_row">Capital: ${data.capital}</h2>
//           <h2 class="country_row">Region: ${data.region}</h2>
//           <h2 class="country_row">Language: ${data.languages[0].name}</h2>
//           <h2 class="country_row">Population: ${data.population}</h2>
//           <h2 class="country_row">Currencies:</h2>
//           <span>
//             <ul>
//               <li>symbol: ${data.currencies[0].symbol}</li>
//               <li>name: ${data.currencies[0].name}</li>
//               <li>code: ${data.currencies[0].code}</li>
//             </ul>
//           </span>
//         </article>`;

//     container.insertAdjacentHTML("beforeend", html);
//   });
// });

search_btn.addEventListener("click", function () {
  let search_country = search_input.value;

  const countryData = function () {
    fetch(`https://restcountries.com/v2/name/${search_country}`)
      .then(function (Response) {
        console.log(Response);
        return Response.json();
      })
      .then(function (completeData) {
        console.log(completeData);
        let data1 = "";
        completeData.map(function (data) {
          data1 = `
          <div class="img_container">
            <img src="${data.flag}" alt="" />
          </div>
          <h1 class="country_name">${data.name}</h1>
          <h2 class="country_row">Capital: ${data.capital}</h2>
          <h2 class="country_row">Region: ${data.region}</h2>
          <h2 class="country_row">Language: ${data.languages[0].name}</h2>
          <h2 class="country_row">Population: ${data.population}</h2>
          <h2 class="country_row">Currencies:</h2>
          <span>
            <ul>
              <li>symbol: ${data.currencies[0].symbol}</li>
              <li>name: ${data.currencies[0].name}</li>
              <li>code: ${data.currencies[0].code}</li>
            </ul>
          </span>
        `;
          container.innerHTML = data1;
        });
      });
  };
  countryData();
});
