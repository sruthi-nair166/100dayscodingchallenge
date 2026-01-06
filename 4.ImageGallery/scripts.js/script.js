const artworks = [
  {
    id: 1,
    title: "The Gulf Stream",
    artist: "Winslow Homer",
    year: "1906",
    imageUrl:
      "https://images.metmuseum.org/CRDImages/ad/original/DP-20821-001.jpg",
  },
  {
    id: 2,
    title: "Young Ladies of the Village",
    artist: "Gustave Courbet",
    year: "1851-52",
    imageUrl: "https://images.metmuseum.org/CRDImages/ep/original/DT1967.jpg",
  },
  {
    id: 3,
    title: "Allegory of the Planets and Continents",
    artist: "Giovanni Battista Tiepolo",
    year: "1752",
    imageUrl:
      "https://images.metmuseum.org/CRDImages/ep/original/DP-14286-007.jpg",
  },
  {
    id: 4,
    title: "Mahadevi, the Great Goddess",
    artist: "unknown",
    year: "1725",
    imageUrl: "https://images.metmuseum.org/CRDImages/as/original/DT4003.jpg",
  },
  {
    id: 5,
    title: "Wheat Field with Cypresses",
    artist: "Vincent Van Gogh",
    year: "1889",
    imageUrl:
      "https://images.metmuseum.org/CRDImages/ep/original/DP-42549-001.jpg",
  },
  {
    id: 6,
    title: "Emperor Xuanzong's flight to Shu",
    artist: "unknown",
    year: "mid-12th century",
    imageUrl: "https://images.metmuseum.org/CRDImages/as/original/DP247676.jpg",
  },
];

const main = document.querySelector("main");

artworks.forEach((artwork) => {
  const art = document.createElement("img");
  art.src = artwork.imageUrl;
  art.style.width = "800px";

  const artTitle = document.createElement("p");
  artTitle.textContent = artwork.title;

  const artist = document.createElement("span");
  artist.textContent = artwork.artist;

  const year = document.createElement("span");
  year.textContent = artwork.year;

  main.appendChild(art);
  main.appendChild(artTitle);
  main.appendChild(artist);
  main.appendChild(year);
});
