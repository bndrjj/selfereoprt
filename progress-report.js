/* =============================================================================
   تقرير التقدم والإنجاز - منصة متابعة مؤشرات التقويم والاعتماد المدرسي
   ============================================================================= */

// ─── بيانات المؤشرات ────────────────────────────────────────────────────────
const indicatorTexts = {
  "1-1": [
    ["1-1-1-1", "تضع المدرسة خطة تشغيلية شاملة، وفق أهداف تطويرية محددة."],
    ["1-1-1-2", "تتابع المدرسة تنفيذ خطتها التشغيلية وتطورها بما يضمن تحقيق أهدافها."],
  ],
  "1-2": [
    ["1-2-1-1", "تعزز المدرسة القيم الاسلامية والهوية الوطنية."],
    ["1-2-1-2", "تطبق المدرسة قيم مهنة التعليم واخلاقياتها وتتابع الالتزام بها"],
    ["1-2-1-3", "تطبق المدرسة إجراءات محددة لدعم الانضباط المدرسي وتتابع الالتزام بها"],
    ["1-2-1-4", "تنفذ المدرسة برامج وأنشطة تربوية داعمة للسلوك الإيجابي، لدى المتعلمين ومنهم ذوو الإعاقة والموهوبون وتتابعها"],
    ["1-2-1-5", "تنفذ المدرسة برامج وأنشطة إثرائية؛ لتطوير مواهب المتعلمين وتهيئتهم للمستقبل وتتابعها"],
  ],
  "1-3": [
    ["1-3-1-1", "تعزز المدرسة بناء العلاقات الايجابية والتعاون في المجتمع المدرسي"],
    ["1-3-1-2", "تعزز المدرسة مشاركة الاسرة في تعلم أبنائها، والتحضير لمستقبلهم"],
    ["1-3-1-3", "تعزز المدرسة الشراكة المجتمعية؛ لدعم التعلم والتأثير الايجابي في المجتمع"],
  ],
  "1-4": [
    ["1-4-1-1", "توفر المدرسة كادرا تعليميا مكتملا ً ومؤهلا بما يتسق مع المهام الموكلة له"],
    ["1-4-1-2", "توفر المدرسة كادرا إداريا مكتملا ً ومؤهلا بما يتسق مع المهام الموكلة له"],
    ["1-4-1-3", "تظهر المدرسة الملاءة والاستدامة مالية."],
    ["1-4-1-4", "تدعم المدرسة منسوبيها للحصول على الرخصة المهنية، وتتابعها"],
    ["1-4-1-5", "تدعم المدرسة التطوير المهني لمنسوبيها وفقًا لنتائج التقويم وتحليل احتياجاتهم"],
    ["1-4-1-6", "تطبق المدرسة التقويم الذاتي المبني على المعايير المعتمدة من الهيئة بشكل مستمر"],
    ["1-4-1-7", "تنفذ المدرسة خطة للتحسين بناء على نتائج التقويم المدرسي، وتتابعها"],
  ],
  "1-5": [
    ["1-5-1-1", "تلتزم المدرسة بالمحافظة على حقوق المتعلمين وحمايتهم"],
    ["1-5-1-2", "توفر المدرسة مناخًا آمنًا للتعلم والنمو نفسيا واجتماعيا"],
  ],
  "2-1": [
    ["2-1-1-1", "توفر المدرسة فرصًا متكافئة للتعلم تلبي احتياجات المتعلمين ومنهم ذوو الإعاقة والموهوبون."],
    ["2-1-1-2", "تدعم المدرسة تنفيذ المناهج؛ بما يحقق نواتج التعلم المستهدفة"],
    ["2-1-1-3", "تنوع المدرسة في إستراتيجيات التعليم والتعلم لتلبية احتياجات المتعلمين، ودعم تعلمهم."],
    ["2-1-1-4", "تفعل المدرسة التقنية الرقمية ؛ لدعم تعلم المتعلمين وتلبية احتياجاتهم"],
    ["2-1-1-5", "تنفذ المدرسة أنشطة تعلم تطبيقية ترتبط بحياة المتعلمين"],
    ["2-1-1-6", "تنمي المدرسة المهارات القرائية والعددية الاساسية لدى المتعلمين"],
    ["2-1-1-7", "تنمي المدرسة مهارات التفكير والبحث والابتكار لدى المتعلمين."],
    ["2-1-1-8", "تنمي المدرسة المهارات العاطفية الاجتماعية لدى المتعلمين"],
    ["2-1-1-9", "تعزز المدرسة دافعية المتعلمين للتعلم والاستمتاع به."],
  ],
  "2-2": [
    ["2-2-1-1", "تطبق المدرسة أساليب وأدوات تقويم متنوعة: للكشف عن مستويات أداء المتعلمين المختلفة"],
    ["2-2-1-2", "تطبق المدرسة أساليب وأدوات متنوعة : لتقويم نواتج التعلم المستهدفة في مناهج التعليم"],
    ["2-2-1-3", "تحلل المدرسة نتائج التقويم وتوظفها في تحسين عمليات التعليم والتعلم والتقويم"],
    ["2-2-1-4", "تقدم المدرسة التغذية الراجعة للمتعلمين وأولياء امورهم وتتابع تقدمهم بشكل مستمر"],
  ],
  "3-1": [
    ["3-1-1-1", "يحقق المتعلمون نتائج مرتفعة في مجال القراءة وفقًا للاختبارات الوطنية."],
    ["3-1-1-2", "يحقق المتعلمون نتائج مرتفعة في مجال الرياضيات وفقًا للاختبارات الوطنية."],
    ["3-1-1-3", "يحقق المتعلمون نتائج مرتفعة في مجال العلوم وفقًا للاختبارات الوطنية."],
    ["3-1-1-4", "يحقق المتعلمون تقدما في مجال القراءة قياسا على مستوى أداء المدرسة السابق في الاختبارات الوطنية"],
    ["3-1-1-5", "يحقق المتعلمون تقدما في مجال الرياضيات قياسا على مستوى أداء المدرسة السابق في الاختبارات الوطنية"],
    ["3-1-1-6", "يحقق المتعلمون تقدما في مجال العلوم قياسا على مستوى أداء المدرسة السابق في الاختبارات الوطنية"],
  ],
  "3-2": [
    ["3-2-1-1", "يظهر المتعلمون الاعتزاز بالقيم والهوية الوطنية"],
    ["3-2-1-2", "يظهر المتعلمون اتجاهات إيجابية نحو ذواتهم"],
    ["3-2-1-3", "يظهر المتعلمون التزاما بالممارسات الصحية السليمة."],
    ["3-2-1-4", "يشارك المتعلمون في الانشطة المجتمعية والاعمال التطوعية."],
    ["3-2-1-5", "يلتزم المتعلمون بقواعد السلوك والانضباط المدرسي."],
    ["3-2-1-6", "يظهر المتعلمون الاستقلالية والقدرة على التعلم الذاتي"],
    ["3-2-1-7", "يظهر المتعلمون اعتزازا بثقافتهم واحتراما للتنوع الثقافي في المجتمع"],
  ],
  "4-1": [
    ["4-1-1-1", "توفر المدرسة مبنى تعليمي يستوفي المواصفات والاشتراطات المعتمدة من حيث النوع والخدمات المساندة"],
    ["4-1-1-2", "تنظيم مبنى المدرسة ملائم لعدد المتعلمين وخصائص المرحلة العمرية، ومنهم ذوو الاعاقة"],
    ["4-1-1-3", "تتوافر فصول ومعامل ملائمة للعملية التعليمية تلبي احتياجات المتعلمين ومنهم ذوو الاعاقة."],
    ["4-1-1-4", "تلبي المرافق والتجهيزات والخدمات المساندة احتياجات المتعلمين ومنهم ذوو الاعاقة."],
  ],
  "4-2": [
    ["4-2-1-1", "تتوافر في مبنى المدرسة ومرافقها جميع متطلبات الامن والسلامة."],
    ["4-2-1-2", "تتابع المدرسة صيانة المبنى وجميع مرافقه وتجهيزاته بشكل دوري"],
    ["4-2-1-3", "تتابع المدرسة نظافة المبنى المدرسي وجميع مرافقه بشكل مستمر"],
  ],
};

const evidenceTemplate = [
  "وجود خطة/إجراء مكتوب ومعتمد مرتبط بالمؤشر.",
  "تنفيذ فعلي موثق (أنشطة، محاضر، صور، تقارير).",
  "تحديد الأدوار والمسؤوليات بوضوح.",
  "متابعة دورية مع مؤشرات قياس.",
  "تحليل تحديات وتطبيق تحسينات علاجية.",
  "مشاركة أصحاب العلاقة وتوثيق الأثر."
];

const documentsTemplate = [
  "خطة عمل معتمدة مرتبطة بالمؤشر.",
  "سجلات متابعة حديثة وموقعة.",
  "تقارير تحليل النتائج والتحسين.",
  "نماذج/أدلة تنفيذ داعمة."
];

// ─── بناء هيكل المجالات ─────────────────────────────────────────────────────
function makeIndicators(standardId) {
  return indicatorTexts[standardId].map(([id, title]) => ({
    id,
    title,
    evidenceGuide: [...evidenceTemplate],
    documentsGuide: [...documentsTemplate]
  }));
}

const domains = [
  {
    id: 1, name: "الإدارة المدرسية",
    standards: [
      { id: "1-1", name: "التخطيط", indicators: makeIndicators("1-1") },
      { id: "1-2", name: "قيادة العملية التعليمية", indicators: makeIndicators("1-2") },
      { id: "1-3", name: "المجتمع المدرسي", indicators: makeIndicators("1-3") },
      { id: "1-4", name: "التطوير المؤسسي", indicators: makeIndicators("1-4") },
      { id: "1-5", name: "حقوق المتعلم وحمايته", indicators: makeIndicators("1-5") }
    ]
  },
  {
    id: 2, name: "التعليم والتعلم",
    standards: [
      { id: "2-1", name: "بناء خبرات التعلم", indicators: makeIndicators("2-1") },
      { id: "2-2", name: "تقويم التعلم", indicators: makeIndicators("2-2") }
    ]
  },
  {
    id: 3, name: "نواتج التعلم",
    standards: [
      { id: "3-1", name: "التحصيل التعليمي", indicators: makeIndicators("3-1") },
      { id: "3-2", name: "التطور الشخصي والصحي", indicators: makeIndicators("3-2") }
    ]
  },
  {
    id: 4, name: "البيئة المدرسية",
    standards: [
      { id: "4-1", name: "المبنى المدرسي", indicators: makeIndicators("4-1") },
      { id: "4-2", name: "الأمن والسلامة", indicators: makeIndicators("4-2") }
    ]
  }
];

// ─── قراءة البيانات من localStorage ─────────────────────────────────────────
const APP_KEY = "school-quality-tracker";
const REPORT_KEY = "accreditation-checklist-v3";
const SCHOOL_INFO_KEY = "school-info";

const appData = JSON.parse(localStorage.getItem(APP_KEY) || "{}");
const reportData = JSON.parse(localStorage.getItem(REPORT_KEY) || "{}");
const schoolInfo = JSON.parse(localStorage.getItem(SCHOOL_INFO_KEY) || "{}");

const appChecks = appData.checks || {};
const reportRows = reportData.rows || {};

// الأولوية: بيانات نافذة المعلومات > بيانات التقرير > القيم الافتراضية
const regionName = schoolInfo.regionName || reportData.regionName || "الإدارة العامة للتعليم بالمنطقة الشرقية";
const schoolName = schoolInfo.schoolName || reportData.schoolName || "اسم المدرسة هنا";
const principalName = schoolInfo.principalName || "";
const supervisorName = schoolInfo.supervisorName || "";
const teamMembers = Array.isArray(schoolInfo.teamMembers) ? schoolInfo.teamMembers : [];

// ─── حساب نسبة الإنجاز لكل مؤشر ────────────────────────────────────────────
// نأخذ بيانات من المصدر الرئيسي (app.js checks) إن وُجدت، وإلا من report.js rows
function getIndicatorProgress(indicator) {
  // المصدر الأول: بيانات التطبيق الرئيسي (قوائم التحقق)
  const checks = appChecks[indicator.id];
  if (checks) {
    const evidenceCount = Array.isArray(checks.evidence) ? checks.evidence.length : 0;
    const docsCount = Array.isArray(checks.documents) ? checks.documents.length : 0;
    const total = indicator.evidenceGuide.length + indicator.documentsGuide.length;
    if (total > 0) {
      return Math.min(100, Math.round(((evidenceCount + docsCount) / total) * 100));
    }
  }

  // المصدر الثاني: بيانات صفحة التقرير (إدخال يدوي)
  const row = reportRows[indicator.id];
  if (row && row.progress !== undefined) {
    return Math.max(0, Math.min(100, Number(row.progress) || 0));
  }

  return 0;
}

function getStatus(progress) {
  if (progress >= 100) return "مكتمل";
  if (progress > 0) return "قيد التنفيذ";
  return "لم يبدأ";
}

function getStatusClass(status) {
  if (status === "مكتمل") return "completed";
  if (status === "قيد التنفيذ") return "inprogress";
  return "notstarted";
}

// ─── تجميع البيانات ──────────────────────────────────────────────────────────
function flattenAll() {
  const items = [];
  domains.forEach(domain => {
    domain.standards.forEach(standard => {
      standard.indicators.forEach(indicator => {
        const progress = getIndicatorProgress(indicator);
        const status = getStatus(progress);
        items.push({
          id: indicator.id,
          title: indicator.title,
          domainId: domain.id,
          domainName: domain.name,
          standardId: standard.id,
          standardName: standard.name,
          progress,
          status
        });
      });
    });
  });
  return items;
}

const allIndicators = flattenAll();
const totalCount = allIndicators.length;
const completedItems = allIndicators.filter(i => i.status === "مكتمل");
const inProgressItems = allIndicators.filter(i => i.status === "قيد التنفيذ");
const notStartedItems = allIndicators.filter(i => i.status === "لم يبدأ");
const overallAvgProgress = totalCount > 0
  ? Math.round(allIndicators.reduce((s, i) => s + i.progress, 0) / totalCount)
  : 0;
const completionRate = totalCount > 0
  ? Math.round((completedItems.length / totalCount) * 100)
  : 0;

// ─── أدوات مساعدة ────────────────────────────────────────────────────────────
function esc(text) {
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function todayGregorian() {
  return new Date().toLocaleDateString("ar-SA", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });
}

function todayHijri() {
  return new Date().toLocaleDateString("ar-SA-u-ca-islamic", {
    year: "numeric", month: "long", day: "numeric"
  });
}

// ─── ملء الترويسة ───────────────────────────────────────────────────────────
document.getElementById("regionDisplay").textContent = regionName;
document.getElementById("schoolDisplay").textContent = schoolName;
document.getElementById("reportDate").textContent = todayGregorian();
document.getElementById("reportDateHijri").textContent = todayHijri();
document.getElementById("footerDate").textContent = todayGregorian();

// ─── الملخص التنفيذي ────────────────────────────────────────────────────────
(function renderSummary() {
  const grid = document.getElementById("summaryGrid");
  const cards = [
    { label: "إجمالي المؤشرات", value: totalCount, cls: "total-v", cardCls: "card-total" },
    { label: "مؤشرات مكتملة", value: completedItems.length, cls: "completed-v", cardCls: "card-completed" },
    { label: "مؤشرات قيد التنفيذ", value: inProgressItems.length, cls: "inprogress-v", cardCls: "card-inprogress" },
    { label: "مؤشرات لم تبدأ", value: notStartedItems.length, cls: "notstarted-v", cardCls: "card-notstarted" },
    { label: "نسبة الإنجاز الكلية", value: completionRate + "%", cls: "rate-v", cardCls: "card-rate",
      sub: `(${completedItems.length} من ${totalCount} مكتمل)` },
    { label: "متوسط التقدم", value: overallAvgProgress + "%", cls: "rate-v", cardCls: "card-rate",
      sub: "المتوسط العام لجميع المؤشرات" },
    { label: "عدد المجالات", value: domains.length, cls: "total-v", cardCls: "card-total" },
    { label: "عدد المعايير", value: domains.reduce((s, d) => s + d.standards.length, 0), cls: "total-v", cardCls: "card-total" },
  ];

  grid.innerHTML = cards.map(c => `
    <div class="sum-card ${c.cardCls}">
      <span class="sum-label">${c.label}</span>
      <span class="sum-value ${c.cls}">${c.value}</span>
      ${c.sub ? `<span class="sum-sub">${c.sub}</span>` : ""}
    </div>
  `).join("");
})();

// ─── مؤشر الإنجاز الدائري (SVG) ────────────────────────────────────────────
(function renderOverallRing() {
  const wrap = document.getElementById("overallRing");
  const detailsEl = document.getElementById("overallDetails");

  const radius = 72;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (overallAvgProgress / 100) * circumference;

  // تحديد لون الحلقة بناءً على النسبة
  let ringColor = "#b91c1c";
  if (overallAvgProgress >= 75) ringColor = "#15803d";
  else if (overallAvgProgress >= 40) ringColor = "#b45309";

  wrap.innerHTML = `
    <svg viewBox="0 0 ${radius * 2 + 24} ${radius * 2 + 24}">
      <circle class="ring-bg" cx="${radius + 12}" cy="${radius + 12}" r="${radius}" />
      <circle class="ring-fg" cx="${radius + 12}" cy="${radius + 12}" r="${radius}"
        stroke="${ringColor}"
        stroke-dasharray="${circumference}"
        stroke-dashoffset="${offset}"
        transform="rotate(-90 ${radius + 12} ${radius + 12})" />
      <text class="ring-text" x="${radius + 12}" y="${radius + 8}" text-anchor="middle" font-size="32">${overallAvgProgress}%</text>
      <text class="ring-label" x="${radius + 12}" y="${radius + 24}" text-anchor="middle">متوسط التقدم</text>
    </svg>
  `;

  detailsEl.innerHTML = `
    <div class="legend-item">
      <span class="legend-dot dot-completed"></span>
      <span>مكتمل:</span>
      <span class="legend-count" style="color:var(--pr-completed)">${completedItems.length}</span>
      <span style="color:var(--pr-text-muted);font-size:12px">(${totalCount > 0 ? Math.round(completedItems.length / totalCount * 100) : 0}%)</span>
    </div>
    <div class="legend-item">
      <span class="legend-dot dot-inprogress"></span>
      <span>قيد التنفيذ:</span>
      <span class="legend-count" style="color:var(--pr-inprogress)">${inProgressItems.length}</span>
      <span style="color:var(--pr-text-muted);font-size:12px">(${totalCount > 0 ? Math.round(inProgressItems.length / totalCount * 100) : 0}%)</span>
    </div>
    <div class="legend-item">
      <span class="legend-dot dot-notstarted"></span>
      <span>لم يبدأ:</span>
      <span class="legend-count" style="color:var(--pr-notstarted)">${notStartedItems.length}</span>
      <span style="color:var(--pr-text-muted);font-size:12px">(${totalCount > 0 ? Math.round(notStartedItems.length / totalCount * 100) : 0}%)</span>
    </div>
  `;
})();

// ─── بطاقات المجالات الأربعة ─────────────────────────────────────────────────
(function renderDomains() {
  const grid = document.getElementById("domainsGrid");

  grid.innerHTML = domains.map(domain => {
    const domainIndicators = allIndicators.filter(i => i.domainId === domain.id);
    const total = domainIndicators.length;
    const completed = domainIndicators.filter(i => i.status === "مكتمل").length;
    const inProg = domainIndicators.filter(i => i.status === "قيد التنفيذ").length;
    const notStart = domainIndicators.filter(i => i.status === "لم يبدأ").length;
    const avgProg = total > 0
      ? Math.round(domainIndicators.reduce((s, i) => s + i.progress, 0) / total)
      : 0;

    return `
      <div class="domain-card">
        <div class="dc-header">
          <div class="dc-name">${esc(domain.name)}</div>
          <div class="dc-pct">${avgProg}%</div>
        </div>
        <div class="dc-bar-track">
          <div class="dc-bar-fill" style="width:${avgProg}%"></div>
        </div>
        <div class="dc-stats">
          <span class="dc-stat"><span class="dc-dot c"></span> مكتمل: <strong class="dc-stat-num">${completed}</strong></span>
          <span class="dc-stat"><span class="dc-dot p"></span> قيد التنفيذ: <strong class="dc-stat-num">${inProg}</strong></span>
          <span class="dc-stat"><span class="dc-dot n"></span> لم يبدأ: <strong class="dc-stat-num">${notStart}</strong></span>
          <span class="dc-stat">الإجمالي: <strong class="dc-stat-num">${total}</strong></span>
        </div>
      </div>
    `;
  }).join("");
})();

// ─── تفصيل المعايير حسب المجال ──────────────────────────────────────────────
(function renderStandards() {
  const container = document.getElementById("standardsContent");

  container.innerHTML = domains.map(domain => {
    const rows = domain.standards.map(standard => {
      const stdIndicators = allIndicators.filter(i => i.standardId === standard.id);
      const total = stdIndicators.length;
      const completed = stdIndicators.filter(i => i.status === "مكتمل").length;
      const inProg = stdIndicators.filter(i => i.status === "قيد التنفيذ").length;
      const notStart = stdIndicators.filter(i => i.status === "لم يبدأ").length;
      const avgProg = total > 0
        ? Math.round(stdIndicators.reduce((s, i) => s + i.progress, 0) / total)
        : 0;
      const compRate = total > 0 ? Math.round((completed / total) * 100) : 0;

      return `
        <tr>
          <td class="std-name-cell">${esc(standard.name)}</td>
          <td>${total}</td>
          <td style="color:var(--pr-completed);font-weight:800">${completed}</td>
          <td style="color:var(--pr-inprogress);font-weight:800">${inProg}</td>
          <td style="color:var(--pr-notstarted);font-weight:800">${notStart}</td>
          <td>
            ${compRate}%
            <div class="std-bar-mini"><div class="std-bar-mini-fill" style="width:${compRate}%"></div></div>
          </td>
          <td>
            ${avgProg}%
            <div class="std-bar-mini"><div class="std-bar-mini-fill" style="width:${avgProg}%"></div></div>
          </td>
        </tr>
      `;
    }).join("");

    return `
      <div class="std-domain-group">
        <h3 class="std-domain-title">${esc(domain.name)}</h3>
        <table class="std-table">
          <thead>
            <tr>
              <th style="width:28%">المعيار</th>
              <th style="width:10%">المؤشرات</th>
              <th style="width:10%">مكتمل</th>
              <th style="width:10%">قيد التنفيذ</th>
              <th style="width:10%">لم يبدأ</th>
              <th style="width:16%">نسبة الاكتمال</th>
              <th style="width:16%">متوسط التقدم</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  }).join("");
})();

// ─── جدول المؤشرات المكتملة ─────────────────────────────────────────────────
(function renderCompleted() {
  const container = document.getElementById("completedIndicators");

  if (completedItems.length === 0) {
    container.innerHTML = '<div class="no-data-msg">لا توجد مؤشرات مكتملة حتى الآن.</div>';
    return;
  }

  const rows = completedItems.map((item, idx) => `
    <tr>
      <td class="ind-center">${idx + 1}</td>
      <td><span class="ind-code">${esc(item.id)}</span></td>
      <td class="ind-text-cell">${esc(item.title)}</td>
      <td class="ind-center">${esc(item.domainName)}</td>
      <td class="ind-center">${esc(item.standardName)}</td>
      <td class="ind-pct-cell" style="color:var(--pr-completed)">${item.progress}%</td>
      <td class="ind-center"><span class="status-badge badge-completed">${esc(item.status)}</span></td>
    </tr>
  `).join("");

  container.innerHTML = `
    <table class="ind-table completed-table">
      <thead>
        <tr>
          <th style="width:5%">#</th>
          <th style="width:10%">الرمز</th>
          <th style="width:33%">المؤشر</th>
          <th style="width:15%">المجال</th>
          <th style="width:15%">المعيار</th>
          <th style="width:10%">الإنجاز</th>
          <th style="width:12%">الحالة</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
})();

// ─── جدول المؤشرات قيد التنفيذ ──────────────────────────────────────────────
(function renderInProgress() {
  const container = document.getElementById("inProgressIndicators");

  if (inProgressItems.length === 0) {
    container.innerHTML = '<div class="no-data-msg">لا توجد مؤشرات قيد التنفيذ حاليًا.</div>';
    return;
  }

  const rows = inProgressItems.map((item, idx) => `
    <tr>
      <td class="ind-center">${idx + 1}</td>
      <td><span class="ind-code">${esc(item.id)}</span></td>
      <td class="ind-text-cell">${esc(item.title)}</td>
      <td class="ind-center">${esc(item.domainName)}</td>
      <td class="ind-center">${esc(item.standardName)}</td>
      <td class="ind-pct-cell" style="color:var(--pr-inprogress)">${item.progress}%</td>
      <td class="ind-center"><span class="status-badge badge-inprogress">${esc(item.status)}</span></td>
    </tr>
  `).join("");

  container.innerHTML = `
    <table class="ind-table inprogress-table">
      <thead>
        <tr>
          <th style="width:5%">#</th>
          <th style="width:10%">الرمز</th>
          <th style="width:33%">المؤشر</th>
          <th style="width:15%">المجال</th>
          <th style="width:15%">المعيار</th>
          <th style="width:10%">الإنجاز</th>
          <th style="width:12%">الحالة</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
})();

// ─── جدول المؤشرات التي لم تبدأ ─────────────────────────────────────────────
(function renderNotStarted() {
  const container = document.getElementById("notStartedIndicators");

  if (notStartedItems.length === 0) {
    container.innerHTML = '<div class="no-data-msg">جميع المؤشرات بدأ العمل عليها.</div>';
    return;
  }

  const rows = notStartedItems.map((item, idx) => `
    <tr>
      <td class="ind-center">${idx + 1}</td>
      <td><span class="ind-code">${esc(item.id)}</span></td>
      <td class="ind-text-cell">${esc(item.title)}</td>
      <td class="ind-center">${esc(item.domainName)}</td>
      <td class="ind-center">${esc(item.standardName)}</td>
      <td class="ind-center"><span class="status-badge badge-notstarted">${esc(item.status)}</span></td>
    </tr>
  `).join("");

  container.innerHTML = `
    <table class="ind-table notstarted-table">
      <thead>
        <tr>
          <th style="width:5%">#</th>
          <th style="width:10%">الرمز</th>
          <th style="width:35%">المؤشر</th>
          <th style="width:18%">المجال</th>
          <th style="width:18%">المعيار</th>
          <th style="width:14%">الحالة</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
})();

// ─── التوصيات التلقائية ──────────────────────────────────────────────────────
(function renderRecommendations() {
  const container = document.getElementById("recommendations");
  const recs = [];

  // توصيات بناءً على المجالات المتأخرة
  domains.forEach(domain => {
    const domainInds = allIndicators.filter(i => i.domainId === domain.id);
    const avgProg = domainInds.length > 0
      ? Math.round(domainInds.reduce((s, i) => s + i.progress, 0) / domainInds.length)
      : 0;
    const notStartCount = domainInds.filter(i => i.status === "لم يبدأ").length;

    if (notStartCount > 0 && avgProg < 30) {
      recs.push({
        priority: "high",
        text: `مجال "${domain.name}" يحتاج إلى اهتمام عاجل - يوجد ${notStartCount} مؤشر لم يبدأ العمل فيه بعد ومتوسط التقدم ${avgProg}% فقط.`
      });
    } else if (notStartCount > 0) {
      recs.push({
        priority: "med",
        text: `مجال "${domain.name}" يحتوي على ${notStartCount} مؤشر لم يبدأ بعد - يُوصى بوضع خطة عمل لتغطيتها.`
      });
    }
  });

  // توصيات بناءً على المعايير
  domains.forEach(domain => {
    domain.standards.forEach(standard => {
      const stdInds = allIndicators.filter(i => i.standardId === standard.id);
      const allNotStarted = stdInds.every(i => i.status === "لم يبدأ");
      if (allNotStarted && stdInds.length > 0) {
        recs.push({
          priority: "high",
          text: `المعيار "${standard.name}" في مجال "${domain.name}" لم يبدأ أي عمل فيه بالكامل (${stdInds.length} مؤشرات) - يتطلب خطة تنفيذ فورية.`
        });
      }
    });
  });

  // توصيات عامة
  if (overallAvgProgress < 25) {
    recs.push({
      priority: "high",
      text: "متوسط التقدم الكلي أقل من 25% - يُوصى بتشكيل فريق عمل مركز لتسريع وتيرة الإنجاز في جميع المجالات."
    });
  } else if (overallAvgProgress < 50) {
    recs.push({
      priority: "med",
      text: "متوسط التقدم الكلي أقل من 50% - يُوصى بمراجعة الجدول الزمني وإعادة توزيع المهام لضمان الاستمرار في التقدم."
    });
  }

  if (completedItems.length > 0 && completedItems.length < totalCount) {
    recs.push({
      priority: "low",
      text: `تم إنجاز ${completedItems.length} مؤشر بنجاح - يُوصى بالتأكد من توثيق جميع الشواهد والأدلة المرتبطة بالمؤشرات المكتملة.`
    });
  }

  if (inProgressItems.length > 0) {
    const lowProgress = inProgressItems.filter(i => i.progress < 30);
    if (lowProgress.length > 0) {
      recs.push({
        priority: "med",
        text: `يوجد ${lowProgress.length} مؤشر قيد التنفيذ بنسبة إنجاز أقل من 30% - يُوصى بمتابعة هذه المؤشرات وتقديم الدعم اللازم لتسريع إنجازها.`
      });
    }
  }

  if (totalCount > 0 && completedItems.length === totalCount) {
    recs.push({
      priority: "low",
      text: "تهانينا! تم إنجاز جميع المؤشرات بالكامل. يُوصى بمراجعة شاملة للتأكد من جودة التوثيق والاستعداد لزيارة فريق التقويم."
    });
  }

  if (recs.length === 0) {
    recs.push({
      priority: "low",
      text: "لا توجد توصيات حالياً. يرجى البدء في إدخال بيانات الإنجاز عبر المنصة الرئيسية أو استمارة التحقق."
    });
  }

  container.innerHTML = `
    <ul class="rec-list">
      ${recs.map((r, idx) => `
        <li class="rec-item">
          <span class="rec-icon priority-${r.priority}">${idx + 1}</span>
          <span>${esc(r.text)}</span>
        </li>
      `).join("")}
    </ul>
  `;
})();

// ─── قسم فريق التميز ─────────────────────────────────────────────────────────
(function renderTeamSection() {
  const container = document.getElementById("teamSection");

  // إذا لم يتم إدخال أي بيانات، لا نعرض القسم
  if (!principalName && !supervisorName && teamMembers.length === 0) {
    container.innerHTML = "";
    return;
  }

  const membersHtml = teamMembers.length > 0
    ? `<div class="team-grid">
        ${teamMembers.map((name, idx) => `
          <div class="team-item">
            <span class="team-num">${idx + 1}</span>
            <span>${esc(name)}</span>
          </div>
        `).join("")}
      </div>`
    : "";

  container.innerHTML = `
    <h2 class="section-heading"><span class="sh-icon">&#9670;</span> بيانات المدرسة وفريق التميز</h2>
    <div class="team-card">
      <div class="team-info-row">
        ${schoolName ? `<div class="team-info-item"><span class="team-info-label">المدرسة:</span> ${esc(schoolName)}</div>` : ""}
        ${principalName ? `<div class="team-info-item"><span class="team-info-label">قائد/ة المدرسة:</span> ${esc(principalName)}</div>` : ""}
        ${supervisorName ? `<div class="team-info-item"><span class="team-info-label">مشرف/ة التميز:</span> ${esc(supervisorName)}</div>` : ""}
      </div>
      ${teamMembers.length > 0 ? `<p class="team-card-title">أعضاء فريق التميز</p>${membersHtml}` : ""}
    </div>
  `;
})();

// ─── ملء التوقيعات بالأسماء ──────────────────────────────────────────────────
(function fillSignatures() {
  if (supervisorName) {
    document.getElementById("sigSupervisor").textContent = "الاسم: " + supervisorName;
  }
  if (principalName) {
    document.getElementById("sigPrincipal").textContent = "الاسم: " + principalName;
  }
})();

// ─── نافذة بيانات المدرسة (Modal) ───────────────────────────────────────────
(function initSchoolInfoModal() {
  const overlay = document.getElementById("schoolInfoModal");
  const openBtn = document.getElementById("schoolInfoBtn");
  const closeBtn = document.getElementById("modalCloseBtn");
  const cancelBtn = document.getElementById("modalCancelBtn");
  const saveBtn = document.getElementById("modalSaveBtn");

  const inpSchool = document.getElementById("inpSchoolName");
  const inpRegion = document.getElementById("inpRegion");
  const inpPrincipal = document.getElementById("inpPrincipal");
  const inpSupervisor = document.getElementById("inpSupervisor");
  const inpTeam = document.getElementById("inpTeamMembers");

  function openModal() {
    // ملء الحقول بالبيانات الحالية
    const info = JSON.parse(localStorage.getItem(SCHOOL_INFO_KEY) || "{}");
    inpSchool.value = info.schoolName || "";
    inpRegion.value = info.regionName || "";
    inpPrincipal.value = info.principalName || "";
    inpSupervisor.value = info.supervisorName || "";
    inpTeam.value = Array.isArray(info.teamMembers) ? info.teamMembers.join("\n") : "";
    overlay.classList.add("active");
    inpSchool.focus();
  }

  function closeModal() {
    overlay.classList.remove("active");
  }

  function saveAndClose() {
    const members = inpTeam.value
      .split("\n")
      .map(line => line.trim())
      .filter(line => line.length > 0);

    const data = {
      schoolName: inpSchool.value.trim(),
      regionName: inpRegion.value.trim(),
      principalName: inpPrincipal.value.trim(),
      supervisorName: inpSupervisor.value.trim(),
      teamMembers: members
    };

    localStorage.setItem(SCHOOL_INFO_KEY, JSON.stringify(data));

    // تحديث بيانات التقرير القديم أيضاً للتوافق
    const reportStore = JSON.parse(localStorage.getItem(REPORT_KEY) || "{}");
    if (data.schoolName) reportStore.schoolName = data.schoolName;
    if (data.regionName) reportStore.regionName = data.regionName;
    localStorage.setItem(REPORT_KEY, JSON.stringify(reportStore));

    closeModal();
    // إعادة تحميل الصفحة لتطبيق التغييرات
    location.reload();
  }

  openBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  cancelBtn.addEventListener("click", closeModal);
  saveBtn.addEventListener("click", saveAndClose);

  // إغلاق عند النقر خارج النافذة
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  // إغلاق بمفتاح Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) closeModal();
  });
})();

// ─── زر الطباعة ──────────────────────────────────────────────────────────────
document.getElementById("printBtn").addEventListener("click", () => {
  window.print();
});
