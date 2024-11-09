let inputElement=document.getElementById("input")
let resultElement=document.getElementById("view")
let btnEl=document.getElementById("buttonid")

function createAndAppend(result){
    let {description, link, title} = result;
    /* */
    let titeleEl=document.createElement("a")
    titeleEl.href=link;
    titeleEl.textContent=title;
    titeleEl.target="_blank";
    titeleEl.classList.add("titele-El")
    resultElement.appendChild(titeleEl)
    /* */
    let brEl=document.createElement("br")
    resultElement.appendChild(brEl)
    /* */
    let linkEl=document.createElement("a")
    linkEl.href=link;
    linkEl.textContent=link;
    linkEl.target="_blank"
    linkEl.classList.add("link-El")
    resultElement.appendChild(linkEl)
    
    /* */
    let brEl1=document.createElement("br")
    resultElement.appendChild(brEl1)
    /* */
    let discriptionEl=document.createElement("p")
    discriptionEl.textContent=description;
    discriptionEl.textContent=description;
    discriptionEl.classList.add("discription-El")
    resultElement.appendChild(discriptionEl)

}

function displayResults(searchResult){
    resultElement.textContent="";
    for (let result of searchResult) {createAndAppend(result)}
        
    
}


function googlesearch(event){
    if(event.key==="Enter"){
        function dariya(){
            
    let searchinput=inputElement.value;
     resultElement.textContent=""
    let url="https://apis.ccbp.in/wiki-search?search=" + searchinput;
    let options={
        method:"GET"
    }
    fetch(url,options)
    .then(function(response){
        return response.json()
    })
   .then(function(jsonData){
    let { search_results } = jsonData;
    displayResults(search_results);
   });}}

   dariya()
}
btnEl.addEventListener("click", function () {
    let searchinput=inputElement.value;
     resultElement.textContent=""
    let url="https://apis.ccbp.in/wiki-search?search=" + searchinput;
    let options={
        method:"GET"
    }
    fetch(url,options)
    .then(function(response){
        return response.json()
    })
   .then(function(jsonData){
    let { search_results } = jsonData;
    displayResults(search_results);
   });}


);


inputElement.addEventListener("keydown",googlesearch);


