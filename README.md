# Bull Pen - Stock Market Learning Club Website

A single-page website for a student club learning about the stock market with no real money involved. College students curious about investing can use this as a quick reference.

## Local Run Instructions

### Option 1: Python HTTP Server (Recommended)

If you have Python installed:

```bash
# Navigate to the project directory
cd /Users/andyhuang/projects/opencode-website

# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open your browser and go to `http://localhost:8000`

### Option 2: Node.js HTTP Server

If you have Node.js installed:

```bash
# Navigate to the project directory
cd /Users/andyhuang/projects/opencode-website

# Using npx (no global install needed)
npx serve . -p 8000
```

Then open your browser and go to `http://localhost:8000`

### Option 3: Other HTTP Servers

You can use any local HTTP server. The site works with any static file server serving from this directory.

## Features

- **Practice Watchlist**: Filterable by sector (All, Tech, Food, Energy)
- **Market Terms**: Quick definitions for beginners
- **Responsive Design**: Works on mobile phones and desktop browsers
- **Accessible**: Keyboard navigable, screen reader friendly
- **No Dependencies**: Pure HTML, CSS, and JavaScript with system fonts only

## Files

- `index.html` - Main HTML structure
- `style.css` - Styling and responsive design
- `script.js` - Filter functionality
- `AGENTS.md` - Project constraints and guidelines
- `.gitignore` - Git ignore rules

## Notes

All companies and prices are fictional and for learning only.