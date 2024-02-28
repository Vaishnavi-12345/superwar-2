const PLAYERS = [
    "Spiderman", "Captain America", "Wonderwoman", "Popcorn", "Gemwoman",
    "Bolt", "Antwoman", "Mask", "Tiger", "Captain", "Catwoman", "Fish",
    "Hulk", "Ninja", "Black Cat", "Volverine", "Thor", "Slayer", "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    let type = 'hero'; // start with hero type

    for (let i = 0; i < players.length; i++) {
        let player = {};
        player.name = players[i];
        player.strength = getRandomStrength();
        player.image = `images/super-${i + 1}.png`; // Updated image URL format
        player.type = type;

        detailedPlayers.push(player);

        // alternate between hero and villain types
        type = type === 'hero' ? 'villain' : 'hero';
    }

    return detailedPlayers;
}



// getting random strength
const getRandomStrength = () => {
    // Return a random integer between 1 and 100
    return Math.floor(Math.random() * 100) + 1;
}


const buildPlayers = (players, type) => {
    let fragment = '';

    for (let player of players) {
        if (player.type === type) {
            fragment += `<div class="player">
                            <img src="${player.image}" alt="">
                            <div class="name">${player.name}</div>
                            <div class="strength">${player.strength}</div>
                        </div>`;
        }
    }

    return fragment;
}




// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}