# Changelog

All notable changes to the Anno 1701 Admin Mod will be documented in this file.

## [1.0.0] - 2024-11-19

### Added
- Initial release of Admin Mod for Anno 1701 - Pax Romana
- Web-based Admin Panel UI with tabbed interface
- Resource management system
  - Add specific amounts of resources
  - Max individual resources
  - Max all resources at once
- Building control features
  - Instant building toggle
  - Free building mode
  - Unlock all buildings
  - Remove build limits
  - Disable maintenance costs
- Game control commands
  - Adjustable game speed (0.5x - 10x)
  - Pause/resume game
  - Reveal full map
  - Toggle fog of war
  - God mode
  - Invincibility mode
- Player and AI management
  - Enable/disable AI
  - Change AI behavior (peaceful, aggressive)
  - Reset diplomacy
  - Set reputation
  - Alliance with all players
  - Declare war on all players
- Victory commands
  - Instant victory
  - Instant defeat
- Debug tools
  - FPS counter
  - Build grid overlay
  - Collision box visualization
  - Pathfinding display
  - Performance optimization
  - Cache clearing
- Console command system
  - In-browser console with logging
  - Clipboard integration
  - Command history
  - Keyboard shortcuts
- Documentation
  - Comprehensive README
  - Quick Start Guide
  - Detailed Installation Guide
  - Complete Command Reference
  - Troubleshooting section
- Admin Panel features
  - Responsive design
  - Dark theme with Anno 1701 inspired colors
  - Intuitive navigation
  - Real-time status updates
  - Settings persistence
  - Notification system
- Lua scripts
  - Main admin module (adminmod.lua)
  - Initialization script (init.lua)
  - Command registration system
  - Error handling

### Technical Details
- Admin Panel built with vanilla HTML/CSS/JavaScript
- No external dependencies required
- Browser-based UI works on any platform
- Lua scripts compatible with Anno 1701 scripting system
- Modular command structure for easy extension

### Known Limitations
- Commands are templates and may require game-specific integration
- Some features depend on Anno 1701's script API availability
- Multiplayer compatibility not tested
- May conflict with other script-based mods

---

## Future Releases

### [1.1.0] - Planned
- Enhanced game integration
- More granular building controls
- Save game editor
- Custom command macros
- Import/export settings
- Multi-language support

### [1.2.0] - Planned
- Advanced AI scripting
- Event scheduler
- Automated trading routes
- Custom scenarios
- Statistics viewer
- Performance profiler

### [2.0.0] - Planned
- In-game overlay option
- Real-time game state synchronization
- Mod manager integration
- Plugin system for extensions
- Cloud save backups
- Community command sharing

---

## Version Numbering

This project follows [Semantic Versioning](https://semver.org/):
- MAJOR version for incompatible API changes
- MINOR version for backwards-compatible functionality additions
- PATCH version for backwards-compatible bug fixes

---

## Contributing

Want to contribute to the changelog?
- Bug fixes: Add entry under next PATCH version
- New features: Add entry under next MINOR version
- Breaking changes: Add entry under next MAJOR version

---

[1.0.0]: https://github.com/SloOoOoO/Admin-Mod/releases/tag/v1.0.0
