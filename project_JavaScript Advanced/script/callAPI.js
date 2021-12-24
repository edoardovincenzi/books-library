genre.focus();
window.descriptionMap = new Map();
window.SubjectMap = new Map();

const URL = "https://openlibrary.org";
const subject = "/subjects/";
const timeout = 5000;


// Section search

let checkValue = (btnPush) => {
    event.preventDefault();
    if(genre.value === ""){
        invalidFeedback.textContent = "Please enter a genre in the textarea.";
        genre.classList.add("is-invalid");
        removeIsInvalid(genre);
    }else{
        genre.classList.remove("is-invalid");
        document.querySelectorAll("button").forEach((btn)=> btn.disabled = true);
        btnPush.querySelector("span").classList.remove("d-none");

        removeElementTable();
        checkNumberButton();
        checkExistingButtonLatestResearch(genre.value) ? console.log("Already exist") : createInsertButtonLatestResearch(genre.value);
        
        callAPISubject(subject + genre.value.toLocaleLowerCase() +".json", btnPush);
    }
}

let latestResearch = (btnPush) => {
    document.querySelectorAll("button").forEach((btn)=> btn.disabled = true);
    btnPush.querySelector("span").classList.remove("d-none");
    removeElementTable();
    
    callAPISubject(subject + btnPush.textContent.toLocaleLowerCase() +".json", btnPush);
}

// End section search


// Call API

let callAPISubject = async(genre, btn) =>{
    const response = await fetch(URL + genre);
    //const response = await fetch("https://openlibrary.org/subjects/fantasy.json");
    response.ok == true ? populateTable(await response.json()) : errorCallApi(response, btn);

    document.querySelectorAll("button").forEach((btn)=> btn.disabled = false);
    btn.querySelector("span").classList.add("d-none");
}

let callAPIDescription = async(bookKey) =>{
    const response = await fetch(URL + bookKey)
    response.ok == true ? "": errorCallApi(response, btn);

    const data = await response.json();
    document.querySelector("#textModal").textContent = data.description.value ?? data.description;
}

let errorCallApi = (response, btn) => {
    console.log(response);
    if(btn){
        document.querySelectorAll("button").forEach((btn)=> btn.disabled = false);
        btn.querySelector("span").classList.add("d-none");
        invalidFeedback.textContent = "Failure API call, check console!";
        genre.classList.add("is-invalid");
        removeIsInvalid(genre);
    }
}

// End call API


// Section creation and population

let populateTable = (jsonResponse) => {
    jsonResponse.works.forEach((element, index) => {
        createRow(element.title, element.authors,element.key , index);
    });
    document.querySelector("table").classList.remove("d-none");
    return this.jsonResponse;
}

let removeElementTable = () => {
    document.querySelectorAll("table tbody > tr").forEach((element) => element.remove());
}

let createRow = (title, author, keyBook, index) => {
    let count = 0;
    let row = document.querySelector("table tbody").insertRow(index);
    createInsertCell(row, index, count++);
    createInsertCell(row, title, count++);
    createInsertMultipleDataCell(row, author, count++);
    InserButton(row, keyBook, title, count);
}

let createInsertCell = (row, text, index) => {
    let cell;
    cell = row.insertCell(index);
    cell.textContent = text;
}

let createInsertMultipleDataCell = (row, text, index) => {
    let cell;
    cell = row.insertCell(index);
    text.forEach((author) => cell.textContent == "" ? cell.textContent = author.name : cell.textContent += ", " + author.name);
}

let InserButton = (row, keyBook, bookName,index) => {
    let cell;
    cell = row.insertCell(index);
    cell.append(createButtonDescription(keyBook, bookName));
}

let createButtonDescription = (keyBook, bookName) =>{
    let buttonDescription = document.createElement("button");
    buttonDescription.setAttribute("onclick", "openModal(this)");
    buttonDescription.textContent = "Description";
    buttonDescription.classList.add("btn", "btn-primary", "ms-2");
    buttonDescription.setAttribute("key", keyBook);
    buttonDescription.setAttribute("bookName", bookName);
    buttonDescription.setAttribute("data-bs-toggle", "modal");
    buttonDescription.setAttribute("data-bs-target", "#descriptionModal");
    return buttonDescription;
}

let createInsertButtonLatestResearch = (searchName) =>{
    let buttonLatestResearch = document.querySelector("button[type='templateButtonLatestResearch']").cloneNode();
    let span = document.querySelector("button[type='templateButtonLatestResearch'] > span").cloneNode();
    buttonLatestResearch.textContent = searchName;
    buttonLatestResearch.appendChild(span);
    buttonLatestResearch.removeAttribute("type", "templateButtonLatestResearch");
    buttonLatestResearch.setAttribute("type", "latestResearch");
    buttonLatestResearch.classList.remove("d-none");
    document.querySelector("#latestResearch").append(buttonLatestResearch);
}

//End section creation and population


// Section checking

let checkExistingButtonLatestResearch = (searchName) => {
    let exist = false;
    document.querySelectorAll("#latestResearch > button[type='latestResearch']").forEach((button) =>{
        button.textContent.toLocaleLowerCase() == searchName ? exist = true : "";
    });
    return exist;
}

let checkNumberButton = () => {
    if(document.querySelectorAll("#latestResearch > button[type='latestResearch']").length == 3){
        document.querySelector("#latestResearch > button[type='latestResearch']").remove()
    }
}

// End section checking


// Other

function openModal(key){
    document.querySelector("#textModal").textContent = "";
    document.getElementById("descriptionModalLabel").textContent += key.getAttribute("bookName");
    callAPIDescription(key.getAttribute("key") + ".json");
}

function removeIsInvalid(element){
    setTimeout(() => {
        genre.classList.remove("is-invalid");
    }, timeout);
}

function changeTheme(){
    dark();
    light();
    icon();
    darkTable();
    modal();
}

let light = () => document.body.classList.toggle("light");
let dark = () => document.body.classList.toggle("dark");
let darkTable = () => document.querySelector("table").classList.toggle("table-dark");
let icon = () => document.body.querySelector(".themeIcon").classList.toggle("themeIconDark");
let modal = () => document.body.querySelector(".modal-content").classList.toggle("darkModal");


// End Other