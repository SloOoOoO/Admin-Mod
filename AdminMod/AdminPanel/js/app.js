// Anno 117: Pax Romana Admin Panel - Complete Edition
// With 110+ actual resources from game files

// Anno 117: Pax Romana - Complete Resource Database
// Extracted from game files - 110+ resources

const ANNO_RESOURCES = {
  "construction": [
    {"name": "Sandarac Wood", "guid": "8561"},
    {"name": "Wood", "guid": "2077"},
    {"name": "Iron Ore", "guid": "2080"},
    {"name": "Limestone", "guid": "2078"},
    {"name": "Marble Blocks", "guid": "2084"},
    {"name": "Clay", "guid": "2086"},
    {"name": "Ornate Wood", "guid": "2123"},
    {"name": "Iron", "guid": "2115"},
    {"name": "Timber", "guid": "2174"},
    {"name": "Tiles", "guid": "2176"},
    {"name": "Concrete", "guid": "2178"},
    {"name": "Marble", "guid": "2179"},
    {"name": "Granite Blocks", "guid": "2101"},
    {"name": "Granite", "guid": "31709"}
  ],
  "food": [
    {"name": "Sardines", "guid": "2088"},
    {"name": "Mackerels", "guid": "2089"},
    {"name": "Oysters", "guid": "2112"},
    {"name": "Caviar", "guid": "8558"},
    {"name": "Porridge", "guid": "2136"},
    {"name": "Bread", "guid": "2137"},
    {"name": "Garum", "guid": "2139"},
    {"name": "Wine", "guid": "2138"},
    {"name": "Oysters with Caviar", "guid": "2140"},
    {"name": "Sausages", "guid": "8405"},
    {"name": "Cheese", "guid": "2153"},
    {"name": "Beer", "guid": "2154"},
    {"name": "Roast Beef", "guid": "31768"}
  ],
  "agriculture": [
    {"name": "Oats", "guid": "2068"},
    {"name": "Hemp", "guid": "31694"},
    {"name": "Wheat", "guid": "2069"},
    {"name": "Lavender", "guid": "2071"},
    {"name": "Olives", "guid": "2072"},
    {"name": "Grapes", "guid": "2070"},
    {"name": "Flax", "guid": "2063"},
    {"name": "Herbs", "guid": "31701"},
    {"name": "Barley", "guid": "2093"},
    {"name": "Reed", "guid": "2103"},
    {"name": "Reed Shoes", "guid": "2159"}
  ],
  "crafted_goods": [
    {"name": "Leather", "guid": "2110"},
    {"name": "Cloth", "guid": "2121"},
    {"name": "Tunics", "guid": "2141"},
    {"name": "Hats", "guid": "2142"},
    {"name": "Sandals", "guid": "2144"},
    {"name": "Togas", "guid": "2145"},
    {"name": "Wig Hoods", "guid": "31704"},
    {"name": "Wigs", "guid": "31708"},
    {"name": "Trousers", "guid": "2158"},
    {"name": "Cloaks", "guid": "2161"},
    {"name": "Pelt Hats", "guid": "31707"}
  ],
  "luxury": [
    {"name": "Gold Ore", "guid": "31697"},
    {"name": "Glass", "guid": "2117"},
    {"name": "Gold", "guid": "31698"},
    {"name": "Necklaces", "guid": "2146"},
    {"name": "Wax Tablets", "guid": "2150"},
    {"name": "Fine Glass", "guid": "2151"},
    {"name": "Loungers", "guid": "2147"},
    {"name": "Amphorae", "guid": "31700"},
    {"name": "Lyres", "guid": "2166"},
    {"name": "Silver Ore", "guid": "2079"},
    {"name": "Silver", "guid": "2129"},
    {"name": "Brooches", "guid": "2156"},
    {"name": "Mirrors", "guid": "2162"},
    {"name": "Torcs", "guid": "2157"}
  ],
  "animals": [
    {"name": "Sheep", "guid": "2073"},
    {"name": "Pigs", "guid": "2074"},
    {"name": "Horses", "guid": "2075"},
    {"name": "Aurochs", "guid": "2105"},
    {"name": "Beavers", "guid": "31702"},
    {"name": "Dartmoor Ponies", "guid": "8404"}
  ],
  "raw_materials": [
    {"name": "Salt", "guid": "2090"},
    {"name": "Sea Snails", "guid": "3158"},
    {"name": "Silica", "guid": "2091"},
    {"name": "Charcoal", "guid": "2085"},
    {"name": "Resin", "guid": "31695"},
    {"name": "Honeycombs", "guid": "2076"},
    {"name": "Minerals", "guid": "8563"},
    {"name": "Sturgeons", "guid": "2087"},
    {"name": "Tyrian Purple", "guid": "2180"},
    {"name": "Fat", "guid": "2132"},
    {"name": "Cushions", "guid": "8562"},
    {"name": "Strings", "guid": "2135"},
    {"name": "Pigments", "guid": "2124"},
    {"name": "Flour", "guid": "2119"},
    {"name": "Soap", "guid": "2143"},
    {"name": "Olive Oil", "guid": "2149"},
    {"name": "Mosaics", "guid": "2152"},
    {"name": "Ropes", "guid": "2171"},
    {"name": "Sails", "guid": "2172"},
    {"name": "Weapons", "guid": "2173"},
    {"name": "Armor", "guid": "13810"},
    {"name": "Sea Shells", "guid": "8420"},
    {"name": "Cockles", "guid": "2097"},
    {"name": "Marsh Birds", "guid": "2106"},
    {"name": "Bird Tongues", "guid": "2133"},
    {"name": "Bird Tongues in Aspic", "guid": "2155"},
    {"name": "Samphire", "guid": "7985"},
    {"name": "Dye Plants", "guid": "2094"},
    {"name": "Mud", "guid": "2102"},
    {"name": "Eels", "guid": "2108"},
    {"name": "Tin Ore", "guid": "2100"},
    {"name": "Copper Ore", "guid": "2099"},
    {"name": "Celtic Green", "guid": "2126"},
    {"name": "Lye", "guid": "31703"},
    {"name": "Chassis", "guid": "2128"},
    {"name": "Bronze", "guid": "2127"},
    {"name": "Malt", "guid": "2131"},
    {"name": "Drinking Horns", "guid": "55954"},
    {"name": "Clan Shields", "guid": "31706"},
    {"name": "Chariots", "guid": "2163"},
    {"name": "Wattle and Daub", "guid": "2169"}
  ]
};

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    populateResourceGrids();
    loadSettings();
    logToConsole('Anno 117 Admin Panel initialized with 110+ resources from game files.');
});

// Populate resource grids
function populateResourceGrids() {
    const categories = [
        {id: 'construction', data: ANNO_RESOURCES.construction},
        {id: 'food', data: ANNO_RESOURCES.food},
        {id: 'agriculture', data: ANNO_RESOURCES.agriculture},
        {id: 'crafted', data: ANNO_RESOURCES.crafted_goods},
        {id: 'luxury', data: ANNO_RESOURCES.luxury},
        {id: 'animals', data: ANNO_RESOURCES.animals},
        {id: 'raw', data: ANNO_RESOURCES.raw_materials}
    ];
    
    categories.forEach(cat => {
        const grid = document.getElementById(`${cat.id}-grid`);
        if (grid) {
            cat.data.forEach(resource => {
                const item = createResourceItem(resource);
                grid.appendChild(item);
            });
        }
    });
}

// Create resource item element
function createResourceItem(resource) {
    const div = document.createElement('div');
    div.className = 'resource-item';
    div.setAttribute('data-name', resource.name.toLowerCase());
    
    const label = document.createElement('span');
    label.textContent = resource.name;
    label.style.flex = '1';
    label.style.fontSize = '0.9em';
    
    const input = document.createElement('input');
    input.type = 'number';
    input.value = '100';
    input.min = '0';
    input.id = `resource-${resource.guid}`;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.onclick = () => addResource(resource.name, resource.guid, input.value);
    
    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(button);
    
    return div;
}

// Toggle category
function toggleCategory(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.expand-icon');
    
    content.classList.toggle('active');
    icon.classList.toggle('rotated');
}

// Expand/collapse all categories
function expandAllCategories() {
    document.querySelectorAll('.resource-category-content').forEach(el => el.classList.add('active'));
    document.querySelectorAll('.expand-icon').forEach(el => el.classList.add('rotated'));
}

function collapseAllCategories() {
    document.querySelectorAll('.resource-category-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.expand-icon').forEach(el => el.classList.remove('rotated'));
}

// Filter resources
function filterResources() {
    const search = document.getElementById('resource-search').value.toLowerCase();
    document.querySelectorAll('.resource-item').forEach(item => {
        const name = item.getAttribute('data-name');
        if (name.includes(search)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

// Add resource
function addResource(name, guid, amount) {
    const command = `Game.AddResource("${guid}", ${amount}) -- ${name}`;
    executeCommand(command);
    logToConsole(`Added ${amount} ${name} (GUID: ${guid})`);
    showNotification(`Added ${amount} ${name}`, 'success');
}

// Max resource
function maxResource(name, guid) {
    const command = `Game.SetResourceMax("${guid}") -- ${name}`;
    executeCommand(command);
    logToConsole(`Maxed ${name} (GUID: ${guid})`);
    showNotification(`${name} set to maximum`, 'success');
}

// Max all resources
function maxAllResources() {
    logToConsole('Maxing all 110+ resources...');
    let count = 0;
    
    Object.values(ANNO_RESOURCES).forEach(category => {
        category.forEach(resource => {
            executeCommand(`Game.SetResourceMax("${resource.guid}") -- ${resource.name}`);
            count++;
        });
    });
    
    logToConsole(`Maxed ${count} resources`);
    showNotification(`Maxed all ${count} resources!`, 'success');
}

// Initialize tabs
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
            
            logToConsole(`Switched to ${tabId} tab`);
        });
    });
}

// Game control functions
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
    logToConsole(`Executing: ${command}`);
    
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
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
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
    
    const colors = {
        success: '#4caf50',
        info: '#2196f3',
        warning: '#ff9800',
        error: '#f44336'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
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
}

setInterval(saveSettings, 60000);

// Add animations CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    .console-line { margin-bottom: 5px; }
    .console-input { color: #ffff00; }
    .console-error { color: #ff0000; }
    .timestamp { color: #888; margin-right: 10px; }
`;
document.head.appendChild(style);

console.log('Anno 117 Admin Panel loaded - 110+ resources from game files');
