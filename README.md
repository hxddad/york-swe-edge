# York SWE Edge

A personal guide and resource hub for Software Engineering students at York University, built with [Docusaurus](https://docusaurus.io/). This is also helpful for Computer Science, Computer Security, Computer Engineering and Electrical Engineering students.

> Note: this project is unaffiliated with York University and is based on my personal experience.

## About

**York SWE Edge** is a student-driven project aimed at helping Software Engineering students navigate their degree. It covers:

- Course advice and tier lists for 1st, 2nd, and 3rd year
- Tips, FAQs, and planning resources
- Stream selection guidance (General, Big Data, Security)
- Elective and summer course recommendations
- Personal experiences and insights

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

```sh
npm install
```

### Local Development

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```sh
npm run build
```

### Deployment

This site is automatically deployed to GitHub Pages via [GitHub Actions](.github/workflows/deploy.yml).

To deploy manually:

```sh
npm run deploy
```

## Project Structure

- `docs/` — Main documentation content (courses, advice, etc.)
- `src/` — Custom React components and theme overrides
- `static/` — Static assets (images, .nojekyll)
- `docusaurus.config.ts` — Docusaurus site configuration

## Contributing

Contributions, suggestions, and corrections are welcome! Please open an issue or pull request.

## Show Your Support

If you found this guide helpful, consider starring the [GitHub repo](https://github.com/hxddad/york-swe-edge)!
