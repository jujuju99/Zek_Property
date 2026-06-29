const properties = [
  {
    id: "rumahA",
    name: "Rumah A",
    image: "images/rumah-a.jpg",
    price: "RM 350,000",
    location: "Sungai Besar, Selangor",
    size: "20 x 70 sqft",
    bedrooms: 3,
    bathrooms: 2,
    type: "Rumah Teres",
    status: "Available",
    description:
      "Rumah teres yang sesuai untuk keluarga kecil. Berdekatan sekolah, kedai dan jalan utama.",
    whatsappText: "SayaNkRumahA"
  },
  {
    id: "rumahB",
    name: "Rumah B",
    image: "images/rumah-b.jpg",
    price: "RM 420,000",
    location: "Shah Alam, Selangor",
    size: "22 x 75 sqft",
    bedrooms: 4,
    bathrooms: 3,
    type: "Double Storey",
    status: "Available",
    description:
      "Rumah luas dengan kawasan kejiranan yang selesa dan kemudahan lengkap.",
    whatsappText: "SayaNkRumahB"
  },
  {
    id: "rumahC",
    name: "Rumah C",
    image: "images/rumah-c.jpg",
    price: "RM 280,000",
    location: "Kuala Selangor, Selangor",
    size: "18 x 65 sqft",
    bedrooms: 3,
    bathrooms: 2,
    type: "Rumah Mampu Milik",
    status: "Available",
    description:
      "Rumah mampu milik dengan lokasi strategik dan sesuai untuk pembeli rumah pertama.",
    whatsappText: "SayaNkRumahC"
  }
];

const phoneNumber = "60176791849";

// ===============================
// DISPLAY PROPERTY LIST DI INDEX
// ===============================
const propertyList = document.getElementById("propertyList");

if (propertyList) {
  properties.forEach((property) => {
    const card = document.createElement("div");
    card.className = "property-card";

    card.innerHTML = `
      <div class="property-image">
        <img src="${property.image}" alt="${property.name}">
        <span class="property-status">${property.status}</span>
      </div>

      <div class="property-info">
        <p class="property-type">${property.type}</p>
        <h3>${property.name}</h3>

        <div class="property-meta">
          <span>${property.bedrooms} Bilik</span>
          <span>${property.bathrooms} Bilik Air</span>
          <span>${property.size}</span>
        </div>

        <p class="property-location">${property.location}</p>

        <div class="property-bottom">
          <h4>${property.price}</h4>
          <button onclick="viewDetail('${property.id}')">View Detail</button>
        </div>
      </div>
    `;

    propertyList.appendChild(card);
  });
}

// pergi page detail
function viewDetail(id) {
  window.location.href = `detail.html?id=${id}`;
}

// ===============================
// DISPLAY DETAIL DI DETAIL PAGE
// ===============================
const propertyDetail = document.getElementById("propertyDetail");

if (propertyDetail) {
  const urlParams = new URLSearchParams(window.location.search);
  const propertyId = urlParams.get("id");

  const property = properties.find((item) => item.id === propertyId);

  if (property) {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      property.whatsappText
    )}`;

    propertyDetail.innerHTML = `
      <div class="detail-card">
        <div class="detail-image">
          <img src="${property.image}" alt="${property.name}">
        </div>

        <div class="detail-info">
          <p class="property-type">${property.type}</p>
          <h2>${property.name}</h2>
          <h3>${property.price}</h3>

          <p class="detail-location">
            <strong>Lokasi:</strong> ${property.location}
          </p>

          <div class="detail-grid">
            <div>
              <span>Saiz</span>
              <strong>${property.size}</strong>
            </div>

            <div>
              <span>Bilik</span>
              <strong>${property.bedrooms}</strong>
            </div>

            <div>
              <span>Bilik Air</span>
              <strong>${property.bathrooms}</strong>
            </div>

            <div>
              <span>Status</span>
              <strong>${property.status}</strong>
            </div>
          </div>

          <div class="detail-description">
            <h4>Description</h4>
            <p>${property.description}</p>
          </div>

          <a class="whatsapp-btn" href="${whatsappLink}" target="_blank">
            WhatsApp Sekarang
          </a>
        </div>
      </div>
    `;
  } else {
    propertyDetail.innerHTML = `
      <div class="not-found">
        <h2>Rumah tidak dijumpai</h2>
        <p>Sila kembali ke senarai rumah dan pilih rumah yang tersedia.</p>
        <a href="index.html#products">Kembali ke Our Product</a>
      </div>
    `;
  }
}