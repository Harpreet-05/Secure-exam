# 🔒 SecureExam Pro

### AI-Powered Online Examination & Proctoring System

SecureExam Pro is a full-stack online examination platform designed to conduct secure and monitored assessments. It provides students with a structured exam experience while allowing administrators to monitor live sessions, track violations, analyze performance, and review answer sheets.

---

## 🚀 Features

### 👨‍🎓 Student Portal

* Student login with name, roll number, email, class, and exam password
* Subject selection
* Timed examinations
* Question navigation
* Automatic exam submission
* Automatic scoring
* Detailed answer sheets
* Fullscreen exam mode

### 🤖 AI-Based Proctoring

SecureExam Pro uses **face-api.js with TensorFlow.js** for browser-based face detection.

The system can detect:

* 🚫 Face absence
* 👥 Multiple faces
* 🖥️ Fullscreen exits
* 🔄 Tab switching
* 🪟 Window focus loss
* 🏃 Excessive movement
* ⌨️ Restricted keyboard shortcuts
* 🖱️ Right-click attempts

Detected activities are logged as exam violations for administrator review.

### 📊 Admin Dashboard

Administrators can monitor examinations through a dedicated dashboard containing:

* Overview and statistics
* All students
* Live examination sessions
* Violation monitoring
* Subject-wise performance
* Student answer sheets
* Session timelines
* Risk-level classification

Students are categorized based on detected violations:

| Status     | Violations |
| ---------- | ---------: |
| ✅ Clean    |          0 |
| ⚠️ At Risk |        1–2 |
| 🚩 Flagged |         3+ |

---

## 🏗️ System Architecture

```text
                    ┌──────────────────────┐
                    │      Student        │
                    │      Browser        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Student Portal     │
                    │ HTML/CSS/JavaScript  │
                    └──────────┬───────────┘
                               │
                  ┌────────────┴────────────┐
                  │                         │
                  ▼                         ▼
        ┌──────────────────┐      ┌──────────────────┐
        │ AI Proctoring    │      │  Exam Engine     │
        │ face-api.js      │      │ Questions/Timer  │
        │ TensorFlow.js    │      │ Auto Scoring     │
        └────────┬─────────┘      └────────┬─────────┘
                 │                         │
                 └────────────┬────────────┘
                              ▼
                    ┌──────────────────────┐
                    │ Node.js + Express.js │
                    │      REST API        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Session Data      │
                    │      JSON Store       │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Admin Dashboard    │
                    │ Monitoring & Reports  │
                    └──────────────────────┘
```

---

## 🛠️ Tech Stack

| Category             | Technology                      |
| -------------------- | ------------------------------- |
| Frontend             | HTML5, CSS3, Vanilla JavaScript |
| AI / Computer Vision | TensorFlow.js, face-api.js      |
| Backend              | Node.js, Express.js             |
| Data Storage         | JSON                            |
| API                  | REST API                        |
| Deployment           | Railway / Render / ngrok        |

---

## 📁 Project Structure

```text
Secure-exam/
│
└── exam-proctor-v2/
    │
    ├── frontend/
    │   ├── index.html
    │   ├── exam.html
    │   ├── admin.html
    │   └── questions.js
    │
    ├── backend/
    │   ├── server.js
    │   └── data/
    │       └── sessions.json
    │
    ├── package.json
    └── README.md
```

---

## 🔄 Exam Workflow

```text
Student Login
      ↓
Select Subject
      ↓
System Check
      ↓
Read Instructions
      ↓
Enter Fullscreen
      ↓
Start Exam
      ↓
AI Proctoring + Activity Monitoring
      ↓
Submit Exam
      ↓
Automatic Scoring
      ↓
Results Stored
      ↓
Admin Dashboard
```

---

## 🔍 How Proctoring Works

During an examination, the system continuously monitors relevant browser and camera events.

| Detection          | Trigger                            | Action             |
| ------------------ | ---------------------------------- | ------------------ |
| Fullscreen Exit    | Student exits fullscreen           | Violation logged   |
| Tab Switch         | `visibilitychange` event           | Violation logged   |
| Window Blur        | Browser loses focus                | Warning logged     |
| Face Absent        | No face detected for 5 seconds     | Violation logged   |
| Multiple Faces     | 2+ faces detected                  | Warning logged     |
| High Motion        | Pixel difference exceeds threshold | Warning logged     |
| Restricted Actions | Copy, F12, right-click, etc.       | Blocked and logged |

---

## 🔌 REST API

| Method   | Endpoint            | Description                     |
| -------- | ------------------- | ------------------------------- |
| `POST`   | `/api/event`        | Log exam events and violations  |
| `POST`   | `/api/submit`       | Submit examination              |
| `GET`    | `/api/sessions`     | Retrieve all exam sessions      |
| `GET`    | `/api/sessions/:id` | Retrieve a specific session     |
| `GET`    | `/api/stats`        | Retrieve examination statistics |
| `DELETE` | `/api/sessions`     | Clear stored session data       |

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Harpreet-05/Secure-exam.git
cd Secure-exam/exam-proctor-v2
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
npm start
```

The application will run locally at:

```text
Student Portal:
http://localhost:3000

Admin Dashboard:
http://localhost:3000/admin
```

---

## 📚 Available Subjects

The system currently supports multiple subjects, including:

* Mathematics
* English
* Urdu
* Science
* Computer
* Punjabi / Islamiat

Questions, exam duration, marks, and correct answers can be customized through the question configuration.

---

## 🎯 Project Objectives

The main objectives of SecureExam Pro are to:

* Provide a structured online examination environment
* Reduce common forms of examination malpractice
* Automate examination scoring
* Provide administrators with real-time monitoring capabilities
* Maintain detailed examination session records
* Provide performance and violation analytics

---

## 🔮 Future Improvements

Potential improvements include:

* 🔐 Database integration using MongoDB/PostgreSQL
* 👤 Secure authentication with JWT
* ☁️ Cloud-based session storage
* 📹 Secure video recording and review
* 🧠 Advanced AI-based suspicious behavior detection
* 📱 Improved mobile responsiveness
* 📈 More advanced analytics and reporting
* 🔔 Real-time administrator notifications
* 👨‍💼 Multiple administrator roles and permissions

---

## ⚠️ Disclaimer

SecureExam Pro is an educational project demonstrating online examination, browser monitoring, and AI-based face detection concepts.

The proctoring system should not be considered a replacement for professional examination-security solutions without additional security, privacy, authentication, and infrastructure measures.

---

## 👨‍💻 Author

**Harpreet**

GitHub: [Harpreet-05](https://github.com/Harpreet-05)

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

