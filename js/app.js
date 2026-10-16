/**
 * ==============================================================================
 * CFASHOP BAMAKO - STREETWEAR & AMERICAN STYLE SHOWCASE
 * Boutique officielle de Styles Américains, Baskets & Jeans Lagos à Bamako
 * Interface 100% Lumineuse, Fond Blanc Éclatant & Design Vibrant
 * ==============================================================================
 */

// --- 1. BASE DE DONNÉES DU CATALOGUE CFASHOP (19 Articles Drops & Nouveautés US) ---
const PRODUCTS_DATA = [
  {
    id: 1,
    title: "Air Jordan 4 Retro 'White Cement' US Edition",
    ref: "SNK-AJ4-01",
    category: "baskets",
    price: 65000,
    formattedPrice: "65 000 FCFA",
    badge: "Drop Exclusif",
    badgeType: "gold",
    image: "images/products/jordan-4-iv.jpg",
    fabric: "Cuir pleine fleur blanc, empiècements suède gris & semelle Air Max",
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "L'icône absolue de la street culture américaine. Silhouette agressive, amorti Nike Air visible et grillage latéral. Import officiel certifié neuf en boîte.",
    rating: 5.0,
    reviewsCount: 48
  },
  {
    id: 2,
    title: "Jean Cargo Baggy Lagos Streetwear Brut",
    ref: "JN-LGS-02",
    category: "jeans",
    price: 28000,
    formattedPrice: "28 000 FCFA",
    badge: "Tendance Lagos",
    badgeType: "gold",
    image: "images/products/jean-cargo-lagos.jpg",
    fabric: "Denim brut lourd 14oz, poches cargo 3D & surpiqûres renforcées",
    sizes: ["S (30)", "M (32)", "L (34)", "XL (36)", "XXL (38)"],
    description: "La coupe ample baggy ultra-tendance importée des styles Lagos et des rues d'Atlanta. Poches cargos 3D profondes, tombe parfaitement sur vos baskets avec un flow décontracté.",
    rating: 4.9,
    reviewsCount: 52
  },
  {
    id: 3,
    title: "Hoodie Oversized US Graphic 'Heavy Drip' Noir",
    ref: "PL-HOD-03",
    category: "pulls",
    price: 24000,
    formattedPrice: "24 000 FCFA",
    badge: "Best-Seller",
    badgeType: "gold",
    image: "images/products/hoodie-oversized-noir.jpg",
    fabric: "Coton lourd 450 GSM intérieur molletonné ultra-doux",
    sizes: ["M", "L", "XL", "XXL"],
    description: "Coupe boxy américaine avec épaules tombantes. Capuche double épaisseur sans cordon et sérigraphie haute définition résistante aux lavages.",
    rating: 4.9,
    reviewsCount: 39
  },
  {
    id: 4,
    title: "Nike Dunk Low Retro 'Varsity Edition'",
    ref: "SNK-DNK-04",
    category: "baskets",
    price: 55000,
    formattedPrice: "55 000 FCFA",
    badge: "Incontournable",
    badgeType: "outline",
    image: "images/products/dunk-low-retro.jpg",
    fabric: "Cuir lisse premium vert sapin et blanc, boîte d'origine Nike rouge & semelle bicolore",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    description: "La sneaker rétro la plus polyvalente de la street culture. Livrée 100% neuve sur boîte rouge Nike avec lacets assortis. S'associe parfaitement avec un jean Lagos ou un short.",
    rating: 4.8,
    reviewsCount: 65
  },
  {
    id: 5,
    title: "Jean Lagos Déchiré Vintage Washed Drip",
    ref: "JN-WSH-05",
    category: "jeans",
    price: 30000,
    formattedPrice: "30 000 FCFA",
    badge: "Drip Street",
    badgeType: "gold",
    image: "images/products/jean-lagos-vintage-crop.jpg",
    fabric: "Denim délavé stone-wash, déchirures doublées genoux & rivets métalliques",
    sizes: ["30", "32", "34", "36", "38"],
    description: "Look vintage américain affirmé. Traitement usé fait main, coupe loose droite avec bas évasé pour reposer naturellement sur la languette de vos sneakers.",
    rating: 4.9,
    reviewsCount: 44
  },
  {
    id: 6,
    title: "Pull Varsity Vintage Bomber 'Brooklyn 96'",
    ref: "PL-VRS-06",
    category: "pulls",
    price: 26000,
    formattedPrice: "26 000 FCFA",
    badge: "Style Collège US",
    badgeType: "outline",
    image: "images/products/varsity-jacket-brooklyn.jpg",
    fabric: "Laine lourde bleu marine, manches cuir marron & patch brodé lettre 'B' chenille",
    sizes: ["M", "L", "XL"],
    description: "L'esprit des universités américaines et de Brooklyn revisité pour le streetwear moderne. Boutons pression métalliques, poignets côtelés et broderie vintage.",
    rating: 4.7,
    reviewsCount: 27
  },
  {
    id: 7,
    title: "Air Force 1 '07 Triple White US Classic",
    ref: "SNK-AF1-07",
    category: "baskets",
    price: 45000,
    formattedPrice: "45 000 FCFA",
    badge: "Classique Blanc",
    badgeType: "outline",
    image: "images/products/af1-triple-white-clean.jpg",
    fabric: "Cuir blanc immaculé épais & semelle à coussin d'air Nike Air",
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45", "46"],
    description: "Le socle de toute garde-robe hip-hop et streetwear américain. Cuir blanc pur immaculé, neuf sous boîte avec étiquette d'authenticité de la boutique CFASHOP.",
    rating: 5.0,
    reviewsCount: 88
  },
  {
    id: 8,
    title: "Jean Carpenter Dickies Multi-Poches Skater Loose",
    ref: "JN-CRP-08",
    category: "jeans",
    price: 27000,
    formattedPrice: "27 000 FCFA",
    badge: "Skater Fit",
    badgeType: "gold",
    image: "images/products/dickies-carpenter-brown.jpg",
    fabric: "Toile robuste duck canvas marron/tan, passant marteau & coupe droite ample décontractée",
    sizes: ["30", "32", "34", "36", "38"],
    description: "L'authentique pantalon de travail américain adopté par la culture skater de New York et Los Angeles. Toile ultra-résistante, poches outils et coupe relaxed pour un confort absolu.",
    rating: 4.8,
    reviewsCount: 31
  },
  {
    id: 9,
    title: "Sweat Capuche Zippé Trapstar Drip Londres/US",
    ref: "PL-ZIP-09",
    category: "pulls",
    price: 32000,
    formattedPrice: "32 000 FCFA",
    badge: "Hype Drop",
    badgeType: "gold",
    image: "images/products/streetwear-zip-hoodie-real.jpg",
    fabric: "Coton lourd bicolore vert forêt & gris chiné, zip intégral & finitions bord-côtes",
    sizes: ["S", "M", "L", "XL"],
    description: "La pièce préférée des rappeurs et des influenceurs. Zippé du bas jusqu'à la capuche, finitions métalliques lourdes, manches bicolores et confort thermique optimal.",
    rating: 4.9,
    reviewsCount: 36
  },
  {
    id: 10,
    title: "Sneakers Retro Low 'Travis Olive' Signature",
    ref: "SNK-TRV-10",
    category: "baskets",
    price: 75000,
    formattedPrice: "75 000 FCFA",
    badge: "Graal Collector",
    badgeType: "gold",
    image: "images/products/travis-scott-olive.jpg",
    fabric: "Suède doux vert olive, cuir blanc premium & swoosh inversé",
    sizes: ["41", "42", "43", "44", "45"],
    description: "Le summum du style sneakerhead. Détails brodés Cactus Jack, swoosh inversé noir signature, triple jeu de lacets (noir/olive/rouge). Quantités très limitées à Bamako.",
    rating: 5.0,
    reviewsCount: 57
  },
  {
    id: 11,
    title: "Ensemble Pull Tracksuit Fleece Tech Street",
    ref: "PL-ENS-11",
    category: "pulls",
    price: 45000,
    formattedPrice: "45 000 FCFA",
    badge: "Pack Complet",
    badgeType: "gold",
    image: "images/products/tracksuit-hoodie-set.jpg",
    fabric: "Pack complet 2 pièces : Hoodie streetwear noir avec poche ventrale zippée + Pantalon de jogging assorti",
    sizes: ["M", "L", "XL", "XXL"],
    description: "L'ensemble complet 2 pièces indispensable pour un flow urbain immédiat. Coupe athlétique confortable avec bandes latérales blanches contrastées et finitions resserrées.",
    rating: 4.8,
    reviewsCount: 41
  },
  {
    id: 12,
    title: "Pack Street : Casquette NY Snapback Broderie 3D",
    ref: "ACC-ST-12",
    category: "accessoires",
    price: 18000,
    formattedPrice: "18 000 FCFA",
    badge: "Accessoire US",
    badgeType: "outline",
    image: "images/products/snapback-ny-front.jpg",
    fabric: "Laine structurée bleu roi & visière plate rouge, broderie épaisse New York Giants NY en relief",
    sizes: ["Taille Unique Ajustable"],
    description: "La casquette américaine emblématique par excellence. Calotte 6 panneaux rigide, visière plate rouge, œillets d'aération rouges et attache snapback réglable à l'arrière.",
    rating: 4.7,
    reviewsCount: 33
  },
  {
    id: 13,
    title: "Ensemble Streetwear Baseball '88' Cossly Noir & Gold",
    ref: "ENS-CSL-13",
    category: "pulls",
    price: 28000,
    formattedPrice: "28 000 FCFA",
    badge: "Nouveauté Drop",
    badgeType: "gold",
    image: "images/products/ensemble-cossly-baseball-88.jpg",
    fabric: "Ensemble 2 pièces Cossly : T-shirt col V style jersey baseball noir avec numéro '88' brodé jaune + Jogging assorti à liserés blancs",
    sizes: ["M", "L", "XL", "XXL"],
    description: "Le combo streetwear sportif par excellence importé par CFASHOP. Coupe relaxed athlétique, col contrasté bord-côte bicolore, numéro 88 en patch relief et bas de jogging ajusté. Confort absolu à Bamako.",
    rating: 4.9,
    reviewsCount: 24
  },
  {
    id: 14,
    title: "Ensemble Côtelé Minimalist Cossly Écru Crème",
    ref: "ENS-CSL-14",
    category: "pulls",
    price: 25000,
    formattedPrice: "25 000 FCFA",
    badge: "Arrivage Frais",
    badgeType: "outline",
    image: "images/products/ensemble-cossly-ecru.jpg",
    fabric: "Ensemble 2 pièces Cossly : T-shirt col rond en maille côtelée stretch premium + Pantalon fluide avec cordon de serrage blanc",
    sizes: ["M", "L", "XL", "XXL"],
    description: "Élégance décontractée et tendance monochrome épurée. Maille côtelée respirante adaptée au climat chaud de Bamako, tombé impeccable et cordon de serrage contrasté.",
    rating: 4.8,
    reviewsCount: 19
  },
  {
    id: 15,
    title: "Ensemble Côtelé Summer Cossly Bleu Ciel Pastel",
    ref: "ENS-CSL-15",
    category: "pulls",
    price: 25000,
    formattedPrice: "25 000 FCFA",
    badge: "Tendance Drip",
    badgeType: "gold",
    image: "images/products/ensemble-cossly-bleu-ciel.jpg",
    fabric: "Ensemble 2 pièces Cossly : T-shirt coupe droite en coton côtelé texturé + Pantalon jogging slim droit avec cordon de serrage",
    sizes: ["M", "L", "XL", "XXL"],
    description: "Un coloris bleu ciel pastel ultra-frais très demandé. Parfaitement assorti à une paire de Nike Air Force 1 ou Dunk Low blanches. Finition premium avec coutures renforcées.",
    rating: 4.9,
    reviewsCount: 32
  },
  {
    id: 16,
    title: "Ensemble Côtelé Cossly Urban Slate Ardoise",
    ref: "ENS-CSL-16",
    category: "pulls",
    price: 25000,
    formattedPrice: "25 000 FCFA",
    badge: "Style Urbain",
    badgeType: "outline",
    image: "images/products/ensemble-cossly-ardoise.jpg",
    fabric: "Ensemble 2 pièces Cossly en texture côtelée haut de gamme, nuance bleu ardoise / pétrole moderne",
    sizes: ["M", "L", "XL", "XXL"],
    description: "La teinte bleu ardoise profonde s'impose cette saison dans les défilés streetwear d'Atlanta et de Lagos. Tissu doux au toucher, anti-froissement et ultra-résistant.",
    rating: 4.8,
    reviewsCount: 17
  },
  {
    id: 17,
    title: "Mocassins Driving Shoes Cuir Souple Noir Crocodile",
    ref: "MOC-LCS-17",
    category: "baskets",
    price: 32000,
    formattedPrice: "32 000 FCFA",
    badge: "Prestige Cuir",
    badgeType: "gold",
    image: "images/products/mocassin-croc-cuir-noir.jpg",
    fabric: "Cuir véritable souple noir grainé, finitions cousues main, picots antidérapants & logo crocodile en métal brossé",
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "Le mocassin iconique driving shoe pour homme moderne. Confectionné en cuir ultra-souple avec semelle ergonomique à picots en caoutchouc pour une adhérence parfaite et un confort supérieur toute la journée.",
    rating: 5.0,
    reviewsCount: 38
  },
  {
    id: 18,
    title: "Mocassins Driving Shoes Cuir Souple Gris Anthracite",
    ref: "MOC-LCS-18",
    category: "baskets",
    price: 32000,
    formattedPrice: "32 000 FCFA",
    badge: "Élégance US",
    badgeType: "outline",
    image: "images/products/mocassin-croc-cuir-gris.jpg",
    fabric: "Cuir nubuck / suède doux gris anthracite haut de gamme, semelle à pavés flexibles & crocodile métallique argenté",
    sizes: ["40", "41", "42", "43", "44"],
    description: "Un coloris sobre et raffiné qui sublime un pantalon chino ou un jean baggy brut. Doublure respirante et assise plantaire molletonnée pour une démarche légère et distinguée.",
    rating: 4.9,
    reviewsCount: 22
  },
  {
    id: 19,
    title: "Polo Streetwear Noir All-Over Imprimé Fruits Tropicaux",
    ref: "POL-TRP-19",
    category: "pulls",
    price: 22000,
    formattedPrice: "22 000 FCFA",
    badge: "Collection Miami",
    badgeType: "gold",
    image: "images/products/polo-tropical-fruits-noir.jpg",
    fabric: "Coton piqué stretch respirant, col polo côtelé noir & motifs tropicaux ananas, bananes et fruits vintage",
    sizes: ["M", "L", "XL", "XXL"],
    description: "La vibe rétro Miami et Venice Beach à Bamako. Coupe ajustée qui met en valeur la carrure, tissu stretch léger et respirant idéal pour les sorties chill, événements et soirées.",
    rating: 4.8,
    reviewsCount: 29
  }
];

// Numéro WhatsApp officiel de CFASHOP Bamako
const BOUTIQUE_WHATSAPP_NUMBER = "22398345971";

// --- 2. GESTION DE L'ÉTAT LOCAL (STATE MANAGEMENT) ---
const state = {
  category: "all",
  search: "",
  sort: "default",
  wishlist: JSON.parse(localStorage.getItem("cfashop_wishlist") || "[]"),
  activeProduct: null,
  selectedSize: null
};

// --- 3. INITIALISATION ---
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateWishlistCount();
  setupEventListeners();
  setupNavbarScroll();
  setupBackToTop();
  setupAccordionFix();
  checkUrlParamsForProductModal();
});

// Ouvre automatiquement la fiche si un client clique sur le lien WhatsApp partagé
function checkUrlParamsForProductModal() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("product");
    if (productId) {
      setTimeout(() => {
        openProductModal(parseInt(productId, 10));
      }, 350);
    }
  } catch (e) {
    console.error("Erreur lecture URL params", e);
  }
}

// Correctif proactif pour éviter que Tailwind masque le contenu de l'accordéon
function setupAccordionFix() {
  const fix = () => {
    document.querySelectorAll('.accordion-collapse').forEach(el => {
      el.style.setProperty('visibility', 'visible', 'important');
      if (el.classList.contains('show')) {
        el.style.setProperty('display', 'block', 'important');
      }
    });
  };
  fix();
  document.querySelectorAll('.accordion-collapse').forEach(el => {
    el.addEventListener('show.bs.collapse', () => {
      el.style.setProperty('visibility', 'visible', 'important');
      el.style.setProperty('display', 'block', 'important');
    });
    el.addEventListener('shown.bs.collapse', () => {
      el.style.setProperty('visibility', 'visible', 'important');
      el.style.setProperty('display', 'block', 'important');
    });
  });
}

// --- 4. GESTION DE LA NAVBAR & DÉFILEMENT ---
function setupNavbarScroll() {
  const navbar = document.getElementById("main-navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });
}

function setupBackToTop() {
  const btn = document.getElementById("back-to-top-btn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.remove("d-none");
    } else {
      btn.classList.add("d-none");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --- 5. RENDU DU CATALOGUE CFASHOP (DESIGN LUMINEUX SUR FOND BLANC) ---
function renderProducts() {
  const container = document.getElementById("products-grid");
  if (!container) return;

  // Filtrage par catégorie
  let filtered = PRODUCTS_DATA.filter(item => {
    if (state.category !== "all" && item.category !== state.category) {
      return false;
    }
    // Recherche
    if (state.search.trim() !== "") {
      const q = state.search.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchRef = item.ref.toLowerCase().includes(q);
      const matchFabric = item.fabric.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      if (!matchTitle && !matchRef && !matchFabric && !matchDesc) {
        return false;
      }
    }
    return true;
  });

  // Tri des produits
  if (state.sort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Rendu vide
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-12 py-5 text-center fade-in-up">
        <div class="p-5 bg-white border rounded-4 d-inline-block max-w-md mx-auto shadow-sm">
          <i class="fa-solid fa-shoe-prints text-muted fa-3x mb-3"></i>
          <h4 class="text-slate-900 fw-bold mb-2">Aucun article trouvé</h4>
          <p class="text-muted small mb-4">Aucun vêtement ou sneaker ne correspond à votre recherche "<strong>${escapeHtml(state.search)}</strong>".</p>
          <button class="btn btn-gold btn-sm px-4" onclick="resetFilters()">
            <i class="fa-solid fa-arrows-rotate me-2"></i>Réinitialiser les filtres
          </button>
        </div>
      </div>
    `;
    return;
  }

  // Rendu des cartes blanches lumineuses
  container.innerHTML = filtered.map(product => {
    const isWishlisted = state.wishlist.includes(product.id);
    const badgeHtml = product.badgeType === "gold"
      ? `<span class="badge-gold shadow-sm">${product.badge}</span>`
      : `<span class="badge-outline-gold">${product.badge}</span>`;

    return `
      <div class="col-12 col-md-6 col-lg-4 col-xl-3 fade-in-up">
        <div class="glass-card product-card h-100 d-flex flex-column bg-white border border-slate-200 group">
          <!-- Image & Badges -->
          <div class="position-relative overflow-hidden" style="height: 290px; background: #f8fafc;">
            <img 
              src="${product.image}" 
              alt="${product.title}" 
              class="w-100 h-100 object-fit-cover card-img-zoom"
              loading="lazy"
            >
            <div class="position-absolute top-0 start-0 m-3 d-flex flex-column gap-1">
              ${badgeHtml}
            </div>

            <!-- Bouton Wishlist Cœur -->
            <button 
              class="position-absolute top-0 end-0 m-3 btn btn-sm rounded-circle d-flex align-items-center justify-content-center p-0 ${isWishlisted ? 'btn-danger text-white' : 'btn-white bg-white text-danger shadow-sm'}"
              style="width: 38px; height: 38px; border: 1px solid rgba(0,0,0,0.08);"
              onclick="toggleWishlist(${product.id})"
              title="${isWishlisted ? 'Retirer des coups de cœur' : 'Ajouter aux coups de cœur'}"
            >
              <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>

            <!-- Bouton Aperçu Rapide au survol -->
            <div class="position-absolute bottom-0 start-0 w-100 p-3 bg-gradient-to-t from-black/70 to-transparent">
              <button 
                class="btn btn-gold w-100 py-2 small shadow font-bold"
                onclick="openProductModal(${product.id})"
              >
                <i class="fa-solid fa-eye me-2"></i>Fiche & Pointures Disponibles
              </button>
            </div>
          </div>

          <!-- Contenu descriptif Lumineux -->
          <div class="p-4 d-flex flex-column flex-grow-1 justify-content-between bg-white">
            <div>
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="text-xs text-muted text-uppercase tracking-wider font-mono fw-bold">Réf: ${product.ref}</span>
                <span class="text-xs text-warning fw-bold d-flex align-items-center">
                  <i class="fa-solid fa-star me-1"></i>${product.rating}
                </span>
              </div>
              <h5 class="text-slate-900 font-street fs-6 fw-bold mb-2 line-clamp-1" title="${product.title}">
                ${product.title}
              </h5>
              <p class="text-muted text-xs mb-3 line-clamp-2" style="line-height: 1.6;">
                ${product.fabric}
              </p>
            </div>

            <div class="pt-3 border-top border-slate-100 d-flex justify-content-between align-items-center">
              <div>
                <span class="text-xs text-muted d-block font-medium">Prix CFASHOP</span>
                <span class="fw-black text-danger font-mono fs-5">${product.formattedPrice}</span>
              </div>

              <!-- Bouton Commande Directe WhatsApp -->
              <a 
                href="${getWhatsAppUrl(product)}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-whatsapp btn-sm px-3 py-2 d-flex align-items-center gap-1 font-bold"
                title="Commander sur WhatsApp"
              >
                <i class="fa-brands fa-whatsapp fs-6"></i>
                <span class="d-none d-sm-inline">Commander</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// --- 6. MODALE INTERACTIVE BLANCHE & LUMINEUSE ---
function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  state.activeProduct = product;
  state.selectedSize = product.sizes[0] || "Standard";

  const modalElement = document.getElementById("productModal");
  if (!modalElement) return;

  // Mise à jour des contenus
  document.getElementById("modal-product-img").src = product.image;
  document.getElementById("modal-product-title").innerText = product.title;
  document.getElementById("modal-product-ref").innerText = `Référence : ${product.ref}`;
  document.getElementById("modal-product-price").innerText = product.formattedPrice;
  document.getElementById("modal-product-fabric").innerText = product.fabric;
  document.getElementById("modal-product-desc").innerText = product.description;
  document.getElementById("modal-product-rating").innerHTML = `
    <i class="fa-solid fa-star text-warning"></i>
    <span class="fw-bold text-dark ms-1">${product.rating}</span>
    <span class="text-muted ms-1">(${product.reviewsCount} clients vérifiés à Bamako)</span>
  `;

  // Badges
  const badgeContainer = document.getElementById("modal-product-badges");
  badgeContainer.innerHTML = product.badgeType === "gold"
    ? `<span class="badge-gold">${product.badge}</span>`
    : `<span class="badge-outline-gold">${product.badge}</span>`;

  // Sélecteur de tailles
  const sizesContainer = document.getElementById("modal-sizes-container");
  sizesContainer.innerHTML = product.sizes.map((size, index) => `
    <button 
      type="button" 
      class="size-btn ${index === 0 ? 'selected' : ''}" 
      onclick="selectSize('${size}', this)"
    >
      ${size}
    </button>
  `).join("");

  // Bouton WhatsApp dynamique
  updateModalWhatsAppButton();

  // Afficher la modale Bootstrap
  const bsModal = bootstrap.Modal.getOrCreateInstance(modalElement);
  bsModal.show();
}

function selectSize(size, btnElement) {
  state.selectedSize = size;
  const allBtns = document.querySelectorAll("#modal-sizes-container .size-btn");
  allBtns.forEach(b => b.classList.remove("selected"));
  btnElement.classList.add("selected");
  updateModalWhatsAppButton();
}

function updateModalWhatsAppButton() {
  const btn = document.getElementById("modal-whatsapp-btn");
  if (!btn || !state.activeProduct) return;

  const url = getWhatsAppUrl(state.activeProduct, state.selectedSize);
  btn.setAttribute("href", url);
}

// Lien WhatsApp officiel avec lien direct de l'article et lien de la photo
function getWhatsAppUrl(product, size = null) {
  const chosenSize = size || (product.sizes ? product.sizes[0] : "Standard");
  
  // Construction de l'URL absolue du produit et de sa photo
  const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/');
  const productPageUrl = `${baseUrl}boutique.html?product=${product.id}#productModal`;
  const photoUrl = product.image.startsWith("http") ? product.image : `${baseUrl}${product.image}`;

  const text = `Bonjour CFASHOP Bamako,\n\n` +
               `Je souhaite commander ce modèle repéré sur votre site vitrine officiel :\n\n` +
               `👟 Article : ${product.title}\n` +
               `🏷️ Référence : ${product.ref}\n` +
               `💵 Prix officiel : ${product.formattedPrice}\n` +
               `📏 Pointure / Taille : ${chosenSize}\n` +
               `🖼️ Voir la photo de l'article : ${photoUrl}\n` +
               `🔗 Lien de la fiche : ${productPageUrl}\n\n` +
               `Pouvez-vous me confirmer la disponibilité en stock à la boutique de Dialakorobougou et les modalités de livraison ? Merci !`;

  return `https://wa.me/${BOUTIQUE_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// --- 7. GESTION DES COUPS DE CŒUR (WISHLIST) ---
function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  const product = PRODUCTS_DATA.find(p => p.id === productId);

  if (index === -1) {
    state.wishlist.push(productId);
    showToast(`"${product?.title || 'Article'}" ajouté à vos coups de cœur 🔥`);
  } else {
    state.wishlist.splice(index, 1);
    showToast(`Article retiré de vos favoris.`);
  }

  localStorage.setItem("cfashop_wishlist", JSON.stringify(state.wishlist));
  updateWishlistCount();
  renderProducts();
  renderWishlistDrawer();
}

function updateWishlistCount() {
  const countBadge = document.getElementById("wishlist-count");
  const countBadgeMobile = document.getElementById("wishlist-count-mobile");
  const total = state.wishlist.length;

  if (countBadge) {
    countBadge.innerText = total;
    countBadge.style.display = total > 0 ? "inline-block" : "none";
  }
  if (countBadgeMobile) {
    countBadgeMobile.innerText = total;
    countBadgeMobile.style.display = total > 0 ? "inline-block" : "none";
  }
}

function renderWishlistDrawer() {
  const container = document.getElementById("wishlist-items-container");
  const footerAction = document.getElementById("wishlist-footer-action");
  if (!container) return;

  if (state.wishlist.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5">
        <i class="fa-regular fa-heart text-muted fa-3x mb-3"></i>
        <h5 class="text-slate-900 fw-bold">Aucun coup de cœur pour le moment</h5>
        <p class="text-muted small">Cliquez sur le cœur d'un modèle pour l'enregistrer dans votre sélection CFASHOP.</p>
      </div>
    `;
    if (footerAction) footerAction.style.display = "none";
    return;
  }

  const wishlistedProducts = PRODUCTS_DATA.filter(p => state.wishlist.includes(p.id));

  container.innerHTML = wishlistedProducts.map(p => `
    <div class="d-flex align-items-center gap-3 p-3 mb-2 bg-white border border-slate-200 rounded-3 shadow-sm">
      <img src="${p.image}" alt="${p.title}" class="rounded object-fit-cover" style="width: 65px; height: 75px;">
      <div class="flex-grow-1">
        <h6 class="text-slate-900 fw-bold mb-1 small">${p.title}</h6>
        <span class="text-xs text-danger font-mono fw-black d-block mb-1">${p.formattedPrice}</span>
        <span class="text-xs text-muted">Réf: ${p.ref}</span>
      </div>
      <div class="d-flex flex-column gap-2">
        <a href="${getWhatsAppUrl(p)}" target="_blank" class="btn btn-whatsapp btn-sm p-2 text-center" title="Commander">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
        <button class="btn btn-outline-danger btn-sm p-2" onclick="toggleWishlist(${p.id})" title="Retirer">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  `).join("");

  if (footerAction) {
    footerAction.style.display = "block";
    const waAllUrl = getWhatsAppWishlistAllUrl(wishlistedProducts);
    document.getElementById("wishlist-whatsapp-all-btn")?.setAttribute("href", waAllUrl);
  }
}

function getWhatsAppWishlistAllUrl(products) {
  const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/');
  let listText = products.map((p, idx) => {
    const pUrl = `${baseUrl}boutique.html?product=${p.id}#productModal`;
    return `${idx + 1}. ${p.title}\n   • Réf : ${p.ref} | Prix : ${p.formattedPrice}\n   • Voir l'article : ${pUrl}`;
  }).join("\n\n");
  
  const message = `Bonjour CFASHOP Bamako,\n\nVoici ma sélection de modèles préférés repérés sur votre site vitrine :\n\n${listText}\n\nSont-ils tous en stock actuellement à la boutique de Dialakorobougou pour un achat groupé ? Merci !`;
  return `https://wa.me/${BOUTIQUE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// --- 8. ÉCOUTEURS D'ÉVÉNEMENTS & RECHERCHE ---
function setupEventListeners() {
  // Filtres
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.category = btn.getAttribute("data-category") || "all";
      renderProducts();
    });
  });

  // Recherche
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.search = e.target.value;
      renderProducts();
    });
  }

  // Tri
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sort = e.target.value;
      renderProducts();
    });
  }

  // Prise de rendez-vous / commande rapide
  const contactForm = document.getElementById("appointment-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("client-name")?.value;
      const phone = document.getElementById("client-phone")?.value;
      const date = document.getElementById("appointment-date")?.value;
      const notes = document.getElementById("appointment-notes")?.value || "";

      const waText = `Yo CFASHOP Bamako,\n\nJe veux réserver un passage en boutique pour essayage :\n` +
                     `👤 Nom : ${name}\n` +
                     `📞 Téléphone : ${phone}\n` +
                     `📅 Date prévue : ${date}\n` +
                     `👟 Articles ciblés : ${notes}\n\nConfirmez-moi la disponibilité. Merci !`;

      window.open(`https://wa.me/${BOUTIQUE_WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`, "_blank");
      showToast("Message envoyé à CFASHOP sur WhatsApp ! 🔥");
      contactForm.reset();
    });
  }
}

function resetFilters() {
  state.category = "all";
  state.search = "";
  state.sort = "default";

  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";

  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) sortSelect.value = "default";

  document.querySelectorAll(".filter-btn").forEach(btn => {
    if (btn.getAttribute("data-category") === "all") {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  renderProducts();
}

// --- 9. NOTIFICATION TOAST LUMINEUX ---
function showToast(message) {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.className = "position-fixed bottom-0 end-0 p-3";
    toastContainer.style.zIndex = "1090";
    document.body.appendChild(toastContainer);
  }

  const toastId = "toast-" + Date.now();
  const toastHtml = `
    <div id="${toastId}" class="toast toast-custom align-items-center show fade bg-white" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body small fw-bold text-dark">
          <i class="fa-solid fa-fire text-danger me-2"></i>${message}
        </div>
        <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Fermer"></button>
      </div>
    </div>
  `;

  toastContainer.insertAdjacentHTML("beforeend", toastHtml);
  setTimeout(() => {
    const el = document.getElementById(toastId);
    if (el) el.remove();
  }, 3500);
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// Exposition globale
window.toggleWishlist = toggleWishlist;
window.openProductModal = openProductModal;
window.selectSize = selectSize;
window.renderWishlistDrawer = renderWishlistDrawer;
window.resetFilters = resetFilters;
