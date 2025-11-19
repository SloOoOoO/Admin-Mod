// Anno 117 Admin Panel JavaScript

// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    loadSettings();
    logToConsole('Admin Panel initialized. Ready to execute commands.');
});

// Initialize tab switching
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
            
            logToConsole(`Switched to ${tabId} tab`);
        });
    });
}

// Resource management functions
function addResource(resourceType) {
    const amount = document.getElementById(`${resourceType}-amount`).value;
    const command = `Game.AddResource("${resourceType}", ${amount})`;
    executeCommand(command);
    logToConsole(`Added ${amount} ${resourceType}`);
    showNotification(`Added ${amount} ${resourceType}`, 'success');
}

function maxResource(resourceType) {
    const command = `Game.SetResourceMax("${resourceType}")`;
    executeCommand(command);
    logToConsole(`Maxed out ${resourceType}`);
    showNotification(`${resourceType} set to maximum`, 'success');
}

function maxAllResources() {
    const resources = ['coins', 'wood', 'stone', 'tools', 'weapons', 'food', 'cloth'];
    resources.forEach(resource => {
        executeCommand(`Game.SetResourceMax("${resource}")`);
    });
    logToConsole('All resources set to maximum');
    showNotification('All resources maxed!', 'success');
}

// Game speed control
function updateGameSpeed(value) {
    document.getElementById('speed-value').textContent = value + 'x';
}

function setGameSpeed(speed) {
    const command = `Game.SetSpeed(${speed})`;
    executeCommand(command);
    document.getElementById('game-speed').value = speed;
    document.getElementById('speed-value').textContent = speed + 'x';
    logToConsole(`Game speed set to ${speed}x`);
    showNotification(`Game speed: ${speed}x`, 'info');
}

function pauseGame() {
    executeCommand('Game.Pause()');
    logToConsole('Game paused');
    showNotification('Game paused', 'info');
}

// Command execution
function executeCommand(command) {
    // In a real implementation, this would communicate with the game
    // For now, we'll log and display the command
    logToConsole(`Executing: ${command}`);
    
    // Store command in clipboard for easy manual execution
    if (navigator.clipboard) {
        navigator.clipboard.writeText(command).then(() => {
            console.log('Command copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy command:', err);
        });
    }
    
    updateStatus('Command executed');
}

// Feature toggles
function toggleFeature(feature, enabled) {
    const state = enabled ? 'enabled' : 'disabled';
    const command = `Game.Toggle("${feature}", ${enabled})`;
    executeCommand(command);
    logToConsole(`${feature} ${state}`);
    showNotification(`${feature} ${state}`, enabled ? 'success' : 'warning');
}

// Console functions
function handleConsoleInput(event) {
    if (event.key === 'Enter') {
        executeConsoleCommand();
    }
}

function executeConsoleCommand() {
    const input = document.getElementById('console-input');
    const command = input.value.trim();
    
    if (command) {
        logToConsole(`> ${command}`, 'input');
        executeCommand(command);
        input.value = '';
    }
}

function logToConsole(message, type = 'info') {
    const consoleOutput = document.getElementById('console-output');
    const timestamp = new Date().toLocaleTimeString();
    const colorClass = type === 'input' ? 'console-input' : type === 'error' ? 'console-error' : '';
    
    const logEntry = document.createElement('div');
    logEntry.className = `console-line ${colorClass}`;
    logEntry.innerHTML = `<span class="timestamp">[${timestamp}]</span> ${message}`;
    
    consoleOutput.appendChild(logEntry);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '5px',
        color: 'white',
        fontWeight: 'bold',
        zIndex: '10000',
        animation: 'slideIn 0.3s ease',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
    });
    
    // Set background color based on type
    const colors = {
        success: '#4caf50',
        info: '#2196f3',
        warning: '#ff9800',
        error: '#f44336'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Status update
function updateStatus(message) {
    const statusElement = document.getElementById('status');
    statusElement.textContent = message;
    setTimeout(() => {
        statusElement.textContent = 'Ready';
    }, 3000);
}

// Settings management
function loadSettings() {
    const settings = localStorage.getItem('adminPanelSettings');
    if (settings) {
        const parsed = JSON.parse(settings);
        
        // Apply saved settings
        if (parsed.gameSpeed) {
            document.getElementById('game-speed').value = parsed.gameSpeed;
            updateGameSpeed(parsed.gameSpeed);
        }
        
        logToConsole('Settings loaded from local storage');
    }
}

function saveSettings() {
    const settings = {
        gameSpeed: document.getElementById('game-speed').value,
        timestamp: Date.now()
    };
    
    localStorage.setItem('adminPanelSettings', JSON.stringify(settings));
    logToConsole('Settings saved to local storage');
}

// Auto-save settings periodically
setInterval(saveSettings, 60000); // Save every minute

// Command shortcuts mapping
const commandShortcuts = {
    // Resources
    'add_coins': 'Game.AddCoins(10000)',
    'max_resources': 'Game.MaxAllResources()',
    
    // Buildings
    'instant_build': 'Game.InstantBuild(true)',
    'free_build': 'Game.FreeBuild(true)',
    'unlock_all_buildings': 'Game.UnlockAllBuildings()',
    'remove_build_limits': 'Game.RemoveBuildLimits()',
    'no_maintenance': 'Game.NoMaintenance(true)',
    'no_costs': 'Game.NoBuildCosts(true)',
    
    // Game control
    'reveal_map': 'Game.RevealMap()',
    'fog_of_war_off': 'Game.FogOfWar(false)',
    'god_mode': 'Game.GodMode(true)',
    'invincibility': 'Game.Invincibility(true)',
    
    // Players
    'disable_ai': 'Game.DisableAI(true)',
    'enable_ai': 'Game.DisableAI(false)',
    'peaceful_ai': 'Game.SetAIBehavior("peaceful")',
    'aggressive_ai': 'Game.SetAIBehavior("aggressive")',
    'reset_diplomacy': 'Game.ResetDiplomacy()',
    'max_reputation': 'Game.SetReputation(100)',
    'alliance_all': 'Game.AllianceWithAll()',
    'war_all': 'Game.WarWithAll()',
    
    // Victory
    'instant_win': 'Game.Victory()',
    'instant_lose': 'Game.Defeat()',
    
    // Debug
    'show_fps': 'Debug.ShowFPS(true)',
    'show_grid': 'Debug.ShowGrid(true)',
    'show_collision': 'Debug.ShowCollision(true)',
    'show_paths': 'Debug.ShowPaths(true)',
    'optimize_performance': 'Game.OptimizePerformance()',
    'clear_cache': 'Game.ClearCache()'
};

// Helper function to get command from shortcut
function getCommand(shortcut) {
    return commandShortcuts[shortcut] || shortcut;
}

// Enhanced execute command with shortcut support
const originalExecuteCommand = executeCommand;
executeCommand = function(commandOrShortcut) {
    const actualCommand = getCommand(commandOrShortcut);
    originalExecuteCommand(actualCommand);
};

// Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Ctrl/Cmd + R to refresh (default behavior)
    // F1 to show help
    if (event.key === 'F1') {
        event.preventDefault();
        document.querySelector('[data-tab="help"]').click();
    }
});

// Add CSS for notifications animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .console-line {
        margin-bottom: 5px;
    }
    
    .console-input {
        color: #ffff00;
    }
    
    .console-error {
        color: #ff0000;
    }
    
    .timestamp {
        color: #888;
        margin-right: 10px;
    }
`;
document.head.appendChild(style);

// Log startup message
console.log('Anno 117 Admin Panel loaded successfully');
console.log('Commands will be copied to clipboard for easy execution in game console');
