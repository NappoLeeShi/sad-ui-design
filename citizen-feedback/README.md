# VNeID — Citizen Feedback (Góp ý, phản ánh)

A UI/UX prototype that improves the citizen feedback feature of **VNeID**, Vietnam's national electronic identification app. Built as coursework for **System Analysis and Design (SAD)**.

The app simulates the full feedback journey: sign in, choose a feedback category, submit a report, and follow its processing history. There is no backend — data is mocked and stored in the browser, so the project runs entirely on your machine.

## What's inside

| Route | Description |
| --- | --- |
| `/login` | Mock sign-in with a pre-filled citizen account |
| `/home` | Home screen with feedback shortcuts |
| `/feedback` | Feedback category selection |
| `/reports/individual` | Reports about an individual or organisation |
| `/reports/infrastructure` | Reports about public infrastructure |
| `/reports/[category]/new` | Report submission form (photos, location, details) |
| `/reports/[category]/history` | Submitted report history |
| `/reports/[category]/history/[id]` | Report details and processing timeline |

Other notes:

- Mobile-first layout (max width 430 px) with Material Design 3 styling.
- Mock data lives in `data/mock/`; services live in `lib/mock/`.
- No database, environment variables, or API keys are required.
- The interface language is Vietnamese.

## Tech stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **lucide-react** icons
- **Bun** as package manager and script runner

## Requirements

| Tool | Version | Why |
| --- | --- | --- |
| [Node.js](https://nodejs.org) | **20.9 or newer** (LTS recommended) | Required by Next.js |
| [Bun](https://bun.sh) | **1.4.x** (the repo pins `bun@1.4.4`) | Installs dependencies and runs the app |
| [Git](https://git-scm.com) | Any recent version | Optional — only needed to clone the repository |

Install both Node.js and Bun. Bun runs the project scripts, while Next.js requires a compatible Node.js version.

---

## 1. Download the project

### Option A — Clone with Git (recommended)

```bash
git clone https://github.com/NappoLeeShi/sad-ui-design.git
cd sad-ui-design/citizen-feedback
```

> The GitHub repository also contains other coursework folders. The application is in the **`citizen-feedback`** directory, so the `cd` step matters.

### Option B — Download a ZIP

1. Open <https://github.com/NappoLeeShi/sad-ui-design>.
2. Choose **Code → Download ZIP**.
3. Extract the archive.
4. Open a terminal in the extracted folder, then enter the app directory:

```bash
cd sad-ui-design-main/citizen-feedback
```

### Installing Git (optional)

| OS | Command |
| --- | --- |
| Windows | `winget install --id Git.Git -e` |
| macOS | `xcode-select --install` or `brew install git` |
| Debian/Ubuntu | `sudo apt install git` |
| Fedora | `sudo dnf install git` |

Verify with `git --version`.

---

## 2. Install Node.js

Next.js 16 requires **Node.js 20.9 or newer**. Use a current LTS release (22 or 24).

### Windows

Using `winget` (Windows 10/11):

```powershell
winget install OpenJS.NodeJS.LTS
```

Or download the LTS installer from <https://nodejs.org> and run it.

Verify in a **new** terminal:

```powershell
node -v
npm -v
```

### macOS

Using Homebrew:

```bash
brew install node@22
```

Or download the LTS `.pkg` installer from <https://nodejs.org> and run it.

Verify:

```bash
node -v
npm -v
```

### Linux

Install Node.js and npm from your distribution's package manager. For example:

| Distribution | Command |
| --- | --- |
| Debian/Ubuntu | `sudo apt install nodejs npm` |
| Fedora | `sudo dnf install nodejs npm` |
| Arch Linux | `sudo pacman -S nodejs npm` |
| openSUSE | `sudo zypper install nodejs npm` |

Then verify the version:

```bash
node -v
```

> If your distribution ships a Node.js version older than 20.9 (common on older Debian/Ubuntu releases), install a current LTS release with a version manager such as [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) instead:
>
> ```bash
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
> # restart the terminal, then:
> nvm install --lts
> nvm use --lts
> ```

---

## 3. Install Bun

### Windows

Run in PowerShell:

```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

Restart the terminal afterwards.

### macOS and Linux

```bash
curl -fsSL https://bun.sh/install | bash
```

Restart the terminal (or reload your shell profile), then verify:

```bash
bun -v
```

On Linux, the official installer needs `unzip`. If it is missing:

```bash
sudo apt install -y unzip   # Debian/Ubuntu
sudo dnf install -y unzip   # Fedora
```

### Alternative installs

| OS | Command |
| --- | --- |
| macOS (Homebrew) | `brew install oven-sh/bun/bun` |
| Any OS with npm | `npm install -g bun` |
| Windows (Scoop) | `scoop install bun` |

If `bun` is not found after installation, restart the terminal. As a fallback, add it to your `PATH`:

- **macOS/Linux:** `export BUN_INSTALL="$HOME/.bun"; export PATH="$BUN_INSTALL/bin:$PATH"`
- **Windows:** add `%USERPROFILE%\.bun\bin` to your user `PATH`.

---

## 4. Run the app locally (development)

From the **`citizen-feedback`** directory:

```bash
bun install
bun dev
```

Then open <http://localhost:3000>. The root path redirects to `/login`.

**Signing in:** the account details are pre-filled. Enter **any non-empty password** — authentication is mocked, and nothing is sent anywhere.

To use a different port:

```bash
bun dev --port 3001
```

Stop the server with `Ctrl+C`.

---

## 5. Build and run locally (production mode)

This is how to "deploy" the app on your own machine:

```bash
bun install --frozen-lockfile
bun run build
bun start
```

Open <http://localhost:3000>.

To change the port in production mode:

**macOS/Linux**

```bash
PORT=3001 bun start
```

**Windows PowerShell**

```powershell
$env:PORT=3001; bun start
```

Notes:

- `bun start` serves the build created by `bun run build`; run the build first.
- This project is a client-side prototype with mock data. No Docker, database, or web server configuration is involved.

---

## Available scripts

| Command | Purpose |
| --- | --- |
| `bun dev` | Start the development server with hot reload |
| `bun run build` | Create an optimized production build |
| `bun start` | Serve the production build |
| `bun run lint` | Run ESLint |

---

## Project structure

```text
citizen-feedback/
├── app/                    # Routes, layout, global styles
│   ├── login/              # Sign-in screen
│   ├── home/               # Home screen
│   ├── feedback/           # Feedback category selection
│   └── reports/            # Report forms, history, and details
├── components/
│   ├── auth/               # Login form
│   ├── reports/            # Report-specific components
│   └── ui/                 # Shared UI primitives
├── data/mock/              # Seeded mock users, reports, and options
├── lib/                    # Types, report catalog, formatting, mock services
├── docs/                   # User flows and project documentation
├── proxy.ts                # Route protection for signed-in pages
├── next.config.ts          # Next.js configuration
└── package.json
```

---

## Troubleshooting

| Problem | Fix |
| --- | --- |
| `You are using an unsupported version of Node.js` | Install Node.js 20.9+ (use `nvm install --lts` on macOS/Linux) |
| `bun: command not found` | Restart the terminal, or add Bun to `PATH` (see section 3) |
| Port 3000 is already in use | Run `bun dev --port 3001`, or set `PORT` as shown above |
| Dependencies look corrupted | Delete `node_modules`, then run `bun install` again |
| Stale build output | Delete `.next` (`rm -rf .next` on macOS/Linux, `rmdir /s /q .next` on Windows), then rebuild |
| Login keeps redirecting to `/login` | Allow cookies/local storage for `localhost`, then sign in again |

---

## Documentation

- `docs/flow/` — Mermaid user-flow diagrams for submitting, checking, and reviewing reports.
- `docs/prompts/` — development prompts and reference material.
- `AGENTS.md` — project context, goals, and design-system guidelines.
