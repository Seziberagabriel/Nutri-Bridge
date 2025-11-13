const i18n = {
  en: {
    home_title: "Welcome to NutriBridge",
    home_intro:
      "NutriBridge empowers Rwandan communities with nutrition education, simple tracking tools, and connections to local support.",
    home_mission:
      "Our mission is to combat malnutrition and undernutrition by advocating equitable access to nutritious food and promoting sustainable solutions.",
    kpis_title: "Community Snapshot",
    kpi_awareness: "Awareness Modules Completed",
    kpi_children: "Children Monitored",
    kpi_diversity: "Dietary Diversity Logs",
    education_title: "Nutrition Education",
    education_intro:
      "Explore bite-sized modules on balanced diets, maternal and child nutrition, hygiene, and food safety.",
    quiz_title: "Quick Quiz",
    quiz_q1: "Which food group is rich in vitamin A?",
    quiz_q1_a: ["Refined grains", "Leafy green vegetables", "Sugary snacks"],
    quiz_q2: "Why is dietary diversity important?",
    quiz_q2_a: ["It improves nutrient intake", "It reduces physical activity", "It increases hunger"],
    quiz_submit: "Submit Quiz",
    quiz_score: "Your score",
    tracking_title: "Nutrition Tracking",
    bmi_title: "Adult BMI Calculator",
    height_cm: "Height (cm)",
    weight_kg: "Weight (kg)",
    calculate: "Calculate",
    bmi_result: "BMI",
    bmi_status: "Status",
    muac_title: "Child MUAC (6–59 months)",
    muac_cm: "MUAC (cm)",
    muac_result: "Classification",
    muac_note:
      "MUAC helps identify acute malnutrition in children aged 6–59 months.",
    diet_title: "Dietary Diversity",
    diet_intro:
      "Select food groups consumed today to estimate dietary diversity.",
    groups: [
      "Grains/roots/tubers",
      "Legumes/nuts",
      "Dairy",
      "Meat/fish/eggs",
      "Vitamin A rich fruits/veg",
      "Other fruits/veg",
      "Fats/oils",
    ],
    save_log: "Save Log",
    diversity_score: "Score",
    connect_title: "Community Connect",
    connect_intro:
      "Browse local suppliers, NGOs, and health workers. Use filters to narrow down.",
    filter_type: "Type",
    filter_location: "Location",
    export_data: "Export Data",
    import_data: "Import Data",
    import_hint: "Paste JSON exported from NutriBridge",
  },
  rw: {
    home_title: "Murakaza neza kuri NutriBridge",
    home_intro:
      "NutriBridge ifasha imiryango yo mu Rwanda mu kwigishwa ibijyanye n'imirire, kugenzura byoroshye, no guhuza n'abatanga serivisi z'ubuzima.",
    home_mission:
      "Intego ni kurwanya imirire mibi no kongera uburinganire mu kubona ibiribwa byiza no gushyigikira ibisubizo birambye.",
    kpis_title: "Isura y'Umuryango",
    kpi_awareness: "Amasomo arangiye",
    kpi_children: "Abana bagenzuwe",
    kpi_diversity: "Amakarita y'imirire itandukanye",
    education_title: "Amasomo y'Imirire",
    education_intro:
      "Reba amasomo magufi ku biribwa byuzuye, imirire y'ababyeyi n'abana, isuku, n'umutekano w'ibiribwa.",
    quiz_title: "Ikizamini gito",
    quiz_q1: "Ni iyihe itsinda ry'ibiribwa rikungahaye kuri vitamini A?",
    quiz_q1_a: ["Impngabu/amasuka avunwe", "Imboga z'icyatsi", "Ibiryo birimo isukari"],
    quiz_q2: "Kuki imirire itandukanye ari ingenzi?",
    quiz_q2_a: [
      "Yongera intungamubiri",
      "Iganisha ku kugabanya imyitozo",
      "Ishyira ku kwiyongera kw'inzara",
    ],
    quiz_submit: "Ohereza",
    quiz_score: "Amanota yawe",
    tracking_title: "Kugenzura Imirire",
    bmi_title: "Kubara BMI (Abakuze)",
    height_cm: "Uburebure (cm)",
    weight_kg: "Uburemere (kg)",
    calculate: "Bara",
    bmi_result: "BMI",
    bmi_status: "Igisubizo",
    muac_title: "MUAC y'Umwana (amezi 6–59)",
    muac_cm: "MUAC (cm)",
    muac_result: "Icyiciro",
    muac_note:
      "MUAC ifasha kumenya imirire mibi y'iby'ihutirwa ku bana bafite amezi 6–59.",
    diet_title: "Itandukaniro ry'Imirire",
    diet_intro:
      "Hitamo amatsinda y'ibiribwa byafashwe uyu munsi kugira ngo ubone isuzuma ry'itandukaniro.",
    groups: [
      "Ibigori/ibijumba/ibinyampeke",
      "Ibishyimbo/imbuto z'ibinyamisogwe",
      "Amata",
      "Inyama/amasamaki/amagi",
      "Imbuto/imboga zikungahaye kuri vitamini A",
      "Izindi mbuto/imboga",
      "Amavuta/ibinure",
    ],
    save_log: "Bika",
    diversity_score: "Amanota",
    connect_title: "Guhuza Umuryango",
    connect_intro:
      "Reba ababikora, NGOs, n'abaganga b'ubuzima. Koresha amasekerere kugira ngo ugabanye.",
    filter_type: "Ubwoko",
    filter_location: "Aho bari",
    export_data: "Sohora Umubiko",
    import_data: "Kuzana Umubiko",
    import_hint: "Shyiramo JSON wakuye muri NutriBridge",
  },
};

const educationModules = [
  {
    key: "balanced_plate",
    title: "Balanced Plate",
    desc: "Combine carbohydrates, proteins, fats, and plenty of fruits/vegetables.",
    resources: [
      { label: "WHO healthy diet", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" },
      { label: "FAO food-based guidelines", url: "https://www.fao.org/nutrition/education/food-dietary-guidelines" }
    ],
  },
  {
    key: "maternal_child",
    title: "Maternal & Child Nutrition",
    desc: "Exclusive breastfeeding for 6 months; diverse diets for children.",
    resources: [
      { label: "WHO breastfeeding", url: "https://www.who.int/health-topics/breastfeeding" },
      { label: "UNICEF child nutrition", url: "https://www.unicef.org/nutrition" }
    ],
  },
  {
    key: "hygiene_food_safety",
    title: "Hygiene & Food Safety",
    desc: "Clean water, hand-washing, and safe food storage reduce illness.",
    resources: [
      { label: "WHO food safety", url: "https://www.who.int/health-topics/food-safety" },
      { label: "CDC handwashing", url: "https://www.cdc.gov/handwashing/index.html" }
    ],
  },
  {
    key: "local_foods",
    title: "Local Foods",
    desc: "Leverage local staples (beans, bananas, maize, dairy, vegetables).",
    resources: [
      { label: "FAO Rwanda nutrition", url: "https://www.fao.org/countryprofiles/index/en/?iso3=RWA" },
      { label: "HarvestPlus biofortification", url: "https://www.harvestplus.org/" }
    ],
  },
];

const eduArticles = [
  {
    id: "pregnancy-guide",
    title: "Nutrition During Pregnancy: A Complete Guide",
    summary: "Essential nutrition guide for pregnant women, covering important nutrients, meal planning, and managing common pregnancy discomforts.",
    duration: "10 min read",
    source: "Rwanda Ministry of Health",
    audience: "pregnant_women",
    tags: ["pregnancy", "maternal health", "prenatal nutrition"],
    sections: [
      { h: "Why Good Nutrition Matters", p: [
        "What you eat during pregnancy affects both you and your baby.",
        "Proper nutrition helps baby's brain and body development, prevents complications, prepares your body for breastfeeding, and maintains your health.",
      ]},
      { h: "Essential Nutrients", items: [
        { k: "Folic Acid", v: "Prevents birth defects. Sources: leafy greens, beans, fortified foods. Follow health worker guidance for supplements." },
        { k: "Iron", v: "Prevents anemia and supports growth. Sources: meat, beans, dark greens. Tip: pair with vitamin C for absorption." },
        { k: "Calcium", v: "Builds bones and teeth. Sources: milk, yogurt, small fish, greens." },
        { k: "Protein", v: "Builds tissues. Sources: meat, fish, eggs, beans, milk." },
      ]},
      { h: "Daily Meal Plan", p: [
        "Breakfast: Porridge with milk, fruit",
        "Mid-morning: Fruit or yogurt",
        "Lunch: Rice/cassava with beans and vegetables",
        "Afternoon: Groundnuts or fruit",
        "Dinner: Sweet potato with fish and greens",
      ]},
      { h: "Foods to Avoid", p: [
        "Unwashed fruits and vegetables",
        "Raw or undercooked meat/fish",
        "Unpasteurized milk",
        "Excess caffeine",
        "Alcohol",
      ]},
      { h: "Common Problems and Solutions", items: [
        { k: "Morning Sickness", v: "Small frequent meals, ginger tea, avoid strong smells" },
        { k: "Constipation", v: "Drink water, eat fruits/vegetables, stay active" },
        { k: "Heartburn", v: "Eat slowly, avoid spicy foods, don't lie down after eating" },
      ]},
      { h: "When to See a Health Worker", p: [
        "Severe vomiting",
        "No weight gain or weight loss",
        "Swelling of hands/face",
        "Severe headaches",
        "Dizziness or fainting",
      ]},
    ],
  },
  {
    id: "local-foods",
    title: "Local Rwandan Foods for Better Nutrition",
    summary: "Discover the nutritional value of traditional Rwandan foods and how to incorporate them into healthy, affordable meals.",
    duration: "9 min read",
    source: "Community Health Partners",
    audience: "all",
    tags: ["local foods", "Rwandan cuisine", "traditional dishes"],
    sections: [
      { h: "Staples and Strengths", p: [
        "Beans provide protein, iron, and fiber.",
        "Bananas and sweet potatoes offer energy and vitamin A.",
        "Cassava and maize are affordable carbs; pair with legumes and greens.",
        "Small fish add calcium when eaten with bones.",
      ]},
      { h: "Affordable Meal Ideas", p: [
        "Beans with leafy greens and sweet potato",
        "Banana stew with groundnuts",
        "Maize porridge with milk and fruit",
      ]},
      { h: "Food Safety Tips", p: [
        "Wash produce thoroughly",
        "Cook meats and fish fully",
        "Store leftovers safely",
      ]},
    ],
  },
  {
    id: "child-under5",
    title: "Essential Nutrition for Children Under 5",
    summary: "Key nutrients, feeding schedules, and warning signs for children under five.",
    duration: "8 min read",
    source: "Pediatric Nutrition Guide",
    audience: "parents",
    tags: ["child nutrition", "feeding guide", "under 5"],
    sections: [
      { h: "Introduction", p: [
        "Nutrition in the first five years is crucial for development.",
      ]},
      { h: "Key Nutritional Needs", items: [
        { k: "Protein", v: "Beans/legumes, eggs, fish, dairy, meat" },
        { k: "Carbohydrates", v: "Rice, sweet potatoes, cassava, maize, sorghum" },
        { k: "Vitamins/Minerals", v: "Vitamin A (carrots, greens), Iron (beans, meat), Calcium (milk, small fish)" },
      ]},
      { h: "Feeding Recommendations by Age", p: [
        "0–6 months: Exclusive breastfeeding",
        "6–12 months: Breastfeeding + mashed foods 2–3 times/day",
        "1–2 years: 3–4 meals/day + variety",
        "2–5 years: 3 meals + 2 snacks; diverse foods",
      ]},
      { h: "Warning Signs", p: [
        "No weight gain",
        "Swelling of legs/face",
        "Weakness or inactivity",
        "Persistent refusal to eat",
      ]},
      { h: "Tips for Success", p: [
        "Colorful plates for diverse nutrients",
        "Involve children in prep",
        "Offer foods multiple times",
        "Keep regular meal schedules",
      ]},
    ],
  },
  {
    id: "dietary-diversity",
    title: "Creating a Diverse and Balanced Diet",
    summary: "Learn about food groups and how to build balanced, diverse meals.",
    duration: "7 min read",
    source: "Nutrition Education Program",
    audience: "all",
    tags: ["dietary diversity", "balanced diet", "food groups"],
    sections: [
      { h: "Six Food Groups", p: [
        "Grains/roots/tubers",
        "Legumes/nuts",
        "Dairy",
        "Meat/fish/eggs",
        "Vitamin A rich fruits/veg",
        "Other fruits/veg",
      ]},
      { h: "Balanced Plate", p: [
        "Combine carbs, protein, healthy fats, and colorful vegetables/fruits.",
      ]},
      { h: "Practical Tips", p: [
        "Plan simple meals",
        "Use seasonal and local foods",
        "Limit sugary snacks",
      ]},
    ],
  },
];

const state = {
  lang: "en",
  kpis: { awareness: 0, children: 0, diversity: 0 },
  logs: { bmi: [], muac: [], diversity: [], education: [] },
  user: null,
  directory: [
    { name: "Kigali Nutrition Center", type: "Health Worker", location: "Kigali", contact: "0780 000 111" },
    { name: "Nyamagabe Food Co-op", type: "Supplier", location: "Nyamagabe", contact: "0781 222 333" },
    { name: "Rwanda Child Health Initiative", type: "NGO", location: "Musanze", contact: "info@rchi.org" },
    { name: "Karongi Community Clinic", type: "Health Worker", location: "Karongi", contact: "0788 444 555" },
  ],
};

function t(key) {
  return i18n[state.lang][key];
}

function save() {
  const payload = { state, version: 1 };
  localStorage.setItem("nutribridge", JSON.stringify(payload));
}
function load() {
  const raw = localStorage.getItem("nutribridge");
  if (!raw) return;
  try {
    const payload = JSON.parse(raw);
    if (payload && payload.state) Object.assign(state, payload.state);
  } catch {}
}

async function syncFromServer() {
  try {
    const res = await fetch("/api/state");
    if (!res.ok) return;
    const serverState = await res.json();
    if (serverState && serverState.kpis) {
      state.kpis = serverState.kpis;
      state.logs = serverState.logs;
      state.directory = serverState.directory;
      save();
    }
  } catch {}
}


function viewHome() {
  return `
    <section class="panel">
      <h2>${t("home_title")}</h2>
      <p>${t("home_intro")}</p>
      <p class="muted">${t("home_mission")}</p>
      <div class="kpi" aria-label="${t("kpis_title")}">
        <div class="card"><div>${t("kpi_awareness")}</div><strong>${state.kpis.awareness}</strong></div>
        <div class="card"><div>${t("kpi_children")}</div><strong>${state.kpis.children}</strong></div>
        <div class="card"><div>${t("kpi_diversity")}</div><strong>${state.kpis.diversity}</strong></div>
      </div>
    </section>
  `;
}

function viewEducation() {
  const uniqueAud = Array.from(new Set(eduArticles.map(a=>a.audience)));
  return `
    <section class="panel">
      <h2>${t("education_title")}</h2>
      <p>${t("education_intro")}</p>
      <div class="grid">
        ${educationModules
          .map(
            (m) => `
          <div class="col-6">
            <div class="panel">
              <h3>${m.title}</h3>
              <p class="muted">${m.desc}</p>
              <div class="list">
                ${m.resources
                  .map(
                    (r) => `<a class="btn small secondary" href="${r.url}" target="_blank" rel="noopener">${r.label}</a>`
                  )
                  .join("")}
              </div>
              <button class="btn" style="margin-top:.5rem" onclick="completeModule('${m.key}')">Mark Completed</button>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </section>
    <section class="panel" aria-labelledby="quizTitle">
      <h3 id="quizTitle">${t("quiz_title")}</h3>
      <form id="quiz-form" onsubmit="submitQuiz(event)">
        <fieldset>
          <legend>${t("quiz_q1")}</legend>
          ${t("quiz_q1_a").map((opt, i) => `
            <label><input type="radio" name="q1" value="${i}" required> ${opt}</label>
          `).join("")}
        </fieldset>
        <fieldset>
          <legend>${t("quiz_q2")}</legend>
          ${t("quiz_q2_a").map((opt, i) => `
            <label><input type="radio" name="q2" value="${i}" required> ${opt}</label>
          `).join("")}
        </fieldset>
      <button class="btn" type="submit">${t("quiz_submit")}</button>
      </form>
      <div id="quiz-score" class="muted" aria-live="polite"></div>
    </section>
    <section class="panel">
      <h3>Education Hub</h3>
      <div class="grid">
        <div class="col-4">
          <div class="panel">
            <label>Audience</label>
            <select id="audience-filter"><option value="">All</option>${uniqueAud.map(a=>`<option value="${a}">${a}</option>`).join("")}</select>
            <label>Tag</label>
            <input id="tag-filter" placeholder="e.g. pregnancy" />
            <button class="btn" style="margin-top:.5rem" onclick="renderHubList()">Apply</button>
          </div>
        </div>
        <div class="col-8">
          <div class="panel list" id="edu-hub-list"></div>
        </div>
      </div>
    </section>
  `;
}

function markAwareness() {
  state.kpis.awareness += 1;
  fetch("/api/awareness", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ count: 1 }) }).catch(() => {});
  save();
  render();
}

function completeModule(key) {
  state.kpis.awareness += 1;
  state.logs.education.push({ key, ts: Date.now() });
  fetch("/api/awareness", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ count: 1 }) }).catch(() => {});
  fetch("/api/logs/education", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ key, ts: Date.now() }) }).catch(() => {});
  save();
  render();
}
function submitQuiz(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const q1 = Number(fd.get("q1"));
  const q2 = Number(fd.get("q2"));
  const correct = (q1 === 1 ? 1 : 0) + (q2 === 0 ? 1 : 0);
  const el = document.getElementById("quiz-score");
  el.textContent = `${t("quiz_score")}: ${correct}/2`;
}

function renderHubList() {
  const aud = document.getElementById("audience-filter")?.value || "";
  const tag = (document.getElementById("tag-filter")?.value || "").toLowerCase();
  const items = eduArticles.filter(a => (aud ? a.audience === aud : true) && (tag ? a.tags.some(t=>t.toLowerCase().includes(tag)) : true));
  const el = document.getElementById("edu-hub-list");
  if (!el) return;
  el.innerHTML = items.map(a => `
    <div class="item">
      <div>
        <h4>${a.title}</h4>
        <div class="muted">${a.duration} • ${a.source}</div>
        <div class="muted">${a.tags.join(', ')}</div>
      </div>
      <button class="btn small" onclick="selectArticle('${a.id}')">Read</button>
    </div>
  `).join("");
}

function selectArticle(id) {
  const a = eduArticles.find(x=>x.id===id);
  if (!a) return;
  const root = document.getElementById("edu-hub-list");
  if (!root) return;
  root.innerHTML = `
    <div class="panel">
      <h2>${a.title}</h2>
      <div class="muted">${a.duration} • ${a.source}</div>
      ${a.sections.map(s => s.items ? `
        <h3>${s.h}</h3>
        <ul class="list">${s.items.map(it=>`<li><strong>${it.k}:</strong> ${it.v}</li>`).join("")}</ul>
      ` : `
        <h3>${s.h}</h3>
        <div class="list">${s.p.map(it=>`<div>${it}</div>`).join("")}</div>
      `).join("")}
      <div style="margin-top:1rem; display:flex; gap:.5rem;">
        <button class="btn secondary" onclick="renderHubList()">Back</button>
        <button class="btn" onclick="completeModule('${a.id}')">Mark Completed</button>
      </div>
    </div>
  `;
}

function bmiStatus(bmi) {
  if (bmi < 18.5) return { label: "Underweight", cls: "bad" };
  if (bmi < 25) return { label: "Normal", cls: "ok" };
  if (bmi < 30) return { label: "Overweight", cls: "warn" };
  return { label: "Obese", cls: "bad" };
}

function muacClass(muac) {
  if (muac < 11.5) return { label: "Severe Acute Malnutrition", cls: "bad" };
  if (muac < 12.5) return { label: "Moderate Acute Malnutrition", cls: "warn" };
  return { label: "Normal", cls: "ok" };
}

function viewTracking() {
  return `
    <section class="panel">
      <h2>${t("tracking_title")}</h2>
      <div class="grid">
        <div class="col-6">
          <div class="panel">
            <h3>${t("bmi_title")}</h3>
            <div class="input-row">
              <div>
                <label>${t("height_cm")}</label>
                <input id="height" type="number" min="30" max="250" step="0.1" />
              </div>
              <div>
                <label>${t("weight_kg")}</label>
                <input id="weight" type="number" min="5" max="300" step="0.1" />
              </div>
            </div>
            <div style="margin-top: .75rem; display:flex; gap:.5rem; align-items:center;">
              <button class="btn" onclick="calcBMI()">${t("calculate")}</button>
              <div id="bmi-output" class="muted"></div>
            </div>
          </div>
        </div>
        
        <div class="col-12">
          <div class="panel">
            <h3>${t("diet_title")}</h3>
            <p class="muted">${t("diet_intro")}</p>
            <div id="groups" class="list" aria-label="Food groups">
              ${i18n[state.lang].groups
                .map(
                  (g, idx) => `
                <label class="item"><span>${g}</span>
                  <input type="checkbox" data-group="${idx}" />
                </label>
              `
                )
                .join("")}
            </div>
            <div style="margin-top:.75rem; display:flex; gap:.5rem; align-items:center;">
              <button class="btn" onclick="saveDiversity()">${t("save_log")}</button>
              <div id="diversity-output" class="muted"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function calcBMI() {
  const h = Number(document.getElementById("height").value);
  const w = Number(document.getElementById("weight").value);
  if (!h || !w) return;
  const m = h / 100;
  const bmi = w / (m * m);
  const status = bmiStatus(bmi);
  document.getElementById("bmi-output").innerHTML = `
    <span class="status ${status.cls}">${t("bmi_result")}: ${bmi.toFixed(1)} • ${t("bmi_status")}: ${status.label}</span>
  `;
  state.logs.bmi.push({ h, w, bmi: Number(bmi.toFixed(1)), status: status.label, ts: Date.now() });
  fetch("/api/logs/bmi", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ h, w, bmi: Number(bmi.toFixed(1)), status: status.label, ts: Date.now() }) }).catch(() => {});
  save();
}

function calcMUAC() {
  const mu = Number(document.getElementById("muac").value);
  if (!mu) return;
  const c = muacClass(mu);
  document.getElementById("muac-output").innerHTML = `
    <span class="status ${c.cls}">${t("muac_result")}: ${c.label}</span>
  `;
  state.logs.muac.push({ muac: mu, class: c.label, ts: Date.now() });
  state.kpis.children = state.logs.muac.length;
  fetch("/api/logs/muac", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ muac: mu, class: c.label, ts: Date.now() }) }).catch(() => {});
  save();
}

function saveDiversity() {
  const checks = Array.from(document.querySelectorAll("input[type=checkbox][data-group]"));
  const selected = checks.filter((c) => c.checked).map((c) => Number(c.dataset.group));
  const score = selected.length;
  let cls = "ok";
  let label = "High";
  if (score < 4) { cls = "bad"; label = "Low"; }
  else if (score < 6) { cls = "warn"; label = "Medium"; }
  document.getElementById("diversity-output").innerHTML = `
    <span class="status ${cls}">${t("diversity_score")}: ${score} • ${label}</span>
  `;
  state.logs.diversity.push({ groups: selected, score, ts: Date.now() });
  state.kpis.diversity = state.logs.diversity.length;
  fetch("/api/logs/diversity", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ groups: selected, score, ts: Date.now() }) }).catch(() => {});
  save();
}

function viewConnect() {
  const uniqueTypes = Array.from(new Set(state.directory.map((d) => d.type)));
  const uniqueLocs = Array.from(new Set(state.directory.map((d) => d.location)));
  return `
    <section class="panel">
      <h2>${t("connect_title")}</h2>
      <p class="muted">${t("connect_intro")}</p>
      <div class="grid">
        <div class="col-4">
          <div class="panel">
            <label for="type">${t("filter_type")}</label>
            <select id="type"><option value="">All</option>${uniqueTypes.map((x) => `<option>${x}</option>`).join("")}</select>
            <label for="loc">${t("filter_location")}</label>
            <select id="loc"><option value="">All</option>${uniqueLocs.map((x) => `<option>${x}</option>`).join("")}</select>
            <button class="btn" style="margin-top:.75rem" onclick="render()">Apply</button>
          </div>
        </div>
        <div class="col-8">
          <div class="panel list" id="directory"></div>
        </div>
      </div>
      <div class="panel" style="margin-top:1rem">
        <div style="display:flex; gap:.5rem; align-items:center; flex-wrap: wrap;">
          <button class="btn secondary" onclick="exportData()">${t("export_data")}</button>
          <button class="btn secondary" onclick="toggleImport()">${t("import_data")}</button>
          <textarea id="import-box" class="sr-only" rows="4" placeholder="${t("import_hint")}"></textarea>
        </div>
      </div>
    </section>
  `;
}

function exportData() {
  const data = JSON.stringify({ state, version: 1 }, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "nutribridge-export.json";
  a.click();
  URL.revokeObjectURL(url);
}

function toggleImport() {
  const ta = document.getElementById("import-box");
  const hidden = ta.classList.contains("sr-only");
  if (hidden) {
    ta.classList.remove("sr-only");
    ta.focus();
    ta.onchange = ta.onblur = () => {
      try {
        const payload = JSON.parse(ta.value);
        if (payload && payload.state) Object.assign(state, payload.state);
        save();
        ta.classList.add("sr-only");
        render();
      } catch {}
    };
  } else {
    ta.classList.add("sr-only");
  }
}

function renderDirectory() {
  const type = document.getElementById("type")?.value || "";
  const loc = document.getElementById("loc")?.value || "";
  const items = state.directory.filter((d) =>
    (type ? d.type === type : true) && (loc ? d.location === loc : true)
  );
  const el = document.getElementById("directory");
  if (!el) return;
  el.innerHTML = items
    .map(
      (d) => `
      <div class="item">
        <div>
          <h4>${d.name}</h4>
          <div class="muted">${d.type} • ${d.location}</div>
        </div>
        <a class="btn small" href="tel:${d.contact}">Contact</a>
      </div>
    `
    )
    .join("");
}

function router() {
  const hash = location.hash || "#/home";
  if (hash.startsWith("#/education")) return viewEducation();
  if (hash.startsWith("#/tracking")) return viewTracking();
  if (hash.startsWith("#/connect")) return viewConnect();
  if (hash.startsWith("#/manage")) return viewManage();
  return viewHome();
}

function render() {
  const root = document.getElementById("app");
  root.innerHTML = router();
  document.getElementById("year").textContent = new Date().getFullYear();
  renderDirectory();
  root.focus();
}

function initLangToggle() {
  const btn = document.getElementById("lang-toggle");
  btn.addEventListener("click", () => {
    state.lang = state.lang === "en" ? "rw" : "en";
    btn.textContent = state.lang === "en" ? "Kinyarwanda" : "English";
    save();
    render();
  });
}

function viewManage() {
  const uniqueTypes = Array.from(new Set(state.directory.map((d) => d.type)));
  return `
    <section class="panel">
      <h2>Manage Directory & Logs</h2>
      <div class="grid">
        <div class="col-6">
          <div class="panel">
            <h3>Add Directory Entry</h3>
            <label>Name</label>
            <input id="new-name" />
            <label>Type</label>
            <select id="new-type">
              ${uniqueTypes.map((x) => `<option>${x}</option>`).join("")}
              <option>Supplier</option>
              <option>NGO</option>
              <option>Health Worker</option>
            </select>
            <label>Location</label>
            <input id="new-loc" />
            <label>Contact</label>
            <input id="new-contact" />
            <button class="btn" style="margin-top:.75rem" onclick="addDirectoryEntry()">Save</button>
          </div>
        </div>
        <div class="col-6">
          <div class="panel list">
            <h3>Existing Entries</h3>
            ${state.directory.map(d => `
              <div class="item">
                <div>
                  <h4>${d.name}</h4>
                  <div class="muted">${d.type} • ${d.location}</div>
                </div>
                <button class="btn small secondary" onclick="removeDirectoryEntry('${d.id || ''}','${d.name}')">Remove</button>
              </div>
            `).join("")}
          </div>
        </div>
        
      </div>
    </section>
  `;
}

async function addDirectoryEntry() {
  const name = document.getElementById("new-name").value.trim();
  const type = document.getElementById("new-type").value.trim();
  const location = document.getElementById("new-loc").value.trim();
  const contact = document.getElementById("new-contact").value.trim();
  if (!name || !type || !location || !contact) return;
  try {
    const res = await fetch("/api/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, type, location, contact }),
    });
    if (res.ok) {
      await syncFromServer();
      render();
    }
  } catch {}
}

async function removeDirectoryEntry(id, name) {
  try {
    const res = await fetch("/api/directory", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id ? { id } : { name }),
    });
    if (res.ok) {
      await syncFromServer();
      render();
    }
  } catch {}
}


window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", () => {
  load();
  initLangToggle();
  syncFromServer().then(render);
  render();
  renderHubList();
});