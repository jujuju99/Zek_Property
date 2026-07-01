const properties = [
  {
    id: "rumahA",
    name: "Residensi",
    image: "images/sempurna.png",
    price: "RM 350,000",
    location: "Nilai, Negeri Sembilan",
    size: "795 sqft",
    bedrooms: 3,
    bathrooms: 2,
    type: "Rumah Residensi",
    status: "Available",
    description:
      "Residensi yang tidak terlalu jauh dari KLIA. Sesuai untuk pembeli yang bekerja di kawasan KLIA, Salak Tinggi dan Nilai. Berdekatan dengan sekolah, kedai, kemudahan awam dan laluan highway.",
    whatsappText: "Saya berminat dengan Residensi Sempurna"
  },
  {
    id: "rumahB",
    name: "Residensi",
    image: "images/alpinia.jpg",
    price: "RM 400,000",
    location: "Nilai, Negeri Sembilan",
    size: "Info tidak tersedia",
    bedrooms: 4,
    bathrooms: 2,
    type: "Rumah Residensi",
    status: "Available",
    description:
      "Residensi yang luas dan sesuai untuk keluarga. Terletak di kawasan kejiranan yang selesa serta mempunyai akses kepada kemudahan harian seperti kedai, sekolah dan laluan utama.",
    whatsappText: "Saya berminat dengan Residensi Alpinia"
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

// Pergi ke page detail rumah
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
    const whatsappMessage = `${property.whatsappText}. Saya ingin tahu maklumat lanjut tentang ${property.name} yang berharga ${property.price}.`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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
