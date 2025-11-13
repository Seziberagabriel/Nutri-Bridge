const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_PATH = path.join(__dirname, "data.json");

app.use(express.json());
app.use(cors());
app.use(cookieParser());

function readData() {
  try {
    const raw = fs.readFileSync(DATA_PATH, "utf8");
    return JSON.parse(raw);
  } catch {
    return {
      kpis: { awareness: 0, children: 0, diversity: 0 },
      logs: { bmi: [], muac: [], diversity: [], education: [] },
      users: [],
      sessions: {},
      directory: [
        { name: "Kigali Nutrition Center", type: "Health Worker", location: "Kigali", contact: "0780 000 111" },
        { name: "Nyamagabe Food Co-op", type: "Supplier", location: "Nyamagabe", contact: "0781 222 333" },
        { name: "Rwanda Child Health Initiative", type: "NGO", location: "Musanze", contact: "info@rchi.org" },
        { name: "Karongi Community Clinic", type: "Health Worker", location: "Karongi", contact: "0788 444 555" }
      ]
    };
  }
}

function writeData(d) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(d, null, 2));
}

app.get("/api/state", (req, res) => {
  res.json(readData());
});

app.get("/api/kpis", (req, res) => {
  const d = readData();
  res.json(d.kpis);
});

app.post("/api/awareness", (req, res) => {
  const d = readData();
  const inc = Number(req.body.count || 1);
  d.kpis.awareness += inc;
  writeData(d);
  res.json(d.kpis);
});

app.get("/api/directory", (req, res) => {
  res.json(readData().directory);
});
app.post("/api/directory", (req, res) => {
  const d = readData();
  const { name, type, location, contact } = req.body || {};
  if (!name || !type || !location || !contact) return res.status(400).json({ ok: false });
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  d.directory.push({ id, name, type, location, contact });
  writeData(d);
  res.json({ ok: true, id });
});
app.delete("/api/directory", (req, res) => {
  const d = readData();
  const { id, name } = req.body || {};
  const before = d.directory.length;
  d.directory = d.directory.filter((x) => (id ? x.id !== id : name ? x.name !== name : true));
  if (d.directory.length === before) return res.status(404).json({ ok: false });
  writeData(d);
  res.json({ ok: true });
});

app.get("/api/logs/bmi", (req, res) => {
  res.json(readData().logs.bmi);
});
app.post("/api/logs/bmi", (req, res) => {
  const d = readData();
  const { h, w, bmi, status, ts } = req.body || {};
  if (h && w && bmi && status) {
    d.logs.bmi.push({ h, w, bmi, status, ts: ts || Date.now() });
    writeData(d);
    return res.json({ ok: true });
  }
  res.status(400).json({ ok: false });
});

app.get("/api/logs/muac", (req, res) => {
  res.json(readData().logs.muac);
});
app.post("/api/logs/muac", (req, res) => {
  const d = readData();
  const { muac, class: cls, ts } = req.body || {};
  if (muac && cls) {
    d.logs.muac.push({ muac, class: cls, ts: ts || Date.now() });
    d.kpis.children = d.logs.muac.length;
    writeData(d);
    return res.json({ ok: true });
  }
  res.status(400).json({ ok: false });
});

app.get("/api/logs/diversity", (req, res) => {
  res.json(readData().logs.diversity);
});
app.post("/api/logs/diversity", (req, res) => {
  const d = readData();
  const { groups, score, ts } = req.body || {};
  if (Array.isArray(groups) && typeof score === "number") {
    d.logs.diversity.push({ groups, score, ts: ts || Date.now() });
    d.kpis.diversity = d.logs.diversity.length;
    writeData(d);
    return res.json({ ok: true });
  }
  res.status(400).json({ ok: false });
});

app.get("/api/logs/education", (req, res) => {
  res.json(readData().logs.education);
});
app.post("/api/logs/education", (req, res) => {
  const d = readData();
  const { key, ts } = req.body || {};
  if (key) {
    d.logs.education.push({ key, ts: ts || Date.now() });
    writeData(d);
    return res.json({ ok: true });
  }
  res.status(400).json({ ok: false });
});

// Clear logs endpoint removed per application requirements

app.get("/api/health", (req, res) => {
  res.json({ ok: true, time: Date.now() });
});

app.post("/api/import", (req, res) => {
  const payload = req.body || {};
  if (payload && payload.kpis && payload.logs && payload.directory) {
    writeData(payload);
    return res.json({ ok: true });
  }
  res.status(400).json({ ok: false });
});

app.post("/api/auth/register", async (req, res) => {
  const d = readData();
  const { name, email, password } = req.body || {};
  if (!name || !email || !password) return res.status(400).json({ ok: false });
  const exists = d.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (exists) return res.status(409).json({ ok: false });
  const hash = await bcrypt.hash(password, 10);
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  d.users.push({ id, name, email, passwordHash: hash });
  const sid = Math.random().toString(36).slice(2) + Date.now().toString(36);
  d.sessions[sid] = { userId: id, createdAt: Date.now() };
  writeData(d);
  res.cookie("sid", sid, { httpOnly: true });
  res.json({ ok: true, user: { id, name, email } });
});

app.post("/api/auth/login", async (req, res) => {
  const d = readData();
  const { email, password } = req.body || {};
  const user = d.users.find((u) => u.email.toLowerCase() === (email || "").toLowerCase());
  if (!user) return res.status(401).json({ ok: false });
  const ok = await bcrypt.compare(password || "", user.passwordHash);
  if (!ok) return res.status(401).json({ ok: false });
  const sid = Math.random().toString(36).slice(2) + Date.now().toString(36);
  d.sessions[sid] = { userId: user.id, createdAt: Date.now() };
  writeData(d);
  res.cookie("sid", sid, { httpOnly: true });
  res.json({ ok: true, user: { id: user.id, name: user.name, email: user.email } });
});

app.post("/api/auth/logout", (req, res) => {
  const d = readData();
  const sid = req.cookies.sid;
  if (sid && d.sessions[sid]) {
    delete d.sessions[sid];
    writeData(d);
  }
  res.clearCookie("sid");
  res.json({ ok: true });
});

app.get("/api/auth/me", (req, res) => {
  const d = readData();
  const sid = req.cookies.sid;
  const s = sid ? d.sessions[sid] : null;
  if (!s) return res.json({ ok: false });
  const user = d.users.find((u) => u.id === s.userId);
  if (!user) return res.json({ ok: false });
  res.json({ ok: true, user: { id: user.id, name: user.name, email: user.email } });
});

app.use("/assets", express.static(path.join(process.cwd(), "assets")));
app.get(["/", "/index.html"], (req, res) => {
  res.sendFile(path.join(process.cwd(), "index.html"));
});

app.listen(PORT, () => {
  console.log(`NutriBridge server running at http://localhost:${PORT}/`);
});