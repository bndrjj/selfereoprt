const indicatorTexts = {
  "1-1": [
    ["1-1-1-1", "تضع المدرسة خطة تشغيلية مكتملة العناصر وفق أهداف تطويرية محددة."],
    ["1-1-1-2", "تتابع المدرسة تنفيذ خطتها وتطورها بما يضمن تحقيق أهدافها."]
  ],
  "1-2": [
    ["1-2-1-1", "تعزز المدرسة القيم الإسلامية والهوية الوطنية."],
    ["1-2-1-2", "تلتزم المدرسة بقيم مهنة التعليم وأخلاقيتها."],
    ["1-2-1-3", "توفر المدرسة مناخاً آمناً للتعلم والنمو نفسياً واجتماعياً."],
    ["1-2-1-4", "تنشر المدرسة الوعي بقواعد السلوك والمواظبة وتتابع تطبيقها."],
    ["1-2-1-5", "توفر المدرسة برامج وأنشطة تربوية داعمة للسلوك الإيجابي."],
    ["1-2-1-6", "توفر المدرسة برامج وأنشطة إثرائية لتطوير مواهب المتعلمين وتهيئتهم للمستقبل."]
  ],
  "1-3": [
    ["1-3-1-1", "تعزز المدرسة العمل التعاوني والعلاقات الإيجابية والتعاون في المجتمع."],
    ["1-3-1-2", "تعزز المدرسة مشاركة الأسرة في تعلم أبنائها والتحضير لمستقبلهم."],
    ["1-3-1-3", "تعزز المدرسة الشراكة المجتمعية لدعم التعلم والتأثير الإيجابي في المجتمع المحلي."]
  ],
  "1-4": [
    ["1-4-1-1", "تشجع المدرسة منسوبيها للحصول على الرخصة المهنية."],
    ["1-4-1-5", "تدعم المدرسة التطوير المهني لمنسوبيها وفقًا لنتائج تقويم الأداء الوظيفي واحتياجاتهم."],
    ["1-4-1-6", "تطبق المدرسة التقويم الذاتي المبني على المعايير المعتمدة من الهيئة."],
    ["1-4-1-7", "تنفذ المدرسة خطة التحسين بناء على نتائج التقويم المدرسي وتتابعها."]
  ],
  "2-1": [
    ["2-1-1-1", "توفر المدرسة فرصًا متكافئة للتعلم تلبي احتياجات المتعلمين ومنهم ذوو الإعاقة والموهوبون."],
    ["2-1-1-2", "تدعم المدرسة تنفيذ المناهج لتحقيق نواتج التعلم المستهدفة وفق الخطة الدراسية."],
    ["2-1-1-3", "تنوع المدرسة في إستراتيجيات التدريس لتلبية احتياجات المتعلمين، ودعم تعلمهم."],
    ["2-1-1-4", "تفعّل المدرسة التعلم الإلكتروني؛ لتلبية احتياجات المتعلمين، ودعم تعلمهم."],
    ["2-1-1-5", "توفر المدرسة أنشطة تعلم تطبيقية ترتبط بحياة المتعلمين (مشاريع تعلمية تطبيقية)."],
    ["2-1-1-6", "تنمي المدرسة المهارات القرائية والعددية الأساسية لدى المتعلمين."],
    ["2-1-1-7", "تنمي المدرسة مهارات التفكير العليا لدى المتعلمين."],
    ["2-1-1-8", "تنمي المدرسة المهارات العاطفية والاجتماعية لدى المتعلمين."],
    ["2-1-1-9", "تنمي المدرسة المهارات الرقمية لدى المتعلمين."],
    ["2-1-1-10", "تعزز المدرسة دافعية المتعلمين للتعلم والاستمتاع به."]
  ],
  "2-2": [
    ["2-2-1-1", "تقوم المدرسة أداء المتعلمين باستخدام أساليب وأدوات متنوعة وفاعلة."],
    ["2-2-1-2", "تحلل المدرسة نتائج التقويم وتوظفها في تحسين نواتج التعلم بانتظام."],
    ["2-2-1-3", "تقدم المدرسة التغذية الراجعة للمتعلمين بانتظام."]
  ],
  "3-1": [
    ["3-1-1-1", "يحقق المتعلمون نتائج متقدمة في مجال القراءة وفقًا للاختبارات الوطنية."],
    ["3-1-1-2", "يحقق المتعلمون نتائج متقدمة في مجال الرياضيات وفقًا للاختبارات الوطنية."],
    ["3-1-1-3", "يحقق المتعلمون نتائج متقدمة في مجال العلوم وفقًا للاختبارات الوطنية."],
    ["3-1-1-4", "يحقق المتعلمون تقدمًا في مجال القراءة قياسًا على مستوى أداء المدرسة السابق في الاختبارات الوطنية."],
    ["3-1-1-5", "يحقق المتعلمون تقدمًا في مجال الرياضيات قياسًا على مستوى أداء المدرسة السابق في الاختبارات الوطنية."],
    ["3-1-1-6", "يحقق المتعلمون تقدمًا في مجال العلوم قياسًا على مستوى أداء المدرسة السابق في الاختبارات الوطنية."]
  ],
  "3-2": [
    ["3-2-1-1", "يظهر المتعلمون الاعتزاز بالقيم والهوية الوطنية."],
    ["3-2-1-2", "يظهر المتعلمون اتجاهات إيجابية نحو ذواتهم."],
    ["3-2-1-3", "يظهر المتعلمون التزامًا بالممارسات الصحية السليمة."],
    ["3-2-1-4", "يشارك المتعلمون في الأنشطة المجتمعية والأعمال التطوعية."],
    ["3-2-1-5", "يلتزم المتعلمون بقواعد السلوك والمواظبة والانضباط المدرسي."]
  ],
  "4-1": [
    ["4-1-1-1", "تنظيم مبنى المدرسة ملائم لعدد المتعلمين والمرحلة العمرية."],
    ["4-1-1-2", "تتوافر فصول ومعامل ملائمة للعملية التعليمية تلبي احتياجات المتعلمين ومنهم ذوو الإعاقة."],
    ["4-1-1-3", "تلبي المرافق والخدمات المساندة احتياجات المتعلمين ومنهم ذوو الإعاقة."]
  ],
  "4-2": [
    ["4-2-1-1", "تتوافر في فصول المدرسة ومعاملها وجميع مرافقها متطلبات الأمن والسلامة."],
    ["4-2-1-2", "تعمل المدرسة على صيانة جميع مرافق المبنى وتجهيزاته بانتظام."],
    ["4-2-1-3", "تعمل المدرسة على نظافة المبنى المدرسي وجميع مرافقه بانتظام."]
  ]
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
    id: 1,
    name: "الإدارة المدرسية",
    standards: [
      { id: "1-1", name: "التخطيط", indicators: makeIndicators("1-1") },
      { id: "1-2", name: "قيادة العملية التعليمية", indicators: makeIndicators("1-2") },
      { id: "1-3", name: "المجتمع المدرسي", indicators: makeIndicators("1-3") },
      { id: "1-4", name: "التطوير المؤسسي", indicators: makeIndicators("1-4") }
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
      { id: "3-2", name: "التطور الشخصي والصحي والاجتماعي", indicators: makeIndicators("3-2") }
    ]
  },
  {
    id: 4,
    name: "البيئة المدرسية",
    standards: [
      { id: "4-1", name: "المبنى المدرسي", indicators: makeIndicators("4-1") },
      { id: "4-2", name: "الأمن والسلامة", indicators: makeIndicators("4-2") }
    ]
  }
];

const storageKey = "school-quality-tracker";
const persisted = JSON.parse(localStorage.getItem(storageKey) || "{}");
const state = {
  domain: null,
  standard: null,
  selectedIndicator: null,
  checks: persisted.checks || {}
};

const dashboardEl = document.getElementById("dashboard");
const backupPanelEl = document.getElementById("backup-panel");
const breadcrumbsEl = document.getElementById("breadcrumbs");
const listViewEl = document.getElementById("list-view");
const detailViewEl = document.getElementById("detail-view");

function save() {
  localStorage.setItem(storageKey, JSON.stringify({ checks: state.checks }));
}

function createBackupPayload() {
  return {
    version: 1,
    app: "school-quality-tracker",
    exportedAt: new Date().toISOString(),
    checks: state.checks
  };
}

function normalizeChecks(rawChecks) {
  const normalized = {};
  if (!rawChecks || typeof rawChecks !== "object") return normalized;

  for (const [indicatorId, value] of Object.entries(rawChecks)) {
    const evidence = Array.isArray(value?.evidence) ? [...new Set(value.evidence.filter(Number.isInteger))] : [];
    const documents = Array.isArray(value?.documents) ? [...new Set(value.documents.filter(Number.isInteger))] : [];
    normalized[indicatorId] = {
      evidence: evidence.sort((a, b) => a - b),
      documents: documents.sort((a, b) => a - b)
    };
  }

  return normalized;
}

function restoreFromBackupPayload(payload) {
  if (!payload || typeof payload !== "object" || !payload.checks || typeof payload.checks !== "object") {
    throw new Error("ملف النسخة الاحتياطية غير صالح.");
  }

  state.checks = normalizeChecks(payload.checks);
  save();
  render();
}

function downloadBackupFile() {
  const payload = createBackupPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);
  link.href = url;
  link.download = `school-quality-backup-${date}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function renderBackupPanel() {
  backupPanelEl.innerHTML = `
    <h2>حفظ ومشاركة التقدم</h2>
    <p class="backup-note">احفظ نسخة احتياطية كاملة من جميع المؤشرات ثم استعدها لاحقًا على أي جهاز أو مع أي عضو في الفريق.</p>
    <div class="backup-actions">
      <button class="backup-btn" data-backup="download">تنزيل نسخة احتياطية (JSON)</button>
      <label class="backup-btn backup-btn-outline" for="backup-file-input">استعادة نسخة من ملف</label>
      <input id="backup-file-input" type="file" accept="application/json" hidden />
    </div>
    <p id="backup-status" class="backup-status" aria-live="polite"></p>
  `;

  const statusEl = backupPanelEl.querySelector("#backup-status");

  backupPanelEl.querySelector('[data-backup="download"]')?.addEventListener("click", () => {
    downloadBackupFile();
    statusEl.textContent = "✅ تم تنزيل النسخة الاحتياطية بنجاح. شارك الملف مع الفريق لاستعادة نفس التقدم.";
  });

  backupPanelEl.querySelector("#backup-file-input")?.addEventListener("change", async (event) => {
    const [file] = event.target.files || [];
    if (!file) return;

    try {
      const content = await file.text();
      const payload = JSON.parse(content);
      restoreFromBackupPayload(payload);
      statusEl.textContent = "✅ تم استعادة النسخة الاحتياطية وتحديث جميع المؤشرات.";
    } catch (error) {
      statusEl.textContent = `❌ فشل الاستعادة: ${error.message || "تحقق من صحة الملف"}`;
    } finally {
      event.target.value = "";
    }
  });
}

function flattenIndicators() {
  return domains.flatMap((d) =>
    d.standards.flatMap((s) =>
      s.indicators.map((i) => ({ ...i, domainName: d.name, standardName: s.name }))
    )
  );
}

function findIndicatorById(indicatorId) {
  for (const domain of domains) {
    for (const standard of domain.standards) {
      const indicator = standard.indicators.find((item) => item.id === indicatorId);
      if (indicator) return indicator;
    }
  }
  return null;
}

function completionRate(indicator) {
  const totalItems = indicator.evidenceGuide.length + indicator.documentsGuide.length;
  if (totalItems === 0) return 0;
  return Math.round((providedCount(indicator.id) / totalItems) * 100);
}

function statusFromCompletion(rate) {
  if (rate === 0) return "لم يبدأ";
  if (rate < 90) return "قيد التنفيذ";
  if (rate < 100) return "مكتملة";
  return "منجز";
}

function statusBadge(id) {
  const indicator = findIndicatorById(id);
  if (!indicator) return "لم يبدأ";
  return statusFromCompletion(completionRate(indicator));
}

function standardStats(standard) {
  const stats = { total: standard.indicators.length, done: 0, inProgress: 0, pending: 0 };

  standard.indicators.forEach((indicator) => {
    const status = statusFromCompletion(completionRate(indicator));
    if (status === "منجز" || status === "مكتملة") stats.done += 1;
    else if (status === "قيد التنفيذ") stats.inProgress += 1;
    else stats.pending += 1;
  });

  const status = stats.done === stats.total ? "done" : stats.inProgress > 0 || stats.done > 0 ? "in-progress" : "pending";
  return { ...stats, status };
}

function calcLevel(count) {
  if (count <= 2) return { cls: "level-low", text: "🔴 متحقق بدرجة منخفضة" };
  if (count <= 4) return { cls: "level-med", text: "🟠 متحقق بدرجة متوسطة" };
  if (count === 5) return { cls: "level-high", text: "🟢 متحقق بدرجة مرتفعة" };
  return { cls: "level-vhigh", text: "🔵 متحقق بدرجة مرتفعة جداً" };
}

function levelCardMeta(level) {
  const label = level.text.replace(/^[^\s]+\s*/, "");
  if (level.cls === "level-low") return { label, cls: "indicator-level-low", dot: "dot-low" };
  if (level.cls === "level-med") return { label, cls: "indicator-level-med", dot: "dot-med" };
  if (level.cls === "level-high") return { label, cls: "indicator-level-high", dot: "dot-high" };
  return { label, cls: "indicator-level-vhigh", dot: "dot-vhigh" };
}

function getChecks(indicatorId) {
  return state.checks[indicatorId] || { evidence: [], documents: [] };
}

function providedCount(indicatorId) {
  const c = getChecks(indicatorId);
  return (c.evidence?.length || 0) + (c.documents?.length || 0);
}

function renderDashboard() {
  const all = flattenIndicators();
  const total = all.length;
  const done = all.filter((i) => statusBadge(i.id) === "منجز").length;
  const almostDone = all.filter((i) => statusBadge(i.id) === "مكتملة").length;
  const inProgress = all.filter((i) => statusBadge(i.id) === "قيد التنفيذ").length;
  const pending = all.filter((i) => statusBadge(i.id) === "لم يبدأ").length;
  const progress = total ? Math.round(all.reduce((sum, indicator) => sum + completionRate(indicator), 0) / total) : 0;

  dashboardEl.innerHTML = `
    <div class="stats">
      <div class="stat-box"><h3>${total}</h3><p>إجمالي المؤشرات</p></div>
      <div class="stat-box"><h3>${done}</h3><p>منجز</p></div>
      <div class="stat-box"><h3>${almostDone}</h3><p>مكتملة (90%+)</p></div>
      <div class="stat-box"><h3>${inProgress}</h3><p>قيد التنفيذ</p></div>
      <div class="stat-box"><h3>${pending}</h3><p>لم يبدأ</p></div>
      <div class="gauge">
        <p>نسبة الإنجاز الكلية</p>
        <div class="bar"><span style="width:${progress}%"></span></div>
        <strong>${progress}%</strong>
      </div>
    </div>
  `;
}

function renderBreadcrumbs() {
  const crumbs = [
    `<button data-step="home">المجالات</button>`,
    state.domain ? `<button data-step="domain">${state.domain.name}</button>` : "",
    state.standard ? `<span>${state.standard.name}</span>` : ""
  ].filter(Boolean);
  breadcrumbsEl.innerHTML = crumbs.join("<i>←</i>");

  breadcrumbsEl.querySelector('[data-step="home"]')?.addEventListener("click", () => {
    state.domain = null;
    state.standard = null;
    state.selectedIndicator = null;
    render();
  });

  breadcrumbsEl.querySelector('[data-step="domain"]')?.addEventListener("click", () => {
    state.standard = null;
    state.selectedIndicator = null;
    render();
  });
}

function renderDomains() {
  listViewEl.innerHTML = `
    <h2>الطبقة الأولى: المجالات الرئيسية</h2>
    <div class="grid">${domains
      .map(
        (d) => `<article class="item-card">
          <h3>${d.name}</h3>
          <p>${d.standards.length} معيار</p>
          <button data-domain="${d.id}">عرض المعايير</button>
        </article>`
      )
      .join("")}</div>`;

  listViewEl.querySelectorAll("[data-domain]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.domain = domains.find((d) => d.id === Number(btn.dataset.domain));
      state.standard = null;
      state.selectedIndicator = null;
      render();
    });
  });
}

function renderStandards() {
  listViewEl.innerHTML = `
    <h2>الطبقة الثانية: معايير مجال ${state.domain.name}</h2>
    <div class="grid">${state.domain.standards
      .map((s) => {
        const stats = standardStats(s);
        const statusText = stats.status === "done" ? "مكتمل" : stats.status === "in-progress" ? "قيد التنفيذ" : "لم يبدأ";
        return `<article class="item-card standard-card">
          <h3>
            <span class="standard-status-dot standard-status-${stats.status}" title="${statusText}"></span>
            ${s.name}
          </h3>
          <p>${stats.total} مؤشر</p>
          <div class="standard-stats">
            <span class="standard-stat">الإجمالي: <strong>${stats.total}</strong></span>
            <span class="standard-stat">المكتمل: <strong>${stats.done}</strong></span>
            <span class="standard-stat">غير المكتمل: <strong>${stats.inProgress}</strong></span>
            <span class="standard-stat">لم يبدأ: <strong>${stats.pending}</strong></span>
          </div>
          <button data-standard="${s.id}">عرض المؤشرات</button>
        </article>`;
      })
      .join("")}</div>`;

  listViewEl.querySelectorAll("[data-standard]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.standard = state.domain.standards.find((s) => s.id === btn.dataset.standard);
      state.selectedIndicator = null;
      render();
    });
  });
}

function renderIndicators() {
  const selectedId = state.selectedIndicator?.id;
  const indicators = state.standard.indicators;
  const selectedIndex = indicators.findIndex((indicator) => indicator.id === selectedId);
  const isFocusedMode = selectedIndex !== -1;

  const indicatorCardTemplate = (i) => {
    const score = providedCount(i.id);
    const level = calcLevel(score);
    const levelMeta = levelCardMeta(level);
    const completion = completionRate(i);
    const status = statusBadge(i.id);

    return `<article class="item-card">
      <section class="indicator-card-head">
        <p class="code indicator-code">${i.id}</p>
        <h3 class="indicator-heading">${i.title}</h3>
      </section>
      <section class="indicator-card-foot">
        <div class="indicator-progress-row">
          <span class="indicator-chip indicator-chip-status">${status}</span>
          <span class="indicator-chip indicator-chip-label">نسبة الإنجاز</span>
          <span class="indicator-chip indicator-chip-value">%${completion}</span>
        </div>
        <div class="indicator-level ${levelMeta.cls}">
          <span class="indicator-level-text">${levelMeta.label}</span>
          <span class="indicator-dot ${levelMeta.dot}"></span>
        </div>
        <button class="indicator-action" data-indicator="${i.id}">دليل قائمة التحقق للمؤشر</button>
      </section>
    </article>`;
  };

  if (isFocusedMode) {
    const selectedIndicator = indicators[selectedIndex];
    const previous = indicators[selectedIndex - 1];
    const next = indicators[selectedIndex + 1];

    listViewEl.innerHTML = `
      <h2>الطبقة الثالثة: مؤشرات معيار ${state.standard.name}</h2>
      <section class="focus-toolbar">
        <div class="focus-title-wrap">
          <span class="focus-badge">وضع التركيز</span>
          <p>تعمل الآن على مؤشر واحد فقط لسرعة الإنجاز والدقة.</p>
        </div>
        <div class="focus-actions">
          <button class="focus-btn focus-btn-outline" data-focus="back-all">العودة لعرض جميع المؤشرات</button>
          <button class="focus-btn" data-focus="prev" ${!previous ? "disabled" : ""}>المؤشر السابق</button>
          <button class="focus-btn" data-focus="next" ${!next ? "disabled" : ""}>المؤشر التالي</button>
        </div>
      </section>
      <div class="grid indicators-grid focused-grid">${indicatorCardTemplate(selectedIndicator)}</div>`;

    listViewEl.querySelector('[data-focus="back-all"]')?.addEventListener("click", () => {
      state.selectedIndicator = null;
      render();
    });

    listViewEl.querySelector('[data-focus="prev"]')?.addEventListener("click", () => {
      if (!previous) return;
      state.selectedIndicator = previous;
      render();
    });

    listViewEl.querySelector('[data-focus="next"]')?.addEventListener("click", () => {
      if (!next) return;
      state.selectedIndicator = next;
      render();
    });
  } else {
    listViewEl.innerHTML = `
      <h2>الطبقة الثالثة: مؤشرات معيار ${state.standard.name}</h2>
      <div class="grid indicators-grid">${indicators.map((i) => indicatorCardTemplate(i)).join("")}</div>`;
  }

  listViewEl.querySelectorAll("[data-indicator]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.selectedIndicator = state.standard.indicators.find((i) => i.id === btn.dataset.indicator);
      render();
    });
  });
}

function toggleCheck(indicatorId, type, index) {
  const record = getChecks(indicatorId);
  const set = new Set(record[type] || []);
  if (set.has(index)) set.delete(index);
  else set.add(index);
  state.checks[indicatorId] = { ...record, [type]: [...set].sort((a, b) => a - b) };
  save();
  renderIndicators();
  renderDetail();
}

function listChecks(items, selected, type, indicatorId) {
  return items
    .map(
      (item, idx) => `<label class="check-item ${selected.includes(idx) ? "active" : ""}">
        <input type="checkbox" data-check="${type}" data-idx="${idx}" ${selected.includes(idx) ? "checked" : ""}/>
        <span>${item}</span>
      </label>`
    )
    .join("");
}

function renderDetail() {
  if (!state.selectedIndicator) {
    detailViewEl.hidden = true;
    return;
  }
  const i = state.selectedIndicator;
  const checks = getChecks(i.id);
  const score = providedCount(i.id);
  const level = calcLevel(score);
  const progress = completionRate(i);

  detailViewEl.hidden = false;
  detailViewEl.innerHTML = `
    <div class="detail-progress-wrap" aria-label="نسبة إنجاز المؤشر">
      <div class="indicator-progress-summary">
        <div class="indicator-progress-track"><span style="width:${progress}%"></span></div>
        <strong class="indicator-progress-value">%${progress}</strong>
      </div>
    </div>
    <h2>${i.id}</h2>
    <p class="indicator-title">${i.title}</p>
    <div class="evidence-head">
      <span>عدد الأدلة المتوفرة: <strong>${score}</strong></span>
      <span class="pill ${level.cls}">${level.text}</span>
    </div>

    <section class="checklist-box">
      <h3>الدليل للتحقق: الشواهد</h3>
      <div class="checklist" data-wrap="evidence">${listChecks(i.evidenceGuide, checks.evidence || [], "evidence", i.id)}</div>
    </section>

    <section class="checklist-box">
      <h3>الدليل للتحقق: الوثائق</h3>
      <div class="checklist" data-wrap="documents">${listChecks(i.documentsGuide, checks.documents || [], "documents", i.id)}</div>
    </section>
  `;

  detailViewEl.querySelectorAll("input[data-check]").forEach((cb) => {
    cb.addEventListener("change", () => toggleCheck(i.id, cb.dataset.check, Number(cb.dataset.idx)));
  });
}

function render() {
  renderDashboard();
  renderBackupPanel();
  renderBreadcrumbs();

  if (!state.domain) {
    renderDomains();
    detailViewEl.hidden = true;
    return;
  }
  if (!state.standard) {
    renderStandards();
    detailViewEl.hidden = true;
    return;
  }
  renderIndicators();
  renderDetail();
}

render();
