# Anno 1701 Admin Mod - Installation Guide

## Overview
This Admin Mod provides a comprehensive admin panel for Anno 1701 - Pax Romana with an easy-to-use interface for managing game features, cheats, and admin commands.

## Features
- **Admin Panel UI** - External browser-based control panel
- **Resource Management** - Add/modify resources instantly
- **Building Tools** - Quick building placement and management
- **Game Speed Control** - Adjust game speed on the fly
- **Player Management** - Control AI players and diplomacy
- **Debug Tools** - Toggle various debug features
- **Cheat Commands** - Access to all cheat codes through UI

## Installation

### Requirements
- Anno 1701 - Pax Romana installed
- Modern web browser (Chrome, Firefox, Edge)

### Installation Steps

1. **Backup Your Game Files**
   - Create a backup of your Anno 1701 installation directory

2. **Install the Mod**
   - Copy the contents of the `AdminMod` folder to your Anno 1701 installation directory
   - The structure should merge with existing folders:
     - `data/script/` → Your Anno Install/data/script/
     - `config/` → Your Anno Install/config/

3. **Launch the Admin Panel**
   - Open `AdminPanel/index.html` in your web browser
   - Keep the panel open while playing

4. **Start the Game**
   - Launch Anno 1701 normally
   - The admin commands will be available in-game

## Usage

### Admin Panel
The admin panel is divided into several sections:

1. **Resources Tab**
   - Add coins, materials, and goods
   - Set resource amounts to specific values

2. **Buildings Tab**
   - Quick access to building cheats
   - Instant construction options

3. **Game Control Tab**
   - Pause/Resume game
   - Adjust game speed
   - Save/Load management

4. **Player Management Tab**
   - Control AI behavior
   - Diplomacy settings
   - Victory conditions

5. **Debug Tab**
   - Toggle debug overlays
   - Performance monitoring
   - Console access

### In-Game Commands
You can also use console commands directly in the game:

- Press `~` or `` ` `` to open the console
- Type commands from the reference below
- Press Enter to execute

### Command Reference
See `COMMANDS.md` for a full list of available commands.

## Troubleshooting

### Admin Panel Not Working
- Ensure JavaScript is enabled in your browser
- Check that files are not blocked by antivirus

### Commands Not Executing
- Verify mod files are in correct directories
- Check game version compatibility
- Ensure no conflicting mods are installed

### Game Crashes
- Remove mod files and verify game integrity
- Check game logs in `Documents/Anno 1701/Logs/`

## Uninstallation

1. Remove the following folders from your Anno 1701 directory:
   - `data/script/content/adminmod/`
   - `AdminPanel/`

2. Restore from backup if needed

## Credits
Created for Anno 1701 - Pax Romana modding community

## License
Free to use and modify for personal use.

## Support
For issues or questions, please open an issue on the GitHub repository.
