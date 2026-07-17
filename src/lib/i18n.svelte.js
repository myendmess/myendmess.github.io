/**
 * i18n — EN / IT / FR / JA, ported verbatim from the v1 site (js/main.js).
 * English lives here too (it lived in the DOM before). Values may contain
 * inline HTML (<strong>, .grad spans) and are rendered with {@html}.
 * When adding copy, add the key to ALL FOUR languages.
 *
 * SECURITY CONTRACT: every value here is rendered with {@html} — never
 * populate this dictionary from any source other than this file.
 */

export const LANGS = [
	{ code: 'en', label: 'EN' },
	{ code: 'it', label: 'IT' },
	{ code: 'fr', label: 'FR' },
	{ code: 'ja', label: '日本語' }
];

const messages = {
	en: {
		'nav.skip': 'Skip to content',
		'nav.exp': 'Experience',
		'nav.proj': 'Projects',
		'nav.contact': 'Contact',
		'hero.eyebrow': 'IT &amp; AI Consultant · FinTech &amp; Data',
		'hero.title':
			'I build where <span class="grad">technology</span><br /> meets <span class="grad grad--alt">finance</span>.',
		'hero.lede':
			'Data &amp; AI specialist turning raw market data into decisions. I engineer data pipelines with <strong>dbt, Snowflake &amp; Databricks</strong>, automate workflows with <strong>AI &amp; multi-agent orchestration</strong>, and build <strong>algorithmic market scanners</strong> like <strong>Vela</strong> in Python, bridging financial strategy and technical automation.',
		'hero.cta1': 'View Projects',
		'stack.kicker': '// core stack',
		'stack.title': 'The toolkit',
		'stack.sub':
			'From raw tables to reporting models, AI orchestration, and market data — the stack I work in every day.',
		'exp.kicker': '// career',
		'exp.title': 'Experience',
		'exp.sub': 'A path from IT and ERP into data engineering, AI, and financial automation.',
		'exp.b1a':
			'Designed end-to-end data pipelines, raw tables to reporting models, with dbt, Looker, LookML, Snowflake, Databricks &amp; Tableau.',
		'exp.b1b':
			'Leveraged AI-assisted development (Cursor) and prompt engineering to plan and automate multi-agent workflows.',
		'exp.b1c': 'Managed versioning &amp; deployment through Git and CI/CD, releasing to main.',
		'exp.b2a':
			'Led implementation across Sales (Order-to-Cash), Procurement (Purchase-to-Pay), Quality, and Warehouse Management.',
		'exp.b2b': 'Captured and translated cross-functional business requirements into working solutions.',
		'exp.b2c': 'Built training materials, ran UAT sessions, and tuned functionality after go-live.',
		'exp.b3a':
			'Built a conversational AI chatbot with Azure Cognitive Services: Text-to-Speech, Speech-to-Text, and NLP.',
		'exp.b3b': 'Implemented intent recognition with LUIS for natural, human-like interactions.',
		'exp.b4a': 'Developed and maintained web applications at a leading Italian software company.',
		'exp.earlier':
			'Earlier: multilingual customer operations (Teleperformance) and international air &amp; ocean export logistics (F.lli Di Martino).',
		'cred.edu': '// education',
		'cred.certs': '// certifications',
		'cred.langs': '// languages',
		'cred.view': 'View credential',
		edu1: '<strong>IFOA</strong> — Technician of Economic-Financial IT Applications · Business Admin &amp; Management <span>2024–25</span>',
		edu2: '<strong>CFP Bauer — AFOL</strong> — Logistics, Materials &amp; Supply Chain Management <span>2021–22</span>',
		edu3: '<strong>I.T.I. Alessandro Volta</strong> — Diploma, Computer Science &amp; IT (EQF 4) <span>2016–21</span>',
		'proj.kicker': '// build log',
		'proj.title': 'Projects',
		'proj.sub': 'Active work across algorithmic market scanning, AI automation, and data engineering.',
		'proj.active': 'Finance',
		'proj.automation': 'Automation',
		'proj.production': 'Production',
		'proj1.desc':
			'Algorithmic equity scanners — a long-term GARP screen (Finnhub) and a short-term scan (Alpha Vantage) — running on scheduled GitHub Actions cron jobs, plus a live S&amp;P 500 heatmap dashboard.',
		'proj2.title': 'Conversational AI',
		'proj2.desc':
			'A voice chatbot built on Azure Cognitive Services — Text-to-Speech, Speech-to-Text, and NLP — with LUIS intent recognition for natural, human-like interaction.',
		'proj3.title': 'GitHub Automation',
		'proj3.desc':
			'Scheduled GitHub Actions workflows that run on a cron, unattended — fetching data, committing results back to the repo, and keeping content refreshed without manual intervention.',
		'proj4.title': 'AI Data Pipelines',
		'proj4.desc':
			'End-to-end analytics pipelines from raw tables to reporting models, built with dbt and Snowflake/Databricks and surfaced in Looker &amp; Tableau — accelerated by AI-assisted, multi-agent workflows.',
		'foot.kicker': '// get in touch',
		'foot.title': "Let's build where <span class=\"grad\">tech meets finance</span>.",	},
	it: {
		'nav.skip': 'Vai al contenuto',
		'nav.exp': 'Esperienza',
		'nav.proj': 'Progetti',
		'nav.contact': 'Contatti',
		'hero.eyebrow': 'Consulente IT &amp; AI · FinTech &amp; Dati',
		'hero.title':
			'Costruisco dove la <span class="grad">tecnologia</span><br /> incontra la <span class="grad grad--alt">finanza</span>.',
		'hero.lede':
			'Specialista in Dati e AI che trasforma i dati grezzi di mercato in decisioni. Progetto data pipeline con <strong>dbt, Snowflake e Databricks</strong>, automatizzo i flussi di lavoro con <strong>AI e orchestrazione multi-agente</strong> e costruisco <strong>scanner di mercato algoritmici</strong> come <strong>Vela</strong> in Python — unendo strategia finanziaria e automazione tecnica.',
		'hero.cta1': 'Vedi i progetti',
		'stack.kicker': '// stack principale',
		'stack.title': 'Gli strumenti',
		'stack.sub':
			'Dalle tabelle grezze ai modelli di reporting, orchestrazione AI e dati di mercato — lo stack con cui lavoro ogni giorno.',
		'exp.kicker': '// percorso',
		'exp.title': 'Esperienza',
		'exp.sub': "Un percorso dall'IT e dall'ERP verso data engineering, AI e automazione finanziaria.",
		'exp.b1a':
			'Progettato data pipeline end-to-end, dalle tabelle grezze ai modelli di reporting, con dbt, Looker, LookML, Snowflake, Databricks e Tableau.',
		'exp.b1b':
			"Utilizzato lo sviluppo assistito dall'AI (Cursor) e il prompt engineering per pianificare e automatizzare flussi di lavoro multi-agente.",
		'exp.b1c': 'Gestito versioning e deployment con Git e CI/CD, con rilascio sul branch main.',
		'exp.b2a':
			"Guidato l'implementazione su Vendite (Order-to-Cash), Acquisti (Purchase-to-Pay), Qualità e Gestione del Magazzino.",
		'exp.b2b': 'Raccolto e tradotto i requisiti di business interfunzionali in soluzioni operative.',
		'exp.b2c':
			'Creato materiali di formazione, condotto sessioni UAT e ottimizzato le funzionalità dopo il go-live.',
		'exp.b3a':
			'Realizzato un chatbot di AI conversazionale con Azure Cognitive Services: Text-to-Speech, Speech-to-Text e NLP.',
		'exp.b3b':
			'Implementato il riconoscimento degli intenti con LUIS per interazioni naturali e simili a quelle umane.',
		'exp.b4a': 'Sviluppato e mantenuto applicazioni web in una delle principali aziende software italiane.',
		'exp.earlier':
			'In precedenza: customer operations multilingue (Teleperformance) e logistica di export aereo e marittimo internazionale (F.lli Di Martino).',
		'cred.edu': '// istruzione',
		'cred.certs': '// certificazioni',
		'cred.langs': '// lingue',
		'cred.view': 'Vedi credenziale',
		edu1: "<strong>IFOA</strong> — Tecnico di Applicazioni Informatiche Economico-Finanziarie · Amministrazione e Gestione d'Impresa <span>2024–25</span>",
		edu2: '<strong>CFP Bauer — AFOL</strong> — Logistica, Materiali e Gestione della Supply Chain <span>2021–22</span>',
		edu3: '<strong>I.T.I. Alessandro Volta</strong> — Diploma, Informatica e IT (EQF 4) <span>2016–21</span>',
		'proj.kicker': '// progetti',
		'proj.title': 'Progetti',
		'proj.sub':
			'Lavori attivi tra scansione algoritmica dei mercati, automazione AI e data engineering.',
		'proj.active': 'Finanza',
		'proj.automation': 'Automazione',
		'proj.production': 'Produzione',
		'proj1.desc':
			"Scanner azionari algoritmici — uno screening GARP di lungo periodo (Finnhub) e una scansione di breve periodo (Alpha Vantage) — eseguiti su job cron pianificati con GitHub Actions, più una dashboard heatmap live dell'S&amp;P 500.",
		'proj2.title': 'AI Conversazionale',
		'proj2.desc':
			"Un chatbot vocale basato su Azure Cognitive Services — Text-to-Speech, Speech-to-Text e NLP — con riconoscimento degli intenti LUIS per un'interazione naturale e simile a quella umana.",
		'proj3.title': 'Automazione GitHub',
		'proj3.desc':
			'Workflow di GitHub Actions pianificati che girano su cron, senza supervisione — recuperano dati, committano i risultati nel repo e mantengono i contenuti aggiornati senza interventi manuali.',
		'proj4.title': 'Pipeline di Dati AI',
		'proj4.desc':
			"Pipeline analitiche end-to-end, dalle tabelle grezze ai modelli di reporting, costruite con dbt e Snowflake/Databricks e presentate in Looker e Tableau — accelerate da flussi di lavoro multi-agente assistiti dall'AI.",
		'foot.kicker': '// mettiamoci in contatto',
		'foot.title': 'Costruiamo dove <span class="grad">la tecnologia incontra la finanza</span>.',	},
	fr: {
		'nav.skip': 'Aller au contenu',
		'nav.exp': 'Expérience',
		'nav.proj': 'Projets',
		'nav.contact': 'Contact',
		'hero.eyebrow': 'Consultant IT &amp; IA · FinTech &amp; Données',
		'hero.title':
			'Je bâtis là où la <span class="grad">technologie</span><br /> rencontre la <span class="grad grad--alt">finance</span>.',
		'hero.lede':
			"Spécialiste Données &amp; IA qui transforme les données brutes du marché en décisions. Je conçois des pipelines de données avec <strong>dbt, Snowflake &amp; Databricks</strong>, j'automatise les workflows avec <strong>l'IA et l'orchestration multi-agents</strong>, et je développe des <strong>scanners de marché algorithmiques</strong> comme <strong>Vela</strong> en Python — au croisement de la stratégie financière et de l'automatisation technique.",
		'hero.cta1': 'Voir les projets',
		'stack.kicker': '// stack principal',
		'stack.title': 'La boîte à outils',
		'stack.sub':
			"Des tables brutes aux modèles de reporting, en passant par l'orchestration IA et les données de marché — la stack que j'utilise au quotidien.",
		'exp.kicker': '// parcours',
		'exp.title': 'Expérience',
		'exp.sub':
			"Un parcours de l'IT et de l'ERP vers le data engineering, l'IA et l'automatisation financière.",
		'exp.b1a':
			'Conçu des pipelines de données de bout en bout, des tables brutes aux modèles de reporting, avec dbt, Looker, LookML, Snowflake, Databricks et Tableau.',
		'exp.b1b':
			"Exploité le développement assisté par IA (Cursor) et le prompt engineering pour planifier et automatiser des workflows multi-agents.",
		'exp.b1c':
			'Géré le versioning et le déploiement via Git et CI/CD, avec mise en production sur la branche main.',
		'exp.b2a':
			"Piloté l'implémentation sur les Ventes (Order-to-Cash), les Achats (Purchase-to-Pay), la Qualité et la Gestion d'Entrepôt.",
		'exp.b2b': 'Recueilli et traduit les besoins métier transverses en solutions opérationnelles.',
		'exp.b2c':
			'Créé des supports de formation, animé des sessions UAT et ajusté les fonctionnalités après la mise en production.',
		'exp.b3a':
			"Développé un chatbot d'IA conversationnelle avec Azure Cognitive Services : Text-to-Speech, Speech-to-Text et NLP.",
		'exp.b3b':
			"Implémenté la reconnaissance d'intentions avec LUIS pour des interactions naturelles et humaines.",
		'exp.b4a':
			'Développé et maintenu des applications web dans une grande entreprise de logiciels italienne.',
		'exp.earlier':
			"Auparavant : relation client multilingue (Teleperformance) et logistique d'export aérien et maritime international (F.lli Di Martino).",
		'cred.edu': '// formation',
		'cred.certs': '// certifications',
		'cred.langs': '// langues',
		'cred.view': 'Voir la certification',
		edu1: "<strong>IFOA</strong> — Technicien en Applications Informatiques Économico-Financières · Administration &amp; Gestion d'Entreprise <span>2024–25</span>",
		edu2: '<strong>CFP Bauer — AFOL</strong> — Logistique, Matériaux &amp; Gestion de la Supply Chain <span>2021–22</span>',
		edu3: '<strong>I.T.I. Alessandro Volta</strong> — Diplôme, Informatique &amp; IT (EQF 4) <span>2016–21</span>',
		'proj.kicker': '// projets',
		'proj.title': 'Projets',
		'proj.sub':
			"Travaux en cours autour du scan algorithmique des marchés, de l'automatisation IA et du data engineering.",
		'proj.active': 'Finance',
		'proj.automation': 'Automatisation',
		'proj.production': 'Production',
		'proj1.desc':
			"Scanners d'actions algorithmiques — un filtre GARP de long terme (Finnhub) et un scan de court terme (Alpha Vantage) — exécutés via des tâches cron planifiées sur GitHub Actions, plus un tableau de bord heatmap S&amp;P 500 en direct.",
		'proj2.title': 'IA Conversationnelle',
		'proj2.desc':
			"Un chatbot vocal basé sur Azure Cognitive Services — Text-to-Speech, Speech-to-Text et NLP — avec reconnaissance d'intentions LUIS pour une interaction naturelle et humaine.",
		'proj3.title': 'Automatisation GitHub',
		'proj3.desc':
			"Des workflows GitHub Actions planifiés qui s'exécutent via cron, sans supervision — récupération des données, commit des résultats dans le dépôt et mise à jour continue du contenu sans intervention manuelle.",
		'proj4.title': 'Pipelines de Données IA',
		'proj4.desc':
			'Des pipelines analytiques de bout en bout, des tables brutes aux modèles de reporting, construits avec dbt et Snowflake/Databricks et restitués dans Looker &amp; Tableau — accélérés par des workflows multi-agents assistés par IA.',
		'foot.kicker': '// prenons contact',
		'foot.title': 'Construisons là où <span class="grad">la tech rencontre la finance</span>.',	},
	ja: {
		'nav.skip': 'コンテンツへスキップ',
		'nav.exp': '経歴',
		'nav.proj': 'プロジェクト',
		'nav.contact': '連絡先',
		'hero.eyebrow': 'IT・AIコンサルタント · FinTech &amp; データ',
		'hero.title':
			'<span class="grad">テクノロジー</span>と<span class="grad grad--alt">金融</span>が<br />出会う場所をつくる。',
		'hero.lede':
			'生のマーケットデータを意思決定に変えるデータ＆AIスペシャリスト。<strong>dbt・Snowflake・Databricks</strong> でデータパイプラインを構築し、<strong>AIとマルチエージェント・オーケストレーション</strong>でワークフローを自動化、Python で<strong>Vela</strong> のような<strong>アルゴリズム型マーケットスキャナー</strong>を開発します — 金融戦略と技術的自動化をつなぎます。',
		'hero.cta1': 'プロジェクトを見る',
		'stack.kicker': '// コアスタック',
		'stack.title': 'ツールキット',
		'stack.sub':
			'生テーブルからレポーティングモデルまで、AIオーケストレーション、マーケットデータ — 日々使っているスタックです。',
		'exp.kicker': '// キャリア',
		'exp.title': '経歴',
		'exp.sub': 'ITとERPから、データエンジニアリング・AI・金融自動化への歩み。',
		'exp.b1a':
			'dbt、Looker、LookML、Snowflake、Databricks、Tableauを用い、生テーブルからレポーティングモデルまでエンドツーエンドのデータパイプラインを設計。',
		'exp.b1b':
			'AI支援開発（Cursor）とプロンプトエンジニアリングを活用し、マルチエージェント・ワークフローを設計・自動化。',
		'exp.b1c': 'GitとCI/CDでバージョン管理とデプロイを行い、mainブランチへリリース。',
		'exp.b2a': '販売（Order-to-Cash）、調達（Purchase-to-Pay）、品質、倉庫管理の各領域で導入をリード。',
		'exp.b2b': '部門横断的な業務要件を収集し、実運用ソリューションへと落とし込み。',
		'exp.b2c': 'トレーニング資料を作成し、UATセッションを実施、本番稼働後に機能を最適化。',
		'exp.b3a':
			'Azure Cognitive Services（Text-to-Speech、Speech-to-Text、NLP）で会話型AIチャットボットを構築。',
		'exp.b3b': 'LUISで意図認識を実装し、自然で人間らしいインタラクションを実現。',
		'exp.b4a': 'イタリア有数のソフトウェア企業でWebアプリケーションを開発・保守。',
		'exp.earlier':
			'それ以前：多言語カスタマーオペレーション（Teleperformance）、国際航空・海上輸出物流（F.lli Di Martino）。',
		'cred.edu': '// 学歴',
		'cred.certs': '// 資格',
		'cred.langs': '// 言語',
		'cred.view': '資格を見る',
		edu1: '<strong>IFOA</strong> — 経済・財務IT応用技術者 · 企業経営・管理 <span>2024–25</span>',
		edu2: '<strong>CFP Bauer — AFOL</strong> — 物流・資材・サプライチェーン管理 <span>2021–22</span>',
		edu3: '<strong>I.T.I. Alessandro Volta</strong> — 卒業証書、コンピュータサイエンス・IT（EQF 4）<span>2016–21</span>',
		'proj.kicker': '// プロジェクト',
		'proj.title': 'プロジェクト',
		'proj.sub':
			'アルゴリズム型マーケットスキャン、AI自動化、データエンジニアリングにわたる進行中の取り組み。',
		'proj.active': '財政',
		'proj.automation': '自動化',
		'proj.production': '本番',
		'proj1.desc':
			'アルゴリズム型の株式スキャナー — 長期GARPスクリーン（Finnhub）と短期スキャン（Alpha Vantage） — GitHub Actionsのcronジョブで定期実行。ライブのS&amp;P 500ヒートマップダッシュボード付き。',
		'proj2.title': '会話型AI',
		'proj2.desc':
			'Azure Cognitive Services（Text-to-Speech、Speech-to-Text、NLP）上に構築した音声チャットボット。LUISの意図認識で自然で人間らしいインタラクションを実現。',
		'proj3.title': 'GitHub 自動化',
		'proj3.desc':
			'cronで定期実行されるGitHub Actionsワークフロー。無人でデータを取得し、結果をリポジトリにコミットして、手作業なしでコンテンツを最新に保ちます。',
		'proj4.title': 'AIデータパイプライン',
		'proj4.desc':
			'生テーブルからレポーティングモデルまでのエンドツーエンド分析パイプライン。dbtとSnowflake/Databricksで構築し、Looker &amp; Tableauで可視化 — AI支援のマルチエージェント・ワークフローで加速。',
		'foot.kicker': '// お問い合わせ',
		'foot.title': '<span class="grad">テクノロジーと金融が出会う</span>場所をつくろう。',	}
};

const state = $state({ lang: 'en' });

export const i18n = {
	get lang() {
		return state.lang;
	},
	/** Switch language, persist it, and reflect it on <html lang>. */
	set(lang) {
		if (!messages[lang]) return;
		state.lang = lang;
		if (typeof document !== 'undefined') {
			document.documentElement.lang = lang;
			try {
				localStorage.setItem('lang', lang);
			} catch {
				/* storage unavailable */
			}
		}
	},
	/** Restore the saved language on the client (prerendered HTML is EN). */
	init() {
		try {
			const saved = localStorage.getItem('lang');
			if (saved && messages[saved]) this.set(saved);
		} catch {
			/* storage unavailable */
		}
	}
};

const escapeHtml = (s) =>
	s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

/** Reactive lookup: falls back to English, then to the (escaped) key itself. */
export function t(key) {
	const msg = messages[state.lang]?.[key] ?? messages.en[key];
	return msg ?? escapeHtml(key);
}
