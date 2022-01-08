const URL = "https://openlibrary.org";

// Call API

let callAPISubject = async (genre, btn) => {
  await fetch(URL + genre)
    .then((response) =>
      response.ok == true ? response.json() : errorCallApi(response, btn)
    )
    .then((data) => populateTable(data))
    .catch(function (error) {
      errorCallApi(error, btn);
    });

  document.querySelectorAll("button").forEach((btn) => (btn.disabled = false));
  btn.querySelector("span").classList.add("d-none");
};

let callAPIDescription = async (bookKey) => {
  bookKey !== "-1.json"
    ? await fetch(URL + bookKey)
        .then((response) =>
          response.ok == true ? response.json() : errorCallApi(response)
        )
        .then(
          (data) =>
            (document.querySelector("#textModal").textContent =
              data.description.value ??
              data.description ??
              "No description found!")
        )
        .catch(function (error) {
          errorCallApi(error, btn);
        })
    : (document.querySelector("#textModal").textContent =
        "No description found!");
};

let errorCallApi = (response, btn) => {
  console.log(response);
  if (btn) {
    document
      .querySelectorAll("button")
      .forEach((btn) => (btn.disabled = false));
    btn.querySelector("span").classList.add("d-none");
    invalidFeedback.textContent = "Failure API call, check console!";
    genre.classList.add("is-invalid");
    removeIsInvalid(genre);
  }
};

// End call API
