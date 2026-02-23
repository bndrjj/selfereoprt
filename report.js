const domains = [
  {
    id: 1,
    name: "الإدارة المدرسية",
    standards: [
      {
        id: "1-1",
        name: "التخطيط",
        indicators: [
          "أداء الواجبات الوظيفية",
          "التفاعل مع المجتمع المهني",
          "التفاعل مع أولياء الأمور",
          "التنوع في استراتيجيات التدريس",
          "تحسين نتائج المتعلمين",
          "إعداد وتنويع خطة التعلم",
          "توظيف التقنيات ووسائل التعليم"
        ]
      },
      {
        id: "1-2",
        name: "القيادة المدرسية",
        indicators: [
          "تفعيل الحوكمة المدرسية",
          "إدارة الموارد بكفاءة",
          "متابعة تنفيذ الخطط",
          "إدارة المخاطر والأزمات",
          "التحسين المستمر"
        ]
      }
    ]
  },
  {
    id: 2,
    name: "التعليم والتعلم",
    standards: [
      {
        id: "2-1",
        name: "بناء خبرات التعلم",
        indicators: [
          "التخطيط المبني على نواتج تعلم",
          "تنويع استراتيجيات التعليم",
          "المواءمة مع الفروق الفردية",
          "إدارة وقت التعلم",
          "تعزيز مهارات القرن 21"
        ]
      },
      {
        id: "2-2",
        name: "تقويم التعلم",
        indicators: [
          "تنوع أدوات التقويم",
          "استخدام نتائج التقويم",
          "التغذية الراجعة الفعالة",
          "ملفات إنجاز الطلبة"
        ]
      }
    ]
  }
];

const STORAGE = "report-clone-state-v2";
const defaultState = {
  domainId: domains[0].id,
  standardId: domains[0].standards[0].id,
  scores: {},
  strengths: "",
  improvements: "",
  employeeName: "",
  employeeId: "",
  employeeSpec: "",
  employeeRank: "معلم ممارس"
};

const persisted = JSON.parse(localStorage.getItem(STORAGE) || "null");
const state = { ...defaultState, ...(persisted || {}) };

const domainSelect = document.getElementById("domainSelect");
const standardSelect = document.getElementById("standardSelect");
const rowsEl = document.getElementById("rows");

function saveState() {
  localStorage.setItem(STORAGE, JSON.stringify(state));
}

function arabicToday() {
  const now = new Date();
  return now.toLocaleDateString("ar-SA-u-ca-islamic", {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
}

document.getElementById("todayLine").textContent = arabicToday();

function activeDomain() {
  return domains.find((d) => d.id === Number(state.domainId)) || domains[0];
}

function activeStandard() {
  const domain = activeDomain();
  return domain.standards.find((s) => s.id === state.standardId) || domain.standards[0];
}

function indicatorKey(idx) {
  return `${activeStandard().id}.${idx}`;
}

function scoreFor(idx) {
  return Number(state.scores[indicatorKey(idx)] || 3);
}

function weightList(count) {
  const base = Math.floor(100 / count);
  const rem = 100 - base * count;
  return Array.from({ length: count }).map((_, i) => base + (i < rem ? 1 : 0));
}

function weightedValue(score, weight) {
  return ((score / 5) * weight).toFixed(2);
}

function performanceLabel(percent) {
  if (percent >= 90) return "متميز";
  if (percent >= 80) return "متقدم";
  if (percent >= 70) return "متقن";
  if (percent >= 60) return "بحاجة إلى تطوير";
  return "منخفض";
}

function fillSelectors() {
  domainSelect.innerHTML = domains.map((d) => `<option value="${d.id}">${d.name}</option>`).join("");
  domainSelect.value = String(state.domainId);

  const standards = activeDomain().standards;
  standardSelect.innerHTML = standards.map((s) => `<option value="${s.id}">${s.name}</option>`).join("");
  if (!standards.some((s) => s.id === state.standardId)) state.standardId = standards[0].id;
  standardSelect.value = state.standardId;
}

function renderRows() {
  const indicators = activeStandard().indicators;
  const weights = weightList(indicators.length);

  rowsEl.innerHTML = indicators
    .map((item, idx) => {
      const score = scoreFor(idx);
      const weight = weights[idx];
      return `
      <tr>
        <td class="item-cell">${idx + 1} — ${item}</td>
        <td>${weight}%</td>
        <td>
          <select class="score-select" data-idx="${idx}">
            ${[1, 2, 3, 4, 5].map((n) => `<option value="${n}" ${score === n ? "selected" : ""}>${n}</option>`).join("")}
          </select>
        </td>
        <td>${weightedValue(score, weight)}</td>
      </tr>`;
    })
    .join("");

  rowsEl.querySelectorAll(".score-select").forEach((select) => {
    select.addEventListener("change", () => {
      state.scores[indicatorKey(Number(select.dataset.idx))] = Number(select.value);
      saveState();
      render();
    });
  });

  const weightedTotal = indicators.reduce((sum, _item, idx) => {
    const weight = weights[idx];
    return sum + (scoreFor(idx) / 5) * weight;
  }, 0);

  const avg = indicators.reduce((sum, _item, idx) => sum + scoreFor(idx), 0) / indicators.length;
  const percent = Math.round(weightedTotal);

  document.getElementById("totalWeight").textContent = "100%";
  document.getElementById("avgScore").textContent = avg.toFixed(2);
  document.getElementById("weightedScore").textContent = weightedTotal.toFixed(2);
  document.getElementById("gradePercent").textContent = `%${percent}`;
  document.getElementById("overallPercent").textContent = `%${percent}`;
  document.getElementById("performanceLevel").textContent = performanceLabel(percent);
}

function bindInputs() {
  ["employeeName", "employeeId", "employeeSpec", "employeeRank", "strengths", "improvements"].forEach((id) => {
    const el = document.getElementById(id);
    el.value = state[id] || "";
    el.addEventListener("input", () => {
      state[id] = el.value;
      saveState();
    });
  });
}

function render() {
  fillSelectors();
  renderRows();
}

domainSelect.addEventListener("change", () => {
  state.domainId = Number(domainSelect.value);
  state.standardId = activeDomain().standards[0].id;
  saveState();
  render();
});

standardSelect.addEventListener("change", () => {
  state.standardId = standardSelect.value;
  saveState();
  render();
});

document.getElementById("saveBtn").addEventListener("click", () => {
  saveState();
  alert("تم حفظ البيانات بنجاح");
});

document.getElementById("clearBtn").addEventListener("click", () => {
  if (!confirm("هل تريد مسح جميع بيانات التقرير؟")) return;
  localStorage.removeItem(STORAGE);
  location.reload();
});

document.getElementById("printBtn").addEventListener("click", () => window.print());

document.getElementById("exportBtn").addEventListener("click", () => {
  const popup = window.open("", "_blank", "width=1100,height=800");
  if (!popup) return;
  popup.document.write(`
    <html lang="ar" dir="rtl"><head><meta charset="UTF-8"><title>تقرير التصدير</title>
    <style>body{font-family:Tajawal,sans-serif;padding:20px;background:#f6f8f7;color:#155a55}table{width:100%;border-collapse:collapse}th,td{border:1px solid #bcd2ce;padding:8px;text-align:center}th{background:#1a8079;color:#fff}</style>
    </head><body>
    <h2>تقرير التصدير - ${activeDomain().name} / ${activeStandard().name}</h2>
    <p>الموظف: ${state.employeeName || "—"} | الهوية: ${state.employeeId || "—"}</p>
    ${document.querySelector("table").outerHTML}
    <p><strong>الدرجة النسبية:</strong> ${document.getElementById("gradePercent").textContent} — <strong>التقدير:</strong> ${document.getElementById("performanceLevel").textContent}</p>
    <p><strong>نقاط القوة:</strong> ${state.strengths || "—"}</p>
    <p><strong>مجالات التحسين:</strong> ${state.improvements || "—"}</p>
    </body></html>
  `);
  popup.document.close();
});

const helpDialog = document.getElementById("helpDialog");
document.getElementById("helpBtn").addEventListener("click", () => helpDialog.showModal());
document.getElementById("closeHelp").addEventListener("click", () => helpDialog.close());

bindInputs();
render();
