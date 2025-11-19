# Anno 117 Admin Mod

A comprehensive admin and cheat mod for Anno 117 - Pax Romana with a user-friendly web-based control panel.

## 🎮 Features

- **🖥️ Admin Panel UI** - Browser-based control panel for easy access to all admin features
- **💰 Resource Management** - Add unlimited coins, materials, and goods instantly
- **🏗️ Building Control** - Instant construction, free building, unlock all buildings
- **⚡ Game Control** - Adjust game speed, reveal map, god mode, and more
- **👥 Player Management** - Control AI behavior, manage diplomacy, set reputation
- **🔍 Debug Tools** - FPS counter, collision boxes, pathfinding visualization
- **⌨️ Console Commands** - Full command-line interface for advanced users
- **📖 Comprehensive Documentation** - Complete guides and command reference

## 📦 Quick Start

1. **Download** the `AdminMod` folder from this repository
2. **Copy** the entire folder to your Anno 117 installation directory
3. **Open** `AdminMod/AdminPanel/index.html` in your web browser
4. **Launch** Anno 117 and enjoy!

👉 See [QUICKSTART.md](AdminMod/QUICKSTART.md) for detailed setup instructions.

## 📚 Documentation

- **[QUICKSTART.md](AdminMod/QUICKSTART.md)** - 5-minute setup guide
- **[INSTALLATION.md](AdminMod/INSTALLATION.md)** - Detailed installation instructions
- **[COMMANDS.md](AdminMod/COMMANDS.md)** - Complete command reference
- **[README.md](AdminMod/README.md)** - Main mod documentation

## 🛠️ Installation

### Basic Installation

```bash
1. Navigate to your Anno 117 directory
2. Copy the AdminMod folder here
3. Open AdminMod/AdminPanel/index.html in browser
4. Start the game
```

### File Structure

```
anno117/
├── AdminMod/
│   ├── AdminPanel/          # Web-based UI
│   │   ├── index.html       # Main interface
│   │   ├── css/
│   │   └── js/
│   ├── data/                # Script files
│   │   └── script/
│   │       └── content/
│   │           └── adminmod/
│   ├── README.md
│   ├── QUICKSTART.md
│   ├── INSTALLATION.md
│   └── COMMANDS.md
└── [game files]
```

## 🎯 Usage Examples

### Using the Admin Panel

1. **Max Resources**: Click "Max All Resources" in the Resources tab
2. **Speed Up Game**: Move speed slider to 5x in Game Control tab
3. **Unlock Buildings**: Click "Unlock All Buildings" in Buildings tab
4. **Reveal Map**: Click "Reveal Full Map" in Game Control tab

### Using Console Commands

Press `~` in-game to open console, then type:

```lua
-- Add 10,000 coins
Game.AddResource("coins", 10000)

-- Max all resources
Game.MaxAllResources()

-- Enable instant building
Game.InstantBuild(true)

-- Set game speed to 5x
Game.SetSpeed(5)

-- Reveal entire map
Game.RevealMap()
```

## 🔧 Available Commands

### Resource Commands
- `Game.AddResource(type, amount)` - Add specific resources
- `Game.SetResourceMax(type)` - Max single resource
- `Game.MaxAllResources()` - Max everything

### Building Commands
- `Game.InstantBuild(bool)` - Toggle instant building
- `Game.FreeBuild(bool)` - Toggle free building
- `Game.UnlockAllBuildings()` - Unlock all buildings
- `Game.NoMaintenance(bool)` - Disable maintenance costs

### Game Control
- `Game.SetSpeed(multiplier)` - Adjust game speed (0.5-10x)
- `Game.Pause()` - Pause the game
- `Game.RevealMap()` - Reveal entire map
- `Game.GodMode(bool)` - Enable god mode

### AI & Players
- `Game.DisableAI(bool)` - Toggle AI
- `Game.SetAIBehavior(type)` - Change AI behavior
- `Game.AllianceWithAll()` - Alliance with everyone
- `Game.SetReputation(value)` - Set reputation

### Debug Tools
- `Debug.ShowFPS(bool)` - Show FPS counter
- `Debug.ShowGrid(bool)` - Show build grid
- `Debug.ShowCollision(bool)` - Show collision boxes

👉 See [COMMANDS.md](AdminMod/COMMANDS.md) for complete command list.

## 📸 Screenshots

The Admin Panel provides an intuitive interface with:
- 📊 **Resources Tab** - Manage all game resources
- 🏛️ **Buildings Tab** - Control building features
- 🎮 **Game Control Tab** - Adjust game settings
- 👥 **Players Tab** - Manage AI and diplomacy
- 🐛 **Debug Tab** - Development and debugging tools
- ❓ **Help Tab** - Built-in documentation

## ⚙️ Requirements

- Anno 117 - Pax Romana (any version)
- Modern web browser (Chrome, Firefox, Edge)
- Windows, Mac, or Linux (browser compatibility)

## ⚠️ Important Notes

- **Backup Your Saves**: Always create backups before using cheats
- **Single Player Only**: Not designed for multiplayer use
- **Performance**: High game speeds (>10x) may cause lag
- **Compatibility**: May conflict with other script mods

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs via GitHub Issues
- Submit feature requests
- Create pull requests
- Share your customizations

## 📝 License

This mod is free to use and modify for personal use. Please credit the original author when sharing modifications.

## 🙏 Credits

Created for the Anno 117 - Pax Romana modding community.

## 📧 Support

Having issues? Check our documentation:
1. [QUICKSTART.md](AdminMod/QUICKSTART.md) - Quick setup guide
2. [INSTALLATION.md](AdminMod/INSTALLATION.md) - Installation help
3. [COMMANDS.md](AdminMod/COMMANDS.md) - Command reference

Still need help? Open an issue on GitHub!

## 🔄 Version History

### v1.0.0 (Current)
- Initial release
- Admin Panel UI
- Complete command system
- Resource management
- Building control
- Game speed control
- AI management
- Debug tools
- Comprehensive documentation

---

**Enjoy your enhanced Anno 117 experience! 🏛️**
