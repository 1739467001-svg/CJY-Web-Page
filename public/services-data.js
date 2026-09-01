/* =====================================================================
   CJY · 服务清单共享模块 (services-data.js)
   一份数据，两处使用：首页弹窗 (index.html) 与独立页 (services.html)。
   改价格 / 加服务只需要改本文件的 services 数组。
   ===================================================================== */
(function () {
  "use strict";

const svcGroups = [
  { id: "agent", label: "智能体 · 数字员工", icon: "🦞" },
  { id: "edu",   label: "培训 · 教育",       icon: "🎓" },
  { id: "dev",   label: "开发 · 数据",       icon: "💻" },
  { id: "event", label: "赛事 · 活动",       icon: "🏆" },
];

const services = [
  /* ---------- 智能体 · 数字员工 ---------- */
  {
    group: "agent", emoji: "🦞", name: "AI 数字员工 · 定制交付", tag: "最受欢迎",
    price: 2000, was: 4000, unit: "首月 / 月度",
    blurb: "把一个真实场景，养成一只专属的智能体——你只要结果，不碰过程。",
    items: [
      "一句话下单：会议室预约 / 智慧就业 / 图书馆 / 论文·PPT / 信息复盘…任选",
      "独立部署、独立记忆与计费，镜像与账号都在你手里",
      "三档用量可选：轻量 / 进阶 / 不限量",
    ],
    accent: "var(--red)",
  },
  {
    group: "agent", emoji: "🐎", name: "白龙马 · 可培育型定制智能体", tag: "高端定制",
    quote: true, price: "¥8000 起", unit: "项目制",
    blurb: "不是开箱即用的虾，是一匹从 0 养起的马：先联网学技能、装插件，再上岗干活，越养越强。",
    items: [
      "为「要一个量身定制的员工」的客户而做，能力随业务生长",
      "深度接入你的流程与数据，长出别人复制不走的护城河",
      "含需求梳理 + 训练调优 + 交付陪跑；IP 归属先谈清",
    ],
    accent: "#7A5CFF",
  },
  {
    group: "agent", emoji: "🦐", name: "小龙虾 OpenClaw · 即用型智能体", tag: "开箱即用",
    price: 200, unit: "起 / 只",
    blurb: "预设好的标准小龙虾，问了就答、拿来就用。安装、维护、定制明码标价。",
    addons: [["智能体本体", 200], ["安装部署", 30], ["包月维护", 100], ["个性化定制", 60]],
    items: [
      "会议室预约 / 智慧就业 / 图书馆 / 象棋指导…现成虾任选",
      "按需加装：只要本体也行，要我装好、包维护也行",
      "适合先花小钱试一只，好用再上定制",
    ],
    accent: "#FF5DA2",
  },

  /* ---------- 培训 · 教育 ---------- */
  {
    group: "edu", emoji: "🎤", name: "企业 · 组织 AI 培训 / 讲座", tag: "现金流",
    price: 3000, was: 6000, unit: "每场 / 半天",
    blurb: "「养一只数字员工」实操工作坊，讲完就能上手，交付可复用的 Agent。",
    items: [
      "面向企业 / 协会 / 高校，落地案例：浙江医药 HR AI Agent、省青创协会",
      "现场带教，把你的团队从 0 带到能自己搭",
      "讲座 + 陪跑，把讲台变成你的 AI 落地起点",
    ],
    accent: "var(--blue)",
  },
  {
    group: "edu", emoji: "🏫", name: "高校 · 学院 AI 落地咨询", tag: "政策红利",
    quote: true, price: "按项目面议", unit: "学院 / 全校",
    blurb: "国家明年考核行业 AI 落地率，浙江更高——把政策要求，变成真正跑起来的系统。",
    items: [
      "校内三套系统落地经验：督导管理、未来课堂、会议室预约",
      "从场景盘点 → 选型 → 落地 → 验收，全程陪跑",
      "依托钉钉等既有生态先跑通，不折腾自建",
    ],
    accent: "var(--ink)",
  },
  {
    group: "edu", emoji: "🧒", name: "青少年 AI 实践课 / 黑客松带队", tag: "主 IP",
    price: 3000, was: 6000, unit: "按营 / 按场",
    blurb: "7–13 岁 AI 认知启蒙，把真实项目讲进课堂；也做青少年黑客松技术兜底与带队。",
    items: [
      "AI 游戏 / 编程 / 建模 / 3D 打印，动手做真东西",
      "青少年黑客松技术指导 · 带队（已验证家长付费）",
      "在职一线 + 黑客松全链路经验，不是纸上谈兵",
    ],
    accent: "var(--lime)",
  },
  {
    group: "edu", emoji: "🧭", name: "AI 上手陪跑 · 1 对 1", tag: "最易上手",
    price: 150, was: 300, unit: "1 小时",
    blurb: "把你手头一个真实需求，现场跑成一个能用的 AI 小工具或数字员工雏形。",
    items: [
      "一对一线上 / 线下，边做边教",
      "带走一个可继续用的成果，而不只是听懂",
      "适合想入门 AI、又不想空学理论的人",
    ],
    accent: "#2BB673",
  },

  /* ---------- 开发 · 数据 ---------- */
  {
    group: "dev", emoji: "📊", name: "信息收集 · 知识库搭建 · 数据分析", tag: "本科老本行",
    price: 100, unit: "起 / 单次",
    blurb: "软件工程 + 大数据的老本行：把散的资料收拢、把知识变成 AI 能用的底座、把数据讲成结论。",
    items: [
      "¥100–300，按数据量与交付复杂度定",
      "资料 / 竞品 / 行业信息批量收集与结构化整理",
      "知识库搭建：喂给 AI 的私有知识底座（RAG 可用）",
      "数据清洗、统计分析与可视化报表",
    ],
    accent: "#FF9F1C",
  },
  {
    group: "dev", emoji: "💻", name: "Web · 系统 · 数字孪生开发", tag: "项目制",
    quote: true, price: "五位数起", unit: "项目制",
    blurb: "Web 前后端 / Java / 系统平台，以及港口·机场·油田级别的数字孪生可视化。",
    items: [
      "首款 + 尾款 + 维护，按项目范围报价",
      "作品：CARGO CLAW、天府 TWIN、海上油田…",
      "IP 归属、维护周期先谈清再动工",
    ],
    accent: "#2B47F0",
  },

  /* ---------- 赛事 · 活动 ---------- */
  {
    group: "event", emoji: "🏆", name: "黑客松 · 赛事全链路", tag: "面议",
    quote: true, price: "按场面议", unit: "技术 / 评委 / 主办",
    blurb: "从技术指导到赛事落地，20 场黑客松全链路经验，哪一环都能补位。",
    items: [
      "志愿者 / 工作人员：¥150–300 一天",
      "技术指导 / 评委 / 志愿统筹 / 主办执行 / 宣传落地：按场面议",
      "选手 → 志愿者 → 工作人员 → 主办 → 评委，全走过一遍",
    ],
    accent: "var(--red)",
  },
];

  /* ---------- 联系方式（留资 / 付款回执） ---------- */
  var CONTACT = {
    wechatQr: "pay/contact-wechat.png",
    wechatId: "com_cjy_util",
    phone: "18143451183",
    phoneName: "陈先生",
    email: "2975982783@qq.com",
  };

  /* ---------- 单张服务卡 ---------- */
  function cardHTML(s, i) {
    return '' +
      '<article class="scard" style="--accent:' + s.accent + '">' +
        '<div class="scard__top">' +
          '<span class="scard__emoji">' + s.emoji + '</span>' +
          (s.tag ? '<span class="scard__tag">' + s.tag + '</span>' : '') +
        '</div>' +
        '<h3 class="scard__name">' + s.name + '</h3>' +
        '<div class="scard__price">' +
          (s.quote ? '' : '<span class="scard__cny">¥</span>') +
          '<span class="scard__num">' + s.price + '</span>' +
          (s.unit ? '<span class="scard__unit">' + s.unit + '</span>' : '') +
        '</div>' +
        (s.was ? '<div class="scard__deal"><s class="scard__orig">原价 ¥' + s.was +
                 '</s><span class="scard__off">限时获客价 · 5 折</span></div>' : '') +
        '<p class="scard__blurb">' + s.blurb + '</p>' +
        (s.addons ? '<ul class="scard__addons">' + s.addons.map(function (kv) {
            return '<li><span>' + kv[0] + '</span><b>¥' + kv[1] + '</b></li>';
          }).join('') + '</ul>' : '') +
        '<ul class="scard__items">' + s.items.map(function (it) {
            return '<li>' + it + '</li>';
          }).join('') + '</ul>' +
        (s.quote
          ? '<button class="scard__buy scard__buy--quote" type="button" data-quote>预约洽谈 →</button>'
          : '<button class="scard__buy" type="button" data-buy="' + i + '">购买 · 扫码支付 →</button>') +
      '</article>';
  }

  /* ---------- 按分组渲染 ---------- */
  function renderInto(el) {
    if (!el) return;
    el.innerHTML = svcGroups.map(function (g) {
      var inGroup = services
        .map(function (s, i) { return [s, i]; })
        .filter(function (p) { return p[0].group === g.id; });
      if (!inGroup.length) return "";
      return '<section class="svcgroup">' +
        '<h3 class="svcgroup__title"><span class="svcgroup__icon">' + g.icon + '</span>' +
        g.label + '<i class="svcgroup__rule"></i></h3>' +
        '<div class="svcgroup__grid">' +
        inGroup.map(function (p) { return cardHTML(p[0], p[1]); }).join('') +
        '</div></section>';
    }).join('');
  }

  /* ---------- 支付 / 联系 弹窗（注入 DOM，两页共用） ---------- */
  var DIALOGS =
    '<div class="pay" id="pay" role="dialog" aria-modal="true" aria-labelledby="payTitle" hidden>' +
      '<div class="pay__backdrop" data-close-pay></div>' +
      '<div class="pay__card">' +
        '<button class="pay__x" type="button" aria-label="关闭" data-close-pay>✕</button>' +
        '<span class="pay__kicker">扫码支付 · 完成下单</span>' +
        '<h3 class="pay__title" id="payTitle">服务名</h3>' +
        '<div class="pay__amount"><span class="pay__cny">¥</span><span id="payAmount">0</span></div>' +
        '<div class="pay__tabs" role="tablist">' +
          '<button class="pay__tab is-on" type="button" role="tab" data-method="wechat" aria-selected="true">💚 微信支付</button>' +
          '<button class="pay__tab" type="button" role="tab" data-method="alipay" aria-selected="false">💙 支付宝</button>' +
        '</div>' +
        '<div class="pay__qr">' +
          '<img class="pay__qrimg" id="payQrImg" src="pay/wechat.png" alt="收款码" onerror="this.classList.add(\'is-missing\')">' +
          '<span class="pay__qr-fallback">收款码未就绪<br><code>public/pay/wechat.png</code></span>' +
        '</div>' +
        '<p class="pay__note" id="payNote"></p>' +
        '<div class="pay__receipt">' +
          '<b>付款后请把截图发给我 →</b>' +
          '<button class="pay__receipt-btn" type="button" data-open-contact>加微信 / 发回执</button>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="pay contact" id="contact-dlg" role="dialog" aria-modal="true" aria-labelledby="ctTitle" hidden>' +
      '<div class="pay__backdrop" data-close-contact></div>' +
      '<div class="pay__card">' +
        '<button class="pay__x" type="button" aria-label="关闭" data-close-contact>✕</button>' +
        '<span class="pay__kicker">先聊聊 · 不用马上付款</span>' +
        '<h3 class="pay__title" id="ctTitle">把需求告诉我 🦞</h3>' +
        '<p class="ct__lead">不确定选哪档？加我微信说一句你的场景，我帮你拆成一档能落地的服务。</p>' +
        '<div class="pay__qr ct__qr">' +
          '<img class="pay__qrimg" src="' + CONTACT.wechatQr + '" alt="微信二维码" onerror="this.classList.add(\'is-missing\')">' +
          '<span class="pay__qr-fallback">微信二维码未就绪</span>' +
        '</div>' +
        '<ul class="ct__list">' +
          '<li><span>微信号</span><b>' + CONTACT.wechatId + '</b><button class="ct__copy" type="button" data-ct-copy="' + CONTACT.wechatId + '">复制</button></li>' +
          '<li><span>手机</span><b>' + CONTACT.phone + ' ' + CONTACT.phoneName + '</b><button class="ct__copy" type="button" data-ct-copy="' + CONTACT.phone + '">复制</button></li>' +
          '<li><span>邮箱</span><b>' + CONTACT.email + '</b><button class="ct__copy" type="button" data-ct-copy="' + CONTACT.email + '">复制</button></li>' +
        '</ul>' +
      '</div>' +
    '</div>';

  var payEl, ctEl, payTitle, payAmount, payNote, payQrImg, current = null;

  function hideLater(el, ms) {
    clearTimeout(el._t);
    el.classList.remove("is-open");
    el._t = setTimeout(function () { el.hidden = true; }, ms);
  }
  function show(el) {
    clearTimeout(el._t);
    el.hidden = false;
    requestAnimationFrame(function () { el.classList.add("is-open"); });
    var x = el.querySelector(".pay__x"); if (x) x.focus();
  }
  function setMethod(m) {
    if (payQrImg) { payQrImg.classList.remove("is-missing"); payQrImg.src = "pay/" + m + ".png"; }
    Array.prototype.forEach.call(payEl.querySelectorAll(".pay__tab"), function (t) {
      var on = t.getAttribute("data-method") === m;
      t.classList.toggle("is-on", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
  }
  function openPay(i) {
    current = services[i];
    if (!current) return;
    payTitle.textContent = current.name;
    payAmount.textContent = current.price;
    payNote.innerHTML = '扫码后请输入金额 <b>¥' + current.price +
      '</b>，备注你要的 <b>' + current.name + '</b> 与联系方式。' +
      (current.addons ? '<br><span class="pay__addon">需要安装 / 维护 / 定制？按上方明细加总后填写金额即可。</span>' : '');
    setMethod("wechat");
    show(payEl);
  }
  function openContact() { show(ctEl); }

  function mount(gridEl) {
    renderInto(gridEl);
    var host = document.createElement("div");
    host.innerHTML = DIALOGS;
    while (host.firstChild) document.body.appendChild(host.firstChild);

    payEl = document.getElementById("pay");
    ctEl = document.getElementById("contact-dlg");
    payTitle = document.getElementById("payTitle");
    payAmount = document.getElementById("payAmount");
    payNote = document.getElementById("payNote");
    payQrImg = document.getElementById("payQrImg");

    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-buy],[data-quote],[data-open-contact],[data-close-pay],[data-close-contact],[data-ct-copy],.pay__tab");
      if (!t) return;
      if (t.hasAttribute("data-buy")) return openPay(+t.getAttribute("data-buy"));
      if (t.hasAttribute("data-quote") || t.hasAttribute("data-open-contact")) return openContact();
      if (t.hasAttribute("data-close-pay")) return hideLater(payEl, 260);
      if (t.hasAttribute("data-close-contact")) return hideLater(ctEl, 260);
      if (t.classList.contains("pay__tab")) return setMethod(t.getAttribute("data-method"));
      if (t.hasAttribute("data-ct-copy")) {
        var v = t.getAttribute("data-ct-copy"), old = t.textContent;
        var done = function (ok) { t.textContent = ok ? "已复制" : "复制失败"; t.classList.toggle("is-copied", ok);
          setTimeout(function () { t.textContent = old; t.classList.remove("is-copied"); }, 1600); };
        if (navigator.clipboard) navigator.clipboard.writeText(v).then(function(){done(true);}, function(){done(false);});
        else done(false);
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (ctEl && !ctEl.hidden) return hideLater(ctEl, 260);
      if (payEl && !payEl.hidden) return hideLater(payEl, 260);
    });
  }

  window.CJYServices = {
    groups: svcGroups, services: services, contact: CONTACT,
    renderInto: renderInto, mount: mount, openContact: openContact,
  };
})();
