# Jest + React + TypeScript + Vite — Tutorial Project

Complete runnable project for the **Jest Testing Guide** (Chapters 1–10).

---

## 📁 Project Structure

```
jest-react-tsx-demo/
├── __mocks__/
│   └── fileMock.ts              ← stubs CSS/SVG imports in tests
├── src/
│   ├── components/
│   │   ├── Badge.tsx            ← Chapter 8  – snapshot testing
│   │   ├── Badge.test.tsx
│   │   ├── Counter.tsx          ← Chapter 5  – click interactions
│   │   ├── Counter.test.tsx
│   │   ├── Greeting.tsx         ← Chapter 4  – component rendering
│   │   ├── Greeting.test.tsx
│   │   ├── LoginForm.tsx        ← Chapter 5/6 – form + mocks
│   │   ├── LoginForm.test.tsx
│   │   ├── UserCard.tsx         ← Chapter 6  – fetch mocking
│   │   └── UserCard.test.tsx
│   ├── hooks/
│   │   ├── useCounter.ts        ← Chapter 7  – custom hook
│   │   └── useCounter.test.ts
│   ├── utils/
│   │   ├── math.ts              ← Chapter 3  – pure functions
│   │   └── math.test.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── setupTests.ts            ← loads jest-dom matchers globally
├── index.html
├── jest.config.ts
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🚀 Step-by-Step Setup Commands

### Step 1 — Prerequisites

Make sure you have these installed:

```bash
node --version    # must be v18 or higher
npm --version     # must be v9 or higher
```

If not installed, download Node.js from: https://nodejs.org

---

### Step 2 — Get the project files

**Option A — Copy this folder** into your workspace, then:

```bash
cd jest-react-tsx-demo
```

**Option B — Create from scratch** using Vite template:

```bash
npm create vite@latest jest-react-tsx-demo -- --template react-ts
cd jest-react-tsx-demo
```

Then manually add all the test files as shown in the tutorial.

---

### Step 3 — Install all dependencies

```bash
npm install
```

This installs all packages listed in `package.json` (React, Vite, Jest, Testing Library, ts-jest, etc.)

Verify devDependencies installed:

```bash
ls node_modules | grep jest       # should list: jest, ts-jest, jest-environment-jsdom
ls node_modules | grep testing    # should list: @testing-library/*
```

---

### Step 4 — Run the Dev Server (Vite)

```bash
npm run dev
```

Expected output:

```
  VITE v5.x  ready in Xms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open http://localhost:5173 in your browser to see the app running.

Press `Ctrl + C` to stop.

---

### Step 5 — Run All Tests

```bash
npm test
```

Expected output:

```
 PASS  src/utils/math.test.ts
 PASS  src/components/Greeting.test.tsx
 PASS  src/components/Counter.test.tsx
 PASS  src/components/LoginForm.test.tsx
 PASS  src/components/UserCard.test.tsx
 PASS  src/hooks/useCounter.test.ts
 PASS  src/components/Badge.test.tsx

Test Suites: 7 passed, 7 total
Tests:       33 passed, 33 total
```

---

### Step 6 — Run Tests in Watch Mode

Watch mode re-runs tests automatically when you save a file:

```bash
npm run test:watch
```

Useful keyboard shortcuts in watch mode:

```
a  → run all tests
f  → run only failing tests
p  → filter by filename pattern
t  → filter by test name pattern
q  → quit watch mode
```

---

### Step 7 — Run a Specific Test File

```bash
# Run only math tests
npm test -- math

# Run only Counter tests
npm test -- Counter

# Run only hook tests
npm test -- useCounter
```

---

### Step 8 — Generate Coverage Report

```bash
npm run test:coverage
```

Expected terminal output:

```
------------------------|---------|----------|---------|---------|
File                    | % Stmts | % Branch | % Funcs | % Lines |
------------------------|---------|----------|---------|---------|
All files               |   94.5  |   87.5   |   100   |   94.2  |
 components/Badge.tsx   |   100   |   100    |   100   |   100   |
 components/Counter.tsx |   100   |   100    |   100   |   100   |
 components/Greeting.tsx|   100   |   100    |   100   |   100   |
 components/LoginForm...|   95.2  |   87.5   |   100   |   95.2  |
 components/UserCard.tx |   91.6  |   75.0   |   100   |   91.6  |
 hooks/useCounter.ts    |   100   |   100    |   100   |   100   |
 utils/math.ts          |   100   |   100    |   100   |   100   |
------------------------|---------|----------|---------|---------|
```

Also opens a full HTML report:

```bash
# On Mac:
open coverage/lcov-report/index.html

# On Windows:
start coverage/lcov-report/index.html

# On Linux:
xdg-open coverage/lcov-report/index.html
```

---

### Step 9 — Update Snapshots

When you intentionally change a component's markup, update its snapshot:

```bash
npm test -- --updateSnapshot

# Short form:
npm test -- -u
```

---

### Step 10 — Build for Production

```bash
npm run build
```

Built files go into the `dist/` folder.

Preview the production build locally:

```bash
npm run preview
```

---

## 🧪 What Each Test File Covers

| Test File | Chapter | Concepts |
|---|---|---|
| `math.test.ts` | 3 | toBe, toEqual, toThrow, toBeCloseTo |
| `Greeting.test.tsx` | 4 | render, screen.getByText, queryByText, getByRole |
| `Counter.test.tsx` | 5 | userEvent.click, async/await interactions |
| `LoginForm.test.tsx` | 5 & 6 | userEvent.type, jest.fn(), toHaveBeenCalledWith |
| `UserCard.test.tsx` | 6 | global.fetch mock, waitFor, mockResolvedValue |
| `useCounter.test.ts` | 7 | renderHook, act(), custom hook testing |
| `Badge.test.tsx` | 8 | asFragment(), toMatchSnapshot() |

---

## 🔧 Troubleshooting

### Error: Cannot find module '@testing-library/jest-dom'
```bash
npm install --save-dev @testing-library/jest-dom
```

### Error: SyntaxError — JSX not recognized
Make sure `jest.config.ts` has the ts-jest transform with `jsx: 'react-jsx'`:
```ts
transform: {
  '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: { jsx: 'react-jsx' } }],
}
```

### Error: ReferenceError — document is not defined
Make sure `testEnvironment: 'jsdom'` is set in `jest.config.ts`.

### Tests pass but coverage is below threshold
Add more test cases or temporarily lower thresholds in `jest.config.ts`.

---

## 📦 All Dependencies Explained

```
react / react-dom                   → the React framework (runtime)
vite + @vitejs/plugin-react         → fast dev server and bundler
typescript                          → TypeScript compiler

jest                                → test runner & framework
@types/jest                         → TS types for jest globals (expect, describe, it…)
ts-jest                             → transforms TS/TSX files for Jest
jest-environment-jsdom              → fake DOM environment for browser APIs

@testing-library/react              → render(), screen, waitFor, renderHook, act
@testing-library/jest-dom           → extra matchers: toBeInTheDocument, toHaveValue…
@testing-library/user-event         → realistic browser interaction simulation
```
