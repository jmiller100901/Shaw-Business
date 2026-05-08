// Friday Finance — Week of May 8, 2026
// Replace this file each week with updated data (same structure)

const FRIDAY_FINANCE = {
    date: "May 8, 2026",
    date_short: "5.8.26",

    quote: {
        text: "In the short run, the market is a voting machine, but in the long run it is a weighing machine.",
        author: "Benjamin Graham"
    },

    ticker_bar: [
        { symbol: "SPX",  price: "7,374", change_pct: 0.13 },
        { symbol: "DJIA", price: "49,752", change_pct: 0.31 },
        { symbol: "IXIC", price: "25,852", change_pct: 0.18 },
        { symbol: "PLD",  price: "142.90", change_pct: 0.43 },
        { symbol: "HST",  price: "21.50", change_pct: 1.90 },
        { symbol: "BX",   price: "123.29", change_pct: -0.50 },
        { symbol: "AMZN", price: "273.07", change_pct: 0.30 },
        { symbol: "MAR",  price: "352.05", change_pct: -1.95 },
        { symbol: "DAL",  price: "73.13", change_pct: 0.60 },
        { symbol: "AAL",  price: "13.18", change_pct: 1.85 },
        { symbol: "FDX",  price: "376.10", change_pct: -0.45 }
    ],

    news_bullets: [
        "<b>A 14-point US-Iran MOU framework emerges mid-week — Brent crashes 12% from $106 to $101; Hormuz reopening would remove a $25/bbl structural premium.</b> The most consequential week in the Iran conflict since the February escalation: on May 6, reports surfaced that the US and Iran are close to a one-page, <b>14-point memorandum of understanding</b> that would end the war — Iran commits to a moratorium on nuclear enrichment; the US lifts sanctions and releases frozen assets. On the news, <b>Brent plunged 7.8% to $101.27</b> (WTI closed at $95.08), the biggest single-day oil drop in two years. By Thursday Iran and the US briefly accused each other of initiating fire in Hormuz, and Trump insisted the ceasefire was intact — Brent settled near <b>$100.51</b>. By Friday, oil was stable near $94–$100 as markets awaited Iran's formal response to the US framework. Diesel slid to ~$4.60/gallon nationally from $4.85 the prior week. <b>CRE angle:</b> A full Hormuz reopening is the single largest rate-relief catalyst of 2026. If Brent retraces to $82–$85, PCE would compress meaningfully within 60–90 days, materially improving refi math. Watch Iran's formal response the week of May 11 — this is the most important macro event of the quarter.",

        "<b>April NFP +115K nearly doubles the 62K consensus; unemployment holds at 4.3% — labor market firmer than any stagflation scenario predicted.</b> The April jobs report (released May 2) delivered a material beat: <b>+115K nonfarm payrolls</b> vs. 62–65K consensus, following an upwardly revised +185K in March. Healthcare led (+37K), followed by transportation and warehousing (+30K) and retail (+22K). Federal government continued to shed jobs (-9K). The unemployment rate held at <b>4.3%</b>. The print eliminates the near-term stagflation framing — a 4.5% PCE with a 4.3% unemployment rate is a supply-shock inflation story, not a demand-collapse. Markets had feared a sub-50K print that would have forced a stagflation read; the result instead reinforces that underlying demand remains solid. <b>CRE angle:</b> A firm labor market in the face of DOGE-related Federal headwinds is the best demand-side signal for warehouse, distribution, and hospitality tenants. The +30K in transportation and warehousing is directly relevant to Jackson Shaw industrial tenant health — these are the workers filling the buildings.",

        "<b>Senate Banking advances Warsh 13–11 — first fully partisan Fed chair vote in history; full Senate confirmation expected week of May 11, Powell handoff May 15.</b> Kevin Warsh cleared the Senate Banking Committee on April 29 with all 13 Republicans for and all 11 Democrats against — the <b>first fully partisan Fed chair committee vote</b> in US history. The full Senate vote is expected the week of May 11; with Republicans holding 53 seats, confirmation before Powell's <b>May 15 chair expiration</b> is near-certain. Powell has confirmed he will remain on the Board of Governors indefinitely. The DOJ's criminal investigation into Powell was dropped, unlocking the previously holdout Sen. Tillis (R-NC). Key Warsh policy differentiators: (1) he favors <b>faster balance sheet normalization (QT)</b>, (2) he disagrees with the consensus-based average inflation targeting framework, and (3) he is expected to be more transparent about the Fed's future rate trajectory. The Miran dissent at April's FOMC (Miran preferred a cut) may signal early internal tension with Warsh's tightening bias. <b>CRE angle:</b> A faster QT pace could widen credit spreads even without a rate move. Borrowers should lock floating-rate deal economics now — Warsh's first presser will be the first real signal of his monetary posture.",

        "<b>Griffon Q2 beats; Marriott Q1 beats on global travel; Lincoln Tech Q1 on May 11 with student starts +19.5%.</b> <b>Griffon Corp</b> (NYSE: GFF, parent of Clopay Building Products) reported Q2 FY2026 on May 7: EPS <b>$1.05</b> (beat $0.99 est), revenue <b>$421.9M</b> (down 1% on -6% residential volume, offset by +5% price/mix). Clopay implemented <b>mid-single-digit price increases</b> effective March 2026 — a direct signal of building products cost pass-through. The AMES JV (tools/home organization, non-Clopay) closes June 2026 delivering <b>$100M cash</b> and $161M in second-lien notes. <b>Marriott</b> Q1 2026 beat estimates on global group demand and travel recovery; Jefferies raised its price target to <b>$417</b>. <b>Lincoln Educational Services</b> reports Q1 on <b>May 11 pre-market</b> — analysts expect $0.04 EPS, $135.7M revenue; management has flagged <b>+19.5% student starts in Q1</b>. The Rowlett, TX campus (Jackson Shaw direct deal, Q1 2027 opening) is the construction milestone to watch on the call. <b>CRE angle:</b> Clopay's price increases confirm building products cost pressure relevant to construction budgets; Lincoln Tech's +19.5% starts is the strongest tenant demand signal in the Jackson Shaw portfolio.",

        "<b>MBA projects $806B CRE origination in 2026; 25+ lenders competing on Class-A industrial; Trepp confirms \"Haves vs. Have-Nots\" bifurcation hardening.</b> The Mortgage Bankers Association projects <b>$806B</b> in commercial mortgage originations for 2026, <b>+27%</b> vs. 2025's $633.7B — the highest volume since 2022. For quality industrial assets, reportedly <b>25+ lenders are now competing</b> on transactions vs. 4–5 in 2015. Fannie Mae funded <b>$171B in Q1 multifamily loans (+45% YoY)</b>. Trepp's weekly Haves/Have-Nots analysis (May 7) confirms the bifurcation: Class-A industrial and prime multifamily command tight spreads and deep lender pools; secondary office continues to deteriorate. Cambridge Wilkinson closed a <b>$300M senior lender credit facility</b> for a specialty real estate lender this week. At the Commercial Observer Real Estate Finance Forum, lenders described the current market as 'highly liquid for the right assets' with clear delineation from distressed legacy office. <b>CRE angle:</b> For Jackson Shaw's industrial pipeline the capital environment has never been more favorable. The binding constraint is not access to capital but rather the gap between floating-rate SOFR expectations and ongoing rate volatility from the Warsh transition and Iran/oil uncertainty — spreads remain defensively wide on new construction."
    ],

    watch_next_week: "<b>The week of May 11 is the most consequential single week of the quarter for the Jackson Shaw portfolio.</b> <b>Monday May 11: Lincoln Tech (LINC) Q1 2026 results</b> pre-market — the single most important portfolio-specific event of the week. Watch for student starts confirmation (consensus +19.5%), Rowlett TX construction update, and any change to FY2026 guidance ($580–$590M revenue, $72–$76M EBITDA). <b>Warsh Senate confirmation vote</b> is expected May 12–14 — near-certain to pass on a party-line basis; his inaugural press conference will be the first signal of his monetary posture and QT pace. <b>Powell's May 15 chair expiration</b> and formal handoff marks the end of a 4-year Fed regime; expect symbolically significant market commentary around the transition. <b>Iran deal watch:</b> Iran's formal response to the US 14-point framework is the most important macro catalyst — any breakthrough confirmation sends Brent toward the $80s and reshapes the rate outlook; any breakdown sends oil back above $106 and resumes PCE pressure. <b>Treasury 10Y refunding auction</b> will give additional signal on whether the rate decline (4.42% → 4.32%) has legs or faces technical resistance from supply.",

    reading_links: [
        {
            title: "Oil Prices Fall More Than 7% as U.S. and Iran Appear Close to Deal to End War",
            url: "https://www.cnbc.com/2026/05/06/oil-prices-trump-pauses-strait-of-hormuz-escort-effort.html",
            source: "CNBC",
            description: "The key May 6 report on the 14-point MOU framework that sent Brent plunging 7.8% to $101.27 — the largest single-day oil drop of the year. The article covers Trump's pause on Project Freedom in Hormuz as a goodwill gesture and the deal's potential to remove $20–$25/bbl of geopolitical premium from crude prices."
        },
        {
            title: "April 2026 US Jobs Report: +115K Payrolls Beat 62K Consensus; Unemployment Holds at 4.3%",
            url: "https://www.staffingindustry.com/research/research-reports/americas/april-2026-us-jobs-report",
            source: "Staffing Industry Analysts",
            description: "April NFP came in at +115K — nearly double the consensus of 62K — with gains led by healthcare, transportation/warehousing (+30K), and retail. The print upends the stagflation narrative and confirms demand-side labor market resilience despite the tariff and energy cost shocks."
        },
        {
            title: "Trump Fed Nominee Kevin Warsh Clears Key Senate Hurdle, Teeing Up Final Vote",
            url: "https://www.cnbc.com/2026/04/29/trump-fed-nominee-kevin-warsh-senate-approval.html",
            source: "CNBC",
            description: "The Senate Banking Committee's 13-11 party-line approval of Warsh — the most partisan Fed chair vote in US history. Covers the DOJ investigation drop that unlocked Sen. Tillis, the expected full-Senate vote the week of May 11, and what Warsh's policy preferences (faster QT, revised inflation targeting) mean for the rate outlook."
        },
        {
            title: "Griffon Corporation Announces Second Quarter Fiscal 2026 Results",
            url: "https://www.businesswire.com/news/home/20260506928131/en/Griffon-Corporation-Announces-Second-Quarter-Results",
            source: "BusinessWire",
            description: "Official Q2 FY2026 release for Griffon (Clopay parent): EPS $1.05 beat $0.99 estimate; mid-single-digit price increases on garage doors effective March; AMES JV close timeline of June 2026 with $100M cash proceeds. Essential read for any Jackson Shaw property with Clopay as a tenant counterparty."
        },
        {
            title: "Trepp Connect: The Haves and Have-Nots in CRE",
            url: "https://crenews.com/2026/05/07/trepp-connect-the-haves-and-have-nots-in-cre/",
            source: "Commercial Real Estate Direct",
            description: "Trepp's May 7 analysis of the widening CRE bifurcation: Class-A industrial and stabilized multifamily drawing 25+ lender bids and tight spreads, while secondary office CMBS distress deepens. The $806B MBA origination forecast for 2026 provides the macro framing for Jackson Shaw's current financing environment."
        }
    ],

    rates: {
        "1-Mo Term SOFR":     { current: "3.642%", one_mo_ago: "3.648%", one_yr_ago: "4.380%" },
        "10-Year Treasury":   { current: "4.320%", one_mo_ago: "4.390%", one_yr_ago: "4.450%" },
        "Eff. Federal Funds": { current: "3.650%", one_mo_ago: "3.650%", one_yr_ago: "4.330%" },
        "Prime Rate":         { current: "6.750%", one_mo_ago: "6.750%", one_yr_ago: "7.500%" }
    },

    stocks: {
        "Indices": [
            { company: "S&P 500",              ticker: "SPX",  price: 7374.50,  day_pct: 0.13,  ytd_pct: 6.9,   high_52w: 7374.50,  vs_high: 0.0,   low_52w: 5101.63,  vs_low: 44.6 },
            { company: "Dow Jones Industrial",  ticker: "DJI",  price: 49752.00, day_pct: 0.31,  ytd_pct: 3.5,   high_52w: 50512.79, vs_high: -1.5,  low_52w: 37830.66, vs_low: 31.5 },
            { company: "Nasdaq Composite",      ticker: "COMP", price: 25852.00, day_pct: 0.18,  ytd_pct: 6.3,   high_52w: 25852.00, vs_high: 0.0,   low_52w: 15685.33, vs_low: 64.8 }
        ],
        "Industrial REITs": [
            { company: "Prologis",              ticker: "PLD",  price: 142.90, day_pct: 0.43,  ytd_pct: 10.6,  high_52w: 145.20, vs_high: -1.6,  low_52w: 85.35,  vs_low: 67.4 },
            { company: "Rexford Industrial",    ticker: "REXR", price: 36.68,  day_pct: -2.03, ytd_pct: -4.0,  high_52w: 44.38,  vs_high: -17.3, low_52w: 29.68,  vs_low: 23.6 },
            { company: "EastGroup Properties",  ticker: "EGP",  price: 201.79, day_pct: -0.65, ytd_pct: 12.3,  high_52w: 201.79, vs_high: 0.0,   low_52w: 143.20, vs_low: 40.9 },
            { company: "First Industrial",      ticker: "FR",   price: 63.21,  day_pct: -1.85, ytd_pct: 11.5,  high_52w: 63.21,  vs_high: 0.0,   low_52w: 42.80,  vs_low: 47.7 },
            { company: "Plymouth Industrial",   ticker: "PLYM", price: 22.20,  day_pct: 0.23,  ytd_pct: 1.0,   high_52w: 24.50,  vs_high: -9.4,  low_52w: 18.20,  vs_low: 22.0 },
            { company: "Terreno Realty",         ticker: "TRNO", price: 66.24,  day_pct: -1.33, ytd_pct: 5.0,   high_52w: 67.30,  vs_high: -1.6,  low_52w: 48.10,  vs_low: 37.7 },
            { company: "Stag Industrial",        ticker: "STAG", price: 39.27,  day_pct: -1.55, ytd_pct: 6.8,   high_52w: 40.10,  vs_high: -2.1,  low_52w: 31.20,  vs_low: 25.9 },
            { company: "Americold Realty",        ticker: "COLD", price: 23.80,  day_pct: -1.04, ytd_pct: -3.8,  high_52w: 28.50,  vs_high: -16.5, low_52w: 19.80,  vs_low: 20.2 },
            { company: "LXP Industrial",          ticker: "LXP",  price: 8.75,   day_pct: -1.13, ytd_pct: -6.1,  high_52w: 10.50,  vs_high: -16.7, low_52w: 7.20,   vs_low: 21.5 },
            { company: "Ryman Hospitality",       ticker: "RHP",  price: 106.50, day_pct: -0.65, ytd_pct: 3.5,   high_52w: 118.00, vs_high: -9.7,  low_52w: 80.20,  vs_low: 32.8 }
        ],
        "Hospitality REITs": [
            { company: "Host Hotels & Resorts",   ticker: "HST",  price: 21.50, day_pct: 1.90,  ytd_pct: 10.1,  high_52w: 21.50,  vs_high: 0.0,   low_52w: 12.12, vs_low: 77.4 },
            { company: "Apple REIT",              ticker: "APLE", price: 13.10, day_pct: 1.95,  ytd_pct: -0.1,  high_52w: 14.80,  vs_high: -11.5, low_52w: 10.40, vs_low: 26.0 },
            { company: "Park Hotels & Resorts",   ticker: "PK",   price: 11.40, day_pct: 1.79,  ytd_pct: -6.9,  high_52w: 14.10,  vs_high: -19.1, low_52w: 9.60,  vs_low: 18.8 },
            { company: "Pebblebrook Hotel",       ticker: "PEB",  price: 14.50, day_pct: 1.40,  ytd_pct: 12.3,  high_52w: 14.50,  vs_high: 0.0,   low_52w: 7.41,  vs_low: 95.7 },
            { company: "Sunstone Hotel",          ticker: "SHO",  price: 9.95,  day_pct: 1.53,  ytd_pct: -0.9,  high_52w: 12.27,  vs_high: -18.9, low_52w: 7.45,  vs_low: 33.6 },
            { company: "RLJ Lodging Trust",       ticker: "RLJ",  price: 8.35,  day_pct: 1.83,  ytd_pct: -0.6,  high_52w: 9.80,   vs_high: -14.8, low_52w: 6.16,  vs_low: 35.5 },
            { company: "DiamondRock Hospitality", ticker: "DRH",  price: 10.58, day_pct: 1.73,  ytd_pct: 5.8,   high_52w: 10.67,  vs_high: -0.8,  low_52w: 6.16,  vs_low: 71.8 },
            { company: "Summit Hotel Properties", ticker: "INN",  price: 4.83,  day_pct: 2.33,  ytd_pct: -21.7, high_52w: 6.00,   vs_high: -19.5, low_52w: 3.57,  vs_low: 35.3 }
        ],
        "Lenders": [
            { company: "Blackstone",              ticker: "BX",   price: 123.29, day_pct: -0.50, ytd_pct: -19.5, high_52w: 190.09, vs_high: -35.1, low_52w: 101.73, vs_low: 21.2 },
            { company: "Fifth Third Bancorp",     ticker: "FITB", price: 52.00,  day_pct: 0.60,  ytd_pct: 10.8,  high_52w: 57.00,  vs_high: -8.8,  low_52w: 31.20,  vs_low: 66.7 },
            { company: "Huntington Bancshares",   ticker: "HBAN", price: 17.90,  day_pct: 0.85,  ytd_pct: 3.8,   high_52w: 19.50,  vs_high: -8.2,  low_52w: 11.91,  vs_low: 50.3 },
            { company: "BancFirst",               ticker: "BANF", price: 120.50, day_pct: -0.25, ytd_pct: 1.2,   high_52w: 138.77, vs_high: -13.2, low_52w: 97.02,  vs_low: 24.2 },
            { company: "Busey",                   ticker: "BUSE", price: 27.45,  day_pct: -0.36, ytd_pct: 2.9,   high_52w: 27.95,  vs_high: -1.8,  low_52w: 18.40,  vs_low: 49.2 },
            { company: "Bank OZK",                ticker: "OZK",  price: 46.90,  day_pct: -0.85, ytd_pct: -3.0,  high_52w: 53.66,  vs_high: -12.6, low_52w: 35.71,  vs_low: 31.3 },
            { company: "The Hartford",            ticker: "HIG",  price: 145.80, day_pct: 1.04,  ytd_pct: 14.0,  high_52w: 146.10, vs_high: -0.2,  low_52w: 107.49, vs_low: 35.6 }
        ],
        "Industry-related companies": [
            { company: "Amazon",                  ticker: "AMZN", price: 273.07, day_pct: 0.30,  ytd_pct: 18.3,  high_52w: 273.07, vs_high: 0.0,   low_52w: 165.29, vs_low: 65.2 },
            { company: "United Parcel Service",   ticker: "UPS",  price: 104.50, day_pct: -1.79, ytd_pct: -5.8,  high_52w: 122.41, vs_high: -14.6, low_52w: 82.00,  vs_low: 27.4 },
            { company: "FedEx Corporation",       ticker: "FDX",  price: 376.10, day_pct: -0.45, ytd_pct: 0.2,   high_52w: 392.86, vs_high: -4.3,  low_52w: 194.30, vs_low: 93.6 },
            { company: "Target Corporation",      ticker: "TGT",  price: 130.40, day_pct: 0.46,  ytd_pct: 12.8,  high_52w: 133.00, vs_high: -2.0,  low_52w: 83.44,  vs_low: 56.2 },
            { company: "GXO Logistics",           ticker: "GXO",  price: 56.50,  day_pct: 0.53,  ytd_pct: 14.8,  high_52w: 66.85,  vs_high: -15.5, low_52w: 30.46,  vs_low: 85.5 },
            { company: "Marriott International",  ticker: "MAR",  price: 352.05, day_pct: -1.95, ytd_pct: 9.3,   high_52w: 372.40, vs_high: -5.5,  low_52w: 205.40, vs_low: 71.4 },
            { company: "Hilton Hotels",           ticker: "HLT",  price: 338.50, day_pct: 0.39,  ytd_pct: 7.4,   high_52w: 340.00, vs_high: -0.4,  low_52w: 201.15, vs_low: 68.3 },
            { company: "American Airlines",       ticker: "AAL",  price: 13.18,  day_pct: 1.85,  ytd_pct: 0.6,   high_52w: 16.50,  vs_high: -20.1, low_52w: 8.92,   vs_low: 47.8 },
            { company: "Southwest Airlines",      ticker: "LUV",  price: 42.30,  day_pct: 0.83,  ytd_pct: 6.6,   high_52w: 55.11,  vs_high: -23.2, low_52w: 23.82,  vs_low: 77.6 },
            { company: "Las Vegas Sands",         ticker: "LVS",  price: 58.10,  day_pct: 2.29,  ytd_pct: 2.7,   high_52w: 70.45,  vs_high: -17.5, low_52w: 30.18,  vs_low: 92.5 },
            { company: "TSMC",                    ticker: "TSM",  price: 383.00, day_pct: 0.39,  ytd_pct: 7.9,   high_52w: 392.00, vs_high: -2.3,  low_52w: 145.84, vs_low: 162.6 },
            { company: "Delta Airlines",          ticker: "DAL",  price: 73.13,  day_pct: 0.60,  ytd_pct: 5.9,   high_52w: 76.39,  vs_high: -4.3,  low_52w: 36.56,  vs_low: 99.9 },
            { company: "Ferguson Enterprises",    ticker: "FERG", price: 264.50, day_pct: 0.42,  ytd_pct: 12.7,  high_52w: 271.64, vs_high: -2.6,  low_52w: 146.00, vs_low: 81.2 },
            { company: "International Paper",     ticker: "IP",   price: 31.60,  day_pct: -0.63, ytd_pct: -38.8, high_52w: 56.13,  vs_high: -43.7, low_52w: 29.45,  vs_low: 7.3 },
            { company: "Tandy Leather Factory",   ticker: "TLF",  price: 4.90,   day_pct: -1.01, ytd_pct: -1.0,  high_52w: 6.10,   vs_high: -19.7, low_52w: 4.10,   vs_low: 19.5 },
            { company: "Lincoln Tech",            ticker: "LINC", price: 44.80,  day_pct: -0.67, ytd_pct: 82.9,  high_52w: 45.10,  vs_high: -0.7,  low_52w: 14.79,  vs_low: 203.0 }
        ]
    }
};
