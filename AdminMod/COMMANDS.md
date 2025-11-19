# Anno 1701 Admin Mod - Command Reference

## Table of Contents
1. [Resource Commands](#resource-commands)
2. [Building Commands](#building-commands)
3. [Game Control Commands](#game-control-commands)
4. [Player & AI Commands](#player--ai-commands)
5. [Victory Commands](#victory-commands)
6. [Debug Commands](#debug-commands)

---

## Resource Commands

### Add Resources
Add a specific amount of a resource to your inventory.

```lua
Game.AddResource("resourceType", amount)
```

**Examples:**
```lua
Game.AddResource("coins", 10000)    -- Add 10,000 coins
Game.AddResource("wood", 500)       -- Add 500 wood
Game.AddResource("stone", 500)      -- Add 500 stone
Game.AddResource("tools", 100)      -- Add 100 tools
Game.AddResource("weapons", 100)    -- Add 100 weapons
Game.AddResource("food", 200)       -- Add 200 food
Game.AddResource("cloth", 100)      -- Add 100 cloth
```

### Max Single Resource
Set a single resource to maximum (999,999).

```lua
Game.SetResourceMax("resourceType")
```

**Examples:**
```lua
Game.SetResourceMax("coins")   -- Max out coins
Game.SetResourceMax("wood")    -- Max out wood
```

### Max All Resources
Set all resources to maximum at once.

```lua
Game.MaxAllResources()
```

---

## Building Commands

### Instant Building
Enable or disable instant construction of buildings.

```lua
Game.InstantBuild(true)   -- Enable instant building
Game.InstantBuild(false)  -- Disable instant building
```

### Free Building
Enable or disable free building (no resource costs).

```lua
Game.FreeBuild(true)   -- Enable free building
Game.FreeBuild(false)  -- Disable free building
```

### No Build Costs
Remove all building costs.

```lua
Game.NoBuildCosts(true)   -- Enable no costs
Game.NoBuildCosts(false)  -- Disable no costs
```

### Unlock All Buildings
Unlock all buildings regardless of tier or requirements.

```lua
Game.UnlockAllBuildings()
```

### Remove Build Limits
Remove population and other requirements for buildings.

```lua
Game.RemoveBuildLimits()
```

### No Maintenance
Disable building maintenance costs.

```lua
Game.NoMaintenance(true)   -- Disable maintenance
Game.NoMaintenance(false)  -- Enable maintenance
```

---

## Game Control Commands

### Game Speed
Adjust the game speed multiplier.

```lua
Game.SetSpeed(multiplier)
```

**Examples:**
```lua
Game.SetSpeed(1)    -- Normal speed
Game.SetSpeed(2)    -- 2x speed
Game.SetSpeed(5)    -- 5x speed
Game.SetSpeed(10)   -- 10x speed
Game.SetSpeed(0.5)  -- Half speed
```

### Pause Game
Pause the game.

```lua
Game.Pause()
```

### Reveal Map
Reveal the entire map.

```lua
Game.RevealMap()
```

### Fog of War
Enable or disable fog of war.

```lua
Game.FogOfWar(true)   -- Enable fog of war
Game.FogOfWar(false)  -- Disable fog of war
```

### God Mode
Enable god mode (invulnerability and unlimited resources).

```lua
Game.GodMode(true)   -- Enable god mode
Game.GodMode(false)  -- Disable god mode
```

### Invincibility
Make your units and buildings invincible.

```lua
Game.Invincibility(true)   -- Enable invincibility
Game.Invincibility(false)  -- Disable invincibility
```

---

## Player & AI Commands

### Disable/Enable AI
Disable or enable all AI players.

```lua
Game.DisableAI(true)   -- Disable AI
Game.DisableAI(false)  -- Enable AI
```

### Set AI Behavior
Change AI behavior pattern.

```lua
Game.SetAIBehavior("behavior")
```

**Available behaviors:**
- `"peaceful"` - AI will not attack
- `"aggressive"` - AI will be more hostile
- `"defensive"` - AI focuses on defense
- `"normal"` - Default AI behavior

**Examples:**
```lua
Game.SetAIBehavior("peaceful")
Game.SetAIBehavior("aggressive")
```

### Reset Diplomacy
Reset all diplomatic relations to neutral.

```lua
Game.ResetDiplomacy()
```

### Set Reputation
Set your reputation with all players.

```lua
Game.SetReputation(value)
```

**Examples:**
```lua
Game.SetReputation(100)   -- Maximum reputation
Game.SetReputation(50)    -- Neutral
Game.SetReputation(0)     -- Minimum reputation
```

### Alliance with All
Create alliance with all players.

```lua
Game.AllianceWithAll()
```

### War with All
Declare war on all players.

```lua
Game.WarWithAll()
```

---

## Victory Commands

### Instant Victory
Trigger instant victory condition.

```lua
Game.Victory()
```

### Instant Defeat
Trigger instant defeat condition.

```lua
Game.Defeat()
```

---

## Debug Commands

### Show FPS
Display FPS counter.

```lua
Debug.ShowFPS(true)   -- Show FPS
Debug.ShowFPS(false)  -- Hide FPS
```

### Show Build Grid
Display building placement grid.

```lua
Debug.ShowGrid(true)   -- Show grid
Debug.ShowGrid(false)  -- Hide grid
```

### Show Collision
Display collision boxes for objects.

```lua
Debug.ShowCollision(true)   -- Show collision
Debug.ShowCollision(false)  -- Hide collision
```

### Show Pathfinding
Display pathfinding information.

```lua
Debug.ShowPaths(true)   -- Show paths
Debug.ShowPaths(false)  -- Hide paths
```

### Optimize Performance
Run performance optimization.

```lua
Game.OptimizePerformance()
```

### Clear Cache
Clear game cache.

```lua
Game.ClearCache()
```

---

## Generic Toggle Command

You can toggle any feature using the generic toggle command:

```lua
Game.Toggle("feature_name", enabled)
```

**Examples:**
```lua
Game.Toggle("instant_build", true)
Game.Toggle("free_build", false)
Game.Toggle("show_fps", true)
```

---

## Tips & Tricks

### Console Access
- Press `~` or `` ` `` to open the in-game console
- Type or paste commands
- Press `Enter` to execute

### Command Chaining
You can execute multiple commands at once:

```lua
Game.MaxAllResources(); Game.UnlockAllBuildings(); Game.SetSpeed(5)
```

### Save Before Using Cheats
Always create a backup save before using admin commands. Some changes may be irreversible.

### Performance Considerations
- Using very high game speeds (>10x) may cause performance issues
- Spawning too many units or buildings at once may lag the game
- Use debug overlays sparingly as they impact performance

---

## Troubleshooting

### Command Not Working
1. Check spelling and syntax
2. Ensure Admin Mod is properly installed
3. Check console for error messages
4. Verify game version compatibility

### Game Crashes
1. Reduce game speed
2. Disable debug overlays
3. Clear cache using `Game.ClearCache()`
4. Restart the game

### Admin Panel Not Responding
1. Refresh the admin panel in your browser
2. Check if JavaScript is enabled
3. Try a different browser
4. Check browser console (F12) for errors

---

## Version History

### v1.0.0
- Initial release
- Basic resource management
- Building control commands
- Game speed control
- AI management
- Debug tools

---

For more information, see the main [README.md](README.md) file.
