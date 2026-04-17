// Tenant & Lender News — Week of April 17, 2026
// Replace this file each week with updated scan results (same structure)

const TENANT_LENDER_NEWS = {
    date: "April 17, 2026",
    last_scan: "2026-04-17T18:00:00Z",

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
        { id: "22", name: "Sammons Enterprise",                  cat: "Equity Partner" },
    ],

    // Severity levels:
    //   HIGH    = Bankruptcy, default, fraud, major legal action
    //   MEDIUM  = Downgrade, C-suite exit, earnings miss, regulatory
    //   LOW     = Minor litigation, restructuring warning, analyst cuts
    //   GENERAL = Neutral or positive developments

    alerts: [
        {
            level: "HIGH",
            company: "International Paper",
            cat: "Tenant",
            headline: "IP acquires NORPAC for $360M; Q1 earnings April 30; restructuring continues with 7+ closures and 500+ layoffs",
            summary: "On <b>April 16</b>, International Paper announced the acquisition of <b>North Pacific Paper Company (NORPAC)</b> for <b>$360M</b>. NORPAC operates in Longview, WA with ~500 employees and ~1M tons/year containerboard capacity; IP says it adds system flexibility and lightweight recycled containerboard. In the background: IP recorded a <b>$2.47B non-cash goodwill impairment</b> on EMEA operations for FY2025 and a net loss of $2.84B. A plan to <b>spin off its EMEA packaging business</b> into a separately listed entity (targeting 12–15 months) remains on track. IP is also advancing plans to <b>permanently close 7+ facilities</b> affecting ~<b>500 roles</b> by end of 2026. JPMorgan placed IP on <b>Negative Catalyst Watch</b> (April 5), cutting the price target to <b>$46.00</b>. Stock is down <b>~32% YTD</b>. Q1 earnings due <b>April 30</b>.",
            relevance: "NORPAC acquisition adds capacity but doesn't resolve counterparty uncertainty from the EMEA spin-off — it is still unclear which successor entity will hold existing North American lease obligations post-split. Facility closures create direct lease risk if any IP-occupied Jackson Shaw properties are targeted. Confirm which specific plants are slated for closure and which post-split entity becomes the counterparty.",
            source: "IP Investor Relations / GuruFocus / Packaging Dive / JPMorgan Research",
            date: "2026-04-16"
        },
        {
            level: "MEDIUM",
            company: "Barings",
            cat: "Lender",
            headline: "$4.9B private credit fund caps redemptions at 5% after investors request 11.3% withdrawal; Artemis acquisition expands RE platform",
            summary: "On April 6, Barings capped redemptions on its <b>$4.9B private credit fund</b> at <b>5%</b> after investors requested <b>11.3%</b> withdrawals in Q1 — fulfilling only ~44% of tender requests pro rata. This follows similar caps by Apollo, Blue Owl, Ares, and BlackRock. Separately, Barings completed its acquisition of <b>Artemis Real Estate Partners</b> ($11B+ AUM), expanding U.S. real estate equity capabilities across multifamily, industrial, and hospitality. Abu Dhabi's <b>Mubadala</b> entered a <b>$500M global real estate debt partnership</b> with Barings, targeting $1B in senior and subordinated loans. Barings is also expected to deliver a <b>Dallas multifamily project</b> (Rosewood partnership) in summer 2026.",
            relevance: "Redemption pressure on Barings' credit funds could signal tighter capital deployment in the near term — worth monitoring whether this spills into real estate allocation. However, the Artemis acquisition, Mubadala partnership, and active DFW pipeline dramatically expand Barings' RE platform. Broadly positive for Jackson Shaw's financing relationships.",
            source: "Bloomberg / Benzinga / Barings.com",
            date: "2026-04-06"
        },
        {
            level: "MEDIUM",
            company: "Clopay",
            cat: "Tenant",
            headline: "Griffon cuts FY2026 guidance a second time; Q1 HBP EBITDA down 3% YoY; Clopay wins Best of IBS Award",
            summary: "Griffon Corporation (NYSE: GFF), parent of Clopay Building Products, issued a second consecutive guidance reduction, citing weakening housing starts. Q1 FY2026 Home & Building Products EBITDA was <b>$122.8M, down 3% YoY</b>, with residential volumes down 4% on higher material and labor costs. The CPP segment was a bright spot, up 19% YoY at $21.7M. FY2026 revenue guidance stands at ~$2.5B with EBITDA of $580–600M. Griffon entered a definitive agreement with <b>ONCAP to form a joint venture</b> creating a global hand tools/home organization company, expected to close by end of June 2026. Clopay won the <b>Best of IBS Award</b> at the 2026 NAHB International Builders' Show for its Avante door with C-Power Click-to-Conceal Panels. Griffon declared a <b>$0.22 quarterly dividend</b>.",
            relevance: "Consecutive guidance cuts tied to housing softness remain a monitoring flag for Clopay leases. The HBP volume decline is directly tied to lower new residential construction — relevant context for any Clopay expansion discussions. However, the ONCAP JV restructures non-Clopay segments, potentially sharpening focus on Clopay as the core division. Product innovation and the earnings beat are positive offsets.",
            source: "Yahoo Finance / PR Newswire / StockTitan",
            date: "2026-04-10"
        },
        {
            level: "MEDIUM",
            company: "Busey Bank",
            cat: "Lender",
            headline: "Declares $0.26 Q2 dividend (April 14); designated CEO successor terminated; new Scottsdale corporate center open",
            summary: "First Busey Corp declared a <b>$0.26 quarterly dividend</b> on April 14 (record date April 24, payable May 1) — signaling stable capital position. In prior weeks: Busey separated from Michael J. Maddox — the former bank president and board-designated successor CEO — effective January 27, 2026, only months after the $917M CrossFirst acquisition closed. Maddox received <b>$8.5M+ in cash severance</b> plus full equity vest acceleration. CEO Van Dukeman was reinstated to both roles. Busey opened a new <b>15,000 SF corporate center</b> in Scottsdale, AZ on April 2, now operating <b>80 locations across 10 states</b> post-CrossFirst merger.",
            relevance: "The Q2 dividend declaration and Scottsdale expansion indicate institutional stability despite the CEO reversal. Monitor whether the CrossFirst integration friction affects lending appetite or relationship continuity with Jackson Shaw.",
            source: "The Cerbat Gem / StockTitan / TipRanks / Bjerk Builders",
            date: "2026-04-14"
        },
        {
            level: "LOW",
            company: "Huntington Bank",
            cat: "Lender",
            headline: "Named Official Bank of University of Michigan; Q1 2026 earnings April 23; ~$280B in assets across 21 states",
            summary: "Huntington Bancshares is reporting Q1 2026 earnings on <b>April 23</b>; analysts are watching loan growth in Texas following the completion of the <b>Cadence Bank ($7.4B)</b> and <b>Veritex</b> acquisitions. Now the 8th-largest bank in Texas and operating across <b>21 states with ~$280B in assets</b>. On April 6, Huntington was named <b>Official Consumer Bank of the University of Michigan</b>, covering 100,000+ students and faculty and including $250K in scholarships. The Cadence systems conversion is targeted for mid-2026. Projecting <b>11–12% loan growth</b> and <b>8–9% deposit growth</b> for 2026.",
            relevance: "A significantly expanded Huntington with deep DFW commercial lending roots via Veritex is a major positive for Texas-market CRE borrowers. Integration period through mid-2026 could create temporary processing delays. Watch Q1 earnings call April 23 for DFW loan volume commentary and any credit quality signals.",
            source: "Huntington IR / StockTitan / American Banker",
            date: "2026-04-06"
        },
        {
            level: "LOW",
            company: "Fifth Third Bank",
            cat: "Lender",
            headline: "Comerica merger complete; 9th largest U.S. bank ($294B assets); 150 new Texas branches planned; Q1 earnings April 17",
            summary: "Fifth Third completed its all-stock acquisition of Comerica, creating the <b>9th-largest U.S. bank with $294B in assets</b> across 17 of the 20 fastest-growing large U.S. markets. Plans <b>150 new branches</b> in Dallas, Houston, and Austin by 2029 ($600M investment). Named to <b>Forbes World's Best Banks 2026</b>. Chief Credit Officer Greg Schroeck retiring, with Kristof Schneider as successor. Q1 2026 earnings due <b>April 17</b> (today). Stock at ~$49.52 prior to results.",
            relevance: "A significantly enlarged Fifth Third is now a top-tier regional lender with major Texas presence — directly relevant to Jackson Shaw's CRE pipeline. Credit leadership transition during active integration is a monitoring item. Watch today's Q1 earnings call for NII trajectory and any CRE credit commentary.",
            source: "Fifth Third IR / Forbes / Rutland Herald",
            date: "2026-02-02"
        },
        {
            level: "LOW",
            company: "Simmons Bank",
            cat: "Lender",
            headline: "Q1 2026 earnings released April 16; CEO Jay Brogdon's first full quarter; recognized as one of America's Best Regional Banks",
            summary: "Simmons First released Q1 2026 earnings <b>April 16</b> (after market close); earnings call at 7:30am CT April 17. CEO <b>Jay Brogdon</b> (assumed role Jan. 1, 2026) leads a stable institution with <b>$78.1M net income</b> in Q4 2025 and a <b>$175M stock repurchase program</b>. Recognized by <b>Newsweek</b> as one of America's Best Regional Banks 2026 and by <b>Forbes</b> as one of America's Best-In-State Companies.",
            relevance: "Q1 results are now available — check call transcript for credit quality metrics and any CRE-specific commentary. No material concerns flagged in advance of the release.",
            source: "Simmons IR / Newsweek / Forbes",
            date: "2026-04-16"
        },
        {
            level: "GENERAL",
            company: "Lincoln Tech",
            cat: "Tenant",
            headline: "Record growth: Q1 starts +19%, FY2026 guidance $580–590M, stock +77% YTD; Rowlett TX campus on track for Q1 2027",
            summary: "Lincoln Educational Services reported Q4/FY results with <b>+19.7% YoY revenue</b>, well above estimates, and issued FY2026 guidance of <b>$580M–$590M revenue</b> (vs. $518M in 2025) and <b>$72M–$76M adjusted EBITDA</b>. Stock up <b>~77% YTD</b> to ~$43.50, with Northland Securities setting a <b>$44 price target</b> on April 9. New campuses: Houston, TX (February 18), Levittown PA (relocated to 90,000 SF), with Hicksville NY (Q4 2026) and <b>Rowlett, TX (Q1 2027)</b> next. At its March 19 Investor Day, management outlined a path to <b>$850M revenue by 2030</b> with doubled EBITDA and tripled net income.",
            relevance: "Lincoln Tech is the strongest tenant story in the portfolio. The Rowlett, TX campus (Q1 2027) is directly in Jackson Shaw's market. Exceptional credit quality, accelerating growth, and active multi-city expansion.",
            source: "GlobeNewsWire / Lincoln Ed IR / SimplyWallSt",
            date: "2026-04-09"
        },
        {
            level: "GENERAL",
            company: "PACE Equities",
            cat: "Lender",
            headline: "Closes $23.5M C-PACE deal for 436-unit multifamily in Celina, TX; record industry originations",
            summary: "PACE Equity closed <b>$23.5M in C-PACE capital</b> for the <b>Jefferson Ownsby Complex</b>, a 436-unit Class A multifamily community in <b>Celina, Texas</b> (north DFW). Industry-wide, C-PACE originations hit a record <b>$3.5B in 2025</b>, with individual deals frequently exceeding $100M. PACE Equity's 2026 outlook projects continued double-digit growth, with recapitalizations still leading demand. Director of Lending Partnerships <b>Eli Terry</b> appointed to deepen bank relationships.",
            relevance: "Direct equity partner actively deploying capital in the DFW market. C-PACE continues mainstreaming as a CRE financing tool — the Celina deal demonstrates local market activity.",
            source: "PACE Equity / CNBC / Bisnow",
            date: "2026-03-15"
        },
        {
            level: "GENERAL",
            company: "Hall Group",
            cat: "Lender",
            headline: "HALL Structured Finance returns to office lending for first time in 5 years; closes $60.25M hotel construction loan",
            summary: "HALL Structured Finance made a <b>$30.8M first-lien loan</b> to a Bradford Cos. affiliate for <b>Uptown Tower</b> (254K SF office, 4144 N. Central Expressway, Dallas) — their <b>first office loan in 5 years</b>. Also closed a <b>$60.25M construction loan</b> for The Ballad Hotel (Tapestry by Hilton) in Clearwater, FL.",
            relevance: "Direct equity partner. Return to office lending after a 5-year hiatus signals confidence in office recovery. Active deal flow across office and hospitality is a positive sign for Jackson Shaw's relationship.",
            source: "Hall Group / HALL Structured Finance Newsroom",
            date: "2026-03-28"
        },
        {
            level: "GENERAL",
            company: "Sammons Enterprise",
            cat: "Equity Partner",
            headline: "New CIO appointed March 2026; new President since Jan. 1; $135B investment portfolio; A+ ratings maintained",
            summary: "Sammons Financial Group appointed <b>Sergi Turabelidze as SVP/CIO</b> effective March 2, 2026, overseeing the <b>$135B investment portfolio</b> including strategy, asset allocation, and performance. <b>Rob TeKolste</b> became President effective January 1, overseeing all five business units plus the newly established Sammons Wealth Management division (acquired Wealthcare LLC, managing $10.2B AUM). Midland National (Sammons subsidiary) maintains A+ ratings from both AM Best and S&P Global.",
            relevance: "Leadership additions signal organizational growth. The new CIO managing $135B in assets could influence real estate allocation decisions. Combined with the new President and wealth management expansion, Sammons is scaling — positive for equity partnership capacity.",
            source: "Sammons Financial Group / Midland National Newsroom",
            date: "2026-03-02"
        }
    ]
};
