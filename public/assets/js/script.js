/* assets/js/script.js
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
    { id: 'cam10', name: 'Creek Bend', lat: 51.203, lng: 3.22 }
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
                backgroundColor: 'hsl(155,40%,35%)'
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
        if (b.dataset.plan === USER.subscription) {
            b.style.background = 'hsl(50,80%,60%)';
            b.style.borderColor = 'hsl(50,80%,50%)';
        } else {
            b.style.background = '';
            b.style.borderColor = '';
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
