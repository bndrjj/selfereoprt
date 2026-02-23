function makeIndicators(prefix) {
  return [1, 2, 3, 4].map((n) => ({
    id: `${prefix}.${n}`,
    title: `مؤشر ${prefix}.${n}: تطبيق الممارسة المهنية المستهدفة`,
    evidenceGuide: [
      "ملاحظة صفية أو إدارية موثقة",
      "نتائج تحليل بيانات الأداء",
      "نماذج متابعة أو خطط تنفيذ",
      "مقابلات مع أصحاب المصلحة"
    ],
    documentsGuide: [
      "سياسات وإجراءات معتمدة",
      "محاضر اجتماعات وتعاميم",
      "تقارير دورية وتحليلية",
      "أدلة رقمية أو ورقية داعمة"
    ]
  }));
}

const domains = [
  {
    id: 1,
    name: "الإدارة المدرسية",
    standards: [
      { id: "1-1", name: "التخطيط", indicators: makeIndicators("1-1") },
      { id: "1-2", name: "قيادة العملية التعليمية", indicators: makeIndicators("1-2") },
      { id: "1-3", name: "المجتمع المدرسي", indicators: makeIndicators("1-3") }
    ]
  },
  {
    id: 2,
    name: "التعليم والتعلم",
    standards: [
      { id: "2-1", name: "بناء خبرات التعلم", indicators: makeIndicators("2-1") },
      { id: "2-2", name: "تقويم التعلم", indicators: makeIndicators("2-2") }
    ]
  },
  {
    id: 3,
    name: "نواتج التعلم",
    standards: [
      { id: "3-1", name: "التحصيل التعليمي", indicators: makeIndicators("3-1") },
      { id: "3-2", name: "التطور الشخصي", indicators: makeIndicators("3-2") }
    ]
  }
];

const storageKey = "school-quality-report";
const state = {
  domainId: domains[0].id,
  standardId: domains[0].standards[0].id,
  selectedIndicatorId: null,
  checks: JSON.parse(localStorage.getItem(storageKey) || "{}")
};

const summaryEl = document.getElementById("summary");
const domainsEl = document.getElementById("domains");
const standardsEl = document.getElementById("standards");
const indicatorsEl = document.getElementById("indicators");
const detailEl = document.getElementById("detail");

function activeDomain() {
  return domains.find((d) => d.id === state.domainId);
}

function activeStandard() {
  return activeDomain().standards.find((s) => s.id === state.standardId);
}

function checksFor(id) {
  return state.checks[id] || { evidence: [], documents: [] };
}

function completion(indicator) {
  const selected = checksFor(indicator.id);
  const total = indicator.evidenceGuide.length + indicator.documentsGuide.length;
  const done = (selected.evidence?.length || 0) + (selected.documents?.length || 0);
  return Math.round((done / total) * 100);
}

function statusLabel(rate) {
  if (rate === 0) return "لم يبدأ";
  if (rate < 70) return "قيد التنفيذ";
  if (rate < 100) return "متقدم";
  return "منجز";
}

function save() {
  localStorage.setItem(storageKey, JSON.stringify(state.checks));
}

function allIndicators() {
  return domains.flatMap((d) => d.standards.flatMap((s) => s.indicators));
}

function renderSummary() {
  const all = allIndicators();
  const done = all.filter((i) => completion(i) === 100).length;
  const progress = all.length
    ? Math.round(all.reduce((sum, indicator) => sum + completion(indicator), 0) / all.length)
    : 0;

  summaryEl.innerHTML = `
    <h2>لوحة ملخص التقرير</h2>
    <div class="summary-grid">
      <article class="metric"><p>المجالات</p><strong>${domains.length}</strong></article>
      <article class="metric"><p>المعايير</p><strong>${domains.reduce((sum, domain) => sum + domain.standards.length, 0)}</strong></article>
      <article class="metric"><p>المؤشرات</p><strong>${all.length}</strong></article>
      <article class="metric"><p>مؤشرات منجزة</p><strong>${done}</strong></article>
      <article class="metric"><p>متوسط الإنجاز</p><strong>${progress}%</strong></article>
    </div>
  `;
}

function renderDomains() {
  domainsEl.innerHTML = `
    <h3>المجالات</h3>
    ${domains
      .map(
        (domain) =>
          `<button class="domain-btn ${domain.id === state.domainId ? "active" : ""}" data-domain="${domain.id}">${domain.name}</button>`
      )
      .join("")}
  `;

  domainsEl.querySelectorAll("[data-domain]").forEach((button) => {
    button.addEventListener("click", () => {
      const selectedDomain = domains.find((domain) => domain.id === Number(button.dataset.domain));
      state.domainId = selectedDomain.id;
      state.standardId = selectedDomain.standards[0].id;
      state.selectedIndicatorId = null;
      render();
    });
  });
}

function renderStandards() {
  const domain = activeDomain();
  standardsEl.innerHTML = `
    <h3>معايير مجال ${domain.name}</h3>
    <div class="standards-tabs">
      ${domain.standards
        .map(
          (standard) =>
            `<button class="standard-btn ${standard.id === state.standardId ? "active" : ""}" data-standard="${standard.id}">${standard.name}</button>`
        )
        .join("")}
    </div>
  `;

  standardsEl.querySelectorAll("[data-standard]").forEach((button) => {
    button.addEventListener("click", () => {
      state.standardId = button.dataset.standard;
      state.selectedIndicatorId = null;
      render();
    });
  });
}

function renderIndicators() {
  const standard = activeStandard();
  indicatorsEl.innerHTML = `
    <h3>مؤشرات معيار ${standard.name}</h3>
    <div class="indicators-grid">
      ${standard.indicators
        .map((indicator) => {
          const rate = completion(indicator);
          return `
            <article class="indicator">
              <p class="code">${indicator.id}</p>
              <h3>${indicator.title}</h3>
              <div class="badges">
                <span class="badge badge-status">${statusLabel(rate)}</span>
                <span class="badge badge-score">نسبة الإنجاز ${rate}%</span>
              </div>
              <button data-indicator="${indicator.id}">عرض دليل المؤشر</button>
            </article>
          `;
        })
        .join("")}
    </div>
  `;

  indicatorsEl.querySelectorAll("[data-indicator]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedIndicatorId = button.dataset.indicator;
      renderDetail();
    });
  });
}

function toggleCheck(indicatorId, type, idx) {
  const current = checksFor(indicatorId);
  const set = new Set(current[type] || []);
  if (set.has(idx)) {
    set.delete(idx);
  } else {
    set.add(idx);
  }
  state.checks[indicatorId] = { ...current, [type]: [...set].sort((a, b) => a - b) };
  save();
  renderSummary();
  renderIndicators();
  renderDetail();
}

function listChecks(indicatorId, type, items) {
  const selected = checksFor(indicatorId)[type] || [];
  return items
    .map(
      (item, idx) => `
        <label class="check-item ${selected.includes(idx) ? "active" : ""}">
          <input type="checkbox" data-check="${type}" data-idx="${idx}" ${selected.includes(idx) ? "checked" : ""} />
          <span>${item}</span>
        </label>
      `
    )
    .join("");
}

function renderDetail() {
  if (!state.selectedIndicatorId) {
    detailEl.innerHTML = '<p class="detail-empty">اختر مؤشرًا لعرض دليل التحقق والتعامل معه بنفس آلية التقرير.</p>';
    return;
  }

  const indicator = activeStandard().indicators.find((item) => item.id === state.selectedIndicatorId);
  if (!indicator) {
    detailEl.innerHTML = '<p class="detail-empty">المؤشر المحدد غير موجود ضمن المعيار الحالي.</p>';
    return;
  }

  const rate = completion(indicator);
  detailEl.innerHTML = `
    <h3>${indicator.id} - ${indicator.title}</h3>
    <p>الحالة الحالية: <strong>${statusLabel(rate)}</strong> • نسبة الإنجاز: <strong>${rate}%</strong></p>
    <h4>الشواهد</h4>
    <div class="checklist">${listChecks(indicator.id, "evidence", indicator.evidenceGuide)}</div>
    <h4>الوثائق</h4>
    <div class="checklist">${listChecks(indicator.id, "documents", indicator.documentsGuide)}</div>
  `;

  detailEl.querySelectorAll("[data-check]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      toggleCheck(indicator.id, checkbox.dataset.check, Number(checkbox.dataset.idx));
    });
  });
}

function render() {
  renderSummary();
  renderDomains();
  renderStandards();
  renderIndicators();
  renderDetail();
}

render();
