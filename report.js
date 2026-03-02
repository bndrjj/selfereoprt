/* report.js — قائمة التحقق الشاملة للاعتماد المدرسي */

const indicators = [
  { domain: 'الإدارة المدرسية', standard: 'التخطيط', code: '1-1-1-1', text: 'تضع المدرسة خطة تشغيلية شاملة وفق أهداف تطويرية محددة.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'التخطيط', code: '1-1-1-2', text: 'تتابع المدرسة تنفيذ خطتها التشغيلية وتطورها بما يضمن تحقيق أهدافها.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'قيادة العملية التعليمية', code: '1-2-1-1', text: 'تعزز المدرسة القيم الإسلامية والهوية الوطنية.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'قيادة العملية التعليمية', code: '1-2-1-2', text: 'تطبق المدرسة قيم مهنة التعليم وأخلاقياتها، وتتابع الالتزام بها.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'قيادة العملية التعليمية', code: '1-2-1-3', text: 'تطبق المدرسة إجراءات محددة لدعم الانضباط المدرسي، وتتابع الالتزام بها.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'قيادة العملية التعليمية', code: '1-2-1-4', text: 'تنفذ المدرسة برامج وأنشطة تربوية داعمة للسلوك الإيجابي لدى المتعلمين، ومنهم ذوو الإعاقة والموهوبون وتتابعها.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'قيادة العملية التعليمية', code: '1-2-1-5', text: 'نفذت المدرسة برامج وأنشطة إثرائية لتطوير مواهب المتعلمين، وتهيئتهم للمستقبل.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'المجتمع المدرسي', code: '1-3-1-1', text: 'تعزز المدرسة بناء العلاقات الإيجابية والتعاون في المجتمع المدرسي.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'المجتمع المدرسي', code: '1-3-1-2', text: 'تعزز المدرسة مشاركة الأسرة في تعلم أبنائها، والتحضير لمستقبلهم.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'المجتمع المدرسي', code: '1-3-1-3', text: 'تعزز المدرسة الشراكة المجتمعية؛ لدعم التعلم والتأثير الإيجابي في المجتمع.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'التطوير المؤسسي', code: '1-4-1-1', text: 'توفر المدرسة كادرًا تعليميًّا مكتملًا ومؤهلًا بما يتسق مع المهام الموكلة له (المدارس الأهلية والعالمية) ولا ينطبق على المدارس الحكومية.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'التطوير المؤسسي', code: '1-4-1-2', text: 'توفر المدرسة كادرًا إداريًّا مكتملًا ومؤهلاً بما يتسق مع المهام الموكلة له (المدارس الأهلية والعالمية) ولا ينطبق على المدارس الحكومية.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'التطوير المؤسسي', code: '1-4-1-3', text: 'تظهر المدرسة ثباتًا واستدامة مالية (المدارس الأهلية والعالمية) ولا ينطبق على المدارس الحكومية.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'التطوير المؤسسي', code: '1-4-1-4', text: 'تدعم المدرسة منسوبيها للحصول على الرخصة المهنية وتتابعها.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'التطوير المؤسسي', code: '1-4-1-5', text: 'تدعم المدرسة التطوير المهني لمنسوبيها وفقًا لنتائج تقويم الأداء الوظيفي وتحليل احتياجاتهم.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'التطوير المؤسسي', code: '1-4-1-6', text: 'تطبق المدرسة التقويم الذاتي المبني على المعايير المعتمدة من الهيئة بشكل مستمر.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'التطوير المؤسسي', code: '1-4-1-7', text: 'تنفذ المدرسة خطة للتحسين بناء على نتائج التقويم المدرسي، وتتابعها.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'حقوق المتعلم وحمايته', code: '1-5-1-1', text: 'تلتزم المدرسة بالمحافظة على حقوق المتعلمين وحمايته.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'حقوق المتعلم وحمايته', code: '1-5-1-2', text: 'توفر المدرسة مناخًا آمنًا للتعلم والنمو نفسيًا واجتماعيًا.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'التعليم والتعلم', standard: 'بناء خبرات التعلم', code: '2-1-1-1', text: 'توفر المدرسة فرصًا متكافئة للتعلم تلبي احتياجات المتعلمين ومنهم ذوو الإعاقة والموهوبون.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'التعليم والتعلم', standard: 'بناء خبرات التعلم', code: '2-1-1-2', text: 'تدعم المدرسة تنفيذ المناهج؛ بما يحقق نواتج التعلم المستهدفة', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'التعليم والتعلم', standard: 'بناء خبرات التعلم', code: '2-1-1-3', text: 'تنوع المدرسة في إستراتيجيات التعليم والتعلم لتلبية احتياجات المتعلمين، ودعم تعلمهم.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'التعليم والتعلم', standard: 'بناء خبرات التعلم', code: '2-1-1-4', text: 'تفعل المدرسة التقنية الرقمية ؛ لدعم تعلم المتعلمين وتلبية احتياجاتهم', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'التعليم والتعلم', standard: 'بناء خبرات التعلم', code: '2-1-1-5', text: 'تنفذ المدرسة أنشطة تعلم تطبيقية ترتبط بحياة المتعلمين', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'التعليم والتعلم', standard: 'بناء خبرات التعلم', code: '2-1-1-6', text: 'تنمي المدرسة المهارات القرائية والعددية الاساسية لدى المتعلمين', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'التعليم والتعلم', standard: 'بناء خبرات التعلم', code: '2-1-1-7', text: 'تنمي المدرسة مهارات التفكير والبحث والابتكار لدى المتعلمين.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'التعليم والتعلم', standard: 'بناء خبرات التعلم', code: '2-1-1-8', text: 'تنمي المدرسة المهارات العاطفية الاجتماعية لدى المتعلمين', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'التعليم والتعلم', standard: 'بناء خبرات التعلم', code: '2-1-1-9', text: 'تعزز المدرسة دافعية المتعلمين للتعلم والاستمتاع به.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'التعليم والتعلم', standard: 'تقويم التعلم', code: '2-2-1-1', text: 'تطبق المدرسة أساليب وأدوات تقويم متنوعة: للكشف عن مستويات أداء المتعلمين المختلفة', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'التعليم والتعلم', standard: 'تقويم التعلم', code: '2-2-1-2', text: 'تطبق المدرسة أساليب وأدوات متنوعة : لتقويم نواتج التعلم المستهدفة في مناهج التعليم', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'التعليم والتعلم', standard: 'تقويم التعلم', code: '2-2-1-3', text: 'تحلل المدرسة نتائج التقويم وتوظفها في تحسين عمليات التعليم والتعلم والتقويم', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'التعليم والتعلم', standard: 'تقويم التعلم', code: '2-2-1-4', text: 'تقدم المدرسة التغذية الراجعة للمتعلمين وأولياء امورهم وتتابع تقدمهم بشكل مستمر', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'نواتج التعلم', standard: 'التحصيل التعليمي', code: '3-1-1-1', text: 'يحقق المتعلمون نتائج مرتفعة في مجال القراءة وفقًا للاختبارات الوطنية.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'نواتج التعلم', standard: 'التحصيل التعليمي', code: '3-1-1-2', text: 'يحقق المتعلمون نتائج مرتفعة في مجال الرياضيات وفقًا للاختبارات الوطنية.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'نواتج التعلم', standard: 'التحصيل التعليمي', code: '3-1-1-3', text: 'يحقق المتعلمون نتائج مرتفعة في مجال العلوم وفقًا للاختبارات الوطنية.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'نواتج التعلم', standard: 'التحصيل التعليمي', code: '3-1-1-4', text: 'يحقق المتعلمون تقدما في مجال القراءة قياسا على مستوى أداء المدرسة السابق في الاختبارات الوطنية', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'نواتج التعلم', standard: 'التحصيل التعليمي', code: '3-1-1-5', text: 'يحقق المتعلمون تقدما في مجال الرياضيات قياسا على مستوى أداء المدرسة السابق في الاختبارات الوطنية', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'نواتج التعلم', standard: 'التحصيل التعليمي', code: '3-1-1-6', text: 'يحقق المتعلمون تقدما في مجال العلوم قياسا على مستوى أداء المدرسة السابق في الاختبارات الوطنية', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'نواتج التعلم', standard: 'التطور الشخصي والصحي', code: '3-2-1-1', text: 'يظهر المتعلمون الاعتزاز بالقيم والهوية الوطنية', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'نواتج التعلم', standard: 'التطور الشخصي والصحي', code: '3-2-1-2', text: 'يظهر المتعلمون اتجاهات إيجابية نحو ذواتهم', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'نواتج التعلم', standard: 'التطور الشخصي والصحي', code: '3-2-1-3', text: 'يظهر المتعلمون التزاما بالممارسات الصحية السليمة.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'نواتج التعلم', standard: 'التطور الشخصي والصحي', code: '3-2-1-4', text: 'يشارك المتعلمون في الانشطة المجتمعية والاعمال التطوعية.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'نواتج التعلم', standard: 'التطور الشخصي والصحي', code: '3-2-1-5', text: 'يلتزم المتعلمون بقواعد السلوك والانضباط المدرسي.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'نواتج التعلم', standard: 'التطور الشخصي والصحي', code: '3-2-1-6', text: 'يظهر المتعلمون الاستقلالية والقدرة على التعلم الذاتي', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'نواتج التعلم', standard: 'التطور الشخصي والصحي', code: '3-2-1-7', text: 'يظهر المتعلمون اعتزازا بثقافتهم واحتراما للتنوع الثقافي في المجتمع', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'البيئة المدرسية', standard: 'المبنى المدرسي', code: '4-1-1-1', text: 'توفر المدرسة مبنى تعليمي يستوفي المواصفات والاشتراطات المعتمدة من حيث النوع والخدمات المساندة', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'البيئة المدرسية', standard: 'المبنى المدرسي', code: '4-1-1-2', text: 'تنظيم مبنى المدرسة ملائم لعدد المتعلمين وخصائص المرحلة العمرية، ومنهم ذوو الاعاقة', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'البيئة المدرسية', standard: 'المبنى المدرسي', code: '4-1-1-3', text: 'تتوافر فصول ومعامل ملائمة للعملية التعليمية تلبي احتياجات المتعلمين ومنهم ذوو الاعاقة.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'البيئة المدرسية', standard: 'المبنى المدرسي', code: '4-1-1-4', text: 'تلبي المرافق والتجهيزات والخدمات المساندة احتياجات المتعلمين ومنهم ذوو الاعاقة.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'البيئة المدرسية', standard: 'الأمن والسلامة', code: '4-2-1-1', text: 'تتوافر في مبنى المدرسة ومرافقها جميع متطلبات الامن والسلامة.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'البيئة المدرسية', standard: 'الأمن والسلامة', code: '4-2-1-2', text: 'تتابع المدرسة صيانة المبنى وجميع مرافقه وتجهيزاته بشكل دوري', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'البيئة المدرسية', standard: 'الأمن والسلامة', code: '4-2-1-3', text: 'تتابع المدرسة نظافة المبنى المدرسي وجميع مرافقه بشكل مستمر', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
];

// ─── الحالة والتخزين ───────────────────────────────────────
const STORAGE_KEY = 'accreditation-checklist-v3';
const persisted = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
const state = {
  regionName: persisted.regionName || 'الإدارة العامة للتعليم بالمنطقة الشرقية',
  schoolName: persisted.schoolName || 'اسم المدرسة هنا',
  rows: persisted.rows || {}
};

const PROGRESS_STEPS = [0, 25, 50, 75, 100];
const availOptions = ['متوفرة بالكامل', 'متوفرة جزئياً', 'غير متوفرة'];
const ownerOptions = ['فريق التميز', 'مدير المدرسة', 'المرشد الطلابي', 'رائد النشاط', 'معلمين المواد'];

const summaryEl = document.getElementById('summary');
const checklistEl = document.getElementById('checklist-container');

// ─── دوال المساعدة ───────────────────────────────────────
function esc(text) {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function todayAr() {
  return new Date().toLocaleDateString('ar-SA-u-ca-islamic', {
    weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit'
  });
}

document.getElementById('todayLine').textContent = todayAr();

function renderHeaderMeta() {
  document.getElementById('regionName').textContent = state.regionName;
  document.getElementById('schoolName').textContent = state.schoolName;
}

function editHeaderValue(key, label) {
  const current = state[key] || '';
  const next = window.prompt(`تعديل ${label}`, current);
  if (next === null) return;
  const clean = next.trim();
  if (!clean) return;
  state[key] = clean;
  save();
  renderHeaderMeta();
}

// ─── منطق الحساب ───────────────────────────────────────
function toNumberInRange(value, min = 0, max = 100) {
  const parsed = Number(value);
  if (Number.isNaN(parsed)) return min;
  return Math.max(min, Math.min(max, parsed));
}

function deriveStatusFromProgress(progress) {
  if (progress >= 100) return 'مكتمل';
  if (progress > 0) return 'قيد التنفيذ';
  return 'لم يبدأ';
}

function deriveSelfEvalFromProgress(progress) {
  if (progress >= 90) return '4';
  if (progress >= 75) return '3';
  if (progress >= 50) return '2';
  return '1';
}

function rowState(code) {
  const raw = state.rows[code] || {};
  const progress = toNumberInRange(raw.progress ?? 0, 0, 100);
  return {
    progress,
    status: deriveStatusFromProgress(progress),
    availability: raw.availability || 'غير متوفرة',
    selfEval: deriveSelfEvalFromProgress(progress),
    owner: raw.owner || '',
    notes: raw.notes || ''
  };
}

function setRowValue(code, key, value) {
  const currentRaw = state.rows[code] || {};
  const nextValue = key === 'progress' ? toNumberInRange(value, 0, 100) : value;
  state.rows[code] = { ...currentRaw, [key]: nextValue };
  save();
  renderSummary();
  updateIndicatorDisplay(code);
}

function statusClass(status) {
  if (status === 'مكتمل') return 'done';
  if (status === 'قيد التنفيذ') return 'inprogress';
  return 'pending';
}

function closestProgressStep(progress) {
  return PROGRESS_STEPS.reduce((prev, curr) =>
    Math.abs(curr - progress) < Math.abs(prev - progress) ? curr : prev
  );
}

// ─── إحصاءات ───────────────────────────────────────
function getStatusStats(items) {
  const completed = items.filter((i) => rowState(i.code).status === 'مكتمل').length;
  const inProgress = items.filter((i) => rowState(i.code).status === 'قيد التنفيذ').length;
  const pending = items.filter((i) => rowState(i.code).status === 'لم يبدأ').length;
  const remaining = inProgress + pending;
  const completionRate = items.length ? Math.round((completed / items.length) * 100) : 0;
  return { completed, inProgress, pending, remaining, completionRate };
}

function getAvailabilityStats(items) {
  const full = items.filter((i) => rowState(i.code).availability === 'متوفرة بالكامل').length;
  const partial = items.filter((i) => rowState(i.code).availability === 'متوفرة جزئياً').length;
  const missing = items.filter((i) => rowState(i.code).availability === 'غير متوفرة').length;
  return { full, partial, missing };
}

// ─── دوال التصدير ───────────────────────────────────────
function buildExecutionTable(items) {
  const grouped = new Map();
  items.forEach((item) => {
    const key = `${item.domain}__${item.standard}`;
    if (!grouped.has(key)) {
      grouped.set(key, { domain: item.domain, standard: item.standard, total: 0, completed: 0, inProgress: 0, pending: 0 });
    }
    const bucket = grouped.get(key);
    bucket.total += 1;
    const status = rowState(item.code).status;
    if (status === 'مكتمل') bucket.completed += 1;
    if (status === 'قيد التنفيذ') bucket.inProgress += 1;
    if (status === 'لم يبدأ') bucket.pending += 1;
  });
  return [...grouped.values()].map((bucket) => ({
    ...bucket,
    remaining: bucket.inProgress + bucket.pending,
    completionRate: bucket.total ? Math.round((bucket.completed / bucket.total) * 100) : 0
  }));
}

function getNotCompletedIndicators(items) {
  return items
    .map((item) => ({ ...item, status: rowState(item.code).status }))
    .filter((item) => item.status !== 'مكتمل');
}

function buildProcedureReflection(items) {
  const grouped = new Map();
  items.forEach((item) => {
    const key = `${item.domain}__${item.standard}`;
    const current = rowState(item.code);
    if (!grouped.has(key)) {
      grouped.set(key, { domain: item.domain, standard: item.standard, doneCount: 0, remainingCount: 0, owners: new Set(), doneItems: [], gapItems: [] });
    }
    const bucket = grouped.get(key);
    if (current.owner) bucket.owners.add(current.owner);
    const noteText = current.notes && current.notes.trim() ? ` | الإجراء: ${current.notes.trim()}` : '';
    const baseText = `${item.code} - ${item.text}`;
    if (current.status === 'مكتمل' || current.status === 'قيد التنفيذ') {
      bucket.doneCount += 1;
      bucket.doneItems.push(`${baseText}${noteText}`);
    } else {
      bucket.remainingCount += 1;
      const evidenceState = `الحالة: ${current.status} | توفر الأدلة: ${current.availability}`;
      bucket.gapItems.push(`${baseText} | ${evidenceState}${noteText}`);
    }
  });
  return [...grouped.values()].map((row) => ({
    ...row,
    ownersText: row.owners.size ? [...row.owners].join('، ') : '-',
    doneText: row.doneItems.length ? row.doneItems.map((entry) => esc(entry)).join('<br>') : '-',
    gapText: row.gapItems.length ? row.gapItems.map((entry) => esc(entry)).join('<br>') : '-'
  }));
}

// ─── عرض شريط الملخص الإجمالي ───────────────────────────────────────
function renderSummary() {
  const stats = getStatusStats(indicators);
  const avail = getAvailabilityStats(indicators);
  const avgProgress = indicators.length
    ? Math.round(indicators.reduce((sum, i) => sum + rowState(i.code).progress, 0) / indicators.length)
    : 0;

  summaryEl.innerHTML = `
    <div class="sc"><span class="sc-v">${indicators.length}</span><span class="sc-l">إجمالي المؤشرات</span></div>
    <div class="sc sc-done"><span class="sc-v">${stats.completed}</span><span class="sc-l">مكتمل</span></div>
    <div class="sc sc-prog"><span class="sc-v">${stats.inProgress}</span><span class="sc-l">قيد التنفيذ</span></div>
    <div class="sc sc-pend"><span class="sc-v">${stats.pending}</span><span class="sc-l">لم يبدأ</span></div>
    <div class="sc sc-pct"><span class="sc-v">${stats.completionRate}%</span><span class="sc-l">نسبة الإنجاز</span></div>
    <div class="sc"><span class="sc-v">${avgProgress}%</span><span class="sc-l">متوسط الإنجاز</span></div>
    <div class="sc sc-afull"><span class="sc-v">${avail.full}</span><span class="sc-l">أدلة كاملة</span></div>
    <div class="sc sc-apart"><span class="sc-v">${avail.partial}</span><span class="sc-l">أدلة جزئية</span></div>
    <div class="sc sc-anone"><span class="sc-v">${avail.missing}</span><span class="sc-l">بدون أدلة</span></div>
  `;
}

// ─── بناء HTML لمؤشر واحد ───────────────────────────────────────
function buildIndicatorHTML(item) {
  const cur = rowState(item.code);
  const sc = statusClass(cur.status);
  const closest = closestProgressStep(cur.progress);

  const progressPills = PROGRESS_STEPS.map((val) => `
    <div class="pill">
      <input type="radio" id="prg-${item.code}-${val}" name="prg-${item.code}"
             value="${val}" data-code="${item.code}" data-key="progress"
             ${closest === val ? 'checked' : ''}>
      <label for="prg-${item.code}-${val}">${val}%</label>
    </div>`).join('');

  const availPills = availOptions.map((opt, idx) => `
    <div class="pill">
      <input type="radio" id="avl-${item.code}-${idx}" name="avl-${item.code}"
             value="${opt}" data-code="${item.code}" data-key="availability"
             ${cur.availability === opt ? 'checked' : ''}>
      <label for="avl-${item.code}-${idx}">${esc(opt)}</label>
    </div>`).join('');

  const ownerOpts = ownerOptions.map((o) =>
    `<option value="${esc(o)}" ${cur.owner === o ? 'selected' : ''}>${esc(o)}</option>`
  ).join('');

  return `
    <div class="ind-item ind-${sc}" id="ind-${item.code}">
      <div class="ind-top">
        <span class="ind-code">${esc(item.code)}</span>
        <span class="ind-text">${esc(item.text)}</span>
        <span class="ind-badge badge-${sc} js-status">${esc(cur.status)}</span>
        <span class="ind-eval js-eval">تقييم: ${esc(cur.selfEval)}</span>
      </div>
      <div class="ind-body">
        <div class="ctrl-row">
          <span class="ctrl-lbl">نسبة الإنجاز</span>
          <div class="pill-group prog-pills">${progressPills}</div>
        </div>
        <div class="ctrl-row">
          <span class="ctrl-lbl">توفر الأدلة والوثائق</span>
          <div class="pill-group avail-pills">${availPills}</div>
        </div>
        <div class="ctrl-row">
          <span class="ctrl-lbl">المسؤول</span>
          <select class="row-select" data-code="${item.code}" data-key="owner">
            <option value="">— اختر —</option>
            ${ownerOpts}
          </select>
          <span class="ctrl-lbl">ملاحظات / إجراء</span>
          <input type="text" class="notes-inp" data-code="${item.code}" data-key="notes"
                 value="${esc(cur.notes)}" placeholder="إجراء تصحيحي أو ملاحظة…">
        </div>
        <details class="ind-details">
          <summary>الشواهد والوثائق المتوقعة</summary>
          <div class="ind-details-body">
            <span><strong>الشواهد:</strong> ${esc(item.evidence)}</span>
            <span><strong>الوثائق:</strong> ${esc(item.docs)}</span>
          </div>
        </details>
      </div>
    </div>`;
}

// ─── عرض قائمة التحقق الكاملة ───────────────────────────────────────
function renderChecklist() {
  // تجميع بحسب المجال ثم المعيار
  const byDomain = new Map();
  indicators.forEach((item) => {
    if (!byDomain.has(item.domain)) byDomain.set(item.domain, new Map());
    const dm = byDomain.get(item.domain);
    if (!dm.has(item.standard)) dm.set(item.standard, []);
    dm.get(item.standard).push(item);
  });

  let html = '';
  byDomain.forEach((standards, domain) => {
    const domainItems = indicators.filter((i) => i.domain === domain);
    const ds = getStatusStats(domainItems);

    html += `
      <div class="domain-block">
        <div class="domain-hdr">
          <span class="domain-name">${esc(domain)}</span>
          <div class="domain-chips">
            <span class="dchip">${domainItems.length} مؤشر</span>
            <span class="dchip chip-done">✓ ${ds.completed} مكتمل</span>
            <span class="dchip chip-prog">◑ ${ds.inProgress} جارٍ</span>
            <span class="dchip chip-pend">○ ${ds.pending} لم يبدأ</span>
            <span class="dchip chip-pct">${ds.completionRate}%</span>
          </div>
        </div>
        <div class="domain-bar"><div class="domain-bar-fill" style="width:${ds.completionRate}%"></div></div>`;

    standards.forEach((items, standard) => {
      const ss = getStatusStats(items);
      html += `
        <div class="std-block">
          <div class="std-hdr">
            <span class="std-name">${esc(standard)}</span>
            <span class="std-stats">${items.length} مؤشر &nbsp;|&nbsp; مكتمل: ${ss.completed} &nbsp;|&nbsp; ${ss.completionRate}%</span>
          </div>
          <div class="ind-list">
            ${items.map((item) => buildIndicatorHTML(item)).join('')}
          </div>
        </div>`;
    });

    html += '</div>';
  });

  checklistEl.innerHTML = html;

  // ربط الأحداث
  checklistEl.querySelectorAll('input[type=radio]').forEach((el) => {
    el.addEventListener('change', () => setRowValue(el.dataset.code, el.dataset.key, el.value));
  });
  checklistEl.querySelectorAll('select.row-select').forEach((el) => {
    el.addEventListener('change', () => setRowValue(el.dataset.code, el.dataset.key, el.value));
  });
  checklistEl.querySelectorAll('input.notes-inp').forEach((el) => {
    el.addEventListener('input', () => setRowValue(el.dataset.code, el.dataset.key, el.value));
  });
}

// ─── تحديث عنصر مؤشر واحد بعد التعديل ───────────────────────────────────────
function updateIndicatorDisplay(code) {
  const cur = rowState(code);
  const sc = statusClass(cur.status);
  const item = document.getElementById(`ind-${code}`);
  if (!item) return;
  item.className = `ind-item ind-${sc}`;
  const badge = item.querySelector('.js-status');
  if (badge) { badge.textContent = cur.status; badge.className = `ind-badge badge-${sc} js-status`; }
  const evalEl = item.querySelector('.js-eval');
  if (evalEl) evalEl.textContent = `تقييم: ${cur.selfEval}`;
}

// ─── الدالة الرئيسية ───────────────────────────────────────
function render() {
  renderChecklist();
  renderSummary();
}

// ─── أحداث رأس الصفحة ───────────────────────────────────────
document.getElementById('editRegion')?.addEventListener('click', () => editHeaderValue('regionName', 'المنطقة التعليمية'));
document.getElementById('editSchool')?.addEventListener('click', () => editHeaderValue('schoolName', 'اسم المدرسة'));
renderHeaderMeta();

// ─── أزرار شريط الأدوات ───────────────────────────────────────
document.getElementById('saveBtn').addEventListener('click', () => {
  save();
  alert('تم حفظ التحديثات بنجاح.');
});

document.getElementById('printBtn').addEventListener('click', () => window.print());

document.getElementById('clearBtn').addEventListener('click', () => {
  if (!confirm('هل تريد مسح جميع بيانات الاستمارة؟')) return;
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
});

// ─── زر التصدير (التقرير الاحترافي المستقل) ───────────────────────────────────────
document.getElementById('exportBtn').addEventListener('click', () => {
  const items = indicators.slice();
  const stats = getStatusStats(items);
  const executionTable = buildExecutionTable(items);
  const notCompleted = getNotCompletedIndicators(items);
  const availabilityStats = getAvailabilityStats(items);
  const proceduresReflection = buildProcedureReflection(items);
  const exportDate = todayAr();
  const exportDateTime = new Date().toLocaleString('en-US', {
    year: '2-digit', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: '2-digit', hour12: true
  });

  let lastStandard = null;
  const rowsHtml = items.map((item) => {
    const current = rowState(item.code);
    const standardRow = item.standard !== lastStandard
      ? `<tr class="row-standard"><td colspan="8">المعيار: ${esc(item.standard)}</td></tr>`
      : '';
    lastStandard = item.standard;
    return `
      ${standardRow}
      <tr>
        <td class="col-indicator">
          <div class="code-box">${esc(item.code)}</div>
          <div class="ind-text">${esc(item.text)}</div>
        </td>
        <td class="small-text">${esc(item.evidence)}</td>
        <td class="small-text">${esc(item.docs)}</td>
        <td class="center-text">${current.progress}%</td>
        <td class="center-text">${esc(current.status)}</td>
        <td class="center-text">${esc(current.availability)}</td>
        <td class="center-text">${esc(current.selfEval)}</td>
        <td class="small-text">${esc(current.notes || '-')}</td>
      </tr>`;
  }).join('');

  const executionTableHtml = executionTable.length
    ? executionTable.map((row) => `
        <tr>
          <td>${esc(row.domain)}</td>
          <td>${esc(row.standard)}</td>
          <td class="center-text">${row.total}</td>
          <td class="center-text">${row.completed}</td>
          <td class="center-text">${row.inProgress}</td>
          <td class="center-text">${row.pending}</td>
          <td class="center-text">${row.remaining}</td>
          <td class="center-text">${row.completionRate}%</td>
        </tr>`).join('')
    : '<tr><td colspan="8" class="center-text">لا توجد بيانات.</td></tr>';

  const notCompletedHtml = notCompleted.length
    ? notCompleted.map((item) => `
        <tr>
          <td class="center-text">${esc(item.code)}</td>
          <td>${esc(item.text)}</td>
          <td>${esc(item.domain)}</td>
          <td>${esc(item.standard)}</td>
          <td class="center-text">${esc(item.status)}</td>
        </tr>`).join('')
    : '<tr><td colspan="5" class="center-text">جميع المؤشرات مكتملة.</td></tr>';

  const proceduresReflectionHtml = proceduresReflection.length
    ? proceduresReflection.map((row) => `
        <tr>
          <td>${esc(row.domain)}</td>
          <td>${esc(row.standard)}</td>
          <td class="center-text">${row.doneCount}</td>
          <td class="center-text">${row.remainingCount}</td>
          <td>${esc(row.ownersText)}</td>
          <td class="small-text">${row.doneText}</td>
          <td class="small-text">${row.gapText}</td>
        </tr>`).join('')
    : '<tr><td colspan="7" class="center-text">لا توجد بيانات.</td></tr>';

  const popup = window.open('', '_blank', 'width=1280,height=900');
  if (!popup) return;

  popup.document.write(`
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <title>تقرير الاعتماد المدرسي</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">
      <style>
        @page { size: A4 portrait; margin: 10mm; }
        :root {
          --teal-900: #0f5d57; --teal-800: #156c65; --teal-700: #1d827a;
          --teal-100: #ecf5f4; --line: #c8dcd9; --text: #234946; --muted: #5d7471;
        }
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        body { margin: 0; font-family: 'Tajawal', sans-serif; color: var(--text); background: #fff; }
        .sheet { width: 100%; }
        .meta-top { display: flex; justify-content: space-between; align-items: center; color: #3d5956; font-size: 12px; margin-bottom: 12px; font-weight: 600; }
        .header-main { display: grid; grid-template-columns: 1fr 220px 1fr; align-items: center; gap: 12px; margin-bottom: 14px; border-bottom: 3px solid var(--teal-800); padding-bottom: 12px; }
        .header-col { min-height: 140px; }
        .header-col.right { text-align: right; }
        .header-col.left { text-align: left; }
        .header-col p { margin: 0 0 4px; font-size: 15px; line-height: 1.45; color: var(--teal-900); font-weight: 800; }
        .header-col .sub { font-size: 13px; font-weight: 700; color: var(--text); }
        .logo-wrap { text-align: center; display: flex; align-items: center; justify-content: center; }
        .logo-wrap img { width: 175px; max-width: 100%; height: auto; object-fit: contain; }
        .summary-bar { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); border: 1px solid var(--line); border-radius: 14px; overflow: hidden; margin-bottom: 14px; }
        .summary-item { border-left: 1px solid var(--line); padding: 10px 8px; text-align: center; background: #fff; }
        .summary-item:last-child { border-left: none; }
        .summary-item.highlight { background: var(--teal-100); }
        .summary-label { display: block; font-size: 12px; color: var(--muted); margin-bottom: 4px; font-weight: 700; }
        .summary-value { display: block; color: var(--teal-900); font-size: 26px; line-height: 1; font-weight: 800; }
        .summary-value.text { font-size: 19px; }
        .section-title { margin: 18px 0 8px; padding: 8px 10px; border-right: 4px solid var(--teal-700); background: #f2f8f7; color: var(--teal-900); font-size: 15px; font-weight: 800; }
        table { width: 100%; border-collapse: collapse; table-layout: fixed; border: 1px solid var(--line); }
        th { background: var(--teal-800); color: #fff; border: 1px solid #0d4f4a; font-size: 14px; font-weight: 700; padding: 10px 6px; text-align: center; }
        td { border: 1px solid #d5e5e2; font-size: 14px; line-height: 1.4; padding: 8px 8px; vertical-align: top; }
        .row-standard td { background: #edf6f5; color: var(--teal-900); font-size: 14px; font-weight: 800; padding: 8px 10px; }
        .col-indicator { width: 22%; } .col-evidence { width: 20%; } .col-docs { width: 16%; }
        .col-status { width: 8%; } .col-avail { width: 10%; } .col-eval { width: 6%; } .col-notes { width: 10%; }
        .code-box { display: inline-block; padding: 3px 8px; border-radius: 8px; background: var(--teal-100); color: var(--teal-900); font-size: 13px; font-weight: 800; margin-bottom: 5px; }
        .ind-text { font-weight: 800; color: #1f413d; }
        .small-text { color: #35524f; }
        .center-text { text-align: center; vertical-align: middle; font-weight: 700; }
        .signatures { display: flex; justify-content: space-between; gap: 48px; margin-top: 28px; page-break-inside: avoid; }
        .sig-item { flex: 1; text-align: center; }
        .sig-title { color: var(--teal-900); font-size: 28px; font-weight: 800; margin-bottom: 36px; }
        .sig-line { border-top: 2px dashed #9bb3b0; height: 1px; width: 68%; margin: 0 auto; }
        .footer-meta { margin-top: 22px; display: flex; justify-content: space-between; font-size: 11px; color: #556c69; direction: ltr; }
      </style>
    </head>
    <body>
      <main class="sheet">
        <div class="meta-top">
          <span>تقرير الاعتماد المدرسي</span>
          <span>${esc(exportDateTime)}</span>
        </div>
        <header class="header-main">
          <div class="header-col right">
            <p>المملكة العربية السعودية</p>
            <p>وزارة التعليم</p>
            <p>${esc(state.regionName)}</p>
          </div>
          <div class="logo-wrap">
            <img src="وزارة التعليم.png" alt="شعار وزارة التعليم" />
          </div>
          <div class="header-col left">
            <p>نموذج المتابعة المستمرة</p>
            <p>تقرير قوائم التحقق للمؤشرات</p>
            <p class="sub">تاريخ الإصدار ${esc(exportDate)}</p>
          </div>
        </header>

        <section class="summary-bar">
          <div class="summary-item"><span class="summary-label">المدرسة</span><span class="summary-value text">${esc(state.schoolName)}</span></div>
          <div class="summary-item"><span class="summary-label">نطاق التقرير</span><span class="summary-value text">جميع المجالات</span></div>
          <div class="summary-item"><span class="summary-label">المعايير</span><span class="summary-value text">جميع المعايير</span></div>
          <div class="summary-item"><span class="summary-label">إجمالي المؤشرات</span><span class="summary-value">${items.length}</span></div>
          <div class="summary-item"><span class="summary-label">مكتمل بالكامل</span><span class="summary-value">${stats.completed}</span></div>
          <div class="summary-item"><span class="summary-label">تنفيذ جزئي</span><span class="summary-value">${stats.inProgress}</span></div>
          <div class="summary-item"><span class="summary-label">لم يبدأ</span><span class="summary-value">${stats.pending}</span></div>
          <div class="summary-item"><span class="summary-label">أدلة متوفرة بالكامل</span><span class="summary-value">${availabilityStats.full}</span></div>
          <div class="summary-item"><span class="summary-label">أدلة متوفرة جزئياً</span><span class="summary-value">${availabilityStats.partial}</span></div>
          <div class="summary-item"><span class="summary-label">أدلة غير متوفرة</span><span class="summary-value">${availabilityStats.missing}</span></div>
          <div class="summary-item highlight"><span class="summary-label">نسبة الإنجاز (مكتمل)</span><span class="summary-value">${stats.completionRate}%</span></div>
          <div class="summary-item highlight"><span class="summary-label">متوسط نسبة الإنجاز</span><span class="summary-value">${Math.round(items.reduce((sum, item) => sum + rowState(item.code).progress, 0) / (items.length || 1))}%</span></div>
        </section>

        <h3 class="section-title">أولاً: جدول تتبع تنفيذ المؤشرات حسب المجال والمعيار</h3>
        <table>
          <thead>
            <tr>
              <th>المجال</th><th>المعيار</th><th>إجمالي المؤشرات</th>
              <th>مكتمل</th><th>تنفيذ جزئي</th><th>لم يبدأ</th>
              <th>المتبقي</th><th>نسبة الإنجاز</th>
            </tr>
          </thead>
          <tbody>${executionTableHtml}</tbody>
        </table>

        <h3 class="section-title">ثانياً: المؤشرات غير المكتملة (أرقام وأسماء)</h3>
        <table>
          <thead>
            <tr>
              <th style="width:12%">رقم المؤشر</th><th style="width:38%">اسم المؤشر</th>
              <th style="width:18%">المجال</th><th style="width:18%">المعيار</th>
              <th style="width:14%">الحالة الحالية</th>
            </tr>
          </thead>
          <tbody>${notCompletedHtml}</tbody>
        </table>

        <h3 class="section-title">ثالثاً: انعكاس الإجراءات المنفذة والنواقص حسب المعايير</h3>
        <table>
          <thead>
            <tr>
              <th style="width:11%">المجال</th><th style="width:11%">المعيار</th>
              <th style="width:8%">إجراءات منفذة</th><th style="width:8%">إجراءات متبقية</th>
              <th style="width:12%">جهة التنفيذ</th>
              <th style="width:25%">تفاصيل ما تم تنفيذه</th>
              <th style="width:25%">تفاصيل النقص والمتبقي</th>
            </tr>
          </thead>
          <tbody>${proceduresReflectionHtml}</tbody>
        </table>

        <h3 class="section-title">رابعاً: التفاصيل التشغيلية الكاملة للمؤشرات</h3>
        <table>
          <thead>
            <tr>
              <th class="col-indicator">المؤشر</th>
              <th class="col-evidence">الشواهد المتوقعة</th>
              <th class="col-docs">الوثائق</th>
              <th class="col-status">نسبة الإنجاز</th>
              <th class="col-status">حالة الإنجاز</th>
              <th class="col-avail">توفر الأدلة</th>
              <th class="col-eval">التقييم الذاتي</th>
              <th class="col-notes">ملاحظات</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>

        <section class="signatures">
          <div class="sig-item">
            <div class="sig-title">قائد/ة المدرسة</div>
            <div class="sig-line"></div>
          </div>
          <div class="sig-item">
            <div class="sig-title">مشرف/ة الجودة</div>
            <div class="sig-line"></div>
          </div>
        </section>

        <div class="footer-meta">
          <span>https://bndrjj.github.io/selfereoprt/report.html</span>
          <span>Page 1 of 1</span>
        </div>
      </main>
      <script>setTimeout(() => { window.print(); }, 800);</script>
    </body>
    </html>
  `);
  popup.document.close();
});

// ─── تشغيل ───────────────────────────────────────
render();
