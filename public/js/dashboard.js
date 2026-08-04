<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dashboard — Ramatechcode Lab & Tech</title>
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/app.css">
</head>
<body class="app-body">

<div class="app-shell">
  <aside class="sidebar" id="sidebar">
    <div class="brand"><span class="brand-mark"></span> Ramatechcode</div>
    <nav class="side-nav">
      <button data-view="overview" class="active"><span class="dot"></span> Overview</button>
      <button data-view="students"><span class="dot"></span> Students</button>
      <button data-view="payments"><span class="dot"></span> Payments</button>
      <button data-view="complaints"><span class="dot"></span> Complaints</button>
      <button data-view="profile"><span class="dot"></span> School profile</button>
    </nav>
    <div class="sidebar-foot">
      <div class="school-name" id="sideSchoolName">—</div>
      <div class="school-status"><span class="badge" id="sideSchoolStatus">—</span></div>
      <button class="btn btn-outline btn-block" id="logoutBtn">Log out</button>
    </div>
  </aside>

  <div class="main-area">
    <div class="topbar">
      <h1 id="viewTitle">Overview</h1>
      <button class="btn btn-copper" id="topAddStudentBtn" style="display:none;">+ Add student</button>
    </div>

    <div class="content">

      <!-- OVERVIEW -->
      <section data-panel="overview">
        <div class="stat-grid">
          <div class="stat-card"><span class="pcb-label">Students</span><div class="stat-num" id="statStudents">0</div></div>
          <div class="stat-card"><span class="pcb-label">Total paid</span><div class="stat-num" id="statRevenue">₦0</div></div>
          <div class="stat-card"><span class="pcb-label">School status</span><div class="stat-num"><span class="badge" id="statStatus">—</span></div></div>
          <div class="stat-card"><span class="pcb-label">Location</span><div class="stat-num" id="statLocation" style="font-size:15px;">Not shared</div></div>
        </div>

        <div class="panel">
          <div class="panel-head"><h2>Recent payments</h2><button class="btn btn-outline-dark" data-goto="payments">View all</button></div>
          <div id="overviewPayments"></div>
        </div>

        <div class="panel">
          <div class="panel-head"><h2>Recently added students</h2><button class="btn btn-outline-dark" data-goto="students">View all</button></div>
          <div id="overviewStudents"></div>
        </div>
      </section>

      <!-- STUDENTS -->
      <section data-panel="students" hidden>
        <div class="panel">
          <div class="panel-head">
            <h2>Students interested in the programme</h2>
            <button class="btn btn-copper" id="addStudentBtn">+ Add student</button>
          </div>
          <div id="studentsTableWrap"></div>
        </div>
      </section>

      <!-- PAYMENTS -->
      <section data-panel="payments" hidden>
        <div class="panel">
          <div class="panel-head"><h2>Make a payment</h2></div>
          <p style="color:var(--ink-dim); font-size:14px; margin-top:-8px;">Pay any amount — a full month for all students, a partial group, or a top-up. A unique reference is generated for every payment.</p>
          <form id="payForm">
            <div class="grid-2">
              <div class="field">
                <label for="payAmount">Amount (₦)</label>
                <input id="payAmount" type="number" min="1" step="1" placeholder="e.g. 30000" required>
              </div>
              <div class="field">
                <label for="payMonth">For month</label>
                <input id="payMonth" type="month">
              </div>
            </div>
            <div class="grid-2">
              <div class="field">
                <label for="payCovers">Number of students this covers (optional)</label>
                <input id="payCovers" type="number" min="0" step="1" placeholder="e.g. 10">
              </div>
              <div class="field">
                <label for="payNote">Note (optional)</label>
                <input id="payNote" type="text" placeholder="e.g. August fees, JSS1 group">
              </div>
            </div>
            <button type="submit" class="btn btn-copper" id="payBtn">Pay with Flutterwave</button>
          </form>
        </div>

        <div class="panel">
          <div class="panel-head"><h2>Payment history</h2></div>
          <div id="paymentsTableWrap"></div>
        </div>
      </section>

      <!-- COMPLAINTS -->
      <section data-panel="complaints" hidden>
        <div class="panel">
          <div class="panel-head"><h2>File a complaint</h2></div>
          <form id="complaintForm">
            <div class="field">
              <label for="cSubject">Subject</label>
              <input id="cSubject" type="text" placeholder="e.g. Instructor did not show up" required>
            </div>
            <div class="field">
              <label for="cMessage">Details</label>
              <textarea id="cMessage" placeholder="Describe the issue..." required></textarea>
            </div>
            <button type="submit" class="btn btn-copper">Submit complaint</button>
          </form>
        </div>

        <div class="panel">
          <div class="panel-head"><h2>Your complaints</h2></div>
          <div id="complaintsTableWrap"></div>
        </div>
      </section>

      <!-- PROFILE / LOCATION -->
      <section data-panel="profile" hidden>
        <div class="panel">
          <div class="panel-head"><h2>School profile</h2></div>
          <form id="profileForm">
            <div class="grid-2">
              <div class="field"><label for="pName">School name</label><input id="pName" type="text" required></div>
              <div class="field"><label for="pType">School type</label>
                <select id="pType">
                  <option value="Primary & Secondary">Primary & Secondary</option>
                  <option value="Primary">Primary only</option>
                  <option value="Secondary">Secondary only</option>
                </select>
              </div>
            </div>
            <div class="field"><label for="pAddress">Address</label><input id="pAddress" type="text" required></div>
            <div class="grid-2">
              <div class="field"><label for="pContact">Contact person</label><input id="pContact" type="text" required></div>
              <div class="field"><label for="pPhone">Phone</label><input id="pPhone" type="tel" required></div>
            </div>
            <button type="submit" class="btn btn-copper">Save changes</button>
          </form>
        </div>

        <div class="panel">
          <div class="panel-head"><h2>Share your school's location</h2></div>
          <p style="color:var(--ink-dim); font-size:14px; margin-top:-8px;">Sharing your location lets Ramatechcode admin plot your school on the coverage map and plan visits accurately.</p>
          <div class="location-card">
            <div class="location-status" id="locationStatus">Location not shared yet.</div>
            <button class="btn btn-outline-dark" id="shareLocationBtn">Share my exact location</button>
          </div>
        </div>
      </section>

    </div>
  </div>
</div>

<!-- Add / Edit Student Modal -->
<div class="modal-backdrop" id="studentModalBackdrop">
  <div class="modal">
    <h3 id="studentModalTitle">Add student</h3>
    <div class="alert alert-error" id="studentModalError"></div>
    <form id="studentForm">
      <input type="hidden" id="studentId">
      <div class="field"><label for="sName">Full name</label><input id="sName" type="text" required></div>
      <div class="grid-2">
        <div class="field"><label for="sClass">Class</label><input id="sClass" type="text" placeholder="e.g. JSS2"></div>
        <div class="field"><label for="sCourse">Interested course</label><input id="sCourse" type="text" placeholder="e.g. Robotics"></div>
      </div>
      <div class="grid-2">
        <div class="field"><label for="sParentPhone">Parent phone</label><input id="sParentPhone" type="tel"></div>
        <div class="field"><label for="sParentEmail">Parent email</label><input id="sParentEmail" type="email"></div>
      </div>
      <div class="modal-close-row">
        <button type="button" class="btn btn-outline-dark" id="cancelStudentModal">Cancel</button>
        <button type="submit" class="btn btn-copper" id="saveStudentBtn">Save student</button>
      </div>
    </form>
  </div>
</div>

<!-- Payment success modal -->
<div class="modal-backdrop" id="paySuccessBackdrop">
  <div class="modal">
    <h3>Payment successful</h3>
    <p>Your payment was verified and recorded. Keep this reference for your records:</p>
    <div class="reference-box" id="payRefBox"></div>
    <div class="modal-close-row">
      <button class="btn btn-copper" id="closePaySuccess">Done</button>
    </div>
  </div>
</div>

<script src="https://checkout.flutterwave.com/v3.js"></script>
<script src="js/config.js"></script>
<script src="js/dashboard.js"></script>
</body>
</html>const token = localStorage.getItem('rtc_token');
if (!token) window.location.href = 'login.html';

let currentSchool = JSON.parse(localStorage.getItem('rtc_school') || '{}');

// ---------- Nav ----------
const views = document.querySelectorAll('[data-panel]');
const navButtons = document.querySelectorAll('.side-nav button');
const viewTitle = document.getElementById('viewTitle');
const topAddStudentBtn = document.getElementById('topAddStudentBtn');

function showView(name) {
  views.forEach(v => v.hidden = v.dataset.panel !== name);
  navButtons.forEach(b => b.classList.toggle('active', b.dataset.view === name));
  const titles = { overview: 'Overview', students: 'Students', payments: 'Payments', complaints: 'Complaints', profile: 'School profile' };
  viewTitle.textContent = titles[name] || 'Dashboard';
  topAddStudentBtn.style.display = name === 'students' ? 'inline-flex' : 'none';
  if (name === 'students') loadStudents();
  if (name === 'payments') loadPayments();
  if (name === 'complaints') loadComplaints();
  if (name === 'profile') fillProfileForm();
}
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  const navButtons = document.querySelectorAll('.side-nav button');

  function openSidebar() {
    sidebar.classList.add('open');
    menuToggle.classList.add('open');
    if (sidebarBackdrop) sidebarBackdrop.classList.add('show');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    menuToggle.classList.remove('open');
    if (sidebarBackdrop) sidebarBackdrop.classList.remove('show');
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isOpen = sidebar.classList.contains('open');
      if (isOpen) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', closeSidebar);
  }

  // Auto-close sidebar on mobile when switching views/tabs
  navButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (window.innerWidth <= 860) {
        closeSidebar();
      }
    });
  });
});
navButtons.forEach(btn => btn.addEventListener('click', () => showView(btn.dataset.view)));
document.querySelectorAll('[data-goto]').forEach(btn =>
  btn.addEventListener('click', () => showView(btn.dataset.goto))
);
topAddStudentBtn.addEventListener('click', () => openStudentModal());

document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem('rtc_token');
  localStorage.removeItem('rtc_school');
  window.location.href = 'login.html';
});

// ---------- Overview ----------
async function loadOverview() {
  try {
    const { school, stats } = await apiRequest('/schools/me', { token });
    currentSchool = school;
    localStorage.setItem('rtc_school', JSON.stringify(school));

    document.getElementById('sideSchoolName').textContent = school.schoolName;
    const statusBadge = document.getElementById('sideSchoolStatus');
    statusBadge.textContent = school.status;
    statusBadge.className = 'badge badge-' + school.status;

    document.getElementById('statStudents').textContent = stats.totalStudents;
    document.getElementById('statRevenue').textContent = formatNaira(stats.totalRevenue);
    const statStatus = document.getElementById('statStatus');
    statStatus.textContent = school.status;
    statStatus.className = 'badge badge-' + school.status;
    document.getElementById('statLocation').textContent = school.location?.sharedAt ? 'Shared ✓' : 'Not shared';

    const payments = await apiRequest('/payments', { token });
    renderPaymentRows(payments.payments.slice(0, 5), document.getElementById('overviewPayments'));

    const students = await apiRequest('/students', { token });
    renderStudentRows(students.students.slice(0, 5), document.getElementById('overviewStudents'), true);
  } catch (err) {
    console.error(err);
  }
}

// ---------- Students ----------
function renderStudentRows(students, container, readOnly = false) {
  if (!students.length) {
    container.innerHTML = `<div class="empty-state"><h3>No students yet</h3><p>Add the first student interested in the programme.</p></div>`;
    return;
  }
  container.innerHTML = `
    <table>
      <thead><tr><th>Name</th><th>Class</th><th>Course</th><th>Parent phone</th>${readOnly ? '' : '<th>Actions</th>'}</tr></thead>
      <tbody>
        ${students.map(s => `
          <tr>
            <td>${escapeHtml(s.fullName)}</td>
            <td>${escapeHtml(s.className || '—')}</td>
            <td>${escapeHtml(s.interestedCourse || '—')}</td>
            <td>${escapeHtml(s.parentPhone || '—')}</td>
            ${readOnly ? '' : `
            <td class="actions">
              <button class="icon-btn" onclick="openStudentModal('${s._id}')">Edit</button>
              <button class="icon-btn danger" onclick="deleteStudent('${s._id}')">Delete</button>
            </td>`}
          </tr>
        `).join('')}
      </tbody>
    </table>`;
}

let allStudents = [];
async function loadStudents() {
  const wrap = document.getElementById('studentsTableWrap');
  wrap.innerHTML = '<div class="empty-state">Loading students...</div>';
  try {
    const data = await apiRequest('/students', { token });
    allStudents = data.students;
    renderStudentRows(allStudents, wrap);
  } catch (err) {
    wrap.innerHTML = `<div class="empty-state">${err.message}</div>`;
  }
}

const studentModalBackdrop = document.getElementById('studentModalBackdrop');
const studentForm = document.getElementById('studentForm');
const studentModalError = document.getElementById('studentModalError');

function openStudentModal(id) {
  studentModalError.classList.remove('show');
  studentForm.reset();
  document.getElementById('studentId').value = '';
  document.getElementById('studentModalTitle').textContent = 'Add student';

  if (id) {
    const s = allStudents.find(x => x._id === id);
    if (s) {
      document.getElementById('studentId').value = s._id;
      document.getElementById('sName').value = s.fullName;
      document.getElementById('sClass').value = s.className || '';
      document.getElementById('sCourse').value = s.interestedCourse || '';
      document.getElementById('sParentPhone').value = s.parentPhone || '';
      document.getElementById('sParentEmail').value = s.parentEmail || '';
      document.getElementById('studentModalTitle').textContent = 'Edit student';
    }
  }
  studentModalBackdrop.classList.add('show');
}
document.getElementById('addStudentBtn').addEventListener('click', () => openStudentModal());
document.getElementById('cancelStudentModal').addEventListener('click', () => studentModalBackdrop.classList.remove('show'));

studentForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  studentModalError.classList.remove('show');
  const id = document.getElementById('studentId').value;
  const payload = {
    fullName: document.getElementById('sName').value.trim(),
    className: document.getElementById('sClass').value.trim(),
    interestedCourse: document.getElementById('sCourse').value.trim(),
    parentPhone: document.getElementById('sParentPhone').value.trim(),
    parentEmail: document.getElementById('sParentEmail').value.trim()
  };
  try {
    if (id) {
      await apiRequest(`/students/${id}`, { method: 'PATCH', token, body: payload });
    } else {
      await apiRequest('/students', { method: 'POST', token, body: payload });
    }
    studentModalBackdrop.classList.remove('show');
    loadStudents();
    loadOverview();
  } catch (err) {
    studentModalError.textContent = err.message;
    studentModalError.classList.add('show');
  }
});

async function deleteStudent(id) {
  if (!confirm('Remove this student from your list?')) return;
  try {
    await apiRequest(`/students/${id}`, { method: 'DELETE', token });
    loadStudents();
    loadOverview();
  } catch (err) {
    alert(err.message);
  }
}

// ---------- Payments ----------
function renderPaymentRows(payments, container) {
  if (!payments.length) {
    container.innerHTML = `<div class="empty-state"><h3>No payments yet</h3><p>Your payment history and references will appear here.</p></div>`;
    return;
  }
  container.innerHTML = `
    <table>
      <thead><tr><th>Reference</th><th>Amount</th><th>Month</th><th>Status</th><th>Date</th></tr></thead>
      <tbody>
        ${payments.map(p => `
          <tr>
            <td class="mono">${p.reference}</td>
            <td>${formatNaira(p.amount)}</td>
            <td>${p.monthFor || '—'}</td>
            <td><span class="badge badge-${p.status}">${p.status}</span></td>
            <td>${formatDate(p.paidAt || p.createdAt)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>`;
}

async function loadPayments() {
  const wrap = document.getElementById('paymentsTableWrap');
  wrap.innerHTML = '<div class="empty-state">Loading payments...</div>';
  try {
    const data = await apiRequest('/payments', { token });
    renderPaymentRows(data.payments, wrap);
  } catch (err) {
    wrap.innerHTML = `<div class="empty-state">${err.message}</div>`;
  }
}

document.getElementById('payForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const payBtn = document.getElementById('payBtn');
  payBtn.disabled = true;
  payBtn.textContent = 'Preparing payment...';

  try {
    const amount = Number(document.getElementById('payAmount').value);
    const monthFor = document.getElementById('payMonth').value;
    const coversStudents = document.getElementById('payCovers').value;
    const note = document.getElementById('payNote').value;

    const init = await apiRequest('/payments/initiate', {
      method: 'POST',
      token,
      body: { amount, monthFor, coversStudents: coversStudents ? Number(coversStudents) : null, note }
    });

    payBtn.disabled = false;
    payBtn.textContent = 'Pay with Flutterwave';

    // Launch Flutterwave's inline checkout with the reference the server generated
    FlutterwaveCheckout({
      public_key: init.publicKey,
      tx_ref: init.reference,
      amount: init.amount,
      currency: 'NGN',
      payment_options: 'card,banktransfer,ussd',
      customer: init.customer,
      customizations: init.customizations,
      callback: async function (response) {
        try {
          const verify = await apiRequest('/payments/verify', {
            method: 'POST',
            token,
            body: { transaction_id: response.transaction_id, reference: init.reference }
          });
          document.getElementById('payRefBox').textContent = verify.payment.reference;
          document.getElementById('paySuccessBackdrop').classList.add('show');
          document.getElementById('payForm').reset();
          loadPayments();
          loadOverview();
        } catch (err) {
          alert('Payment made, but verification failed: ' + err.message + '. Contact support with reference ' + init.reference);
        }
      },
      onclose: function () { /* user closed the checkout modal — nothing to do */ }
    });
  } catch (err) {
    payBtn.disabled = false;
    payBtn.textContent = 'Pay with Flutterwave';
    alert(err.message);
  }
});

document.getElementById('closePaySuccess').addEventListener('click', () => {
  document.getElementById('paySuccessBackdrop').classList.remove('show');
});

// ---------- Complaints ----------
function renderComplaintRows(complaints, container) {
  if (!complaints.length) {
    container.innerHTML = `<div class="empty-state"><h3>No complaints filed</h3><p>Anything you report will show up here with our reply.</p></div>`;
    return;
  }
  container.innerHTML = `
    <table>
      <thead><tr><th>Subject</th><th>Status</th><th>Reply</th><th>Date</th></tr></thead>
      <tbody>
        ${complaints.map(c => `
          <tr>
            <td>${escapeHtml(c.subject)}</td>
            <td><span class="badge badge-${c.status}">${c.status.replace('_',' ')}</span></td>
            <td>${c.adminReply ? escapeHtml(c.adminReply) : '—'}</td>
            <td>${formatDate(c.createdAt)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>`;
}

async function loadComplaints() {
  const wrap = document.getElementById('complaintsTableWrap');
  wrap.innerHTML = '<div class="empty-state">Loading complaints...</div>';
  try {
    const data = await apiRequest('/complaints', { token });
    renderComplaintRows(data.complaints, wrap);
  } catch (err) {
    wrap.innerHTML = `<div class="empty-state">${err.message}</div>`;
  }
}

document.getElementById('complaintForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    await apiRequest('/complaints', {
      method: 'POST',
      token,
      body: {
        subject: document.getElementById('cSubject').value.trim(),
        message: document.getElementById('cMessage').value.trim()
      }
    });
    document.getElementById('complaintForm').reset();
    loadComplaints();
  } catch (err) {
    alert(err.message);
  }
});

// ---------- Profile & location ----------
function fillProfileForm() {
  document.getElementById('pName').value = currentSchool.schoolName || '';
  document.getElementById('pType').value = currentSchool.schoolType || 'Primary & Secondary';
  document.getElementById('pAddress').value = currentSchool.address || '';
  document.getElementById('pContact').value = currentSchool.contactName || '';
  document.getElementById('pPhone').value = currentSchool.phone || '';

  const status = document.getElementById('locationStatus');
  if (currentSchool.location?.sharedAt) {
    status.innerHTML = `<strong>Location shared</strong> — last updated ${formatDate(currentSchool.location.sharedAt)}`;
  } else {
    status.innerHTML = 'Location not shared yet.';
  }
}

document.getElementById('profileForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    const data = await apiRequest('/schools/me', {
      method: 'PATCH',
      token,
      body: {
        schoolName: document.getElementById('pName').value.trim(),
        schoolType: document.getElementById('pType').value,
        address: document.getElementById('pAddress').value.trim(),
        contactName: document.getElementById('pContact').value.trim(),
        phone: document.getElementById('pPhone').value.trim()
      }
    });
    currentSchool = data.school;
    localStorage.setItem('rtc_school', JSON.stringify(data.school));
    alert('Profile updated.');
    loadOverview();
  } catch (err) {
    alert(err.message);
  }
});

document.getElementById('shareLocationBtn').addEventListener('click', () => {
  if (!navigator.geolocation) {
    alert('Your browser does not support location sharing.');
    return;
  }
  const btn = document.getElementById('shareLocationBtn');
  btn.disabled = true;
  btn.textContent = 'Getting your location...';

  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      try {
        const { school } = await apiRequest('/schools/location', {
          method: 'PATCH',
          token,
          body: {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            accuracy: pos.coords.accuracy
          }
        });
        currentSchool = school;
        localStorage.setItem('rtc_school', JSON.stringify(school));
        fillProfileForm();
        loadOverview();
      } catch (err) {
        alert(err.message);
      } finally {
        btn.disabled = false;
        btn.textContent = 'Share my exact location';
      }
    },
    (err) => {
      btn.disabled = false;
      btn.textContent = 'Share my exact location';
      alert('Could not get your location: ' + err.message + '. Please allow location access in your browser.');
    },
    { enableHighAccuracy: true, timeout: 15000 }
  );
});

// ---------- Utils ----------
function escapeHtml(str) {
  return String(str || '').replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[m]));
}

// ---------- Init ----------
loadOverview();
