const express = require('express');
const cors    = require('cors');
const fs      = require('fs');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname, '../frontend')));

// ── DATA FILE ──
const DATA_DIR  = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'sessions.json');

function ensureData() {
  if (!fs.existsSync(DATA_DIR))  fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, '[]');
}
function read()  { ensureData(); try { return JSON.parse(fs.readFileSync(DATA_FILE,'utf8')); } catch(e) { return []; } }
function write(d){ ensureData(); fs.writeFileSync(DATA_FILE, JSON.stringify(d, null, 2)); }
function upsert(session) {
  const sessions = read();
  const idx = sessions.findIndex(s => s.sessionId === session.sessionId);
  if (idx === -1) sessions.push({ ...session, createdAt: new Date().toISOString() });
  else sessions[idx] = { ...sessions[idx], ...session, updatedAt: new Date().toISOString() };
  write(sessions);
}

// ── ROUTES ──

// All events from the exam page
app.post('/api/event', (req, res) => {
  const body = req.body;
  if (!body.sessionId) return res.status(400).json({ error: 'Missing sessionId' });
  upsert(body);
  console.log(`[EVENT:${body.event||'unknown'}] ${body.studentName||body.sessionId} | violations:${body.violations||0}`);
  res.json({ ok: true });
});

// Final submission
app.post('/api/submit', (req, res) => {
  const body = req.body;
  if (!body.sessionId) return res.status(400).json({ error: 'Missing sessionId' });
  body.submitted = true;
  body.submitTime = body.submitTime || new Date().toISOString();
  upsert(body);
  console.log(`[SUBMIT] ${body.studentName} | exam:${body.examName} | score:${body.score}/${body.totalQuestions} | violations:${body.violations}`);
  res.json({ ok: true });
});

// Admin: get all sessions
app.get('/api/sessions', (req, res) => {
  const sessions = read();
  // Sort newest first
  sessions.sort((a, b) => new Date(b.timestamp||b.createdAt||0) - new Date(a.timestamp||a.createdAt||0));
  res.json(sessions);
});

// Admin: single session
app.get('/api/sessions/:id', (req, res) => {
  const session = read().find(s => s.sessionId === req.params.id);
  if (!session) return res.status(404).json({ error: 'Not found' });
  res.json(session);
});

// Admin: delete all
app.delete('/api/sessions', (req, res) => {
  write([]);
  res.json({ ok: true, message: 'All sessions cleared' });
});

// Admin: stats summary
app.get('/api/stats', (req, res) => {
  const sessions = read();
  const total      = sessions.length;
  const submitted  = sessions.filter(s => s.submitted).length;
  const flagged    = sessions.filter(s => (s.violations||0) >= 3).length;
  const clean      = sessions.filter(s => (s.violations||0) === 0).length;
  const totalV     = sessions.reduce((a,b)=>a+(b.violations||0),0);
  const totalTabs  = sessions.reduce((a,b)=>a+(b.tabSwitches||0),0);
  const totalFace  = sessions.reduce((a,b)=>a+(b.faceAbsent||0),0);
  const scored     = sessions.filter(s=>s.marks!=null&&s.totalMarks);
  const avgScore   = scored.length ? Math.round(scored.reduce((a,b)=>a+(b.marks/b.totalMarks*100),0)/scored.length) : null;
  res.json({ total, submitted, flagged, clean, totalV, totalTabs, totalFace, avgScore });
});

// Serve student portal at root
app.get('/',       (req, res) => res.sendFile(path.join(__dirname, '../frontend/index.html')));
app.get('/exam',   (req, res) => res.sendFile(path.join(__dirname, '../frontend/exam.html')));
app.get('/admin',  (req, res) => res.sendFile(path.join(__dirname, '../frontend/admin.html')));

// ── START ──
app.listen(PORT, () => {
  console.log('\n╔═════════════════════════════════════╗');
  console.log('║     🔒 SecureExam Pro — Running     ║');
  console.log('╠═════════════════════════════════════╣');
  console.log(`║  Student Portal : http://localhost:${PORT}  `);
  console.log(`║  Exam Page      : http://localhost:${PORT}/exam`);
  console.log(`║  Admin Panel    : http://localhost:${PORT}/admin`);
  console.log('╚═════════════════════════════════════╝\n');
  console.log('Default exam password: exam2024');
  console.log('(Change in frontend/index.html → EXAM_PASSWORD)\n');
});
