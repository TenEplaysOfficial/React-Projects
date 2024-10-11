# My Vite+React Project

Welcome to my React Vite project! This repository contains various projects built using **React** and **Vite**, showcasing different functionalities and techniques in React development.

## Features

- Fast development environment with Vite
- Component-based architecture using React
- Routing with React Router
- Markdown rendering with React Markdown and Remix GFM
- Custom icons with React Icons
- Styled with Tailwind CSS (optional)

## Getting Started

To get started with this project, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/TenEplaysOfficial/React-Projects.git
cd React-Projects
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see your app in action!

## Creating a New React Project with Vite

To create a new React project using Vite and include essential packages, follow these steps:

### Step 1: Create a New Vite Project

1. **Install Vite** if you haven't already:
   ```bash
   npm create vite@latest my-react-app --template react
   ```

2. **Navigate to the project directory**:
   ```bash
   cd my-react-app
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

### Step 2: Install Additional Packages

Next, you can install the packages you want to use:

1. **React Router**:
   ```bash
   npm install react-router-dom
   ```

2. **React Markdown**:
   ```bash
   npm install react-markdown
   ```

3. **Remix GFM** (GitHub Flavored Markdown support):
   ```bash
   npm install remix-gfm
   ```

4. **React Icons**:
   ```bash
   npm install react-icons
   ```

### Step 3: (Optional) Install Tailwind CSS

If you want to use Tailwind CSS for styling, follow these steps:

1. **Install Tailwind CSS and its peer dependencies**:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. **Initialize Tailwind CSS**:
   ```bash
   npx tailwindcss init -p
   ```

3. **Configure your `tailwind.config.js` file** to include paths to all of your template files:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

4. **Add the Tailwind directives** to your CSS file (e.g., `src/index.css`):
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Step 4: Start the Development Server

Finally, start the development server to see your application in action:

```bash
npm run dev
```

You should now have a fully functional React application set up with Vite, along with the selected packages. Happy coding!

## Project Structure

```
repo-name/
├── public/           # Static assets
├── src/              # Source files
│   ├── components/   # React components
│   ├── styles/       # CSS styles (including Tailwind if used)
│   └── App.jsx       # Main application component
├── .github/          # GitHub Actions workflows
│   └── workflows/
│       └── deploy.yml
├── vite.config.js    # Vite configuration file
└── package.json      # Project metadata and dependencies
```

## Deployment

This project is set up for deployment to GitHub Pages using GitHub Actions. 

### 1. Configure `vite.config.js`

Ensure that the `base` property in `vite.config.js` is set to your repository name:

```javascript
export default defineConfig({
  base: '/repo-name/', // Replace 'repo-name' with your actual repository name
});
```

### 2. Push to the Main Branch

When you push to the `main` branch, GitHub Actions will automatically build and deploy the project to GitHub Pages.

### 3. Access Your Deployed Site

Once deployed, your site will be available at:

```
https://<your-username>.github.io/repo-name/
```

Replace `<your-username>` with your GitHub username and `repo-name` with your repository name.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


*Stay connected! Follow me on [Socials](https://linktr.ee/tenegames).*
