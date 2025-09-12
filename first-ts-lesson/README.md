# TypeScript Browser Examples

This is a simple TypeScript project that demonstrates basic TypeScript features in the browser.

## Prerequisites

- Node.js (v14 or later)
- npm (comes with Node.js)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   Then open http://localhost:3000 in your browser.

## Available Scripts

- `npm run build` - Compiles TypeScript to JavaScript and copies HTML files
- `npm start` - Starts a local server to serve the built files
- `npm run clean` - Removes the dist directory
- `npm run rebuild` - Cleans and rebuilds the project

## Project Structure

- `src/` - Contains TypeScript source files
- `dist/` - Contains compiled JavaScript and HTML (created after build)
- `index.html` - Main HTML file that includes the compiled JavaScript
- `tsconfig.json` - TypeScript configuration
- `package.json` - Project configuration and dependencies

## Development Workflow

1. Make changes to your TypeScript files in the `src` directory
2. Build the project: `npm run build`
3. The changes will be automatically reflected when you refresh the browser

## Learning Resources

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play/)
