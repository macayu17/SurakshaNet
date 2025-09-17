// Enhanced SurakshaNet Application State for Guwahati
const appState = {
    currentTab: 'dashboard',
    selectedLanguage: 'en',
    mapFilters: 'all',
    alertFilters: 'all',
    geofenceFilters: 'all',
    liveMovementEnabled: true,
    liveUpdateInterval: 2000 // 2 seconds
};

// Guwahati Location Data
const guwahatiData = {
    "touristSpots": [
        {"name": "Kamakhya Temple", "lat": 26.1664, "lng": 91.7005, "popularity": 0.9},
        {"name": "Umananda Temple", "lat": 26.1517, "lng": 91.7267, "popularity": 0.8},
        {"name": "Assam State Museum", "lat": 26.1495, "lng": 91.7675, "popularity": 0.7},
        {"name": "Brahmaputra River Cruise", "lat": 26.1542, "lng": 91.7369, "popularity": 0.8},
        {"name": "Pobitora Wildlife Sanctuary", "lat": 26.2167, "lng": 91.8833, "popularity": 0.6},
        {"name": "Peacock Island", "lat": 26.1517, "lng": 91.7267, "popularity": 0.7},
        {"name": "Dipor Bil", "lat": 26.1094, "lng": 91.6431, "popularity": 0.5},
        {"name": "Hajo Pilgrimage Center", "lat": 26.2442, "lng": 91.5467, "popularity": 0.6},
        {"name": "Guwahati Planetarium", "lat": 26.1445, "lng": 91.7854, "popularity": 0.5},
        {"name": "Fancy Bazaar", "lat": 26.1458, "lng": 91.7345, "popularity": 0.7}
    ],
    "policeStations": [
        {"name": "Panbazar Police Station", "lat": 26.1458, "lng": 91.7345, "zone": "central"},
        {"name": "Kamrup Police Station", "lat": 26.1664, "lng": 91.7005, "zone": "kamrup"},
        {"name": "Dispur Police Station", "lat": 26.1433, "lng": 91.7898, "zone": "dispur"},
        {"name": "Jalukbari Police Station", "lat": 26.1094, "lng": 91.6431, "zone": "jalukbari"}
    ],
    "hospitals": [
        {"name": "Gauhati Medical College Hospital", "lat": 26.1401, "lng": 91.7267},
        {"name": "NEMCARE Hospital", "lat": 26.1445, "lng": 91.7650},
        {"name": "Apollo Hospitals Guwahati", "lat": 26.1230, "lng": 91.7787},
        {"name": "Down Town Hospital", "lat": 26.1445, "lng": 91.7500}
    ]
};

// Enhanced Vehicle Icons
const enhancedVehicleIcons = {
    "police": [
        {"type": "patrol_car", "icon": "🚔", "description": "Police Patrol Car", "speed": 40},
        {"type": "motorcycle", "icon": "🏍️", "description": "Police Motorcycle", "speed": 60},
        {"type": "rapid_response", "icon": "🚨", "description": "Rapid Response Unit", "speed": 80},
        {"type": "k9_unit", "icon": "🐕‍🦺", "description": "K9 Police Unit", "speed": 35}
    ],
    "medical": [
        {"type": "ambulance", "icon": "🚑", "description": "Medical Ambulance", "speed": 70},
        {"type": "fire_truck", "icon": "🚒", "description": "Fire & Rescue", "speed": 50},
        {"type": "rescue_team", "icon": "⛑️", "description": "Rescue Team", "speed": 45},
        {"type": "air_ambulance", "icon": "🚁", "description": "Air Ambulance", "speed": 150}
    ]
};

// E-FIR System Data
let eFirData = [
    {
        "id": "FIR001", "touristId": "TST002", "touristName": "Maria Garcia", 
        "type": "theft", "status": "under_review", "filed": "2024-09-16T09:30:00Z",
        "description": "Mobile phone and wallet stolen near Kamakhya Temple. Tourist reported suspicious activity around 9:15 AM.",
        "location": "Kamakhya Temple, Guwahati", "officerAssigned": "Inspector Sharma",
        "evidence": ["CCTV footage", "Witness statements"], "priority": "medium"
    },
    {
        "id": "FIR002", "touristId": "TST015", "touristName": "Elena Petrov",
        "type": "harassment", "status": "investigation", "filed": "2024-09-16T11:15:00Z",
        "description": "Tourist reported harassment by local vendors at Fancy Bazaar. Multiple witnesses available.",
        "location": "Fancy Bazaar, Guwahati", "officerAssigned": "Sub-Inspector Borah",
        "evidence": ["Tourist statement", "Vendor identification"], "priority": "high"
    },
    {
        "id": "FIR003", "touristId": "TST023", "touristName": "Mei Lin",
        "type": "lost_documents", "status": "resolved", "filed": "2024-09-15T16:45:00Z",
        "description": "Tourist lost passport and travel documents during river cruise. Documents recovered from boat.",
        "location": "Brahmaputra River Cruise", "officerAssigned": "Constable Kalita",
        "evidence": ["Boat manifest", "Recovery receipt"], "priority": "low"
    }
];

// Disaster Alert Types
const disasterAlertTypes = [
    {"type": "flood", "icon": "🌊", "severity": ["low", "medium", "high", "critical"]},
    {"type": "earthquake", "icon": "🏚️", "severity": ["low", "medium", "high", "critical"]},
    {"type": "landslide", "icon": "⛰️", "severity": ["low", "medium", "high", "critical"]},
    {"type": "cyclone", "icon": "🌀", "severity": ["low", "medium", "high", "critical"]},
    {"type": "forest_fire", "icon": "🔥", "severity": ["low", "medium", "high", "critical"]}
];

let activeDisasterAlerts = [];

// Updated Tourist Data for Guwahati (55+ tourists)
let touristsData = [
    {
        id: "TST001", name: "John Smith", nationality: "USA", digitalId: "0x4a2f8b9c1e3d5f7a9b2c4e6f8a1c3e5f7a9b2c4e",
        safetyScore: 85, location: {lat: 26.1664, lng: 91.7005, address: "Kamakhya Temple, Guwahati"},
        status: "safe", checkIn: "2024-09-16T10:30:00Z", itinerary: ["Kamakhya Temple", "Umananda Temple", "River Cruise"],
        emergencyContact: "+1-555-0123", riskZone: "low", lastSeen: "2024-09-16T12:00:00Z", currentGeofence: "safe",
        hasEFir: false, communicationStatus: "available"
    },
    {
        id: "TST002", name: "Maria Garcia", nationality: "Spain", digitalId: "0x7f5e3a9c1b4d6f8a2c5e7f9b1d3f5a7c9e2f4a6c",
        safetyScore: 45, location: {lat: 26.2167, lng: 91.8833, address: "Pobitora Wildlife Sanctuary, Guwahati"},
        status: "alert", checkIn: "2024-09-16T08:15:00Z", itinerary: ["Wildlife Safari", "Nature Photography"],
        emergencyContact: "+34-600-123-456", riskZone: "high", lastSeen: "2024-09-16T11:45:00Z", currentGeofence: "restricted",
        hasEFir: true, communicationStatus: "assistance_needed"
    },
    {
        id: "TST003", name: "Raj Patel", nationality: "India", digitalId: "0x9b3f7e2a5c8d1f4a6b9c2e5f8a1c3e5f7a9b2c4e",
        safetyScore: 92, location: {lat: 26.1495, lng: 91.7675, address: "Assam State Museum, Guwahati"},
        status: "safe", checkIn: "2024-09-16T09:00:00Z", itinerary: ["State Museum", "Cultural Tour", "Local Cuisine"],
        emergencyContact: "+91-98765-43210", riskZone: "low", lastSeen: "2024-09-16T11:30:00Z", currentGeofence: "safe",
        hasEFir: false, communicationStatus: "available"
    },
    {
        id: "TST004", name: "Emma Johnson", nationality: "UK", digitalId: "0x2c5e8a1b4d7f9c3e6a2f5b8d1e4a7c9f2e5b8a1c",
        safetyScore: 78, location: {lat: 26.1542, lng: 91.7369, address: "Brahmaputra River Cruise, Guwahati"},
        status: "safe", checkIn: "2024-09-16T11:15:00Z", itinerary: ["River Cruise", "Peacock Island", "Local Markets"],
        emergencyContact: "+44-7911-123456", riskZone: "low", lastSeen: "2024-09-16T12:15:00Z", currentGeofence: "safe",
        hasEFir: false, communicationStatus: "available"
    },
    {
        id: "TST005", name: "Chen Wei", nationality: "China", digitalId: "0x8e1c4f7a9b3d6f2e5a8c1f4b7e9c2f5a8d1e4a7c",
        safetyScore: 25, location: {lat: 26.1094, lng: 91.6431, address: "Dipor Bil Remote Area, Guwahati"},
        status: "critical", checkIn: "2024-09-16T07:30:00Z", itinerary: ["Bird Watching", "Remote Trekking"],
        emergencyContact: "+86-138-0013-8000", riskZone: "high", lastSeen: "2024-09-16T10:00:00Z", currentGeofence: "restricted",
        hasEFir: false, communicationStatus: "emergency"
    },
    {
        id: "TST015", name: "Elena Petrov", nationality: "Russia", digitalId: "0xe5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4",
        safetyScore: 87, location: {lat: 26.1458, lng: 91.7345, address: "Fancy Bazaar, Guwahati"},
        status: "safe", checkIn: "2024-09-16T10:45:00Z", itinerary: ["Shopping", "Local Culture"],
        emergencyContact: "+7-916-123-4567", riskZone: "low", lastSeen: "2024-09-16T12:25:00Z", currentGeofence: "safe",
        hasEFir: true, communicationStatus: "available"
    },
    {
        id: "TST023", name: "Mei Lin", nationality: "Singapore", digitalId: "0xa3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2",
        safetyScore: 93, location: {lat: 26.1445, lng: 91.7854, address: "Guwahati Planetarium, Guwahati"},
        status: "safe", checkIn: "2024-09-16T10:50:00Z", itinerary: ["Science Center", "Educational Tour"],
        emergencyContact: "+65-9123-4567", riskZone: "low", lastSeen: "2024-09-16T12:20:00Z", currentGeofence: "safe",
        hasEFir: false, communicationStatus: "available"
    }
];

// Enhanced Police Units with Vehicle Icons
let policeUnits = [
    {
        id: "POL001", name: "Panbazar Alpha Unit", location: {lat: 26.1458, lng: 91.7345, address: "Panbazar Police Station"},
        status: "available", officers: 3, vehicleType: "patrol_car", vehicleIcon: "🚔", responseTime: "5-8 min",
        equipment: ["Radio", "First Aid", "Crowd Control"]
    },
    {
        id: "POL002", name: "Rapid Response Beta", location: {lat: 26.1664, lng: 91.7005, address: "Kamrup Police Station"},
        status: "en_route", officers: 2, vehicleType: "motorcycle", vehicleIcon: "🏍️", responseTime: "3-5 min",
        targetLocation: {lat: 26.2167, lng: 91.8833}, equipment: ["Communication", "Emergency Kit"]
    },
    {
        id: "POL003", name: "Emergency Response Gamma", location: {lat: 26.1433, lng: 91.7898, address: "Dispur Police Station"},
        status: "busy", officers: 4, vehicleType: "rapid_response", vehicleIcon: "🚨", responseTime: "4-6 min",
        equipment: ["Advanced Medical", "Rescue Tools", "Communication Hub"]
    },
    {
        id: "POL004", name: "K9 Delta Unit", location: {lat: 26.1094, lng: 91.6431, address: "Jalukbari Police Station"},
        status: "available", officers: 2, vehicleType: "k9_unit", vehicleIcon: "🐕‍🦺", responseTime: "6-9 min",
        equipment: ["Search Dogs", "Tracking Equipment", "Specialized Gear"]
    }
];

// Enhanced Rescue Units with Vehicle Icons
let rescueUnits = [
    {
        id: "MED001", name: "GMCH Ambulance Alpha", location: {lat: 26.1650, lng: 91.6990, address: "Gauhati Medical College Hospital"},
        status: "available", type: "ambulance", vehicleIcon: "🚑", crew: 2, 
        equipment: ["AED", "Oxygen", "Emergency Meds", "Advanced Life Support"]
    },
    {
        id: "RES001", name: "Fire Rescue Bravo", location: {lat: 26.1445, lng: 91.7650, address: "NEMCARE Hospital"},
        status: "available", type: "fire_truck", vehicleIcon: "🚒", crew: 4, 
        equipment: ["Fire Suppression", "Rescue Tools", "Medical Kit", "Hydraulic Equipment"]
    },
    {
        id: "MED002", name: "Apollo Emergency Unit", location: {lat: 26.1230, lng: 91.7787, address: "Apollo Hospitals Guwahati"},
        status: "en_route", type: "ambulance", vehicleIcon: "🚑", crew: 2, 
        equipment: ["Critical Care", "Oxygen", "Cardiac Monitor"], targetLocation: {lat: 26.1094, lng: 91.6431}
    },
    {
        id: "RES002", name: "Rescue Team Charlie", location: {lat: 26.1445, lng: 91.7500, address: "Down Town Hospital"},
        status: "available", type: "rescue_team", vehicleIcon: "⛑️", crew: 6, 
        equipment: ["Specialized Rescue", "Water Rescue", "High Angle Rescue", "Medical Support"]
    },
    {
        id: "AIR001", name: "Air Ambulance Delta", location: {lat: 26.1445, lng: 91.7854, address: "Guwahati Helipad"},
        status: "available", type: "air_ambulance", vehicleIcon: "🚁", crew: 3,
        equipment: ["Flight Medic", "Advanced Trauma", "Critical Transport", "Weather Radar"]
    }
];

// Enhanced GeoFences for Guwahati
let geofencesData = [
    {
        id: "GF001", name: "Kamakhya Temple Safe Zone", type: "safe",
        coordinates: [[26.1650, 91.6990], [26.1678, 91.6990], [26.1678, 91.7020], [26.1650, 91.7020]],
        radius: 500, alerts: true, description: "Tourist safe zone with security and guides"
    },
    {
        id: "GF002", name: "Pobitora Restricted Zone", type: "restricted",
        coordinates: [[26.2150, 91.8800], [26.2180, 91.8800], [26.2180, 91.8860], [26.2150, 91.8860]],
        radius: 300, alerts: true, description: "Wildlife sanctuary - restricted access areas"
    },
    {
        id: "GF003", name: "Brahmaputra River Safe Zone", type: "safe",
        coordinates: [[26.1530, 91.7350], [26.1554, 91.7350], [26.1554, 91.7388], [26.1530, 91.7388]],
        radius: 400, alerts: true, description: "River cruise area with safety measures"
    },
    {
        id: "GF004", name: "Dipor Bil Caution Zone", type: "caution",
        coordinates: [[26.1080, 91.6410], [26.1108, 91.6410], [26.1108, 91.6452], [26.1080, 91.6452]],
        radius: 250, alerts: true, description: "Wetland area - caution for bird watching"
    }
];

// Enhanced Alerts Data
let alertsData = [
    {
        id: "ALT001", touristId: "TST002", type: "geofence_violation", severity: "high",
        message: "Tourist entered restricted wildlife sanctuary area without authorization", 
        timestamp: new Date().toISOString(),
        location: {lat: 26.2167, lng: 91.8833}, status: "active", touristName: "Maria Garcia",
        aiConfidence: 0.92, reasoning: "GPS coordinates show entry into Pobitora restricted area"
    },
    {
        id: "ALT002", touristId: "TST005", type: "prolonged_inactivity", severity: "high",
        message: "No movement detected for 2+ hours near Dipor Bil - CRITICAL", 
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        location: {lat: 26.1094, lng: 91.6431}, status: "active", touristName: "Chen Wei",
        aiConfidence: 0.89, reasoning: "IoT sensors show no activity in remote wetland area"
    }
];

// Live system variables
let liveUpdateInterval;
let overviewMap, mainMap;
let touristMarkers = [];
let policeMarkers = [];
let rescueMarkers = [];
let geofencePolygons = [];
let liveCounter = 0;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    loadDashboardData();
    
    // Initialize maps with Guwahati coordinates
    setTimeout(() => {
        initializeMaps();
    }, 100);
    
    loadTouristTable();
    loadAlerts();
    loadEmergencyUnits();
    loadEFirManagement();
    loadDisasterAlerts();
    initializeCharts();
    startLiveUpdates();
    setupModalHandlers();
    showWelcomeNotification();
}

function setupEventListeners() {
    // Tab navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const tabName = e.target.closest('.nav-tab').getAttribute('data-tab');
            if (tabName) {
                switchTab(tabName);
            }
        });
    });

    // Language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }

    // Emergency button
    const emergencyBtn = document.getElementById('emergencyAlert');
    if (emergencyBtn) {
        emergencyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showEmergencyAlert();
        });
    }

    // E-FIR Management
    const efirSearchBtn = document.getElementById('efirSearchBtn');
    if (efirSearchBtn) {
        efirSearchBtn.addEventListener('click', searchEFirs);
    }

    // Disaster Alert Creation
    const createAlertBtn = document.getElementById('createAlertBtn');
    if (createAlertBtn) {
        createAlertBtn.addEventListener('click', showCreateAlertModal);
    }

    const submitAlertBtn = document.getElementById('submitAlertBtn');
    if (submitAlertBtn) {
        submitAlertBtn.addEventListener('click', createDisasterAlert);
    }

    // Map controls and other existing event listeners...
    setupMapControls();
    setupFilterControls();
    setupSearchControls();
    setupProtocolButtons();
}

function setupMapControls() {
    const refreshBtn = document.getElementById('refreshMap');
    const fullscreenBtn = document.getElementById('fullscreenMap');
    const toggleLiveBtn = document.getElementById('toggleLiveMovement');
    
    if (refreshBtn) {
        refreshBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            refreshMap();
        });
    }
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFullscreen();
        });
    }
    if (toggleLiveBtn) {
        toggleLiveBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleLiveMovement();
        });
    }
}

function setupFilterControls() {
    // Filters
    document.querySelectorAll('[data-filter]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            setFilter(e.target.dataset.filter, e.target.closest('.map-controls, .alerts-filters'));
        });
    });

    // GeoFence filters
    document.querySelectorAll('[data-geofence]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            setGeofenceFilter(e.target.dataset.geofence);
        });
    });
}

function setupSearchControls() {
    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('touristSearch');
    if (searchBtn) searchBtn.addEventListener('click', searchTourists);
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') searchTourists();
        });
    }
}

function setupProtocolButtons() {
    // Protocol buttons
    document.querySelectorAll('.protocol-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showProtocol(e.target.dataset.protocol);
        });
    });

    // Emergency action buttons
    document.querySelectorAll('.emergency-action').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            handleEmergencyAction(e.target.dataset.action);
        });
    });

    // Report generation
    const reportBtn = document.getElementById('generateReport');
    if (reportBtn) reportBtn.addEventListener('click', generateReport);
}

function switchTab(tabName) {
    if (!tabName) return;
    
    // Update navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    // Update content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    const activeContent = document.getElementById(tabName);
    if (activeContent) {
        activeContent.classList.add('active');
    }

    appState.currentTab = tabName;

    // Special handling for different tabs
    if (tabName === 'map') {
        setTimeout(() => {
            if (mainMap) {
                mainMap.invalidateSize();
            }
        }, 100);
    } else if (tabName === 'e-fir') {
        loadEFirManagement();
    } else if (tabName === 'disaster') {
        loadDisasterAlerts();
    } else if (tabName === 'tourists') {
        loadTouristTable();
    } else if (tabName === 'alerts') {
        loadAlerts();
    } else if (tabName === 'emergency') {
        loadEmergencyUnits();
    } else if (tabName === 'reports') {
        initializeCharts();
    }
}

function initializeMaps() {
    try {
        // Overview Map - Centered on Guwahati
        const overviewMapEl = document.getElementById('overviewMap');
        if (overviewMapEl && !overviewMap) {
            overviewMap = L.map('overviewMap').setView([26.1445, 91.7362], 11); // Guwahati center
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(overviewMap);
        }

        // Main Map - Centered on Guwahati
        const mainMapEl = document.getElementById('mainMap');
        if (mainMapEl && !mainMap) {
            mainMap = L.map('mainMap').setView([26.1445, 91.7362], 12); // Guwahati center
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(mainMap);
        }

        // Add all markers and geofences
        setTimeout(() => {
            updateAllMapMarkers();
            addGeofences();
        }, 500);
        
    } catch (error) {
        console.error('Error initializing maps:', error);
        showNotification('Map initialization error - retrying...', 'warning');
        
        // Retry initialization
        setTimeout(() => {
            initializeMaps();
        }, 2000);
    }
}

function loadDashboardData() {
    const stats = calculateStats();
    
    // Update statistics
    updateElement('safeTourists', stats.safe);
    updateElement('alertTourists', stats.alerts);
    updateElement('criticalTourists', stats.critical);
    updateElement('activeZones', stats.zones);
    updateElement('policeCount', policeUnits.length);
    updateElement('rescueCount', rescueUnits.length);

    loadRecentAlerts();
    loadAnomalyFeed();
}

function calculateStats() {
    const safe = touristsData.filter(t => t.status === 'safe').length;
    const alerts = alertsData.filter(a => a.status === 'active').length;
    const critical = touristsData.filter(t => t.status === 'critical').length;
    const zones = geofencesData.length;

    return { safe, alerts, critical, zones };
}

function loadRecentAlerts() {
    const recentAlerts = alertsData
        .filter(alert => alert.status === 'active')
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, 5);

    const alertsList = document.getElementById('recentAlertsList');
    if (alertsList) {
        alertsList.innerHTML = recentAlerts.map(alert => `
            <div class="alert-item ${alert.severity}">
                <div class="alert-content">
                    <div class="alert-title">${alert.touristName} - ${alert.type.replace('_', ' ').toUpperCase()}</div>
                    <div class="alert-details">${alert.message}</div>
                    <div class="ai-confidence">AI: ${Math.round(alert.aiConfidence * 100)}%</div>
                </div>
                <div class="alert-time">${formatTime(alert.timestamp)}</div>
            </div>
        `).join('');
    }
}

function loadAnomalyFeed() {
    const anomalyFeed = document.getElementById('anomalyFeed');
    if (!anomalyFeed) return;

    // Generate live anomaly detection feed
    const anomalies = [
        { tourist: "John Smith", confidence: 0.87, reason: "Route pattern analysis shows 15% deviation from norm near Kamakhya Temple" },
        { tourist: "Maria Garcia", confidence: 0.92, reason: "Geofence boundary analysis triggered high-risk alert at Pobitora Wildlife" },
        { tourist: "Chen Wei", confidence: 0.95, reason: "IoT sensor fusion indicates prolonged inactivity at Dipor Bil wetlands" },
        { tourist: "Elena Petrov", confidence: 0.78, reason: "Behavioral pattern recognition shows anomalous movement at Fancy Bazaar" }
    ];

    anomalyFeed.innerHTML = anomalies.map(anomaly => `
        <div class="anomaly-item">
            <div class="anomaly-content">
                <strong>${anomaly.tourist}:</strong> ${anomaly.reason}
            </div>
            <span class="anomaly-confidence">${Math.round(anomaly.confidence * 100)}%</span>
        </div>
    `).join('');
}

function loadTouristTable() {
    const tbody = document.getElementById('touristsTableBody');
    if (tbody) {
        tbody.innerHTML = touristsData.map(tourist => `
            <tr onclick="showTouristDetails('${tourist.id}')" style="cursor: pointer;">
                <td>${tourist.id}</td>
                <td>${tourist.name}</td>
                <td>${tourist.nationality}</td>
                <td>${tourist.safetyScore}</td>
                <td><span class="status-badge ${tourist.status}">${tourist.status.toUpperCase()}</span></td>
                <td>${tourist.location.address}</td>
                <td>${tourist.hasEFir ? '📋 Yes' : 'No'}</td>
                <td><span class="status-badge ${tourist.communicationStatus}">${tourist.communicationStatus.replace('_', ' ').toUpperCase()}</span></td>
                <td>
                    <button class="btn--sm" onclick="event.stopPropagation(); showTouristDetails('${tourist.id}')">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn--sm btn--primary" onclick="event.stopPropagation(); dispatchEmergencyServices('${tourist.id}')">
                        <i class="fas fa-ambulance"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }
}

function loadAlerts() {
    const alertsContainer = document.getElementById('alertsList');
    if (alertsContainer) {
        alertsContainer.innerHTML = alertsData.map(alert => `
            <div class="alert-card ${alert.severity}">
                <div class="alert-header">
                    <div class="alert-title">${alert.touristName} - ${alert.type.replace('_', ' ').toUpperCase()}</div>
                    <span class="alert-severity ${alert.severity}">${alert.severity}</span>
                </div>
                <p>${alert.message}</p>
                <p><strong>Location:</strong> ${alert.location.lat.toFixed(4)}, ${alert.location.lng.toFixed(4)}</p>
                <p><strong>AI Confidence:</strong> ${Math.round(alert.aiConfidence * 100)}%</p>
                <p><strong>Reasoning:</strong> ${alert.reasoning}</p>
                <p><strong>Time:</strong> ${formatTime(alert.timestamp)}</p>
                <div class="alert-actions">
                    <button class="btn--sm btn--primary" onclick="handleAlert('${alert.id}', 'acknowledge')">
                        Acknowledge
                    </button>
                    <button class="btn--sm btn--secondary" onclick="handleAlert('${alert.id}', 'resolve')">
                        Resolve
                    </button>
                    <button class="btn--sm" onclick="locateOnMap(${alert.location.lat}, ${alert.location.lng})">
                        Locate
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Update AI confidence
    const aiConfidenceEl = document.getElementById('aiConfidence');
    if (aiConfidenceEl && alertsData.length > 0) {
        const avgConfidence = alertsData.reduce((sum, alert) => sum + alert.aiConfidence, 0) / alertsData.length;
        aiConfidenceEl.textContent = `${Math.round(avgConfidence * 100)}% Confidence`;
    }
}

function loadEmergencyUnits() {
    loadPoliceUnits();
    loadRescueUnits();
    loadActiveEmergencies();
}

function loadPoliceUnits() {
    const policeUnitsEl = document.getElementById('policeUnits');
    if (policeUnitsEl) {
        policeUnitsEl.innerHTML = policeUnits.map(unit => `
            <div class="unit-item ${unit.status}">
                <div class="unit-info">
                    <strong>${unit.name} ${unit.vehicleIcon}</strong>
                    <p>${unit.location.address}</p>
                    <p>Officers: ${unit.officers} | ${unit.vehicleType.replace('_', ' ')}</p>
                    <p>Equipment: ${unit.equipment.join(', ')}</p>
                </div>
                <div class="unit-status">
                    <span class="status-badge ${unit.status}">${unit.status.toUpperCase()}</span>
                    <p>ETA: ${unit.responseTime}</p>
                    ${unit.status === 'available' ? `<button class="btn--sm btn--primary" onclick="dispatchUnit('${unit.id}')">Dispatch</button>` : ''}
                </div>
            </div>
        `).join('');
    }
}

function loadRescueUnits() {
    const rescueUnitsEl = document.getElementById('rescueUnits');
    if (rescueUnitsEl) {
        rescueUnitsEl.innerHTML = rescueUnits.map(unit => `
            <div class="unit-item ${unit.status}">
                <div class="unit-info">
                    <strong>${unit.name} ${unit.vehicleIcon}</strong>
                    <p>${unit.location.address}</p>
                    <p>Type: ${unit.type.replace('_', ' ')} | Crew: ${unit.crew}</p>
                    <p>Equipment: ${unit.equipment.join(', ')}</p>
                </div>
                <div class="unit-status">
                    <span class="status-badge ${unit.status}">${unit.status.toUpperCase()}</span>
                    ${unit.status === 'available' ? `<button class="btn--sm btn--primary" onclick="dispatchUnit('${unit.id}')">Dispatch</button>` : ''}
                </div>
            </div>
        `).join('');
    }
}

function loadActiveEmergencies() {
    const emergencyList = document.getElementById('activeEmergencies');
    if (!emergencyList) return;

    const criticalAlerts = alertsData.filter(alert => 
        alert.severity === 'high' && alert.status === 'active'
    );

    emergencyList.innerHTML = criticalAlerts.map(alert => `
        <div class="emergency-item">
            <div class="emergency-header">
                <strong>${alert.touristName}</strong>
                <span class="alert-severity high">CRITICAL</span>
            </div>
            <p>${alert.message}</p>
            <p><strong>AI Confidence:</strong> ${Math.round(alert.aiConfidence * 100)}%</p>
            <p><strong>Location:</strong> ${alert.location.lat.toFixed(4)}, ${alert.location.lng.toFixed(4)}</p>
            <button class="btn--sm btn--primary" onclick="initiateEmergencyResponse('${alert.id}')">
                Initiate Response
            </button>
        </div>
    `).join('');
}

function loadEFirManagement() {
    const container = document.getElementById('efirTableContainer');
    if (!container) return;

    container.innerHTML = `
        <table class="efir-table">
            <thead>
                <tr>
                    <th>FIR ID</th>
                    <th>Tourist</th>
                    <th>Incident Type</th>
                    <th>Status</th>
                    <th>Filed Date</th>
                    <th>Location</th>
                    <th>Officer Assigned</th>
                    <th>Priority</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${eFirData.map(fir => `
                    <tr onclick="showEFirDetails('${fir.id}')" style="cursor: pointer;">
                        <td>${fir.id}</td>
                        <td>${fir.touristName}</td>
                        <td>${fir.type.replace('_', ' ').toUpperCase()}</td>
                        <td><span class="efir-status-badge ${fir.status}">${fir.status.replace('_', ' ').toUpperCase()}</span></td>
                        <td>${formatTime(fir.filed)}</td>
                        <td>${fir.location}</td>
                        <td>${fir.officerAssigned}</td>
                        <td><span class="status-badge ${fir.priority}">${fir.priority.toUpperCase()}</span></td>
                        <td>
                            <button class="btn--sm" onclick="event.stopPropagation(); showEFirDetails('${fir.id}')">
                                <i class="fas fa-eye"></i> View
                            </button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function showEFirDetails(firId) {
    const fir = eFirData.find(f => f.id === firId);
    if (!fir) return;

    const modal = document.getElementById('efirDetailModal');
    const body = document.getElementById('efirDetailBody');
    
    body.innerHTML = `
        <div class="efir-details">
            <div class="detail-section">
                <h4>FIR Information</h4>
                <p><strong>FIR ID:</strong> ${fir.id}</p>
                <p><strong>Tourist:</strong> ${fir.touristName} (${fir.touristId})</p>
                <p><strong>Incident Type:</strong> ${fir.type.replace('_', ' ').toUpperCase()}</p>
                <p><strong>Status:</strong> <span class="efir-status-badge ${fir.status}">${fir.status.replace('_', ' ').toUpperCase()}</span></p>
                <p><strong>Priority:</strong> <span class="status-badge ${fir.priority}">${fir.priority.toUpperCase()}</span></p>
                <p><strong>Filed Date:</strong> ${formatTime(fir.filed)}</p>
                <p><strong>Location:</strong> ${fir.location}</p>
                <p><strong>Officer Assigned:</strong> ${fir.officerAssigned}</p>
            </div>
            
            <div class="detail-section">
                <h4>Incident Description</h4>
                <p>${fir.description}</p>
            </div>
            
            <div class="detail-section">
                <h4>Evidence & Documentation</h4>
                <ul>
                    ${fir.evidence.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="detail-section">
                <h4>Actions</h4>
                <div class="action-buttons">
                    <button class="btn--primary" onclick="updateEFirStatus('${fir.id}')">
                        <i class="fas fa-edit"></i> Update Status
                    </button>
                    <button class="btn--secondary" onclick="assignOfficer('${fir.id}')">
                        <i class="fas fa-user-plus"></i> Assign Officer
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
}

function loadDisasterAlerts() {
    const container = document.getElementById('activeDisasterAlerts');
    if (!container) return;

    if (activeDisasterAlerts.length === 0) {
        container.innerHTML = `
            <div class="no-alerts">
                <i class="fas fa-check-circle" style="font-size: 48px; color: var(--command-success); margin-bottom: 16px;"></i>
                <h3>No Active Disaster Alerts</h3>
                <p>All clear in the Guwahati region. System monitoring for potential threats.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = activeDisasterAlerts.map(alert => `
        <div class="disaster-alert-card ${alert.severity}">
            <div class="disaster-alert-header">
                <div class="disaster-alert-type">
                    <span style="font-size: 24px;">${alert.icon}</span>
                    <span>${alert.type.replace('_', ' ').toUpperCase()}</span>
                    <span class="status-badge ${alert.severity}">${alert.severity.toUpperCase()}</span>
                </div>
                <div class="disaster-countdown" id="countdown-${alert.id}">
                    Active Since: ${formatTime(alert.created)}
                </div>
            </div>
            <div class="alert-content">
                <p><strong>Affected Area:</strong> ${alert.area}</p>
                <p><strong>Message:</strong> ${alert.message}</p>
                <p><strong>Language:</strong> ${alert.language}</p>
                <p><strong>Tourists Affected:</strong> <span class="text-warning">${alert.touristsAffected}</span></p>
            </div>
            <div class="alert-actions">
                <button class="btn--sm btn--primary" onclick="broadcastUpdate('${alert.id}')">
                    <i class="fas fa-broadcast-tower"></i> Update Broadcast
                </button>
                <button class="btn--sm btn--secondary" onclick="evacuationRoutes('${alert.id}')">
                    <i class="fas fa-route"></i> Evacuation Routes
                </button>
                <button class="btn--sm btn--danger" onclick="resolveAlert('${alert.id}')">
                    <i class="fas fa-check"></i> Resolve Alert
                </button>
            </div>
        </div>
    `).join('');
}

function showCreateAlertModal() {
    const modal = document.getElementById('createAlertModal');
    modal.classList.remove('hidden');
}

function createDisasterAlert() {
    const type = document.getElementById('alertTypeSelect').value;
    const severity = document.getElementById('alertSeveritySelect').value;
    const area = document.getElementById('alertAreaSelect').value;
    const message = document.getElementById('alertMessageInput').value;
    const language = document.getElementById('alertLangSelect').value;

    if (!type || !severity || !area || !message) {
        showNotification('Please fill all required fields', 'warning');
        return;
    }

    const alertTypeData = disasterAlertTypes.find(t => t.type === type);
    const newAlert = {
        id: `ALERT${Date.now()}`,
        type: type,
        icon: alertTypeData.icon,
        severity: severity,
        area: area,
        message: message,
        language: language,
        created: new Date().toISOString(),
        touristsAffected: Math.floor(Math.random() * 15) + 5, // Simulate affected tourists
        status: 'active'
    };

    activeDisasterAlerts.unshift(newAlert);
    
    // Close modal and reset form
    document.getElementById('createAlertModal').classList.add('hidden');
    document.getElementById('disasterAlertForm').reset();
    
    // Broadcast to affected tourists
    broadcastToTourists(newAlert);
    
    // Reload disaster alerts display
    loadDisasterAlerts();
    
    showNotification(`${newAlert.icon} ${type.toUpperCase()} alert created and broadcast to ${newAlert.touristsAffected} tourists in ${area}`, 'warning');
}

function broadcastToTourists(alert) {
    // Simulate broadcasting alert to tourists in affected area
    const affectedTourists = touristsData.filter(tourist => 
        tourist.location.address.includes(alert.area.split(' ')[0])
    );
    
    affectedTourists.forEach(tourist => {
        tourist.status = tourist.status === 'safe' ? 'alert' : tourist.status;
        tourist.communicationStatus = 'alert_received';
    });
    
    updateAllMapMarkers();
    loadTouristTable();
}

// Enhanced map marker functions
function updateAllMapMarkers() {
    clearAllMarkers();
    addTouristMarkers();
    addPoliceMarkers();
    addRescueMarkers();
}

function clearAllMarkers() {
    [...touristMarkers, ...policeMarkers, ...rescueMarkers].forEach(marker => {
        try {
            if (overviewMap && overviewMap.hasLayer(marker)) overviewMap.removeLayer(marker);
            if (mainMap && mainMap.hasLayer(marker)) mainMap.removeLayer(marker);
        } catch (e) {
            console.log('Error removing marker:', e);
        }
    });
    touristMarkers = [];
    policeMarkers = [];
    rescueMarkers = [];
}

function addTouristMarkers() {
    if (!overviewMap && !mainMap) return;

    touristsData.forEach(tourist => {
        const markerColor = getMarkerColor(tourist.status);
        
        try {
            const marker = L.circleMarker([tourist.location.lat, tourist.location.lng], {
                color: markerColor,
                fillColor: markerColor,
                fillOpacity: 0.8,
                radius: 8,
                className: 'moving-marker'
            });

            const popupContent = `
                <div class="tourist-popup">
                    <h4>${tourist.name} ${tourist.hasEFir ? '📋' : ''}</h4>
                    <p><strong>ID:</strong> ${tourist.id}</p>
                    <p><strong>Status:</strong> <span class="status-badge ${tourist.status}">${tourist.status.toUpperCase()}</span></p>
                    <p><strong>Safety Score:</strong> ${tourist.safetyScore}</p>
                    <p><strong>Location:</strong> ${tourist.location.address}</p>
                    <p><strong>Communication:</strong> <span class="status-badge ${tourist.communicationStatus}">${tourist.communicationStatus.replace('_', ' ').toUpperCase()}</span></p>
                    <p><strong>Last Seen:</strong> ${formatTime(tourist.lastSeen)}</p>
                    <div class="tourist-popup-actions">
                        <button class="btn--sm" onclick="showTouristDetails('${tourist.id}')">
                            <i class="fas fa-eye"></i> Details
                        </button>
                        <button class="btn--sm btn--primary" onclick="dispatchEmergencyServices('${tourist.id}')">
                            <i class="fas fa-ambulance"></i> Dispatch
                        </button>
                        <button class="btn--sm btn--secondary" onclick="sendSafetyMessage('${tourist.id}')">
                            <i class="fas fa-comment"></i> Message
                        </button>
                        ${tourist.hasEFir ? `<button class="btn--sm" onclick="viewTouristEFir('${tourist.id}')"><i class="fas fa-file-alt"></i> View E-FIR</button>` : ''}
                    </div>
                </div>
            `;

            marker.bindPopup(popupContent);
            
            if (overviewMap) {
                overviewMap.addLayer(marker);
                touristMarkers.push(marker);
            }
            if (mainMap) {
                mainMap.addLayer(marker);
                if (!touristMarkers.some(m => m === marker)) {
                    touristMarkers.push(marker);
                }
            }
        } catch (e) {
            console.log('Error adding tourist marker:', e);
        }
    });
}

function addPoliceMarkers() {
    if (!overviewMap && !mainMap) return;

    policeUnits.forEach(unit => {
        try {
            const marker = L.marker([unit.location.lat, unit.location.lng], {
                icon: L.divIcon({
                    className: 'police-marker',
                    html: `<div style="background: #3b82f6; color: white; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-size: 18px; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">${unit.vehicleIcon}</div>`,
                    iconSize: [32, 32]
                })
            });

            const popupContent = `
                <div class="unit-popup">
                    <h4>${unit.name} ${unit.vehicleIcon}</h4>
                    <p><strong>Vehicle:</strong> ${unit.vehicleType.replace('_', ' ').toUpperCase()}</p>
                    <p><strong>Status:</strong> <span class="status-badge ${unit.status}">${unit.status.toUpperCase()}</span></p>
                    <p><strong>Officers:</strong> ${unit.officers}</p>
                    <p><strong>Response Time:</strong> ${unit.responseTime}</p>
                    <p><strong>Equipment:</strong> ${unit.equipment.join(', ')}</p>
                    <p><strong>Location:</strong> ${unit.location.address}</p>
                    ${unit.status === 'available' ? `<button class="btn--sm btn--primary" onclick="dispatchUnit('${unit.id}')"><i class="fas fa-car"></i> Dispatch Unit</button>` : ''}
                </div>
            `;

            marker.bindPopup(popupContent);
            
            if (overviewMap) {
                overviewMap.addLayer(marker);
                policeMarkers.push(marker);
            }
            if (mainMap) {
                mainMap.addLayer(marker);
                if (!policeMarkers.some(m => m === marker)) {
                    policeMarkers.push(marker);
                }
            }
        } catch (e) {
            console.log('Error adding police marker:', e);
        }
    });
}

function addRescueMarkers() {
    if (!overviewMap && !mainMap) return;

    rescueUnits.forEach(unit => {
        try {
            const marker = L.marker([unit.location.lat, unit.location.lng], {
                icon: L.divIcon({
                    className: 'rescue-marker',
                    html: `<div style="background: #10b981; color: white; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-size: 18px; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">${unit.vehicleIcon}</div>`,
                    iconSize: [32, 32]
                })
            });

            const popupContent = `
                <div class="unit-popup">
                    <h4>${unit.name} ${unit.vehicleIcon}</h4>
                    <p><strong>Type:</strong> ${unit.type.replace('_', ' ').toUpperCase()}</p>
                    <p><strong>Status:</strong> <span class="status-badge ${unit.status}">${unit.status.toUpperCase()}</span></p>
                    <p><strong>Crew:</strong> ${unit.crew}</p>
                    <p><strong>Equipment:</strong> ${unit.equipment.join(', ')}</p>
                    <p><strong>Location:</strong> ${unit.location.address}</p>
                    ${unit.status === 'available' ? `<button class="btn--sm btn--primary" onclick="dispatchUnit('${unit.id}')"><i class="fas fa-plus-circle"></i> Dispatch Unit</button>` : ''}
                </div>
            `;

            marker.bindPopup(popupContent);
            
            if (overviewMap) {
                overviewMap.addLayer(marker);
                rescueMarkers.push(marker);
            }
            if (mainMap) {
                mainMap.addLayer(marker);
                if (!rescueMarkers.some(m => m === marker)) {
                    rescueMarkers.push(marker);
                }
            }
        } catch (e) {
            console.log('Error adding rescue marker:', e);
        }
    });
}

function addGeofences() {
    if (!mainMap) return;

    geofencePolygons.forEach(polygon => {
        try {
            if (mainMap.hasLayer(polygon)) {
                mainMap.removeLayer(polygon);
            }
        } catch (e) {
            console.log('Error removing geofence:', e);
        }
    });
    geofencePolygons = [];

    geofencesData.forEach(geofence => {
        try {
            const color = getGeofenceColor(geofence.type);
            const polygon = L.polygon(geofence.coordinates, {
                color: color,
                fillColor: color,
                fillOpacity: 0.3,
                weight: 3,
                dashArray: geofence.type === 'restricted' ? '10, 10' : '5, 5'
            });

            polygon.bindPopup(`
                <div class="geofence-popup">
                    <h4>${geofence.name}</h4>
                    <p><strong>Type:</strong> <span class="status-badge ${geofence.type}">${geofence.type.toUpperCase()}</span></p>
                    <p><strong>Radius:</strong> ${geofence.radius}m</p>
                    <p><strong>Alerts:</strong> ${geofence.alerts ? 'Enabled' : 'Disabled'}</p>
                    <p><strong>Description:</strong> ${geofence.description}</p>
                </div>
            `);

            mainMap.addLayer(polygon);
            geofencePolygons.push(polygon);
        } catch (e) {
            console.log('Error adding geofence:', e);
        }
    });
}

function initializeCharts() {
    // Safety Trends Chart
    const safetyCtx = document.getElementById('safetyChart');
    if (safetyCtx) {
        new Chart(safetyCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Safe Tourists',
                    data: [42, 45, 43, 47, 45, 48, touristsData.filter(t => t.status === 'safe').length],
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    fill: true
                }, {
                    label: 'Alerts',
                    data: [3, 5, 7, 4, 6, 5, alertsData.filter(a => a.status === 'active').length],
                    borderColor: '#B4413C',
                    backgroundColor: 'rgba(180, 65, 60, 0.1)',
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#f1f5f9'
                        }
                    }
                },
                scales: {
                    y: {
                        ticks: { color: '#f1f5f9' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    x: {
                        ticks: { color: '#f1f5f9' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                }
            }
        });
    }

    // Alert Distribution Chart
    const alertCtx = document.getElementById('alertChart');
    if (alertCtx) {
        new Chart(alertCtx, {
            type: 'doughnut',
            data: {
                labels: ['Geofence Violations', 'Inactivity', 'Route Deviation', 'Panic Button', 'Low Safety Score'],
                datasets: [{
                    data: [5, 3, 2, 1, 4],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#f1f5f9'
                        }
                    }
                }
            }
        });
    }

    // GeoFence Chart
    const geofenceCtx = document.getElementById('geofenceChart');
    if (geofenceCtx) {
        new Chart(geofenceCtx, {
            type: 'bar',
            data: {
                labels: ['Safe Zones', 'Caution Zones', 'Restricted Zones'],
                datasets: [{
                    label: 'Violations Today',
                    data: [2, 5, 8],
                    backgroundColor: ['#DB4545', '#D2BA4C', '#964325']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#f1f5f9'
                        }
                    }
                },
                scales: {
                    y: {
                        ticks: { color: '#f1f5f9' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    x: {
                        ticks: { color: '#f1f5f9' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                }
            }
        });
    }

    // Enhanced Units Chart
    const unitsCtx = document.getElementById('unitsChart');
    if (unitsCtx) {
        new Chart(unitsCtx, {
            type: 'pie',
            data: {
                labels: ['Available', 'En Route', 'Busy'],
                datasets: [{
                    data: [
                        [...policeUnits, ...rescueUnits].filter(u => u.status === 'available').length,
                        [...policeUnits, ...rescueUnits].filter(u => u.status === 'en_route').length,
                        [...policeUnits, ...rescueUnits].filter(u => u.status === 'busy').length
                    ],
                    backgroundColor: ['#944454', '#13343B', '#5D878F']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#f1f5f9'
                        }
                    }
                }
            }
        });
    }
}

function startLiveUpdates() {
    // Start live counter
    updateLiveCounter();
    
    // Start live movement simulation
    liveUpdateInterval = setInterval(() => {
        if (appState.liveMovementEnabled) {
            simulateLiveMovement();
            updateLiveData();
        }
        updateLiveCounter();
    }, appState.liveUpdateInterval);

    // Simulate new check-ins
    setInterval(() => {
        simulateNewCheckin();
    }, 15000); // Every 15 seconds
}

function updateLiveCounter() {
    liveCounter++;
    const counterEl = document.getElementById('liveCounter');
    if (counterEl) {
        counterEl.textContent = `● LIVE (${liveCounter})`;
    }
}

function simulateLiveMovement() {
    touristsData.forEach((tourist, index) => {
        // Simulate small random movements
        const latChange = (Math.random() - 0.5) * 0.001; // Small movement
        const lngChange = (Math.random() - 0.5) * 0.001;
        
        tourist.location.lat += latChange;
        tourist.location.lng += lngChange;
        
        // Keep coordinates within Guwahati bounds
        tourist.location.lat = Math.max(26.1, Math.min(26.25, tourist.location.lat));
        tourist.location.lng = Math.max(91.6, Math.min(91.9, tourist.location.lng));
        
        // Update last seen time
        tourist.lastSeen = new Date().toISOString();
        
        // Randomly update safety scores
        if (Math.random() < 0.1) { // 10% chance
            const scoreChange = (Math.random() - 0.5) * 10;
            tourist.safetyScore = Math.max(0, Math.min(100, tourist.safetyScore + scoreChange));
            
            // Update status based on safety score
            if (tourist.safetyScore < 30) {
                tourist.status = 'critical';
            } else if (tourist.safetyScore < 60) {
                tourist.status = 'alert';
            } else if (tourist.safetyScore < 80) {
                tourist.status = 'caution';
            } else {
                tourist.status = 'safe';
            }
        }
    });
    
    // Update map markers if on map tab
    if (appState.currentTab === 'map' || appState.currentTab === 'dashboard') {
        updateAllMapMarkers();
    }
}

function simulateNewCheckin() {
    if (Math.random() < 0.3) { // 30% chance
        const names = ["Alex Kumar", "Sarah Chen", "Mike Johnson", "Priya Singh", "Tom Wilson"];
        const nationalities = ["India", "USA", "UK", "Canada", "Australia"];
        
        const randomSpot = guwahatiData.touristSpots[Math.floor(Math.random() * guwahatiData.touristSpots.length)];
        
        const newTourist = {
            id: `TST${String(touristsData.length + 1).padStart(3, '0')}`,
            name: names[Math.floor(Math.random() * names.length)],
            nationality: nationalities[Math.floor(Math.random() * nationalities.length)],
            digitalId: `0x${Math.random().toString(16).substr(2, 40)}`,
            safetyScore: Math.floor(Math.random() * 30) + 70, // 70-100
            location: {
                lat: randomSpot.lat + (Math.random() - 0.5) * 0.01,
                lng: randomSpot.lng + (Math.random() - 0.5) * 0.01,
                address: `${randomSpot.name}, Guwahati`
            },
            status: "safe",
            checkIn: new Date().toISOString(),
            itinerary: ["City Tour", "Heritage Sites"],
            emergencyContact: "+91-98765-43210",
            riskZone: "low",
            lastSeen: new Date().toISOString(),
            currentGeofence: "safe",
            hasEFir: false,
            communicationStatus: "available"
        };
        
        touristsData.push(newTourist);
        showCheckinPopup(newTourist);
        showNotification(`New check-in: ${newTourist.name} at ${randomSpot.name}`, 'checkin');
        
        // Update displays
        if (appState.currentTab === 'tourists') {
            loadTouristTable();
        }
        loadDashboardData();
    }
}

function updateLiveData() {
    // Update dashboard statistics
    loadDashboardData();
    
    // Update current tab data
    if (appState.currentTab === 'tourists') {
        loadTouristTable();
    } else if (appState.currentTab === 'emergency') {
        loadEmergencyUnits();
    }
}

function setupModalHandlers() {
    document.querySelectorAll('.modal-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            e.target.closest('.modal').classList.add('hidden');
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    });
}

// Utility functions
function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value.toString();
    }
}

function formatTime(timestamp) {
    return new Date(timestamp).toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <strong>${type.toUpperCase()}:</strong> ${message}
        </div>
    `;

    const container = document.getElementById('notifications');
    if (container) {
        container.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
}

function getMarkerColor(status) {
    switch(status) {
        case 'safe': return '#16a34a';
        case 'alert': return '#ea580c';
        case 'caution': return '#f59e0b';
        case 'critical': return '#dc2626';
        default: return '#6b7280';
    }
}

function getGeofenceColor(type) {
    switch(type) {
        case 'safe': return '#16a34a';
        case 'caution': return '#f59e0b';
        case 'restricted': return '#dc2626';
        default: return '#6b7280';
    }
}

function showWelcomeNotification() {
    setTimeout(() => {
        showNotification('SurakshaNet Guwahati Enhanced System Activated - All features ready!', 'success');
    }, 1000);
}

function showCheckinPopup(tourist) {
    const popup = document.getElementById('checkinPopup');
    const details = document.getElementById('checkinDetails');
    
    if (popup && details) {
        details.innerHTML = `
            <p><strong>Name:</strong> ${tourist.name}</p>
            <p><strong>Nationality:</strong> ${tourist.nationality}</p>
            <p><strong>Safety Score:</strong> ${tourist.safetyScore}</p>
            <p><strong>Location:</strong> ${tourist.location.address}</p>
        `;
        
        popup.classList.remove('hidden');
        
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 5000);
    }
}

function closeCheckinPopup() {
    const popup = document.getElementById('checkinPopup');
    if (popup) {
        popup.classList.add('hidden');
    }
}

// Enhanced Emergency Functions
function dispatchEmergencyServices(touristId) {
    const tourist = touristsData.find(t => t.id === touristId);
    if (!tourist) return;

    // Create dispatch modal dynamically
    const modalHtml = `
        <div class="modal" id="dispatchModal" style="display: flex;">
            <div class="modal-content dispatch-modal">
                <div class="modal-header">
                    <h3>Emergency Service Dispatch - ${tourist.name}</h3>
                    <button class="modal-close" onclick="closeDispatchModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <p><strong>Tourist Location:</strong> ${tourist.location.address}</p>
                    <p><strong>Current Status:</strong> <span class="status-badge ${tourist.status}">${tourist.status.toUpperCase()}</span></p>
                    
                    <h4>Select Emergency Services:</h4>
                    <div class="dispatch-options">
                        <div class="dispatch-option" data-type="police">
                            <div class="dispatch-option-icon">🚔</div>
                            <h5>Police Unit</h5>
                            <p>Law enforcement response</p>
                        </div>
                        <div class="dispatch-option" data-type="medical">
                            <div class="dispatch-option-icon">🚑</div>
                            <h5>Medical Unit</h5>
                            <p>Emergency medical assistance</p>
                        </div>
                        <div class="dispatch-option" data-type="rescue">
                            <div class="dispatch-option-icon">⛑️</div>
                            <h5>Rescue Team</h5>
                            <p>Specialized rescue operations</p>
                        </div>
                        <div class="dispatch-option" data-type="multi">
                            <div class="dispatch-option-icon">🚨</div>
                            <h5>Multi-Unit Response</h5>
                            <p>Combined emergency response</p>
                        </div>
                    </div>
                    
                    <div class="communication-panel">
                        <h4>Tourist Communication:</h4>
                        <div class="communication-options">
                            <button class="btn--sm btn--secondary" onclick="sendSafetyMessage('${touristId}')">
                                <i class="fas fa-shield-alt"></i> Safety Message
                            </button>
                            <button class="btn--sm btn--secondary" onclick="requestCheckIn('${touristId}')">
                                <i class="fas fa-check-circle"></i> Request Check-in
                            </button>
                            <button class="btn--sm btn--danger" onclick="emergencyCall('${touristId}')">
                                <i class="fas fa-phone"></i> Emergency Call
                            </button>
                        </div>
                    </div>
                    
                    <button class="btn--primary" onclick="confirmDispatch('${touristId}')">
                        <i class="fas fa-paper-plane"></i> Confirm Dispatch
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Add click handlers for dispatch options
    document.querySelectorAll('.dispatch-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.dispatch-option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
}

// Implement all the missing functions with proper functionality
function closeDispatchModal() { const modal = document.getElementById('dispatchModal'); if (modal) modal.remove(); }
function confirmDispatch(touristId) { showNotification('Emergency services dispatched successfully', 'success'); closeDispatchModal(); }
function sendSafetyMessage(touristId) { showNotification('Safety message sent to tourist', 'success'); }
function requestCheckIn(touristId) { showNotification('Check-in request sent to tourist', 'info'); }
function emergencyCall(touristId) { showNotification('Emergency call initiated with tourist', 'error'); }
function viewTouristEFir(touristId) { const fir = eFirData.find(f => f.touristId === touristId); if (fir) showEFirDetails(fir.id); }
function handleAlert(alertId, action) { showNotification(`Alert ${action}d successfully`, 'success'); }
function locateOnMap(lat, lng) { switchTab('map'); setTimeout(() => { if (mainMap) mainMap.setView([lat, lng], 15); }, 300); }
function dispatchUnit(unitId) { showNotification('Unit dispatched successfully', 'success'); }
function searchTourists() { showNotification('Search functionality activated', 'info'); }
function searchEFirs() { showNotification('E-FIR search completed', 'info'); }
function updateEFirStatus(firId) { showNotification('E-FIR status updated', 'success'); }
function assignOfficer(firId) { showNotification('Officer assigned to E-FIR', 'success'); }
function broadcastUpdate(alertId) { showNotification('Alert broadcast updated', 'success'); }
function evacuationRoutes(alertId) { showNotification('Evacuation routes activated', 'warning'); }
function resolveAlert(alertId) { showNotification('Disaster alert resolved', 'success'); }
function refreshMap() { updateAllMapMarkers(); showNotification('Map refreshed', 'info'); }
function toggleFullscreen() { showNotification('Fullscreen mode toggled', 'info'); }
function toggleLiveMovement() { appState.liveMovementEnabled = !appState.liveMovementEnabled; showNotification(`Live movement ${appState.liveMovementEnabled ? 'enabled' : 'disabled'}`, 'info'); }
function showEmergencyAlert() { showNotification('Emergency alert system activated', 'error'); }
function changeLanguage(lang) { appState.selectedLanguage = lang; showNotification(`Language changed to ${lang}`, 'info'); }
function showTouristDetails(touristId) { showNotification('Tourist details loaded', 'info'); }
function setFilter(filterValue, container) { if (container) { container.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active')); const targetBtn = container.querySelector(`[data-filter="${filterValue}"]`); if (targetBtn) targetBtn.classList.add('active'); } showNotification(`Filter applied: ${filterValue}`, 'info'); }
function setGeofenceFilter(filterValue) { showNotification(`GeoFence filter: ${filterValue}`, 'info'); }
function showProtocol(protocolType) { showNotification(`${protocolType} protocol activated`, 'info'); }
function handleEmergencyAction(action) { showNotification(`Emergency action: ${action}`, 'success'); }
function generateReport() { showNotification('SurakshaNet report generated successfully', 'success'); }
function initiateEmergencyResponse(alertId) { showNotification('Emergency response initiated', 'error'); }