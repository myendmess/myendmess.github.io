/* =========================================================
   Mohamed Boujnane — portfolio interactions
   Vanilla JS, no dependencies. Progressive enhancement.
   ========================================================= */
(function () {
    "use strict";

    // Mark JS as available so CSS can hide-then-reveal (no-JS = everything visible)
    document.documentElement.classList.add("js");

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------- mobile nav ---------- */
    var toggle = document.getElementById("nav-toggle");
    var links = document.getElementById("nav-links");
    if (toggle && links) {
        var setOpen = function (open) {
            links.classList.toggle("open", open);
            toggle.setAttribute("aria-expanded", String(open));
        };
        toggle.addEventListener("click", function () {
            setOpen(toggle.getAttribute("aria-expanded") !== "true");
        });
        // close after tapping a link
        links.addEventListener("click", function (e) {
            if (e.target.closest("a")) setOpen(false);
        });
        // close on Escape
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") setOpen(false);
        });
    }

    /* ---------- footer year ---------- */
    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());

    /* ---------- i18n (English lives in the DOM; IT / FR / JA below) ---------- */
    var I18N = {
        it: {
            "nav.skip": "Vai al contenuto",
            "nav.exp": "Esperienza",
            "nav.proj": "Progetti",
            "nav.contact": "Contatti",
            "hero.eyebrow": "Consulente IT &amp; AI · FinTech &amp; Dati",
            "hero.title": "Costruisco dove la <span class=\"grad\">tecnologia</span><br /> incontra la <span class=\"grad grad--alt\">finanza</span>.",
            "hero.lede": "Specialista in Dati e AI che trasforma i dati grezzi di mercato in decisioni. Progetto data pipeline con <strong>dbt, Snowflake e Databricks</strong>, automatizzo i flussi di lavoro con <strong>AI e orchestrazione multi-agente</strong> e costruisco <strong>scanner di mercato algoritmici</strong> in Python — unendo strategia finanziaria e automazione tecnica.",
            "hero.cta1": "Vedi i progetti",
            "stack.kicker": "// stack principale",
            "stack.title": "Gli strumenti",
            "stack.sub": "Dalle tabelle grezze ai modelli di reporting, orchestrazione AI e dati di mercato — lo stack con cui lavoro ogni giorno.",
            "exp.kicker": "// percorso",
            "exp.title": "Esperienza",
            "exp.sub": "Un percorso dall'IT e dall'ERP verso data engineering, AI e automazione finanziaria.",
            "exp.b1a": "Progettato data pipeline end-to-end, dalle tabelle grezze ai modelli di reporting, con dbt, Looker, LookML, Snowflake, Databricks e Tableau.",
            "exp.b1b": "Utilizzato lo sviluppo assistito dall'AI (Cursor) e il prompt engineering per pianificare e automatizzare flussi di lavoro multi-agente.",
            "exp.b1c": "Gestito versioning e deployment con Git e CI/CD, con rilascio sul branch main.",
            "exp.b2a": "Guidato l'implementazione su Vendite (Order-to-Cash), Acquisti (Purchase-to-Pay), Qualità e Gestione del Magazzino.",
            "exp.b2b": "Raccolto e tradotto i requisiti di business interfunzionali in soluzioni operative.",
            "exp.b2c": "Creato materiali di formazione, condotto sessioni UAT e ottimizzato le funzionalità dopo il go-live.",
            "exp.b3a": "Realizzato un chatbot di AI conversazionale con Azure Cognitive Services: Text-to-Speech, Speech-to-Text e NLP.",
            "exp.b3b": "Implementato il riconoscimento degli intenti con LUIS per interazioni naturali e simili a quelle umane.",
            "exp.b4a": "Sviluppato e mantenuto applicazioni web in una delle principali aziende software italiane.",
            "exp.earlier": "In precedenza: customer operations multilingue (Teleperformance) e logistica di export aereo e marittimo internazionale (F.lli Di Martino).",
            "cred.edu": "// istruzione",
            "cred.certs": "// certificazioni",
            "cred.langs": "// lingue",
            "edu1": "<strong>IFOA</strong> — Tecnico di Applicazioni Informatiche Economico-Finanziarie · Amministrazione e Gestione d'Impresa <span>2024–25</span>",
            "edu2": "<strong>CFP Bauer — AFOL</strong> — Logistica, Materiali e Gestione della Supply Chain <span>2021–22</span>",
            "edu3": "<strong>I.T.I. Alessandro Volta</strong> — Diploma, Informatica e IT (EQF 4) <span>2016–21</span>",
            "proj.kicker": "// progetti",
            "proj.title": "Progetti",
            "proj.sub": "Lavori attivi tra scansione algoritmica dei mercati, automazione AI e data engineering.",
            "proj.active": "Attivo",
            "proj.automation": "Automazione",
            "proj.production": "Produzione",
            "proj1.desc": "Scanner azionari algoritmici — uno screening GARP di lungo periodo (Finnhub) e una scansione di breve periodo (Alpha Vantage) — eseguiti su job cron pianificati con GitHub Actions.",
            "proj2.title": "AI Conversazionale",
            "proj2.desc": "Un chatbot vocale basato su Azure Cognitive Services — Text-to-Speech, Speech-to-Text e NLP — con riconoscimento degli intenti LUIS per un'interazione naturale e simile a quella umana.",
            "proj3.title": "Automazione GitHub",
            "proj3.desc": "Workflow di GitHub Actions pianificati che girano su cron, senza supervisione — recuperano dati, committano i risultati nel repo e mantengono i contenuti aggiornati senza interventi manuali.",
            "proj4.title": "Pipeline di Dati AI",
            "proj4.desc": "Pipeline analitiche end-to-end, dalle tabelle grezze ai modelli di reporting, costruite con dbt e Snowflake/Databricks e presentate in Looker e Tableau — accelerate da flussi di lavoro multi-agente assistiti dall'AI.",
            "foot.kicker": "// mettiamoci in contatto",
            "foot.title": "Costruiamo dove <span class=\"grad\">la tecnologia incontra la finanza</span>.",
            "foot.sub": "Aperto a ruoli ibridi in Analisi di Dati Finanziari, data engineering FinTech e FinOps."
        },
        fr: {
            "nav.skip": "Aller au contenu",
            "nav.exp": "Expérience",
            "nav.proj": "Projets",
            "nav.contact": "Contact",
            "hero.eyebrow": "Consultant IT &amp; IA · FinTech &amp; Données",
            "hero.title": "Je bâtis là où la <span class=\"grad\">technologie</span><br /> rencontre la <span class=\"grad grad--alt\">finance</span>.",
            "hero.lede": "Spécialiste Données &amp; IA qui transforme les données brutes du marché en décisions. Je conçois des pipelines de données avec <strong>dbt, Snowflake &amp; Databricks</strong>, j'automatise les workflows avec <strong>l'IA et l'orchestration multi-agents</strong>, et je développe des <strong>scanners de marché algorithmiques</strong> en Python — au croisement de la stratégie financière et de l'automatisation technique.",
            "hero.cta1": "Voir les projets",
            "stack.kicker": "// stack principal",
            "stack.title": "La boîte à outils",
            "stack.sub": "Des tables brutes aux modèles de reporting, en passant par l'orchestration IA et les données de marché — la stack que j'utilise au quotidien.",
            "exp.kicker": "// parcours",
            "exp.title": "Expérience",
            "exp.sub": "Un parcours de l'IT et de l'ERP vers le data engineering, l'IA et l'automatisation financière.",
            "exp.b1a": "Conçu des pipelines de données de bout en bout, des tables brutes aux modèles de reporting, avec dbt, Looker, LookML, Snowflake, Databricks et Tableau.",
            "exp.b1b": "Exploité le développement assisté par IA (Cursor) et le prompt engineering pour planifier et automatiser des workflows multi-agents.",
            "exp.b1c": "Géré le versioning et le déploiement via Git et CI/CD, avec mise en production sur la branche main.",
            "exp.b2a": "Piloté l'implémentation sur les Ventes (Order-to-Cash), les Achats (Purchase-to-Pay), la Qualité et la Gestion d'Entrepôt.",
            "exp.b2b": "Recueilli et traduit les besoins métier transverses en solutions opérationnelles.",
            "exp.b2c": "Créé des supports de formation, animé des sessions UAT et ajusté les fonctionnalités après la mise en production.",
            "exp.b3a": "Développé un chatbot d'IA conversationnelle avec Azure Cognitive Services : Text-to-Speech, Speech-to-Text et NLP.",
            "exp.b3b": "Implémenté la reconnaissance d'intentions avec LUIS pour des interactions naturelles et humaines.",
            "exp.b4a": "Développé et maintenu des applications web dans une grande entreprise de logiciels italienne.",
            "exp.earlier": "Auparavant : relation client multilingue (Teleperformance) et logistique d'export aérien et maritime international (F.lli Di Martino).",
            "cred.edu": "// formation",
            "cred.certs": "// certifications",
            "cred.langs": "// langues",
            "edu1": "<strong>IFOA</strong> — Technicien en Applications Informatiques Économico-Financières · Administration &amp; Gestion d'Entreprise <span>2024–25</span>",
            "edu2": "<strong>CFP Bauer — AFOL</strong> — Logistique, Matériaux &amp; Gestion de la Supply Chain <span>2021–22</span>",
            "edu3": "<strong>I.T.I. Alessandro Volta</strong> — Diplôme, Informatique &amp; IT (EQF 4) <span>2016–21</span>",
            "proj.kicker": "// projets",
            "proj.title": "Projets",
            "proj.sub": "Travaux en cours autour du scan algorithmique des marchés, de l'automatisation IA et du data engineering.",
            "proj.active": "Actif",
            "proj.automation": "Automatisation",
            "proj.production": "Production",
            "proj1.desc": "Scanners d'actions algorithmiques — un filtre GARP de long terme (Finnhub) et un scan de court terme (Alpha Vantage) — exécutés via des tâches cron planifiées sur GitHub Actions.",
            "proj2.title": "IA Conversationnelle",
            "proj2.desc": "Un chatbot vocal basé sur Azure Cognitive Services — Text-to-Speech, Speech-to-Text et NLP — avec reconnaissance d'intentions LUIS pour une interaction naturelle et humaine.",
            "proj3.title": "Automatisation GitHub",
            "proj3.desc": "Des workflows GitHub Actions planifiés qui s'exécutent via cron, sans supervision — récupération des données, commit des résultats dans le dépôt et mise à jour continue du contenu sans intervention manuelle.",
            "proj4.title": "Pipelines de Données IA",
            "proj4.desc": "Des pipelines analytiques de bout en bout, des tables brutes aux modèles de reporting, construits avec dbt et Snowflake/Databricks et restitués dans Looker &amp; Tableau — accélérés par des workflows multi-agents assistés par IA.",
            "foot.kicker": "// prenons contact",
            "foot.title": "Construisons là où <span class=\"grad\">la tech rencontre la finance</span>.",
            "foot.sub": "Ouvert à des rôles hybrides en Analyse de Données Financières, data engineering FinTech et FinOps."
        },
        ja: {
            "nav.skip": "コンテンツへスキップ",
            "nav.exp": "経歴",
            "nav.proj": "プロジェクト",
            "nav.contact": "連絡先",
            "hero.eyebrow": "IT・AIコンサルタント · FinTech &amp; データ",
            "hero.title": "<span class=\"grad\">テクノロジー</span>と<span class=\"grad grad--alt\">金融</span>が<br />出会う場所をつくる。",
            "hero.lede": "生のマーケットデータを意思決定に変えるデータ＆AIスペシャリスト。<strong>dbt・Snowflake・Databricks</strong> でデータパイプラインを構築し、<strong>AIとマルチエージェント・オーケストレーション</strong>でワークフローを自動化、Python で<strong>アルゴリズム型マーケットスキャナー</strong>を開発します — 金融戦略と技術的自動化をつなぎます。",
            "hero.cta1": "プロジェクトを見る",
            "stack.kicker": "// コアスタック",
            "stack.title": "ツールキット",
            "stack.sub": "生テーブルからレポーティングモデルまで、AIオーケストレーション、マーケットデータ — 日々使っているスタックです。",
            "exp.kicker": "// キャリア",
            "exp.title": "経歴",
            "exp.sub": "ITとERPから、データエンジニアリング・AI・金融自動化への歩み。",
            "exp.b1a": "dbt、Looker、LookML、Snowflake、Databricks、Tableauを用い、生テーブルからレポーティングモデルまでエンドツーエンドのデータパイプラインを設計。",
            "exp.b1b": "AI支援開発（Cursor）とプロンプトエンジニアリングを活用し、マルチエージェント・ワークフローを設計・自動化。",
            "exp.b1c": "GitとCI/CDでバージョン管理とデプロイを行い、mainブランチへリリース。",
            "exp.b2a": "販売（Order-to-Cash）、調達（Purchase-to-Pay）、品質、倉庫管理の各領域で導入をリード。",
            "exp.b2b": "部門横断的な業務要件を収集し、実運用ソリューションへと落とし込み。",
            "exp.b2c": "トレーニング資料を作成し、UATセッションを実施、本番稼働後に機能を最適化。",
            "exp.b3a": "Azure Cognitive Services（Text-to-Speech、Speech-to-Text、NLP）で会話型AIチャットボットを構築。",
            "exp.b3b": "LUISで意図認識を実装し、自然で人間らしいインタラクションを実現。",
            "exp.b4a": "イタリア有数のソフトウェア企業でWebアプリケーションを開発・保守。",
            "exp.earlier": "それ以前：多言語カスタマーオペレーション（Teleperformance）、国際航空・海上輸出物流（F.lli Di Martino）。",
            "cred.edu": "// 学歴",
            "cred.certs": "// 資格",
            "cred.langs": "// 言語",
            "edu1": "<strong>IFOA</strong> — 経済・財務IT応用技術者 · 企業経営・管理 <span>2024–25</span>",
            "edu2": "<strong>CFP Bauer — AFOL</strong> — 物流・資材・サプライチェーン管理 <span>2021–22</span>",
            "edu3": "<strong>I.T.I. Alessandro Volta</strong> — 卒業証書、コンピュータサイエンス・IT（EQF 4）<span>2016–21</span>",
            "proj.kicker": "// プロジェクト",
            "proj.title": "プロジェクト",
            "proj.sub": "アルゴリズム型マーケットスキャン、AI自動化、データエンジニアリングにわたる進行中の取り組み。",
            "proj.active": "稼働中",
            "proj.automation": "自動化",
            "proj.production": "本番",
            "proj1.desc": "アルゴリズム型の株式スキャナー — 長期GARPスクリーン（Finnhub）と短期スキャン（Alpha Vantage） — GitHub Actionsのcronジョブで定期実行。",
            "proj2.title": "会話型AI",
            "proj2.desc": "Azure Cognitive Services（Text-to-Speech、Speech-to-Text、NLP）上に構築した音声チャットボット。LUISの意図認識で自然で人間らしいインタラクションを実現。",
            "proj3.title": "GitHub 自動化",
            "proj3.desc": "cronで定期実行されるGitHub Actionsワークフロー。無人でデータを取得し、結果をリポジトリにコミットして、手作業なしでコンテンツを最新に保ちます。",
            "proj4.title": "AIデータパイプライン",
            "proj4.desc": "生テーブルからレポーティングモデルまでのエンドツーエンド分析パイプライン。dbtとSnowflake/Databricksで構築し、Looker &amp; Tableauで可視化 — AI支援のマルチエージェント・ワークフローで加速。",
            "foot.kicker": "// お問い合わせ",
            "foot.title": "<span class=\"grad\">テクノロジーと金融が出会う</span>場所をつくろう。",
            "foot.sub": "金融データ分析、FinTechデータエンジニアリング、FinOpsのハイブリッド職に関心があります。"
        }
    };

    (function () {
        var nodes = [].slice.call(document.querySelectorAll("[data-i18n]"));
        if (!nodes.length) return;
        var en = nodes.map(function (el) { return el.innerHTML; }); // capture English defaults
        var switcher = document.getElementById("lang-switch");

        function apply(lang) {
            var dict = I18N[lang];
            nodes.forEach(function (el, i) {
                var k = el.getAttribute("data-i18n");
                el.innerHTML = (lang === "en" || !dict || dict[k] == null) ? en[i] : dict[k];
            });
            document.documentElement.lang = lang;
            try { localStorage.setItem("lang", lang); } catch (e) {}
            if (switcher) {
                switcher.querySelectorAll("button").forEach(function (b) {
                    b.classList.toggle("active", b.getAttribute("data-lang") === lang);
                });
            }
        }

        if (switcher) {
            switcher.addEventListener("click", function (e) {
                var b = e.target.closest("button");
                if (b) apply(b.getAttribute("data-lang"));
            });
        }

        var saved;
        try { saved = localStorage.getItem("lang"); } catch (e) {}
        apply(saved === "en" || (saved && I18N[saved]) ? saved : "en");
    })();

    /* ---------- scroll reveal ---------- */
    var reveals = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
        reveals.forEach(function (el) { el.classList.add("in-view"); });
    } else {
        var io = new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
        reveals.forEach(function (el) { io.observe(el); });
    }

    /* ---------- constellation canvas (cheap, gated) ---------- */
    var canvas = document.getElementById("constellation");
    // Skip on reduced-motion or small/touch screens to save battery & paint cost
    if (canvas && !reduceMotion && window.innerWidth > 760) {
        var ctx = canvas.getContext("2d");
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var w, h, points, raf;

        var COUNT = 46;       // particle count
        var LINK = 150;       // max distance to draw a link
        var SPEED = 0.18;

        function size() {
            w = canvas.clientWidth;
            h = canvas.clientHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function seed() {
            points = [];
            for (var i = 0; i < COUNT; i++) {
                points.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * SPEED,
                    vy: (Math.random() - 0.5) * SPEED
                });
            }
        }

        function frame() {
            ctx.clearRect(0, 0, w, h);
            for (var i = 0; i < points.length; i++) {
                var p = points[i];
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(251, 191, 36, 0.7)";
                ctx.fill();

                for (var j = i + 1; j < points.length; j++) {
                    var q = points[j];
                    var dx = p.x - q.x, dy = p.y - q.y;
                    var dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < LINK) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle = "rgba(251, 146, 60," + (0.16 * (1 - dist / LINK)) + ")";
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }
            raf = requestAnimationFrame(frame);
        }

        function start() { size(); seed(); cancelAnimationFrame(raf); frame(); }

        start();

        // Pause when tab hidden; resume on return
        document.addEventListener("visibilitychange", function () {
            if (document.hidden) cancelAnimationFrame(raf);
            else frame();
        });

        var resizeTimer;
        window.addEventListener("resize", function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(start, 200);
        });
    }
})();
