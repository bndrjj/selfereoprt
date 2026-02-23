/* استبدل محتوى report.js الحالي بهذا الكود */

const indicators = [
  { domain: 'الإدارة المدرسية', standard: 'التخطيط', code: '1-1-1-1', text: 'تضع المدرسة خطة تشغيلية مكتملة العناصر وفق أهداف تطويرية محددة.', evidence: 'وجود خطة تشغيلية، يشارك فيها الكادر التعليمي، تتضمن (الرؤية والرسالة والقيم – أهداف – مبادرات نوعية – برامج وأنشطة متنوعة).', docs: 'وثيقة الخطة التشغيلية (شاملة التحليل الرباعي SWOT، الأهداف التشغيلية والفرعية، الإجراءات، الجداول الزمنية، والموارد المالية والبشرية).' },
  { domain: 'الإدارة المدرسية', standard: 'التخطيط', code: '1-1-1-2', text: 'تتابع المدرسة تنفيذ خطتها وتطورها بما يضمن تحقيق أهدافها.', evidence: 'إجراءات واضحة، الأدوار والمسؤوليات محددة، توافر مؤشرات لمتابعة تقدم البرامج والأنشطة، تحديد المشكلات والتحديات عند التنفيذ، تقدم الحلول.', docs: 'سجلات متابعة الخطة التشغيلية (لتحديد البرامج المنفذة وغير المنفذة ومؤشرات الإنجاز).' },
  { domain: 'الإدارة المدرسية', standard: 'قيادة العملية التعليمية', code: '1-2-1-1', text: 'تعزز المدرسة القيم الإسلامية والهوية الوطنية.', evidence: 'توفر برامج توعوية للمجتمع المحلي، الاحتفاء بالمناسبات الوطنية، تفعيل المناسبات لتعزيز القيم الإسلامية والهوية الوطنية، تنفيذ الأنشطة والبرامج بأساليب متنوعة.', docs: 'سجل البرامج والأنشطة.' },
  { domain: 'الإدارة المدرسية', standard: 'قيادة العملية التعليمية', code: '1-2-1-2', text: 'تلتزم المدرسة بقيم مهنة التعليم وأخلاقيتها.', evidence: 'توافر إجراءات واضحة لنشر قيم مهنة التعليم وأخلاقياتها، تطبيق برامج توعوية مستمرة، استخدام أساليب مبتكرة، توافر حوافز معلنة لتشجيع المنسوبين.', docs: 'سجل الاجتماعات، سجل التبليغات، سجل البرامج والأنشطة، خطة متابعة السلوك الوظيفي، نشرات.' },
  { domain: 'الإدارة المدرسية', standard: 'قيادة العملية التعليمية', code: '1-2-1-3', text: 'توفر المدرسة مناخاً آمناً للتعلم والنمو نفسياً واجتماعياً.', evidence: 'برامج وأنشطة متنوعة ومستمرة، تشجيع المتعلمين على المناقشة والحوار، تعزيز التعاون، استخدام أساليب استباقية للكشف عن التنمر، برامج لمعالجة التنمر.', docs: 'تقارير برامج التوعية والدعم النفسي وسجلات معالجة التنمر.' },
  { domain: 'الإدارة المدرسية', standard: 'قيادة العملية التعليمية', code: '1-2-1-4', text: 'تنشر المدرسة الوعي بقواعد السلوك والمواظبة وتتابع تطبيقها.', evidence: 'توافر إجراءات للنشر، تطبيق برامج توعوية، استخدام أساليب متنوعة للنشر، متابعة التزام المعلمين، تطبيق إجراءات واضحة للحد من الغياب.', docs: 'سجلات قواعد السلوك والمواظبة، سجلات حصر الغياب، والمنشورات التوعوية.' },
  { domain: 'الإدارة المدرسية', standard: 'قيادة العملية التعليمية', code: '1-2-1-5', text: 'توفر المدرسة برامج وأنشطة تربوية داعمة للسلوك الإيجابي.', evidence: 'إجراءات محددة للكشف عن المشكلات السلوكية، تطبيق أنشطة وقائية وبرامج علاجية، برامج شاملة لجميع المتعلمين، الارتباط بنتائج تشخيص المشكلات، متابعة التطبيق.', docs: 'خطة وسجلات التوجيه الطلابي للبرامج الوقائية والعلاجية.' },
  { domain: 'الإدارة المدرسية', standard: 'قيادة العملية التعليمية', code: '1-2-1-6', text: 'توفر المدرسة برامج وأنشطة إثرائية لتطوير مواهب المتعلمين وتهيئتهم للمستقبل.', evidence: 'توافر خطة للأنشطة الإثرائية غير الصفية، تطبيق أنشطة متنوعة وشاملة، تقديم حوافز للمشاركين، متابعة التنفيذ بانتظام.', docs: 'وثيقة خطة الأنشطة الإثرائية غير الصفية.' },
  { domain: 'الإدارة المدرسية', standard: 'المجتمع المدرسي', code: '1-3-1-1', text: 'تعزز المدرسة العمل التعاوني والعلاقات الإيجابية والتعاون في المجتمع.', evidence: 'خطة للعمل التعاوني، توفر أنشطة ومهام تشجع العمل بروح الفريق، أنشطة متنوعة وشاملة لمنسوبي المدرسة، متابعة التنفيذ بانتظام.', docs: 'خطة العمل التعاوني.' },
  { domain: 'الإدارة المدرسية', standard: 'المجتمع المدرسي', code: '1-3-1-2', text: 'تعزز المدرسة مشاركة الأسرة في تعلم أبنائها والتحضير لمستقبلهم.', evidence: 'أنشطة وبرامج توعوية بدور الأسرة، برامج متنوعة ومستمرة، إشراك الأسرة في تحديد المشكلات وتقويم الأبناء، توافر حوافز تدعم المشاركة.', docs: 'سجلات مجالس أولياء الأمور، كشوفات حضور الورش التدريبية، والنشرات.' },
  { domain: 'الإدارة المدرسية', standard: 'المجتمع المدرسي', code: '1-3-1-3', text: 'تعزز المدرسة الشراكة المجتمعية لدعم التعلم والتأثير الإيجابي في المجتمع المحلي.', evidence: 'توافر أساليب للتواصل والتعاون مع مؤسسات المجتمع، برامج لتوعية المجتمع المدرسي، شراكات مجتمعية مع المؤسسات الوطنية، تبادل الخبرات مع المدارس الأخرى.', docs: 'سجل الخطة التشغيلية، سجل البرامج والأنشطة، سجل الشراكة المجتمعية، وسجل التوجيه والإرشاد.' },
  { domain: 'الإدارة المدرسية', standard: 'التطوير المؤسسي', code: '1-4-1-1', text: 'تشجع المدرسة منسوبيها للحصول على الرخصة المهنية.', evidence: 'برامج توعوية حول أهمية الرخص المهنية، تقديم حوافز بأساليب متنوعة، وجود معلمين حاصلين على رتب بمستوى متقدم وخبير.', docs: 'سجلات البرامج التوعوية، سجلات وسلالم الحوافز والمكافآت، وكشوفات المعلمين الحاصلين على الرخص والرتب المهنية.' },
  { domain: 'الإدارة المدرسية', standard: 'التطوير المؤسسي', code: '1-4-1-5', text: 'تدعم المدرسة التطوير المهني لمنسوبيها وفقًا لنتائج تقويم الأداء الوظيفي واحتياجاتهم.', evidence: 'توافر خطة للتطوير المهني مرتبطة بنتائج تحليل الاحتياجات وتقويم الأداء، مشاركة المجتمع المدرسي في تحديد الأهداف، أساليب تطوير متنوعة وشاملة.', docs: 'وثيقة خطة التطوير المهني، استمارات نتائج تقويم الأداء وتحليل الاحتياجات، وسجلات برامج التطوير.' },
  { domain: 'الإدارة المدرسية', standard: 'التطوير المؤسسي', code: '1-4-1-6', text: 'تطبق المدرسة التقويم الذاتي المبني على المعايير المعتمدة من الهيئة.', evidence: 'تضع المدرسة خطة لتطبيق التقويم الذاتي المبني على المعايير.', docs: 'وثيقة خطة التقويم الذاتي، وسجلات ورش العمل وتدريب المعلمين.' },
  { domain: 'الإدارة المدرسية', standard: 'التطوير المؤسسي', code: '1-4-1-7', text: 'تنفذ المدرسة خطة التحسين بناء على نتائج التقويم المدرسي وتتابعها.', evidence: 'خطة تحسين مبنية على نتائج التقويم المدرسي، توافر جدول زمني وتحديد للأدوار والمسؤوليات، تحديد المتطلبات والموارد، برامج وأنشطة لمعالجة جوانب التحسين وفقاً للأولويات.', docs: 'وثيقة خطة التحسين المدرسية، سجلات المتابعة والاجتماعات الدورية، وسجلات البرامج والأنشطة العلاجية والتحسينية.' },
  { domain: 'التعليم والتعلم', standard: 'بناء خبرات التعلم', code: '2-1-1-1', text: 'توفر المدرسة فرصًا متكافئة للتعلم تلبي احتياجات المتعلمين ومنهم ذوو الإعاقة والموهوبون.', evidence: 'مصادر وأنشطة متنوعة في بيئة التعلم (سمعية / بصرية / سمعية بصرية / حسية) تلبي احتياجات الفئات المختلفة.', docs: 'سجلات توفير مصادر التعلم المتنوعة، وسجلات حصر وتلبية احتياجات الفئات الخاصة والموهوبين.' },
  { domain: 'التعليم والتعلم', standard: 'بناء خبرات التعلم', code: '2-1-1-2', text: 'تدعم المدرسة تنفيذ المناهج لتحقيق نواتج التعلم المستهدفة وفق الخطة الدراسية.', evidence: 'أنشطة ومصادر متنوعة تدعم محتوى المنهج، التركيز على اكتساب المعارف والمهارات، استخدام أساليب محفزة، تعزيز القيم الوطنية، التوافق مع الخطة الزمنية لتوزيع المنهج.', docs: 'خطط التوزيع الزمني للمناهج، وسجلات التخطيط وإعداد الدروس، ونماذج من الأنشطة المحفزة.' },
  { domain: 'التعليم والتعلم', standard: 'بناء خبرات التعلم', code: '2-1-1-3', text: 'تنوع المدرسة في إستراتيجيات التدريس لتلبية احتياجات المتعلمين، ودعم تعلمهم.', evidence: 'استخدام إستراتيجيات تدريس تتسق مع نواتج التعلم المستهدفة وتتسق مع المواقف التعليمية.', docs: 'سجلات إعداد الدروس (توضح تنوع الاستراتيجيات)، واستمارات أو بطاقات رصد الملاحظة الصفية.' },
  { domain: 'التعليم والتعلم', standard: 'بناء خبرات التعلم', code: '2-1-1-4', text: 'تفعّل المدرسة التعلم الإلكتروني؛ لتلبية احتياجات المتعلمين، ودعم تعلمهم.', evidence: 'خطة للتعلم الإلكتروني، تحديد أهداف وأدوات ومنصات التعلم، تنفيذ برامج تدريبية للتوعية، متابعة التنفيذ وتحديد التحديات، دمج التعلم الصفي والإلكتروني.', docs: 'خطة التعلم الإلكتروني، تقارير تفعيل المنصات التعليمية، سجلات البرامج التدريبية التقنية، واستمارات الملاحظة الصفية.' },
  { domain: 'التعليم والتعلم', standard: 'بناء خبرات التعلم', code: '2-1-1-5', text: 'توفر المدرسة أنشطة تعلم تطبيقية ترتبط بحياة المتعلمين (مشاريع تعلمية تطبيقية).', evidence: 'أنشطة ترتبط بمواقف من واقع الحياة، التركيز على تطبيقات عملية ومشاريع تعلمية تطبيقية، تشجيع الطلاب على المشاركة في مشاريع خدمة المجتمع.', docs: 'سجلات مشاريع الطلاب العملية، ملفات الإنجاز، وتقارير المشاركة في مشاريع خدمة المجتمع.' },
  { domain: 'التعليم والتعلم', standard: 'بناء خبرات التعلم', code: '2-1-1-6', text: 'تنمي المدرسة المهارات القرائية والعددية الأساسية لدى المتعلمين.', evidence: 'إتاحة فرص لممارسة القراءة والكتابة والحساب، تصميم أنشطة صفية ولا صفية لتنمية هذه المهارات، تقديم دعم إضافي للمتعلمين المحتاجين.', docs: 'سجلات إعداد الدروس، خطط معالجة الضعف القرائي والعددي، وسجلات الأنشطة.' },
  { domain: 'التعليم والتعلم', standard: 'بناء خبرات التعلم', code: '2-1-1-7', text: 'تنمي المدرسة مهارات التفكير العليا لدى المتعلمين.', evidence: 'طرح أسئلة تتطلب التحليل والتركيب والتقويم، استخدام استراتيجيات تدريس تشجع على الاستنتاج وحل المشكلات والتفكير الناقد، التكليف بمهام ومشاريع تفكير عليا.', docs: 'سجلات إعداد الدروس، وأوراق العمل والمشاريع المقدمة للطلاب.' },
  { domain: 'التعليم والتعلم', standard: 'بناء خبرات التعلم', code: '2-1-1-8', text: 'تنمي المدرسة المهارات العاطفية والاجتماعية لدى المتعلمين.', evidence: 'توفير بيئة صفية داعمة لتشجيع التعبير عن المشاعر، استخدام أنشطة تعزز التعاون وحل النزاعات، تشجيع بناء علاقات إيجابية.', docs: 'سجلات الأنشطة التعاونية والجماعية داخل الصف، وتقارير الملاحظة الصفية.' },
  { domain: 'التعليم والتعلم', standard: 'بناء خبرات التعلم', code: '2-1-1-9', text: 'تنمي المدرسة المهارات الرقمية لدى المتعلمين.', evidence: 'تكليف بمهام تتطلب التقنية في البحث، التوجيه للاستخدام الآمن للإنترنت، إتاحة استخدام برامج وتطبيقات تعليمية مناسبة.', docs: 'سجلات إعداد الدروس، نماذج من أعمال الطلاب الرقمية، وتقارير استخدام التطبيقات التعليمية.' },
  { domain: 'التعليم والتعلم', standard: 'بناء خبرات التعلم', code: '2-1-1-10', text: 'تعزز المدرسة دافعية المتعلمين للتعلم والاستمتاع به.', evidence: 'ربط موضوعات التعلم باهتمامات المتعلمين، استخدام أساليب تعزيز إيجابية ومتنوعة، التنويع في الأنشطة والوسائل التعليمية.', docs: 'سجلات التعزيز والتحفيز، وتقارير الأنشطة والفعاليات الجاذبة، واستمارات الملاحظة الصفية.' },
  { domain: 'التعليم والتعلم', standard: 'تقويم التعلم', code: '2-2-1-1', text: 'تقوم المدرسة أداء المتعلمين باستخدام أساليب وأدوات متنوعة وفاعلة.', evidence: 'استخدام أدوات تقويم متنوعة ومناسبة، قياس الجوانب المعرفية والمهارية والوجدانية، اتسام أدوات التقويم بالصدق والثبات والوضوح.', docs: 'نماذج من أدوات التقويم، سجلات رصد الدرجات، وملفات إنجاز المتعلمين.' },
  { domain: 'التعليم والتعلم', standard: 'تقويم التعلم', code: '2-2-1-2', text: 'تحلل المدرسة نتائج التقويم وتوظفها في تحسين نواتج التعلم بانتظام.', evidence: 'تحليل نتائج الاختبارات لتحديد نقاط القوة والضعف، استخدام النتائج لتعديل خطط التدريس، بناء خطط علاجية وإثرائية.', docs: 'تقارير تحليل النتائج، سجلات الخطط العلاجية والإثرائية، وسجلات اجتماعات اللجان المختصة بالتحصيل.' },
  { domain: 'التعليم والتعلم', standard: 'تقويم التعلم', code: '2-2-1-3', text: 'تقدم المدرسة التغذية الراجعة للمتعلمين بانتظام.', evidence: 'تقديم تغذية راجعة فورية وبناءة، تزويد المتعلمين بملاحظات مكتوبة أو شفوية للتحسين، إشراك المتعلمين في التقويم الذاتي.', docs: 'نماذج من أعمال الطلاب عليها تصحيح وملاحظات بناءة، واستمارات الملاحظة الصفية.' },
  { domain: 'نواتج التعلم', standard: 'التحصيل التعليمي', code: '3-1-1-1', text: 'يحقق المتعلمون نتائج متقدمة في مجال القراءة وفقًا للاختبارات الوطنية.', evidence: 'حصول المتعلمين على متوسط درجات مرتفع في اختبارات القراءة الوطنية، ارتفاع نسبة المتعلمين في المستويات المتقدمة.', docs: 'تقارير نتائج الاختبارات الوطنية (نافس) المعتمدة من الهيئة، وسجلات تحليل النتائج.' },
  { domain: 'نواتج التعلم', standard: 'التحصيل التعليمي', code: '3-1-1-2', text: 'يحقق المتعلمون نتائج متقدمة في مجال الرياضيات وفقًا للاختبارات الوطنية.', evidence: 'حصول المتعلمين على متوسط درجات مرتفع في اختبارات الرياضيات الوطنية، ارتفاع نسبة المتعلمين في المستويات المتقدمة.', docs: 'تقارير نتائج الاختبارات الوطنية في الرياضيات، وسجلات تحليل النتائج ومقارنتها بالمتوسطات.' },
  { domain: 'نواتج التعلم', standard: 'التحصيل التعليمي', code: '3-1-1-3', text: 'يحقق المتعلمون نتائج متقدمة في مجال العلوم وفقًا للاختبارات الوطنية.', evidence: 'حصول المتعلمين على متوسط درجات مرتفع في اختبارات العلوم الوطنية، ارتفاع نسبة المتعلمين المحققين لمستويات الكفاءة والمتقدمة.', docs: 'تقارير نتائج الاختبارات الوطنية في مادة العلوم، وسجلات تحليل النتائج.' },
  { domain: 'نواتج التعلم', standard: 'التحصيل التعليمي', code: '3-1-1-4', text: 'يحقق المتعلمون تقدمًا في مجال القراءة قياسًا على مستوى أداء المدرسة السابق.', evidence: 'وجود تحسن ونمو في متوسط درجات المتعلمين في اختبارات القراءة مقارنة بالسنوات السابقة، زيادة النسبة في المستويات العليا.', docs: 'تقارير الاختبارات الوطنية التتبعية لعدة سنوات، وتقارير مقارنة وتحليل النمو السنوي.' },
  { domain: 'نواتج التعلم', standard: 'التحصيل التعليمي', code: '3-1-1-5', text: 'يحقق المتعلمون تقدمًا في مجال الرياضيات قياسًا على مستوى أداء المدرسة السابق.', evidence: 'تحسن مستمر في متوسط درجات المتعلمين في اختبارات الرياضيات، نمو إيجابي في نسبة الطلاب المحققين لمستويات الكفاءة والمتقدمة.', docs: 'تقارير الاختبارات الوطنية التتبعية في مادة الرياضيات، ورسوم بيانية لتقارير النمو.' },
  { domain: 'نواتج التعلم', standard: 'التحصيل التعليمي', code: '3-1-1-6', text: 'يحقق المتعلمون تقدمًا في مجال العلوم قياسًا على مستوى أداء المدرسة السابق.', evidence: 'تحسن إيجابي في متوسط درجات المتعلمين في اختبارات العلوم الوطنية، تناقص تدريجي للطلاب في مستويات الأداء الضعيفة.', docs: 'تقارير الاختبارات الوطنية التتبعية لعدة سنوات، وتقارير النمو التحصيلي.' },
  { domain: 'نواتج التعلم', standard: 'التطور الشخصي والصحي والاجتماعي', code: '3-2-1-1', text: 'يظهر المتعلمون الاعتزاز بالقيم والهوية الوطنية.', evidence: 'مشاركة فاعلة في البرامج والمناسبات الوطنية، احترام الرموز الوطنية، تمثل وتطبيق القيم الإسلامية والمجتمعية الأصيلة.', docs: 'سجلات الأنشطة والبرامج الوطنية، شواهد مصورة للمشاركات، واستمارات الملاحظة السلوكية.' },
  { domain: 'نواتج التعلم', standard: 'التطور الشخصي والصحي والاجتماعي', code: '3-2-1-2', text: 'يظهر المتعلمون اتجاهات إيجابية نحو ذواتهم.', evidence: 'تعبير المتعلمين عن ثقتهم بأنفسهم، المشاركة بشجاعة وتحمل المسؤولية، إظهار القدرة على الاستقلالية واتخاذ القرارات.', docs: 'تقارير الأنشطة الطلابية والإرشادية، سجلات تكريم الطلاب المبادرين، واستمارات الملاحظة.' },
  { domain: 'نواتج التعلم', standard: 'التطور الشخصي والصحي والاجتماعي', code: '3-2-1-3', text: 'يظهر المتعلمون التزامًا بالممارسات الصحية السليمة.', evidence: 'التزام بقواعد النظافة الشخصية، اختيار وجبات غذائية صحية، ممارسة النشاط البدني والحركي بانتظام.', docs: 'سجلات وبرامج الموجه الصحي، تقارير المقصف المدرسي، سجلات التربية البدنية، واستمارات ملاحظة النظافة.' },
  { domain: 'نواتج التعلم', standard: 'التطور الشخصي والصحي والاجتماعي', code: '3-2-1-4', text: 'يشارك المتعلمون في الأنشطة المجتمعية والأعمال التطوعية.', evidence: 'انخراط المتعلمين في البرامج والمبادرات التطوعية، تسجيل المتعلمين في منصات العمل التطوعي المعتمدة وإنجاز ساعات تطوعية.', docs: 'سجلات وبرامج العمل التطوعي في المدرسة، شهادات مشاركة الطلاب، وكشوفات حصر الساعات التطوعية المنجزة.' },
  { domain: 'نواتج التعلم', standard: 'التطور الشخصي والصحي والاجتماعي', code: '3-2-1-5', text: 'يلتزم المتعلمون بقواعد السلوك والمواظبة والانضباط المدرسي.', evidence: 'انخفاض في نسب الغياب والتأخر الصباحي، تدني المخالفات السلوكية، الالتزام بالأنظمة المدرسية.', docs: 'سجلات الحضور والغياب والإحصائيات، سجلات الموجه الطلابي للمخالفات، وتقارير الانضباط المدرسي.' },
  { domain: 'البيئة المدرسية', standard: 'المبنى المدرسي', code: '4-1-1-1', text: 'تنظيم مبنى المدرسة ملائم لعدد المتعلمين والمرحلة العمرية.', evidence: 'مساحات الفصول والممرات تتناسب مع أعداد المتعلمين، تصميم المبنى والمرافق يناسب الخصائص العمرية والجسمية، توافر مساحات للأنشطة.', docs: 'تقارير الطاقة الاستيعابية للمدرسة، سجلات حصر التجهيزات والمرافق، وجداول توزيع الطلاب.' },
  { domain: 'البيئة المدرسية', standard: 'المبنى المدرسي', code: '4-1-1-2', text: 'تتوافر فصول ومعامل ملائمة للعملية التعليمية تلبي احتياجات المتعلمين ومنهم ذوو الإعاقة.', evidence: 'تجهيزات الفصول الدراسية ملائمة وتعمل بكفاءة، توفر معامل مجهزة وتفعيلها، تهيئة الفصول والمعامل لحركة واستخدام ذوي الإعاقة.', docs: 'سجلات جرد وتجهيزات المعامل والفصول، جداول إشغال المعامل، وتقارير حصر وتلبية احتياجات ذوي الإعاقة.' },
  { domain: 'البيئة المدرسية', standard: 'المبنى المدرسي', code: '4-1-1-3', text: 'تلبي المرافق والخدمات المساندة احتياجات المتعلمين ومنهم ذوو الإعاقة.', evidence: 'توفر مرافق مساندة تعمل بكفاءة (مركز مصادر التعلم، المصلى، المقصف، العيادة)، سهولة وصول المتعلمين من ذوي الإعاقة لهذه المرافق.', docs: 'سجلات حصر المرافق المدرسية، سجلات وتيرة تفعيل مركز مصادر التعلم، وتقارير العيادة المدرسية والمقصف.' },
  { domain: 'البيئة المدرسية', standard: 'الأمن والسلامة', code: '4-2-1-1', text: 'تتوافر في فصول المدرسة ومعاملها وجميع مرافقها متطلبات الأمن والسلامة.', evidence: 'توفر أدوات السلامة وصلاحيتها، وضوح مخارج الطوارئ وخلوها من العوائق، خلو المبنى من التمديدات المكشوفة أو التصدعات.', docs: 'خطة الطوارئ والإخلاء المدرسية، تقارير وسجلات لجنة الأمن والسلامة المدرسية، وسجلات فحص أدوات السلامة.' },
  { domain: 'البيئة المدرسية', standard: 'الأمن والسلامة', code: '4-2-1-2', text: 'تعمل المدرسة على صيانة جميع مرافق المبنى وتجهيزاته بانتظام.', evidence: 'إصلاح الأعطال بشكل دوري وسريع، عدم وجود أثاث تالف أو رجيع متراكم يعيق الحركة.', docs: 'سجلات وبلاغات الأعطال والصيانة، تقارير الصيانة الدورية، وعقود الصيانة.' },
  { domain: 'البيئة المدرسية', standard: 'الأمن والسلامة', code: '4-2-1-3', text: 'تعمل المدرسة على نظافة المبنى المدرسي وجميع مرافقه بانتظام.', evidence: 'النظافة العامة والمستمرة لجميع المرافق والفصول، العناية بنظافة دورات المياه وتوفر أدوات النظافة بشكل دائم، التخلص الآمن من النفايات يومياً.', docs: 'جداول وسجلات متابعة النظافة اليومية، سجلات توفير أدوات ومواد النظافة، وعقود النظافة.' }
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

function renderSummary() {
  const items = getFilteredIndicators();
  const completed = items.filter((i) => rowState(i.code).status === 'مكتمل').length;
  const inProgress = items.filter((i) => rowState(i.code).status === 'قيد التنفيذ').length;
  const pending = items.filter((i) => rowState(i.code).status === 'لم يبدأ').length;
  summaryEl.innerHTML = `
    <span>المجال المختار: ${esc(state.filterDomain)}</span>
    <span>عدد المؤشرات المعروضة: ${items.length}</span>
    <span>مكتمل: ${completed}</span>
    <span>قيد التنفيذ: ${inProgress}</span>
    <span>لم يبدأ: ${pending}</span>
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
  const completed = items.filter((i) => rowState(i.code).status === 'مكتمل').length;
  const inProgress = items.filter((i) => rowState(i.code).status === 'قيد التنفيذ').length;
  const pending = items.filter((i) => rowState(i.code).status === 'لم يبدأ').length;
  const completionRate = items.length ? Math.round((completed / items.length) * 100) : 0;
  const exportDate = todayAr();

  let lastStandard = null;
  const rowsHtml = items.map((item) => {
    const current = rowState(item.code);
    
    // صف المعيار كعنوان فاصل
    let standardRow = '';
    if (item.standard !== lastStandard) {
        standardRow = `
            <tr class="row-standard">
                <td colspan="7">المعيار: ${esc(item.standard)}</td>
            </tr>
        `;
        lastStandard = item.standard;
    }

    return `
      ${standardRow}
      <tr>
        <td class="col-indicator">
            <div class="code-box">${esc(item.code)}</div>
            <div class="ind-text">${esc(item.text)}</div>
        </td>
        <td class="col-evidence small-text">${esc(item.evidence)}</td>
        <td class="col-docs small-text">${esc(item.docs)}</td>
        <td class="center-text">${esc(current.status)}</td>
        <td class="center-text">${esc(current.availability)}</td>
        <td class="center-text">${esc(current.selfEval)}</td>
        <td class="col-notes small-text">${esc(current.notes || '-')}</td>
      </tr>
    `;
  }).join('');

  const popup = window.open('', '_blank', 'width=1400,height=900');
  if (!popup) return;
  
  popup.document.write(`
    <html lang="ar" dir="rtl">
    <head>
    <meta charset="UTF-8">
    <title>تقرير الاعتماد المدرسي</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">
    <style>
      @page { size: A4 landscape; margin: 10mm; }
      :root {
        --teal-dark: #0e5f59;
        --teal-med: #136c65;
        --teal-light: #eaf6f4;
        --border-color: #bad1ce;
        --text-dark: #1a4240;
      }
      * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      body { 
          font-family: 'Tajawal', sans-serif; 
          margin: 0; 
          background: #fff; 
          color: var(--text-dark);
          font-size: 11px; /* تصغير الخط لاستيعاب المحتوى */
      }
      
      .sheet { width: 100%; padding: 0; }

      /* --- Header --- */
      .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid var(--teal-dark);
        padding-bottom: 15px;
        margin-bottom: 15px;
      }
      .header-side { text-align: center; width: 250px; }
      .header-side h3 { margin: 0; font-size: 14px; color: var(--teal-dark); font-weight: 800; line-height: 1.6; }
      .header-side p { margin: 2px 0; font-size: 12px; font-weight: 600; }
      
      .logo-box img { width: 140px; height: auto; }

      /* --- Info Bar (like the reference image) --- */
      .info-bar {
          display: flex;
          background: #fff;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          margin-bottom: 15px;
          overflow: hidden;
      }
      .info-item {
          flex: 1;
          padding: 8px 15px;
          border-left: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
      }
      .info-item:last-child { border-left: none; }
      .info-label { font-size: 10px; color: #666; font-weight: 700; margin-bottom: 2px; }
      .info-val { font-size: 13px; color: var(--teal-dark); font-weight: 800; }
      
      .progress-box { background: var(--teal-light); }

      /* --- Table --- */
      table { 
          width: 100%; 
          border-collapse: collapse; 
          border: 1px solid var(--border-color);
          table-layout: fixed; /* تثبيت العرض لمنع التمدد */
      }
      
      th {
          background-color: var(--teal-med);
          color: #fff;
          padding: 8px 5px;
          font-size: 11px;
          font-weight: 700;
          border: 1px solid #0b4d48;
          text-align: center;
      }

      td {
          padding: 6px 8px;
          border: 1px solid #dcecea;
          vertical-align: top;
          font-size: 11px;
          line-height: 1.4;
      }

      /* Row styling */
      tr:nth-child(even) td { background-color: #fcfdfd; }
      
      .row-standard td {
          background-color: #ebf5f4;
          color: var(--teal-dark);
          font-weight: 800;
          font-size: 12px;
          border-bottom: 2px solid var(--border-color);
          padding-top: 10px;
          padding-bottom: 5px;
      }

      /* Column Widths (optimized for landscape) */
      .col-indicator { width: 22%; }
      .col-evidence  { width: 22%; }
      .col-docs      { width: 18%; }
      .col-status    { width: 10%; }
      .col-avail     { width: 10%; }
      .col-eval      { width: 6%; }
      .col-notes     { width: 12%; }

      /* Inner Cell Styling */
      .code-box {
          display: inline-block;
          background: var(--teal-light);
          color: var(--teal-dark);
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 800;
          font-size: 10px;
          margin-bottom: 4px;
      }
      .ind-text { font-weight: 700; color: #222; }
      
      .small-text { font-size: 10px; color: #444; }
      .center-text { text-align: center; vertical-align: middle; font-weight: 600; }

      /* --- Footer --- */
      .footer-sigs {
          margin-top: 30px;
          display: flex;
          justify-content: space-between;
          padding: 0 50px;
          page-break-inside: avoid;
      }
      .sig-block {
          text-align: center;
          width: 200px;
      }
      .sig-title { font-weight: 700; color: var(--teal-dark); margin-bottom: 40px; }
      .sig-line { border-top: 1px dashed #999; width: 100%; display: block; }

    </style>
    </head>
    <body>
      <main class="sheet">
        
        <header class="header-container">
            <div class="header-side" style="text-align: right;">
                <h3>المملكة العربية السعودية<br>وزارة التعليم<br>الإدارة العامة للتعليم بالمنطقة الشرقية</h3>
            </div>
            <div class="logo-box">
                <img src="وزارة التعليم.png" alt="Logo">
            </div>
            <div class="header-side" style="text-align: left;">
                <h3>نموذج المتابعة المستمرة<br>تقرير الاعتماد المدرسي</h3>
                <p>تاريخ الإصدار: ${esc(exportDate)}</p>
            </div>
        </header>

        <div class="info-bar">
            <div class="info-item">
                <span class="info-label">اسم المدرسة</span>
                <span class="info-val">${esc(state.schoolName)}</span>
            </div>
            <div class="info-item">
                <span class="info-label">المجال</span>
                <span class="info-val">${esc(state.filterDomain)}</span>
            </div>
            <div class="info-item">
                <span class="info-label">المعيار المختار</span>
                <span class="info-val">${esc(state.filterStandard)}</span>
            </div>
             <div class="info-item">
                <span class="info-label">عدد المؤشرات</span>
                <span class="info-val">${items.length}</span>
            </div>
            <div class="info-item progress-box">
                <span class="info-label">نسبة الإنجاز</span>
                <span class="info-val">${completionRate}%</span>
            </div>
        </div>

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
        ` : '<div style="text-align:center; padding: 50px;">لا توجد مؤشرات مطابقة للفلاتر الحالية.</div>'}

        <div class="footer-sigs">
            <div class="sig-block">
                <div class="sig-title">قائد/ة المدرسة</div>
                <span class="sig-line"></span>
            </div>
            <div class="sig-block">
                <div class="sig-title">مشرف/ة الجودة</div>
                <span class="sig-line"></span>
            </div>
        </div>

      </main>
      <script>
        // طباعة تلقائية عند الفتح
        setTimeout(() => { window.print(); }, 1000);
      </script>
    </body>
    </html>
  `);
  popup.document.close();
});

render();
