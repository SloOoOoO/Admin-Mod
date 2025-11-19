# Quick Start Guide

## 5-Minute Setup

### Step 1: Download the Mod
Download the complete `AdminMod` folder from this repository.

### Step 2: Install Files
1. Locate your Anno 117 installation directory (usually in `Program Files`)
2. Copy the entire `AdminMod` folder into your Anno 117 directory
3. Merge the `data` folder with your existing `data` folder when prompted

**Your directory structure should look like:**
```
Anno 117/
├── AdminMod/
│   ├── AdminPanel/
│   │   ├── index.html
│   │   ├── css/
│   │   └── js/
│   ├── data/
│   │   └── script/
│   │       └── content/
│   │           └── adminmod/
│   ├── README.md
│   ├── COMMANDS.md
│   └── QUICKSTART.md
├── data/
│   └── script/
│       └── content/
│           └── adminmod/   ← Merged files
└── [other game files]
```

### Step 3: Open Admin Panel
1. Navigate to `Anno 117/AdminMod/AdminPanel/`
2. Double-click `index.html`
3. It will open in your default browser
4. **Bookmark this page** for easy access!

### Step 4: Launch Game
1. Start Anno 117 normally
2. Load or start a new game
3. Keep the Admin Panel browser tab open

### Step 5: Use Admin Features
1. Click on different tabs in the Admin Panel (Resources, Buildings, etc.)
2. Click buttons to execute commands
3. Commands are automatically copied to your clipboard
4. Alternatively, press `~` in-game to open console and paste commands

## First Commands to Try

### 1. Get Rich Quick
Click **"Max All Resources"** in the Resources tab or use:
```lua
Game.MaxAllResources()
```

### 2. Build Instantly
Click **"Instant Build"** in the Buildings tab or use:
```lua
Game.InstantBuild(true)
```

### 3. Speed Up Time
Move the speed slider to 5x or use:
```lua
Game.SetSpeed(5)
```

### 4. Reveal the Map
Click **"Reveal Full Map"** in the Game Control tab or use:
```lua
Game.RevealMap()
```

## Using the Admin Panel

### Resources Tab
- **Add Coins**: Enter amount and click "Add Coins"
- **Add Materials**: Set amounts for Wood, Stone, Tools, Weapons
- **Add Goods**: Manage Food and Cloth supplies
- **Max All**: Click to set everything to maximum

### Buildings Tab
- **Quick Actions**: Enable instant building, free construction
- **Building Types**: Unlock all buildings and remove limits
- **Toggle Options**: Check boxes to enable features

### Game Control Tab
- **Game Speed**: Use slider or preset buttons
- **Game Options**: Reveal map, disable fog of war, god mode
- **Auto-Save**: Enable automatic saving

### Players Tab
- **AI Control**: Disable or modify AI behavior
- **Diplomacy**: Manage relations with other players
- **Victory**: Instant win/lose buttons

### Debug Tab
- **Overlays**: Show FPS, grid, collision boxes, paths
- **Performance**: Optimization tools
- **Console**: Direct command input

## Tips for New Users

### Do This:
✅ Create a backup save before using cheats  
✅ Start with simple commands (add resources)  
✅ Keep the Admin Panel open while playing  
✅ Use moderate game speeds (2-5x) for stability  
✅ Read the tooltips and help section  

### Don't Do This:
❌ Don't use extreme game speeds (>10x) on slow systems  
❌ Don't enable all debug overlays at once  
❌ Don't use victory commands if you want to keep playing  
❌ Don't forget to save before experimenting  

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `~` or `` ` `` | Open in-game console |
| `Ctrl + C` | Copy command (automatic) |
| `Ctrl + V` | Paste in console |
| `Enter` | Execute command |
| `F1` | Show help in Admin Panel |

## Common Questions

### Q: Do I need to restart the game after installing?
**A:** Only if you already had the game running. Fresh installs work immediately.

### Q: Can I use this in multiplayer?
**A:** Admin commands are designed for single-player only. Use in multiplayer may cause issues.

### Q: Will this disable achievements?
**A:** Anno 117 doesn't have achievements, but using cheats would typically disable them in games that do.

### Q: Can I customize the admin panel?
**A:** Yes! Edit the HTML, CSS, and JavaScript files to customize appearance and functionality.

### Q: Does this work with other mods?
**A:** Generally yes, but conflicts may occur. Install Admin Mod last to ensure compatibility.

### Q: How do I uninstall?
**A:** Simply delete the `AdminMod` folder and the `data/script/content/adminmod` folder.

## Getting Help

### Command Not Working?
1. Check syntax in [COMMANDS.md](COMMANDS.md)
2. Open browser console (F12) to see errors
3. Try refreshing the Admin Panel
4. Restart the game

### Admin Panel Not Loading?
1. Make sure JavaScript is enabled in your browser
2. Try a different browser (Chrome, Firefox, Edge)
3. Check if files were extracted correctly
4. Disable browser extensions that might block content

### Game Issues?
1. Verify game files through Steam/installer
2. Remove other mods temporarily
3. Check Anno 117 game logs
4. Report issues on GitHub

## Next Steps

Once you're comfortable with the basics:

1. **Explore All Tabs**: Each tab has unique features
2. **Read [COMMANDS.md](COMMANDS.md)**: Learn all available commands
3. **Try Console Commands**: Practice using the in-game console
4. **Experiment**: Try different combinations of features
5. **Customize**: Modify the admin panel to your liking

## Support

Found a bug? Have a suggestion?  
Open an issue on GitHub: [Admin-Mod Issues](https://github.com/SloOoOoO/Admin-Mod/issues)

---

**Ready to play? Launch Anno 117 and enjoy your admin powers! 🏛️**
