const Data = [
    {
      id: 1001,
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel depicting a totalitarian regime.",
      price: 9.99,
      imageURL: "https://live-production.wcms.abc-cdn.net.au/7cfddbec303f68f59ba13adb46798604?impolicy=wcms_crop_resize&cropH=833&cropW=624&xPos=0&yPos=99&width=862&height=1149"
    },
    {
      id: 1002,
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      description: "A comedic science fiction series exploring the absurdity of the universe.",
      price: 14.99,
      imageURL: "https://www.sfgateway.com/wp-content/uploads/2023/04/hbg-title-9781399617246-3.jpg?fit=440%2C675"
    },
    {
      id: 1003,
      title: "Neuromancer",
      author: "William Gibson",
      description: "A cyberpunk novel about a washed-up computer hacker.",
      price: 11.99,
      imageURL: "https://m.media-amazon.com/images/I/81pIICZO2PL._SY522_.jpg"
    },
    {
      id: 1004,
      title: "Solaris",
      author: "Stanislaw Lem",
      description: "A philosophical novel set on a sentient oceanic planet.",
      price: 10.99,
      imageURL: "https://antigona.pt/cdn/shop/products/2021solaris_1_1024x1024.jpg?v=1614075494"
    },
    {
      id: 1005,
      title: "The Time Machine",
      author: "H.G. Wells",
      description: "A classic tale of time travel and its consequences.",
      price: 8.99,
      imageURL: "https://m.media-amazon.com/images/I/51ZFZ6M24XL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 1006,
      title: "Metropolis",
      author: "Thea von Harbou",
      description: "A futuristic novel set in a city ruled by machines.",
      price: 12.99,
      imageURL: "https://pictures.abebooks.com/inventory/md/md30380989630.jpg"
    },
    {
      id: 1007,
      title: "Brave New World",
      author: "Aldous Huxley",
      description: "A dystopian novel where society is genetically engineered.",
      price: 13.99,
      imageURL: "https://www.isfdb.org/wiki/images/0/0b/BRVNWWRLDQ1979.jpg"
    },
    {
      id: 1008,
      title: "The War of the Worlds",
      author: "H.G. Wells",
      description: "A thrilling account of an alien invasion in Victorian England.",
      price: 9.99,
      imageURL: "https://i.guim.co.uk/img/media/8af3c895171f050693f3649cf30e206e07136f34/0_0_860_1448/master/860.jpg?width=700&quality=85&auto=format&fit=max&s=fd0095980844cc115d16a14a91f3490c"
    },
    {
      id: 1009,
      title: "Snow Crash",
      author: "Neal Stephenson",
      description: "A fast-paced cyberpunk novel set in a future where virtual reality rules.",
      price: 11.99,
      imageURL: "https://d3525k1ryd2155.cloudfront.net/h/292/606/1495606292.0.m.jpg"
    },
    {
      id: 1010,
      title: "The Left Hand of Darkness",
      author: "Ursula K. Le Guin",
      description: "A groundbreaking exploration of gender and sexuality on an alien planet.",
      price: 10.99,
      imageURL: "https://example.com/left-hand-of-darkness.jpg"
    },
    {
      id: 1011,
      title: "Stranger in a Strange Land",
      author: "Robert A. Heinlein",
      description: "A story of a human raised on Mars and his return to Earth.",
      price: 12.99,
      imageURL: "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781473225947&w=&h=570"
    },
    {
      id: 1012,
      title: "The Sirens of Titan",
      author: "Kurt Vonnegut",
      description: "A satirical science fiction novel exploring free will and destiny.",
      price: 9.99,
      imageURL: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1526774112i/25568242._SY540_.jpg"
    },
    {
      id: 1013,
      title: "Do Androids Dream of Electric Sheep?",
      author: "Philip K. Dick",
      description: "A thought-provoking novel questioning the nature of humanity.",
      price: 11.99,
      imageURL: "https://slowurban.files.wordpress.com/2021/10/do-androids-dream-of-electric-sheep-book-cover.jpg"
    },
    {
      id: 1014,
      title: "The Dispossessed",
      author: "Ursula K. Le Guin",
      description: "A tale of two planets with contrasting political and social systems.",
      price: 10.99,
      imageURL: "https://m.media-amazon.com/images/I/51YRC2EEoxL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 1015,
      title: "Frankenstein",
      author: "Mary Shelley",
      description: "A Gothic science fiction novel about a scientist and his monstrous creation.",
      price: 8.99,
      imageURL: "https://64.media.tumblr.com/7f8dca2c455b40f8d3ef8fd59261b14d/tumblr_inline_o3h589TNLC1qi4it4_640.jpg"
    },
    {
      id: 1016,
      title: "Hyperion",
      author: "Dan Simmons",
      description: "An epic space opera featuring a group of pilgrims and their intertwining stories.",
      price: 12.99,
      imageURL: "https://m.media-amazon.com/images/I/91eMovpZItL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 1017,
      title: "The Wind-Up Bird Chronicle",
      author: "Haruki Murakami",
      description: "A surreal novel exploring themes of loss and self-discovery.",
      price: 11.99,
      imageURL: "https://static.tvtropes.org/pmwiki/pub/images/wind_up_bird.jpg"
    },
    {
      id: 1018,
      title: "The Road",
      author: "Cormac McCarthy",
      description: "A post-apocalyptic tale of survival and the bond between a father and son.",
      price: 9.99,
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/2/27/The-road.jpg'
    },
    {
      id: 1019,
      title: "The City and the Stars",
      author: "Arthur C. Clarke",
      description: "A novel set in a future city and its secrets spanning millions of years.",
      price: 11.99,
      imageURL: "https://upload.wikimedia.org/wikipedia/en/f/f9/The_City_and_the_Stars_hardcover.jpg"
    },
    {
        id: 1022,
        title: "Starship Troopers",
        author: "Robert A. Heinlein",
        description: "Futuristic war against alien bugs.",
        price: 10.99,
        imageURL: "https://i.pinimg.com/originals/b8/5f/ec/b85fec8516c3562211b2c7b2bb5a2df6.jpg"
    },
];

export default Data;