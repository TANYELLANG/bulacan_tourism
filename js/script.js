// ===================================================
// BULACAN TOURISM WEBSITE - script.js
// ===================================================

// ===== DATA: TOURIST DESTINATIONS =====
const destinations = [
  {
    id: 1,
    name: "Barasoain Church",
    city: "Malolos",
    category: "Historical Site",
    image: "images/barasoain_church.jpg",
    shortDesc: "The birthplace of the first Philippine Republic, where the Malolos Constitution was drafted in 1898.",
    fullDesc: "Barasoain Church, formally known as Our Lady of Mt. Carmel Parish Church, is a historic Roman Catholic church in Malolos, Bulacan. It is best known as the site of the First Philippine Congress in 1898 and where the Malolos Constitution — the first democratic constitution in Asia — was drafted and ratified.",
    activities: ["Historical tours", "Photography", "Church visit", "Museum exploration"],
    bestTime: "November to April",
    fee: "Free",
    hours: "6:00 AM - 6:00 PM",
    tip: "Visit early morning to avoid crowds and enjoy peaceful exploration of this sacred site."
  },
  {
    id: 2,
    name: "Biak-na-Bato National Park",
    city: "San Miguel",
    category: "Adventure",
    image: "images/biak_na_bato.jpg",
    shortDesc: "A sprawling national park famous for its caves, rock formations, and historical significance in the Philippine Revolution.",
    fullDesc: "Biak-na-Bato National Park is a protected area in San Miguel, Bulacan, covering over 2,117 hectares of rugged terrain. The park is famous for the Madlum River, the Bahay Paniki (Cave of Bats), and its deep historical connection as the mountain stronghold of Andres Bonifacio and the Katipunan revolutionaries.",
    activities: ["Cave exploration", "Trekking", "River swimming", "Camping", "Bird watching"],
    bestTime: "November to May",
    fee: "₱50 entrance fee",
    hours: "8:00 AM - 5:00 PM",
    tip: "Wear sturdy shoes and bring a flashlight for cave exploration. Hire a local guide for a safer and more informative experience."
  },
  {
    id: 3,
    name: "Angat Dam",
    city: "Norzagaray",
    category: "Nature",
    image: "images/angat_dam.jpg",
    shortDesc: "The massive hydroelectric dam and reservoir offering stunning views of the surrounding mountains and forests.",
    fullDesc: "Angat Dam is the primary water source of Metro Manila and surrounding provinces. Built in the 1960s, the dam sits amidst lush mountains in Norzagaray, Bulacan. The surrounding area offers beautiful views, a cool climate, and a peaceful atmosphere ideal for nature lovers and photographers.",
    activities: ["Photography", "Scenic viewing", "Nature walk", "Bird watching"],
    bestTime: "December to February",
    fee: "Free (viewing area)",
    hours: "Open daily, daylight hours",
    tip: "The area is best visited during the rainy season when the reservoir is full for the most dramatic views."
  },
  {
    id: 4,
    name: "Malolos Cathedral",
    city: "Malolos",
    category: "Historical Site",
    image: "images/malolos_cathedral.jpg",
    shortDesc: "The centuries-old cathedral of the Immaculate Conception, one of the oldest churches in Bulacan built during the Spanish colonial era.",
    fullDesc: "The Cathedral Parish of the Immaculate Conception in Malolos City is one of the oldest Catholic churches in Bulacan. Originally built in 1580, it has witnessed centuries of Philippine history and stands as a symbol of faith and resilience. The cathedral features beautiful Spanish colonial architecture and houses centuries-old religious artifacts.",
    activities: ["Church visit", "Historical tour", "Photography", "Spiritual retreat"],
    bestTime: "Year-round",
    fee: "Free",
    hours: "5:30 AM - 8:00 PM",
    tip: "Attend the Sunday mass for an authentic cultural experience. The church is especially beautiful during the Christmas season."
  },
  {
    id: 5,
    name: "Pulong Buhangin",
    city: "Santa Maria",
    category: "Beach",
    image: "images/pulong_buhangin.JPG",
    shortDesc: "A peaceful riverside sandbar where families and locals gather to enjoy the gentle waters of the Angat River.",
    fullDesc: "Pulong Buhangin is a naturally formed sandbar along the Angat River in Santa Maria, Bulacan. It offers a unique beach-like experience in a landlocked province — with fine white sand, clear flowing water, and lush trees providing shade. The spot is popular for picnics, swimming, and family outings.",
    activities: ["Swimming", "Picnic", "Sandbar lounging", "River kayaking"],
    bestTime: "March to May (dry season)",
    fee: "₱30 per person",
    hours: "7:00 AM - 5:00 PM",
    tip: "Visit during weekdays to avoid weekend crowds. Bring food and drinks as there are limited stalls nearby."
  },
  {
    id: 6,
    name: "Bustos Dam",
    city: "Bustos",
    category: "Nature",
    image: "images/bustos_dam.jpg",
    shortDesc: "A historic irrigation dam along the Angat River, surrounded by scenic landscapes perfect for photography and relaxation.",
    fullDesc: "Bustos Dam, locally known as 'Pangulong Dam,' was built during the American colonial period and remains an important irrigation facility in Bulacan. The dam area is a popular local destination, offering scenic views of flowing water over the spillway, lush greenery, and a relaxing atmosphere away from the city.",
    activities: ["Photography", "Fishing", "Nature walk", "Picnic"],
    bestTime: "Year-round (best during rainy season for full spillway)",
    fee: "Free",
    hours: "Open daily",
    tip: "Visit during or after heavy rains to witness the dramatic spillway overflow. Be cautious near the water's edge."
  },
  {
    id: 7,
    name: "Mt. Manalmon",
    city: "San Miguel",
    category: "Mountain",
    image: "images/mt_manalmon.jpg",
    shortDesc: "A historically significant mountain within Biak-na-Bato that served as the revolutionary headquarters of the Katipunan.",
    fullDesc: "Mt. Manalmon is a rugged mountain inside the Biak-na-Bato National Park in San Miguel, Bulacan. It served as the revolutionary stronghold of Andres Bonifacio and later Emilio Aguinaldo during the Philippine Revolution. Today it offers exciting trekking trails through dense forest, stunning views, and a rich encounter with Philippine revolutionary history.",
    activities: ["Mountain trekking", "Historical exploration", "Camping", "Nature photography"],
    bestTime: "November to April",
    fee: "₱100 (with park entrance)",
    hours: "8:00 AM - 3:00 PM",
    tip: "Start your trek early in the morning. Bring enough water, wear comfortable clothes, and always hire a registered local guide."
  },
  {
    id: 8,
    name: "Madlum River Falls",
    city: "San Miguel",
    category: "Waterfall",
    image: "images/madlum_river_falls.jpg",
    shortDesc: "A hidden natural waterfall tucked within the lush forests of Biak-na-Bato, fed by the pristine waters of the Madlum River.",
    fullDesc: "Madlum River Falls is a scenic waterfall nestled within the Biak-na-Bato National Park in San Miguel, Bulacan. Fed by the crystal-clear Madlum River, the falls cascade into a natural pool surrounded by dense tropical forest. It is a refreshing reward for trekkers exploring the park's trails and offers a serene escape into nature.",
    activities: ["Swimming", "Trekking", "Photography", "Nature walk"],
    bestTime: "June to November (rainy season for stronger flow)",
    fee: "₱50 (with park entrance)",
    hours: "8:00 AM - 4:00 PM",
    tip: "The trail to the falls can be slippery — wear proper footwear and go with a local guide for safety."
  },
  {
    id: 9,
    name: "Taliptip Island",
    city: "Bulakan",
    category: "Island",
    image: "images/taliptip.jpg",
    shortDesc: "A quiet mangrove island along the coast of Bulakan, known for its rich marine life, bird watching, and peaceful fishing communities.",
    fullDesc: "Taliptip Island in Bulakan, Bulacan is a coastal gem along Manila Bay, famous for its sprawling mangrove forests, diverse bird species, and traditional fishing villages. The island offers a unique eco-tourism experience where visitors can explore mangrove trails by boat, observe migratory birds, and witness the simple yet vibrant life of local fisherfolk.",
    activities: ["Mangrove trekking", "Bird watching", "Boat tour", "Photography", "Fishing"],
    bestTime: "November to February (bird watching season)",
    fee: "₱50 per person (boat fee additional)",
    hours: "6:00 AM - 5:00 PM",
    tip: "Bring binoculars for bird watching and wear light, breathable clothing. Hiring a local boatman doubles as a guided tour."
  }
];

// ===== DATA: FESTIVALS =====
const festivals = [
  {
    name: "Bocaue River Festival",
    location: "Bocaue",
    month: "July",
    description: "One of the most colorful and celebrated festivals in the Philippines, the Bocaue River Festival features a grand fluvial parade on the Bocaue River, with beautifully decorated boats, dancers, and a reenactment of the miraculous finding of the Holy Cross. It is celebrated every first Sunday of July.",
    image: "images/bocaue_river_festival.jpg"
  },
  {
    name: "Sumakah Festival",
    location: "Malolos City",
    month: "August",
    description: "The Sumakah Festival celebrates Malolos City's founding anniversary and highlights the city's cultural heritage through street dancing, colorful costumes, and cultural presentations. 'Sumakah' stands for the city's products and traditions — a lively celebration of Bulaceño identity and pride.",
    image: "images/sumakah_festival.jpg"
  },
  {
    name: "Baliwag Lenten Procession",
    location: "Baliwag",
    month: "March/April",
    description: "The Baliwag Lenten Procession is one of the most renowned Holy Week traditions in Baliwag, held every Good Friday as a solemn expression of faith and devotion. Known for its grand and orderly procession, it features beautifully decorated carrozas (floats) depicting scenes from the Passion of Christ, accompanied by devotees, marching bands, and religious images passed down through generations. The procession reflects Baliwag’s deep Catholic heritage and is considered one of the longest and most elaborate Lenten processions in the Philippines, attracting visitors and pilgrims from across the country.",
    image: "images/baliwag_lenten_procession.jpg"
  },
  {
    name: "Countryside Culinary Tours",
    location: "San Rafael and other countryside towns in Bulacan",
    month: "Year-round",
    description: "Countryside Culinary Tours offer visitors a hands-on cultural experience through private cooking sessions and local food tours. Guests can learn how to prepare traditional Bulacan dishes such as Ginataang Kuhol and Kare-Kare while exploring the province’s rural communities and culinary heritage.",
    image: "images/culinary_tours.jpg"
  }
];

// ===== DATA: FOOD =====
const foods = [
  {
    name: "Chicharon ng Bulacan",
    description: "Bulacan is world-famous for its chicharon — crispy deep-fried pork rinds that are lighter, crunchier, and more flavorful than anywhere else in the Philippines. The secret lies in the traditional preparation method passed down through generations of Bulaceño families.",
    image: "images/chicharon.jpg",
    where: "Bocaue and Meycauayan chicharon stalls along the highway"
  },
  {
    name: "Pastillas de Leche",
    description: "San Miguel, Bulacan is the pastillas capital of the Philippines. These soft, sweet milk candies wrapped in colorful papel de hapon (Japanese paper) are a beloved pasalubong and delicacy. Made from fresh carabao's milk and sugar, their melt-in-your-mouth texture is unforgettable.",
    image: "images/pastillas.jpg",
    where: "San Miguel town proper — look for roadside stalls and tiangge markets"
  },
  {
    name: "Turrones de Casuy",
    description: "A traditional Filipino candy made from cashew nuts (kasoy) wrapped in a white sugar coating and edible wafer paper. Bulacan's version is particularly renowned for its generous cashew filling and perfectly balanced sweetness, making it a prized pasalubong from the province.",
    image: "images/turrones.jpg",
    where: "Malolos City pasalubong centers and public markets"
  },
  {
    name: "Bibingkang Malagkit",
    description: "A rich, sticky rice cake made with glutinous rice cooked in coconut milk and topped with latik (coconut caramel). Bulacan's version is especially indulgent — thick, chewy, and generously coated with a dark brown coconut topping that caramelizes beautifully during baking.",
    image: "images/bibingkang_malagkit.jpg",
    where: "Local bakeries and karinderyas throughout Malolos, Hagonoy, and Paombong"
  }
];

// ===== DATA: GALLERY =====
const galleryImages = [

  { url: "images/barasoain_church_malolos.jpg", caption: "Barasoain Church — Malolos" },
  { url: "images/river_scenery_bulacan.jpg", caption: "River scenery of Bulacan" },
  { url: "images/mountain_trails_san_miguel.jpg", caption: "Mountain trails of San Miguel" },
  { url: "images/riverside_sandbars_bulacan.jpg", caption: "Riverside sandbars of Bulacan" },
  { url: "images/cultural_festivals_bulacan.jpg", caption: "Cultural festivals of Bulacan" },
  { url: "images/singkaban_festival_street_dancing.jpg", caption: "Singkaban Festival street dancing" },
  { url: "images/obando_fertility_rites_festival.jpg", caption: "Obando Fertility Rites Festival" },
  { url: "images/famous_bulacan_chicharon.jpeg", caption: "Famous Bulacan Chicharon" },
  { url: "images/pastillas_de_leche_san_miguel.jpg", caption: "Pastillas de Leche — San Miguel" },
  { url: "images/scenic_landscapes_bulacan.jpg", caption: "Scenic landscapes of Bulacan" },
  { url: "images/bulacan_countryside_views.jpg", caption: "Bulacan countryside views" },
  { url: "images/nature_greenery_central_luzon.jpg", caption: "Nature and greenery of Central Luzon" },
  { url: "images/forests_biak_na_bato.jpeg", caption: "Forests within Biak-na-Bato" },
  { url: "images/stunning_skies_bulacan.jpg", caption: "Stunning skies over Bulacan" },
  { url: "images/historic_sites_malolos.jpg", caption: "Historic sites of Malolos" },
  { url: "images/bustos_dam.jpg", caption: "Bustos Dam spillway" },
  { url: "images/bulacan_town_fiesta.jpg", caption: "Bulacan town fiesta" },
  { url: "images/local_arts_crafts.jpg", caption: "Local arts and crafts" },
  { url: "images/bulacan_rural_scenery.jpg", caption: "Bulacan rural scenery" },
  { url: "images/filipino_heritage_architecture.jpg", caption: "Filipino heritage architecture" },
  { url: "images/rivers_waterways.jpg", caption: "Rivers and waterways" },
  { url: "images/adventure_trails_bulacan.jpg", caption: "Adventure trails in Bulacan" },
  { url: "images/lush_forests_san_miguel.jpg", caption: "Lush forests of San Miguel" },
  { url: "images/bulacan_rice_fields.JPG", caption: "Bulacan rice fields" },
  { url: "images/turrones_de_casuy.jpg", caption: "Turrones de Casuy" },
  { url: "images/historical_landmarks_malolos.jpeg", caption: "Historical landmarks of Malolos" },
  { url: "images/bulacan_sunrise_scenery.jpg", caption: "Bulacan sunrise scenery" },
  { url: "images/community_culture.jpg", caption: "Community and culture" },
  { url: "images/beauty_bulacan_nature.jpg", caption: "The beauty of Bulacan's nature" },
  { url: "images/beauty_of_bulacan.jpg", caption: "Beauty of Bulacan" },
  


];

// ===== DATA: TRAVEL TIPS =====
const travelTips = [
  {
    icon: "bi-sun-fill",
    title: "Best Time to Visit",
    text: "The best time to visit Bulacan is from November to April during the dry season. The weather is cooler and more comfortable for outdoor activities. Avoid June to October as this is the rainy/typhoon season, though waterfalls and rivers are at their most dramatic."
  },
  {
    icon: "bi-truck-front-fill",
    title: "Transportation Options",
    text: "From Manila, take a bus from Cubao or Sampaloc terminals bound for Malolos or San Miguel. Local transportation within Bulacan includes jeepneys, tricycles, and motorelas. For flexibility, renting a car or booking a ride-share (Grab) is recommended for reaching remote destinations like Biak-na-Bato."
  },
  {
    icon: "bi-shield-fill-check",
    title: "Safety Reminders",
    text: "Always inform someone of your itinerary before trekking or exploring caves. Hire registered local guides for mountain and cave adventures. Bring sufficient water, sunscreen, and insect repellent. Keep valuables secure and be cautious near rivers during rainy months when water levels can rise quickly."
  },
  {
    icon: "bi-cash-coin",
    title: "Budget Tips",
    text: "Bulacan is generally an affordable destination. Most historical sites are free or charge minimal fees. Accommodation ranges from budget guesthouses (₱500-₱1,000/night) to mid-range hotels in Malolos City. Eat at local carinderyas and public markets to enjoy authentic food at very reasonable prices."
  },
  {
    icon: "bi-bag-fill",
    title: "What to Bring",
    text: "Pack light, breathable clothing suitable for the tropical climate. For outdoor adventures, bring trekking shoes, rain gear, and a small backpack. Don't forget your camera for stunning landscapes and heritage sites. Bring cash as ATMs can be limited in remote municipalities."
  },
  {
    icon: "bi-heart-fill",
    title: "Respect Local Culture",
    text: "Bulaceños are deeply religious and proud of their heritage. Dress modestly when visiting churches and historical sites. Always ask permission before photographing locals. Participate respectfully in festivals and cultural events, and support local artisans by purchasing authentic Bulacan handicrafts and delicacies."
  }
];

// ===================================================
// STATE VARIABLES
// ===================================================
let activeCategory = "All";
let searchQuery = "";
let lightboxIndex = 0;

// ===================================================
// RENDER FUNCTIONS
// ===================================================

// --- Destination Cards ---
function renderDestinations() {
  const container = document.getElementById("destinationCards");
  const noResults = document.getElementById("noResults");

  const filtered = destinations.filter(d => {
    const q = searchQuery.toLowerCase();
    const matchSearch =
      d.name.toLowerCase().includes(q) ||
      d.city.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q);
    const matchCat = activeCategory === "All" || d.category === activeCategory;
    return matchSearch && matchCat;
  });

  if (filtered.length === 0) {
    container.innerHTML = "";
    noResults.classList.remove("d-none");
    return;
  }
  noResults.classList.add("d-none");

  container.innerHTML = filtered.map(d => `
  <div class="col-lg-4 col-md-6">
  <div class="dest-card">
    <div class="dest-card-img-wrap">
      <img src="${d.image}" alt="${d.name}" class="dest-card-img" loading="lazy"
        onerror="this.src='https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg'" />
      <span class="dest-card-category">${d.category}</span>
    </div>
    <div class="dest-card-body">
      <h4 class="dest-card-title">${d.name}</h4>
      <p class="dest-card-city"><i class="bi bi-geo-alt"></i>${d.city}, Bulacan</p>
      <p class="dest-card-desc">${d.shortDesc}</p>
      <div class="dest-card-meta">
        <span><i class="bi bi-cash"></i>${d.fee}</span>
        <span><i class="bi bi-clock"></i>${d.hours}</span>
      </div>
      <button class="btn-details" onclick="openModal(${d.id})">
        <i class="bi bi-eye me-2"></i>View Details
      </button>
    </div>
  </div>
    </div>
  `).join("");
}

// --- Modal ---
function openModal(id) {
  const d = destinations.find(x => x.id === id);
  if (!d) return;

  document.getElementById("modalBody").innerHTML = `
  <img src="${d.image}" alt="${d.name}" class="modal-dest-img"
onerror="this.src='https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg'" />
  <div class="modal-info">
    <h2 class="modal-dest-title">${d.name}</h2>
    <p class="modal-dest-location"><i class="bi bi-geo-alt-fill me-1"></i>${d.city}, Bulacan &nbsp;|&nbsp; <span class="dest-card-category" style="position:static;font-size:0.8rem">${d.category}</span></p>
    <p style="color:var(--text-mid);line-height:1.75;margin-bottom:20px">${d.fullDesc}</p>

    <div class="modal-info-grid">
      <div class="modal-info-item">
        <label><i class="bi bi-cash me-1"></i>Entrance Fee</label>
        <span>${d.fee}</span>
      </div>
      <div class="modal-info-item">
        <label><i class="bi bi-clock me-1"></i>Opening Hours</label>
        <span>${d.hours}</span>
      </div>
      <div class="modal-info-item">
        <label><i class="bi bi-calendar-check me-1"></i>Best Time to Visit</label>
        <span>${d.bestTime}</span>
      </div>
      <div class="modal-info-item">
        <label><i class="bi bi-geo-alt me-1"></i>Location</label>
        <span>${d.city}, Bulacan</span>
      </div>
    </div>

    <div class="modal-activities">
      <h6><i class="bi bi-lightning-charge-fill me-2"></i>Activities</h6>
      ${d.activities.map(a => `<span class="activity-tag">${a}</span>`).join("")}
    </div>

    <div class="modal-tip">
      <i class="bi bi-lightbulb-fill"></i>
      <strong>Travel Tip:</strong> ${d.tip}
    </div>
  </div>
`;

  new bootstrap.Modal(document.getElementById("destinationModal")).show();
}

// --- Festival Cards ---
function renderFestivals() {
  document.getElementById("festivalCards").innerHTML = festivals.map(f => `
  <div class="col-lg-6 col-md-6">
    <div class="festival-card">
      <div class="festival-card-img-wrap">
        <img src="${f.image}" alt="${f.name}" class="festival-card-img" loading="lazy"
          onerror="this.src='https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg'" />
        <span class="festival-month-badge"><i class="bi bi-calendar3 me-1"></i>${f.month}</span>
      </div>
      <div class="festival-card-body">
        <h4 class="festival-card-title">${f.name}</h4>
        <p class="festival-card-location"><i class="bi bi-geo-alt me-1"></i>${f.location}, Bulacan</p>
        <p class="festival-card-desc">${f.description}</p>
      </div>
    </div>
    </div>
  `).join("");
}

// --- Food Cards ---
function renderFoods() {
  document.getElementById("foodCards").innerHTML = foods.map(f => `
  <div class="col-lg-3 col-md-6">
    <div class="food-card">
      <div class="food-card-img-wrap">
        <img src="${f.image}" alt="${f.name}" class="food-card-img" loading="lazy"
          onerror="this.src='https://images.pexels.com/photos/6249502/pexels-photo-6249502.jpeg'" />
      </div>
      <div class="food-card-body">
        <h4 class="food-card-title">${f.name}</h4>
        <p class="food-card-desc">${f.description}</p>
        <div class="food-card-where">
          <i class="bi bi-pin-map-fill"></i>
          <span>${f.where}</span>
        </div>
      </div>
    </div>
    </div>
  `).join("");
}

// --- Gallery ---
function renderGallery() {
  document.getElementById("galleryGrid").innerHTML = galleryImages.map((img, i) => `
  <div class="gallery-item" onclick="openLightbox(${i})">
      <img src="${img.url}" alt="${img.caption}" loading="lazy"
        onerror="this.src='https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg'"/>
      <div class="gallery-overlay">
        <i class="bi bi-zoom-in"></i>
      </div>
    </div>
  `).join("");
}

// --- Travel Tips ---
function renderTips() {
  document.getElementById("tipCards").innerHTML = travelTips.map(t => `
  <div class="col-lg-4 col-md-6">
    <div class="tip-card">
      <div class="tip-icon"><i class="bi ${t.icon}"></i></div>
      <div>
        <h5>${t.title}</h5>
        <p>${t.text}</p>
      </div>
    </div>
    </div>
  `).join("");
}

// --- Populate Inquiry Dropdown ---
function populateDestDropdown() {
  const sel = document.getElementById("selectedDest");
  destinations.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d.name;
    opt.textContent = `${ d.name } — ${ d.city } `;
    sel.appendChild(opt);
  });
}

// ===================================================
// LIGHTBOX
// ===================================================
function openLightbox(index) {
  lightboxIndex = index;
  updateLightbox();
  document.getElementById("lightbox").classList.remove("d-none");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  document.getElementById("lightbox").classList.add("d-none");
  document.body.style.overflow = "";
}
function updateLightbox() {
  const img = galleryImages[lightboxIndex];
  document.getElementById("lightboxImg").src = img.url;
  document.getElementById("lightboxCaption").textContent = img.caption;
  document.getElementById("lightboxCounter").textContent = `${ lightboxIndex + 1 } / ${galleryImages.length}`;
}
function lightboxNext() {
  lightboxIndex = (lightboxIndex + 1) % galleryImages.length;
  updateLightbox();
}
function lightboxPrev() {
  lightboxIndex = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
  updateLightbox();
}

if (document.getElementById("lightboxClose")) {
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxNext").addEventListener("click", lightboxNext);
  document.getElementById("lightboxPrev").addEventListener("click", lightboxPrev);
  document.getElementById("lightbox").addEventListener("click", function (e) {
    if (e.target === this) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    const lb = document.getElementById("lightbox");
    if (lb.classList.contains("d-none")) return;
    if (e.key === "ArrowRight") lightboxNext();
    if (e.key === "ArrowLeft") lightboxPrev();
    if (e.key === "Escape") closeLightbox();
  });
}

// ===================================================
// SEARCH & FILTER
// ===================================================
if (document.getElementById("searchInput")) {
  document.getElementById("searchInput").addEventListener("input", function () {
    searchQuery = this.value.trim();
    renderDestinations();
  });
}

if (document.getElementById("filterButtons")) {
  document.getElementById("filterButtons").addEventListener("click", function (e) {
    if (!e.target.classList.contains("filter-btn")) return;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    activeCategory = e.target.dataset.cat;
    renderDestinations();
  });
}

// ===================================================
// FORM VALIDATION
// ===================================================
function setField(id, errId, valid, msg) {
  const input = document.getElementById(id);
  const err = document.getElementById(errId);
  if (valid) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    err.classList.remove("show");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    err.classList.add("show");
    if (msg) err.textContent = msg;
  }
  return valid;
}

function validateForm() {
  let valid = true;
  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const dest = document.getElementById("selectedDest").value;
  const date = document.getElementById("travelDate").value;
  const visitors = parseInt(document.getElementById("visitors").value);
  const msg = document.getElementById("message").value.trim();

  if (!setField("fullName", "fullNameErr", name.length > 0)) valid = false;
  if (!setField("email", "emailErr", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) valid = false;
  if (!setField("contact", "contactErr", /^[0-9+\-\s]{7,15}$/.test(contact))) valid = false;
  if (!setField("selectedDest", "destErr", dest !== "")) valid = false;
  if (!setField("travelDate", "dateErr", date !== "")) valid = false;
  if (!setField("visitors", "visitorsErr", !isNaN(visitors) && visitors >= 1)) valid = false;
  if (!setField("message", "messageErr", msg.length > 0)) valid = false;

  return valid;
}

if (document.getElementById("inquiryForm")) {
  document.getElementById("inquiryForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm()) {
      this.classList.add("d-none");
      document.getElementById("formSuccess").classList.remove("d-none");
      window.scrollTo({ top: document.getElementById("inquiry").offsetTop, behavior: "smooth" });
    }
  });

  // Clear validation state on input
  ["fullName", "email", "contact", "selectedDest", "travelDate", "visitors", "message"].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", function () {
      this.classList.remove("is-invalid", "is-valid");
      const errEl = document.getElementById(id + "Err");
      if (errEl) errEl.classList.remove("show");
    });
  });
}

// ===================================================
// NAVBAR SCROLL EFFECT
// ===================================================
window.addEventListener("scroll", function () {
  const nav = document.getElementById("mainNav");
  if (window.scrollY > 60) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

// ===================================================
// INIT — Run Everything on Page Load
// ===================================================
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("destinationCards")) renderDestinations();
  if (document.getElementById("festivalCards")) renderFestivals();
  if (document.getElementById("foodCards")) renderFoods();
  if (document.getElementById("galleryGrid")) renderGallery();
  if (document.getElementById("tipCards")) renderTips();
  if (document.getElementById("selectedDest")) populateDestDropdown();
});