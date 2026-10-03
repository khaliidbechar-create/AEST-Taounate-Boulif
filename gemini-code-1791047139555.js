(() => {
  "use strict";

  const K = "aest_pwa_v2";
  const C = ["U6", "U8", "U10", "U12", "U14", "U16", "U18", "U19"];
  const $ = s => document.querySelector(s);   const $$ = s => [...document.querySelectorAll(s)];

  let d = JSON.parse(localStorage.getItem(K) || "null") || {
    players: [
      { "id": "1", "first": "حمزة", "last": "البوزيدي", "cat": "U14", "fee": 750 },
      { "id": "2", "first": "محمد", "last": "الشارفي", "cat": "U12", "fee": 750 },
      { "id": "3", "first": "عمران", "last": "الزاردلي", "cat": "U10", "fee": 0 },
      { "id": "4", "first": "إلياس", "last": "الخمراوي", "cat": "U12", "fee": 0 },
      { "id": "5", "first": "أنس", "last": "قلوبي", "cat": "U12", "fee": 0 },
      { "id": "6", "first": "جاد", "last": "البوزيدي", "cat": "U12", "fee": 0 },
      { "id": "7", "first": "إياد", "last": "ملاح", "cat": "U12", "fee": 0 },
      { "id": "8", "first": "محسن", "last": "دحمونني", "cat": "U12", "fee": 0 },
      { "id": "9", "first": "ريان", "last": "البكوري", "cat": "U12", "fee": 0 },
      { "id": "10", "first": "إيهاب", "last": "الفاضلي", "cat": "U12", "fee": 0 },
      { "id": "11", "first": "يونس", "last": "زدال", "cat": "U12", "fee": 0 },
      { "id": "12", "first": "أحمد", "last": "النبش", "cat": "U12", "fee": 0 },
      { "id": "13", "first": "أنيس", "last": "الإدريسي", "cat": "U12", "fee": 750 },
      { "id": "14", "first": "محمد زياد", "last": "الذغاري", "cat": "U10", "fee": 750 },
      { "id": "15", "first": "لقمان", "last": "العومة", "cat": "U10", "fee": 750 },
      { "id": "16", "first": "ناصر", "last": "عورعور", "cat": "U16", "fee": 750 },
      { "id": "17", "first": "خديجة", "last": "قلوبي", "cat": "U12", "fee": 750 },
      { "id": "18", "first": "سعد", "last": "البوزيدي التايل", "cat": "U12", "fee": 750 },
      { "id": "19", "first": "جاد", "last": "أسمار", "cat": "U12", "fee": 750 },
      { "id": "20", "first": "أحمد", "last": "سهلة", "cat": "U12", "fee": 750 },
      { "id": "21", "first": "معاد", "last": "باجو", "cat": "U16", "fee": 750 },
      { "id": "22", "first": "ياسين", "last": "العمراني", "cat": "U16", "fee": 750 },
      { "id": "23", "first": "أنس", "last": "التغزوي", "cat": "U12", "fee": 750 },
      { "id": "24", "first": "زياد", "last": "العبديوي", "cat": "U14", "fee": 750 },
      { "id": "25", "first": "أيمن", "last": "المغمري", "cat": "U16", "fee": 750 },
      { "id": "26", "first": "يوسف", "last": "قشور", "cat": "U14", "fee": 750 },
      { "id": "27", "first": "مصطفى طه", "last": "سنان", "cat": "U12", "fee": 750 },
      { "id": "28", "first": "غسان", "last": "باجو", "cat": "U12", "fee": 750 },
      { "id": "29", "first": "يحيى", "last": "باجو", "cat": "U14", "fee": 750 },
      { "id": "30", "first": "شهيد", "last": "عرشان", "cat": "U16", "fee": 750 },
      { "id": "31", "first": "يوسف", "last": "الفيغة", "cat": "U10", "fee": 750 },
      { "id": "32", "first": "أيمن", "last": "اللبوش", "cat": "U16", "fee": 750 },
      { "id": "33", "first": "علي", "last": "الخموري", "cat": "U14", "fee": 750 },
      { "id": "34", "first": "عمر", "last": "الخموري", "cat": "U12", "fee": 750 },
      { "id": "35", "first": "فارس", "last": "الخمراوي", "cat": "U14", "fee": 75 },
      { "id": "36", "first": "سعد", "last": "مرزوقي", "cat": "U8", "fee": 750 },
      { "id": "37", "first": "إسماعيل", "last": "الحالعي", "cat": "U14", "fee": 750 },
      { "id": "38", "first": "محمد", "last": "باجو", "cat": "U14", "fee": 750 },
      { "id": "39", "first": "حمزة", "last": "عبدربه", "cat": "U14", "fee": 750 },
      { "id": "40", "first": "أحمد أياد", "last": "الدريوش البوزيدي", "cat": "U10", "fee": 750 },
      { "id": "41", "first": "حمزة", "last": "فدواك", "cat": "U16", "fee": 750 },
      { "id": "42", "first": "ياسر", "last": "العلاوي", "cat": "U14", "fee": 750 },
      { "id": "43", "first": "رضا", "last": "العيشي", "cat": "U14", "fee": 750 },
      { "id": "44", "first": "محمد", "last": "العنكري", "cat": "U16", "fee": 750 },
      { "id": "45", "first": "", "last": "العمراني", "cat": "U12", "fee": 0 },
      { "id": "46", "first": "لؤي", "last": "بنانية", "cat": "U8", "fee": 400 },
      { "id": "47", "first": "صالح الدين", "last": "طبيش", "cat": "U12", "fee": 250 },
      { "id": "48", "first": "محمد", "last": "شدادي", "cat": "U12", "fee": 300 },
      { "id": "49", "first": "عمران", "last": "الخنيسي", "cat": "U14", "fee": 300 },
      { "id": "50", "first": "محمد رضا", "last": "الرزيقي", "cat": "U14", "fee": 400 },
      { "id": "51", "first": "ريان", "last": "الرصاعي", "cat": "U14", "fee": 400 },
      { "id": "52", "first": "بدر", "last": "العداد", "cat": "U14", "fee": 500 },
      { "id": "53", "first": "محمد علي", "last": "أعفان", "cat": "U12", "fee": 350 },
      { "id": "54", "first": "إياد", "last": "العثياوي", "cat": "U14", "fee": 400 },
      { "id": "55", "first": "عمران", "last": "الادريسي البوزيدي", "cat": "U12", "fee": 350 },
      { "id": "56", "first": "أنس", "last": "عيادك", "cat": "U6", "fee": 0 },
      { "id": "57", "first": "محمد", "last": "الطارهوري", "cat": "U16", "fee": 400 },
      { "id": "58", "first": "هيثم", "last": "السلماني", "cat": "U12", "fee": 500 },
      { "id": "59", "first": "أيمن", "last": "الطارهوري", "cat": "U14", "fee": 0 },
      { "id": "60", "first": "محمد", "last": "اعزاب", "cat": "U12", "fee": 250 },
      { "id": "61", "first": "بدر", "last": "أعزاب", "cat": "U12", "fee": 250 },
      { "id": "62", "first": "بدر", "last": "فارس", "cat": "U8", "fee": 750 },
      { "id": "63", "first": "أيوب", "last": "بوساف", "cat": "U16", "fee": 750 },
      { "id": "64", "first": "محمد", "last": "الزرهوني", "cat": "U14", "fee": 800 },
      { "id": "65", "first": "آدم", "last": "العمراوي", "cat": "U12", "fee": 750 },
      { "id": "66", "first": "شكيب", "last": "الدراهمي", "cat": "U12", "fee": 750 },
      { "id": "67", "first": "إياد", "last": "فراجي", "cat": "U12", "fee": 750 },
      { "id": "68", "first": "يوسف", "last": "القاسميا", "cat": "U10", "fee": 750 },
      { "id": "69", "first": "أيمن", "last": "العمراني", "cat": "U14", "fee": 750 },
      { "id": "70", "first": "طه", "last": "لا ميني", "cat": "U10", "fee": 750 },
      { "id": "71", "first": "ريان", "last": "أورزيغ", "cat": "U16", "fee": 750 },
      { "id": "72", "first": "إياد", "last": "العلاوي بيسي", "cat": "U8", "fee": 750 },
      { "id": "73", "first": "عبد النور", "last": "مساعد", "cat": "U12", "fee": 750 },
      { "id": "74", "first": "زكرياء", "last": "بلول", "cat": "U16", "fee": 750 },
      { "id": "75", "first": "سيف الدين", "last": "المغمري", "cat": "U12", "fee": 750 },
      { "id": "76", "first": "ريان", "last": "الحجامي", "cat": "U14", "fee": 750 },
      { "id": "77", "first": "نسيم", "last": "الحجامي", "cat": "U12", "fee": 750 },
      { "id": "78", "first": "ريان", "last": "المقدام", "cat": "U12", "fee": 750 },
      { "id": "79", "first": "سالم", "last": "الإدريسي", "cat": "U12", "fee": 750 },
      { "id": "80", "first": "زيد", "last": "الطهطاه", "cat": "U8", "fee": 800 },
      { "id": "81", "first": "يوسف", "last": "المرابطي", "cat": "U14", "fee": 750 },
      { "id": "82", "first": "جاد", "last": "بوطاهر", "cat": "U10", "fee": 750 },
      { "id": "83", "first": "وائل", "last": "المودني", "cat": "U10", "fee": 750 },
      { "id": "84", "first": "عمران", "last": "العثماني", "cat": "U10", "fee": 750 },
      { "id": "85", "first": "سلمان", "last": "سراج", "cat": "U12", "fee": 750 },
      { "id": "86", "first": "نزار", "last": "الخصري", "cat": "U10", "fee": 750 },
      { "id": "87", "first": "يحيى", "last": "الإدريسي البوزيدي", "cat": "U12", "fee": 750 },
      { "id": "88", "first": "محمد أمين", "last": "البزازي", "cat": "U10", "fee": 750 },
      { "id": "89", "first": "وليد", "last": "بثطاهي", "cat": "U10", "fee": 750 },
      { "id": "90", "first": "محمد أمين", "last": "روان", "cat": "U14", "fee": 750 },
      { "id": "91", "first": "يونس", "last": "العثماني", "cat": "U14", "fee": 750 },
      { "id": "92", "first": "هشام", "last": "مطيع", "cat": "U14", "fee": 750 },
      { "id": "93", "first": "ياسين", "last": "المساري", "cat": "U12", "fee": 500 },
      { "id": "94", "first": "ريان", "last": "الطبيبس", "cat": "U12", "fee": 800 },
      { "id": "95", "first": "محمد أمين", "last": "لباق", "cat": "U12", "fee": 750 },
      { "id": "96", "first": "زياد", "last": "العثماني", "cat": "U12", "fee": 0 },
      { "id": "97", "first": "زياد", "last": "هيطاع", "cat": "U12", "fee": 750 },
      { "id": "98", "first": "يحيى", "last": "فدوري", "cat": "U14", "fee": 800 },
      { "id": "99", "first": "محمد أمين", "last": "الدرقاوي", "cat": "U12", "fee": 750 },
      { "id": "100", "first": "محمد", "last": "القاهري", "cat": "U12", "fee": 0 },
      { "id": "101", "first": "جاد", "last": "الزوين", "cat": "U12", "fee": 0 },
      { "id": "102", "first": "محمد", "last": "فرقوب", "cat": "U12", "fee": 750 },
      { "id": "103", "first": "أيمن", "last": "الطاهوري", "cat": "U12", "fee": 500 },
      { "id": "104", "first": "سامي", "last": "العثماني", "cat": "U12", "fee": 0 },
      { "id": "105", "first": "أرسلان", "last": "القلوبي", "cat": "U10", "fee": 750 },
      { "id": "106", "first": "محمد", "last": "مروز", "cat": "U12", "fee": 750 },
      { "id": "107", "first": "محمد", "last": "الحيوني", "cat": "U12", "fee": 750 },
      { "id": "108", "first": "إياد", "last": "البوزيدي", "cat": "U12", "fee": 0 },
      { "id": "109", "first": "هيثم", "last": "البكوري", "cat": "U12", "fee": 0 },
      { "id": "110", "first": "زياد", "last": "العاضامي", "cat": "U12", "fee": 0 },
      { "id": "111", "first": "رياض", "last": "البوزيدي", "cat": "U12", "fee": 0 },
      { "id": "112", "first": "سليمان", "last": "المراطبي", "cat": "U12", "fee": 800 },
      { "id": "113", "first": "يوسف", "last": "البياري", "cat": "U14", "fee": 750 },
      { "id": "114", "first": "ياسين", "last": "الهرسال", "cat": "U14", "fee": 750 },
      { "id": "115", "first": "زياد", "last": "أمزر بيشي", "cat": "U16", "fee": 800 },
      { "id": "116", "first": "بلاك", "last": "العمراني", "cat": "U16", "fee": 750 },
      { "id": "117", "first": "محمد", "last": "زرطال", "cat": "U12", "fee": 0 },
      { "id": "118", "first": "نزار", "last": "الكوركي", "cat": "U12", "fee": 0 },
      { "id": "119", "first": "سامحي", "last": "الدباش", "cat": "U12", "fee": 0 },
      { "id": "120", "first": "أحمد", "last": "بونيشل", "cat": "U12", "fee": 0 },
      { "id": "121", "first": "أيمين", "last": "السوسي", "cat": "U14", "fee": 500 },
      { "id": "122", "first": "زياد", "last": "العادي", "cat": "U14", "fee": 750 },
      { "id": "123", "first": "ياسر", "last": "بوغالب", "cat": "U14", "fee": 750 },
      { "id": "124", "first": "أكرم", "last": "أغشاش", "cat": "U12", "fee": 750 },
      { "id": "125", "first": "محمدرضا", "last": "الحادفي", "cat": "U10", "fee": 750 },
      { "id": "126", "first": "طه", "last": "العسال", "cat": "U12", "fee": 750 },
      { "id": "127", "first": "زياد", "last": "التسغي البوزيدي", "cat": "U12", "fee": 0 }
    ],
    attendance: {},
    matches: [
      { opponent: "Académie Fès", date: "2026-10-10", place: "Extérieur" },
      { opponent: "US Taounate", date: "2026-10-17", place: "Domicile" }
    ]
  };

  let page = "home", cat = "Tous", installPrompt = null;

  const save = () => localStorage.setItem(K, JSON.stringify(d));
  const money = n => new Intl.NumberFormat("fr-MA").format(n || 0) + " DH";
  const initial = p => ((p.first?.[0] || "") + (p.last?.[0] || "")).toUpperCase();
  const safe = s => String(s ?? "").replace(/[&<>"']/g, x => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[x]));

  function go(p) {
    page = p;
    $$(".page").forEach(x => x.classList.toggle("active", x.id === p));     $$
("nav button").forEach(x => x.classList.toggle("active", x.dataset.page === p));
    render();
  }

  function render() {
    stats();
    if (page === "players") players();
    if (page === "attendance") attendance();
    if (page === "finance") finance();
    if (page === "matches") matches();
  }

  function stats() {
    let total = d.players.reduce((a, p) => a + (+p.fee || 0), 0);
    let pr = d.players.filter(p => d.attendance[p.id] !== false).length;
    let r = d.players.length ? Math.round((pr / d.players.length) * 100) : 0;

    $("#stats").innerHTML = [
      ["Joueurs", d.players.length, "effectif"],
      ["Présence", r + "%", "aujourd'hui"],
      ["Cotisations", money(total), "encaissé"],
      ["Matchs", d.matches.length, "programmés"]
    ].map(x => `<div class="stat"><span>${x[0]}</span><strong>${x[1]}</strong><small>${x[2]}</small></div>`).join("");

    $("#cats").innerHTML = C.map(x =>
      `<span class="chip">⚽ <b>${x}</b> · ${d.players.filter(p => p.cat === x).length}</span>`
    ).join("");
  }

  function players() {
    let q = ($("#search").value || "").toLowerCase();
    $("#filters").innerHTML = ["Tous", ...C].map(x =>
      `<button class="filter ${cat === x ? "active" : ""}" data-cat="${x}">${x}</button>`
    ).join("");

    $$(".filter").forEach(b => b.onclick = () => {
      cat = b.dataset.cat;
      players();
    });

    let a = d.players.filter(p => (cat === "Tous" || p.cat === cat) && `${p.first} ${p.last}`.toLowerCase().includes(q));

    $("#playerList").innerHTML = a.map(p =>
      `<article class="player">
        <div class="avatar">${initial(p)}</div>
        <div>
          <h4>${safe(p.first)} ${safe(p.last)}</h4>
          <small>${p.cat} · ${money(p.fee)}</small>
        </div>
      </article>`
    ).join("") || "<div class='stat'>Aucun joueur.</div>";
  }

  function attendance() {
    $("#date").textContent = new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "short" });
    $("#attendanceList").innerHTML = d.players.map(p => {
      let v = d.attendance[p.id] !== false;
      return `<div>
        <span class="avatar">${initial(p)}</span> 
        <b>${safe(p.first)} ${safe(p.last)}</b>
        <div>
          <button data-a="${p.id}:true" style="opacity:${v ? 1 : 0.4}">✓</button>
          <button data-a="${p.id}:false" style="opacity:${!v ? 1 : 0.4}">×</button>
        </div>
      </div>`;
    }).join("");

    $$("[data-a]").forEach(b => b.onclick = () => {
      let [x, v] = b.dataset.a.split(":");
      d.attendance[x] = v === "true";
      save();
      attendance();
      stats();
    });
  }

  function finance() {
    let t = d.players.reduce((a, p) => a + (+p.fee || 0), 0);
    $("#total").textContent = money(t);
    $("#financeList").innerHTML = d.players.map(p =>
      `<div><b>${safe(p.first)} ${safe(p.last)}</b><span style="float:right">${money(p.fee)}</span></div>`
    ).join("");
  }

  function matches() {
    $("#matchList").innerHTML = d.matches.map(m =>
      `<div class="panel match" style="padding:17px">
        <div>
          <small>${m.place}</small>
          <b>⭐ Les Étoiles vs ${safe(m.opponent)}</b>
        </div>
        <strong>${new Date(m.date + "T12:00").toLocaleDateString("fr-FR", { day: "2-digit", month: "short" })}</strong>
      </div>`
    ).join("");
  }

  // Navigation
  $$("[data-page]").forEach(b => b.onclick = () => go(b.dataset.page));
  $("#search").oninput = players;

  // Modals
  function modal(type) {
    $("#modal").classList.add("open");
    $("#playerForm").hidden = type !== "player";
    $("#matchForm").hidden = type !== "match";
    $("#modalTitle").textContent = type === "player" ? "Nouveau joueur" : "Nouveau match";
  }

  $("#addPlayer").onclick = () => modal("player");
  $("#addMatch").onclick = () => modal("match");
  $("#close").onclick = () => $("#modal").classList.remove("open");

  $("#playerForm").onsubmit = e => {
    e.preventDefault();
    let f = new FormData(e.target);
    d.players.push({
      id: Date.now().toString(),
      first: f.get("first").trim(),
      last: f.get("last").trim(),
      cat: f.get("cat"),
      fee: +f.get("fee") || 0
    });
    save();
    e.target.reset();
    $("#modal").classList.remove("open");
    players();
    stats();
  };

  $("#matchForm").onsubmit = e => {
    e.preventDefault();
    let f = new FormData(e.target);
    d.matches.push({
      opponent: f.get("opponent").trim(),
      date: f.get("date"),
      place: f.get("place")
    });
    save();
    e.target.reset();
    $("#modal").classList.remove("open");
    matches();
    stats();
  };

  // Thème & Export
  $("#theme").onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("aest_dark", document.body.classList.contains("dark") ? "1" : "0");
  };
  if (localStorage.getItem("aest_dark") === "1") document.body.classList.add("dark");

  $("#export").onclick = () => {
    let a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(d, null, 2)], { type: "application/json" }));
    a.download = "aest-taounate.json";
    a.click();
  };

  $("#reset").onclick = () => {
    if (confirm("Réinitialiser les données ?")) {
      localStorage.removeItem(K);
      location.reload();
    }
  };

  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    installPrompt = e;
  });

  $("#install").onclick = async () => {
    if (installPrompt) {
      installPrompt.prompt();
      installPrompt = null;
    } else {
      alert("Dans Chrome : ⋮ → Ajouter à l'écran d'accueil.");
    }
  };

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }

  render();
})();