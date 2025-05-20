const filmList =
document.getElementById('film-list')

//fetch from local json

const films = [
    {
        id:1,
        title:"The Giant Gila Monster",
        runtime:108,
        capacity:100,
        showtime:"06:00PM",
        tickets_sold: 68,
        description:"A giand lizard terrorizes a rural Texas community.",
        poster:"https://WWW.gstatic.com/tv/thumb/v22vodarr/2739/202397v8mb.jpg"
    },

    {
       id:2,
       tittle:"Manos:The Hands of Fate",
       runtime:119,
       capacity:60,
       showtime:"06:30PM",
       tickets_sold:44,
       description:"A family gets lost on the road and stumbles upon a hidden cult.",
       poster:"https://WWW.gstatic.com/tv/thumb/v22vodarr/2778/JP47791v8sc.jpg"
    },

    {
        id:3,
        tittle:"The Chasers",
        runtime:93,
        capacity:50,
        showtime:"09:30PM",
        tickets_sold:31,
        description:"An investor creates a time machine and must prevent its abuse.",
        poster:"https://WWW.gstatic.com/tv/thumb/v22vodarr/2334/202392v8mb.jpg"
    },
    {
    id: 4,
     title: "The Touch Of Satan",
     runtime: 101,
     capacity: 40,
     showtime: "09:00PM",
     tickets_sold: 31,
     description: "A young man meets a farm girl who is actually a witch.",
     poster: "https://www.gstatic.com/tv/thumb/v22vodart/43468/p43468_v_v8_aa.jpg"
    },

    {
      id: 5,
     title: "Santa Claus Conquers The Martians",
     runtime: 96,
     capacity: 50,
     showtime: "03:30PM",
     tickets_sold: 45,
     description: "The Martians kidnap Santa Claus because there is nobody on Mars to give their children presents.",
     poster: "https://www.gstatic.com/tv/thumb/v22vodart/4232/p4232_v_v8_aa.jpg"
    },
    {
    "id": "6",
     "title": "Track Of The Moon Beast",
     "runtime": "112",
     "capacity": 30,
     "showtime": "10:30PM",
     "tickets_sold": 16,
     "description": "A young man is transformed into a hideous 'moon beast' due to a meteor fragment lodged in his body.",
     "poster": "https://www.gstatic.com/tv/thumb/v22vodart/39804/p39804_v_v8_ab.jpg"
   },
   {
     "id": "7",
     "title": "The Skydivers",
     "runtime": "94",
     "capacity": 30,
     "showtime": "07:30PM",
     "tickets_sold": 22,
     "description": "A woman seeks revenge on her former lover, who owns a skydiving business.",
     "poster": "https://www.gstatic.com/tv/thumb/v22vodart/40518/p40518_v_v8_aa.jpg"
   },
   {
     "id": "8",
     "title": "The Killer Shrews",
     "runtime": "115",
     "capacity": 40,
     "showtime": "08:30PM",
     "tickets_sold": 32,
     "description": "On an isolated island, a small group of people are terrorized by giant voracious shrews in the midst of a hurricane.",
     "poster": "https://www.gstatic.com/tv/thumb/v22vodart/1466/p1466_v_v8_ab.jpg"
   },
   {
     "id": "9",
     "title": "Project Moon Base",
     "runtime": "99",
     "capacity": 40,
     "showtime": "07:30PM",
     "tickets_sold": 22,
     "description": "A saboteur posing as a scientist strives to destroy the world's first space station.",
     "poster": "https://www.gstatic.com/tv/thumb/v22vodart/46755/p46755_v_v8_aa.jpg"
   },
   {
     "id": "10",
     "title": "The Giant Spider Invasion",
     "runtime": "122",
     "capacity": 50,
     "showtime": "10:00PM",
     "tickets_sold": 44,
     "description": "Giant spiders from another dimension invade Wisconsin.",
     "poster": "https://www.gstatic.com/tv/thumb/v22vodart/42171/p42171_v_v8_ab.jpg"
   },
   {
     "id": "11",
     "title": "Catalina Caper",
     "runtime": "104",
     "capacity": 30,
     "showtime": "06:00PM",
     "tickets_sold": 12,
     "description": "A group of swingin' teens take time out from having fun in the sun to try to foil a group of crooks searching for a stolen scroll.",
     "poster": "https://www.gstatic.com/tv/thumb/v22vodart/58122/p58122_v_v8_aa.jpg"
   },
   {
     "id": "12",
     "title": "Secret Agent Super Dragon",
     "runtime": "104",
     "capacity": 30,
     "showtime": "07:00PM",
     "tickets_sold": 20,
     "description": "A series of murders in Michigan lead an American secret agent to Amsterdam, where he uncovers a plot to imperil the world with a potent new drug.",
     "poster": "https://www.gstatic.com/tv/thumb/v22vodart/93417/p93417_v_v8_aa.jpg",
     "showing_id": "12"
   },
   {
     "id": "13",
     "title": "Wild Rebels",
     "runtime": "100",
     "capacity": 40,
     "showtime": "09:00PM",
     "tickets_sold": 31,
     "description": "A stock car driver goes undercover as the wheel man for a motorcycle gang.",
     "poster": "https://www.gstatic.com/tv/thumb/v22vodart/45367/p45367_v_v8_aa.jpg"
   },
   {
     "id": "14",
     "title": "Danger: Diabolik",
     "runtime": "111",
     "capacity": 50,
     "showtime": "08:00PM",
     "tickets_sold": 40,
     "description": "International man of mystery Diabolik and his lover pull off heist after heist, all while European cops led by Inspector Ginko and envious mobsters led by Ralph Valmont are closing in on them.",
     "poster": "https://www.gstatic.com/tv/thumb/v22vodart/11850/p11850_v_v8_aa.jpg"
   },
   {
     "id": "15",
     "title": "Village Of The Giants",
     runtime: "98",
     capacity: 50,
     showtime: "04:45PM",
     tickets_sold: 33,
     description: "Delinquent teen-agers ingest a substance and grow thirty feet tall, then proceed to take over a small town.",
     poster: "https://www.gstatic.com/tv/thumb/v22vodart/37991/p37991_v_v8_aa.jpg"
   },
 
    //Add other movies following the same structuer
];

films.forEach(film => {
const card = 
document.createElement('div');
 card.className = 'film-card';

 const AvailableTickets = film.capacity - film.tickets_sold;

 card.innerHTML = `
 <img src="${film.poster}" alt="${film.tittle}" />
 <div class="film-details">
 <div class="film-tittle">${film.tittle} (${film.showtime})</div>
     <div class="film-description">${film.description}</div>
     <div>Runtiem: ${film.runtime}min</div>
     <div>Tickets Available: <span id="tickets-${film.id}">$
     {availableTickets}</span></div>
     <button class="book-button" $
     {availableTickets <= 0 ? "disabled" : ""}onclick="bookTicket('${film.id}')">
        ${AvailableTickets > 0 ? "Book Tickets": "Sold Out"}
        </buton>
        </div>
          `;
          filmList.appendChild(card);
});

  //Book ticket 
  function bookTicket(id) {
    const film = film.find(f => f.id === id);
    if(film.tickets_sold < film.capacity)
    {
      film.tickets_sold += 1;
      const available = film.capacity - film.tickets_sold;
       document.getElementById(`tickets-${id}`).textContent = available;
       if (available <= 0) {

        document.querySelector(`button[onclick="bookTicket('${id}')"]`).textContent = 'Sold Out';

        document.querySelector(`button[onclick="bookTicket('${id}')"]`).disabled = true;
       }
    }
  }

