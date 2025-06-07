# Personal Website – jun-uen0.github.io

This is a React-based personal portfolio website hosted on GitHub Pages.

Originally forked from [yujisatojr/react-portfolio-template](https://github.com/yujisatojr/react-portfolio-template), this project serves as my personal professional profile page.

---

## Development & Deployment Workflow

### Setup

```bash
cd jun-uen0.github.io
nvm use                # Use the appropriate Node version (via NVM)
git checkout -b feature/your-feature-name
npm install            # Install dependencies
npm start              # Run local dev server
```

### Update & Preview

- Make changes to the components (e.g., `src/components`)
- Preview at `http://localhost:3000`

### Publish to GitHub Pages

```bash
npm run build
npx gh-pages -d build
```

- This publishes the `build/` directory to the `gh-pages` branch.
- Accessible at: [https://jun-uen0.github.io](https://jun-uen0.github.io)

### Push Feature & Create Pull Request

```bash
git add .
git commit -m "your message"
git push origin feature/your-feature-name
```

- Open a Pull Request to `main`
- Once approved, merge into `main`

---

## Credits

This site is proudly based on the beautiful [react-portfolio-template](https://github.com/yujisatojr/react-portfolio-template) by [@yujisatojr](https://github.com/yujisatojr).

Special thanks to Yuji Sato for open-sourcing this elegant template under the MIT License, enabling developers around the world to showcase their work with style and simplicity.