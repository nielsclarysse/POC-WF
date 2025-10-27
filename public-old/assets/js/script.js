/* assets/js/map.js
   Fully functional, simple JS for Wildlife Detection System mockup
*/

const USER = { subscription: 'Free' }; // start on Free
const cameras = [
    { id: 'cam1', name: 'Trail Cam North', lat: 51.21, lng: 3.22 },
    { id: 'cam2', name: 'Waterhole A', lat: 51.215, lng: 3.21 },
    { id: 'cam3', name: 'Forest Edge', lat: 51.205, lng: 3.23 },
    { id: 'cam4', name: 'Hilltop Nest', lat: 51.213, lng: 3.225 },
    { id: 'cam5', name: 'Riverside Watch', lat: 51.218, lng: 3.219 },
    { id: 'cam6', name: 'Valley View', lat: 51.207, lng: 3.228 },
    { id: 'cam7', name: 'Wetlands East', lat: 51.209, lng: 3.214 },
    { id: 'cam8', name: 'Old Oak Tree', lat: 51.211, lng: 3.216 },
    { id: 'cam9', name: 'Hidden Den', lat: 51.217, lng: 3.226 },
    { id: 'cam10', name: 'Creek Bend', lat: 51.203, lng: 3.22 },
    { id: 'cam11', name: 'Meadow Spot', lat: 51.22, lng: 3.24 },
    { id: 'cam12', name: 'Pine Grove', lat: 51.19, lng: 3.21 },
    { id: 'cam13', name: 'Lake Shore', lat: 51.225, lng: 3.215 },
    { id: 'cam14', name: 'Rocky Outcrop', lat: 51.195, lng: 3.235 },
    { id: 'cam15', name: 'Birch Alley', lat: 51.212, lng: 3.218 },
    { id: 'cam16', name: 'Swamp Edge', lat: 51.208, lng: 3.222 },
    { id: 'cam17', name: 'Hill Summit', lat: 51.216, lng: 3.227 },
    { id: 'cam18', name: 'Stream Crossing', lat: 51.202, lng: 3.224 },
    { id: 'cam19', name: 'Dense Thicket', lat: 51.214, lng: 3.212 },
    { id: 'cam20', name: 'Open Field', lat: 51.219, lng: 3.229 },
    { id: 'cam21', name: 'Woodland Path', lat: 51.206, lng: 3.217 },
    { id: 'cam22', name: 'Boggy Area', lat: 51.221, lng: 3.223 },
    { id: 'cam23', name: 'Cliff View', lat: 51.198, lng: 3.226 },
    { id: 'cam24', name: 'Fern Gully', lat: 51.210, lng: 3.231 },
    { id: 'cam25', name: 'Prairie Watch', lat: 51.223, lng: 3.213 },
    { id: 'cam26', name: 'Hedgerow Cam', lat: 51.204, lng: 3.219 },
    { id: 'cam27', name: 'Marshland', lat: 51.217, lng: 3.221 },
    { id: 'cam28', name: 'Canyon Rim', lat: 51.196, lng: 3.228 },
    { id: 'cam29', name: 'Willow Bend', lat: 51.211, lng: 3.214 },
    { id: 'cam30', name: 'Savanna Spot', lat: 51.220, lng: 3.230 },
    { id: 'cam31', name: 'Tundra Edge', lat: 51.199, lng: 3.216 },
    { id: 'cam32', name: 'Desert Oasis', lat: 51.224, lng: 3.225 },
    { id: 'cam33', name: 'Jungle Trail', lat: 51.207, lng: 3.220 },
    { id: 'cam34', name: 'Mountain Pass', lat: 51.215, lng: 3.232 },
    { id: 'cam35', name: 'Glacier View', lat: 51.201, lng: 3.218 },
    { id: 'cam36', name: 'Coral Reef', lat: 51.222, lng: 3.227 },
    { id: 'cam37', name: 'Volcano Rim', lat: 51.194, lng: 3.223 },
    { id: 'cam38', name: 'Ice Cave', lat: 51.209, lng: 3.215 },
    { id: 'cam39', name: 'Rainforest Canopy', lat: 51.218, lng: 3.233 },
    { id: 'cam40', name: 'Arctic Tundra', lat: 51.197, lng: 3.217 },
    { id: 'cam41', name: 'Beachfront', lat: 51.226, lng: 3.222 },
    { id: 'cam42', name: 'Urban Park', lat: 51.200, lng: 3.229 },
    { id: 'cam43', name: 'Farmstead', lat: 51.213, lng: 3.211 },
    { id: 'cam44', name: 'Quarry Site', lat: 51.219, lng: 3.234 },
    { id: 'cam45', name: 'Vineyard View', lat: 51.205, lng: 3.212 },
    { id: 'cam46', name: 'Orchard Cam', lat: 51.221, lng: 3.228 },
    { id: 'cam47', name: 'Windmill Hill', lat: 51.192, lng: 3.224 },
    { id: 'cam48', name: 'Bridge Overpass', lat: 51.210, lng: 3.219 },
    { id: 'cam49', name: 'Cave Entrance', lat: 51.216, lng: 3.231 },
    { id: 'cam50', name: 'Hot Spring', lat: 51.203, lng: 3.215 },
    { id: 'cam51', name: 'Grassland Plain', lat: 51.224, lng: 3.220 },
    { id: 'cam52', name: 'Evergreen Forest', lat: 51.198, lng: 3.232 },
    { id: 'cam53', name: 'River Delta', lat: 51.212, lng: 3.226 },
    { id: 'cam54', name: 'Mountain Peak', lat: 51.207, lng: 3.214 },
    { id: 'cam55', name: 'Desert Dune', lat: 51.220, lng: 3.235 },
    { id: 'cam56', name: 'Tropical Lagoon', lat: 51.195, lng: 3.221 },
    { id: 'cam57', name: 'Boreal Woods', lat: 51.217, lng: 3.218 },
    { id: 'cam58', name: 'Coastal Cliff', lat: 51.202, lng: 3.230 },
    { id: 'cam59', name: 'Alpine Meadow', lat: 51.214, lng: 3.223 },
    { id: 'cam60', name: 'Mangrove Swamp', lat: 51.209, lng: 3.216 }
];

let map = null;
const markers = {};
let chart = null;
const el = id => document.getElementById(id);

// AUTH
if (el('authBtn')) {
    el('authBtn').addEventListener('click', () => {
        el('authScreen').classList.add('hidden');
        el('dashboard').classList.remove('hidden');
        initMapOnce();
        renderList();
        highlightCurrentPlan();
    });
}
if (el('logout')) {
    el('logout').addEventListener('click', () => location.reload());
}

// TAB SWITCHING
const tabs = Array.from(document.querySelectorAll('[data-tab]'));
function hideAllViews() {
    ['mapView', 'dataView', 'subsView'].forEach(id => {
        const v = el(id);
        if (v) v.classList.add('hidden');
    });
}
tabs.forEach(tabBtn => {
    tabBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const tabName = tabBtn.dataset.tab;
        tabs.forEach(b => b.classList.remove('active'));
        tabBtn.classList.add('active');

        if (tabName === 'data' && USER.subscription !== 'Research') {
            hideAllViews();
            if (el('subsView')) el('subsView').classList.remove('hidden');
            if (el('subMsg')) el('subMsg').textContent = 'Upgrade to Research to view data.';
            const subsTab = document.querySelector('[data-tab="subs"]');
            if (subsTab) { tabs.forEach(b=>b.classList.remove('active')); subsTab.classList.add('active'); }
            return;
        }

        hideAllViews();
        const view = el(tabName + 'View');
        if (view) view.classList.remove('hidden');

        if (tabName === 'data' && USER.subscription === 'Research') initChart();
    });
});

// MAP
function initMapOnce() {
    if (map) return;
    const mapEl = el('map');
    if (!mapEl) return;
    map = L.map('map').setView([51.21, 3.22], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map);
    cameras.forEach(cam => {
        const m = L.marker([cam.lat, cam.lng]).addTo(map).bindPopup(cam.name);
        markers[cam.id] = m;
    });
}

// CAMERA LIST & SEARCH
function renderList(filter = '') {
    const list = el('cameraList');
    if (!list) return;
    list.innerHTML = '';
    const q = (filter || '').toLowerCase();
    const filtered = cameras.filter(c => c.name.toLowerCase().includes(q));
    if (filtered.length === 0) {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = 'No cameras found';
        list.appendChild(li);
        return;
    }
    filtered.forEach(c => {
        const li = document.createElement('li');
        li.className = 'list-group-item list-group-item-action';
        li.textContent = c.name;
        li.addEventListener('click', () => {
            if (map && markers[c.id]) {
                map.setView([c.lat, c.lng], 14);
                markers[c.id].openPopup();
            }
        });
        list.appendChild(li);
    });
}
if (el('search')) {
    el('search').addEventListener('input', (e) => renderList(e.target.value));
}

// CHART
function initChart() {
    const ctx = el('chartSightings');
    if (!ctx || chart) return;
    const parent = ctx.parentElement;
    if (parent) parent.style.height = '300px';
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            datasets: [{
                label: 'Sightings (week)',
                data: [12, 9, 14, 10, 18, 22, 17],
                backgroundColor: 'hsl(155,40%,50%)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true } }
        }
    });
}

// SUBSCRIPTIONS
function highlightCurrentPlan() {
    document.querySelectorAll('.buy').forEach(b => {
        b.classList.remove('current');
        if (b.dataset.plan === USER.subscription) {
            b.classList.add('current');
        }
    });
}

const modalEl = el('confirmModal');
const modalInstance = modalEl ? new bootstrap.Modal(modalEl) : null;
let pendingPlan = null;

document.querySelectorAll('.buy').forEach(btn => {
    btn.addEventListener('click', () => {
        pendingPlan = btn.dataset.plan;
        if (!el('modalTitle') || !el('modalBody')) return;

        el('modalTitle').textContent = 'Buy ' + pendingPlan;
        if (pendingPlan === 'Custom') {
            el('modalBody').textContent = 'Cancel or contact us for the custom plan.';
        } else {
            el('modalBody').textContent = 'Confirm purchase of ' + pendingPlan + ' plan?';
        }

        if (modalInstance) modalInstance.show();
    });
});

if (el('modalConfirm')) {
    el('modalConfirm').addEventListener('click', () => {
        if (!pendingPlan) return;
        if (pendingPlan !== 'Custom') {
            USER.subscription = pendingPlan;
            highlightCurrentPlan();
        }
        if (modalInstance) modalInstance.hide();
    });
}

// INITIAL STATE
(function initState(){
    if (el('dashboard')) el('dashboard').classList.add('hidden');
    if (el('dataView')) el('dataView').classList.add('hidden');
    if (el('subsView')) el('subsView').classList.add('hidden');
    if (el('mapView')) el('mapView').classList.remove('hidden');
    const mapTab = document.querySelector('[data-tab="map"]');
    if (mapTab) { tabs.forEach(b => b.classList.remove('active')); mapTab.classList.add('active'); }
})();
