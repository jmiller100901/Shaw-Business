// Friday Finance — Week of April 24, 2026
// Replace this file each week with updated data (same structure)

const FRIDAY_FINANCE = {
    date: "April 24, 2026",
    date_short: "4.24.26",

    quote: {
        text: "Markets can remain irrational longer than you can remain solvent.",
        author: "John Maynard Keynes"
    },

    ticker_bar: [
        { symbol: "SPX",  price: "7,138", change_pct: 0.40 },
        { symbol: "DJIA", price: "49,490", change_pct: 0.30 },
        { symbol: "IXIC", price: "24,658", change_pct: 0.70 },
        { symbol: "NVDA", price: "196.35", change_pct: 0.80 },
        { symbol: "JPM",  price: "318.00", change_pct: 0.40 },
        { symbol: "DAL",  price: "70.55", change_pct: -0.30 },
        { symbol: "XOM",  price: "153.50", change_pct: 0.50 },
        { symbol: "AMZN", price: "244.10", change_pct: 0.60 },
        { symbol: "TSLA", price: "356.20", change_pct: 0.20 },
        { symbol: "PLD",  price: "138.00", change_pct: 0.30 },
        { symbol: "BX",   price: "124.00", change_pct: 0.60 }
    ],

    news_bullets: [
        "<b>Earnings season delivered a mixed verdict — Tesla beat but the market wanted more.</b> <b>Tesla (TSLA)</b> posted Q1 adjusted EPS of <b>$0.41 vs. $0.37 estimated</b> on revenue of <b>$22.39B (+15.8% YoY)</b>, with auto revenue +16% and free cash flow recovering. The beat was partially offset by Musk's announcement of <b>$25B+ in 2026 CapEx</b> (up from $20B) for AI and Optimus — shares gave back initial after-hours gains. Elsewhere, <b>GE Aerospace</b> reported EPS $1.86 (+25% YoY) and $1.7B free cash flow but fell 4–6% on unchanged full-year guidance. <b>IBM</b> beat on EPS ($1.91 vs. $1.81) and revenue (+9% YoY) with software up 11% and Z mainframe up 51%, but held full-year guidance flat, sending shares down 6–10%. <b>Boeing</b> — revenue $22.2B (+14% YoY), narrowed net loss to just $7M, and hit a record $695B backlog, though free cash flow remains negative at -$1.5B. <b>United Airlines</b> cut full-year EPS guidance to <b>$7–$11 (from $12–$14)</b> on fuel costs and demand softness tied to the Iran war. <b>CRE angle:</b> Airline guidance cuts reflect ongoing fuel-cost pressure rippling through tenants with logistics and travel exposure. Boeing's $695B backlog is a positive signal for industrial demand tied to aerospace supply chains. The 3M and Intel reports (Tuesday) round out the week. Next week's Mag-7 earnings — Apple, Amazon, Meta, Microsoft — will set the narrative for Q2.",

        "<b>Retail sales surged in March, PMI turned higher in April — but inflation is sticky at 3.3%.</b> March retail sales came in at <b>$752.1B (+1.7% MoM, +4.0% YoY)</b> — a solid consumer spending print, though analysts widely attributed the beat to tariff-driven front-loading rather than organic demand. The April flash <b>Composite PMI jumped to 52.0</b> (from 50.3 in March), the first clear expansion signal of 2026. On the inflation side, March CPI was <b>+3.3% YoY</b> (highest since April 2024), driven almost entirely by a <b>+10.9% surge in energy costs</b> tied to the Iran war. The <b>FOMC meets April 28–29</b> — CME FedWatch prices near-zero probability of a rate move; the Fed has been on hold at <b>3.50–3.75%</b> since last fall. Powell's press conference language on the inflation-growth tradeoff will matter far more than the decision itself. Larger macro data drops landing <b>Wednesday April 30:</b> Q1 GDP Advance Estimate, Employment Cost Index, and PCE Deflator (the Fed's preferred inflation gauge). <b>CRE angle:</b> A sticky inflation print combined with no rate cuts reduces near-term refi relief. Energy-driven CPI is the key distinction — if oil normalizes post-Iran, inflation could fall sharply without the Fed needing to cut. Watch PCE on April 30 for the most policy-relevant read.",

        "<b>Iran ceasefire holding — barely — as Pakistan-hosted peace talks loom Tuesday.</b> US and Iranian negotiators are heading to Islamabad for a <b>second round of direct peace talks</b> on Tuesday April 28. The ceasefire extension has held, and Trump pulled back from strikes on Iranian power plants and bridges again this week. Markets rallied mid-week on ceasefire optimism before pulling back Thursday on stalled Hormuz shipping news. <b>Brent crude closed Friday at ~$104.63/barrel</b> (WTI ~$94.75), down from the ~$109–120 war peak but still roughly <b>$40 above pre-war levels</b>. The Strait of Hormuz remains partially blockaded — ~20M barrels/day of oil flow that transited the strait daily is still impaired. The IEA has called this the <b>largest energy security threat in history</b>. National diesel is running ~$4.80/gallon; gasoline ~$4.16. A lasting peace deal is estimated to return Brent to the low-$70s within six months as Iranian production ramps. A ceasefire breakdown would immediately spike oil toward <b>$115–120/barrel</b>. <b>CRE angle:</b> This remains the single most consequential variable for CRE operating costs over the next 90 days. Diesel at $4.80 is straining trucking operators in the industrial portfolio. Airlines — Delta, American, Southwest — have added fuel surcharges with margins under pressure. Tuesday's Pakistan talks are the week's biggest binary event.",

        "<b>Tariffs driving CRE construction costs up ~6% in 2026 — but industrial lending is surging.</b> Steel, aluminum, and copper face <b>50% tariffs</b>, pushing materials costs for CRE projects up an estimated <b>~6.0% in 2026</b> with total project costs up <b>~3.0%</b>. Residential construction shed approximately <b>60,000 jobs since December 2024</b> as builder activity froze — driven more by tariff uncertainty than direct cost increases. The counterpoint: <b>industrial CRE lending volume surged over 150%</b> in the most recent six-month period versus the prior six months, driven by stable tenant demand and clean industrial underwriting. Lender competition has reached its highest point since 2022 (avg. 5.2 competing quotes per deal). On the distress side, CMBS delinquency remains elevated at <b>9.6%</b> with overall distress at <b>12.07%</b> — concentrated in office and older multifamily rather than industrial. <b>CRE angle:</b> For Jackson Shaw's development pipeline, the tariff cost pressure is real and must be underwritten carefully at the project level. However, the surge in industrial lender appetite suggests Jackson Shaw is in the most favorable borrower position in the CRE capital stack today. Industrial fundamentals remain intact — demand healthy, new supply constrained, and lender competition intense.",

        "<b>Huntington posts strong Q1 after Cadence/Veritex integrations — regional bank health broadly positive.</b> <b>Huntington Bancshares (HBAN)</b> reported Q1 2026 on April 23: <b>net income $523M</b>, adjusted EPS <b>$0.37 (beat)</b>, NII <b>+33% YoY</b>, noninterest income +17% QoQ. The board approved a <b>$3B share repurchase authorization</b>, targeting $550M in 2026. The Veritex systems conversion (January) and Cadence Bank partnership close (February 1) are effectively done; full integration expected <b>Q2 2026</b>. Piper Sandler upgraded HBAN to Neutral following results. <b>Fifth Third (FITB)</b> also beat on adjusted EPS ($0.83 vs. $0.62 estimated) — though revenue of $2.83B slightly missed — as NIM improved 17bps to 3.30% following Comerica integration. <b>Simmons Bank</b> reported Q1 net income of $68.5M on $241M revenue (+15.2% YoY), with loans growing 10% linked-quarter annualized and NIM expanding to 3.84%. <b>Busey Bank (BUSE)</b> reports Q1 on <b>April 28</b> — watch for the former CEO Maddox severance charge (~$9M non-recurring pre-tax) in the results. <b>CRE angle:</b> Three of Jackson Shaw's key lending relationships are reporting strong-to-solid fundamentals this quarter. Huntington's rapid integration of Cadence/Veritex makes it one of the most active Texas-market commercial lenders — expect strong DFW pipeline commentary on the earnings call transcript."
    ],

    watch_next_week: "<b>The biggest week of earnings season converges with the FOMC meeting and a critical Iran peace negotiation.</b> <b>Tuesday April 28:</b> US-Iran negotiators meet in Islamabad for a second round of talks — the most important binary event for oil prices and CRE operating costs. A breakthrough would send Brent toward $85; a breakdown spikes oil toward $115+. Also Tuesday: <b>Busey Bank (BUSE)</b> Q1 earnings — watch for the ~$9M former-CEO severance charge and integration progress after CrossFirst. <b>Wednesday April 29:</b> The <b>FOMC announces at 2:00 PM ET</b>. Zero probability of a rate move; Chair Powell's language on the inflation-growth tradeoff and any shift in tone on rate cuts will set the bond market narrative for Q2. Also Wednesday: <b>Meta and Microsoft</b> report. <b>Wednesday April 30:</b> The economic data deluge — <b>Q1 GDP Advance Estimate</b> (the first read on 2026 growth; consensus ~+2.0%); <b>Employment Cost Index</b>; and the <b>PCE Deflator</b> (the Fed's preferred inflation gauge). Also April 30: <b>International Paper (IP)</b> Q1 earnings after market — critical for Jackson Shaw's lease counterparty risk assessment. Analyst consensus: EPS ~$0.23, revenue guidance $24.1–24.9B; watch for any update on the EMEA spin-off timeline and which successor entity holds North American lease obligations. <b>Apple and Amazon</b> also report Thursday May 1. The week's data dump on April 30 — GDP + PCE + IP earnings — will be the most consequential 24-hour window for CRE capital markets in months.",

    reading_links: [
        {
            title: "Tesla Q1 2026 Financial Results: EPS Beats, Revenue Narrows, CapEx Raised to $25B+",
            url: "https://electrek.co/2026/04/22/tesla-tsla-q1-2026-financial-results/",
            source: "Electrek",
            description: "Full breakdown of Tesla's Q1 beat — adjusted EPS $0.41 vs. $0.37 estimated, auto revenue +16% YoY, and Musk's surprise $25B+ CapEx guidance for AI and Optimus that tempered initial after-hours enthusiasm."
        },
        {
            title: "Oil Prices Fall Friday on Reports of Pakistan-Hosted Iran Peace Talks",
            url: "https://www.cnbc.com/2026/04/24/oil-price-wti-brent-after-israel-lebanon-ceasefire-extension.html",
            source: "CNBC",
            description: "Friday oil market update: Brent ~$104.63, WTI ~$94.75. Covers the ceasefire extension, Hormuz disruption status, and the Tuesday Islamabad peace talks setup — the most important macro event for CRE operating costs next week."
        },
        {
            title: "Tariffs and CRE Construction: By the Numbers",
            url: "https://www.connectcre.com/stories/tariffs-and-cre-construction-by-the-numbers/",
            source: "Connect CRE",
            description: "Detailed breakdown of tariff impacts on CRE project costs — 50% tariffs on steel, aluminum, and copper; ~6% materials cost inflation; ~60K residential construction jobs lost since Dec 2024. Useful underwriting context for any new starts."
        },
        {
            title: "Huntington Bancshares Reports Q1 2026 Earnings — NII +33% YoY, $3B Buyback Authorized",
            url: "https://www.prnewswire.com/news-releases/huntington-bancshares-incorporated-reports-2026-first-quarter-earnings-302751610.html",
            source: "PR Newswire",
            description: "Official Q1 press release from Huntington. Net income $523M, adjusted EPS $0.37 (beat), Cadence/Veritex integrations largely complete with full integration targeted Q2. The most relevant earnings release of the week for Jackson Shaw's lending relationships."
        },
        {
            title: "FOMC Meeting Calendar and April 28–29 Preview",
            url: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm",
            source: "Federal Reserve",
            description: "Official Fed calendar with the April 28–29 meeting confirmed. Rates expected on hold at 3.50–3.75%. Use this alongside the April 30 GDP/PCE data drops to track the policy path for the rest of 2026."
        }
    ],

    rates: {
        "1-Mo Term SOFR":     { current: "3.653%", one_mo_ago: "3.641%", one_yr_ago: "4.390%" },
        "10-Year Treasury":   { current: "4.420%", one_mo_ago: "4.290%", one_yr_ago: "4.386%" },
        "Eff. Federal Funds": { current: "3.643%", one_mo_ago: "3.640%", one_yr_ago: "4.330%" },
        "Prime Rate":         { current: "6.750%", one_mo_ago: "6.750%", one_yr_ago: "7.500%" }
    },

    stocks: {
        "Indices": [
            { company: "S&P 500",              ticker: "SPX",  price: 7137.90,  day_pct: 0.40,  ytd_pct: 3.5,   high_52w: 7165.00,  vs_high: -0.4,  low_52w: 5101.63,  vs_low: 39.9 },
            { company: "Dow Jones Industrial",  ticker: "DJI",  price: 49490.03, day_pct: 0.30,  ytd_pct: 3.0,   high_52w: 50512.79, vs_high: -2.0,  low_52w: 37830.66, vs_low: 30.8 },
            { company: "Nasdaq Composite",      ticker: "COMP", price: 24657.57, day_pct: 0.70,  ytd_pct: 1.4,   high_52w: 24850.00, vs_high: -0.8,  low_52w: 15685.33, vs_low: 57.2 }
        ],
        "Industrial REITs": [
            { company: "Prologis",              ticker: "PLD",  price: 138.00, day_pct: 0.30,  ytd_pct: 6.9,   high_52w: 143.95, vs_high: -4.1,  low_52w: 85.35,  vs_low: 61.7 },
            { company: "Rexford Industrial",    ticker: "REXR", price: 34.10,  day_pct: 0.30,  ytd_pct: -10.8, high_52w: 44.38,  vs_high: -23.1, low_52w: 29.68,  vs_low: 14.9 },
            { company: "EastGroup Properties",  ticker: "EGP",  price: 193.20, day_pct: 0.50,  ytd_pct: 7.5,   high_52w: 193.20, vs_high: 0.0,   low_52w: 143.20, vs_low: 34.9 },
            { company: "First Industrial",      ticker: "FR",   price: 60.35,  day_pct: 0.50,  ytd_pct: 6.5,   high_52w: 60.35,  vs_high: 0.0,   low_52w: 42.80,  vs_low: 41.0 },
            { company: "Terreno Realty",         ticker: "TRNO", price: 63.65,  day_pct: 0.35,  ytd_pct: 0.9,   high_52w: 67.30,  vs_high: -5.4,  low_52w: 48.10,  vs_low: 32.3 },
            { company: "Stag Industrial",        ticker: "STAG", price: 39.20,  day_pct: 0.30,  ytd_pct: 6.6,   high_52w: 40.10,  vs_high: -2.2,  low_52w: 31.20,  vs_low: 25.6 },
            { company: "Americold Realty",        ticker: "COLD", price: 23.80,  day_pct: 0.40,  ytd_pct: -3.8,  high_52w: 28.50,  vs_high: -16.5, low_52w: 19.80,  vs_low: 20.2 },
            { company: "LXP Industrial",          ticker: "LXP",  price: 8.75,   day_pct: 0.25,  ytd_pct: -6.1,  high_52w: 10.50,  vs_high: -16.7, low_52w: 7.20,   vs_low: 21.5 },
            { company: "Ryman Hospitality",       ticker: "RHP",  price: 105.60, day_pct: 0.60,  ytd_pct: 2.6,   high_52w: 118.00, vs_high: -10.5, low_52w: 80.20,  vs_low: 31.7 }
        ],
        "Hospitality REITs": [
            { company: "Host Hotels & Resorts",   ticker: "HST",  price: 20.75, day_pct: 1.40,  ytd_pct: 6.3,   high_52w: 21.00,  vs_high: -1.2,  low_52w: 12.12, vs_low: 71.2 },
            { company: "Apple REIT",              ticker: "APLE", price: 12.70, day_pct: 1.20,  ytd_pct: -3.0,  high_52w: 14.80,  vs_high: -14.2, low_52w: 10.40, vs_low: 22.1 },
            { company: "Park Hotels & Resorts",   ticker: "PK",   price: 11.05, day_pct: 1.10,  ytd_pct: -9.8,  high_52w: 14.10,  vs_high: -21.6, low_52w: 9.60,  vs_low: 15.1 },
            { company: "Pebblebrook Hotel",       ticker: "PEB",  price: 14.18, day_pct: 1.50,  ytd_pct: 9.8,   high_52w: 14.18, vs_high: 0.0,   low_52w: 7.41,  vs_low: 91.4 },
            { company: "Sunstone Hotel",          ticker: "SHO",  price: 9.65,  day_pct: 1.30,  ytd_pct: -3.9,  high_52w: 12.27,  vs_high: -21.4, low_52w: 7.45,  vs_low: 29.5 },
            { company: "RLJ Lodging Trust",       ticker: "RLJ",  price: 8.10,  day_pct: 1.20,  ytd_pct: -3.6,  high_52w: 9.80,   vs_high: -17.3, low_52w: 6.16,  vs_low: 31.5 },
            { company: "DiamondRock Hospitality", ticker: "DRH",  price: 10.27, day_pct: 1.20,  ytd_pct: 2.7,   high_52w: 10.67,  vs_high: -3.7,  low_52w: 6.16,  vs_low: 66.7 },
            { company: "Summit Hotel Properties", ticker: "INN",  price: 4.65,  day_pct: 0.70,  ytd_pct: -24.6, high_52w: 6.00,   vs_high: -22.5, low_52w: 3.57,  vs_low: 30.3 }
        ],
        "Lenders": [
            { company: "Blackstone",          ticker: "BX",   price: 124.00, day_pct: 0.60,  ytd_pct: -19.0, high_52w: 190.09, vs_high: -34.8, low_52w: 101.73, vs_low: 21.9 },
            { company: "Fifth Third Bancorp", ticker: "FITB", price: 50.25,  day_pct: 1.00,  ytd_pct: 7.1,   high_52w: 55.44,  vs_high: -9.4,  low_52w: 31.20,  vs_low: 61.1 },
            { company: "Huntington Bancshares", ticker: "HBAN", price: 17.35,  day_pct: 4.70,  ytd_pct: 0.5,   high_52w: 19.50,  vs_high: -11.0, low_52w: 11.91,  vs_low: 45.7 },
            { company: "BancFirst",           ticker: "BANF", price: 119.50, day_pct: 0.55,  ytd_pct: 0.4,   high_52w: 138.77, vs_high: -13.9, low_52w: 97.02,  vs_low: 23.2 },
            { company: "Busey",               ticker: "BUSE", price: 26.75,  day_pct: 0.50,  ytd_pct: 0.3,   high_52w: 27.65,  vs_high: -3.3,  low_52w: 18.40,  vs_low: 45.4 },
            { company: "Bank OZK",            ticker: "OZK",  price: 49.90,  day_pct: 0.55,  ytd_pct: 3.2,   high_52w: 53.66,  vs_high: -7.0,  low_52w: 35.71,  vs_low: 39.7 },
            { company: "The Hartford",        ticker: "HIG",  price: 142.50, day_pct: 0.60,  ytd_pct: 11.4,  high_52w: 144.50, vs_high: -1.4,  low_52w: 107.49, vs_low: 32.6 }
        ],
        "Industry-related companies": [
            { company: "Amazon",               ticker: "AMZN", price: 244.10, day_pct: 0.60,  ytd_pct: 5.7,   high_52w: 258.60, vs_high: -5.6,  low_52w: 165.29, vs_low: 47.7 },
            { company: "United Parcel Service", ticker: "UPS", price: 105.30, day_pct: 0.75,  ytd_pct: -5.1,  high_52w: 122.41, vs_high: -14.0, low_52w: 82.00,  vs_low: 28.4 },
            { company: "FedEx Corporation",    ticker: "FDX",  price: 385.00, day_pct: 0.60,  ytd_pct: 2.5,   high_52w: 392.86, vs_high: -2.0,  low_52w: 194.30, vs_low: 98.2 },
            { company: "Target Corporation",   ticker: "TGT",  price: 128.50, day_pct: 0.50,  ytd_pct: 11.2,  high_52w: 128.50, vs_high: 0.0,   low_52w: 83.44,  vs_low: 54.0 },
            { company: "GXO Logistics",        ticker: "GXO",  price: 55.50,  day_pct: 0.55,  ytd_pct: 12.8,  high_52w: 66.85,  vs_high: -17.0, low_52w: 30.46,  vs_low: 82.2 },
            { company: "Marriott International", ticker: "MAR", price: 365.00, day_pct: 1.30,  ytd_pct: 13.3,  high_52w: 370.00, vs_high: -1.4,  low_52w: 205.40, vs_low: 77.7 },
            { company: "Hilton Hotels",         ticker: "HLT",  price: 334.00, day_pct: 1.10,  ytd_pct: 6.0,   high_52w: 334.00, vs_high: 0.0,   low_52w: 201.15, vs_low: 66.0 },
            { company: "American Airlines",    ticker: "AAL",  price: 11.70,  day_pct: -1.30, ytd_pct: -10.7, high_52w: 16.50,  vs_high: -29.1, low_52w: 8.92,   vs_low: 31.2 },
            { company: "Southwest Airlines",   ticker: "LUV",  price: 41.80,  day_pct: 0.90,  ytd_pct: 5.3,   high_52w: 55.11,  vs_high: -24.1, low_52w: 23.82,  vs_low: 75.5 },
            { company: "Las Vegas Sands",      ticker: "LVS",  price: 56.10,  day_pct: 0.60,  ytd_pct: -0.8,  high_52w: 70.45,  vs_high: -20.4, low_52w: 30.18,  vs_low: 85.9 },
            { company: "TSMC",                 ticker: "TSM",  price: 378.00, day_pct: 0.85,  ytd_pct: 6.5,   high_52w: 390.21, vs_high: -3.1,  low_52w: 145.84, vs_low: 159.2 },
            { company: "Delta Airlines",       ticker: "DAL",  price: 70.55,  day_pct: -0.30, ytd_pct: 2.2,   high_52w: 76.39,  vs_high: -7.6,  low_52w: 36.56,  vs_low: 93.0 },
            { company: "Ferguson Enterprises", ticker: "FERG", price: 260.00, day_pct: 0.55,  ytd_pct: 10.8,  high_52w: 271.64, vs_high: -4.3,  low_52w: 146.00, vs_low: 78.1 },
            { company: "International Paper",  ticker: "IP",   price: 35.10,  day_pct: -1.10, ytd_pct: -32.0, high_52w: 56.13,  vs_high: -37.5, low_52w: 33.57,  vs_low: 4.6 },
            { company: "Tandy Leather Factory", ticker: "TLF", price: 4.90,   day_pct: 0.0,   ytd_pct: -1.0,  high_52w: 6.10,   vs_high: -19.7, low_52w: 4.10,   vs_low: 19.5 },
            { company: "Lincoln Tech",         ticker: "LINC", price: 44.10,  day_pct: 0.65,  ytd_pct: 80.1,  high_52w: 44.20,  vs_high: -0.2,  low_52w: 14.79,  vs_low: 198.2 },
            { company: "Tesla",                ticker: "TSLA", price: 356.20, day_pct: 0.20,  ytd_pct: 1.0,   high_52w: 488.54, vs_high: -27.1, low_52w: 214.30, vs_low: 66.2 }
        ]
    }
};
