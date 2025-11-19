-- Anno 117 Admin Mod Initialization Script
-- This script loads and initializes the admin mod

print("===========================================")
print("Anno 117 Admin Mod - Loading...")
print("===========================================")

-- Load the main admin mod module
local adminModPath = "content.adminmod.adminmod"
local success, adminMod = pcall(require, adminModPath)

if success then
    print("✓ Admin Mod loaded successfully")
    print("✓ Version: " .. (adminMod.Version or "Unknown"))
    print("✓ Status: " .. (adminMod.Enabled and "Enabled" or "Disabled"))
    print("")
    print("Available command namespaces:")
    print("  - Game.*     (Game control commands)")
    print("  - Debug.*    (Debug and visualization)")
    print("")
    print("Type 'help' in console for command list")
    print("Or use the Admin Panel UI in your browser")
else
    print("✗ Failed to load Admin Mod")
    print("✗ Error: " .. tostring(adminMod))
    print("")
    print("Please check installation:")
    print("  1. Verify adminmod.lua exists in data/script/content/adminmod/")
    print("  2. Check for syntax errors in mod files")
    print("  3. Ensure game has permission to read mod files")
end

print("===========================================")

-- Define help command
_G.help = function()
    print("")
    print("=== Anno 117 Admin Mod - Command Reference ===")
    print("")
    print("RESOURCES:")
    print("  Game.AddResource(type, amount)  - Add resources")
    print("  Game.SetResourceMax(type)       - Max single resource")
    print("  Game.MaxAllResources()          - Max all resources")
    print("")
    print("BUILDINGS:")
    print("  Game.InstantBuild(true/false)   - Toggle instant building")
    print("  Game.FreeBuild(true/false)      - Toggle free building")
    print("  Game.UnlockAllBuildings()       - Unlock all buildings")
    print("  Game.NoMaintenance(true/false)  - Toggle maintenance costs")
    print("")
    print("GAME CONTROL:")
    print("  Game.SetSpeed(multiplier)       - Set game speed (0.5-10)")
    print("  Game.Pause()                    - Pause the game")
    print("  Game.RevealMap()                - Reveal entire map")
    print("  Game.GodMode(true/false)        - Toggle god mode")
    print("")
    print("PLAYERS & AI:")
    print("  Game.DisableAI(true/false)      - Toggle AI")
    print("  Game.SetAIBehavior(behavior)    - Set AI behavior")
    print("  Game.ResetDiplomacy()           - Reset relations")
    print("  Game.AllianceWithAll()          - Alliance with all")
    print("")
    print("DEBUG:")
    print("  Debug.ShowFPS(true/false)       - Toggle FPS display")
    print("  Debug.ShowGrid(true/false)      - Toggle build grid")
    print("  Debug.ShowCollision(true/false) - Toggle collision boxes")
    print("")
    print("VICTORY:")
    print("  Game.Victory()                  - Instant win")
    print("  Game.Defeat()                   - Instant lose")
    print("")
    print("For detailed documentation, see COMMANDS.md")
    print("For Admin Panel UI, open AdminPanel/index.html in browser")
    print("===============================================")
    print("")
end

-- Welcome message
print("")
print("💡 Quick Tips:")
print("  - Type 'help' for command reference")
print("  - Open AdminPanel/index.html for UI")
print("  - See QUICKSTART.md for tutorial")
print("  - Commands auto-copy to clipboard from UI")
print("")

return success
