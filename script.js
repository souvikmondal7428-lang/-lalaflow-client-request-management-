/**
 * LALAFLOW 3D SAAS DASHBOARD LOGIC
 * Core Request Operations System & 3D Interactive Visuals
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. INITIAL REQUEST DATA STORE
  // ==========================================
  const INITIAL_REQUESTS = [
    {
      id: "REQ-1001",
      client: "Acme Enterprise Systems",
      title: "Production OAuth2 SSO Endpoint Integration",
      category: "Integration",
      priority: "Urgent",
      status: "In Progress",
      assignee: "Alex Rivera",
      createdDate: "2026-09-08",
      slaDays: 2,
      isOverdue: true, // OVERDUE 1
      isWaitingClient: false,
      desc: "Client requires custom SAML 2.0 and OAuth2 single sign-on integration for 5,000 enterprise seats."
    },
    {
      id: "REQ-1002",
      client: "Nexus Global Cloud",
      title: "Real-time Telemetry Data Pipeline Scoping",
      category: "Custom Feature",
      priority: "High",
      status: "Waiting on Client", // WAITING CLIENT 1
      assignee: "Sarah Chen",
      createdDate: "2026-09-07",
      slaDays: 5,
      isOverdue: false,
      isWaitingClient: true,
      desc: "Awaiting client response regarding Kafka topic partition specs and throughput thresholds."
    },
    {
      id: "REQ-1003",
      client: "Vanguard Financial",
      title: "SOC2 Compliance Data Encryption Audit",
      category: "Security Audit",
      priority: "Urgent",
      status: "In Progress",
      assignee: "David Miller",
      createdDate: "2026-09-05",
      slaDays: 1,
      isOverdue: true, // OVERDUE 2
      isWaitingClient: false,
      desc: "Auditing database column-level encryption keys and access logs before financial regulator inspection."
    },
    {
      id: "REQ-1004",
      client: "Hyperion Digital",
      title: "Automated Billing Webhook Failure Investigation",
      category: "Bug Fix",
      priority: "High",
      status: "Waiting on Client", // WAITING CLIENT 2
      assignee: "Elena Rostova",
      createdDate: "2026-09-09",
      slaDays: 3,
      isOverdue: false,
      isWaitingClient: true,
      desc: "Sent diagnostic curl logs to client IT team. Awaiting payload sample from their endpoint."
    },
    {
      id: "REQ-1005",
      client: "Starlight Media",
      title: "CDN Asset Optimization & Cache Purge API",
      category: "Integration",
      priority: "Medium",
      status: "New Request", // UNASSIGNED 1
      assignee: "Unassigned",
      createdDate: "2026-09-10",
      slaDays: 4,
      isOverdue: false,
      isWaitingClient: false,
      desc: "Client requests custom API endpoint to trigger regional edge cache purges."
    },
    {
      id: "REQ-1006",
      client: "Aegis Health Tech",
      title: "HIPAA Audit Trail Export Tool",
      category: "Custom Feature",
      priority: "Urgent",
      status: "In Progress",
      assignee: "Alex Rivera",
      createdDate: "2026-09-04",
      slaDays: 1,
      isOverdue: true, // OVERDUE 3
      isWaitingClient: false,
      desc: "Exporting encrypted patient activity logs for annual compliance validation."
    },
    {
      id: "REQ-1007",
      client: "Quantum Robotics",
      title: "Fleet Diagnostics Dashboard Widget",
      category: "Custom Feature",
      priority: "Medium",
      status: "Waiting on Client", // WAITING CLIENT 3
      assignee: "Sarah Chen",
      createdDate: "2026-09-06",
      slaDays: 6,
      isOverdue: false,
      isWaitingClient: true,
      desc: "UI wireframes delivered to client UI/UX director for formal sign-off."
    },
    {
      id: "REQ-1008",
      client: "Orion Logistics",
      title: "GPS Geofence Tracking Sync Delay",
      category: "Bug Fix",
      priority: "High",
      status: "Needs Clarification",
      assignee: "David Miller",
      createdDate: "2026-09-09",
      slaDays: 3,
      isOverdue: false,
      isWaitingClient: false,
      desc: "Investigating 15-minute telemetry latency in European transit zones."
    },
    {
      id: "REQ-1009",
      client: "Solaris Energy",
      title: "Smart Meter Data Export Schema",
      category: "Account Config",
      priority: "Low",
      status: "Ready to Assign", // UNASSIGNED 2
      assignee: "Unassigned",
      createdDate: "2026-09-10",
      slaDays: 7,
      isOverdue: false,
      isWaitingClient: false,
      desc: "Configuring CSV and JSON automated report scheduling for renewable power grids."
    },
    {
      id: "REQ-1010",
      client: "Zenith Software Solutions",
      title: "Multi-tenant RBAC Permission Matrix",
      category: "Account Config",
      priority: "High",
      status: "Waiting on Client", // WAITING CLIENT 4
      assignee: "Elena Rostova",
      createdDate: "2026-09-08",
      slaDays: 4,
      isOverdue: false,
      isWaitingClient: true,
      desc: "Role hierarchy definition submitted to client security officer for confirmation."
    },
    {
      id: "REQ-1011",
      client: "Apex AI Labs",
      title: "Model Inference API Rate Limiting Adjustments",
      category: "Integration",
      priority: "Medium",
      status: "Waiting on Client", // WAITING CLIENT 5
      assignee: "Sarah Chen",
      createdDate: "2026-09-07",
      slaDays: 5,
      isOverdue: false,
      isWaitingClient: true,
      desc: "Client testing burst capacity limits on staging cluster."
    },
    {
      id: "REQ-1012",
      client: "Nova Retail",
      title: "E-Commerce Checkout Gateway Timeout",
      category: "Bug Fix",
      priority: "Urgent",
      status: "In Progress",
      assignee: "Alex Rivera",
      createdDate: "2026-09-10",
      slaDays: 2,
      isOverdue: false,
      isWaitingClient: false,
      desc: "Intermittent 504 errors on Stripe payment confirmation webhook."
    },
    {
      id: "REQ-1013",
      client: "CyberShield Security",
      title: "Zero-Trust Device Certificate Provisioning",
      category: "Security Audit",
      priority: "High",
      status: "New Request", // UNASSIGNED 3
      assignee: "Unassigned",
      createdDate: "2026-09-10",
      slaDays: 3,
      isOverdue: false,
      isWaitingClient: false,
      desc: "Provisioning mTLS certificates for mobile workforce endpoints."
    },
    {
      id: "REQ-1014",
      client: "Terraform Cloud Ops",
      title: "Infrastructure as Code CI/CD Pipeline",
      category: "Integration",
      priority: "Medium",
      status: "Waiting on Client", // WAITING CLIENT 6
      assignee: "David Miller",
      createdDate: "2026-09-06",
      slaDays: 4,
      isOverdue: false,
      isWaitingClient: true,
      desc: "Awaiting client AWS IAM credentials and service role approval."
    },
    {
      id: "REQ-1015",
      client: "Velocity Motors",
      title: "Connected Vehicle API Rate Limit Alert",
      category: "Custom Feature",
      priority: "Low",
      status: "Ready to Assign", // UNASSIGNED 4
      assignee: "Unassigned",
      createdDate: "2026-09-10",
      slaDays: 8,
      isOverdue: false,
      isWaitingClient: false,
      desc: "Setting up PagerDuty alerts for vehicle telemetry bandwidth threshold breaches."
    },
    {
      id: "REQ-1016",
      client: "BioTech Innovations",
      title: "Genomic Sequence Data Storage Expansion",
      category: "Account Config",
      priority: "Medium",
      status: "Waiting on Client", // WAITING CLIENT 7
      assignee: "Elena Rostova",
      createdDate: "2026-09-08",
      slaDays: 5,
      isOverdue: false,
      isWaitingClient: true,
      desc: "Waiting for contract addendum sign-off for additional 50TB cloud cold storage."
    },
    {
      id: "REQ-1017",
      client: "Summit FinTech",
      title: "ACH Transfer Clearing Gateway Failure",
      category: "Bug Fix",
      priority: "Urgent",
      status: "Needs Clarification",
      assignee: "Sarah Chen",
      createdDate: "2026-09-09",
      slaDays: 2,
      isOverdue: false,
      isWaitingClient: false,
      desc: "Requested transaction IDs for batches affected during 14:00 UTC batch run."
    },
    {
      id: "REQ-1018",
      client: "Atlas Communications",
      title: "SIP Trunking Call Quality Analytics",
      category: "Integration",
      priority: "Medium",
      status: "Waiting on Client", // WAITING CLIENT 8
      assignee: "Alex Rivera",
      createdDate: "2026-09-07",
      slaDays: 6,
      isOverdue: false,
      isWaitingClient: true,
      desc: "Client reviewing packet loss metrics and MOS scores."
    },
    {
      id: "REQ-1019",
      client: "Krypton Game Studio",
      title: "Multiplayer Matchmaking Server Cluster",
      category: "Custom Feature",
      priority: "High",
      status: "Done",
      assignee: "David Miller",
      createdDate: "2026-09-02",
      slaDays: 0,
      isOverdue: false,
      isWaitingClient: false,
      desc: "Successfully deployed regional matchmaking nodes in Frankfurt and Tokyo."
    },
    {
      id: "REQ-1020",
      client: "Global Logistics Network",
      title: "Automated Bill of Lading PDF Generator",
      category: "Integration",
      priority: "Low",
      status: "Done",
      assignee: "Elena Rostova",
      createdDate: "2026-09-03",
      slaDays: 0,
      isOverdue: false,
      isWaitingClient: false,
      desc: "PDF generator live and tested with 10,000 shipment records."
    }
  ];

  // In-memory state
  let requestState = [...INITIAL_REQUESTS];
  let currentFilterStatus = 'ALL';
  let currentFilterPriority = 'ALL';
  let currentSearchQuery = '';
  let activeViewMode = 'table'; // 'table' or 'cards'
  let activeSelectedReqId = null;

  // ==========================================
  // 2. THREE.JS 3D HERO DIGITAL CORE ORB
  // ==========================================
  function init3DHero() {
    const container = document.getElementById('three-orb-container');
    if (!container || typeof THREE === 'undefined') return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse parallax rotation
    const orbGroup = new THREE.Group();
    scene.add(orbGroup);

    // 1. Inner Core Icosahedron Wireframe
    const coreGeo = new THREE.IcosahedronGeometry(4.2, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    orbGroup.add(coreMesh);

    // 2. Inner Glowing Core Solid Sphere
    const innerGeo = new THREE.SphereGeometry(2.5, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.6
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    orbGroup.add(innerMesh);

    // 3. Outer Particle Ring Torus 1
    const particleCount = 400;
    const ringGeo1 = new THREE.BufferGeometry();
    const positions1 = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 6 + Math.random() * 0.8;
      positions1[i * 3] = Math.cos(angle) * radius;
      positions1[i * 3 + 1] = (Math.random() - 0.5) * 1.2;
      positions1[i * 3 + 2] = Math.sin(angle) * radius;
    }
    ringGeo1.setAttribute('position', new THREE.BufferAttribute(positions1, 3));
    const ringMat1 = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.15,
      transparent: true,
      opacity: 0.8
    });
    const ringPoints1 = new THREE.Points(ringGeo1, ringMat1);
    ringPoints1.rotation.x = Math.PI / 4;
    orbGroup.add(ringPoints1);

    // 4. Outer Particle Ring Torus 2
    const ringGeo2 = new THREE.BufferGeometry();
    const positions2 = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 7.5 + Math.random() * 1.0;
      positions2[i * 3] = Math.cos(angle) * radius;
      positions2[i * 3 + 1] = (Math.random() - 0.5) * 1.5;
      positions2[i * 3 + 2] = Math.sin(angle) * radius;
    }
    ringGeo2.setAttribute('position', new THREE.BufferAttribute(positions2, 3));
    const ringMat2 = new THREE.PointsMaterial({
      color: 0xa855f7,
      size: 0.18,
      transparent: true,
      opacity: 0.75
    });
    const ringPoints2 = new THREE.Points(ringGeo2, ringMat2);
    ringPoints2.rotation.x = -Math.PI / 3;
    orbGroup.add(ringPoints2);

    // Mouse Tracking Interpolation (Lerp)
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetRotY = mouseX * 0.4;
      targetRotX = mouseY * 0.4;
    });

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);

      // Constant gentle rotation
      coreMesh.rotation.y += 0.004;
      coreMesh.rotation.x += 0.002;
      innerMesh.rotation.y -= 0.006;
      ringPoints1.rotation.z += 0.003;
      ringPoints2.rotation.z -= 0.002;

      // Lerp smooth mouse follow
      orbGroup.rotation.y += (targetRotY - orbGroup.rotation.y) * 0.05;
      orbGroup.rotation.x += (targetRotX - orbGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    }
    animate();

    // Window Resize Observer
    window.addEventListener('resize', () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
  }

  // ==========================================
  // 3. BACKGROUND PARTICLES CANVAS
  // ==========================================
  function initBackgroundParticles() {
    const canvas = document.getElementById('bg-particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = Math.min(Math.floor(width / 25), 60);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.5 - 0.2,
        color: Math.random() > 0.5 ? 'rgba(0, 240, 255, ' : 'rgba(168, 85, 247, ',
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    function renderBgParticles() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color + '0.8)';
        ctx.fill();
      });

      requestAnimationFrame(renderBgParticles);
    }
    renderBgParticles();
  }

  // ==========================================
  // 4. MOUSE 3D PARALLAX & TILT CARDS
  // ==========================================
  function initCardTilt() {
    const cards = document.querySelectorAll('.tilt-card');
    const cursorGlow = document.getElementById('cursorGlow');
    const bgGrid = document.querySelector('.bg-grid');

    window.addEventListener('mousemove', (e) => {
      // Cursor Glow Follow
      if (cursorGlow) {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
      }

      // Background Grid Subtle Parallax
      if (bgGrid) {
        const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
        const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
        bgGrid.style.transform = `perspective(800px) rotateX(${60 + moveY * 0.1}deg) translateY(${-200 + moveY}px) translateX(${moveX}px)`;
      }
    });

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -12; // Rotate X around horizontal axis
        const rotateY = ((x - centerX) / centerX) * 12;  // Rotate Y around vertical axis

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px) scale3d(1.02, 1.02, 1.02)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)`;
      });
    });
  }

  // ==========================================
  // 5. SCROLL REVEAL & COUNTER ANIMATIONS
  // ==========================================
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');

          // Trigger counter animation if inside KPI section
          const counters = entry.target.querySelectorAll('.counter');
          counters.forEach(counter => animateCounter(counter));
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => observer.observe(el));
  }

  function animateCounter(counterEl) {
    if (counterEl.dataset.animated === 'true') return;
    counterEl.dataset.animated = 'true';

    const target = parseInt(counterEl.dataset.target, 10) || 0;
    let count = 0;
    const duration = 1200;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      count += increment;
      if (count >= target) {
        counterEl.innerText = target < 10 ? `0${target}` : target;
        clearInterval(timer);
      } else {
        const val = Math.floor(count);
        counterEl.innerText = val < 10 ? `0${val}` : val;
      }
    }, 16);
  }

  // ==========================================
  // 6. REQUEST MANAGEMENT SYSTEM & KPI LOGIC
  // ==========================================
  function initRequestSystem() {
    renderRequests();
    updateKPIs();

    // Event Listeners for Filters
    const searchInput = document.getElementById('searchInput');
    const btnClearSearch = document.getElementById('btnClearSearch');
    const filterStatus = document.getElementById('filterStatus');
    const filterPriority = document.getElementById('filterPriority');

    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      btnClearSearch.style.display = currentSearchQuery ? 'block' : 'none';
      renderRequests();
    });

    btnClearSearch.addEventListener('click', () => {
      searchInput.value = '';
      currentSearchQuery = '';
      btnClearSearch.style.display = 'none';
      renderRequests();
    });

    filterStatus.addEventListener('change', (e) => {
      currentFilterStatus = e.target.value;
      renderRequests();
    });

    filterPriority.addEventListener('change', (e) => {
      currentFilterPriority = e.target.value;
      renderRequests();
    });

    // View Mode Switcher
    const btnViewTable = document.getElementById('btnViewTable');
    const btnViewCards = document.getElementById('btnViewCards');
    const tableViewContainer = document.getElementById('tableViewContainer');
    const cardsViewContainer = document.getElementById('cardsViewContainer');

    btnViewTable.addEventListener('click', () => {
      activeViewMode = 'table';
      btnViewTable.classList.add('active');
      btnViewCards.classList.remove('active');
      tableViewContainer.style.display = 'block';
      cardsViewContainer.style.display = 'none';
    });

    btnViewCards.addEventListener('click', () => {
      activeViewMode = 'cards';
      btnViewCards.classList.add('active');
      btnViewTable.classList.remove('active');
      cardsViewContainer.style.display = 'grid';
      tableViewContainer.style.display = 'none';
    });

    // Modal Triggers
    const btnOpenNewRequest = document.getElementById('btnOpenNewRequest');
    const btnOpenNewRequest2 = document.getElementById('btnOpenNewRequest2');
    const modalNewRequest = document.getElementById('modalNewRequest');
    const btnCloseModalNewRequest = document.getElementById('btnCloseModalNewRequest');
    const btnCancelNewRequest = document.getElementById('btnCancelNewRequest');
    const formNewRequest = document.getElementById('formNewRequest');

    const openNewModal = () => modalNewRequest.classList.add('active');
    const closeNewModal = () => modalNewRequest.classList.remove('active');

    btnOpenNewRequest.addEventListener('click', openNewModal);
    if (btnOpenNewRequest2) btnOpenNewRequest2.addEventListener('click', openNewModal);
    btnCloseModalNewRequest.addEventListener('click', closeNewModal);
    btnCancelNewRequest.addEventListener('click', closeNewModal);

    // Form Submit Handler
    formNewRequest.addEventListener('submit', (e) => {
      e.preventDefault();
      const client = document.getElementById('newClientName').value.trim();
      const title = document.getElementById('newRequestTitle').value.trim();
      const priority = document.getElementById('newPriority').value;
      const category = document.getElementById('newCategory').value;
      const desc = document.getElementById('newDescription').value.trim();

      const newId = `REQ-${1000 + requestState.length + 1}`;
      const newReq = {
        id: newId,
        client,
        title,
        category,
        priority,
        status: 'New Request',
        assignee: 'Unassigned',
        createdDate: new Date().toISOString().split('T')[0],
        slaDays: 5,
        isOverdue: false,
        isWaitingClient: false,
        desc
      };

      requestState.unshift(newReq);
      updateKPIs();
      renderRequests();
      closeNewModal();
      formNewRequest.reset();

      showToast('Request Created', `${newId} for ${client} has been added to queue.`, 'success');
    });

    // Request Detail Modal Triggers & Handlers
    const modalRequestDetail = document.getElementById('modalRequestDetail');
    const btnCloseModalDetail = document.getElementById('btnCloseModalDetail');
    const btnCloseDetailFooter = document.getElementById('btnCloseDetailFooter');
    const btnSaveDetailChanges = document.getElementById('btnSaveDetailChanges');

    const closeDetailModal = () => modalRequestDetail.classList.remove('active');
    btnCloseModalDetail.addEventListener('click', closeDetailModal);
    btnCloseDetailFooter.addEventListener('click', closeDetailModal);

    btnSaveDetailChanges.addEventListener('click', () => {
      if (!activeSelectedReqId) return;
      const reqObj = requestState.find(r => r.id === activeSelectedReqId);
      if (reqObj) {
        const newStatus = document.getElementById('detailStatusSelect').value;
        const newAssignee = document.getElementById('detailAssigneeSelect').value;

        reqObj.status = newStatus;
        reqObj.assignee = newAssignee;

        // Business Logic Rules
        if (newStatus === 'Waiting on Client') {
          reqObj.isWaitingClient = true;
          reqObj.isOverdue = false; // SLA paused!
        } else {
          reqObj.isWaitingClient = false;
        }

        updateKPIs();
        renderRequests();
        closeDetailModal();
        showToast('Changes Saved', `Updated ${reqObj.id} status to ${newStatus}.`, 'info');
      }
    });
  }

  // ==========================================
  // 7. RENDER FUNCTIONS & FILTER LOGIC
  // ==========================================
  function filterRequestData() {
    return requestState.filter(req => {
      // Search filter
      const matchesSearch = !currentSearchQuery || 
        req.id.toLowerCase().includes(currentSearchQuery) ||
        req.client.toLowerCase().includes(currentSearchQuery) ||
        req.title.toLowerCase().includes(currentSearchQuery) ||
        req.assignee.toLowerCase().includes(currentSearchQuery);

      // Priority filter
      const matchesPriority = currentFilterPriority === 'ALL' || req.priority === currentFilterPriority;

      // Status filter with custom logic buckets
      let matchesStatus = true;
      if (currentFilterStatus === 'WAITING_FOR_US') {
        matchesStatus = req.status !== 'Done' && req.status !== 'Waiting on Client' && req.assignee !== 'Unassigned';
      } else if (currentFilterStatus === 'WAITING_FOR_CLIENT') {
        matchesStatus = req.status === 'Waiting on Client';
      } else if (currentFilterStatus === 'UNASSIGNED') {
        matchesStatus = req.assignee === 'Unassigned' && req.status !== 'Done';
      } else if (currentFilterStatus === 'OVERDUE') {
        matchesStatus = req.isOverdue === true;
      } else if (currentFilterStatus !== 'ALL') {
        matchesStatus = req.status === currentFilterStatus;
      }

      return matchesSearch && matchesPriority && matchesStatus;
    });
  }

  function renderRequests() {
    const data = filterRequestData();

    // Render Table Body
    const tbody = document.getElementById('requestTableBody');
    const cardsGrid = document.getElementById('cardsViewContainer');
    const filterSummary = document.getElementById('filterResultCount');

    if (filterSummary) {
      filterSummary.innerText = `Showing ${data.length} of ${requestState.length} requests`;
    }

    if (!tbody || !cardsGrid) return;

    if (data.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 30px; color: var(--text-dim);">No requests found matching your filters.</td></tr>`;
      cardsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-dim);">No requests found.</div>`;
      return;
    }

    // Populate Table
    tbody.innerHTML = data.map(req => {
      const statusBadge = getStatusBadgeHTML(req.status);
      const priorityBadge = getPriorityBadgeHTML(req.priority);
      const slaPill = getSlaPillHTML(req);

      return `
        <tr class="request-row" onclick="openRequestDetailModal('${req.id}')">
          <td>
            <div class="req-id">${req.id}</div>
            <div class="req-client">${escapeHTML(req.client)}</div>
          </td>
          <td>
            <div class="req-title">${escapeHTML(req.title)}</div>
            <div class="req-category">${escapeHTML(req.category)}</div>
          </td>
          <td>${priorityBadge}</td>
          <td>${statusBadge}</td>
          <td>
            <div class="assignee-cell">
              <div class="avatar-mini">${getInitials(req.assignee)}</div>
              <span>${escapeHTML(req.assignee)}</span>
            </div>
          </td>
          <td>${slaPill}</td>
          <td style="text-align: right;">
            <div class="action-btn-group" onclick="event.stopPropagation()">
              <button class="btn-icon-only" onclick="openRequestDetailModal('${req.id}')" title="View & Edit Details">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Populate Grid Cards
    cardsGrid.innerHTML = data.map(req => {
      const statusBadge = getStatusBadgeHTML(req.status);
      const priorityBadge = getPriorityBadgeHTML(req.priority);
      const slaPill = getSlaPillHTML(req);

      return `
        <div class="request-card glass-panel tilt-card" onclick="openRequestDetailModal('${req.id}')">
          <div class="req-card-header">
            <div>
              <span class="req-id">${req.id}</span>
              <h4 class="req-client">${escapeHTML(req.client)}</h4>
            </div>
            ${priorityBadge}
          </div>

          <div class="req-card-body">
            <div class="req-title">${escapeHTML(req.title)}</div>
            <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.4;">${escapeHTML(req.desc)}</p>
          </div>

          <div class="req-card-footer">
            <div class="assignee-cell">
              <div class="avatar-mini">${getInitials(req.assignee)}</div>
              <span style="font-size:0.8rem;">${escapeHTML(req.assignee)}</span>
            </div>
            ${statusBadge}
          </div>
        </div>
      `;
    }).join('');

    // Re-initialize tilt handlers on new cards
    initCardTilt();
  }

  // Helper Badge Builders
  function getStatusBadgeHTML(status) {
    switch (status) {
      case 'New Request':
        return `<span class="badge-status status-new"><i class="fa-solid fa-sparkles"></i> New Request</span>`;
      case 'Needs Clarification':
        return `<span class="badge-status status-clarification"><i class="fa-solid fa-clipboard-question"></i> Needs Clarification</span>`;
      case 'Ready to Assign':
        return `<span class="badge-status status-ready"><i class="fa-solid fa-user-check"></i> Ready to Assign</span>`;
      case 'In Progress':
        return `<span class="badge-status status-progress"><i class="fa-solid fa-gears"></i> In Progress</span>`;
      case 'Waiting on Client':
        return `<span class="badge-status status-client"><i class="fa-solid fa-clock-rotate-left"></i> Waiting on Client</span>`;
      case 'Done':
        return `<span class="badge-status status-done"><i class="fa-solid fa-circle-check"></i> Done</span>`;
      default:
        return `<span class="badge-status status-new">${status}</span>`;
    }
  }

  function getPriorityBadgeHTML(priority) {
    switch (priority) {
      case 'Urgent':
        return `<span class="badge-priority priority-urgent"><i class="fa-solid fa-fire"></i> Urgent</span>`;
      case 'High':
        return `<span class="badge-priority priority-high"><i class="fa-solid fa-arrow-up"></i> High</span>`;
      case 'Medium':
        return `<span class="badge-priority priority-medium"><i class="fa-solid fa-minus"></i> Medium</span>`;
      case 'Low':
        return `<span class="badge-priority priority-low"><i class="fa-solid fa-arrow-down"></i> Low</span>`;
      default:
        return `<span class="badge-priority priority-medium">${priority}</span>`;
    }
  }

  function getSlaPillHTML(req) {
    if (req.status === 'Done') {
      return `<span class="sla-pill pill-ok"><i class="fa-solid fa-check-double"></i> Resolved</span>`;
    }
    if (req.isWaitingClient || req.status === 'Waiting on Client') {
      return `<span class="sla-pill pill-paused" title="SLA timer automatically paused"><i class="fa-solid fa-pause-circle"></i> SLA Paused</span>`;
    }
    if (req.isOverdue) {
      return `<span class="sla-pill pill-overdue"><i class="fa-solid fa-triangle-exclamation"></i> SLA Breached</span>`;
    }
    return `<span class="sla-pill pill-ok"><i class="fa-solid fa-clock"></i> Within SLA</span>`;
  }

  function getInitials(name) {
    if (!name || name === 'Unassigned') return 'UN';
    const parts = name.split(' ');
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return name.substring(0, 2).toUpperCase();
  }

  function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }

  // ==========================================
  // 8. UPDATE KPIS & HERO METRICS
  // ==========================================
  function updateKPIs() {
    const activeReqs = requestState.filter(r => r.status !== 'Done');

    // Business Logic Metric Rules
    const waitingForUsCount = activeReqs.filter(r => r.status !== 'Waiting on Client' && r.assignee !== 'Unassigned').length;
    const waitingForClientCount = activeReqs.filter(r => r.status === 'Waiting on Client').length;
    const unassignedCount = activeReqs.filter(r => r.assignee === 'Unassigned').length;
    const overdueCount = activeReqs.filter(r => r.isOverdue === true).length;
    const totalActive = activeReqs.length;

    // Update KPI Card Numbers
    setCounterTarget('kpiWaitingUs', waitingForUsCount);
    setCounterTarget('kpiWaitingClient', waitingForClientCount);
    setCounterTarget('kpiUnassigned', unassignedCount);
    setCounterTarget('kpiOverdue', overdueCount);

    // Update Hero Floating Cards & Ticker
    updateElText('heroStatWaitingUs', formatNum(waitingForUsCount));
    updateElText('heroStatWaitingClient', formatNum(waitingForClientCount));
    updateElText('heroStatUnassigned', formatNum(unassignedCount));
    updateElText('heroStatOverdue', formatNum(overdueCount));
    updateElText('statCoreActive', totalActive);
    updateElText('heroActiveTotal', totalActive);

    // Update Stage Counts in Workflow Section
    updateElText('stageCountNew', `${requestState.filter(r => r.status === 'New Request').length} Requests`);
    updateElText('stageCountClarification', `${requestState.filter(r => r.status === 'Needs Clarification').length} Requests`);
    updateElText('stageCountReady', `${requestState.filter(r => r.status === 'Ready to Assign').length} Requests`);
    updateElText('stageCountProgress', `${requestState.filter(r => r.status === 'In Progress').length} Requests`);
    updateElText('stageCountClient', `${waitingForClientCount} Requests`);
    updateElText('stageCountDone', `${requestState.filter(r => r.status === 'Done').length} Resolved`);
  }

  function setCounterTarget(id, val) {
    const el = document.getElementById(id);
    if (el) {
      el.dataset.target = val;
      el.innerText = val < 10 ? `0${val}` : val;
    }
  }

  function updateElText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
  }

  function formatNum(num) {
    return num < 10 ? `0${num}` : num;
  }

  // Make openRequestDetailModal available globally
  window.openRequestDetailModal = function(reqId) {
    const reqObj = requestState.find(r => r.id === reqId);
    if (!reqObj) return;

    activeSelectedReqId = reqId;
    document.getElementById('detailReqId').innerText = reqObj.id;
    document.getElementById('detailTitle').innerText = reqObj.title;
    document.getElementById('detailClient').innerText = reqObj.client;
    document.getElementById('detailDesc').innerText = reqObj.desc;
    document.getElementById('detailStatusSelect').value = reqObj.status;
    document.getElementById('detailAssigneeSelect').value = reqObj.assignee;

    const priorityBadge = document.getElementById('detailPriorityBadge');
    priorityBadge.className = `badge-priority priority-${reqObj.priority.toLowerCase()}`;
    priorityBadge.innerText = reqObj.priority;

    const slaBadge = document.getElementById('detailSlaBadge');
    slaBadge.innerHTML = getSlaPillHTML(reqObj);

    document.getElementById('modalRequestDetail').classList.add('active');
  };

  // ==========================================
  // 9. TOAST NOTIFICATIONS & MAGNETIC BUTTONS
  // ==========================================
  function showToast(title, msg, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';

    let iconClass = 'fa-circle-info';
    if (type === 'success') iconClass = 'fa-circle-check text-green';
    if (type === 'warning') iconClass = 'fa-triangle-exclamation text-amber';

    toast.innerHTML = `
      <i class="fa-solid ${iconClass} toast-icon"></i>
      <div class="toast-body">
        <span class="toast-title">${escapeHTML(title)}</span>
        <span class="toast-msg">${escapeHTML(msg)}</span>
      </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-out');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  function initMagneticButtons() {
    const magneticBtns = document.querySelectorAll('.magnetic-btn');

    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = `translate(0px, 0px)`;
      });
    });
  }

  // INITIALIZE ALL MODULES
  init3DHero();
  initBackgroundParticles();
  initCardTilt();
  initScrollReveal();
  initRequestSystem();
  initMagneticButtons();

});
