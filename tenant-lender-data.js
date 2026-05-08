// Tenant & Lender News — Week of May 8, 2026
// Replace this file each week with updated scan results (same structure)

const TENANT_LENDER_NEWS = {
    date: "May 8, 2026",
    last_scan: "2026-05-08T18:00:00Z",

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
            headline: "Box shipments -11% YoY; UBS cuts target to $32, Citi to $36; stock approaches 52-week low of $29.45; 2026 EBITDA guidance reduced",
            summary: "International Paper (NYSE: IP) is trading near its <b>52-week low of $29.45</b> at approximately $31.60, down <b>~39% YTD</b>. This week, <b>UBS lowered its price target to $32</b> (from $40) and <b>Citi lowered to $36</b> (from $44, maintaining Buy) — both citing macro headwinds. The company's Q1 2026 earnings (reported April 30) revealed <b>daily box shipments -11% YoY</b>, with 2026 EBITDA guidance reduced. North American revenues came in at <b>$5.97B (+13.4% YoY)</b> on containerboard volume, but margin pressure from tariffs, higher energy costs, and demand softness is compressing profitability. The <b>EMEA spinoff remains 12–15 months out</b>, with IP retaining a 20% stake. <b>31 facility closures</b> and <b>2,800+ position reductions</b> continue — predominantly EMEA-focused. The NORPAC acquisition (~1M tons containerboard) is integrating on plan.",
            relevance: "IP's proximity to its 52-week low is a watch signal — the stock has lost 39% YTD and analyst price targets are converging near current levels. For Jackson Shaw lease counterparty assessment: (1) North American operations remain the stronger segment and retain the lease obligation post-EMEA spin; (2) the 31 closures remain concentrated in EMEA per management; (3) a continued North American volume decline (-11% box shipments) could eventually pressure IP's footprint rationalization decisions in the US. Actionable: confirm no Jackson Shaw-held IP facilities appear on any North American closure list disclosed in Q2 results (expected late July).",
            source: "IP Investor Relations / UBS Research / Citi Research / Simply Wall St / Yahoo Finance",
            date: "2026-05-04"
        },
        {
            level: "MEDIUM",
            company: "Clopay",
            cat: "Tenant",
            headline: "Griffon Q2 FY2026 beats: EPS $1.05 vs $0.99 est; mid-single-digit price increases effective March; residential volume -6% YoY; AMES JV close June 2026",
            summary: "Griffon Corporation (NYSE: GFF), parent of Clopay Building Products, reported Q2 FY2026 on <b>May 7</b>: adjusted EPS <b>$1.05</b> (beat $0.99 estimate), revenue <b>$421.9M</b> (down 1% YoY; volumes -6% residential driven by housing market softness, offset by +5% price/mix). Clopay implemented <b>mid-single-digit price increases</b> effective end of March 2026 on residential garage doors. The non-Clopay AMES segment (tools, lawn & garden) is forming a JV with ONCAP expected to close by <b>June 2026</b>, delivering <b>$100M in cash proceeds</b> and $161M in second-lien paid-in-kind notes to Griffon with a 43% retained ownership stake. Griffon ended Q2 with $109.7M in cash and <b>2.4x net debt-to-EBITDA</b>. The company declared its quarterly dividend. Clopay won the <b>Best of IBS Award</b> for the second consecutive year at the NAHB International Builders' Show.",
            relevance: "The Q2 beat on EPS and price discipline is a positive signal for Clopay lease covenant compliance — the business is profitable and implementing pricing power despite a -6% residential volume environment. The AMES JV closing in June 2026 simplifies Griffon's structure and frees $100M in capital. Watch for whether the residential volume decline (-6%) persists into Q3, which could signal broader housing starts softness relevant to Clopay demand. The 2.4x leverage ratio remains manageable.",
            source: "Griffon IR / BusinessWire / Motley Fool / Zacks / Yahoo Finance",
            date: "2026-05-07"
        },
        {
            level: "MEDIUM",
            company: "Bank OZK",
            cat: "Lender",
            headline: "Ongoing: Q1 NPA doubling ($451M) — investor day May 2026 expected to provide additional CRE credit quality commentary",
            summary: "Bank OZK's Q1 2026 credit deterioration (reported April 21) remains the most significant lender watch item in the portfolio: <b>nonperforming assets more than doubled to $451M</b> (from $214M Q1 2025); <b>net charge-offs $45.3M</b> vs. $19M a year ago, concentrated in <b>three previously classified real estate loans</b>. Net income fell 5.1% to $159.3M; EPS $1.44 missed the $1.46 estimate. The bank is aggressively building out its Commercial Investment Bank, Trust/Wealth, and Mortgage divisions (+15.1% in salary expense), targeting mid-single-digit loan growth for 2026 weighted to Q2–Q4. Management has not disclosed the specific properties behind the three charge-offs. OZK stock is down approximately <b>3% YTD</b> and trading near $46.90. An <b>investor day is expected in May 2026</b> and may provide further guidance on the real estate credit pipeline.",
            relevance: "First material credit cracks at a historically aggressive CRE construction lender. The NPA doubling and concentration in real estate loans is a leading indicator worth tracking. Jackson Shaw should not assume OZK pricing or covenant terms remain competitive on new transactions. Monitor whether Q2 shows additional NPA additions or stabilization. If OZK tightens construction lending standards, it could reduce one source of aggressive pricing on new industrial development deals.",
            source: "Bank OZK IR / Arkansas Business / Motley Fool / Globe and Mail / StockTitan",
            date: "2026-05-07"
        },
        {
            level: "LOW",
            company: "Lincoln Tech",
            cat: "Tenant",
            headline: "Q1 2026 results May 11 (pre-market); student starts +19.5% in Q1; Rowlett TX campus on track for Q1 2027; investor conferences May 12–21",
            summary: "Lincoln Educational Services (NASDAQ: LINC) reports <b>Q1 2026 results on Monday, May 11</b> before 9:30am ET. Management has pre-disclosed <b>Q1 student starts +19.5% YoY</b> — ahead of consensus expectations. Analysts project <b>$0.04 EPS</b> and <b>$135.7M revenue</b> for the quarter. Full-year 2026 guidance stands at <b>$580–$590M revenue</b> and <b>$72–$76M adjusted EBITDA</b>. The company is attending multiple investor conferences the week of May 12–21, including the Sidoti Investor Conference and B. Riley Institutional Investor Conference. The <b>Rowlett, TX campus (Q1 2027)</b> is directly in the Jackson Shaw market. LINC stock at approximately $44.80 — slight pre-earnings pullback after an +83% YTD run.",
            relevance: "The May 11 call is the highest-priority portfolio-specific event of the week. Listen for: (1) Q1 student starts confirmation; (2) any update on Rowlett TX construction timeline; (3) FY2026 guidance maintained or raised; (4) credit facility utilization. Lincoln Tech remains the strongest-performing tenant story in the portfolio.",
            source: "Lincoln Ed IR / GlobeNewswire / StockTitan / Stock Observer / ChartMill",
            date: "2026-05-05"
        },
        {
            level: "LOW",
            company: "Canteen",
            cat: "Tenant",
            headline: "Choice Partners cooperative contract expires May 21, 2026 — no renewal announced; Compass Group North America operations stable",
            summary: "Canteen (a division of Compass Group USA) has a <b>contract with Choice Partners Cooperative expiring May 21, 2026</b>, with no public renewal announcement as of this scan. Choice Partners is a K-12 and higher-education purchasing cooperative; the expiration may prompt a rebid or renegotiation. <b>Compass Group PLC</b> (parent) delivered strong FY2025 results — North American revenue growth in the high single digits and expanding margins. No material negative news for Canteen in the 45-day scan window.",
            relevance: "The Choice Partners contract expiration is a low-level monitoring item — it affects Canteen's institutional client base, not its lease obligations to Jackson Shaw. Compass Group's parent-level financial health remains strong. Watch for any Choice Partners renewal announcement or loss of major institutional clients.",
            source: "Choice Partners Cooperative / Compass USA / Vending Market Watch",
            date: "2026-05-08"
        },
        {
            level: "GENERAL",
            company: "Crown Equipment",
            cat: "Tenant",
            headline: "April order inflows +10–20% YoY confirmed; IFOY Award nomination secured; strong LogiMAT 2026 presence",
            summary: "Crown Equipment Corporation's Q1 2026 earnings commentary (April 28) confirmed that <b>April order inflows are running 10–20% higher than April 2025</b> — a direct real-time demand signal for the material handling segment. Crown was nominated for the <b>IFOY Awards 2026</b> and exhibited at LogiMAT Stuttgart in March. The company continues workforce pipeline investments including Lincoln Tech campus partnerships for technician recruitment.",
            relevance: "Direct positive signal for Crown Equipment lease performance. April orders +10–20% YoY indicates healthy underlying business through the tariff and Iran cost environment. The Lincoln Tech recruitment connection confirms sustained workforce investment correlating with capacity utilization at occupied facilities. No lease concerns.",
            source: "Crown Equipment Newsroom / Industrial Vehicle Technology International / LogiMAT",
            date: "2026-05-01"
        },
        {
            level: "GENERAL",
            company: "Tongrun International",
            cat: "Tenant",
            headline: "Platinum Equity strategic investment backing confirmed; precision contract manufacturer based in Bonham, TX",
            summary: "Platinum Equity has invested in <b>Tongrun International</b>, a precision contract manufacturer delivering high-quality sheet metal solutions. Founded in 2012 and headquartered in <b>Bonham, Texas</b>, Tongrun serves blue-chip customers across high-growth sectors. Platinum Equity's backing provides institutional capital support for growth. No adverse news in the 45-day scan window.",
            relevance: "Platinum Equity institutional backing significantly strengthens Tongrun's financial stability profile as a Jackson Shaw tenant. Bonham TX headquarters confirms continued Texas-market commitment. The strategic investment may support facility expansion — watch for announced expansions that could create incremental Jackson Shaw opportunity.",
            source: "Platinum Equity / ZoomInfo / PitchBook",
            date: "2026-04-15"
        },
        {
            level: "GENERAL",
            company: "Hartford Insurance",
            cat: "Tenant",
            headline: "Q1 2026: Net income +36% to $851M, core ROE 20.3%, $617M returned to shareholders",
            summary: "The Hartford (NYSE: HIG) reported Q1 2026 on April 23: <b>net income $851M (+36% YoY)</b>, diluted EPS <b>$3.04</b>, core earnings <b>$866M</b> at a <b>20.3% core ROE</b>. Total revenues <b>$7.23B (+6.1%)</b>. Business Insurance delivered 6% written premium growth at an 89.2 underlying combined ratio. Returned <b>$617M to shareholders</b> in Q1 ($450M buybacks + $167M dividends). HIG stock at $145.80 — up 14% YTD, approaching its 52-week high.",
            relevance: "Hartford remains a fortress credit tenant — net income +36% YoY and 20.3% ROE underscore institutional financial health. Capital return of $617M in a single quarter is a strong solvency signal. No lease concerns.",
            source: "Hartford IR / GuruFocus / StockTitan / Motley Fool",
            date: "2026-04-23"
        },
        {
            level: "GENERAL",
            company: "Triad Manufacturing",
            cat: "Tenant",
            headline: "St. Louis expansion: $1.78M investment, 32 new jobs, expanded wood production capacity for retail fixtures",
            summary: "Triad Manufacturing announced an expansion of its <b>St. Louis operations</b> with a <b>$1.78M investment</b> and <b>32 new jobs</b>, expanding the wood production department for retail fixtures and furniture. Recent projects include a Verizon innovation lab, Caleres/Famous Footwear NYC flagship renovation, and a Love Coffee Bar build. Triad holds the Manufacturing Sustainability Certification and is the first member of the Shop! Path Zero Community.",
            relevance: "Capacity expansion is an unambiguously positive tenant signal confirming Triad's growth trajectory and demand pipeline. No lease concerns; expansion may create additional Jackson Shaw opportunity if Triad needs incremental space.",
            source: "Missouri Business Alert / Woodworking Network / KTTN",
            date: "2026-04-22"
        },
        {
            level: "GENERAL",
            company: "Busey Bank",
            cat: "Lender",
            headline: "Q1 2026 beats: Adj EPS $0.67 vs. $0.59 est; revenue +39.4% YoY; NPAs 0.28%; Official Bank of the Big 12 Conference",
            summary: "First Busey Corp reported Q1 2026 on April 28: adjusted EPS <b>$0.67</b> (beat $0.59 estimate by $0.08), revenue <b>$196.2M (+39.4% YoY)</b>. Asset quality exceptional — <b>NPAs at just 0.28% of total assets</b>, down 4 bps from December. Total assets $18.04B. CEO Van Dukeman reinstated; net margin 25.7%. Q2 dividend $0.26. In January 2026, Busey was named <b>Official Bank of the Big 12 Conference</b> — a multi-year partnership across 10 states.",
            relevance: "A clean, strong Q1 print with excellent credit quality validates Busey as a stable Texas-CRE lending partner. The 0.28% NPA ratio contrasts sharply with Bank OZK's deterioration. Watch Q2 for CrossFirst integration milestones and Texas-specific CRE loan volume commentary.",
            source: "First Busey IR / GlobeNewswire / Big12Sports / StockTitan",
            date: "2026-04-28"
        },
        {
            level: "GENERAL",
            company: "Huntington Bank",
            cat: "Lender",
            headline: "Q1 2026: NII +33% YoY, adj EPS $0.37 beat; $3B buyback; Cadence/Veritex integrations complete; 8th-largest bank in Texas",
            summary: "Huntington Bancshares reported Q1 2026 on April 23: <b>net income $523M</b>, adjusted EPS <b>$0.37</b> (beat), NII <b>+33% YoY</b>. The board approved a <b>$3B share repurchase</b>. Veritex systems conversion (January 2026) and Cadence Bank integration (February 2026) are complete. Now the <b>8th-largest bank in Texas</b> with <b>21-state presence and ~$280B in assets</b>. Projecting <b>11–12% loan growth</b> for 2026. Piper Sandler upgraded HBAN to Neutral.",
            relevance: "A significantly expanded Huntington with deep DFW commercial lending roots is a major positive for Jackson Shaw's Texas pipeline. The 11-12% loan growth target signals active CRE capital deployment — favorable backdrop for new construction loans. HBAN at $17.90 is up 3.8% YTD.",
            source: "Huntington IR / PR Newswire / Piper Sandler / StockTitan",
            date: "2026-04-23"
        },
        {
            level: "GENERAL",
            company: "Fifth Third Bank",
            cat: "Lender",
            headline: "Comerica integration on track; 150 new Texas branches by 2029; $850M run-rate cost savings targeted Q4 2026; NIM +17bps",
            summary: "Fifth Third Bancorp reported Q1 2026 on April 17: adjusted EPS <b>$0.83</b> (beat $0.62 estimate), NIM <b>3.30% (+17bps)</b>. Full-year NII guidance raised to <b>$8.7–8.8B</b>. The <b>Comerica acquisition</b> — creating the <b>9th-largest US bank with $294B assets</b> — targets <b>$850M run-rate cost savings by Q4 2026</b> and <b>150 new Texas branches by 2029</b> ($600M investment). Chief Credit Officer transition: Kristof Schneider succeeds retiring Greg Schroeck. FITB at $52.00, up 10.8% YTD.",
            relevance: "An expanded Fifth Third with a major Texas branch buildout is increasingly significant in Jackson Shaw's core markets. NIM expansion and raised NII guidance signal improving earnings quality. The 150-branch Texas commitment signals long-term DFW CRE market participation.",
            source: "Fifth Third IR / Forbes / PR Newswire / Investing.com",
            date: "2026-04-17"
        },
        {
            level: "GENERAL",
            company: "Simmons Bank",
            cat: "Lender",
            headline: "Q1 2026: Net income $68.5M, loans +10% QoQ annualized, NIM 3.84%; new CEO Jay Brogdon leading stable institution",
            summary: "Simmons First National Corp reported Q1 2026 on April 16: net income <b>$68.5M</b> ($0.47 EPS), revenue <b>$241M (+15.2% YoY)</b>, loans grew <b>10% linked-quarter annualized</b> to $17.9B, NIM improved to <b>3.84%</b>. CEO <b>Jay Brogdon</b> (January 1, 2026) leads a stable institution with a <b>$175M stock repurchase program</b>. Recognized by Newsweek as one of America's Best Regional Banks 2026.",
            relevance: "No material concerns. NIM expansion and double-digit loan growth signal improving earnings power. The new CEO provides leadership continuity. Watch upcoming quarters for CRE-specific credit quality or Texas-market loan volume commentary.",
            source: "Simmons IR / Arkansas Business / StockTitan / Newsweek",
            date: "2026-04-16"
        },
        {
            level: "GENERAL",
            company: "Barings",
            cat: "Lender",
            headline: "Abu Dhabi office opens; $481B+ AUM; active Dallas multifamily pipeline; Artemis RE platform expanding; Mubadala $500M partnership",
            summary: "Barings opened its new <b>Abu Dhabi office</b> in April 2026. As of March 31, 2026, Barings manages <b>$481B+ AUM</b>. The Artemis Real Estate Partners acquisition ($11B+ AUM) expanded US real estate equity capabilities. A <b>$500M global real estate debt partnership with Mubadala</b> targets $1B in senior and subordinated loans. Barings is expected to deliver a <b>Dallas multifamily project</b> (Rosewood partnership) in summer 2026.",
            relevance: "Barings' expanding global platform and active Dallas pipeline are positive for Jackson Shaw's financing relationships. Abu Dhabi office and Mubadala partnership signal continued institutional capital inflows into real estate debt strategies. Dallas market activity confirms local engagement. No adverse signals.",
            source: "Barings.com / Bloomberg / GlobeNewswire / Benzinga",
            date: "2026-04-30"
        },
        {
            level: "GENERAL",
            company: "Hall Group",
            cat: "Lender",
            headline: "HALL Structured Finance returns to office lending for first time in 5 years; closes $60.25M hotel construction loan",
            summary: "HALL Structured Finance made a <b>$30.8M first-lien loan</b> for <b>Uptown Tower</b> (254,000 SF office, Dallas) — their <b>first office construction loan in 5 years</b>. Also closed a <b>$60.25M construction loan</b> for The Ballad Hotel (Tapestry by Hilton) in Clearwater, FL. No adverse news in the 45-day scan window.",
            relevance: "Direct equity partner with active deal flow. Return to office construction lending signals confidence in Dallas office recovery. Active deal flow across office and hospitality confirms Hall Group's ongoing lending capacity for Jackson Shaw's pipeline.",
            source: "HALL Structured Finance Newsroom / Hall Group",
            date: "2026-03-28"
        },
        {
            level: "GENERAL",
            company: "PACE Equities",
            cat: "Lender",
            headline: "29 Texas C-PACE jurisdictions active; $23.5M Celina TX deal closed; national C-PACE originations hit record $3.5B in 2025",
            summary: "Wheeler County's April 22 launch brought PACE Equity's Lone Star PACE network to <b>29 Texas jurisdictions</b>. C-PACE originations hit a record <b>$3.5B in 2025</b>, with average deal sizes at ~$40M. PACE Equity closed <b>$23.5M in C-PACE capital</b> for the <b>Jefferson Ownsby Complex</b> in Celina, TX (436-unit Class A multifamily, north DFW). Director of Lending Partnerships <b>Eli Terry</b> appointed to deepen bank relationships.",
            relevance: "Direct equity partner actively deploying capital at the north DFW frontier. Expanding Texas jurisdiction coverage makes C-PACE increasingly viable for Jackson Shaw projects outside core DFW counties. The Celina deal demonstrates active north DFW deployment.",
            source: "PACE Equity / GlobeNewswire / Lone Star PACE / Bisnow",
            date: "2026-04-22"
        },
        {
            level: "GENERAL",
            company: "Sammons Enterprise",
            cat: "Equity Partner",
            headline: "Summit Laddered fixed index annuity launched; $135B portfolio managed by new CIO Sergi Turabelidze; A+ ratings maintained",
            summary: "Sammons Institutional Group launched the <b>Summit Laddered Fixed Index Annuity</b> in January 2026. <b>Sergi Turabelidze</b> serves as SVP/CIO managing the <b>$135B investment portfolio</b>. President <b>Rob TeKolste</b> (January 1, 2026) oversees all five business units plus Sammons Wealth Management (acquired Wealthcare LLC, $10.2B AUM). Midland National maintains <b>A+ ratings</b> from AM Best and S&P Global.",
            relevance: "A+ ratings maintained and new product launches signal organizational growth and financial strength at this equity partner. The new CIO managing $135B could influence real estate allocation; Wealth Management expansion signals Sammons' scaling ambitions. No adverse signals.",
            source: "Sammons Financial Group / BusinessWire / Midland National Newsroom",
            date: "2026-04-15"
        }
    ]
};
