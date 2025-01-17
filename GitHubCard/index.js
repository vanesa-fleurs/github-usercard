/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const cardsHtml = document.querySelector('.cards') 
const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

followersArray.forEach(follower => {
  axios.get(`https://api.github.com/users/${follower}`)
  .then(data => {
    const info = data.data; 
    console.log(info);

    const cardInfo = createCards(info)
    cardsHtml.appendChild(cardInfo)
  })
  .catch(err => {console.log('Did not work!')})
} )



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


//component here
const createCards = (objectParam) => {
  //create Elements
  const cardContainer = document.createElement('div');
  const imgC = document.createElement('img');
  const cardInfoC = document.createElement('div');
  const h3C = document.createElement('h3');
  const pC1 = document.createElement('p');
  const pC2 = document.createElement('p');
  const pC3 = document.createElement('p');
  const aC = document.createElement('a');
  const pC4 = document.createElement('p');
  const pC5 = document.createElement('p');
  const pC6 = document.createElement('p');

  //append Elements
  cardContainer.appendChild(imgC);
  cardContainer.appendChild(cardInfoC);
  cardInfoC.appendChild(h3C);
  cardInfoC.appendChild(pC1);
  cardInfoC.appendChild(pC2);
  cardInfoC.appendChild(pC3);
  pC3.appendChild(aC);
  cardInfoC.appendChild(pC4);
  cardInfoC.appendChild(pC5);
  cardInfoC.appendChild(pC6);

  //class Names 
  cardContainer.classList.add('card');
  cardInfoC.classList.add('card-info');
  h3C.classList.add('name');
  pC1.classList.add('username');


  //content
  imgC.src = objectParam.avatar_url;
  h3C.textContent = objectParam.name;
  pC1.textContent = objectParam.login
  pC2.textContent = `Location: ${objectParam.location}`
  pC3.textContent = `Profile: `
  aC.href = objectParam.url;
  aC.textContent = objectParam.url;
  pC4.textContent = `Followers: ${objectParam.followers}`
  pC5.textContent = `Following: ${objectParam.following}`
  pC6.textContent = `Bio: ${objectParam.bio}`

  return cardContainer;
}