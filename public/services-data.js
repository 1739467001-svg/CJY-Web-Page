/* =====================================================================
   CJY · 服务清单共享模块 (services-data.js)
   一份数据，两处使用：首页弹窗 (index.html) 与独立页 (services.html)。
   改价格 / 加服务只需要改本文件的 services 数组。

   定价分层（2026-09 起）：
   个人站只留「¥1000 以下」的轻量 / 科普向服务 + 自定义打赏。
   ¥1000 以上的定制交付、培训、系统开发等，统一移到工作室品牌
   OctoNova Labs（深海章鱼主视觉），本文件只留一条跳转横幅，
   具体清单等 OctoNova Labs 站点上线后再补链接。
   ===================================================================== */
(function () {
  "use strict";

  /* OctoNova Labs 域名。留空 = 站点尚未上线，横幅自动降级为「即将上线」
     并改为打开联系弹窗，避免把访客送到一个不存在的域名。
     站点上线后把域名填进来即可，其余代码无需改动。 */
  var STUDIO_URL = ""; // 例："https://octonova.studio"

  var svcGroups = [
    { id: "agent", label: "智能体 · 轻量款", icon: "🦞" },
    { id: "edu",   label: "陪跑 · 科普",     icon: "🎓" },
    { id: "dev",   label: "开发 · 数据",     icon: "💻" },
    { id: "event", label: "赛事 · 活动",     icon: "🏆" },
  ];

  var services = [
    /* ---------- 智能体 · 轻量款（¥1000 以下） ---------- */
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

    /* ---------- 陪跑 · 科普 ---------- */
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

    /* ---------- 赛事 · 活动 ---------- */
    {
      group: "event", emoji: "🏆", name: "黑客松 · 志愿者 / 工作人员", tag: "日结",
      price: 150, unit: "起 / 天",
      blurb: "现场执行、签到物料、选手协助……20 场黑客松全链路里最基础的一环，也最实在。",
      items: [
        "志愿者 / 工作人员：¥150–300 一天，按活动规模定",
        "选手 → 志愿者 → 工作人员 → 主办 → 评委，全走过一遍",
        "更大规模的技术顾问 / 评委 / 主办执行合作，见下方 OctoNova Labs",
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

  /* ---------- 自定义打赏 ---------- */
  var TIP_PRESETS = [6.6, 16.6, 66, 128];

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

  /* ---------- OctoNova Labs 跳转横幅（大项目导流） ---------- */
  function studioBannerHTML() {
    // 站点尚未成型 —— 这里只做一块「预告装饰」：不可点、不跳转、不弹窗。
    // 等 OctoNova Labs 上线后再改回可点击的导流入口。
    return '' +
      '<div class="studioband studioband--deco" aria-hidden="true">' +
        '<span class="studioband__mark">🐙</span>' +
        '<span class="studioband__body">' +
          '<b>OctoNova Labs</b>' +
          '<span>八条腕各自决策，长期吸积后爆发增亮 —— 承接规模化交付的工作室，筹备中</span>' +
        '</span>' +
        '<span class="studioband__go">COMING SOON</span>' +
      '</div>';
  }
  function renderStudioBanner(el) { if (el) el.innerHTML = studioBannerHTML(); }

  /* ---------- 自定义打赏卡 ---------- */
  function tipHTML() {
    return '' +
      '<div class="tipcard">' +
        '<div class="tipcard__head">' +
          '<span class="tipcard__emoji">🦞</span>' +
          '<div>' +
            '<h3 class="tipcard__title">请我喝杯奶茶</h3>' +
            '<p class="tipcard__sub">喜欢这个网站 / 这只虾？随心打赏，金额你说了算。</p>' +
          '</div>' +
        '</div>' +
        '<div class="tipcard__chips">' +
          TIP_PRESETS.map(function (v) {
            return '<button class="tipchip" type="button" data-tip="' + v + '">¥' + v + '</button>';
          }).join('') +
        '</div>' +
        '<div class="tipcard__custom">' +
          '<span class="tipcard__cny">¥</span>' +
          '<input class="tipcard__input" id="tipInput" type="number" inputmode="decimal" min="1" max="50000" step="0.01" placeholder="自定义金额">' +
          '<button class="tipcard__go" type="button" data-tip-custom>打赏 →</button>' +
        '</div>' +
      '</div>';
  }
  function renderTip(el) { if (el) el.innerHTML = tipHTML(); }

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
  var TIP_MIN = 1, TIP_MAX = 50000;
  function openTip(amount) {
    // 金额规整：两位小数（人民币最小单位是分），并夹在合理区间内，
    // 避免 0 / 负数 / 科学计数法 / 超大金额传进支付备注
    amount = Math.round(Number(amount) * 100) / 100;
    if (!isFinite(amount) || amount < TIP_MIN) return;
    if (amount > TIP_MAX) amount = TIP_MAX;
    current = { name: "打赏 · 请我喝杯奶茶", price: amount };
    payTitle.textContent = "打赏 · 请我喝杯奶茶 🦞";
    payAmount.textContent = amount;
    payNote.innerHTML = '扫码后请输入金额 <b>¥' + amount + '</b>，备注「打赏」即可，不用留需求，谢谢你 🦞';
    setMethod("wechat");
    show(payEl);
  }
  function openContact() { show(ctEl); }

  function mount(gridEl, opts) {
    renderInto(gridEl);
    opts = opts || {};
    if (opts.studioBannerEl) renderStudioBanner(opts.studioBannerEl);
    if (opts.tipEl) renderTip(opts.tipEl);

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
      var t = e.target.closest("[data-buy],[data-quote],[data-open-contact],[data-close-pay],[data-close-contact],[data-ct-copy],[data-tip],[data-tip-custom],.pay__tab");
      if (!t) return;
      if (t.hasAttribute("data-buy")) return openPay(+t.getAttribute("data-buy"));
      if (t.hasAttribute("data-quote") || t.hasAttribute("data-open-contact")) return openContact();
      if (t.hasAttribute("data-tip")) return openTip(parseFloat(t.getAttribute("data-tip")));
      if (t.hasAttribute("data-tip-custom")) {
        var input = document.getElementById("tipInput");
        var v = input ? parseFloat(input.value) : NaN;
        if (!isFinite(v) || v < TIP_MIN) {
          if (input) { input.focus(); input.classList.add("is-error"); setTimeout(function(){input.classList.remove("is-error");}, 900); }
          return;
        }
        return openTip(v);
      }
      if (t.hasAttribute("data-close-pay")) return hideLater(payEl, 260);
      if (t.hasAttribute("data-close-contact")) return hideLater(ctEl, 260);
      if (t.classList.contains("pay__tab")) return setMethod(t.getAttribute("data-method"));
      if (t.hasAttribute("data-ct-copy")) {
        var v2 = t.getAttribute("data-ct-copy"), old = t.textContent;
        var done = function (ok) { t.textContent = ok ? "已复制" : "复制失败"; t.classList.toggle("is-copied", ok);
          setTimeout(function () { t.textContent = old; t.classList.remove("is-copied"); }, 1600); };
        if (navigator.clipboard) navigator.clipboard.writeText(v2).then(function(){done(true);}, function(){done(false);});
        else done(false);
      }
    });

    document.addEventListener("keydown", function (e) {
      var input = document.activeElement;
      if (e.key === "Enter" && input && input.id === "tipInput") {
        var v3 = parseFloat(input.value);
        if (isFinite(v3) && v3 >= TIP_MIN) openTip(v3);
        return;
      }
      if (e.key !== "Escape") return;
      if (ctEl && !ctEl.hidden) return hideLater(ctEl, 260);
      if (payEl && !payEl.hidden) return hideLater(payEl, 260);
    });
  }

  window.CJYServices = {
    groups: svcGroups, services: services, contact: CONTACT, studioUrl: STUDIO_URL,
    renderInto: renderInto, mount: mount, openContact: openContact, openTip: openTip,
  };
})();
