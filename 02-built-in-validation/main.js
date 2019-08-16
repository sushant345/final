//javascript Document
// step 2 - bind the header and the section element to header and section variables
let header = document.querySelector('header');
let section = document.querySelector('section');
let footer = document.querySelector('footer');
//step 3 Store the url of a json file in a variables
let requestURL = 'https://sushant345.github.io/final/main.json';
//step 4 Create a new XHR object
let request = new XMLHttpRequest();
//step 5 open a new request using the request method
request.open('GET', requestURL);
//step 6 set js to accept json from the server
request.responseType = 'json';
// step 7 send the request
request.send();
//step 8 add event handler - listening for the onload event of the json file /object
request.onload = function(){
  var weirddead = request.response;
  topheader(weirddead);
  products(weirddead);
}
// step 9 creating the header
function topheader(jsonObj) {

  var headerH1 = document.createElement('h1');
  headerH1.textContent = jsonObj['title'];
  header.appendChild(headerH1);

}
// step 10 Creating the TopFlavour function
function products(jsonObj){
  //bind the json obj topFlavours to a variables

  let products = jsonObj['products'];


  for(let i =0; i < products.length; i++) {
    // built the html elements
    let article = document.createElement('article');
    let  h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let ul = document.createElement('ul');

    //set the text textContent
    img.setAttribute('src', 'https://sushant345.github.io/final/images' + products[i].image);

    img.setAttribute('alt', products[i].name);
    h2.textContent = products[i].name;
    p1.textContent = products[i].price;
    p2.textContent = products[i].description;
    //ul = list
    let benefits = products[i].benefits;
    //built a loop to loop through the benefits
     for(var j = 0; j<benefits.length; j++){
       let listItem = document.createElement['li'];
       listItem.textContent = benefits[j]
       list.appendChild(listItem);
     }

     //append each item to a section elements
     article.appendChild(img);
     article.appendChild(h2);
     article.appendChild(p1);
     article.appendChild(p2);
     article.appendChild(ul);
     section.appendChild(article);


  }
}
