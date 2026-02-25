/* استبدل محتوى report.js الحالي بهذا الكود */

const indicators = [
  { domain: 'الإدارة المدرسية', standard: 'التخطيط', code: '1-1-1-1', text: 'تضع المدرسة خطة تشغيلية شاملة، وفق أهداف تطويرية محددة.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'التخطيط', code: '1-1-1-2', text: 'تتابع المدرسة تنفيذ خطتها التشغيلية وتطورها بما يضمن تحقيق أهدافها.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'قيادة العملية التعليمية', code: '1-2-1-1', text: 'تعزز المدرسة القيم الاسلامية والهوية الوطنية.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'قيادة العملية التعليمية', code: '1-2-1-2', text: 'تطبق المدرسة قيم مهنة التعليم واخلاقياتها وتتابع الالتزام بها', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'قيادة العملية التعليمية', code: '1-2-1-3', text: 'تطبق المدرسة إجراءات محددة لدعم الانضباط المدرسي وتتابع الالتزام بها', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'قيادة العملية التعليمية', code: '1-2-1-4', text: 'تنفذ المدرسة برامج وأنشطة تربوية داعمة للسلوك الإيجابي، لدى المتعلمين ومنهم ذوو الإعاقة والموهوبون وتتابعها', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'قيادة العملية التعليمية', code: '1-2-1-5', text: 'تنفذ المدرسة برامج وأنشطة إثرائية؛ لتطوير مواهب المتعلمين وتهيئتهم للمستقبل وتتابعها', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'المجتمع المدرسي', code: '1-3-1-1', text: 'تعزز المدرسة بناء العلاقات الايجابية والتعاون في المجتمع المدرسي', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'المجتمع المدرسي', code: '1-3-1-2', text: 'تعزز المدرسة مشاركة الاسرة في تعلم أبنائها، والتحضير لمستقبلهم', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'المجتمع المدرسي', code: '1-3-1-3', text: 'تعزز المدرسة الشراكة المجتمعية؛ لدعم التعلم والتأثير الايجابي في المجتمع', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'التطوير المؤسسي', code: '1-4-1-1', text: 'توفر المدرسة كادرا تعليميا مكتملا ً ومؤهلا بما يتسق مع المهام الموكلة له', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'التطوير المؤسسي', code: '1-4-1-2', text: 'توفر المدرسة كادرا إداريا مكتملا ً ومؤهلا بما يتسق مع المهام الموكلة له', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'التطوير المؤسسي', code: '1-4-1-3', text: 'تظهر المدرسة الملاءة والاستدامة مالية.', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'التطوير المؤسسي', code: '1-4-1-4', text: 'تدعم المدرسة منسوبيها للحصول على الرخصة المهنية، وتتابعها', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'التطوير المؤسسي', code: '1-4-1-5', text: 'تدعم المدرسة التطوير المهني لمنسوبيها وفقًا لنتائج التقويم وتحليل احتياجاتهم', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'التطوير المؤسسي', code: '1-4-1-6', text: 'تطبق المدرسة التقويم الذاتي المبني على المعايير المعتمدة من الهيئة بشكل مستمر', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'التطوير المؤسسي', code: '1-4-1-7', text: 'تنفذ المدرسة خطة للتحسين بناء على نتائج التقويم المدرسي، وتتابعها', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'حقوق المتعلم وحمايته', code: '1-5-1-1', text: 'تلتزم المدرسة بالمحافظة على حقوق المتعلمين وحمايتهم', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
  { domain: 'الإدارة المدرسية', standard: 'حقوق المتعلم وحمايته', code: '1-5-1-2', text: 'توفر المدرسة مناخًا آمنًا للتعلم والنمو نفسيا واجتماعيا', evidence: 'شاهد١، شاهد٢، شاهد٣.', docs: 'وثيقة١، وثيقة٢، وثيقة٣.' },
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

const STORAGE_KEY = 'accreditation-checklist-v3';
const persisted = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
const allDomains = [...new Set(indicators.map((i) => i.domain))];
const state = {
  filterDomain: persisted.filterDomain || allDomains[0],
  filterStandard: persisted.filterStandard || 'الكل',
  regionName: persisted.regionName || 'الإدارة العامة للتعليم بالمنطقة الشرقية',
  schoolName: persisted.schoolName || 'اسم المدرسة هنا',
  rows: persisted.rows || {}
};

const statusOptions = ['مكتمل', 'قيد التنفيذ', 'لم يبدأ'];
const availOptions = ['متوفرة بالكامل', 'متوفرة جزئياً', 'غير متوفرة'];
const selfEvalOptions = ['4', '3', '2', '1'];
const ownerOptions = ['فريق التميز', 'مدير المدرسة', 'المرشد الطلابي', 'رائد النشاط', 'معلمين المواد'];

const domainFilter = document.getElementById('domainFilter');
const standardFilter = document.getElementById('standardFilter');
const rowsEl = document.getElementById('rows');
const summaryEl = document.getElementById('summary');

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
  return new Date().toLocaleDateString('ar-SA-u-ca-islamic', { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' });
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

function rowState(code) {
  return state.rows[code] || {
    status: 'لم يبدأ',
    availability: 'غير متوفرة',
    selfEval: '1',
    owner: '',
    notes: ''
  };
}

function setRowValue(code, key, value) {
  state.rows[code] = { ...rowState(code), [key]: value };
  save();
  renderSummary();
}

function optionList(options, selected) {
  return options.map((item) => `<option value="${item}" ${item === selected ? 'selected' : ''}>${item}</option>`).join('');
}

function fillFilters() {
  const domains = [...new Set(indicators.map((i) => i.domain))];
  domainFilter.innerHTML = domains.map((d) => `<option value="${d}">${d}</option>`).join('');
  if (!domains.includes(state.filterDomain)) state.filterDomain = domains[0];
  domainFilter.value = state.filterDomain;

  const filteredByDomain = indicators.filter((i) => i.domain === state.filterDomain);
  const standards = ['الكل', ...new Set(filteredByDomain.map((i) => i.standard))];
  standardFilter.innerHTML = standards.map((s) => `<option value="${s}">${s}</option>`).join('');
  if (!standards.includes(state.filterStandard)) state.filterStandard = 'الكل';
  standardFilter.value = state.filterStandard;
}

function getFilteredIndicators() {
  return indicators.filter((item) => {
    const byDomain = item.domain === state.filterDomain;
    const byStandard = state.filterStandard === 'الكل' || item.standard === state.filterStandard;
    return byDomain && byStandard;
  });
}

function getStatusStats(items) {
  const completed = items.filter((i) => rowState(i.code).status === 'مكتمل').length;
  const inProgress = items.filter((i) => rowState(i.code).status === 'قيد التنفيذ').length;
  const pending = items.filter((i) => rowState(i.code).status === 'لم يبدأ').length;
  const remaining = inProgress + pending;
  const completionRate = items.length ? Math.round((completed / items.length) * 100) : 0;

  return { completed, inProgress, pending, remaining, completionRate };
}

function buildExecutionTable(items) {
  const grouped = new Map();

  items.forEach((item) => {
    const key = `${item.domain}__${item.standard}`;
    if (!grouped.has(key)) {
      grouped.set(key, {
        domain: item.domain,
        standard: item.standard,
        total: 0,
        completed: 0,
        inProgress: 0,
        pending: 0
      });
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

function renderSummary() {
  const items = getFilteredIndicators();
  const stats = getStatusStats(items);
  summaryEl.innerHTML = `
    <span>المجال المختار: ${esc(state.filterDomain)}</span>
    <span>المعيار المختار: ${esc(state.filterStandard)}</span>
    <span>عدد المؤشرات المعروضة: ${items.length}</span>
    <span>مكتمل: ${stats.completed}</span>
    <span>قيد التنفيذ (تنفيذ جزئي): ${stats.inProgress}</span>
    <span>لم يبدأ: ${stats.pending}</span>
    <span>المتبقي: ${stats.remaining}</span>
    <span>نسبة الإنجاز: ${stats.completionRate}%</span>
  `;
}

function renderRows() {
  const items = getFilteredIndicators();

  let lastStandard = null;
  rowsEl.innerHTML = items
    .map((item) => {
      const current = rowState(item.code);
      const groupRow = item.standard !== lastStandard
        ? `<tr class="standard-row"><td colspan="10">المعيار: ${esc(item.standard)}</td></tr>`
        : '';
      lastStandard = item.standard;

      return `${groupRow}
        <tr>
          <td>${esc(item.domain)}</td>
          <td>${esc(item.standard)}</td>
          <td class="indicator-cell">(${esc(item.code)}) ${esc(item.text)}</td>
          <td class="evidence-cell"><details><summary>عرض الشواهد</summary>${esc(item.evidence)}</details></td>
          <td class="docs-cell"><details><summary>عرض الوثائق</summary>${esc(item.docs)}</details></td>
          <td>
            <select class="row-select" data-code="${item.code}" data-key="status">
              ${optionList(statusOptions, current.status)}
            </select>
          </td>
          <td>
            <select class="row-select" data-code="${item.code}" data-key="availability">
              ${optionList(availOptions, current.availability)}
            </select>
          </td>
          <td>
            <select class="row-select" data-code="${item.code}" data-key="selfEval">
              ${optionList(selfEvalOptions, current.selfEval)}
            </select>
          </td>
          <td>
            <select class="row-select" data-code="${item.code}" data-key="owner">
              ${optionList(ownerOptions, current.owner)}
            </select>
          </td>
          <td>
            <textarea class="row-textarea" data-code="${item.code}" data-key="notes" placeholder="الإجراء التصحيحي">${esc(current.notes)}</textarea>
          </td>
        </tr>
      `;
    })
    .join('');

  rowsEl.querySelectorAll('select.row-select, textarea.row-textarea').forEach((el) => {
    const handler = () => setRowValue(el.dataset.code, el.dataset.key, el.value);
    el.addEventListener('change', handler);
    if (el.tagName !== 'SELECT') el.addEventListener('input', handler);
  });
}

function render() {
  fillFilters();
  renderRows();
  renderSummary();
}

domainFilter.addEventListener('change', () => {
  state.filterDomain = domainFilter.value;
  state.filterStandard = 'الكل';
  save();
  render();
});

document.getElementById('editRegion')?.addEventListener('click', () => {
  editHeaderValue('regionName', 'المنطقة التعليمية');
});

document.getElementById('editSchool')?.addEventListener('click', () => {
  editHeaderValue('schoolName', 'اسم المدرسة');
});

renderHeaderMeta();

standardFilter.addEventListener('change', () => {
  state.filterStandard = standardFilter.value;
  save();
  render();
});

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

// =========================================================
//  هذا هو الجزء المسؤول عن توليد التقرير الاحترافي الجديد
// =========================================================
document.getElementById('exportBtn').addEventListener('click', () => {
  const items = getFilteredIndicators();
  const stats = getStatusStats(items);
  const executionTable = buildExecutionTable(items);
  const notCompleted = getNotCompletedIndicators(items);
  const exportDate = todayAr();
  const exportDateTime = new Date().toLocaleString('en-US', {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  let lastStandard = null;
  const rowsHtml = items.map((item) => {
    const current = rowState(item.code);
    const standardRow = item.standard !== lastStandard
      ? `
        <tr class="row-standard">
          <td colspan="7">المعيار: ${esc(item.standard)}</td>
        </tr>
      `
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
        <td class="center-text">${esc(current.status)}</td>
        <td class="center-text">${esc(current.availability)}</td>
        <td class="center-text">${esc(current.selfEval)}</td>
        <td class="small-text">${esc(current.notes || '-')}</td>
      </tr>
    `;
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
        </tr>
      `).join('')
    : '<tr><td colspan="8" class="center-text">لا توجد بيانات مطابقة للمرشحات الحالية.</td></tr>';

  const notCompletedHtml = notCompleted.length
    ? notCompleted.map((item) => `
        <tr>
          <td class="center-text">${esc(item.code)}</td>
          <td>${esc(item.text)}</td>
          <td>${esc(item.domain)}</td>
          <td>${esc(item.standard)}</td>
          <td class="center-text">${esc(item.status)}</td>
        </tr>
      `).join('')
    : '<tr><td colspan="5" class="center-text">جميع المؤشرات مكتملة.</td></tr>';

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
          --teal-900: #0f5d57;
          --teal-800: #156c65;
          --teal-700: #1d827a;
          --teal-100: #ecf5f4;
          --line: #c8dcd9;
          --text: #234946;
          --muted: #5d7471;
        }
        * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        body {
          margin: 0;
          font-family: 'Tajawal', sans-serif;
          color: var(--text);
          background: #fff;
        }

        .sheet { width: 100%; }

        .meta-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #3d5956;
          font-size: 12px;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .header-main {
          display: grid;
          grid-template-columns: 1fr 220px 1fr;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
          border-bottom: 3px solid var(--teal-800);
          padding-bottom: 12px;
        }
        .header-col { min-height: 140px; }
        .header-col.right { text-align: right; }
        .header-col.left { text-align: left; }
        .header-col p {
          margin: 0 0 4px;
          font-size: 15px;
          line-height: 1.45;
          color: var(--teal-900);
          font-weight: 800;
        }
        .header-col .sub {
          font-size: 13px;
          font-weight: 700;
          color: var(--text);
        }

        .logo-wrap {
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-wrap img {
          width: 175px;
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }

        .summary-bar {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          border: 1px solid var(--line);
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 14px;
        }
        .summary-item {
          border-left: 1px solid var(--line);
          padding: 10px 8px;
          text-align: center;
          background: #fff;
        }
        .summary-item:last-child { border-left: none; }
        .summary-item.highlight { background: var(--teal-100); }
        .summary-label {
          display: block;
          font-size: 12px;
          color: var(--muted);
          margin-bottom: 4px;
          font-weight: 700;
        }
        .summary-value {
          display: block;
          color: var(--teal-900);
          font-size: 26px;
          line-height: 1;
          font-weight: 800;
        }
        .summary-value.text {
          font-size: 19px;
        }

        .section-title {
          margin: 18px 0 8px;
          padding: 8px 10px;
          border-right: 4px solid var(--teal-700);
          background: #f2f8f7;
          color: var(--teal-900);
          font-size: 15px;
          font-weight: 800;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          table-layout: fixed;
          border: 1px solid var(--line);
        }
        th {
          background: var(--teal-800);
          color: #fff;
          border: 1px solid #0d4f4a;
          font-size: 14px;
          font-weight: 700;
          padding: 10px 6px;
          text-align: center;
        }
        td {
          border: 1px solid #d5e5e2;
          font-size: 14px;
          line-height: 1.4;
          padding: 8px 8px;
          vertical-align: top;
        }
        .row-standard td {
          background: #edf6f5;
          color: var(--teal-900);
          font-size: 14px;
          font-weight: 800;
          padding: 8px 10px;
        }

        .col-indicator { width: 24%; }
        .col-evidence { width: 22%; }
        .col-docs { width: 18%; }
        .col-status { width: 10%; }
        .col-avail { width: 10%; }
        .col-eval { width: 6%; }
        .col-notes { width: 10%; }

        .code-box {
          display: inline-block;
          padding: 3px 8px;
          border-radius: 8px;
          background: var(--teal-100);
          color: var(--teal-900);
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 5px;
        }
        .ind-text { font-weight: 800; color: #1f413d; }
        .small-text { color: #35524f; }
        .center-text {
          text-align: center;
          vertical-align: middle;
          font-weight: 700;
        }

        .signatures {
          display: flex;
          justify-content: space-between;
          gap: 48px;
          margin-top: 28px;
          page-break-inside: avoid;
        }
        .sig-item {
          flex: 1;
          text-align: center;
        }
        .sig-title {
          color: var(--teal-900);
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 36px;
        }
        .sig-line {
          border-top: 2px dashed #9bb3b0;
          height: 1px;
          width: 68%;
          margin: 0 auto;
        }

        .footer-meta {
          margin-top: 22px;
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: #556c69;
          direction: ltr;
        }
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
          <div class="summary-item">
            <span class="summary-label">المجال</span>
            <span class="summary-value text">${esc(state.filterDomain)}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">المعيار المختار</span>
            <span class="summary-value text">${esc(state.filterStandard)}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">إجمالي المؤشرات</span>
            <span class="summary-value">${items.length}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">مكتمل بالكامل</span>
            <span class="summary-value">${stats.completed}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">تنفيذ جزئي</span>
            <span class="summary-value">${stats.inProgress}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">لم يبدأ</span>
            <span class="summary-value">${stats.pending}</span>
          </div>
          <div class="summary-item">
            <span class="summary-label">المتبقي</span>
            <span class="summary-value">${stats.remaining}</span>
          </div>
          <div class="summary-item highlight">
            <span class="summary-label">نسبة الإنجاز</span>
            <span class="summary-value">${stats.completionRate}%</span>
          </div>
        </section>

        <h3 class="section-title">أولاً: جدول تتبع تنفيذ المؤشرات حسب المجال والمعيار</h3>
        <table>
          <thead>
            <tr>
              <th>المجال</th>
              <th>المعيار</th>
              <th>إجمالي المؤشرات</th>
              <th>مكتمل</th>
              <th>تنفيذ جزئي</th>
              <th>لم يبدأ</th>
              <th>المتبقي</th>
              <th>نسبة الإنجاز</th>
            </tr>
          </thead>
          <tbody>${executionTableHtml}</tbody>
        </table>

        <h3 class="section-title">ثانياً: المؤشرات غير المكتملة (أرقام وأسماء)</h3>
        <table>
          <thead>
            <tr>
              <th style="width:12%">رقم المؤشر</th>
              <th style="width:38%">اسم المؤشر</th>
              <th style="width:18%">المجال</th>
              <th style="width:18%">المعيار</th>
              <th style="width:14%">الحالة الحالية</th>
            </tr>
          </thead>
          <tbody>${notCompletedHtml}</tbody>
        </table>

        <h3 class="section-title">ثالثاً: التفاصيل التشغيلية الكاملة للمؤشرات</h3>
        ${items.length ? `
          <table>
            <thead>
              <tr>
                <th class="col-indicator">المؤشر</th>
                <th class="col-evidence">الشواهد المتوقعة</th>
                <th class="col-docs">الوثائق</th>
                <th class="col-status">حالة الإنجاز</th>
                <th class="col-avail">توفر الأدلة</th>
                <th class="col-eval">التقييم</th>
                <th class="col-notes">ملاحظات</th>
              </tr>
            </thead>
            <tbody>${rowsHtml}</tbody>
          </table>
        ` : '<div style="text-align:center;padding:44px;font-size:16px;">لا توجد مؤشرات مطابقة للفلاتر الحالية.</div>'}

        <section class="signatures">
          <div class="sig-item">
            <div class="sig-title">قائدة/ة المدرسة</div>
            <div class="sig-line"></div>
          </div>
          <div class="sig-item">
            <div class="sig-title">مشرفة/ة الجودة</div>
            <div class="sig-line"></div>
          </div>
        </section>

        <div class="footer-meta">
          <span>https://bndrjj.github.io/selfereoprt/report.html</span>
          <span>Page 1 of 1</span>
        </div>
      </main>

      <script>
        setTimeout(() => { window.print(); }, 800);
      </script>
    </body>
    </html>
  `);
  popup.document.close();
});

render();
