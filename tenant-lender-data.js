// Tenant & Lender News — Week of May 15, 2026
// Replace this file each week with updated scan results (same structure)

const TENANT_LENDER_NEWS = {
    date: "May 15, 2026",
    last_scan: "2026-05-15T18:00:00Z",

    // Jackson Shaw watchlist — tenants, lenders, equity partners
    companies: [
        { id: "1",  name: "Lincoln Tech",                        cat: "Tenant" },
        { id: "2",  name: "Crown Equipment",                     cat: "Tenant" },
        { id: "3",  name: "Tongrun International",               cat: "Tenant" },
        { id: "4",  name: "Canteen",                             cat: "Tenant" },
        { id: "5",  name: "Control Panels",                      cat: "Tenant" },
        { id: "6",  name: "Baer Manufacturing / Hunt Electric",  cat: "Tenant" },
        { id: "7",  name: "Grander Distribution",                cat: "Tenant" },
        { id: "8",  name: "Clopay",                              cat: "Tenant" },
        { id: "9",  name: "International Paper",                 cat: "Tenant" },
        { id: "10", name: "Duroshox",                            cat: "Tenant" },
        { id: "11", name: "Bright Events",                       cat: "Tenant" },
        { id: "12", name: "Xingyu Lighting",                     cat: "Tenant" },
        { id: "13", name: "Hartford Insurance",                  cat: "Tenant" },
        { id: "23", name: "Triad Manufacturing",                 cat: "Tenant" },
        { id: "14", name: "Busey Bank",                          cat: "Lender" },
        { id: "15", name: "Huntington Bank",                     cat: "Lender" },
        { id: "16", name: "Fifth Third Bank",                    cat: "Lender" },
        { id: "17", name: "Inwood National Bank",                cat: "Lender" },
        { id: "18", name: "Simmons Bank",                        cat: "Lender" },
        { id: "19", name: "Barings",                             cat: "Lender" },
        { id: "20", name: "Hall Group",                          cat: "Lender" },
        { id: "21", name: "PACE Equities",                       cat: "Lender" },
        { id: "24", name: "Bank OZK",                            cat: "Lender" },
        { id: "22", name: "Sammons Enterprise",                  cat: "Equity Partner" },
    ],

    alerts: [
        {
            level: "HIGH",
            company: "International Paper",
            cat: "Tenant",
            headline: "Georgetown SC container plant closure underway (126 jobs); stock near 52-week low at $31.50; 7+ North American closures and 700+ layoffs planned for 2026; EMEA spinoff 12-15 months out",
            summary: "International Paper (NYSE: IP) continues its most aggressive restructuring in decades. The <b>Georgetown, South Carolina container plant began layoffs May 1</b> with permanent closure expected by year-end (126 employees). IP has now closed or sold four containerboard mills, four recycling facilities, and multiple packaging facilities since 2024, with <b>7+ additional closures and 700+ layoffs</b> planned in 2026 — predominately in EMEA, but North American capacity is also being rationalized. IP stock is at approximately <b>$31.50</b>, down <b>~39% YTD</b> and approaching its 52-week low of $29.45. Q1 2026 (reported April 30): North American revenues <b>$5.97B (+13.4% YoY)</b> on containerboard volume, but <b>daily box shipments -11% YoY</b> and margin compression from energy costs and tariffs. The <b>EMEA spinoff remains 12-15 months out</b>; North American operations will retain the Jackson Shaw lease obligations post-split. Management has not disclosed a comprehensive list of planned North American closures beyond what has already been announced.",
            relevance: "Ongoing HIGH watch. The Georgetown closure is a new confirmed data point since the May 8 brief. North American rationalization is accelerating — confirm that no Jackson Shaw-held IP facility appears on any disclosed or rumored closure list. The next Q2 earnings call (expected late July) is the soonest management will disclose further North American footprint changes. The -11% box shipment decline is demand destruction, not restructuring optionality — this is a genuine business headwind. Actionable: request direct confirmation from IP's regional real estate contact that the Jackson Shaw facility is not in the closure pipeline.",
            source: "IP Investor Relations / Packaging Dive / PR Newswire / Yahoo Finance",
            date: "2026-05-15"
        },
        {
            level: "MEDIUM",
            company: "Bank OZK",
            cat: "Lender",
            headline: "Q1 2026 NPA doubling ($451M) ongoing watch; no investor day update confirmed; CIB expansion targeted to match RESG by 2027 — construction lender strategy evolving away from pure CRE",
            summary: "Bank OZK's Q1 2026 credit deterioration (reported April 22) remains the most significant lender credit quality watch item in the portfolio: <b>nonperforming assets more than doubled to $451M</b> (from $214M Q1 2025); <b>net charge-offs $45.3M</b> (vs. $19M a year ago), concentrated in <b>three previously classified real estate loans</b>. Net income fell 5.1% to $159.3M; EPS $1.44 beat estimates but revenue missed. Management is executing a strategic diversification: the <b>Corporate and Institutional Bank (CIB) added nearly two dozen new client relationships</b> in Q1 and is targeted to match or surpass RESG by portfolio size by 2027. An investor day was anticipated in May 2026 but has not been confirmed as of this scan. OZK stock is at approximately <b>$47.48</b>, down <b>-1.8% YTD</b> — a notable underperformer among regional banks.",
            relevance: "The NPA doubling and concentration in three real estate loans is a leading indicator worth continued monitoring. OZK's strategic pivot toward CIB diversification may reduce its appetite for pure-play CRE construction lending — which historically was OZK's core niche and Jackson Shaw's source of aggressive pricing. If OZK tightens construction lending standards or shifts deal focus to non-CRE assets, it removes one historically competitive lender from the market. Monitor Q2 results (expected mid-July) for NPA stabilization or further deterioration.",
            source: "Bank OZK IR / Motley Fool / Investing.com / StockTitan",
            date: "2026-05-15"
        },
        {
            level: "MEDIUM",
            company: "Huntington Bank",
            cat: "Lender",
            headline: "Crossed $250B threshold; Category III regulatory designation triggers stricter capital and liquidity requirements; HBAN stock down 11% YTD and -3.1% this week",
            summary: "Huntington Bancshares (NASDAQ: HBAN) crossed the <b>$250B average total assets threshold</b> following the completion of the Veritex and Cadence Bank integrations, triggering designation as a <b>Category III bank</b> under Federal Reserve standards. Cat III classification imposes enhanced prudential standards: more rigorous stress testing, stricter liquidity coverage ratios, and higher capital buffer requirements. These constraints can incrementally reduce a Cat III bank's appetite for construction-phase CRE lending vs. stabilized asset lending, as construction loans carry higher regulatory capital charges. HBAN stock is at <b>$15.35</b>, down <b>-11% YTD</b> and <b>-3.1%</b> this week alone — despite strong Q1 2026 fundamentals (NII +33% YoY, adj EPS $0.37 beat, $3B buyback authorization).",
            relevance: "The Cat III transition is a structural watch item, not an acute concern. Huntington remains a strategically important lender in Jackson Shaw's Texas market — its Cadence/Veritex integration makes it the 8th-largest bank in Texas with a 21-state footprint and 11-12% loan growth target for 2026. However, Cat III constraints could cause Huntington to re-price or reduce construction loan exposure in favor of stabilized assets over the next 12-24 months. Monitor any Q2 guidance commentary specifically on CRE construction loan appetite.",
            source: "Risk.net / Simply Wall St / Sahmcapital / Yahoo Finance / Huntington IR",
            date: "2026-05-15"
        },
        {
            level: "LOW",
            company: "Clopay",
            cat: "Tenant",
            headline: "Griffon Q2 FY2026 beat maintained; residential volume -6% YoY persists; AMES JV on track for June 2026 close delivering $100M cash; 2.4x net leverage",
            summary: "Griffon Corporation (NYSE: GFF), parent of Clopay Building Products, reported Q2 FY2026 on May 7: adjusted EPS <b>$1.05</b> (beat $0.99 estimate), revenue <b>$421.9M</b>. Clopay volume declined <b>-6% residential YoY</b> due to housing market softness, offset by <b>+5% price/mix</b> (mid-single-digit price increases effective March 2026). The <b>AMES JV (non-Clopay segment)</b> remains on track to close <b>June 2026</b>, delivering <b>$100M in cash proceeds</b> and $161M in second-lien PIK notes to Griffon plus a 43% retained ownership stake. Net debt-to-EBITDA at <b>2.4x</b> — manageable but elevated. Griffon declared its quarterly dividend.",
            relevance: "The May 7 Q2 beat confirmed financial health and pricing power. The AMES JV close in June will de-lever the balance sheet and improve Griffon's financial flexibility. The -6% residential volume decline reflects macro housing softness, not Clopay-specific competitive loss. At 2.4x leverage with a cash catalyst arriving in June, Clopay lease covenant compliance risk remains LOW.",
            source: "Griffon IR / BusinessWire / Motley Fool / Zacks",
            date: "2026-05-07"
        },
        {
            level: "LOW",
            company: "Canteen",
            cat: "Tenant",
            headline: "Choice Partners cooperative contract expired May 21; no renewal announced; Compass Group North America fundamentals remain strong",
            summary: "Canteen (a division of Compass Group USA) had a <b>Choice Partners Cooperative contract expiring May 21, 2026</b> — the cooperative provides food service purchasing agreements for K-12 and higher education institutions. No public renewal announcement has been found in the 45-day scan window. <b>Compass Group PLC</b> (parent) reported high single-digit North American revenue growth in FY2025 with expanding margins. No material negative news for Canteen's core vending/food service operations.",
            relevance: "The Choice Partners contract expiration is a low-level monitoring item — it affects Canteen's institutional client pipeline, not its lease obligations to Jackson Shaw. Compass Group parent-level financial health remains strong. Watch for any Choice Partners renewal announcement or loss of major institutional clients. No actionable lease risk at this time.",
            source: "Choice Partners Cooperative / Compass Group / Vending Market Watch",
            date: "2026-05-15"
        },
        {
            level: "GENERAL",
            company: "Lincoln Tech",
            cat: "Tenant",
            headline: "Q1 2026 massively beats: revenue +22.5% to $144M, EBITDA +84.7%, student starts +19.5%; 2026 guidance raised to $590–600M revenue and $76–$80M EBITDA; Jackson Shaw-developed Rowlett TX campus on track Q1 2027; stock hits new 52-week high above $52",
            summary: "Lincoln Educational Services (NASDAQ: LINC) reported its strongest quarterly results in company history on <b>May 11</b>: revenue <b>$144.0M (+22.5% YoY)</b>, net income <b>$4.4M ($0.14/share)</b>, adjusted EBITDA up <b>84.7% to $15.5M</b>. Student starts <b>+19.5% YoY</b>, with <b>half from organic (pre-2025) operations</b> — broad-based growth across the franchise. Full-year 2026 guidance raised: <b>revenue $590–600M</b> (from $580–590M), <b>EBITDA $76–$80M</b> (from $72–$76M), net income $23–$26M. The <b>Jackson Shaw-developed Rowlett, TX campus remains on track for Q1 2027</b> enrollment; the Hicksville, NY campus will begin enrolling students in Q4 2026. LINC stock surged <b>+16.2%</b> on the Q1 results, reaching a new <b>52-week high above $52</b>, extending its <b>+110% YTD run</b>.",
            relevance: "The strongest possible portfolio-specific signal. Lincoln Tech's +22.5% revenue growth and +84.7% EBITDA improvement confirm it is executing one of the best growth stories in the for-profit education sector. A $590M+ revenue company with a confirmed Q1 2027 enrollment timeline for the <b>active Jackson Shaw Rowlett TX development</b> is the definition of a fortress lease credit. No lease concerns whatsoever — this tenant is accelerating and is set to occupy our project on schedule.",
            source: "Lincoln Ed IR / GlobeNewswire / StockTitan / Simply Wall St / Yahoo Finance",
            date: "2026-05-11"
        },
        {
            level: "GENERAL",
            company: "Crown Equipment",
            cat: "Tenant",
            headline: "April order inflows +10–20% YoY confirmed; Group President of Infrastructure Solutions Chad Hartley joins May 11; IFOY Award nomination secured",
            summary: "Crown Equipment Corporation's Q1 2026 commentary (April 28) confirmed <b>April order inflows running 10–20% higher than April 2025</b>. New organizational hire: <b>Chad Hartley joins as Group President of Infrastructure Solutions</b> on May 11, 2026 — an investment in operational capacity signaling business expansion. Crown was nominated for the <b>IFOY Awards 2026</b> and continues to invest in its Lincoln Tech technician recruitment partnerships. No adverse news in the 45-day scan window.",
            relevance: "April orders +10–20% YoY confirms healthy underlying demand through the tariff and energy cost environment. The new Group President hire signals growth investment, not cost cutting. No lease concerns.",
            source: "Crown Equipment Newsroom / Industrial Vehicle Technology International / TheOfficialBoard",
            date: "2026-05-11"
        },
        {
            level: "GENERAL",
            company: "Tongrun International",
            cat: "Tenant",
            headline: "Platinum Equity strategic investment backing confirmed; Bonham TX headquarters; no adverse news in scan period",
            summary: "Platinum Equity's investment in <b>Tongrun International</b> (precision contract manufacturer, sheet metal solutions, Bonham TX headquarters) remains the key financial stability signal. Platinum Equity's institutional capital backing provides financial resilience for this privately held company. No adverse news in the 45-day scan window.",
            relevance: "Platinum Equity institutional backing significantly strengthens Tongrun's financial profile as a Jackson Shaw tenant. No lease concerns.",
            source: "Platinum Equity / ZoomInfo / PitchBook",
            date: "2026-05-15"
        },
        {
            level: "GENERAL",
            company: "Hartford Insurance",
            cat: "Tenant",
            headline: "Q1 2026: net income +36% to $851M, core ROE 20.3%, $617M returned to shareholders; HIG stock at $133.55 — pulling back from 52-week high",
            summary: "The Hartford (NYSE: HIG) reported Q1 2026 on April 23: <b>net income $851M (+36% YoY)</b>, diluted EPS <b>$3.04</b>, core ROE <b>20.3%</b>. Total revenues <b>$7.23B (+6.1%)</b>. Business Insurance 6% written premium growth at an 89.2 underlying combined ratio. Returned <b>$617M to shareholders</b> in Q1. HIG stock is at <b>$133.55</b>, down from its $144.50 52-week high but still up <b>+4.4% YTD</b>.",
            relevance: "Hartford remains a fortress credit tenant. Net income +36%, 20.3% ROE, and $617M capital return in a single quarter confirm institutional financial health. The stock pullback reflects the broader rate-driven selloff in financials, not company-specific concern. No lease concerns.",
            source: "Hartford IR / StockTitan / Motley Fool",
            date: "2026-04-23"
        },
        {
            level: "GENERAL",
            company: "Triad Manufacturing",
            cat: "Tenant",
            headline: "St. Louis expansion: $1.78M investment, 32 new jobs confirmed; active project pipeline includes Verizon, Caleres, Love Coffee Bar",
            summary: "Triad Manufacturing's St. Louis expansion ($1.78M investment, 32 new jobs, expanded wood production capacity for retail fixtures and furniture) confirmed. Recent projects: Verizon innovation lab, Caleres/Famous Footwear NYC flagship renovation, Love Coffee Bar. Holds Manufacturing Sustainability Certification; first Shop! Path Zero Community member.",
            relevance: "Capacity expansion is an unambiguously positive tenant signal. No lease concerns; expansion may create additional Jackson Shaw opportunity if Triad requires incremental space.",
            source: "Missouri Business Alert / Woodworking Network / KTTN",
            date: "2026-04-22"
        },
        {
            level: "GENERAL",
            company: "Busey Bank",
            cat: "Lender",
            headline: "Q1 2026 beats: adj EPS $0.67 vs $0.59 est; revenue +39.4% YoY; NPAs 0.28%; Official Bank of the Big 12 Conference; stable Texas CRE lender",
            summary: "First Busey Corp reported Q1 2026 on April 28: adjusted EPS <b>$0.67</b> (beat $0.59 estimate by $0.08), revenue <b>$196.2M (+39.4% YoY)</b>. Asset quality exceptional — <b>NPAs 0.28% of total assets</b> (vs. OZK's NPA doubling to $451M). Total assets $18.04B. CEO Van Dukeman reinstated; net margin 25.7%. Q2 dividend $0.26. Named <b>Official Bank of the Big 12 Conference</b> (multi-year partnership). BUSE stock at $26.61 — essentially flat YTD.",
            relevance: "Exceptional credit quality (0.28% NPA ratio) and solid earnings growth validate Busey as a stable Jackson Shaw lending partner. The 0.28% NPA ratio contrasts sharply with Bank OZK's deterioration. Watch Q2 for CrossFirst integration milestones.",
            source: "First Busey IR / GlobeNewswire / Big12Sports",
            date: "2026-04-28"
        },
        {
            level: "GENERAL",
            company: "Fifth Third Bank",
            cat: "Lender",
            headline: "Comerica integration on track; Category III designation from $294B combined assets; 150 new Texas branches by 2029; NIM +17bps; FITB up 2% YTD",
            summary: "Fifth Third Bancorp (NASDAQ: FITB) Q1 2026 (April 17): adj EPS <b>$0.83</b> (beat $0.62), NIM <b>3.30% (+17bps)</b>. The Comerica acquisition (9th-largest US bank, <b>$294B assets</b>) targets <b>$850M run-rate cost savings by Q4 2026</b> and <b>150 new Texas branches by 2029</b> ($600M investment). Crossing the <b>$250B threshold triggers Category III</b> designation — stricter capital and liquidity requirements (shared with Huntington). Chief Credit Officer: Kristof Schneider succeeds retiring Greg Schroeck. FITB at <b>$47.88</b>, up <b>+2.0% YTD</b>.",
            relevance: "An expanding Fifth Third with a major Texas branch buildout is increasingly significant for Jackson Shaw's core markets. NIM expansion and raised NII guidance signal improving earnings quality. The Cat III designation may incrementally constrain construction lending appetite over the next 12-24 months. The 150-branch Texas commitment confirms long-term DFW market engagement.",
            source: "Fifth Third IR / Forbes / PR Newswire / Risk.net",
            date: "2026-04-17"
        },
        {
            level: "GENERAL",
            company: "Simmons Bank",
            cat: "Lender",
            headline: "Q1 2026: net income $68.5M, loans +10% QoQ annualized, NIM 3.84%; CEO Jay Brogdon; named America's Best Regional Banks 2026 (Newsweek)",
            summary: "Simmons First National Corp reported Q1 2026 on April 16: net income <b>$68.5M</b> ($0.47 EPS), revenue <b>$241M (+15.2% YoY)</b>, loans grew <b>10% linked-quarter annualized</b> to $17.9B, NIM <b>3.84%</b>. CEO <b>Jay Brogdon</b> (January 1, 2026) leads a stable institution with a <b>$175M stock repurchase program</b>. Named one of <b>America's Best Regional Banks 2026</b> by Newsweek. No adverse news in the 45-day scan window.",
            relevance: "NIM expansion and double-digit loan growth signal improving earnings power. Stable institution with no credit concerns. Watch Q2 for Texas-specific CRE credit quality or loan volume commentary.",
            source: "Simmons IR / Arkansas Business / StockTitan / Newsweek",
            date: "2026-04-16"
        },
        {
            level: "GENERAL",
            company: "Barings",
            cat: "Lender",
            headline: "Abu Dhabi office opened April 2026; $481B+ AUM; $500M Mubadala global RE debt partnership; Dallas multifamily delivery summer 2026",
            summary: "Barings opened its <b>Abu Dhabi office</b> in April 2026. AUM at <b>$481B+</b>. The Artemis Real Estate Partners acquisition ($11B+ AUM) expanded US RE equity capabilities. A <b>$500M global real estate debt partnership with Mubadala</b> targets $1B in senior and subordinated loans. Barings is expected to deliver a <b>Dallas multifamily project</b> (Rosewood partnership) in <b>summer 2026</b>. No adverse news in the 45-day window.",
            relevance: "Expanding global platform and active Dallas pipeline are positive for Jackson Shaw financing relationships. Mubadala partnership signals continued institutional capital inflows into real estate debt. No adverse signals.",
            source: "Barings.com / Bloomberg / GlobeNewswire / Benzinga",
            date: "2026-04-30"
        },
        {
            level: "GENERAL",
            company: "Hall Group",
            cat: "Lender",
            headline: "HALL Structured Finance returned to Dallas office construction lending for first time in 5 years; closed $60.25M hotel construction loan in Clearwater FL; active deal flow",
            summary: "HALL Structured Finance made a <b>$30.8M first-lien loan</b> for <b>Uptown Tower</b> (254,000 SF office, Dallas) — their <b>first office construction loan in 5 years</b>. Also closed a <b>$60.25M construction loan</b> for The Ballad Hotel (Tapestry by Hilton, Clearwater FL). No adverse news in the 45-day scan window.",
            relevance: "Return to office construction lending signals confidence in Dallas recovery. Active hospitality and office deal flow confirms ongoing lending capacity. No adverse signals for Jackson Shaw relationship.",
            source: "HALL Structured Finance Newsroom / Hall Group",
            date: "2026-03-28"
        },
        {
            level: "GENERAL",
            company: "PACE Equities",
            cat: "Lender",
            headline: "29 Texas C-PACE jurisdictions active; $23.5M Celina TX deal closed; national C-PACE originations hit record $3.5B in 2025; Eli Terry appointed Director of Lending Partnerships",
            summary: "Wheeler County's April 22 launch brought PACE Equity's Lone Star PACE network to <b>29 Texas jurisdictions</b>. C-PACE originations hit record <b>$3.5B in 2025</b>. PACE Equity closed <b>$23.5M in C-PACE capital</b> for the <b>Jefferson Ownsby Complex</b> in Celina, TX (436-unit Class A multifamily, north DFW). <b>Eli Terry</b> appointed Director of Lending Partnerships to deepen bank relationships. No adverse news in the 45-day window.",
            relevance: "Direct equity partner actively deploying capital at the north DFW frontier. 29 Texas jurisdictions makes C-PACE increasingly viable for Jackson Shaw projects outside core counties. Celina deal demonstrates active north DFW execution. No adverse signals.",
            source: "PACE Equity / GlobeNewswire / Lone Star PACE / Bisnow",
            date: "2026-04-22"
        },
        {
            level: "GENERAL",
            company: "Sammons Enterprise",
            cat: "Equity Partner",
            headline: "Summit Laddered Fixed Index Annuity launched; $135B portfolio under new CIO Sergi Turabelidze; A+ ratings maintained from AM Best and S&P; President Rob TeKolste leading all five business units",
            summary: "Sammons Institutional Group launched the <b>Summit Laddered Fixed Index Annuity</b> in January 2026. <b>Sergi Turabelidze</b> (SVP/CIO) manages the <b>$135B investment portfolio</b>. President <b>Rob TeKolste</b> (January 1, 2026) oversees all five business units plus Sammons Wealth Management (acquired Wealthcare LLC, $10.2B AUM). Midland National maintains <b>A+ ratings from AM Best and S&P Global</b>. No adverse news in the 45-day window.",
            relevance: "A+ ratings maintained and new product launches signal organizational growth and financial strength at this equity partner. The new CIO managing $135B could influence real estate allocation decisions over time. No adverse signals.",
            source: "Sammons Financial Group / BusinessWire / Midland National Newsroom",
            date: "2026-04-15"
        }
    ]
};
