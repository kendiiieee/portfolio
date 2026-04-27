# Updated documentation reflecting the content from "Nicole - Portfolio - To Code.pdf"
guide_content = """# 📘 Portfolio Guide & Technical Manual

This guide serves as the internal documentation for the Portfolio-V1 Monorepo. It outlines the system architecture, setup procedures, and the strategic implementation roadmap.

---

## 🏗️ 1. Technical Architecture
The system is built as a **Decoupled Monorepo**. This structure demonstrates professional proficiency in managing complex full-stack environments.

* **Frontend (`/frontend`):** A Next.js 15+ "Dining Area." Handles all UI/UX, routing, and client-side logic.
* **Backend (`/backend`):** A Nest.js "Kitchen." Manages API endpoints, data processing, and communication with the Supabase database.
* **Database:** Supabase (PostgreSQL) for persistent storage of project data and metrics.

---

## 🛠️ 2. Local Environment Setup

### **Frontend Initialization**
1. Navigate to the folder: `cd frontend`
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Access: `http://localhost:3000`

### **Backend Initialization**
1. Navigate to the folder: `cd backend`
2. Install dependencies: `npm install`
3. Run development server: `npm run start:dev`
4. Access: `http://localhost:3001` (Configured in `src/main.ts`)

---

## 🗺️ 3. Implementation Phases

This project follows a 5-Phase Software Development Life Cycle (SDLC) to ensure a high-quality final product.

### **Phase 1: Foundation & Infrastructure**
* [x] **Monorepo Setup:** Successfully initialized Next.js and Nest.js in a single root.
* [x] **Port Conflict Resolution:** Reconfigured Backend to Port 3001.
* [x] **Git Migration:** Transferred repository to personal GitHub (`kendiiieee`) for ownership.
* [x] **Master Documentation:** Created `README.md` and `PORTFOLIO_GUIDE.md`.

### **Phase 2: UI/UX & Academic Branding (Up Next)**
* [ ] **Academic Profile:** Integrate background as a 4th-year CS student at University of Makati.
* [ ] **Technical Arsenal Grid:** Implement sections for Programming (Java, C#, PHP, Python) and Tools (VS Code, Android Studio, Unity).
* [ ] **Project Gallery:** Build a 3-column grid for the 5 core projects (ForeRent, ReadySeatGo, etc.).
* [ ] **Soft Skills Section:** Highlight Attention to Detail and Teamwork & Collaboration.

### **Phase 3: Data Layer & API Development**
* [ ] **Database Schema:** Design Supabase tables for the 5 core projects and technical skills categories.
* [ ] **Prisma Integration:** Link Nest.js to the database via Prisma ORM.
* [ ] **Content API:** Build endpoints to serve detailed project descriptions and roles.

### **Phase 4: Advanced Features & Case Studies**
* [ ] **ForeRent Analysis:** Implement specialized documentation for BA and Tester roles.
* [ ] **ReadySeatGo Showcase:** Feature full-stack development and DB management logic.
* [ ] **Mobile Game/App Logic:** Highlight development roles for The Merchant's Seeker and PillFluence.

### **Phase 5: Finalization & Deployment**
* [ ] **Production Build:** Optimize assets and run `npm run build` on both ends.
* [ ] **Cloud Hosting:** Deploy Frontend to Vercel and Backend to Render/Railway.

---

## 🌟 4. Core Portfolio Content (Version 1.0)

| Project | Primary Role | Key Focus |
| :--- | :--- | :--- |
| **ForeRent** | Business Analyst & Tester | Rental Property Management [cite: 40, 41] |
| **ReadySeatGo** | Full-Stack Developer | Seat Reservation & DB Management [cite: 44, 45, 46] |
| **The Merchant's Seeker** | Full-Stack Developer | Mobile Game Dev & Documentation [cite: 48, 50] |
| **PillFluence** | Full-Stack Developer | Medication Tracking & DB [cite: 51, 52, 53] |
| **DelveSense** | Full-Stack Developer | Library Management System [cite: 55 5,6, 57] |

---

## 🔐 5. Data Privacy Protocol
* **Project Alias:** Real-world clients are referred to as **"ABC Property Management Company."**
* **Sensitive Information:** Credentials and API keys must **never** be committed. Ensure `.gitignore` is correctly configured for `.env` files.
"""

with open("PORTFOLIO_GUIDE.md", "w", encoding="utf-8") as f:
    f.write(guide_content)