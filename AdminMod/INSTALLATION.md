# Detailed Installation Guide

## Prerequisites

Before installing the Admin Mod, ensure you have:

1. **Anno 1701 - Pax Romana** installed and working
2. A modern web browser (Chrome, Firefox, Edge, or Safari)
3. Administrator rights (to modify game files)
4. ~10 MB of free disk space

## Installation Methods

### Method 1: Manual Installation (Recommended)

#### Step 1: Backup Your Game
1. Navigate to your Anno 1701 installation directory
   - Steam: `C:\Program Files (x86)\Steam\steamapps\common\Anno1701\`
   - Ubisoft: `C:\Program Files (x86)\Ubisoft\Anno 1701\`
   - Custom: Check your installation location
2. Create a backup folder: `Anno1701_Backup`
3. Copy the entire `data` folder to the backup location
4. This ensures you can restore if needed

#### Step 2: Download the Mod
1. Download the latest release from the GitHub repository
2. Or clone the repository: `git clone https://github.com/SloOoOoO/Admin-Mod.git`
3. Extract the archive if downloaded as ZIP

#### Step 3: Install Mod Files
1. Open the downloaded `AdminMod` folder
2. You should see:
   ```
   AdminMod/
   ├── AdminPanel/
   ├── data/
   ├── README.md
   ├── COMMANDS.md
   ├── QUICKSTART.md
   └── INSTALLATION.md (this file)
   ```

3. Copy the **entire AdminMod folder** to your Anno 1701 installation directory
4. Your Anno 1701 directory should now contain:
   ```
   Anno1701/
   ├── AdminMod/          ← New folder
   ├── data/              ← Existing folder
   ├── Anno1701.exe       ← Game executable
   └── [other game files]
   ```

#### Step 4: Merge Script Files
The mod needs to integrate with game scripts:

1. Open `AdminMod/data/script/content/adminmod/`
2. This folder contains:
   - `adminmod.lua` - Main mod file
   - `init.lua` - Initialization script

3. Copy the `adminmod` folder to:
   ```
   Anno1701/data/script/content/adminmod/
   ```

4. If prompted to merge folders, click **Yes** or **Merge**

#### Step 5: Verify Installation
Check that these paths exist:
- ✅ `Anno1701/AdminMod/AdminPanel/index.html`
- ✅ `Anno1701/AdminMod/README.md`
- ✅ `Anno1701/data/script/content/adminmod/adminmod.lua`
- ✅ `Anno1701/data/script/content/adminmod/init.lua`

### Method 2: Quick Copy (Alternative)

If you're comfortable with file operations:

1. Copy the entire `AdminMod` folder to your Anno 1701 directory
2. Done! The mod is self-contained and ready to use

## Post-Installation Setup

### Configure the Admin Panel

1. Navigate to `Anno1701/AdminMod/AdminPanel/`
2. Right-click `index.html`
3. Choose "Open with" → Your preferred browser
4. Bookmark this page for easy access

**Creating a Desktop Shortcut (Optional):**
1. Right-click `index.html`
2. Select "Create shortcut"
3. Move the shortcut to your Desktop
4. Rename it to "Anno 1701 Admin Panel"

### Enable Mod Loading (Game-Specific)

Anno 1701 may require additional steps to load custom scripts:

#### For Steam Version:
1. Right-click Anno 1701 in Steam Library
2. Select "Properties"
3. In "Launch Options", add: `-devmode`
4. Click "OK"

#### For Standalone Version:
1. Locate `Anno1701.exe`
2. Right-click → "Create shortcut"
3. Right-click the shortcut → "Properties"
4. In "Target" field, add at the end: ` -devmode`
5. Example: `"C:\...\Anno1701.exe" -devmode`
6. Use this shortcut to launch the game

**Note:** `-devmode` flag may vary by game version. Common alternatives:
- `-debug`
- `-console`
- `-dev`

If unsure, skip this step and try the mod without flags first.

## First Launch

### Step 1: Open Admin Panel
1. Open `AdminPanel/index.html` in your browser
2. You should see the Admin Panel interface
3. Keep this tab open

### Step 2: Launch Anno 1701
1. Start the game using your normal method (or shortcut with -devmode)
2. Load an existing save or start a new game
3. Wait for the game to fully load

### Step 3: Test the Mod
Try these test commands:

**Method A: Using Admin Panel**
1. Click the "Resources" tab
2. Click "Max All Resources" button
3. Check your in-game resources

**Method B: Using Console**
1. Press `~` or `` ` `` in-game to open console
2. Type: `Game.MaxAllResources()`
3. Press Enter
4. Check your resources

### Step 4: Verify Loading
Look for console messages:
```
===========================================
Anno 1701 Admin Mod - Loading...
===========================================
✓ Admin Mod loaded successfully
✓ Version: 1.0.0
✓ Status: Enabled
...
```

If you see this, the mod is working correctly!

## Troubleshooting Installation

### Issue: Admin Panel Opens But Doesn't Work

**Solution:**
1. Check browser JavaScript is enabled
2. Try a different browser
3. Disable browser extensions
4. Open browser console (F12) and check for errors

### Issue: Game Doesn't Load Mod

**Solution:**
1. Verify file paths are correct
2. Check that `-devmode` flag is set (if required)
3. Look for error messages in game console
4. Verify .lua files have correct syntax

### Issue: "Access Denied" When Copying Files

**Solution:**
1. Close the game completely
2. Close any Anno 1701 related processes
3. Run file explorer as Administrator
4. Try copying again

### Issue: Game Crashes After Installing Mod

**Solution:**
1. Restore from backup
2. Verify game files integrity (Steam: Properties → Local Files → Verify)
3. Reinstall the mod carefully
4. Check game version compatibility

### Issue: Commands Don't Execute

**Solution:**
1. Ensure console is open (`~` key)
2. Check command syntax (see COMMANDS.md)
3. Try the `help` command first
4. Check for error messages

### Issue: Can't Find Anno 1701 Directory

**Common locations:**
- Steam: `C:\Program Files (x86)\Steam\steamapps\common\Anno1701\`
- Ubisoft Connect: `C:\Program Files (x86)\Ubisoft\Anno 1701\`
- GOG: `C:\Program Files (x86)\GOG Galaxy\Games\Anno 1701\`
- Custom: Search for `Anno1701.exe`

## Uninstallation

### Complete Removal

1. Navigate to Anno 1701 installation directory
2. Delete the `AdminMod` folder
3. Delete `data/script/content/adminmod` folder
4. Remove `-devmode` flag from launch options (if added)
5. Verify game files (Steam users)

### Restore from Backup

If you created a backup:
1. Delete current `data` folder
2. Copy backup `data` folder to Anno 1701 directory
3. Remove `-devmode` flag

## Advanced Configuration

### Customizing Admin Panel

The Admin Panel can be customized by editing:
- `AdminPanel/css/style.css` - Visual styling
- `AdminPanel/js/app.js` - Functionality
- `AdminPanel/index.html` - Layout and content

### Adding Custom Commands

To add your own commands:
1. Open `data/script/content/adminmod/adminmod.lua`
2. Add new function:
   ```lua
   function AdminMod:MyCustomCommand()
       print("My custom command executed!")
       return true
   end
   ```
3. Register it in `RegisterCommands()`:
   ```lua
   Game.MyCustomCommand = function()
       return AdminMod:MyCustomCommand()
   end
   ```
4. Restart the game

### Mod Compatibility

The Admin Mod is designed to be compatible with most Anno 1701 mods. However:
- Install Admin Mod **last** to avoid conflicts
- Some script mods may override Admin Mod functions
- Graphics/UI mods should not conflict
- Always test in a backup save first

## Getting Help

### Documentation
- [README.md](README.md) - Overview and features
- [QUICKSTART.md](QUICKSTART.md) - Quick start guide
- [COMMANDS.md](COMMANDS.md) - Complete command reference

### Support Channels
- GitHub Issues: [Report bugs or request features](https://github.com/SloOoOoO/Admin-Mod/issues)
- Community Discord: [Join discussions](https://discord.gg/anno) (if available)

### Before Asking for Help
Please provide:
1. Anno 1701 version
2. Operating System
3. Installation method used
4. Error messages (if any)
5. Steps to reproduce the issue

## Updates

### Checking for Updates
Visit the GitHub repository regularly for:
- Bug fixes
- New features
- Compatibility updates
- Security patches

### Updating the Mod
1. Download the latest version
2. Backup your current installation
3. Delete old `AdminMod` folder
4. Install new version following this guide
5. Keep your customizations backed up

## FAQ

**Q: Is this mod safe?**  
A: Yes, it only modifies game behavior through scripting. Always download from official sources.

**Q: Will this work on Mac/Linux?**  
A: The Admin Panel works on any OS. Game mod compatibility depends on Anno 1701 running on your system.

**Q: Can I use this in my YouTube videos?**  
A: Yes! Attribution appreciated but not required.

**Q: Does this work with Anno 1701 Venice expansion?**  
A: This mod is designed for Pax Romana. Venice compatibility is not guaranteed.

**Q: Can I distribute modified versions?**  
A: Yes, under the same license. Please credit the original mod.

---

**Installation complete? Continue to [QUICKSTART.md](QUICKSTART.md) to learn how to use the mod!**
