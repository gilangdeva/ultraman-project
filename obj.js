const ultraman = {
    name: "tiga",
    height: 100,
    isDead: false,
    blip: "Blip Blop",
    color: "purple",
    address: {
        planet: {
            name: "Namex",
            moon: [83930, 83030, 674784]
        },
        galaxy: "Andromeda 12",
    },
    weapons: ["Sword", "Shield", "Lasso"]
}

console.log(ultraman.address.planet);