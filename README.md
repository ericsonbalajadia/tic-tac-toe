# 🎯 Tic-Tac-Toe Game

A modern, responsive Tic-Tac-Toe game built with **React 18 + TypeScript + Vite**, featuring glass morphism design and time travel functionality.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue)
![Vite](https://img.shields.io/badge/Vite-4.4.0-purple)


## ✨ Features

- 🎮 **Classic Tic-Tac-Toe gameplay** with X and O turns
- 🕰️ **Time travel functionality** to review and revisit any move
- 🎨 **Glass morphism UI** with modern design aesthetics
- 📱 **Fully responsive** design for all screen sizes
- ♿ **Accessible** with proper ARIA labels and keyboard navigation
- 🎯 **Win detection** with visual status updates
- 🔄 **Draw detection** for complete games
- 💫 **Smooth animations** and hover effects
- 🎨 **Customizable themes** via CSS variables

## 🚀 Live Demo

[Play the game here!](https://ericson-tic-tac-toe.vercel.app) 
## 📦 Installation


1. **Clone the repository**
   ```bash
   git clone https://github.com/ericsonbalajadia/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🛠️ Build for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Game.tsx          # Main game component with time travel
│   ├── Board.tsx         # Game board logic and rendering
│   └── Square.tsx        # Individual square component
├── App.tsx              # Root application component
├── App.css              # Main styles with glass morphism effects
├── index.css            # Global styles and CSS variables
└── main.tsx             # Application entry point
```

## 🎨 Customization

### Modify Colors and Theme
Edit CSS variables in `index.css`:
```css
.square.x {
  color: blue;
}
.square.o {
  color: red;
}
```

### Adjust Glass Effect
Modify in `App.css`:
```css
.game {
   background: rgba(255, 255, 255, 0.1.5);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); /* Safari support */

  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.1),
    inset 0 -1px 1px rgba(0, 0, 0, 0.05);
}
```

## 🕹️ How to Play

1. **Take turns** placing X and O on the 3x3 grid
2. **First player** to get 3 in a row (horizontally, vertically, or diagonally) wins
3. **Click any move** in the history list to time travel to that game state
4. **Click "Go to game start"** to reset the board completely

## 🧪 Technical Highlights

- **React Hooks**: useState for state management
- **TypeScript**: Full type safety with interfaces
- **CSS Grid/Flexbox**: Modern layout techniques
- **Glass Morphism**: Advanced CSS backdrop-filter effects
- **Responsive Design**: Mobile-first approach with media queries
- **Component Architecture**: Proper separation of concerns

## 🌟 Upcoming Features

- [ ] Player vs AI mode
- [ ] Difficulty levels
- [ ] Sound effects
- [ ] Game statistics
- [ ] Multiplayer online
- [ ] Theme switcher (light/dark mode)

## 🚀 Improvements to be done
- Rewrite Board to use two loops to make the squares instead of hardcoding them
- Add a toggle button that lets you sort the moves in either ascending or descending order.
- When someone wins, highlight the three squares that caused the win (and when no one wins, display a message about the result being a draw).
- Display the location for each move in the format (row, col) in the move history list.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- Built as part of the [React Tutorial](https://react.dev/learn/tutorial-tic-tac-toe)
- Glass morphism design inspiration Apple latest updates
- Background from [WALLPAPERBAT](https://wallpaperbat.com/topography-wallpapers)


## 📞 Contact

Email - [ericsonbalajadia](ericsonbalajaia0@gmail.com) 

Project Link: [hhttps://github.com/ericsonbalajadia/tic-tac-toe.git](https://github.com/ericsonbalajadia/tic-tac-toe.git)

---

