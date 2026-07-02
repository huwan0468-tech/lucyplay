// 心理测试 - 你适合继续打工还是创业？
// 32题 · 4维度 · 4种结果类型

// ========== 题库 ==========
var Q = [
  // 冒险倾向 (8题, Q1-Q8)
  { t:"面对一个高风险但可能高回报的机会，你的第一反应是？", o:[
    { l:"A", x:"兴奋，仔细评估后可能行动", tr:"risk", s:4 },
    { l:"B", x:"谨慎，更倾向稳健的选择", tr:"risk", s:1 }
  ]},
  { t:"你是否愿意为了创业放弃稳定的工资收入？", o:[
    { l:"A", x:"如果有足够积蓄和明确计划，愿意", tr:"risk", s:4 },
    { l:"B", x:"很难接受没有固定收入的生活", tr:"risk", s:1 }
  ]},
  { t:"朋友形容你时，更接近哪个词？", o:[
    { l:"A", x:"冒险家", tr:"risk", s:4 },
    { l:"B", x:"规划师", tr:"risk", s:1 }
  ]},
  { t:"投资时你更偏好？", o:[
    { l:"A", x:"高成长性但波动大的标的", tr:"risk", s:4 },
    { l:"B", x:"稳定分红、低波动的标的", tr:"risk", s:1 }
  ]},
  { t:"面对未知领域，你的态度是？", o:[
    { l:"A", x:"跃跃欲试，边做边学", tr:"risk", s:4 },
    { l:"B", x:"先充分调研再做决定", tr:"risk", s:1 }
  ]},
  { t:'你如何看待"失败"？', o:[
    { l:"A", x:"失败是必经之路，快速试错", tr:"risk", s:4 },
    { l:"B", x:"尽量规避失败，追求稳妥", tr:"risk", s:1 }
  ]},
  { t:"如果有一个创业想法，你会？", o:[
    { l:"A", x:"马上做最小原型验证", tr:"risk", s:4 },
    { l:"B", x:"先写完整商业计划书", tr:"risk", s:1 }
  ]},
  { t:'你对"稳定"这个词的感受是？', o:[
    { l:"A", x:"有点无聊，意味着停滞", tr:"risk", s:4 },
    { l:"B", x:"让人安心，是生活的基础", tr:"risk", s:1 }
  ]},
  // 创造力 (8题, Q9-Q16)
  { t:"遇到问题时，你更倾向于？", o:[
    { l:"A", x:"自己想新办法解决", tr:"create", s:4 },
    { l:"B", x:"参考已有的成熟方案", tr:"create", s:1 }
  ]},
  { t:"在工作中，你更喜欢？", o:[
    { l:"A", x:"从0到1搭建新项目", tr:"create", s:4 },
    { l:"B", x:"在成熟体系里优化迭代", tr:"create", s:1 }
  ]},
  { t:"你的桌面/房间通常是？", o:[
    { l:"A", x:"有创意但有点乱", tr:"create", s:4 },
    { l:"B", x:"整洁有序", tr:"create", s:1 }
  ]},
  { t:"开会时你更常扮演什么角色？", o:[
    { l:"A", x:"提新点子的人", tr:"create", s:4 },
    { l:"B", x:"梳理逻辑、做总结的人", tr:"create", s:1 }
  ]},
  { t:"你如何看待规则和流程？", o:[
    { l:"A", x:"必要的框架，但可以打破", tr:"create", s:4 },
    { l:"B", x:"保证效率的基础，应当遵守", tr:"create", s:1 }
  ]},
  { t:"空闲时你更可能做什么？", o:[
    { l:"A", x:"捣鼓新想法或副业项目", tr:"create", s:4 },
    { l:"B", x:"看书学习或陪伴家人", tr:"create", s:1 }
  ]},
  { t:"你更欣赏哪种人？", o:[
    { l:"A", x:"天马行空但能落地的创新者", tr:"create", s:4 },
    { l:"B", x:"踏实可靠、执行力强的专家", tr:"create", s:1 }
  ]},
  { t:"做决策时，你更依赖？", o:[
    { l:"A", x:"直觉和灵感", tr:"create", s:4 },
    { l:"B", x:"数据和逻辑分析", tr:"create", s:1 }
  ]},
  // 领导力 (8题, Q17-Q24)
  { t:"团队项目中，你通常？", o:[
    { l:"A", x:"自然成为主导者", tr:"lead", s:4 },
    { l:"B", x:"做好自己的分工", tr:"lead", s:1 }
  ]},
  { t:"面对意见分歧，你会？", o:[
    { l:"A", x:"坚持自己观点，说服他人", tr:"lead", s:4 },
    { l:"B", x:"寻求共识，愿意妥协", tr:"lead", s:1 }
  ]},
  { t:'你如何看待"管理他人"？', o:[
    { l:"A", x:"很有成就感，乐于培养团队", tr:"lead", s:4 },
    { l:"B", x:"挺累的，更想管好自己", tr:"lead", s:1 }
  ]},
  { t:"压力大的时候，你通常？", o:[
    { l:"A", x:"越压越勇，激发斗志", tr:"lead", s:4 },
    { l:"B", x:"需要时间消化和调整", tr:"lead", s:1 }
  ]},
  { t:'你对"不确定性"的容忍度？', o:[
    { l:"A", x:"很高，不确定性意味着机会", tr:"lead", s:4 },
    { l:"B", x:"较低，希望有清晰的路径", tr:"lead", s:1 }
  ]},
  { t:"做重要决定时，你更相信？", o:[
    { l:"A", x:"自己的判断", tr:"lead", s:4 },
    { l:"B", x:"多方咨询后的综合意见", tr:"lead", s:1 }
  ]},
  { t:'你对"权力"的态度？', o:[
    { l:"A", x:"权力意味着责任和影响力", tr:"lead", s:4 },
    { l:"B", x:"对权力没有特别的追求", tr:"lead", s:1 }
  ]},
  { t:"面对竞争对手，你的心态是？", o:[
    { l:"A", x:"兴奋，竞争让人进步", tr:"lead", s:4 },
    { l:"B", x:"保持距离，专注自身", tr:"lead", s:1 }
  ]},
  // 自由渴望 (8题, Q25-Q32)
  { t:"你对朝九晚五的看法？", o:[
    { l:"A", x:"束缚创造力，想逃离", tr:"free", s:4 },
    { l:"B", x:"挺好的，规律让人安心", tr:"free", s:1 }
  ]},
  { t:"理想的工作方式是？", o:[
    { l:"A", x:"自主安排时间和地点", tr:"free", s:4 },
    { l:"B", x:"有明确分工和协作环境", tr:"free", s:1 }
  ]},
  { t:'你如何看待"老板"这个角色？', o:[
    { l:"A", x:"希望自己成为老板", tr:"free", s:4 },
    { l:"B", x:"好的老板是导师，愿意追随", tr:"free", s:1 }
  ]},
  { t:"如果财务自由了，你会？", o:[
    { l:"A", x:"继续折腾新项目", tr:"free", s:4 },
    { l:"B", x:"享受生活，做喜欢的事", tr:"free", s:1 }
  ]},
  { t:'你对"打工"这个词的感受？', o:[
    { l:"A", x:"有点负面，像是被限制", tr:"free", s:4 },
    { l:"B", x:"中性词，是一种选择", tr:"free", s:1 }
  ]},
  { t:"被安排任务时，你的反应？", o:[
    { l:"A", x:"先质疑必要性，再决定怎么做", tr:"free", s:4 },
    { l:"B", x:"理解目标后高效执行", tr:"free", s:1 }
  ]},
  { t:"你理想的一天是怎样的？", o:[
    { l:"A", x:"没有固定安排，跟随灵感", tr:"free", s:4 },
    { l:"B", x:"有明确计划，高效完成任务", tr:"free", s:1 }
  ]},
  { t:"回顾你的职业生涯，你更骄傲于？", o:[
    { l:"A", x:"自己独立完成的项目", tr:"free", s:4 },
    { l:"B", x:"在团队中创造的价值", tr:"free", s:1 }
  ]}
];

// ========== 结果类型 ==========
var R = {
  entrepreneur: {
    em:"🚀", lb:"天生创业者",
    ti:"你骨子里流着创业的血",
    su:"冒险精神、创造力、领导力三项全能，打工对你来说只是暂时的修炼场。",
    ad:"你已经具备创业的核心特质，缺的可能只是一个对的时机和方向。建议从副业开始验证想法，不要裸辞。找到第一个付费客户比完美的BP重要100倍。",
    cl:"type-entrepreneur"
  },
  corporate: {
    em:"🏢", lb:"职场精英",
    ti:"大平台才是你的主场",
    su:"你善于在体系内发挥影响力，稳定的环境和清晰的晋升路径更适合你。",
    ad:"你的优势在于组织内的资源整合和团队协作。不必羡慕创业者，大厂高管的影响力不亚于小公司老板。建议选择高成长性公司，用期权分享企业增长红利。",
    cl:"type-corporate"
  },
  freelancer: {
    em:"🎨", lb:"自由创作者",
    ti:"你适合走自由职业之路",
    su:"你渴望自由但不喜欢管人，用专业技能独立变现是最适合你的路径。",
    ad:"你不一定需要「创业」，自由职业可能是更好的选择。聚焦一个高价值技能，打造个人品牌，用作品吸引客户。从接单平台起步，逐步建立自己的客户池。",
    cl:"type-freelancer"
  },
  explorer: {
    em:"🔍", lb:"探索者",
    ti:"你正处在职业转型期",
    su:"你对现状不太满意，但还没找到明确方向，探索本身就是答案的一部分。",
    ad:"你内心有改变的火苗，但还没烧成大火。建议先利用业余时间多尝试不同方向，和各行各业的创业者聊聊，找到那个让你「睡不着觉也想做」的事。",
    cl:"type-explorer"
  }
};

// ========== 状态 ==========
var cur = 0, sc = { risk:0, create:0, lead:0, free:0 }, ans = [], FREE = 5, paid = false;

function $(id) { return document.getElementById(id); }

function show(id) {
  document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
  $(id).classList.add('active');
}

function toast(msg) {
  var el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(function() { el.remove(); }, 2000);
}

// ========== 测试流程 ==========
function startTest() {
  cur = 0; sc = { risk:0, create:0, lead:0, free:0 }; ans = []; paid = false;
  show('screen-test');
  renderQ();
}

function renderQ() {
  if (cur >= Q.length) { showResult(); return; }
  var q = Q[cur];
  $('curQ').textContent = cur + 1;
  $('totalQ').textContent = Q.length;
  $('qNum').textContent = 'QUESTION ' + String(cur + 1).padStart(2, '0');
  $('qText').textContent = q.t;
  $('progressFill').style.width = (cur / Q.length * 100) + '%';
  var ft = $('freeTag');
  if (cur >= FREE) { ft.textContent = '🔒 需解锁'; ft.style.color = 'var(--gold)'; }
  else { ft.textContent = '🆓 免费体验'; ft.style.color = 'var(--text2)'; }
  var html = '';
  q.o.forEach(function(opt, i) {
    html += '<button class="option-btn" onclick="pick(' + i + ')"><span class="option-letter">' + opt.l + '</span><span class="option-text">' + opt.x + '</span></button>';
  });
  $('options').innerHTML = html;
}

function pick(i) {
  if (cur >= FREE && !paid) {
    showPay();
    return;
  }
  var q = Q[cur];
  var opt = q.o[i];
  sc[opt.tr] += opt.s;
  ans.push({ q: cur, pick: i });
  cur++;
  renderQ();
}

// ========== 结果判定 ==========
function determineType() {
  var risk = sc.risk, create = sc.create, lead = sc.lead, free = sc.free;
  if (risk >= 28 && create >= 24) return 'entrepreneur';
  if (lead >= 26 && risk < 24) return 'corporate';
  if (free >= 28 && lead < 24) return 'freelancer';
  if (create >= 26 && risk < 22) return 'freelancer';
  if (risk + create + lead >= 72) return 'entrepreneur';
  if (lead + create >= 48 && free < 24) return 'corporate';
  if (free + create >= 48 && lead < 26) return 'freelancer';
  return 'explorer';
}

function showResult() {
  var type = determineType();
  var r = R[type];
  var maxScore = 32;
  $('resultCard').className = 'result-card ' + r.cl;
  $('resultEmoji').textContent = r.em;
  $('resultTypeLabel').textContent = r.lb;
  $('resultTitle').textContent = r.ti;
  $('resultSubtitle').textContent = r.su;
  $('adviceText').textContent = r.ad;
  var dims = [
    { key:'risk', label:'冒险精神', cls:'risk', val:sc.risk },
    { key:'create', label:'创造力', cls:'create', val:sc.create },
    { key:'lead', label:'领导力', cls:'lead', val:sc.lead },
    { key:'free', label:'自由渴望', cls:'free', val:sc.free }
  ];
  var secHtml = '';
  dims.forEach(function(d) {
    var pct = Math.round(d.val / maxScore * 100);
    secHtml += '<div class="score-item"><div class="score-label">' + d.label + '</div><div class="score-bar-wrap"><div class="score-bar-fill ' + d.cls + '" style="width:' + pct + '%"></div></div><div class="score-val">' + d.val + '/' + maxScore + '</div></div>';
  });
  $('scoreSection').innerHTML = secHtml;
  show('screen-result');
  window.scrollTo(0, 0);
}

// ========== 付费相关 ==========
function showPay() {
  show('screen-pay');
}

function handlePay() {
  paid = true;
  toast('🎉 解锁成功！继续答题吧');
  show('screen-test');
  renderQ();
}

// ========== 其他操作 ==========
function restartTest() {
  startTest();
}

function shareResult() {
  var type = determineType();
  var r = R[type];
  var text = '我测了「你适合打工还是创业？」，结果是：' + r.em + ' ' + r.lb + ' — ' + r.ti;
  if (navigator.share) {
    navigator.share({ title: '你适合打工还是创业？', text: text, url: location.href });
  } else {
    navigator.clipboard.writeText(text + ' ' + location.href).then(function() {
      toast('📋 已复制分享文案');
    });
  }
}

// ========== 初始化 ==========
renderQ();
