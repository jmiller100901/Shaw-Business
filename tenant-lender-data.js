// Tenant & Lender News — Week of April 10, 2026
// Replace this file each week with updated scan results (same structure)

const TENANT_LENDER_NEWS = {
    date: "April 10, 2026",
    last_scan: "2026-04-10T18:00:00Z",

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
            headline: "IP reports $2.84B net loss, plans EMEA spin-off; now advancing 7+ facility closures and 500+ layoffs in 2026",
            summary: "International Paper recorded a <b>$2.47B non-cash goodwill impairment</b> on its EMEA operations for FY2025, generating a net loss of $2.84B. IP announced a plan to <b>spin off its EMEA packaging business</b> into a separately listed entity, targeting completion in 12\u201315 months. IP will retain a meaningful stake and become a <b>pure-play North American packaging company</b>. In a March restructuring update, IP is advancing plans to <b>permanently close 7+ facilities</b> affecting roughly <b>500 roles</b> by end of 2026. JPMorgan placed IP on <b>Negative Catalyst Watch</b> on April 5, cutting the price target to <b>$46.00</b>. Stock is down <b>~33% YTD</b> in the mid-$30s. Q1 earnings due <b>April 30</b>.",
            relevance: "Most urgent alert in this report. The spin-off creates counterparty uncertainty \u2014 it is unclear which successor entity will hold existing lease obligations. Facility closures create direct lease risk if any IP-occupied Jackson Shaw properties are in the pipeline. Worth confirming which specific plants are targeted and which post-split entity will be the counterparty.",
            source: "IP Investor Relations / Packaging Dive / JPMorgan Research",
            date: "2026-04-05"
        },
        {
            level: "MEDIUM",
            company: "Barings",
            cat: "Lender",
            headline: "$4.9B private credit fund caps redemptions at 5% after investors request 11.3% withdrawal; Artemis acquisition expands RE platform",
            summary: "On April 6, Barings capped redemptions on its <b>$4.9B private credit fund</b> at <b>5%</b> after investors requested <b>11.3%</b> withdrawals in Q1 \u2014 fulfilling only ~44% of tender requests pro rata. This follows similar caps by Apollo, Blue Owl, Ares, and BlackRock. Separately, Barings completed its acquisition of <b>Artemis Real Estate Partners</b> ($11B+ AUM), expanding U.S. real estate equity capabilities across multifamily, industrial, and hospitality. Abu Dhabi\u2019s <b>Mubadala</b> entered a <b>$500M global real estate debt partnership</b> with Barings, targeting $1B in senior and subordinated loans.",
            relevance: "Redemption pressure on Barings\u2019 credit funds could signal tighter capital deployment \u2014 worth monitoring whether this spills into real estate allocation. However, the Artemis acquisition and Mubadala partnership dramatically expand Barings\u2019 RE platform and lending capacity, which is directly positive for Jackson Shaw\u2019s financing relationships.",
            source: "Bloomberg / Benzinga / Barings.com",
            date: "2026-04-06"
        },
        {
            level: "MEDIUM",
            company: "Clopay",
            cat: "Tenant",
            headline: "Griffon cuts FY2026 guidance a second time; forms ONCAP joint venture; Clopay wins Best of IBS Award",
            summary: "Griffon Corporation (NYSE: GFF), parent of Clopay Building Products, issued a second consecutive guidance reduction in early March, citing weakening housing starts. Shares are down approximately <b>24% over the past 12 months</b>. FY2026 revenue guidance stands at ~$2.5B with EBITDA of $580\u2013600M. However, Q1 FY2026 EPS of <b>$1.45 beat consensus ($1.34)</b>. Griffon entered a definitive agreement with <b>ONCAP to form a joint venture</b> creating a global hand tools/home organization company, expected to close by end of June 2026. Clopay won the <b>Best of IBS Award</b> at the 2026 NAHB International Builders\u2019 Show for its Avante door with C-Power Click-to-Conceal Panels.",
            relevance: "Consecutive guidance cuts tied to housing softness remain a monitoring flag for Clopay leases. However, the ONCAP JV restructures Griffon\u2019s non-Clopay segments, potentially sharpening focus on Clopay as the core building products division. Product innovation (IBS award) and the earnings beat are positive offsets.",
            source: "Yahoo Finance / PR Newswire / StockTitan",
            date: "2026-03-05"
        },
        {
            level: "MEDIUM",
            company: "Busey Bank",
            cat: "Lender",
            headline: "Designated CEO successor terminated; $9M separation charge; new Scottsdale corporate center opens",
            summary: "First Busey Corp separated from Michael J. Maddox \u2014 the former Busey Bank president and board-designated successor CEO \u2014 effective <b>January 27, 2026</b>, only months after the $917M CrossFirst acquisition closed. Maddox received <b>$8.5M+ in cash severance</b> plus full equity vest acceleration. CEO Van Dukeman was reinstated to both roles. In a positive signal, Busey opened a new <b>15,000 SF corporate center</b> in Scottsdale, AZ on April 2, now operating <b>80 locations across 10 states</b> post-CrossFirst merger.",
            relevance: "The abrupt CEO reversal signals potential integration friction at a key $18B lender. However, the Scottsdale expansion and growing footprint suggest continued institutional growth. Monitor whether the CrossFirst integration affects lending appetite or relationship continuity.",
            source: "StockTitan / TipRanks / Bjerk Builders",
            date: "2026-04-02"
        },
        {
            level: "LOW",
            company: "Huntington Bank",
            cat: "Lender",
            headline: "Now a $280B bank after Cadence + Veritex mergers; 8th largest in Texas; projecting 11-12% loan growth",
            summary: "Huntington Bancshares completed its <b>$7.4B acquisition of Cadence Bank</b> (Feb 2026) and <b>Veritex merger</b> (Oct 2025), expanding to <b>21 states with ~$280B in assets</b>. The Veritex deal specifically deepened its <b>Dallas/Fort Worth commercial lending</b> presence. Now the 8th-largest bank in Texas and largest in Mississippi. Projecting <b>11\u201312% loan growth</b> and <b>8\u20139% deposit growth</b> for 2026. Cadence systems conversion targeted mid-2026.",
            relevance: "A significantly more expansive Huntington with direct DFW commercial lending roots via Veritex is positive for Texas-market CRE borrowers. Integration period through mid-2026 could create temporary delays, but the projected loan growth signals strong appetite.",
            source: "Huntington IR / American Banker / PR Newswire",
            date: "2026-02-01"
        },
        {
            level: "LOW",
            company: "Fifth Third Bank",
            cat: "Lender",
            headline: "Comerica merger complete; 9th largest U.S. bank ($294B assets); 150 new Texas branches planned; Q1 earnings April 17",
            summary: "Fifth Third completed its all-stock acquisition of Comerica, creating the <b>9th-largest U.S. bank with $294B in assets</b> across 17 of the 20 fastest-growing large U.S. markets. Plans <b>150 new branches</b> in Dallas, Houston, and Austin by 2029 ($600M investment). Named to <b>Forbes World\u2019s Best Banks 2026</b>. Chief Credit Officer Greg Schroeck retiring, with Kristof Schneider as successor. Q1 2026 earnings due <b>April 17</b>.",
            relevance: "A significantly enlarged Fifth Third is now a top-tier regional lender with major Texas presence \u2014 relevant to Jackson Shaw\u2019s CRE pipeline. Credit leadership transition during active integration is a monitoring item.",
            source: "Fifth Third IR / Forbes / Rutland Herald",
            date: "2026-02-02"
        },
        {
            level: "LOW",
            company: "Xingyu Lighting",
            cat: "Tenant",
            headline: "Filed Hong Kong IPO prospectus Jan. 26; FY2025 profits +15.3%; U.S.\u2013China tariff exposure flagged",
            summary: "Changzhou Xingyu Automotive Lighting Systems filed its <b>Hong Kong IPO prospectus on January 26, 2026</b>, seeking a dual listing on HKEX alongside its Shanghai Stock Exchange listing. FY2025 net profit rose <b>15.3% YoY</b>, with a Strong Buy consensus from 13 analysts. The IPO prospectus explicitly flags <b>U.S.\u2013China tariff escalation</b> as a material risk.",
            relevance: "As a Chinese-headquartered manufacturer with U.S. operations, escalating auto-parts tariffs could affect U.S. facility utilization. The HK IPO filing improves financial transparency. Monitor tariff developments as they could directly impact any U.S. lease locations.",
            source: "HKEX / TradingView",
            date: "2026-01-26"
        },
        {
            level: "GENERAL",
            company: "Tongrun International",
            cat: "Tenant",
            headline: "Platinum Equity takes investment stake; data center and power generation demand driving growth",
            summary: "<b>Platinum Equity</b> invested in Tongrun International, the precision sheet metal contract manufacturer headquartered in <b>Bonham, TX</b>. Demand from <b>power generation and data center sectors</b> (especially AI infrastructure electrical enclosures) is driving increasing order volumes. Financial terms not disclosed.",
            relevance: "Private equity backing from Platinum Equity and surging demand from the AI/data center boom signal strong tenant stability and potential facility expansion needs. Positive for Jackson Shaw as landlord.",
            source: "PR Newswire / Platinum Equity",
            date: "2026-01-28"
        },
        {
            level: "GENERAL",
            company: "Lincoln Tech",
            cat: "Tenant",
            headline: "Record growth continues \u2014 Q1 starts +19%, FY2026 guidance $580\u2013590M, Houston campus open, $850M 2030 target",
            summary: "Lincoln Educational Services reported Q1 2026 student starts up <b>~19% year-over-year</b> and issued FY2026 guidance of <b>$580M\u2013$590M revenue</b> (vs. $518M in 2025) and <b>$72M\u2013$76M adjusted EBITDA</b>. The company opened a new <b>Houston, TX campus</b> (Feb. 18) and relocated to a larger <b>90,000 sq ft Levittown, PA campus</b>. Hicksville, NY (Q4 2026) and Rowlett, TX (Q1 2027) are slated next. At its March 19 Investor Day, management outlined a path to <b>$850M revenue by 2030</b> with doubled EBITDA and tripled net income. Stock up <b>~56% YTD</b>.",
            relevance: "Lincoln Tech is an actively expanding, creditworthy tenant with strong cash flow and growing enrollment. The Rowlett, TX campus (Q1 2027) is directly in Jackson Shaw\u2019s market. Among the strongest tenant stories in the portfolio.",
            source: "GlobeNewsWire / Lincoln Ed IR",
            date: "2026-03-19"
        },
        {
            level: "GENERAL",
            company: "Hartford Insurance",
            cat: "Tenant",
            headline: "Record FY2025 results ($3.8B net income, +23% YoY); Q1 2026 earnings due April 23 with EPS expected +49%",
            summary: "The Hartford reported full-year 2025 net income of <b>$3.8B (+23% YoY)</b> \u2014 a record. Q4 EPS of $4.06 beat consensus ($3.22). Holds <b>A+/A1 ratings</b> from S&P, A.M. Best, and Moody\u2019s, and returned $2.2B to shareholders in 2025. Q1 2026 earnings due <b>April 23</b>, with analysts expecting EPS of <b>$3.28</b> (up 49% YoY). Appointed <b>Natalie Burns</b> as head of enterprise sales effective May 1.",
            relevance: "Exceptionally strong financial position. Investment-grade credit and record profitability make Hartford among the strongest tenant covenants in the portfolio.",
            source: "Insurance Business Magazine / Yahoo Finance / Hartford Newsroom",
            date: "2026-01-29"
        },
        {
            level: "GENERAL",
            company: "Baer Manufacturing / Hunt Electric",
            cat: "Tenant",
            headline: "Baer Manufacturing expanding into Austin, TX \u2014 73,000 sq ft initial facility, 606,000 sq ft planned",
            summary: "Hunt Electric announced its subsidiary Baer Manufacturing is beginning operations in a <b>73,000 sq ft Austin, TX facility</b> in early 2026, with plans for a 606,000 sq ft building as the expansion matures. The expansion focuses exclusively on third-party manufacturing separate from Hudson, WI operations. Hunt Electric is employee-owned with 1,900+ employees and 60 years in business.",
            relevance: "Active large-format industrial expansion in Jackson Shaw\u2019s core Texas market is a direct positive signal \u2014 strong occupancy of existing space and possible new lease discussions for the next phase of growth.",
            source: "Hunt Electric Newsroom",
            date: "2026-02-01"
        },
        {
            level: "GENERAL",
            company: "PACE Equities",
            cat: "Lender",
            headline: "Closes $23.5M C-PACE deal for 436-unit multifamily in Celina, TX; record industry originations",
            summary: "PACE Equity closed <b>$23.5M in C-PACE capital</b> for the <b>Jefferson Ownsby Complex</b>, a 436-unit Class A multifamily community in <b>Celina, Texas</b> (north DFW). Industry-wide, C-PACE originations hit a record <b>$3.5B in 2025</b>, with individual deals frequently exceeding $100M. PACE Equity\u2019s 2026 outlook projects continued double-digit growth, with recapitalizations still leading demand. Director of Lending Partnerships <b>Eli Terry</b> appointed to deepen bank relationships.",
            relevance: "Direct equity partner actively deploying capital in the DFW market. C-PACE continues mainstreaming as a CRE financing tool \u2014 the Celina deal demonstrates local market activity.",
            source: "PACE Equity / CNBC / Bisnow",
            date: "2026-03-15"
        },
        {
            level: "GENERAL",
            company: "Hall Group",
            cat: "Lender",
            headline: "HALL Structured Finance returns to office lending for first time in 5 years; closes $60.25M hotel construction loan",
            summary: "HALL Structured Finance made a <b>$30.8M first-lien loan</b> to a Bradford Cos. affiliate for <b>Uptown Tower</b> (254K SF office, 4144 N. Central Expressway, Dallas) \u2014 their <b>first office loan in 5 years</b>. Also closed a <b>$60.25M construction loan</b> for The Ballad Hotel (Tapestry by Hilton) in Clearwater, FL.",
            relevance: "Direct equity partner. Return to office lending after a 5-year hiatus signals confidence in office recovery. Active deal flow across office and hospitality is a positive sign for Jackson Shaw\u2019s relationship.",
            source: "Hall Group / HALL Structured Finance Newsroom",
            date: "2026-03-28"
        },
        {
            level: "GENERAL",
            company: "Sammons Enterprise",
            cat: "Equity Partner",
            headline: "New CIO appointed March 2026; new President since Jan. 1; $135B investment portfolio; A+ ratings maintained",
            summary: "Sammons Financial Group appointed <b>Sergi Turabelidze as SVP/CIO</b> effective March 2, 2026, overseeing the <b>$135B investment portfolio</b> including strategy, asset allocation, and performance. <b>Rob TeKolste</b> became President effective January 1, overseeing all five business units plus the newly established Sammons Wealth Management division (acquired Wealthcare LLC, managing $10.2B AUM). Midland National (Sammons subsidiary) maintains A+ ratings from both AM Best and S&P Global.",
            relevance: "Leadership additions signal organizational growth. The new CIO managing $135B in assets could influence real estate allocation decisions. Combined with the new President and wealth management expansion, Sammons is scaling \u2014 positive for equity partnership capacity.",
            source: "Sammons Financial Group / Midland National Newsroom",
            date: "2026-03-02"
        },
        {
            level: "GENERAL",
            company: "Simmons Bank",
            cat: "Lender",
            headline: "Q1 2026 earnings due April 16; recognized as one of America\u2019s Best Regional Banks by Newsweek",
            summary: "Simmons First will release Q1 2026 earnings <b>April 16</b>. CEO <b>Jay Brogdon</b> (assumed role Jan. 1, 2026) leads a stable institution with <b>$78.1M net income</b> in Q4 2025 and a <b>$175M stock repurchase program</b>. Recognized by <b>Newsweek</b> as one of America\u2019s Best Regional Banks 2026 and by <b>Forbes</b> as one of America\u2019s Best-In-State Companies.",
            relevance: "Stable lender with no financial concerns. CEO transition appears orderly. Earnings release next week will provide updated credit quality data.",
            source: "Simmons IR / Newsweek / Forbes",
            date: "2026-03-24"
        }
    ]
};
