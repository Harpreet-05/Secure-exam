# 🔒 SecureExam Pro — Advanced AI Proctoring System v2.0

## What's New in This Version

| Feature | Details |
|---|---|
| 👤 Student login | Name, Roll No, Email, Class, Exam Password |
| 📚 6 Subjects | Maths, English, Urdu, Science, Computer, punjabi |
| 🪜 4-Step Flow | Login → Select Exam → System Check → Instructions → Exam |
| 🤖 AI Face Detection | TensorFlow face-api.js runs in browser |
| 📊 Admin Dashboard | 6 pages: Overview, All Students, Live, Violations, By Subject, Answer Sheets |
| 📝 Answer Sheets | Per-student with correct/wrong highlighted |
| ⬇ CSV Export | Download all data as Excel-compatible CSV |
| 🔴 Live Sessions | See who is currently taking an exam |
| 🏆 Auto Scoring | Correct answers checked automatically |

---

## Project File Structure

```
exam-proctor-v2/
├── frontend/
│   ├── index.html       ← Student portal (login + exam selection)
│   ├── exam.html        ← Live exam with proctoring
│   ├── admin.html       ← Admin monitoring dashboard
│   └── questions.js     ← All 6 subject question banks
├── backend/
│   ├── server.js        ← Express.js API server
│   └── data/
│       └── sessions.json  ← Auto-created, stores all exam data
├── package.json
└── README.md
```

---

## Setup (10 Minutes)

### Step 1 — Install Node.js

Download from **https://nodejs.org** (LTS version)

Verify:
```bash
node --version   # Should show v16 or higher
npm --version
```

### Step 2 — Extract & Navigate

```bash
# Windows
cd Desktop\exam-proctor-v2

# Mac/Linux
cd ~/Desktop/exam-proctor-v2
```

### Step 3 — Install Dependencies

```bash
npm install
```

### Step 4 — Start Server

```bash
npm start
```

You'll see:
```
╔═════════════════════════════════════╗
║     🔒 SecureExam Pro — Running     ║
╠═════════════════════════════════════╣
║  Student Portal : http://localhost:3000
║  Admin Panel    : http://localhost:3000/admin
╚═════════════════════════════════════╝
```

### Step 5 — Open in Browser

- **Students:** http://localhost:3000
- **Admin:** http://localhost:3000/admin

---

## Student Flow (Step by Step)

```
Step 1: Enter Details
  → First Name, Last Name, Roll No, Email, Class, Exam Password

Step 2: Select Exam
  → Choose subject: Maths / English / Urdu / Science / Computer / Islamiat

Step 3: System Check
  → Browser compatibility ✓
  → Camera access ✓
  → Fullscreen support ✓
  → JavaScript enabled ✓

Step 4: Instructions
  → Read exam rules
  → View exam summary (subject, duration, questions, marks)
  → Tick "I Agree" checkbox
  → Click "Enter Fullscreen & Begin Exam"

Live Exam:
  → Timer running top-right
  → Question navigator (click any number to jump)
  → Webcam monitoring sidebar
  → Activity log showing all events
  → Submit when done
```

---

## Admin Dashboard Pages

| Page | What you see |
|---|---|
| **Overview** | Total stats + subject breakdown cards + recent activity |
| **All Students** | Full table with filters (Clean / At Risk / Flagged / Live) |
| **Live Sessions** | Only students currently in an exam |
| **Violations** | Sorted by most violations, fullscreen/tab/face breakdown |
| **By Subject** | Stats per subject (avg score, violations, submissions) |
| **Answer Sheets** | Per-student answer table with correct/wrong highlighted |

Click any student row to open their **detailed side panel** showing:
- Full student info
- Violation breakdown
- Complete answer sheet (correct ✓ / wrong ✗ / skipped)
- Session timeline

---

## How Proctoring Works

| Detection | Trigger | Action |
|---|---|---|
| **Fullscreen exit** | Student presses Escape or exits | Alert shown + violation logged |
| **Tab switch** | `visibilitychange` event | Immediate violation logged |
| **Window blur** | Window loses focus | Warning logged |
| **Face absent** | No face detected for 5 seconds | Violation logged |
| **Multiple faces** | 2+ faces in camera | Warning logged |
| **High motion** | Pixel diff > threshold | Warning logged |
| **Key blocking** | Ctrl+C, F12, right-click, etc. | Blocked + logged |

### Risk Levels (Admin)
- ✅ **Clean** — 0 violations
- ⚠ **At Risk** — 1–2 violations
- 🚩 **Flagged** — 3+ violations

---

## Customisation

### Change Exam Password
In `frontend/index.html`, find:
```javascript
const EXAM_PASSWORD = 'exam2024';
```
Change `'exam2024'` to whatever you want.

### Add/Edit Questions
In `frontend/questions.js`, each exam follows this pattern:
```javascript
maths: {
  title: 'Mathematics',
  duration: 60,        // minutes
  questions: 10,
  marks: 50,
  questions: [
    {
      q: 'Your question here?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correct: 'b'     // a, b, c, or d
    },
    // ... more questions
  ]
}
```

### Add a New Subject
1. Add entry to `EXAM_QUESTIONS` in `questions.js`
2. Add entry to `EXAMS` object in `index.html`
3. Add entry to `EXAMS_META` in `admin.html`
4. Add correct answers array to `CORRECT` in `admin.html`

### Change Timer Duration
In `questions.js`, change `duration: 60` (minutes) for each subject.

### Change Face Absent Timeout
In `exam.html`, find:
```javascript
}, 5000);   // 5000ms = 5 seconds
```
Change to `10000` for 10 seconds, etc.

---

## API Endpoints

| Method | URL | Purpose |
|---|---|---|
| POST | `/api/event` | Log any exam event (violation, progress) |
| POST | `/api/submit` | Final exam submission |
| GET | `/api/sessions` | All sessions (admin) |
| GET | `/api/sessions/:id` | Single session details |
| GET | `/api/stats` | Summary statistics |
| DELETE | `/api/sessions` | Clear all data (admin) |

---

## Deploy Online (Free)

### Railway.app (Recommended)
1. Create account at **https://railway.app**
2. Push this folder to GitHub
3. Railway → New Project → Deploy from GitHub
4. Select your repo → it auto-detects Node.js
5. Get a public URL like `https://your-exam.up.railway.app`

### Render.com (Also Free)
1. **https://render.com** → New Web Service
2. Connect GitHub repo
3. Build Command: `npm install`
4. Start Command: `npm start`

### Local Network (for a classroom)
1. Find your PC's IP: run `ipconfig` (Windows) or `ifconfig` (Mac)
2. Students on the same WiFi open: `http://YOUR-IP:3000`
3. You (admin) open: `http://YOUR-IP:3000/admin`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Student UI | HTML5 + CSS3 + Vanilla JS |
| Face Detection | face-api.js (TensorFlow.js) |
| Motion Detection | Canvas pixel diff |
| Backend | Node.js + Express.js |
| Storage | JSON file (no database needed) |
| Deployment | Railway / Render / ngrok |

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Camera not working | Click Allow in browser permission popup |
| Face not detected | Ensure good lighting; face the camera directly |
| Fullscreen not working | Use Chrome or Firefox (not Safari) |
| Admin shows no data | Start server with `npm start` first |
| "npm not recognized" | Reinstall Node.js from nodejs.org |
| Exam password wrong | Default is `exam2024` — check `index.html` |

---
