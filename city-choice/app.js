// 城市选择测试 - 带老朋友式互动鼓励
var Q=[
{t:"周末晚上10点，你更可能在做什么？",o:[
  {l:"A",x:"还在加班或学习，总觉得时间不够用",tr:"ambition",s:4,enc:{emoji:"🔥",msg:"你身上那股不服输的劲儿，真的很珍贵",sub:"愿意为未来投资时间的人，运气都不会太差"}},
  {l:"B",x:"窝在沙发追剧，享受属于自己的慢时光",tr:"comfort",s:4,enc:{emoji:"🛋️",msg:"懂得休息的人，才懂得生活",sub:"你不是懒，你是在给自己充电，这很重要"}}
]},
{t:"你对'内卷'这个词的态度是？",o:[
  {l:"A",x:"卷就卷吧，不卷怎么出头",tr:"ambition",s:4,enc:{emoji:"💪",msg:"有野心从来不是坏事",sub:"但记住，卷是为了更好的生活，不是替代生活"}},
  {l:"B",x:"听到就累，人生不是只有竞争",tr:"comfort",s:4,enc:{emoji:"😌",msg:"你活得很清醒，这很难得",sub:"不是所有人都需要跑最快，走自己的节奏就是赢"}}
]},
{t:"看到同龄人升职加薪，你的第一反应？",o:[
  {l:"A",x:"我也要更努力，不能被落下",tr:"ambition",s:4,enc:{emoji:"🎯",msg:"你的上进心是你最大的武器",sub:"但每个人的赛道不一样，别用别人的地图找自己的路"}},
  {l:"B",x:"他有他的节奏，我有我的",tr:"comfort",s:4,enc:{emoji:"🧘",msg:"这种内心的稳定感，很多人30岁都学不会",sub:"不被别人带着跑，本身就是一种强大"}}
]},
{t:"你理想中的居住环境是？",o:[
  {l:"A",x:"市中心高层公寓，楼下就是地铁和商场",tr:"ambition",s:4,enc:{emoji:"🌃",msg:"你喜欢站在高处看世界，这很酷",sub:"城市的天际线，配得上你的野心"}},
  {l:"B",x:"带院子的小房子，能种花养猫看日落",tr:"comfort",s:4,enc:{emoji:"🌻",msg:"你心里住着一个诗人",sub:"能为一朵花开而开心的人，永远不会输给生活"}}
]},
{t:"你对'35岁危机'怎么看？",o:[
  {l:"A",x:"所以要趁年轻拼命积累",tr:"ambition",s:4,enc:{emoji:"⚡",msg:"未雨绸缪的人，永远不会被时代抛弃",sub:"但别忘了，身体也是需要维护的资产"}},
  {l:"B",x:"提前规划，找一个能长期发展的环境",tr:"adapt",s:4,enc:{emoji:"🧠",msg:"你这种战略性思维，老板都不一定有",sub:"选择大于努力，你已经在做最重要的事了"}}
]},
{t:"通勤时间1小时以上，你能接受吗？",o:[
  {l:"A",x:"能接受，大城市通勤是常态",tr:"ambition",s:4,enc:{emoji:"🚇",msg:"你的忍耐力让人佩服",sub:"能吃苦的人很多，但懂得为什么吃苦的人很少——你就是后者"}},
  {l:"B",x:"不能，每天2小时在路上太浪费生命了",tr:"comfort",s:4,enc:{emoji:"⏰",msg:"你太懂得珍惜时间了",sub:"时间就是生命，你比大多数人都更尊重自己"}}
]},
{t:"你对'机会'的理解更接近？",o:[
  {l:"A",x:"机会在大城市，人脉、资源、信息都在那里",tr:"ambition",s:4,enc:{emoji:"🌟",msg:"你看到了别人看不到的可能性",sub:"相信自己的判断，你的直觉往往是对的"}},
  {l:"B",x:"机会在哪里都可以创造，关键是生活方式",tr:"comfort",s:4,enc:{emoji:"✨",msg:"你是那种在哪里都能发光的人",sub:"不被地点定义价值，这才是真正的自由"}}
]},
{t:"月薪3万996 vs 月薪1万朝九晚五，你选？",o:[
  {l:"A",x:"3万，年轻不拼什么时候拼",tr:"ambition",s:4,enc:{emoji:"🚀",msg:"你的冲劲让人热血沸腾",sub:"年轻就是最大的资本，趁能拼的时候拼一把，不后悔"}},
  {l:"B",x:"1万，生活质量和时间更重要",tr:"comfort",s:4,enc:{emoji:"🌿",msg:"你比大多数人都更早想明白了",sub:"钱可以再赚，但错过的生活不会重来——你很智慧"}}
]},
{t:"到一个新城市，你多久能适应？",o:[
  {l:"A",x:"很快，一两周就能找到节奏",tr:"adapt",s:4,enc:{emoji:"🦎",msg:"你的适应力简直是超能力",sub:"这种能力在任何一个城市都是硬通货"}},
  {l:"B",x:"需要一两个月，慢慢建立安全感",tr:"comfort",s:4,enc:{emoji:"🏡",msg:"慢热的人往往最长情",sub:"你不随便扎根，但一旦扎下去就很深——这很珍贵"}}
]},
{t:"你换过几个城市生活/工作？",o:[
  {l:"A",x:"2个以上，适应力是我的强项",tr:"adapt",s:4,enc:{emoji:"✈️",msg:"你的阅历就是你的财富",sub:"每座城市都在你身上留下了印记，这让你独一无二"}},
  {l:"B",x:"0-1个，喜欢扎根的感觉",tr:"comfort",s:4,enc:{emoji:"🌳",msg:"能把一个地方活成家，是一种了不起的能力",sub:"深度比广度更难，而你做到了"}}
]},
{t:"面对陌生的社交场合，你通常？",o:[
  {l:"A",x:"主动认识新朋友，拓展人脉",tr:"adapt",s:4,enc:{emoji:"🤝",msg:"你的社交能力是你隐形的翅膀",sub:"敢主动的人，已经赢了90%的人"}},
  {l:"B",x:"有点紧张，更喜欢和老朋友待着",tr:"connect",s:4,enc:{emoji:"💛",msg:"重感情的人，运气不会差",sub:"有一两个真心朋友，胜过一百个点头之交"}}
]},
{t:"你对'不确定性'的态度？",o:[
  {l:"A",x:"习惯了，甚至觉得刺激",tr:"adapt",s:4,enc:{emoji:"🎢",msg:"你把人生过成了冒险，太酷了",sub:"能在不确定中找到乐趣，这是一种天赋"}},
  {l:"B",x:"不太舒服，喜欢有计划的生活",tr:"comfort",s:4,enc:{emoji:"📋",msg:"靠谱是你最闪亮的标签",sub:"世界需要冒险家，也需要你这样的定海神针"}}
]},
{t:"如果突然失业，你会？",o:[
  {l:"A",x:"立刻更新简历，海投全国",tr:"adapt",s:4,enc:{emoji:"⚡",msg:"你的行动力让人佩服",sub:"危机来了你不是逃避而是迎上去，这已经赢了"}},
  {l:"B",x:"先休息一阵，想想下一步",tr:"comfort",s:4,enc:{emoji:"🧘",msg:"暂停不是退缩，是蓄力",sub:"懂得停下来思考的人，下一步往往走得更远"}}
]},
{t:"你觉得自己的核心竞争力是？",o:[
  {l:"A",x:"快速学习和适应新环境的能力",tr:"adapt",s:4,enc:{emoji:"🧩",msg:"这种能力比任何学历都值钱",sub:"在这个快速变化的世界，你的适应力就是最好的护城河"}},
  {l:"B",x:"在熟悉领域深耕的专业能力",tr:"comfort",s:4,enc:{emoji:"💎",msg:"专注是这个时代最稀缺的品质",sub:"在一个领域做到极致，你就是不可替代的"}}
]},
{t:"搬家频率？",o:[
  {l:"A",x:"一年搬一次也不嫌烦",tr:"adapt",s:4,enc:{emoji:"📦",msg:"你的洒脱让人羡慕",sub:"不被物品和地点束缚，你就是自由的"}},
  {l:"B",x:"能不搬就不搬，搬家太累了",tr:"comfort",s:4,enc:{emoji:"🏠",msg:"恋家的人，心里永远有归处",sub:"有一个让你不想离开的地方，这本身就是幸福"}}
]},
{t:"父母希望你回老家，你的态度？",o:[
  {l:"A",x:"理解但不接受，我有自己的路",tr:"ambition",s:4,enc:{emoji:"🗺️",msg:"敢于坚持自己的人，值得尊敬",sub:"爱父母不等于复制他们的人生，你做得对"}},
  {l:"B",x:"会认真考虑，家人团聚很重要",tr:"connect",s:4,enc:{emoji:"👨‍👩‍👧",msg:"把家人放在心上的人，永远不会走丢",sub:"亲情是最贵的奢侈品，你懂得珍惜"}}
]},
{t:"你的朋友圈子主要是？",o:[
  {l:"A",x:"分散在全国各地，线上联系为主",tr:"adapt",s:4,enc:{emoji:"🌐",msg:"你的世界很大，这很迷人",sub:"朋友遍布天涯海角，说明你是一个值得被记住的人"}},
  {l:"B",x:"集中在同一个城市，经常线下聚会",tr:"connect",s:4,enc:{emoji:"🍻",msg:"能经常见面的人，是生活给你的礼物",sub:"有人陪你吃饭聊天，这就是最好的日子"}}
]},
{t:"你对'孤独'的感受？",o:[
  {l:"A",x:"偶尔孤独，但自由更重要",tr:"ambition",s:4,enc:{emoji:"🦅",msg:"能和孤独做朋友的人，内心都很强大",sub:"享受独处是一种高级能力，你已经拥有了"}},
  {l:"B",x:"比较怕孤独，需要有人陪伴",tr:"connect",s:4,enc:{emoji:"🤗",msg:"需要别人不是软弱，是勇敢",sub:"敢于表达自己的需求，比假装坚强更需要勇气"}}
]},
{t:"过年回家，你最享受什么？",o:[
  {l:"A",x:"短暂充电，然后继续出发",tr:"ambition",s:4,enc:{emoji:"🔋",msg:"你是那种永远在路上的人",sub:"家是你的充电站，不是终点站——这很清醒"}},
  {l:"B",x:"家的温暖，甚至不想走了",tr:"connect",s:4,enc:{emoji:"❤️",msg:"能被家治愈的人，心里有爱",sub:"有一个让你不想离开的地方，说明你被好好爱着"}}
]},
{t:"你更看重哪种关系？",o:[
  {l:"A",x:"能互相成就的合作伙伴",tr:"ambition",s:4,enc:{emoji:"🤜🤛",msg:"你懂得价值交换，这是成熟的标志",sub:"最好的关系是互相照亮，你已经在寻找这样的人了"}},
  {l:"B",x:"能随时约饭的知心好友",tr:"connect",s:4,enc:{emoji:"🍜",msg:"你注重的是真实的情感连接",sub:"能随时约出来吃饭的朋友，是生活给你的糖"}}
]},
{t:"如果在大城市混得一般，你会？",o:[
  {l:"A",x:"继续坚持，相信量变引起质变",tr:"ambition",s:4,enc:{emoji:"🏔️",msg:"坚持是一种信仰，你有",sub:"大多数人在黎明前放弃，而你选择继续走——这很了不起"}},
  {l:"B",x:"认真评估是否值得，可能考虑换个地方",tr:"adapt",s:4,enc:{emoji:"🧭",msg:"及时调整方向比盲目坚持更聪明",sub:"你不是放弃，你是在优化人生策略"}}
]},
{t:"你内心的'家乡'概念？",o:[
  {l:"A",x:"家乡是回不去的远方",tr:"adapt",s:4,enc:{emoji:"🌅",msg:"你的世界已经比家乡大了很多",sub:"回不去不是遗憾，是你已经走了很远的路"}},
  {l:"B",x:"家乡是永远的退路和港湾",tr:"connect",s:4,enc:{emoji:"⚓",msg:"有根的人，飞得再远也不怕",sub:"知道身后有港湾，这让你更有底气去闯"}}
]},
{t:"你更羡慕哪种人？",o:[
  {l:"A",x:"在大城市打拼出一片天的人",tr:"ambition",s:4,enc:{emoji:"🏆",msg:"你羡慕的，其实就是你想成为的",sub:"羡慕不是嫉妒，是内心的导航在告诉你方向"}},
  {l:"B",x:"在小城市过得有滋有味的人",tr:"comfort",s:4,enc:{emoji:"😊",msg:"你懂得欣赏平凡生活里的光",sub:"能把小日子过好的人，才是真正的生活家"}}
]},
{t:"你理想中的周末是？",o:[
  {l:"A",x:"看展、探店、参加活动，城市资源用起来",tr:"ambition",s:4,enc:{emoji:"🎨",msg:"你对生活充满好奇心，这让你永远年轻",sub:"把城市当成游乐场的人，永远不会无聊"}},
  {l:"B",x:"自然醒、逛菜市场、做顿饭、遛弯晒太阳",tr:"comfort",s:4,enc:{emoji:"🌞",msg:"你懂得生活最本真的快乐",sub:"能在平凡日常里找到幸福感，这是最厉害的能力"}}
]},
{t:"你对'降薪去小城市'的态度？",o:[
  {l:"A",x:"不太能接受，收入下降太多",tr:"ambition",s:4,enc:{emoji:"💰",msg:"你对价值的判断很清醒",sub:"知道自己值多少钱，这是职场最基本的底气"}},
  {l:"B",x:"如果生活质量提升，可以接受",tr:"comfort",s:4,enc:{emoji:"⚖️",msg:"你懂得什么是真正的性价比",sub:"钱是工具不是目的，你比大多数人都通透"}}
]},
{t:"你觉得自己是哪种人？",o:[
  {l:"A",x:"目标感强，一直在往前冲",tr:"ambition",s:4,enc:{emoji:"🏃",msg:"你身上有光，别让它灭掉",sub:"一直往前跑的人，总有一天会跑到想去的地方"}},
  {l:"B",x:"随遇而安，享受当下的状态",tr:"comfort",s:4,enc:{emoji:"🌸",msg:"活在当下是一种天赋",sub:"不是每个人都能安住此刻，而你做到了"}}
]},
{t:"你更在意什么？",o:[
  {l:"A",x:"个人成长和职业发展空间",tr:"ambition",s:4,enc:{emoji:"📈",msg:"你对自己有要求，这很迷人",sub:"不满足于现状的人，才有机会创造不一样的未来"}},
  {l:"B",x:"生活幸福感和日常小确幸",tr:"comfort",s:4,enc:{emoji:"✨",msg:"你把幸福的定义握在自己手里",sub:"幸福感不是别人给的，是自己选的——你早就懂了"}}
]},
{t:"如果给你一次重新选择的机会，你会？",o:[
  {l:"A",x:"去更大的城市闯一闯",tr:"ambition",s:4,enc:{emoji:"🌆",msg:"你的内心还有没熄灭的火",sub:"想闯就闯，人生最大的遗憾不是失败，是'我本可以'"}},
  {l:"B",x:"选一个舒服的城市安定下来",tr:"comfort",s:4,enc:{emoji:"🏡",msg:"你找到了内心真正的渴望",sub:"知道自己想要什么，比拥有什么更重要"}}
]}];

var R={
bigcity:{em:"🏙️",lb:"大城市拼搏者",ti:"北上广深才是你的主场",su:"你骨子里有股不服输的劲儿，大城市的高压对你来说是燃料不是负担。",ad:"你的野心和适应力决定了你适合在一线城市发展。建议选择行业集聚的城市（互联网去深圳/北京，金融去上海，电商去杭州），前3年把重心放在积累资源和能力上，不要过早买房绑定自己。",cl:"type-bigcity"},
smallcity:{em:"🌿",lb:"小城市生活家",ti:"你的幸福不在摩天大楼里",su:"比起年薪百万，你更在意生活里有阳光、有烟火气、有爱的人在身边。",ad:"你不需要用'拼'来证明自己的价值。建议选择有产业支撑的二三线城市（苏州、珠海、昆明、烟台等），找一份稳定的工作或远程办公，把省下的通勤时间用来生活。",cl:"type-smallcity"},
balance:{em:"⚖️",lb:"双城平衡者",ti:"你可以鱼和熊掌兼得",su:"你既有在大城市打拼的能力，也懂得适时退后享受生活，是最灵活的那类人。",ad:"你适合'双城模式'：在大城市工作积累资本，在周边宜居城市置业生活。或者选择成都、杭州、南京这类'新一线'——既有发展空间又有生活品质。远程办公是你的最佳拍档。",cl:"type-balance"},
explorer2:{em:"🧳",lb:"城市游牧者",ti:"你不属于任何一座城",su:"对你来说，城市只是背景，你才是主角。每个阶段换一座城，就是换一种人生。",ad:"你天生适合'数字游民'的生活方式。不要强迫自己安定下来——那会扼杀你的创造力。建议先积累一个可以远程变现的技能，然后每年换2-3个城市生活，找到真正让你心动的地方再考虑定居。",cl:"type-explorer2"}
};

var cur=0,sc={ambition:0,comfort:0,adapt:0,connect:0},ans=[],paid=false,WECHAT_ID='haowanzy666';

function $(id){return document.getElementById(id)}
function show(id){document.querySelectorAll('.screen').forEach(function(s){s.classList.remove('active')});$(id).classList.add('active')}
function toast(msg){var el=document.createElement('div');el.className='toast';el.textContent=msg;document.body.appendChild(el);setTimeout(function(){el.remove()},2000)}

// ===== 互动鼓励弹窗 =====
function showEncourage(enc,callback){
  var overlay=document.createElement('div');
  overlay.className='encourage-overlay';
  overlay.innerHTML='<div class="encourage-card"><div class="encourage-emoji">'+enc.emoji+'</div><div class="encourage-msg">'+enc.msg+'</div><div class="encourage-sub">'+enc.sub+'</div><button class="encourage-btn" id="encOkBtn">收到！继续下一题 ✨</button></div>';
  document.body.appendChild(overlay);
  document.getElementById('encOkBtn').onclick=function(){
    overlay.classList.add('fadeout');
    setTimeout(function(){overlay.remove();if(callback)callback();},300);
  };
}

function startTest(){cur=0;sc={ambition:0,comfort:0,adapt:0,connect:0};ans=[];paid=false;show('screen-test');renderQ()}
function renderQ(){if(cur>=Q.length){showResult();return}var q=Q[cur];$('curQ').textContent=cur+1;$('totalQ').textContent=Q.length;$('qNum').textContent='QUESTION '+String(cur+1).padStart(2,'0');$('qText').textContent=q.t;$('progressFill').style.width=(cur/Q.length*100)+'%';var h='';q.o.forEach(function(o,i){h+='<button class="option-btn" onclick="pick('+i+')"><span class="option-letter">'+o.l+'</span><span class="option-text">'+o.x+'</span></button>'});$('options').innerHTML=h}

function pick(i){
  var q=Q[cur],o=q.o[i];
  sc[o.tr]+=o.s;
  ans.push({q:cur,pick:i});
  // 显示鼓励弹窗
  showEncourage(o.enc,function(){
    cur++;
    renderQ();
  });
}

function determineType(){var a=sc.ambition,b=sc.comfort,c=sc.adapt,d=sc.connect;if(a>=26&&c>=20)return'bigcity';if(b>=26&&d>=20)return'smallcity';if(c>=22&&a>=18)return'balance';if(d>=18&&b>=18)return'smallcity';if(a+c>=44)return'bigcity';if(b+d>=44)return'smallcity';if(c>=20)return'balance';return'explorer2'}

function showResult(){var t=determineType(),r=R[t],max=28;$('resultCard').className='result-card '+r.cl;$('resultEmoji').textContent=r.em;$('resultTypeLabel').textContent=r.lb;$('resultTitle').textContent=r.ti;$('resultSubtitle').textContent=r.su;var shortAdvice=r.ad.substring(0,50)+'……';$('adviceText').textContent=shortAdvice;var dims=[{key:'ambition',label:'拼搏欲',cls:'ambition',val:sc.ambition},{key:'comfort',label:'舒适需求',cls:'comfort',val:sc.comfort},{key:'adapt',label:'适应力',cls:'adapt',val:sc.adapt},{key:'connect',label:'情感连接',cls:'connect',val:sc.connect}];var secHtml='';dims.forEach(function(d){var pct=Math.round(d.val/max*100);secHtml+='<div class="score-item"><div class="score-label">'+d.label+'</div><div class="score-bar-wrap"><div class="score-bar-fill '+d.cls+'" style="width:'+pct+'%"></div></div><div class="score-val">'+d.val+'/'+max+'</div></div>'});$('scoreSection').innerHTML=secHtml;if(paid){$('adviceText').textContent=r.ad;$('paywallBanner').classList.add('hidden')}show('screen-result');window.scrollTo(0,0)}

function showPay(){show('screen-pay')}
function handlePay(){paid=true;toast('🎉 解锁成功！查看完整报告');var t=determineType(),r=R[t];$('adviceText').textContent=r.ad;$('paywallBanner').classList.add('hidden');show('screen-result')}
function copyWechat(){navigator.clipboard.writeText(WECHAT_ID).then(function(){toast('✅ 已复制微信号：'+WECHAT_ID+'\n打开微信添加好友即可领取')}).catch(function(){toast('微信号：'+WECHAT_ID+'\n请手动搜索添加')})}
function restartTest(){startTest()}
function shareResult(){var t=determineType(),r=R[t],text='我测了「你适合大城市拼还是小城市躺？」，结果是：'+r.em+' '+r.lb+' — '+r.ti;if(navigator.share){navigator.share({title:'你适合大城市拼还是小城市躺？',text:text,url:location.href})}else{navigator.clipboard.writeText(text+' '+location.href).then(function(){toast('📋 已复制分享文案')})}}
renderQ();
