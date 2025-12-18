## MERN + TypeScript Senior-Level Roadmap (with DevOps & AWS)

This README is a **complete study and practice plan** to reach **10+ years–level MERN (with TypeScript) + DevOps** proficiency.

You can adapt the schedule, but this is written assuming **~2–3 hours/day, 6 days/week (12–18 hrs/week)**. If you can do more, you simply move faster.

---

### Table of Contents

1. **Goals & Mindset**
2. **High-Level 12-Week Roadmap**
3. **Core Track: TypeScript**
4. **Backend Track: Node.js + Express + MongoDB**
5. **Frontend Track: React with TypeScript**
6. **DevOps Track: Linux, PM2, Nginx, AWS**
7. **DSA & System Design Track (TypeScript)**
8. **Capstone MERN Project Requirements**
9. **Suggested Weekly Schedule Template**
10. **Detailed 12-Week Timeline**

---

## 1. Goals & Mindset

- **Target Level**: You should be able to work as a senior MERN engineer:
  - Deep knowledge of **TypeScript**, **Node/Express**, **MongoDB**, **React**.
  - Comfortable with **deployment on Linux + Nginx + PM2 + AWS EC2**.
  - Solid **DSA in TypeScript** and **system design** for interviews.
- **Focus on**:
  - Writing **clean, typed, tested code**.
  - **Architecting** systems, not just building features.
  - Understanding **trade-offs** (performance, security, cost, complexity).

---

## 2. High-Level 12-Week Roadmap

You will follow **four parallel tracks**:

- **Core TS Track** – Weeks 1–2 (then ongoing refinement).
- **Backend Track (Node + Express + Mongo)** – Weeks 3–6.
- **Frontend Track (React + TS)** – Weeks 5–8.
- **DevOps Track (Linux, PM2, Nginx, AWS)** – Weeks 3–10.
- **DSA + System Design** – Weeks 1–12 (light at first, intensive later).
- **Capstone MERN Project** – Start Week 3, evolve until Week 12.

### Week-by-Week Overview

- **Week 1–2**: TypeScript foundations + start light DSA.
- **Week 3–4**: Node.js + Express in TS + Linux basics + DSA.
- **Week 5**: MongoDB + Mongoose + PM2 + continue TS/DSA.
- **Week 6**: Nginx reverse proxy + HTTPS + integrate with API.
- **Week 5–7**: React with TS + connect to backend.
- **Week 6–8**: AWS EC2 deployment (Nginx + PM2 + MERN app).
- **Week 8–10**: Architecture, caching, CI/CD, monitoring.
- **Week 10–12**: Heavy DSA, system design, polish capstone & deployment.

---

## 3. Core Track: TypeScript

### Topics

- **Core Types & Features**
  - Primitives, `any`, `unknown`, `never`, `void`.
  - Union & intersection types.
  - Functions (overloads, optional & default params).
  - Interfaces vs type aliases, classes, access modifiers.
  - Enums, literal types, discriminated unions.
- **Generics & Advanced Types**
  - Generic functions, classes, and interfaces.
  - Constraints with `extends`, default generic params.
  - Utility types: `Partial`, `Required`, `Pick`, `Omit`, `Readonly`, `Record`, `ReturnType`, `Exclude`, `Extract`.
  - Type narrowing: `typeof`, `instanceof`, custom type predicates, `in`.
  - Mapped & conditional types, building reusable type helpers.
- **Tooling**
  - `tsconfig.json`: strict mode, module resolution, path aliases.
  - Working with `@types` packages and simple `.d.ts` files.
  - ESLint + Prettier with TypeScript.

### Practice

- Convert a **small JavaScript project to TypeScript** (e.g. a CLI or simple API).
- Add **ESLint + Prettier + TS** to that repo.
- Create a small **type utilities library** using advanced TS features.

---

## 4. Backend Track: Node.js + Express + MongoDB

### Node.js & Express with TypeScript

- **Node Fundamentals**
  - Event loop, microtasks vs macrotasks.
  - CommonJS vs ES modules, building TS for Node.
  - Async patterns: Promises, `async/await`, error handling.
- **Express in TS**
  - Project structure: `src/app.ts`, `src/routes`, `src/controllers`, `src/middleware`, `src/services`.
  - Typing `Request`, `Response`, `NextFunction`.
  - Extending `Request` type for user/session.
  - Global error handling middleware, error classes.
  - Validation with Zod/Joi and inferring types from schemas.
- **API Design & Production Concerns**
  - REST principles: pagination, filtering, sorting, status codes.
  - Auth: JWT, refresh tokens, cookies vs headers, securing routes.
  - Security: CORS, Helmet, rate limiting, input validation.
  - Logging (Winston/Pino), environment config, structured error responses.
  - Testing: Jest + Supertest for unit and integration tests.

### MongoDB & Mongoose

- **Core MongoDB Concepts**
  - Documents, collections, flexible schema.
  - Indexes (single, compound), TTL indexes.
  - CRUD operations, aggregation pipeline basics.
  - Replication and sharding (concept level).
- **Using with Node (Mongoose or native driver)**
  - Defining schemas & models in TS.
  - Typing documents and lean queries.
  - Pre/post middleware, virtuals.
  - Connection management and environment-based config.
- **Data Modeling**
  - Embedding vs referencing.
  - One-to-many and many-to-many patterns.
  - Denormalization and performance considerations.

### Backend Practice

- Build a **typed REST API** (users, auth, products/tasks/etc.).
- Add **MongoDB persistence** with Mongoose or driver.
- Implement:
  - Role-based access control (RBAC).
  - Pagination & search.
  - Robust error handling and logging.
- Write unit tests for services and integration tests for routes.

---

## 5. Frontend Track: React with TypeScript

### Core React + TS

- Typing **function components** and props.
- Typing **state**, `useState`, `useReducer`.
- Typing **custom hooks** and context values.
- Event types: `ChangeEvent`, `MouseEvent`, `FormEvent`, etc.
- Refs (`useRef`) and DOM element typing.

### State & Data Fetching

- **React Query / TanStack Query**:
  - Typing queries and mutations.
  - Query keys, caching, invalidation.
- **Client State**:
  - Redux Toolkit or Zustand with TS.
  - Slices/stores, selectors, typed hooks.

### Advanced Topics

- **Performance**:
  - `React.memo`, `useMemo`, `useCallback`.
  - Code splitting and lazy loading.
  - Lists and virtualization for large datasets.
- **Forms & UX**:
  - React Hook Form or Formik with TS.
  - Typed form schemas, validation, and error messages.
- **Testing**:
  - React Testing Library + Jest.
  - Testing components by behavior, not implementation.

### Frontend Practice

- Build a **React TS frontend** for your backend:
  - Auth (login/register).
  - CRUD screens with pagination & filters.
  - Forms (create/edit entities) with validation.
- Add:
  - Routing (React Router).
  - Error boundaries and loading skeletons.
  - At least basic component tests.

---

## 6. DevOps Track: Linux, PM2, Nginx, AWS

### Linux Fundamentals (Ubuntu/Debian)

- **File & Process Management**
  - `ls`, `cd`, `pwd`, `cp`, `mv`, `rm`, `mkdir`, `touch`, `cat`, `less`, `tail -f`.
  - `ps aux`, `top`/`htop`, `kill`, `kill -9`.
  - `df -h`, `du -sh`, `free -m`.
- **Permissions & Users**
  - `chmod`, `chown`.
  - `sudo`, `adduser`, `usermod`.
- **Networking & Packages**
  - `curl`, `wget`, `ping`.
  - `ss`/`netstat` basics.
  - `apt update`, `apt install`, `apt upgrade`.
- **Firewall & Logs**
  - `ufw` basics: enable, allow ports (22, 80, 443).
  - Checking logs: `journalctl`, `/var/log/nginx/*`, `/var/log/syslog`.

### PM2 – Node Process Manager

- Install PM2 globally (`npm i -g pm2`).
- Essential commands:
  - `pm2 start dist/app.js --name api`
  - `pm2 list`, `pm2 logs api`, `pm2 restart api`, `pm2 stop api`, `pm2 delete api`
  - `pm2 save`, `pm2 startup` (auto-start on reboot)
- Use an **ecosystem.config.js** file for environments.
- Understand **PM2 vs systemd** and when to choose each.

### Nginx as Reverse Proxy

- Install Nginx: `apt install nginx`.
- Basic config:
  - `server_name`, `listen 80` / `listen 443 ssl`.
  - `location /api` → `proxy_pass http://localhost:4000;`
  - `location /` to serve React `build` folder (static files) or proxy to frontend server.
  - Important headers: `X-Forwarded-For`, `X-Forwarded-Proto`.
- Enable gzip compression and caching for static assets.
- Test config: `nginx -t`, reload: `systemctl reload nginx`.

### HTTPS with Let’s Encrypt (Certbot)

- Install Certbot.
- Issue certs for your domain.
- Configure automatic renewal (`certbot renew` via systemd timer/crontab).
- Redirect HTTP → HTTPS using Nginx config.

### AWS for MERN (EC2-Focused)

- **Core Concepts**
  - EC2 instance creation, key pairs.
  - Security groups (open 22 to your IP, 80/443 to world).
  - IAM roles, least privilege.
  - Optionally: VPC basics (subnets, internet gateway) at high level.
- **Deployment Flow**
  1. Create **Ubuntu EC2 instance**.
  2. SSH into EC2 using key pair.
  3. Install Node, Git, Nginx, PM2, and connect to Mongo Atlas (or local Mongo).
  4. Clone your MERN repo; set `.env` variables.
  5. Build frontend, build backend (`tsc`), run backend with PM2.
  6. Configure Nginx:
     - Serve React build.
     - Reverse proxy `/api` to Node app.
     - Add HTTPS with Let’s Encrypt.
- **Monitoring & Logging**
  - Use CloudWatch for EC2 metrics and alarms (CPU, disk, network).
  - Aggregate logs: Nginx logs + Node app logs + PM2 logs.
  - Add a `/healthz` endpoint for health checks.

### CI/CD Basics

- Use **GitHub Actions** (or GitLab CI) to:
  - Run tests and lint on each push/PR.
  - Optionally build React and/or Docker images.
- Simple deployment:
  - CI script SSHs into EC2, pulls latest code, rebuilds, and restarts PM2.
  - Alternatively, upload React build to S3 and serve via CloudFront.

---

## 7. DSA & System Design Track (in TypeScript)

### DSA in TypeScript

- **Data Structures**
  - Arrays, strings, hash maps/sets.
  - Stacks, queues, priority queues.
  - Linked lists, trees (BST), graphs.
- **Algorithms & Patterns**
  - Two pointers, sliding window.
  - Binary search and variants.
  - BFS/DFS, topological sort.
  - Recursion and backtracking.
  - Dynamic programming patterns: subsequences, knapsack-like, grid DP.
- **Practice Routine**
  - 1–2 problems per weekday, 3–4 on weekends.
  - Solve on LeetCode/HackerRank in **TypeScript**.
  - Always analyze time & space complexity.
  - Re-implement core data structures:
    - `Stack<T>`, `Queue<T>`, `LinkedList<T>`, `TreeNode<T>`, `Graph<T>`.

### System Design

- **Core Concepts**
  - Horizontal vs vertical scaling, load balancers.
  - Caching (CDN, Redis), cache invalidation basics.
  - Databases: SQL vs NoSQL, replication, sharding.
  - Queues and event-driven architecture.
  - Consistency, availability, latency trade-offs.
- **Practice Systems**
  - URL shortener, chat app, e-commerce, social feed, notification system.
- For each system:
  - Define APIs, data model, scaling strategy.
  - Identify failure points and mitigation.

---

## 8. Capstone MERN Project Requirements

Choose one serious project and evolve it to **near production quality**:

### Examples

- E-commerce platform (products, orders, users, payments simulation).
- Project management tool (boards, tasks, comments, notifications).
- SaaS dashboard (multi-tenant, RBAC, billing simulation).

### Must-Haves

- **Backend**:
  - Node + Express + TS.
  - MongoDB with solid schema design and indexes.
  - Auth (JWT + refresh), RBAC, validation.
  - Logging, environment-based config, tests.
- **Frontend**:
  - React + TS, with routing and global state.
  - Integration with backend API.
  - Forms with validation, good UX (loading, error states).
- **DevOps**:
  - Deploy to AWS EC2, behind Nginx, managed via PM2.
  - HTTPS with Let’s Encrypt.
  - Basic monitoring and logging.
- **Code Quality**:
  - Strict TypeScript configuration.
  - ESLint + Prettier.
  - Unit tests for key services/hooks and integration tests for critical flows.
  - Clean architecture (controllers/services/repositories, modular frontend).

---

## 9. Suggested Weekly Schedule Template

Adjust times based on your availability (example assumes **2.5–3 hrs/day, 6 days/week**):

- **Mon**
  - 60 min: TypeScript (core/advanced topic).
  - 60–90 min: Backend (Node/Express or Mongo).
  - 30 min: 1–2 DSA problems.

- **Tue**
  - 60–90 min: Frontend (React + TS).
  - 60 min: Capstone project feature.
  - 30 min: 1–2 DSA problems.

- **Wed**
  - 60 min: DevOps (Linux, PM2, Nginx, AWS).
  - 60–90 min: Backend/Architecture.
  - 30 min: 1–2 DSA problems.

- **Thu**
  - 60–90 min: Frontend (state management, React Query, forms).
  - 60 min: Capstone integration (frontend–backend).
  - 30 min: 1–2 DSA problems.

- **Fri**
  - 60 min: System design study (one scenario per week).
  - 60–90 min: Refactor + tests on capstone.
  - 30 min: 1–2 DSA problems.

- **Sat**
  - 2–3 hrs: Deep dive:
    - End-to-end feature on capstone or
    - Practice full deployment on AWS (from commit to server).
  - Optional: Mock interview (DSA + system design) with yourself or a friend.

- **Sun**
  - Rest or **light review only** (notes, documentation, planning next week).

---

## 10. Detailed 12-Week Timeline

Assumes **~2–3 hours/day, 6 days/week**. If you have more/less time, keep the **order** but stretch or compress the weeks.

### Week 1
- **Main focus**: TypeScript foundations.
- **Topics**:
  - TS basics (types, unions, intersections, functions, interfaces vs types).
  - `tsconfig` basics, strict mode.
  - Simple JS → TS refactor.
- **Parallel**: 3–4 easy DSA problems in TS across the week.

### Week 2
- **Main focus**: Advanced TypeScript.
- **Topics**:
  - Generics, utility types, narrowing, discriminated unions.
  - Mapped & conditional types, simple type helper utilities.
  - ESLint + Prettier + TS setup.
- **Parallel**: 4–5 DSA problems (arrays/strings, hash maps).

### Week 3
- **Main focus**: Node.js + Express with TS.
- **Topics**:
  - Express app structure in TS, routes/controllers/middleware.
  - Async/await patterns, error handling middleware.
  - Start capstone backend (auth + one core entity).
- **Parallel (DevOps)**: Linux basics (navigation, processes, file permissions).
- **Parallel (DSA)**: 4–5 problems (two pointers, sliding window).

### Week 4
- **Main focus**: Hardening the API.
- **Topics**:
  - Validation (Zod/Joi), logging, config management.
  - Auth (JWT + refresh tokens), basic RBAC.
  - Jest + Supertest for key endpoints.
- **Parallel (DevOps)**: More Linux + begin PM2 usage locally/VM.
- **Parallel (DSA)**: 4–6 problems (hash maps, stacks/queues).

### Week 5
- **Main focus**: MongoDB integration.
- **Topics**:
  - MongoDB + Mongoose schemas in TS.
  - Data modeling (embedding vs referencing), basic indexes.
  - Extend capstone API with persistence and pagination.
- **Parallel (DevOps)**: PM2 in depth (ecosystem file, auto-restart).
- **Parallel (Frontend)**: Start React + TS basics (components, props, state).
- **Parallel (DSA)**: 4–6 problems (linked lists, trees intro).

### Week 6
- **Main focus**: Nginx + deployment foundation.
- **Topics**:
  - Install Nginx on Linux box/VM.
  - Reverse proxy to Express (`/api`), serve static content.
  - Add HTTPS via Let’s Encrypt, HTTP → HTTPS redirect.
- **Parallel (Frontend)**: React routing, basic screens for your API.
- **Parallel (AWS)**: Learn EC2 basics and security groups.
- **Parallel (DSA)**: 4–6 problems (trees, BFS/DFS).

### Week 7
- **Main focus**: React application in TS.
- **Topics**:
  - Forms with React Hook Form/Formik.
  - React Query or similar for API calls (typed queries/mutations).
  - State management (Redux Toolkit/Zustand) if needed.
- **Parallel (AWS)**: Deploy full stack to EC2 (Node+PM2+Nginx+React).
- **Parallel (DSA)**: 5–7 problems (graphs intro, BFS/DFS on graphs).

### Week 8
- **Main focus**: Architecture & robustness.
- **Topics**:
  - Layered backend architecture (controllers/services/repositories).
  - Shared types between backend/frontend.
  - Introduce caching (Redis) for a hot endpoint (conceptually or practically).
- **Parallel (DevOps)**: CloudWatch metrics & basic alarms, log organization.
- **Parallel (DSA)**: 5–7 problems (binary search patterns, more trees/graphs).

### Week 9
- **Main focus**: CI/CD & observability.
- **Topics**:
  - GitHub Actions (tests + lint on push/PR).
  - Simple deployment script from CI to EC2 (pull + build + PM2 restart).
  - Better logging strategy and structured error reporting.
- **Parallel (System Design)**: 1 design/week (e.g. URL shortener, e-commerce).
- **Parallel (DSA)**: 5–7 problems (intro DP, simple recursion/backtracking).

### Week 10
- **Main focus**: Hardening for production & refactor.
- **Topics**:
  - Security passes (headers, rate limiting, input validation review).
  - Performance passes (N+1 queries, indexes, front-end performance basics).
  - Improve test coverage for critical flows (auth, main business logic).
- **Parallel (System Design)**: Another system (e.g. chat or notification service).
- **Parallel (DSA)**: 6–8 problems (DP patterns, backtracking).

### Week 11
- **Main focus**: Interview prep polish.
- **Topics**:
  - Document your capstone (README, architecture diagrams, trade-offs).
  - Prepare explanations for design decisions (DB choice, caching, scaling).
  - Dry-run 1–2 mock interviews (walkthrough of your project + system design).
- **Parallel (DSA)**: 6–8 problems (mix of all topics, focus on weaknesses).

### Week 12
- **Main focus**: Review and consolidation.
- **Topics**:
  - Fix any remaining gaps in deployment (scripts, rollback strategy).
  - Final refactor of messy areas in code.
  - Revisit 2–3 system design scenarios and outline high-level solutions.
- **Parallel (DSA)**: Mixed set of problems simulating interview conditions.
- **Outcome**: Solid MERN + TS portfolio project, working deployment, and structured interview prep.


