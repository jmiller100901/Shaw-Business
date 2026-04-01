// Tenant & Lender News — Week of April 3, 2026
// Replace this file each week with updated scan results (same structure)

const TENANT_LENDER_NEWS = {
    date: "April 3, 2026",
    last_scan: "2026-04-03T08:15:00Z",

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
            headline: "International Paper announces 3 plant closures amid demand slump",
            summary: "IP will shutter facilities in Alabama, Ohio, and Oregon by Q3 2026, eliminating approximately 1,200 positions. The closures are part of a broader restructuring to right-size capacity following the DS Smith acquisition integration.",
            relevance: "IP is a Jackson Shaw tenant. No Texas facilities are on the closure list, but reduced operational footprint could signal future lease consolidation.",
            source: "Reuters",
            date: "2026-04-01"
        },
        {
            level: "MEDIUM",
            company: "Clopay",
            cat: "Tenant",
            headline: "Clopay parent Griffon Corp misses Q2 earnings, cuts guidance",
            summary: "Griffon Corporation reported Q2 EPS of $0.82 vs $1.15 expected. Clopay's home & building products segment saw <b>revenue decline 11% YoY</b> on weaker housing starts and destocking by major retailers.",
            relevance: "Earnings weakness at the parent level bears monitoring for lease renewal risk. Current Jackson Shaw lease runs through 2028.",
            source: "Seeking Alpha",
            date: "2026-03-29"
        },
        {
            level: "MEDIUM",
            company: "Fifth Third Bank",
            cat: "Lender",
            headline: "Fifth Third tightens CRE underwriting standards effective April 1",
            summary: "Fifth Third Bank raised minimum DSCR requirements to <b>1.40x from 1.30x</b> for new CRE construction loans and reduced maximum LTV to 60%. The bank cited rising rate volatility and office sector stress as catalysts.",
            relevance: "Direct impact on Jackson Shaw's borrowing terms. Industrial loans may be treated more favorably than the headline suggests, but expect tighter terms on new facilities.",
            source: "American Banker",
            date: "2026-03-31"
        },
        {
            level: "MEDIUM",
            company: "Huntington Bank",
            cat: "Lender",
            headline: "Huntington Bancshares CFO departs amid strategic review",
            summary: "CFO Zachary Wasserman resigned effective immediately, citing personal reasons. The bank named an interim CFO and said its strategic direction remains unchanged. Shares fell 4.2% on the news.",
            relevance: "C-suite instability at a key lending partner. Monitor for any shifts in CRE lending appetite or relationship coverage changes.",
            source: "Bloomberg",
            date: "2026-03-28"
        },
        {
            level: "LOW",
            company: "Lincoln Tech",
            cat: "Tenant",
            headline: "Lincoln Tech faces DOE compliance review at 3 campuses",
            summary: "The Department of Education initiated a standard compliance review of Lincoln Educational Services' financial aid practices at campuses in NJ, TX, and TN. Lincoln called it a routine periodic review.",
            relevance: "Regulatory reviews are common in for-profit education but worth tracking. A negative finding could impact enrollment and tenant financial health.",
            source: "Inside Higher Ed",
            date: "2026-03-30"
        },
        {
            level: "LOW",
            company: "Crown Equipment",
            cat: "Tenant",
            headline: "Crown Equipment faces OSHA fine over warehouse safety violations",
            summary: "OSHA proposed a <b>$340,000 fine</b> against Crown Equipment for repeated safety violations at its New Bremen, OH manufacturing facility. The company is contesting the findings.",
            relevance: "Isolated to Ohio facility. No direct impact on Jackson Shaw properties, but reflects operational risk at the tenant level.",
            source: "Dayton Daily News",
            date: "2026-03-27"
        },
        {
            level: "LOW",
            company: "Simmons Bank",
            cat: "Lender",
            headline: "Moody's revises Simmons Financial Group outlook to negative",
            summary: "Moody's changed its outlook on Simmons Financial from stable to negative, citing elevated CRE concentration (340% of Tier 1 capital) and rising non-performing loans in the office segment.",
            relevance: "Negative outlook could constrain Simmons' willingness to extend new CRE credit. Jackson Shaw's industrial exposure is lower-risk, but overall bank appetite may decrease.",
            source: "Moody's Investors Service",
            date: "2026-04-02"
        },
        {
            level: "GENERAL",
            company: "Barings",
            cat: "Lender",
            headline: "Barings closes $4.1B commercial real estate debt fund",
            summary: "Barings completed fundraising for its largest-ever CRE debt vehicle, with a focus on senior secured industrial and logistics lending. The fund will target the Sun Belt and Midwest markets.",
            relevance: "Positive signal for Jackson Shaw's borrowing capacity. Barings is actively deploying capital into the industrial segment with geographic overlap.",
            source: "PERE",
            date: "2026-04-01"
        },
        {
            level: "GENERAL",
            company: "Hartford Insurance",
            cat: "Tenant",
            headline: "Hartford Financial reports record commercial lines growth",
            summary: "The Hartford posted <b>12% growth in commercial property premiums</b> for Q1, driven by rate increases and new business wins in the middle-market segment. The company raised its full-year outlook.",
            relevance: "Strong financial performance at a Jackson Shaw tenant. Supports lease stability and potential expansion discussions.",
            source: "Hartford Investor Relations",
            date: "2026-03-31"
        },
        {
            level: "GENERAL",
            company: "Busey Bank",
            cat: "Lender",
            headline: "Busey Bank expands DFW commercial lending team",
            summary: "First Busey Corporation hired a 4-person CRE lending team in Dallas, signaling increased focus on the Texas industrial and multifamily markets. The bank's CRE portfolio grew 8% YoY.",
            relevance: "Direct positive for Jackson Shaw. Expanded local team means faster decision-making and potentially more competitive terms on industrial loans.",
            source: "Dallas Business Journal",
            date: "2026-03-26"
        },
        {
            level: "GENERAL",
            company: "Sammons Enterprise",
            cat: "Equity Partner",
            headline: "Sammons Financial Group assets surpass $120 billion",
            summary: "Sammons Financial Group reported total assets under management exceeded $120 billion for the first time, with strong contributions from its real estate and alternative investment portfolios.",
            relevance: "Strong balance sheet at Jackson Shaw's equity partner supports continued investment capacity and partnership stability.",
            source: "Business Wire",
            date: "2026-03-28"
        }
    ]
};
