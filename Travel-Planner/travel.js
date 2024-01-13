let mytrips = document.querySelector(".trips");
let home = document.querySelector(".home");
let speechreco = document.querySelector(".talking");
let budgeting = document.querySelector(".budget");
home.addEventListener("click", () => {
  document.querySelector(".right2").style.display = "block";
  document.querySelector(".middle").style.display = "block";
  document.querySelector(".mytrips").style.display = "none";
  document.querySelector(".speechrecoganition").style.display = "none";
  document.querySelector(".budgetfeature").style.display = "none";
});
mytrips.addEventListener("click", () => {
  document.querySelector(".right2").style.display = "none";
  document.querySelector(".middle").style.display = "none";
  document.querySelector(".speechrecoganition").style.display = "none";
  document.querySelector(".mytrips").style.display = "flex";
  document.querySelector(".budgetfeature").style.display = "none";
});
speechreco.addEventListener("click", () => {
  document.querySelector(".right2").style.display = "none";
  document.querySelector(".middle").style.display = "none";
  document.querySelector(".speechrecoganition").style.display = "flex";
  document.querySelector(".mytrips").style.display = "none";
  document.querySelector(".budgetfeature").style.display = "none";
});
budgeting.addEventListener("click", () => {
  document.querySelector(".right2").style.display = "none";
  document.querySelector(".middle").style.display = "none";
  document.querySelector(".speechrecoganition").style.display = "none";
  document.querySelector(".mytrips").style.display = "none";
  document.querySelector(".budgetfeature").style.display = "flex";
});
let popularstays = document.querySelector(".poularstays");
let yourstays = document.querySelector(".youplaces");
function formValidation() {
  let buttonup = document.querySelector(".buttonup");
  buttonup.addEventListener("click", () => {
    let toggle = 1;
    let username = document.querySelector("#usernameup").value;
    let password = document.querySelector("#passwordup").value;
    let confirm = document.querySelector("#confirm").value;
    let keysarr = [];
    if (localStorage.length != 0) {
      for (let i = 0; i < localStorage.length; i++) {
        keysarr.push(localStorage.key(i));
      }
    }
    if (keysarr.includes(username)) {
      document.querySelector("#usernameup").value = "";
      document.querySelector("#passwordup").value = "";
      document.querySelector("#confirm").value = "";
      alert("Username is already taken");
      toggle = 0;
    } else {
    }
    console.log(password, confirm);
    if (password != confirm) {
      document.querySelector("#confirm").value = "";
      alert("Passwords do not match. Please check again.");
      toggle = 0;
    }
    if (toggle) {
      localStorage.setItem(username, password);
      alert("Registration successful!");
    }
  });

  let signinbtn = document.querySelector(".signin");
  let buttonin = document.querySelector(".buttonin");
  signinbtn.addEventListener("click", signinfunc);
  function signinfunc() {
    document.querySelector("#signinform").style.display = "flex";
    console.log("signind in called");
    buttonin.addEventListener("click", () => {
      let username = document.querySelector("#usernamein").value;
      let password = document.querySelector("#passwordin").value;

      let keysarr = [];
      if (localStorage.length != 0) {
        for (let i = 0; i < localStorage.length; i++) {
          keysarr.push(localStorage.key(i));
        }
      }

      console.log(keysarr);
      if (keysarr.includes(username)) {
      } else {
        document.querySelector("#usernamein").value = "";
        document.querySelector("#passwordin").value = "";
        alert("Wrong credentials");
        return;
      }

      let value = localStorage.getItem(username);
      console.log(localStorage.getItem(username));
      if (password !== value) {
        document.querySelector("#usernamein").value = "";
        document.querySelector("#passwordin").value = "";
        alert("Wrong credentials");
        return;
      }
      alert("Signed in Succesfully");
    });
  }

  let forgotbtn = document.querySelector(".forgot");
  forgotbtn.addEventListener("click", () => {
    document.querySelector(".forgotform").style.display = "flex";
  });
  let forgotform = document.querySelector(".forgotform");
  let forgotsubmit = document.querySelector(".forgotform form div");
  forgotsubmit.addEventListener("click", () => {
    let input = document.querySelector("#forgotpassword").value;
    let keysarr = [];
    if (localStorage.length != 0) {
      for (let i = 0; i < localStorage.length; i++) {
        keysarr.push(localStorage.key(i));
      }
    }
    console.log(input, keysarr);
    if (keysarr.includes(input)) {
    } else {
      document.querySelector(".forgotform").style.display = "none";
      document.querySelector("#forgotpassword").value = "";
      alert("Wrong credentials");
      return;
    }
    let yourpassword = localStorage.getItem(input);
    alert(`Your forgooten Password (${yourpassword})`);
    document.querySelector(".forgotform").style.display = "none";
  });
}
formValidation();
// ===> --------------------------------------------------------------------------------------a
function getLang() {
  const languages = [
    "Afrikaans",
    "Akan",
    "Albanian",
    "Amharic",
    "Arabic",
    "Armenian",
    "Assamese",
    "Aymara",
    "Azerbaijani",
    "Bambara",
    "Bangla",
    "Basque",
    "Belarusian",
    "Bhojpuri",
    "Bosnian",
    "Bulgarian",
    "Burmese",
    "Catalan",
    "Cebuano",
    "Central Kurdish",
    "Chinese (Simplified)",
    "Chinese (Traditional)",
    "Corsican",
    "Croatian",
    "Czech",
    "Danish",
    "Divehi",
    "Dogri",
    "Dutch",
    "English",
    "Esperanto",
    "Estonian",
    "Ewe",
    "Filipino",
    "Finnish",
    "French",
    "Galician",
    "Ganda",
    "Georgian",
    "German",
    "Goan Konkani",
    "Greek",
    "Guarani",
    "Gujarati",
    "Haitian Creole",
    "Hausa",
    "Hawaiian",
    "Hebrew",
    "Hindi",
    "Hmong",
    "Hungarian",
    "Icelandic",
    "Igbo",
    "Iloko",
    "Indonesian",
    "Irish",
    "Italian",
    "Japanese",
    "Javanese",
    "Kannada",
    "Kazakh",
    "Khmer",
    "Kinyarwanda",
    "Korean",
    "Krio",
    "Kurdish",
    "Kyrgyz",
    "Lao",
    "Latin",
    "Latvian",
    "Lingala",
    "Lithuanian",
    "Luxembourgish",
    "Macedonian",
    "Maithili",
    "Malagasy",
    "Malay",
    "Malayalam",
    "Maltese",
    "Manipuri (Meitei Mayek)",
    "Māori",
    "Marathi",
    "Mizo",
    "Mongolian",
    "Nepali",
    "Northern Sotho",
    "Norwegian",
    "Nyanja",
    "Odia",
    "Oromo",
    "Pashto",
    "Persian",
    "Polish",
    "Portuguese",
    "Punjabi",
    "Quechua",
    "Romanian",
    "Russian",
    "Samoan",
    "Sanskrit",
    "Scottish Gaelic",
    "Serbian",
    "Shona",
    "Sindhi",
    "Sinhala",
    "Slovak",
    "Slovenian",
    "Somali",
    "Southern Sotho",
    "Spanish",
    "Sundanese",
    "Swahili",
    "Swedish",
    "Tajik",
    "Tamil",
    "Tatar",
    "Telugu",
    "Thai",
    "Tigrinya",
    "Tsonga",
    "Turkish",
    "Turkmen",
    "Ukrainian",
    "Urdu",
    "Uyghur",
    "Uzbek",
    "Vietnamese",
    "Welsh",
    "Western Frisian",
    "Xhosa",
    "Yiddish",
    "Yoruba",
    "Zulu",
  ];

  let selectlang = document.querySelector("#language");
  for (let i = 0; i < languages.length; i++) {
    let option = document.createElement("option");
    option.textContent = languages[i];
    option.value = languages[i];
    selectlang.appendChild(option);
  }

  const tripPurposes = [
    "Business Meeting",
    "Family Reunion",
    "Sightseeing and Exploration",
    "Adventure Travel",
    "Relaxation and Wellness",
    "Cultural Experience",
    "Special Occasion",
    "Educational Trips",
    "Sports Event",
  ];

  let selectpurp = document.querySelector("#purposeoftrip");
  for (let i = 0; i < tripPurposes.length; i++) {
    let option = document.createElement("option");
    option.textContent = tripPurposes[i];
    option.value = tripPurposes[i];
    selectpurp.appendChild(option);
  }
}
getLang();
///////////////////////////////////////////////////////////////////////////////////////
getname();
let image = document.querySelector("#image");
image.addEventListener("click", () => {
  let placename = document.querySelector(".searchbar input").value;
  popularstays.innerHTML = " ";
  yourstays.innerHTML = " ";
  getname(placename);
});
async function getname(placename) {
  const url1 = `https://booking-com.p.rapidapi.com/v1/hotels/locations?name=${placename}&locale=en-gb`;
  const options1 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6eafc8b0b0msh92c371279d34723p1eaad6jsndcceacc611da",
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
  };
  let response1;
  let result1;
  try {
    response1 = await fetch(url1, options1);
    result1 = await response1.json();
    console.log(result1);
  } catch (error) {
    console.error(error);
  }
  let destid = result1[0].dest_id;
  let desttype = result1[0].dest_type;

  const url = "https://tourist-attraction.p.rapidapi.com/typeahead";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "6eafc8b0b0msh92c371279d34723p1eaad6jsndcceacc611da",
      "X-RapidAPI-Host": "tourist-attraction.p.rapidapi.com",
    },
    body: new URLSearchParams({
      q: `${placename}`,
      language: "en_US",
    }),
  };
  let resp, res;
  try {
    resp = await fetch(url, options);
    res = await resp.json();
    console.log(res, "l");
  } catch (error) {
    console.error(error);
  }
  let location_id = res.results.data[0].result_object.location_id;
  getpro(destid, desttype, location_id);
}
getpro();
async function getpro(dest_id, dest_type, location_id) {
  console.log(location_id);
  const url = `https://booking-com.p.rapidapi.com/v1/hotels/search?units=metric&dest_id=${dest_id}&dest_type=${dest_type}&room_number=1&checkin_date=2024-05-19&order_by=popularity&locale=en-gb&adults_number=2&checkout_date=2024-05-20&filter_by_currency=AED&page_number=0&children_number=2&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&include_adjacency=true`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6eafc8b0b0msh92c371279d34723p1eaad6jsndcceacc611da",
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
  };
  let response;
  let result;
  try {
    response = await fetch(url, options);
    result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  ///////////////////////////////////////////////////////////////////
  for (let i = 0; i < 20; i++) {
    let outer = document.createElement("div");
    outer.setAttribute(
      "style",
      "width:94%;height:94%;border: 1px solid yellow;position:relative; left:2%;top:2%;margin-bottom:4%;background-size:cover;background-repeat:norepeat"
    );
    popularstays.appendChild(outer);
    let bookhere = document.createElement("div");
    bookhere.setAttribute(
      "style",
      "width:45%;height:18%;border:1px solid red;position:absolute; bottom:-3%;right:-3%"
    );
    let link = document.createElement("a");
    link.textContent = "Book Now";
    link.href = result.result[i].url;
    bookhere.appendChild(link);
    outer.appendChild(bookhere);
    let upper = document.createElement("div");
    outer.appendChild(upper);
    upper.setAttribute(
      "style",
      "width:100%;height:30%;border:1px solid black;display:flex"
    );
    let left = document.createElement("div");
    left.setAttribute("style", "width:75%;height:100%;border:1px solid red");
    let right = document.createElement("div");
    right.setAttribute("style", "width:25%;height:100%;border:1px solid red");
    upper.appendChild(left);
    upper.appendChild(right);
    let name = document.createElement("div");
    let star = document.createElement("div");
    let address = document.createElement("div");
    left.appendChild(name);
    name.setAttribute(
      "style",
      "width:100%;height:40%;border:1px solid red;display:flex;flex-wrap:wrap"
    );
    left.appendChild(star);
    star.setAttribute("style", "width:100%;height:30%;border:1px solid red");
    left.appendChild(address);
    address.setAttribute("style", "width:100%;height:30%;border:1px solid red");
    let stardiv = document.createElement("div");
    let star1 = document.createElement("span");
    let star2 = document.createElement("span");
    let star3 = document.createElement("span");
    let star4 = document.createElement("span");
    let star5 = document.createElement("span");
    star1.classList.add("star");
    star2.classList.add("star");
    star3.classList.add("star");
    star4.classList.add("star");
    star5.classList.add("star");

    stardiv.appendChild(star1);
    stardiv.appendChild(star2);
    stardiv.appendChild(star3);
    stardiv.appendChild(star4);
    stardiv.appendChild(star5);
    address.appendChild(stardiv);

    name.textContent = result.result[i].hotel_name;
    let score = result.result[i].review_score;
    if (score / 2 < 1) {
      star1.classList.add("half-star");
      star2.innerHTML = `&#9734;`;
      star3.innerHTML = `&#9734;`;
      star4.innerHTML = `&#9734;`;
      star5.innerHTML = `&#9734;`;
    } else if (score / 2 == 1) {
      star1.innerHTML = `&#9733;`;
      star2.innerHTML = `&#9734;`;
      star3.innerHTML = `&#9734;`;
      star4.innerHTML = `&#9734;`;
      star5.innerHTML = `&#9734;`;
    } else if (score / 2 > 1 && score / 2 < 2) {
      star1.innerHTML = `&#9733;`;
      star2.classList.add("half-star");
      star3.innerHTML = `&#9734;`;
      star4.innerHTML = `&#9734;`;
      star5.innerHTML = `&#9734;`;
    } else if (score / 2 == 2) {
      star1.innerHTML = `&#9733;`;
      star2.innerHTML = `&#9733;`;
      star3.innerHTML = `&#9734;`;
      star4.innerHTML = `&#9734;`;
      star5.innerHTML = `&#9734;`;
    } else if (score / 2 > 2 && score / 2 < 3) {
      star1.innerHTML = `&#9733;`;
      star2.innerHTML = `&#9733;`;
      star3.classList.add("half-star");
      star4.innerHTML = `&#9734;`;
      star5.innerHTML = `&#9734;`;
    } else if (score / 2 == 3) {
      star1.innerHTML = `&#9733;`;
      star2.innerHTML = `&#9733;`;
      star3.innerHTML = `&#9733;`;
      star4.innerHTML = `&#9734;`;
      star5.innerHTML = `&#9734;`;
    } else if (score / 2 > 3 && score / 2 < 4) {
      star1.innerHTML = `&#9733;`;
      star2.innerHTML = `&#9733;`;
      star3.innerHTML = `&#9733;`;
      star4.classList.add("half-star");
      star5.innerHTML = `&#9734;`;
    } else if (score / 2 == 4) {
      star1.innerHTML = `&#9733;`;
      star2.innerHTML = `&#9733;`;
      star3.innerHTML = `&#9733;`;
      star4.innerHTML = `&#9733;`;
      star5.innerHTML = `&#9734;`;
    } else if (score / 2 > 4 && score / 2 < 5) {
      star1.innerHTML = `&#9733;`;
      star2.innerHTML = `&#9733;`;
      star3.innerHTML = `&#9733;`;
      star4.innerHTML = `&#9733;`;
      star5.classList.add("half-star");
    } else if (score / 2 == 5) {
      star1.innerHTML = `&#9733;`;
      star2.innerHTML = `&#9733;`;
      star3.innerHTML = `&#9733;`;
      star4.innerHTML = `&#9733;`;
      star5.innerHTML = `&#9733;`;
    }
    let backurl = result.result[i].max_photo_url;
    outer.style.backgroundImage = `url(${backurl})`;

    let price =
      result.result[i].composite_price_breakdown.net_amount.amount_rounded;
    right.textContent = price;

    let address1 = result.result[i].address;
    star.textContent = address1;
  }
  //////////////////////////////////////////////////////////////////////////////
  const url1 = "https://tourist-attraction.p.rapidapi.com/search";
  const options1 = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "6eafc8b0b0msh92c371279d34723p1eaad6jsndcceacc611da",
      "X-RapidAPI-Host": "tourist-attraction.p.rapidapi.com",
    },
    body: new URLSearchParams({
      location_id: `${location_id}`,
      language: "en_US",
      currency: "USD",
      offset: "0",
    }),
  };
  let response1;
  let result1;
  try {
    response1 = await fetch(url1, options1);
    result1 = await response1.json();
    console.log(result1);
  } catch (error) {
    console.error(error);
  }
  /////////////////////////////////////////////////////////////////////////////
  for (let i = 0; i < 20; i++) {
    let outer = document.createElement("div");
    outer.setAttribute(
      "style",
      "width:94%;height:94%;border: 1px solid yellow;position:relative; left:2%;top:2%;margin-bottom:4%;background-size:cover;background-repeat:norepeat"
    );
    yourstays.appendChild(outer);
    let bookhere = document.createElement("div");
    bookhere.setAttribute(
      "style",
      "width:45%;height:18%;border:1px solid red;position:absolute; bottom:-3%;right:-3%"
    );
    let link = document.createElement("a");
    link.textContent = "Explore Now";
    link.href = result1.results.data[i].website;
    bookhere.appendChild(link);
    outer.appendChild(bookhere);
    outer.appendChild(bookhere);
    let upper = document.createElement("div");
    outer.appendChild(upper);
    upper.setAttribute(
      "style",
      "width:100%;height:30%;border:1px solid black;display:flex"
    );
    let left = document.createElement("div");
    left.setAttribute("style", "width:75%;height:100%;border:1px solid red");
    let right = document.createElement("div");
    right.setAttribute("style", "width:25%;height:100%;border:1px solid red");
    upper.appendChild(left);
    upper.appendChild(right);
    let name = document.createElement("div");
    let star = document.createElement("div");
    let address = document.createElement("div");
    left.appendChild(name);
    name.setAttribute("style", "width:100%;height:40%;border:1px solid red");
    left.appendChild(star);
    star.setAttribute("style", "width:100%;height:30%;border:1px solid red");
    left.appendChild(address);
    address.setAttribute("style", "width:100%;height:30%;border:1px solid red");
    let stardiv = document.createElement("div");
    let star1 = document.createElement("span");
    let star2 = document.createElement("span");
    let star3 = document.createElement("span");
    let star4 = document.createElement("span");
    let star5 = document.createElement("span");
    star1.classList.add("star");
    star2.classList.add("star");
    star3.classList.add("star");
    star4.classList.add("star");
    star5.classList.add("star");
    stardiv.appendChild(star1);
    stardiv.appendChild(star2);
    stardiv.appendChild(star3);
    stardiv.appendChild(star4);
    stardiv.appendChild(star5);
    address.appendChild(stardiv);

    let backurl = result1.results.data[i].photo.images.medium.url;
    outer.style.backgroundImage = `url(${backurl})`;
    name.textContent = result1.results.data[i].name;
    star.textContent = result1.results.data[i].address;
    if (i != 1) {
      // right.textContent = result1.results.data[i].offer_group.lowest_price;
    }
    let score = result1.results.data[i].rating;
    if (score < 1) {
      star1.classList.add("half-star");
      star2.innerHTML = `&#9734;`;
      star3.innerHTML = `&#9734;`;
      star4.innerHTML = `&#9734;`;
      star5.innerHTML = `&#9734;`;
    } else if (score == 1) {
      star1.innerHTML = `&#9733;`;
      star2.innerHTML = `&#9734;`;
      star3.innerHTML = `&#9734;`;
      star4.innerHTML = `&#9734;`;
      star5.innerHTML = `&#9734;`;
    } else if (score > 1 && score < 2) {
      star1.innerHTML = `&#9733;`;
      star2.classList.add("half-star");
      star3.innerHTML = `&#9734;`;
      star4.innerHTML = `&#9734;`;
      star5.innerHTML = `&#9734;`;
    } else if (score == 2) {
      star1.innerHTML = `&#9733;`;
      star2.innerHTML = `&#9733;`;
      star3.innerHTML = `&#9734;`;
      star4.innerHTML = `&#9734;`;
      star5.innerHTML = `&#9734;`;
    } else if (score > 2 && score < 3) {
      star1.innerHTML = `&#9733;`;
      star2.innerHTML = `&#9733;`;
      star3.classList.add("half-star");
      star4.innerHTML = `&#9734;`;
      star5.innerHTML = `&#9734;`;
    } else if (score == 3) {
      star1.innerHTML = `&#9733;`;
      star2.innerHTML = `&#9733;`;
      star3.innerHTML = `&#9733;`;
      star4.innerHTML = `&#9734;`;
      star5.innerHTML = `&#9734;`;
    } else if (score > 3 && score < 4) {
      star1.innerHTML = `&#9733;`;
      star2.innerHTML = `&#9733;`;
      star3.innerHTML = `&#9733;`;
      star4.classList.add("half-star");
      star5.innerHTML = `&#9734;`;
    } else if (score == 4) {
      star1.innerHTML = `&#9733;`;
      star2.innerHTML = `&#9733;`;
      star3.innerHTML = `&#9733;`;
      star4.innerHTML = `&#9733;`;
      star5.innerHTML = `&#9734;`;
    } else if (score > 4 && score < 5) {
      star1.innerHTML = `&#9733;`;
      star2.innerHTML = `&#9733;`;
      star3.innerHTML = `&#9733;`;
      star4.innerHTML = `&#9733;`;
      star5.classList.add("half-star");
    } else if (score == 5) {
      star1.innerHTML = `&#9733;`;
      star2.innerHTML = `&#9733;`;

      star3.innerHTML = `&#9733;`;
      star4.innerHTML = `&#9733;`;
      star5.innerHTML = `&#9733;`;
    }
  }
  let coordinates = [];
  for (let i = 0; i < 20; i++) {
    coordinates.push(result.result[i].latitude);
    coordinates.push(result.result[i].longitude);
  }
  let coordinates1 = [];
  for (let i = 0; i < 20; i++) {
    coordinates1.push(result1.results.data[i].latitude);
    coordinates1.push(result1.results.data[i].longitude);
  }
  mapIntegration(coordinates, result, coordinates1, result1);
}
/////////////////////////////////////////////////////////////////////////////////
let map = L.map("map");
function mapIntegration(coordinates, result, coordinates1, result1) {
  let j = 0,
    k = 0;
  for (let i = 0; i < 40; i += 2) {
    map.setView([coordinates[i], coordinates[i + 1]], 12);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
      map
    );
    let name = result.result[j].hotel_name;
    L.marker([coordinates[i], coordinates[i + 1]], {
      icon: L.AwesomeMarkers.icon({
        markerColor: "red",
        prefix: "fa",
      }),
    })
      .addTo(map)
      .bindPopup(`${name}`);
    j++;
  }
  for (let i = 0; i < 40; i += 2) {
    map.setView([coordinates1[i], coordinates1[i + 1]], 12);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
      map
    );
    let name = result1.results.data[k].name;
    L.marker([coordinates1[i], coordinates1[i + 1]], {
      icon: L.AwesomeMarkers.icon({
        markerColor: "blue",
        prefix: "fa",
      }),
    })
      .addTo(map)
      .bindPopup(`${name}`);
    k++;
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let addbutton = document.querySelector(".addaplan");
let tripcontainer = document.querySelector(".containtrip");
addbutton.addEventListener("click", () => {
  let outer = document.createElement("div");
  let greet = document.createElement("div");
  greet.textContent = "Happy Journey";
  let upper = document.createElement("div");
  let desti = document.createElement("div");
  let night = document.createElement("div");
  upper.appendChild(desti);
  if (document.querySelector("#place").value == "") return;
  desti.textContent = document.querySelector("#place").value;
  document.querySelector("#place").value = "";
  upper.appendChild(night);
  let name = document.createElement("div");
  name.textContent = document.querySelector("#name").value;
  if ((document.querySelector("#name").value = "")) return;
  document.querySelector("#name").value = "";
  let arrive = document.createElement("div");
  let depart = document.createElement("div");
  let member = document.createElement("div");
  member.textContent = `Adults ${
    document.querySelector("#adults").value
  }  Child ${document.querySelector("#child").value}  Seniors ${
    document.querySelector("#senior").value
  }  Group Leader${document.querySelector("#leader").value} `;
  document.querySelector("#adults").value = "";
  document.querySelector("#child").value = "";
  document.querySelector("#senior").value = "";
  document.querySelector("#leader").value = "";
  let purpose = document.createElement("div");
  if (document.querySelector("#purposeoftrip") == "") {
    alert("Trip is not added");
    return;
  } else {
    purpose.textContent = document.querySelector("#purposeoftrip").value;
    document.querySelector("#purposeoftrip").value = "";
  }
  let language = document.createElement("div");
  if (document.querySelector("#language") == "") {
    alert("Trip is not added");
    return;
  } else {
    language.textContent = document.querySelector("#language").value;
    document.querySelector("#language").value = "";
  }
  outer.setAttribute(
    "style",
    "width:40%;height:45%;border:1px solid red;margin-top:2%"
  );
  let date1 = `${document.querySelector("#checkin").value[8]}${
    document.querySelector("#checkin").value[9]
  }`;
  let date2 = `${document.querySelector("#checkout").value[8]}${
    document.querySelector("#checkout").value[9]
  }`;
  let date3 = date1 - date2;
  if (date3 < 0) {
    date3 = date3 * -1;
  }
  night.textContent = date3;
  arrive.textContent = document.querySelector("#checkin").value;
  document.querySelector("#checkin").value = "";
  depart.textContent = document.querySelector("#checkout").value;
  document.querySelector("#checkout").value = "";
  tripcontainer.appendChild(outer);
  outer.appendChild(greet);
  outer.appendChild(greet);
  outer.appendChild(upper);
  outer.appendChild(name);
  outer.appendChild(purpose);
  outer.appendChild(language);
  outer.appendChild(arrive);
  outer.appendChild(depart);
  outer.appendChild(member);
});
///////////////////////////////////////////////////////////////////////////////////
let buttonright = document.querySelector(".rightbuton");
let buttonleft = document.querySelector(".leftbutton");
let getsourcelang = document.querySelector("#getlangtranslated");
let mylang = document.querySelector("#mytlangtranslated");
let flag = true;
buttonright.addEventListener("click", speech);
async function speech() {
  console.log(getLang);
  let reco = new window.webkitSpeechRecognition();
  reco.interimResults = false;
  reco.continuous = false;
  reco.start();
  reco.onstart = (e) => {
    buttonright.textContent = "Speaking...";
  };
  reco.onend = () => {
    buttonright.textContent = "YOU";
  };
  let text;
  reco.addEventListener("result", (event) => {
    console.log(event);
    getext(event);
    async function getext() {
      text = await event.results[0][0].transcript;
      console.log(text);
      if (getsourcelang.value == "") {
        alert("enter the language");
        return;
      }
      let lang = getsourcelang.value;
      console.log(lang);
      console.log(getLang.value);
      const url = "https://text-translator2.p.rapidapi.com/getLanguages";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "6eafc8b0b0msh92c371279d34723p1eaad6jsndcceacc611da",
          "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
        },
      };
      let response;
      let result;
      try {
        response = await fetch(url, options);
        result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
      let count = 0;
      const languagesArray = result.data.languages.map((language) => ({
        code: language.code,
        name: language.name,
      }));
      console.log(languagesArray);
      let code1;
      let code2;
      languagesArray.forEach((language) => {
        if (lang == language.name) {
          // getdata(language.code, text);
          code1 = language.code;
          flag = false;
        }
        count++;
      });
      languagesArray.forEach((language) => {
        if (mylang.value == language.name) {
          // getdata(language.code, text);
          code2 = language.code;
          flag = false;
        }
        count++;
      });
      if (count >= 110 && flag) {
        console.log();
        alert("Database donot support this language");
        return;
      }
      getdata(code1, code2, text);
    }
  });
}
async function getdata(code1, code2, text) {
  // console.log(lang, text, "aa gay");
  console.log(code1, code2);
  const url = "https://text-translator2.p.rapidapi.com/translate";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "6eafc8b0b0msh92c371279d34723p1eaad6jsndcceacc611da",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    body: new URLSearchParams({
      source_language: `${code2}`,
      target_language: `${code1}`,
      text: `${text}`,
    }),
  };
  let response1;
  let result1;
  try {
    response1 = await fetch(url, options);
    result1 = await response1.json();
    console.log(result1);
  } catch (error) {
    console.error(error);
  }
  let translatedtext = result1.data.translatedText;
  console.log(translatedtext);
  let para = document.createElement("p");
  para.textContent = translatedtext;
  para.style.textAlign = "right";
  document.querySelector(".text").appendChild(para);
}

buttonleft.addEventListener("click", speech2);
async function speech2() {
  let reco = new window.webkitSpeechRecognition();
  reco.interimResults = false;
  reco.continuous = false;
  reco.start();
  reco.onstart = (e) => {
    buttonleft.textContent = "Speaking...";
  };
  reco.onend = () => {
    buttonleft.textContent = "PEDESTRIANS";
  };
  let text;
  reco.addEventListener("result", (event) => {
    console.log(event);
    getext(event);
    async function getext() {
      text = await event.results[0][0].transcript;
      console.log(text);
      if (mylang.value == "") {
        alert("enter the language");
        return;
      }
      let lang = mylang.value;
      const url = "https://text-translator2.p.rapidapi.com/getLanguages";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "6eafc8b0b0msh92c371279d34723p1eaad6jsndcceacc611da",
          "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
        },
      };
      let response;
      let result;
      try {
        response = await fetch(url, options);
        result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
      let count = 0;
      const languagesArray = result.data.languages.map((language) => ({
        code: language.code,
        name: language.name,
      }));
      console.log(languagesArray);
      let code1, code2;
      let source = getsourcelang.value;
      languagesArray.forEach((language) => {
        console.log(lang);
        if (lang == language.name) {
          code1 = language.code;
          flag = false;
        }
        count++;
      });
      languagesArray.forEach((language) => {
        console.log(source);
        if (source == language.name) {
          console.log(language.code);
          code2 = language.code;
          flag = false;
        }
        // count++;
      });
      if (count >= 110 && flag) {
        console.log();
        alert("Database donot support this language");
        return;
      }
      getdata2(code1, code2, text);
    }
  });
}
async function getdata2(code1, code2, text) {
  console.log(code1, code2);
  const url = "https://text-translator2.p.rapidapi.com/translate";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "6eafc8b0b0msh92c371279d34723p1eaad6jsndcceacc611da",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    body: new URLSearchParams({
      source_language: `${code2}`,
      target_language: `${code1}`,
      text: `${text}`,
    }),
  };
  let response1;
  let result1;
  try {
    response1 = await fetch(url, options);
    result1 = await response1.json();
    console.log(result1);
  } catch (error) {
    console.error(error);
  }
  let translatedtext = result1.data.translatedText;
  console.log(translatedtext);
  let para = document.createElement("p");
  para.textContent = translatedtext;
  document.querySelector(".text").appendChild(para);
}
document.querySelector(".clear").addEventListener("click", () => {
  document.querySelector(".text").innerHTML = "";
});
////////////////////  BUDGET FEATURE /////////////////////
forcards();
function forcards() {
  let mainBal = document.querySelector(".mainbal");
  let option = document.createElement("img");
  let logo = document.createElement("img");
  let balance = document.createElement("div");
  let money = document.createElement("div");
  let remaining = document.createElement("div");
  let rembar = document.createElement("div");
  logo.src =
    "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_account_balance_wallet_48px-64.png";
  logo.style.width = "15%";
  mainBal.appendChild(logo);
  balance.textContent = " Budget Balance";
  money.textContent = "43534";
  mainBal.appendChild(balance);
  mainBal.appendChild(money);
  remaining.textContent = "Remaining Balance";
  rembar.textContent = "74";
  mainBal.appendChild(remaining);
  mainBal.appendChild(rembar);
  mainBal.appendChild(option);
  option.src =
    "https://cdn0.iconfinder.com/data/icons/zondicons/20/dots-horizontal-double-64.png";
  option.style.position = "absolute";
  option.style.top = "0";
  option.style.right = "0";

  option.addEventListener("click", createoption);
  function createoption() {
    option.removeEventListener("click", createoption);
    let div = document.createElement("div");
    div.style.width = "70%";
    div.style.height = "70%";
    div.style.border = "1px solid red";
    div.style.display = " flex";
    div.style.position = "absolute";
    div.style.flexDirection = "column";
    div.style.display = "flex";
    div.style.right = "-70%";
    div.style.zIndex = "43";
    div.style.backgroundColor = "blue";
    div.style.color = "white";
    div.style.top = "-10%";
    document.querySelector(".mainbal").appendChild(div);
    let title = document.createElement("div");
    let frame = document.createElement("input");
    frame.style.color = "white";
    let save = document.createElement("div");
    title.textContent = "enter your balance";
    // frame.type = "text";
    frame.placeholder = "...............";
    console.log(1);
    save.textContent = "Save";
    div.appendChild(title);
    div.appendChild(frame);
    div.appendChild(save);
    save.addEventListener("click", () => {
      if (frame.value !== "") money.textContent = frame.value;
      option.addEventListener("click", createoption);
      div.style.display = " none";
    });
  }
}
forslider();
let move = 0;
function forslider() {
  let silderwrap = document.createElement("div");
  silderwrap.style.transition = "0.5s";
  silderwrap.style.width = "2805px";
  silderwrap.style.height = "100%";
  silderwrap.style.display = "flex";
  silderwrap.style.gap = "5px";
  silderwrap.style.position = "absolute";
  document.querySelector(".slider").appendChild(silderwrap);
  document.querySelector(".slider").style.overflowX = "hidden";
  let leftslide = document.createElement("img");
  let rightslide = document.createElement("img");
  leftslide.src =
    "https://cdn4.iconfinder.com/data/icons/ui-icon-part-3/131/slider-64.png";
  leftslide.style.position = "absolute";
  rightslide.src =
    "https://cdn4.iconfinder.com/data/icons/ui-icon-part-3/131/slider-64.png";
  rightslide.setAttribute("style", "transform:rotate(180deg)");
  rightslide.style.position = "absolute";
  rightslide.style.left = "-2%";
  rightslide.style.top = "28%";
  leftslide.style.right = "-2%";
  leftslide.style.top = "28%";
  document.querySelector(".slider").appendChild(leftslide);
  document.querySelector(".slider").appendChild(rightslide);
  leftslide.addEventListener("click", () => {
    if (move >= -1530) {
      move = move - 255;
      silderwrap.style.left = `${move}px`;
    }
  });
  rightslide.addEventListener("click", () => {
    if (move <= -255) {
      move = move + 255;
      silderwrap.style.left = `${move}px`;
    }
  });
  let category = [
    "food",
    "sport",
    "transport",
    "shoping",
    "emergencybudget",
    "health",
    "acomodation",
    "activities",
    "businessexpense",
    "beauty",
    "category",
  ];
  let urlarr = [
    "https://cdn1.iconfinder.com/data/icons/fillio-food-kitchen-and-cooking/48/food_-_spoon_fork-64.png",
    "https://cdn4.iconfinder.com/data/icons/sports-outline-24-px/24/Ball_football_sport_soccer_game_1-64.png",
    "https://cdn0.iconfinder.com/data/icons/font-awesome-solid-vol-1/512/car-64.png",
    "https://cdn0.iconfinder.com/data/icons/business-1747/32/Shoping_Bag-64.png",
    "https://cdn4.iconfinder.com/data/icons/small-black-v3/512/alarm_beacon_emergency_help_light-64.png",
    "https://cdn0.iconfinder.com/data/icons/medical-and-health-1-12/128/Health-Cross-Medical-Rescue-Medicinal-Red-Help-64.png",
    "https://cdn4.iconfinder.com/data/icons/hotel-accommodation-vacation-service-vol-4/512/hotel_service_room_trip_acomodation_vacation_-_11-64.png",
    "https://cdn4.iconfinder.com/data/icons/skateboard-and-surfskate-3/512/skate-skates-skateboard-surfskate-sports-activities-repair-fix-64.png",
    "https://cdn2.iconfinder.com/data/icons/knowledge-glyph/512/mind_plan_thinking_idea_vision_business_strategy_people_brainstorming-64.png",
    "https://cdn2.iconfinder.com/data/icons/skincare-solid/64/acne_skincare_pimple_beauty_woman_cosmetic_skin-64.png",
    "https://cdn0.iconfinder.com/data/icons/black-box/64/burger-menu-64.png",
  ];
  category.forEach((cate, index) => {
    let mainBal = document.createElement("div");
    mainBal.style.position = "relative";
    mainBal.style.width = "9.09%";
    mainBal.style.height = "100%";
    mainBal.style.border = "1px solid red";
    let option = document.createElement("img");
    let logo = document.createElement("img");
    let balance = document.createElement("div");
    let money = document.createElement("div");
    let remaining = document.createElement("div");
    let rembar = document.createElement("div");
    logo.src = urlarr[index];
    logo.style.width = "15%";
    mainBal.appendChild(logo);
    balance.textContent = cate;
    money.textContent = "43534";
    mainBal.appendChild(balance);
    mainBal.appendChild(money);
    remaining.textContent = "Remaining Balance";
    rembar.textContent = "74";
    mainBal.appendChild(remaining);
    mainBal.appendChild(rembar);
    mainBal.appendChild(option);
    option.src =
      "https://cdn0.iconfinder.com/data/icons/zondicons/20/dots-horizontal-double-64.png";
    option.style.position = "absolute";
    option.style.top = "0";
    option.style.right = "0";
    silderwrap.appendChild(mainBal);

    option.addEventListener("click", createoption);
    function createoption() {
      option.removeEventListener("click", createoption);
      let div = document.createElement("div");
      div.style.zIndex = "56";
      div.style.width = "70%";
      div.style.height = "70%";
      div.style.border = "1px solid red";
      div.style.display = " flex";
      div.style.position = "absolute";
      div.style.flexDirection = "column";
      div.style.display = "flex";
      div.style.zIndex = "43";
      div.style.backgroundColor = "blue";
      div.style.color = "white";
      div.style.top = "10.8%";
      div.style.right = "17%";
      mainBal.appendChild(div);
      let title = document.createElement("div");
      let frame = document.createElement("input");
      frame.style.color = "white";
      let save = document.createElement("div");
      title.textContent = "enter your balance";
      frame.placeholder = "...............";
      console.log(1);
      save.textContent = "Save";
      div.appendChild(title);
      div.appendChild(frame);
      div.appendChild(save);
      save.addEventListener("click", () => {
        if (frame.value !== "") money.textContent = frame.value;
        option.addEventListener("click", createoption);
        div.style.display = " none";
      });
    }
  });
}
let top1 = document.querySelector(".top1");
let top2 = document.querySelector(".top2");
let top3 = document.querySelector(".top3");
let top4 = document.querySelector(".top4");
top1.addEventListener("click", () => {
  top1.style.zIndex = 1;
  top2.style.zIndex = -1;
  top3.style.zIndex = -1;
  top4.style.zIndex = -1;
});
top2.addEventListener("click", () => {
  top1.style.zIndex = -1;
  top2.style.zIndex = 1;
  top3.style.zIndex = -1;
  top4.style.zIndex = -1;
  console.log("fkljdg");
});
top3.addEventListener("click", () => {
  top1.style.zIndex = -1;
  top2.style.zIndex = -1;
  top3.style.zIndex = 1;
  top4.style.zIndex = -1;
});
top4.addEventListener("click", () => {
  top1.style.zIndex = -1;
  top2.style.zIndex = -1;
  top3.style.zIndex = -1;
  top4.style.zIndex = 1;
});
setdaily();
function setdaily() {
  document.querySelector(".setdaily").addEventListener("click", () => {
    document.querySelector(".setwraper").style.display = "flex";
  });
  document.querySelector(".save").addEventListener("click", () => {
    document.querySelector(".setwraper").style.display = "none";
    document.querySelector(".set2").style.display = "none";
    document.querySelector(".set").style.display = "flex";
    document.querySelector(".save").style.width = "70%";
    document.querySelector(".addexpense").style.display = "block";
  });
  document.querySelector(".addexpense").addEventListener("click", () => {
    document.querySelector(".set2").style.display = "flex";
    document.querySelector(".set").style.display = "none";

    document.querySelector(".addexpense").style.display = "none";
    document.querySelector(".save2").style.display = "flex";
    document.querySelector(".save").style.display = "none";
  });
}
setlimit();
function setlimit() {
  let categorires = [
    { food: 0 },
    { sport: 0 },
    { transport: 0 },
    { shoping: 0 },
    { health: 0 },
    { acomodation: 0 },
    { activities: 0 },
    { business: 0 },
    { beauty: 0 },
    { category: 0 },
    { emergency: 0 },
  ];
  let categoriresvalue = [
    { food: 0 },
    { sport: 0 },
    { transport: 0 },
    { shoping: 0 },
    { health: 0 },
    { acomodation: 0 },
    { activities: 0 },
    { business: 0 },
    { beauty: 0 },
    { category: 0 },
    { emergency: 0 },
  ];

  let dailyexpense = [];
  document.querySelector(".save").addEventListener("click", () => {
    categorires.forEach((cate, index) => {
      let id = `#enterbudget${index + 1}`;
      if (document.querySelector(id).value !== "") {
        categorires[index][Object.keys(cate)[0]] =
          document.querySelector(id).value;
      }
    });
    console.log(categorires);
  });
  document.querySelector(".save2").addEventListener("click", () => {
    categorires.forEach((cate, index) => {
      let id = `#enterbudget${index + 12}`;
      let food = categorires[index][Object.keys(cate)[0]];
      if (document.querySelector(id).value !== "") {
        categoriresvalue[index][Object.keys(cate)[0]] =
          Number(categoriresvalue[index][Object.keys(cate)[0]]) +
          Number(document.querySelector(id).value);
        let foodvalue = categoriresvalue[index][Object.keys(cate)[0]];
        if (food > foodvalue) {
          dailyexpense.push(foodvalue);
          let percent = 100 - (foodvalue * 100) / food;
          let remainid = `.remainbar${index}`;
          document.querySelector(remainid).style.width = percent + "%";
          document.querySelector(id).value = "";
        } else {
          alert(`${Object.keys(cate)[0]} budget is out of budget`);
          document.querySelector(id).value = "";
        }
      } else {
        dailyexpense.push(0);
      }
    });
    let totalexpense = 0;
    categorires.forEach((cate) => {
      totalexpense =
        totalexpense + categoriresvalue[index][Object.keys(cate)[0]];
    });
    document.querySelector(".setwraper").style.display = "none";
    document.querySelector(".set2").style.display = "none";
    document.querySelector(".set").style.display = "flex";
    document.querySelector(".save").style.width = "70%";
    document.querySelector(".save").style.display = "flex";
    document.querySelector(".addexpense").style.display = "block";
    document.querySelector(".save2").style.display = "none";
    piechart(dailyexpense);
    bargraph(totalexpense);
  });
}

function piechart(dailyExpense) {
  //////////////////////// pie chart ///////////////////////////
  console.log(dailyExpense);
  if (dailyExpense.length != 0) {
    const pieChartCanvas = document.querySelector("#pieChart").getContext("2d");
    new Chart(pieChartCanvas, {
      type: "pie",
      data: {
        labels: [
          "Food",
          "Sport",
          "Transport",
          "Shoping",
          "Health",
          "Accomodation",
          "Activities",
          "Business Expense",
          "Beauty",
          "Category",
          "Emergency Budget",
        ],
        datasets: [
          {
            data: dailyExpense,
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#63FF84",
              "#84FF63",
              "#FF5733",
              "#33FF57",
              "#5733FF",
              "#FF5733",
              "#FFFF33",
              "#33FFFF",
            ],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Daily Expenses Distribution",
        },
        plugins: {
          legend: {
            position: "left",
            align: "start",
          },
        },
        layout: {
          padding: {
            left: 0, // Adjust the left padding to increase the gap between chart and labels
            right: 0, // You can also adjust the right padding
            top: -10, // Adjust the top padding to increase the size of the chart
            bottom: -10, // You can also adjust the bottom padding
          },
        },
      },
    });
  }
}
//////////////////////////////////////////// bar chart ///////////////////////////////////////////////
function bargraph(days, totalexpense) {
  const lineChartCanvas = document.getElementById("lineChart").getContext("2d");
  new Chart(lineChartCanvas, {
    type: "bar",
    data: {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
      datasets: [
        {
          label: "Total Expenses",
          data: dailyExpenses,
          borderColor: "#FF6384",
          fill: true,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Daily Total Expenses",
      },
    },
  });
}
