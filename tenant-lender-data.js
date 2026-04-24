// Tenant & Lender News — Week of April 24, 2026
// Replace this file each week with updated scan results (same structure)

const TENANT_LENDER_NEWS = {
    date: "April 24, 2026",
    last_scan: "2026-04-24T18:00:00Z",

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
            headline: "Q1 earnings April 30; NORPAC acquisition $360M; EMEA spin-off in progress; 7+ closures and 500+ layoffs; stock -32% YTD",
            summary: "IP Q1 2026 earnings are due <b>April 30 after market close</b> — analyst consensus EPS ~$0.23 (flat YoY), revenue guidance $24.1–24.9B. Key watch items: any update on the <b>EMEA spin-off timeline</b> and which successor entity will hold North American lease obligations post-split; status of the <b>7+ facility closures</b> targeting ~500 roles by end of 2026; and the <b>NORPAC acquisition</b> ($360M, ~500 employees, ~1M tons/year containerboard) that closed April 16. Background: IP recorded a <b>$2.47B non-cash goodwill impairment</b> on EMEA operations for FY2025 and a net loss of $2.84B. JPMorgan placed IP on <b>Negative Catalyst Watch</b> (April 5), cutting the price target to <b>$46.00</b>. Stock is down <b>~32% YTD</b>.",
            relevance: "The April 30 earnings call is the most critical event for Jackson Shaw's lease counterparty risk assessment this quarter. It is still unclear which post-split entity (IP North America vs. the EMEA spinco) will hold existing North American lease obligations. Facility closures create direct lease risk if any IP-occupied Jackson Shaw properties are among the 7+ targeted for permanent closure. Confirm which specific plants are slated for closure.",
            source: "IP Investor Relations / GuruFocus / Packaging Dive / JPMorgan Research / StockTitan",
            date: "2026-04-24"
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
            headline: "Wall Street Zen downgrades GFF to Hold (Apr 19); second consecutive guidance cut; Q1 HBP EBITDA down 3% YoY; Clopay wins Best of IBS Award",
            summary: "Wall Street Zen downgraded Griffon Corporation (NYSE: GFF), parent of Clopay Building Products, from Buy to Hold on <b>April 19</b>, citing weakening housing starts. This follows a second consecutive guidance reduction: Q1 FY2026 Home & Building Products EBITDA was <b>$122.8M, down 3% YoY</b>, with residential volumes down 4% on higher material and labor costs. FY2026 revenue guidance stands at ~$2.5B with EBITDA of $580–600M. Griffon entered a definitive agreement with <b>ONCAP to form a joint venture</b> creating a global hand tools/home organization company, expected to close by end of June 2026. Clopay won the <b>Best of IBS Award</b> at the 2026 NAHB International Builders' Show for its Avante door with C-Power Click-to-Conceal Panels.",
            relevance: "Consecutive guidance cuts and a second analyst downgrade tied to housing softness remain monitoring flags for Clopay leases. The HBP volume decline is directly tied to lower new residential construction. However, the ONCAP JV restructures non-Clopay segments, and product innovation remains strong. Watch for any further analyst coverage changes.",
            source: "Daily Political / StockTitan / Yahoo Finance / PR Newswire",
            date: "2026-04-19"
        },
        {
            level: "MEDIUM",
            company: "Busey Bank",
            cat: "Lender",
            headline: "Q1 earnings April 28; ~$9M former-CEO severance charge expected; $0.26 Q2 dividend declared; new Scottsdale corporate center open",
            summary: "First Busey Corp reports Q1 2026 earnings on <b>April 28</b> — analyst consensus EPS ~$0.57. Watch for the <b>~$9M non-recurring pre-tax severance charge</b> related to former designated CEO successor Michael J. Maddox, who was separated in January 2026 only months after the $917M CrossFirst acquisition. Maddox received $8.5M+ in cash severance plus full equity vest acceleration; CEO Van Dukeman was reinstated to both roles. Separately, Busey declared a <b>$0.26 quarterly dividend</b> on April 14 (record date April 24, payable May 1) — signaling stable capital position. Busey opened a new <b>15,000 SF corporate center</b> in Scottsdale, AZ on April 2, now operating <b>80 locations across 10 states</b> post-CrossFirst merger.",
            relevance: "The Q1 earnings call on April 28 is the first post-Maddox earnings event — watch for CrossFirst integration update and any lending appetite signals for Texas CRE. The dividend declaration indicates capital stability. Monitor whether integration friction affects relationship continuity with Jackson Shaw.",
            source: "The Cerbat Gem / StockTitan / TipRanks / MarketBeat",
            date: "2026-04-24"
        },
        {
            level: "LOW",
            company: "Huntington Bank",
            cat: "Lender",
            headline: "Q1 2026 beats — NII +33% YoY, adjusted EPS $0.37, $3B buyback authorized; Cadence/Veritex integration targeting Q2 completion",
            summary: "Huntington Bancshares reported Q1 2026 on <b>April 23</b>: <b>net income $523M</b>, adjusted EPS <b>$0.37 (beat)</b>, NII <b>+33% YoY</b>, noninterest income <b>+17% QoQ</b>. The board approved a <b>$3B share repurchase authorization</b>, targeting ~$550M in 2026. The <b>Veritex systems conversion</b> (completed January) and <b>Cadence Bank partnership close</b> (February 1) are effectively done; full integration expected <b>Q2 2026</b>. Piper Sandler upgraded HBAN to Neutral following results. Now the 8th-largest bank in Texas operating across <b>21 states with ~$280B in assets</b>. Projecting <b>11–12% loan growth</b> and <b>8–9% deposit growth</b> for 2026.",
            relevance: "A significantly expanded Huntington with deep DFW commercial lending roots via Cadence and Veritex is a major positive for Texas-market CRE borrowers. The strong Q1 print, buyback authorization, and integration progress confirm Huntington as a top-tier relationship lender for the Jackson Shaw pipeline. Watch Q1 earnings call transcript for DFW loan volume commentary.",
            source: "Huntington IR / PR Newswire / Piper Sandler / StockTitan",
            date: "2026-04-23"
        },
        {
            level: "LOW",
            company: "Fifth Third Bank",
            cat: "Lender",
            headline: "Q1 2026: Adj EPS $0.83 beats ($0.62 est), revenue $2.83B slight miss; NIM +17bps; targeting $850M Comerica cost savings by Q4",
            summary: "Fifth Third reported Q1 2026 on <b>April 17</b>: adjusted EPS <b>$0.83</b> (beat vs. $0.62 estimated), revenue <b>$2.83B</b> (slight miss of ~$104M). NII $1.94B; NIM <b>3.30% (+17bps)</b>. Full-year NII guidance raised to <b>$8.7–8.8B</b>. The <b>Comerica acquisition</b> — largest M&A in FITB history — is complete, creating the <b>9th-largest U.S. bank with $294B in assets</b> across 17 of the 20 fastest-growing large U.S. markets, including plans for <b>150 new Texas branches</b> in Dallas, Houston, and Austin by 2029 ($600M investment). Targeting <b>$850M annual run-rate cost savings</b> by Q4 2026. Chief Credit Officer Greg Schroeck retiring; Kristof Schneider as successor.",
            relevance: "A significantly enlarged Fifth Third is now a top-tier regional lender with major and expanding Texas presence. Credit leadership transition during active Comerica integration is a monitoring item. The NIM expansion and raised NII guidance indicate improving earnings quality heading into Q2.",
            source: "Fifth Third IR / Forbes / PR Newswire",
            date: "2026-04-17"
        },
        {
            level: "LOW",
            company: "Simmons Bank",
            cat: "Lender",
            headline: "Q1 2026: Net income $68.5M, revenue $241M (+15.2% YoY), loans +10% QoQ annualized, NIM 3.84%; revenue missed estimates",
            summary: "Simmons First released Q1 2026 on <b>April 16</b>: net income <b>$68.5M</b> ($0.47 EPS), revenue <b>$241M (+15.2% YoY)</b>, loans grew <b>10% linked-quarter annualized</b> to $17.9B, NIM improved to <b>3.84%</b>. Despite the strong profit and loan growth, revenue modestly missed analyst forecasts. CEO <b>Jay Brogdon</b> (assumed role Jan. 1, 2026) leads a stable institution with a <b>$175M stock repurchase program</b>. Recognized by Newsweek as one of America's Best Regional Banks 2026 and by Forbes as one of America's Best-In-State Companies.",
            relevance: "No material concerns. The NIM expansion and double-digit loan growth signal a bank with improving earnings power. Watch upcoming quarters for any CRE-specific credit quality commentary.",
            source: "Simmons IR / Arkansas Business / StockTitan",
            date: "2026-04-16"
        },
        {
            level: "GENERAL",
            company: "Hartford Insurance",
            cat: "Tenant",
            headline: "Q1 2026: Net income +36% to $856M, diluted EPS $3.04; non-GAAP EPS $3.09 missed consensus; operating cash flow $1.045B",
            summary: "The Hartford (NYSE: HIG) reported Q1 2026 on <b>April 23</b>: <b>net income $856M (+36% YoY)</b>, diluted EPS <b>$3.04</b>, revenue <b>$7.23B (+6.1% YoY)</b>. Non-GAAP EPS of <b>$3.09 missed consensus by ~8.8%</b>, which tempered the otherwise strong result. Operating cash flow was <b>$1.045B</b>. Strong underwriting performance across commercial lines drove the profit growth.",
            relevance: "Hartford Insurance is a strong credit tenant — net income up 36% and cash flow of $1B+ underscore institutional financial health. The non-GAAP EPS miss was a market expectation issue rather than an operational problem. No lease concerns.",
            source: "StockTitan / GuruFocus / Hartford IR",
            date: "2026-04-23"
        },
        {
            level: "GENERAL",
            company: "Lincoln Tech",
            cat: "Tenant",
            headline: "Q1 2026 earnings call scheduled May 11; credit facility increased to $125M; stock +80% YTD; Rowlett TX campus on track for Q1 2027",
            summary: "Lincoln Educational Services scheduled its <b>Q1 2026 earnings release and call for May 11</b> (before 9:30am ET). Context: FY2025 delivered <b>+19.7% YoY revenue</b>, and FY2026 guidance stands at <b>$580M–$590M revenue</b> and <b>$72M–$76M adjusted EBITDA</b>. Lincoln increased its <b>credit facility to $125M</b> to fund the ongoing campus expansion. Stock up <b>~80% YTD</b> to ~$44.10. New campuses: Houston TX (February 18), Levittown PA (relocated, 90,000 SF), with Hicksville NY (Q4 2026) and <b>Rowlett, TX (Q1 2027)</b> next. March 19 Investor Day outlined a path to <b>$850M revenue by 2030</b>.",
            relevance: "Lincoln Tech remains the strongest tenant story in the portfolio. Expanded credit facility supports growth without leverage risk. The Rowlett, TX campus (Q1 2027) is directly in Jackson Shaw's market. Watch May 11 Q1 results for Q1 student starts update and Rowlett construction milestone.",
            source: "GlobeNewsWire / Lincoln Ed IR / SimplyWallSt",
            date: "2026-04-17"
        },
        {
            level: "GENERAL",
            company: "PACE Equities",
            cat: "Lender",
            headline: "Wheeler County TX launches C-PACE program (Apr 22), expanding Lone Star PACE to 29 Texas jurisdictions; $23.5M Celina TX deal closed",
            summary: "Wheeler County launched its inaugural C-PACE program on <b>April 22</b>, administered by Lone Star PACE, expanding to <b>29 Texas jurisdictions</b>. Industry-wide, C-PACE originations hit a record <b>$3.5B in 2025</b>, with average deal sizes now reaching <b>~$40M</b> (vs. $800K in 2017). Earlier this year, PACE Equity closed <b>$23.5M in C-PACE capital</b> for the <b>Jefferson Ownsby Complex</b> in Celina, TX (436-unit Class A multifamily, north DFW). Director of Lending Partnerships <b>Eli Terry</b> appointed to deepen bank relationships. PACE Equity's 2026 outlook projects continued double-digit origination growth.",
            relevance: "Direct equity partner actively deploying capital across the DFW market. Expanding Texas jurisdiction coverage makes C-PACE increasingly viable as a financing tool for Jackson Shaw projects outside core DFW counties. The Celina deal demonstrates local market activity at the north DFW frontier.",
            source: "PACE Equity / GlobeNewswire / CNBC / Bisnow",
            date: "2026-04-22"
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
