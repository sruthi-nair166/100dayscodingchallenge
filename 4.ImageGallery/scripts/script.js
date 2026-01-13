const artworks = [
  {
    id: 1,
    title: "The Gulf Stream",
    artist: "Winslow Homer",
    year: "1906",
    imageUrl: "./assets/images/IMG_01.jpg",
  },
  {
    id: 2,
    title: "Allegory of the Planets and Continents",
    artist: "Giovanni Battista Tiepolo",
    year: "1752",
    imageUrl: "./assets/images/IMG_02.jpg",
  },
  {
    id: 3,
    title: "Young Ladies of the Village",
    artist: "Gustave Courbet",
    year: "1851-52",
    imageUrl: "./assets/images/IMG_03.jpg",
  },
  {
    id: 4,
    title: "Wheat Field with Cypresses",
    artist: "Vincent Van Gogh",
    year: "1889",
    imageUrl: "./assets/images/IMG_04.jpg",
  },
  {
    id: 5,
    title: "Mahadevi, the Great Goddess",
    artist: "Artist Unknown",
    year: "1725",
    imageUrl: "./assets/images/IMG_05.jpg",
  },
  {
    id: 6,
    title: "Emperor Xuanzong's flight to Shu",
    artist: "Artist Unknown",
    year: "mid-12th century",
    imageUrl: "./assets/images/IMG_06.jpg",
  },
  {
    id: 7,
    title: "Whalers",
    artist: "Joseph Mallord William Turner",
    year: "1845",
    imageUrl: "./assets/images/IMG_07.jpg",
  },
  {
    id: 8,
    title: "Joan of Arc",
    artist: "Jules Bastien-Lepage",
    year: "1879",
    imageUrl: "./assets/images/IMG_08.jpg",
  },
  {
    id: 9,
    title: "The Horse Fair",
    artist: "Rosa Bonheur",
    year: "1852-55",
    imageUrl: "./assets/images/IMG_09.jpg",
  },
];

let currentImgId;

const gallery = document.querySelector(".gallery");
const overlay = document.getElementById("overlay");
const imageViewer = document.getElementById("image-viewer");
const closeBtn = document.getElementById("close-btn");
const imgHighlight = document.getElementById("img-highlight");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const pageBackground = document.getElementById("page-background");

artworks.forEach((artwork) => {
  const galleryItem = document.createElement("div");
  galleryItem.className = "gallery-item";
  galleryItem.id = `item-${artwork.id}`;

  const artWrap = document.createElement("button");
  artWrap.className = "gallery-img-wrap";
  const art = document.createElement("img");
  art.src = artwork.imageUrl;
  art.alt = `${artwork.title} by ${artwork.artist}`;
  art.id = artwork.id;
  artWrap.appendChild(art);

  const artTitle = document.createElement("p");
  artTitle.textContent = artwork.title;

  const wrap = document.createElement("div");
  wrap.className = "wrap";

  const artist = document.createElement("span");
  artist.textContent = artwork.artist;

  const year = document.createElement("span");
  year.textContent = artwork.year;

  wrap.appendChild(artist);
  wrap.appendChild(year);

  galleryItem.appendChild(artWrap);
  galleryItem.appendChild(artTitle);
  galleryItem.appendChild(wrap);

  gallery.appendChild(galleryItem);
});

gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    currentImgId = Number(e.target.id);
    prevBtn.disabled = currentImgId === 1;
    nextBtn.disabled = currentImgId === artworks.length;

    imageViewer.setAttribute("aria-hidden", "false");
    overlay.style.display = "block";
    closeBtn.style.display = "block";
    imgHighlight.style.display = "block";
    imgHighlight.src = `${e.target.src}`;
    imgHighlight.alt = `${e.target.alt}`;
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";

    pageBackground.setAttribute("inert", "");
    document.body.style.overflow = "hidden";
  }
});

closeBtn.addEventListener("click", () => {
  imageViewer.setAttribute("aria-hidden", "true");
  overlay.style.display = "none";
  closeBtn.style.display = "none";
  imgHighlight.style.display = "none";
  imgHighlight.src = "";
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";

  pageBackground.removeAttribute("inert", "");
  document.body.style.overflow = "";
});

prevBtn.addEventListener("click", () => {
  if (currentImgId <= 1) {
    prevBtn.disabled = true;
    return;
  }

  artworks.some((artwork, index) => {
    if (currentImgId === artwork.id) {
      console.log(currentImgId, artwork.id);
      imgHighlight.src = artworks[index - 1].imageUrl;
      currentImgId -= 1;
      prevBtn.disabled = currentImgId <= 1;
      nextBtn.disabled = false;

      return true;
    }
    return false;
  });
});

nextBtn.addEventListener("click", () => {
  if (currentImgId >= artworks.length) {
    nextBtn.disabled = true;
    return;
  }

  artworks.some((artwork, index) => {
    if (currentImgId === artwork.id) {
      console.log(currentImgId, artwork.id);
      imgHighlight.src = artworks[index + 1].imageUrl;
      currentImgId += 1;
      nextBtn.disabled = currentImgId >= artworks.length;
      prevBtn.disabled = false;

      return true;
    }
    return false;
  });
});
