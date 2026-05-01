// Friday Finance — Week of May 1, 2026
// Replace this file each week with updated data (same structure)

const FRIDAY_FINANCE = {
    date: "May 1, 2026",
    date_short: "5.1.26",

    quote: {
        text: "Risk means more things can happen than will happen.",
        author: "Howard Marks"
    },

    ticker_bar: [
        { symbol: "SPX",  price: "7,247", change_pct: 0.50 },
        { symbol: "DJIA", price: "50,210", change_pct: 0.20 },
        { symbol: "IXIC", price: "25,090", change_pct: 0.70 },
        { symbol: "NVDA", price: "201.22", change_pct: 0.60 },
        { symbol: "AAPL", price: "271.35", change_pct: 4.10 },
        { symbol: "MSFT", price: "414.30", change_pct: -0.80 },
        { symbol: "AMZN", price: "265.06", change_pct: 1.20 },
        { symbol: "TSLA", price: "378.97", change_pct: 0.60 },
        { symbol: "PLD",  price: "143.50", change_pct: 0.90 },
        { symbol: "BX",   price: "126.20", change_pct: 0.30 },
        { symbol: "IP",   price: "31.80", change_pct: -1.40 }
    ],

    news_bullets: [
        "<b>S&P 500 closes above 7,200 for the first time ever — best month since 2020 powered by Mag-7 earnings.</b> The <b>S&P 500 broke through 7,200</b> this week to close at a record high, the <b>Nasdaq</b> notched a new all-time closing high, and both indexes posted their <b>strongest monthly performance since 2020</b>. The Dow logged its best month since November 2024. The rally was driven by a clean sweep of Mag-7 beats: <b>Apple</b> jumped <b>4%+</b> after a record Q2 — revenue <b>$111.2B (+17% YoY)</b>, iPhone revenue <b>$57.99B (+22%)</b> on iPhone 17 demand, services revenue <b>$30.98B</b> (record), and a new <b>$100B buyback authorization</b>. <b>Microsoft</b> reported FQ3 revenue <b>$82.89B (+18%)</b> with AI now at a <b>$37B annualized run rate</b> (+123% YoY) — but the stock fell on a guided <b>$190B AI capex</b> ramp. <b>Amazon</b> Q1 revenue <b>$181.5B (+17%)</b>, EPS <b>$2.78 vs. $1.62 estimated</b>; Q2 sales guided to $194–$199B. <b>Meta</b> revenue <b>$56.3B</b>, EPS $10.44 (boosted by an $8B tax benefit), but raised 2026 capex guidance to <b>$125–$145B</b>. <b>Alphabet</b> revenue <b>$109.9B</b>; Google Cloud <b>$20B</b> beat by ~$2B. Combined hyperscaler 2026 AI capex now exceeds <b>$650B</b>. <b>CRE angle:</b> The hyperscaler capex tsunami is the single most consequential demand signal for industrial and data center development. Prologis (see CRE bullet) is leaning hard into BTS data centers; expect every industrial REIT and developer to follow.",

        "<b>FOMC holds at 3.50–3.75% in Powell's final meeting — but PCE surge to 4.5% changes the calculus.</b> The Fed held rates at <b>3.50–3.75%</b> on April 29 in what was widely expected to be Chair <b>Powell's last FOMC meeting</b> (term expires May 15). The decision was <b>unusually contentious</b> — the FOMC voted 11–1 on the rate decision, but <b>four total dissents</b> emerged on the easing-bias language (Hammack, Kashkari, Logan), the highest dissent count <b>since 1992</b>. Powell framed the macro backdrop as <b>'four supply shocks'</b> — pandemic, Ukraine, tariffs, and Iran/oil. The April 30 data deluge complicated the picture sharply: <b>Q1 GDP came in at +2.0%</b> (vs. +2.3% expected), but the killer print was <b>PCE inflation</b> — headline jumped to <b>+4.5%</b> from 2.9% in Q4 2025, and core PCE accelerated to <b>+4.3%</b> from 2.7%. Tariff pass-through and Iran-driven energy costs are the primary drivers. Markets had been pricing one cut later in 2026; the PCE shock pushed expectations toward 'higher for longer' through year-end. Trump indicated he will not reappoint Powell as chair; Kevin Warsh remains the leading replacement candidate. <b>CRE angle:</b> A 4.5% PCE print at unchanged Fed funds is the worst near-term outcome for refi math. Cap rate compression is dead for now. The Fed cannot cut into a 4%+ inflation print — borrowers should plan for SOFR holding above 3.6% through Q3.",

        "<b>Iran peace talks collapse mid-week — Brent locked at ~$106, oil costs the persistent CRE drag.</b> The second round of Pakistan-mediated US-Iran talks <b>fell apart on April 26</b> when Trump cancelled the Witkoff/Kushner trip to Islamabad after Iran doubled down on Hormuz closure rhetoric. Brent crude jumped <b>+2%+ to $107.89</b> on the news, then settled at <b>~$106.55</b> through week-end. The Strait of Hormuz remains <b>partially blockaded</b> and the IEA continues to flag this as the largest energy security disruption in modern history. Iran sent a <b>fresh peace proposal</b> to mediators on May 1 — the next negotiation cycle is unscheduled. Diesel sits at <b>~$4.85/gallon</b> nationally; gasoline ~$4.20. The April 30 <b>PCE 4.5% print</b> directly reflects this — energy was the single-largest contributor to the inflation surge. <b>CRE angle:</b> The Iran shock is now <b>locked in for the next 60–90 days</b> as a structural cost driver. Industrial tenant operating margins (trucking, logistics, food/beverage) are taking the hit. Airline guidance cuts (United, Delta) and packaging margin compression (IP results below) all flow back to the same source. A Brent retracement to the $80s would be an outsized macro positive for CRE — but it requires a credible peace breakthrough that markets no longer expect this quarter.",

        "<b>International Paper Q1: EMEA EBITDA outlook cut, 31 closures booked, 12–15 month spin timeline confirmed.</b> IP reported Q1 2026 on April 30 — the most consequential single earnings event for Jackson Shaw lease counterparty risk this quarter. Key takeaways: the <b>EMEA spin-off will close in 12–15 months</b> with IP retaining a <b>20% stake</b> for 12–18 months post-split; <b>EMEA full-year EBITDA outlook was reduced to $900M–$1.0B</b> from $1.0–1.1B; the company has now booked <b>31 facility closures</b> and reduced <b>2,800+ positions</b> en route to <b>$200M in EMEA run-rate savings</b>; and the NORPAC acquisition ($360M, ~1M tons containerboard) is integrating on plan. Stock dropped on the EMEA cut despite a revenue beat. The North American business is showing commercial traction with mill productivity gains. <b>Hartford Insurance</b> Q1 was a positive print — net income <b>$856M (+36%)</b>, EPS $3.04, $617M returned to shareholders. <b>Crown Holdings</b> Q1 beat — adj EPS $1.86 (+11%), beverage volumes +5%. <b>Crown Equipment</b> (forklifts, our tenant) reported April order inflows <b>+10–20% YoY</b> — solid demand signal. <b>CRE angle:</b> The IP North American business remains structurally healthy and lease obligations should remain with the post-split RemainCo. Confirm none of the 31 closed facilities sit in the Jackson Shaw portfolio (likely concentrated in EMEA) — that is the single most actionable item from the IP call.",

        "<b>Industrial REIT supercycle confirmed — Prologis Q1 records, but lender mix is a tale of two banks.</b> <b>Prologis</b> delivered a record Q1: <b>64M SF of new logistics leases</b> signed (an all-time first-quarter record), revenue <b>$2.3B (+7.5%)</b>, core FFO <b>$1.44B</b>, net income <b>$980M</b> (vs. $592M Q1 2025). Management <b>raised core FFO guidance to $6.07–$6.23</b> from prior $6.00–$6.20. Notably, Prologis started <b>$1.3B in data center build-to-suits</b> in Q1, with <b>1.3 GW under LOI</b> and a total power pipeline of <b>5.6 GW</b>. On the lender side, the Q1 reports diverged: <b>Busey</b> beat handily — adj EPS <b>$0.67 vs. $0.59 estimated</b>, revenue +39.4% YoY, NPAs at just 0.28% of assets — the post-Maddox quarter cleaned up cleanly. <b>Bank OZK</b> missed: net income <b>down 5.1% to $159.3M</b>, EPS $1.44 vs. $1.46 estimated, and <b>nonperforming assets more than doubled</b> to $451M (from $214M Q1 2025). On the broader CMBS picture, <b>Trepp's March print was 7.55%</b> overall delinquency (+41bps); <b>office hit 11.71%</b> (+51bps), with <b>~$25B in CMBS loans now past maturity</b> without payoff or formal extension — pre-2008-cleanup levels. <b>CRE angle:</b> Industrial fundamentals are the cleanest in CRE — Prologis' +64M SF lease quarter validates the demand thesis. Lender-by-lender selection now matters materially: HBAN, FITB, BUSE all clean post-Q1; OZK is showing the first credit cracks. The CMBS office distress remains contained to the office sector, not industrial."
    ],

    watch_next_week: "<b>The first week of May pivots from earnings to labor data and the Powell succession.</b> <b>Friday May 8: April Nonfarm Payrolls</b> — the most important macro print of the week. Consensus is for ~165K jobs added with the unemployment rate steady at 4.1%. A weak print combined with the 4.5% PCE creates the worst-case stagflation framing for risk assets; a strong print reinforces 'higher for longer' and pressures rate-sensitive sectors. <b>Tuesday May 5–6:</b> The <b>next FOMC meeting begins May 5</b> (decision May 6) — note this is an unusually quick succession after the April 28–29 meeting and the dissent dynamic from last week makes the press conference a market-mover. <b>Powell succession:</b> Powell's term as chair expires <b>May 15</b>; expect a Trump announcement on Warsh (or alternative) within days. <b>Earnings continuing:</b> Major industrial REIT and tenant follow-through reports — including <b>Bank OZK</b> investor day, <b>Lincoln Tech (LINC)</b> reports Q1 on <b>May 11</b> (watch for Rowlett TX construction milestone and Q1 student starts), and <b>Simmons (SFNC)</b> investor day. <b>Iran negotiation track:</b> Iran's May 1 fresh peace proposal needs a US response; any thaw signal would send Brent toward the $80s and is the single largest macro upside catalyst available. <b>Tariff watch:</b> The China 10% tariff arrangement runs through Nov 10, 2026, but watch for any mid-cycle Section 232 expansion announcements that would further pressure CRE construction costs.",

    reading_links: [
        {
            title: "Apple Q2 2026 Results: $111.2B Revenue, iPhone +22%, Services Hit $30.98B Record",
            url: "https://9to5mac.com/2026/04/30/apple-reports-q2-2026-earnings-111-2-billion-in-revenue-up-17/",
            source: "9to5Mac",
            description: "Comprehensive breakdown of Apple's record Q2 — iPhone 17 demand drove a 22% surge in iPhone revenue, services hit a new all-time high of $30.98B, and the board authorized an additional $100B in buybacks. The single largest earnings event of the week."
        },
        {
            title: "Fed Holds Rates Steady at 3.50–3.75% in Powell's Final FOMC Meeting; 4 Dissents — Highest Since 1992",
            url: "https://www.cnbc.com/2026/04/29/fed-interest-rate-decision-april-2026.html",
            source: "CNBC",
            description: "Detailed coverage of the April 28–29 FOMC. Rate held; four dissents on the easing-bias language; Powell's 'four supply shocks' framing; and the implications of the contentious vote heading into the May 5–6 meeting and Powell's May 15 term expiration."
        },
        {
            title: "Q1 GDP +2.0% Advance Estimate; PCE Inflation Surges to 4.5% Headline, 4.3% Core",
            url: "https://www.bea.gov/news/2026/gdp-advance-estimate-1st-quarter-2026",
            source: "U.S. Bureau of Economic Analysis",
            description: "Official BEA release. The PCE acceleration from 2.9% to 4.5% (headline) is the single most market-moving line in the report — driven by tariff pass-through and Iran-related energy costs. The data complicates any near-term Fed easing path."
        },
        {
            title: "International Paper Q1 2026: EMEA EBITDA Outlook Cut to $900M–$1.0B; 31 Closures Booked",
            url: "https://www.prnewswire.com/news-releases/international-paper-reports-first-quarter-2026-results-302758029.html",
            source: "PR Newswire",
            description: "Official Q1 release with the full EMEA spin-off update — 12–15 month timeline, 20% retained stake, $200M EMEA run-rate savings target. Critical reading for any Jackson Shaw property with IP as a counterparty."
        },
        {
            title: "Trepp: CMBS Delinquency Hits 7.55% in March; Office Surges to 11.71% with $25B Past Maturity",
            url: "https://newslink.mba.org/mba-newslinks/2026/april/trepp-cmbs-delinquency-rate-increases/",
            source: "MBA NewsLink",
            description: "The April Trepp report shows office distress at post-2008 levels with ~$25B of CMBS loans past maturity without payoff or formal extension. Distress remains concentrated in office, not industrial — useful framing for borrower competitive positioning."
        }
    ],

    rates: {
        "1-Mo Term SOFR":     { current: "3.654%", one_mo_ago: "3.643%", one_yr_ago: "4.380%" },
        "10-Year Treasury":   { current: "4.420%", one_mo_ago: "4.310%", one_yr_ago: "4.450%" },
        "Eff. Federal Funds": { current: "3.650%", one_mo_ago: "3.643%", one_yr_ago: "4.330%" },
        "Prime Rate":         { current: "6.750%", one_mo_ago: "6.750%", one_yr_ago: "7.500%" }
    },

    stocks: {
        "Indices": [
            { company: "S&P 500",              ticker: "SPX",  price: 7247.40,  day_pct: 0.50,  ytd_pct: 5.1,   high_52w: 7247.40,  vs_high: 0.0,   low_52w: 5101.63,  vs_low: 42.1 },
            { company: "Dow Jones Industrial",  ticker: "DJI",  price: 50212.55, day_pct: 0.20,  ytd_pct: 4.5,   high_52w: 50512.79, vs_high: -0.6,  low_52w: 37830.66, vs_low: 32.7 },
            { company: "Nasdaq Composite",      ticker: "COMP", price: 25088.14, day_pct: 0.70,  ytd_pct: 3.2,   high_52w: 25088.14, vs_high: 0.0,   low_52w: 15685.33, vs_low: 59.9 }
        ],
        "Industrial REITs": [
            { company: "Prologis",              ticker: "PLD",  price: 143.50, day_pct: 0.90,  ytd_pct: 11.1,  high_52w: 145.20, vs_high: -1.2,  low_52w: 85.35,  vs_low: 68.1 },
            { company: "Rexford Industrial",    ticker: "REXR", price: 35.20,  day_pct: 0.45,  ytd_pct: -7.9,  high_52w: 44.38,  vs_high: -20.7, low_52w: 29.68,  vs_low: 18.6 },
            { company: "EastGroup Properties",  ticker: "EGP",  price: 196.80, day_pct: 0.60,  ytd_pct: 9.5,   high_52w: 196.80, vs_high: 0.0,   low_52w: 143.20, vs_low: 37.4 },
            { company: "First Industrial",      ticker: "FR",   price: 61.20,  day_pct: 0.45,  ytd_pct: 8.0,   high_52w: 61.20,  vs_high: 0.0,   low_52w: 42.80,  vs_low: 43.0 },
            { company: "Terreno Realty",         ticker: "TRNO", price: 64.85,  day_pct: 0.55,  ytd_pct: 2.8,   high_52w: 67.30,  vs_high: -3.6,  low_52w: 48.10,  vs_low: 34.8 },
            { company: "Stag Industrial",        ticker: "STAG", price: 39.80,  day_pct: 0.40,  ytd_pct: 8.2,   high_52w: 40.10,  vs_high: -0.7,  low_52w: 31.20,  vs_low: 27.6 },
            { company: "Americold Realty",        ticker: "COLD", price: 24.05,  day_pct: 0.50,  ytd_pct: -2.8,  high_52w: 28.50,  vs_high: -15.6, low_52w: 19.80,  vs_low: 21.5 },
            { company: "LXP Industrial",          ticker: "LXP",  price: 8.85,   day_pct: 0.30,  ytd_pct: -5.0,  high_52w: 10.50,  vs_high: -15.7, low_52w: 7.20,   vs_low: 22.9 },
            { company: "Ryman Hospitality",       ticker: "RHP",  price: 107.20, day_pct: 0.50,  ytd_pct: 4.2,   high_52w: 118.00, vs_high: -9.2,  low_52w: 80.20,  vs_low: 33.7 }
        ],
        "Hospitality REITs": [
            { company: "Host Hotels & Resorts",   ticker: "HST",  price: 21.10, day_pct: 0.50,  ytd_pct: 8.1,   high_52w: 21.30,  vs_high: -0.9,  low_52w: 12.12, vs_low: 74.1 },
            { company: "Apple REIT",              ticker: "APLE", price: 12.85, day_pct: 0.40,  ytd_pct: -1.8,  high_52w: 14.80,  vs_high: -13.2, low_52w: 10.40, vs_low: 23.6 },
            { company: "Park Hotels & Resorts",   ticker: "PK",   price: 11.20, day_pct: 0.45,  ytd_pct: -8.6,  high_52w: 14.10,  vs_high: -20.6, low_52w: 9.60,  vs_low: 16.7 },
            { company: "Pebblebrook Hotel",       ticker: "PEB",  price: 14.30, day_pct: 0.40,  ytd_pct: 10.7, high_52w: 14.30, vs_high: 0.0,   low_52w: 7.41,  vs_low: 93.0 },
            { company: "Sunstone Hotel",          ticker: "SHO",  price: 9.80,  day_pct: 0.50,  ytd_pct: -2.4,  high_52w: 12.27,  vs_high: -20.1, low_52w: 7.45,  vs_low: 31.5 },
            { company: "RLJ Lodging Trust",       ticker: "RLJ",  price: 8.20,  day_pct: 0.40,  ytd_pct: -2.4,  high_52w: 9.80,   vs_high: -16.3, low_52w: 6.16,  vs_low: 33.1 },
            { company: "DiamondRock Hospitality", ticker: "DRH",  price: 10.40, day_pct: 0.40,  ytd_pct: 4.0,   high_52w: 10.67,  vs_high: -2.5,  low_52w: 6.16,  vs_low: 68.8 },
            { company: "Summit Hotel Properties", ticker: "INN",  price: 4.72,  day_pct: 0.35,  ytd_pct: -23.5, high_52w: 6.00,   vs_high: -21.3, low_52w: 3.57,  vs_low: 32.2 }
        ],
        "Lenders": [
            { company: "Blackstone",          ticker: "BX",   price: 126.20, day_pct: 0.30,  ytd_pct: -17.6, high_52w: 190.09, vs_high: -33.6, low_52w: 101.73, vs_low: 24.1 },
            { company: "Fifth Third Bancorp", ticker: "FITB", price: 51.10,  day_pct: 0.50,  ytd_pct: 8.9,   high_52w: 55.44,  vs_high: -7.8,  low_52w: 31.20,  vs_low: 63.8 },
            { company: "Huntington Bancshares", ticker: "HBAN", price: 17.65,  day_pct: 0.55,  ytd_pct: 2.3,   high_52w: 19.50,  vs_high: -9.5,  low_52w: 11.91,  vs_low: 48.2 },
            { company: "BancFirst",           ticker: "BANF", price: 120.80, day_pct: 0.40,  ytd_pct: 1.5,   high_52w: 138.77, vs_high: -13.0, low_52w: 97.02,  vs_low: 24.5 },
            { company: "Busey",               ticker: "BUSE", price: 27.55,  day_pct: 0.65,  ytd_pct: 3.3,   high_52w: 27.95,  vs_high: -1.4,  low_52w: 18.40,  vs_low: 49.7 },
            { company: "Bank OZK",            ticker: "OZK",  price: 47.30,  day_pct: -0.45, ytd_pct: -2.2,  high_52w: 53.66,  vs_high: -11.9, low_52w: 35.71,  vs_low: 32.5 },
            { company: "The Hartford",        ticker: "HIG",  price: 144.30, day_pct: 0.40,  ytd_pct: 12.8,  high_52w: 146.10, vs_high: -1.2,  low_52w: 107.49, vs_low: 34.3 }
        ],
        "Industry-related companies": [
            { company: "Amazon",               ticker: "AMZN", price: 265.06, day_pct: 1.20,  ytd_pct: 14.8,  high_52w: 268.90, vs_high: -1.4,  low_52w: 165.29, vs_low: 60.4 },
            { company: "Apple",                ticker: "AAPL", price: 271.35, day_pct: 4.10,  ytd_pct: 15.2,  high_52w: 271.35, vs_high: 0.0,   low_52w: 168.30, vs_low: 61.2 },
            { company: "Microsoft",            ticker: "MSFT", price: 414.30, day_pct: -0.80, ytd_pct: 6.4,   high_52w: 462.10, vs_high: -10.3, low_52w: 332.50, vs_low: 24.6 },
            { company: "United Parcel Service", ticker: "UPS", price: 106.40, day_pct: 0.50,  ytd_pct: -4.1,  high_52w: 122.41, vs_high: -13.1, low_52w: 82.00,  vs_low: 29.8 },
            { company: "FedEx Corporation",    ticker: "FDX",  price: 388.50, day_pct: 0.45,  ytd_pct: 3.5,   high_52w: 392.86, vs_high: -1.1,  low_52w: 194.30, vs_low: 100.0 },
            { company: "Target Corporation",   ticker: "TGT",  price: 129.80, day_pct: 0.40,  ytd_pct: 12.3,  high_52w: 132.10, vs_high: -1.7,  low_52w: 83.44,  vs_low: 55.6 },
            { company: "GXO Logistics",        ticker: "GXO",  price: 56.20,  day_pct: 0.55,  ytd_pct: 14.2,  high_52w: 66.85,  vs_high: -16.0, low_52w: 30.46,  vs_low: 84.5 },
            { company: "Marriott International", ticker: "MAR", price: 368.50, day_pct: 0.55,  ytd_pct: 14.4,  high_52w: 372.40, vs_high: -1.0,  low_52w: 205.40, vs_low: 79.4 },
            { company: "Hilton Hotels",         ticker: "HLT",  price: 337.20, day_pct: 0.50,  ytd_pct: 7.0,   high_52w: 337.20, vs_high: 0.0,   low_52w: 201.15, vs_low: 67.6 },
            { company: "American Airlines",    ticker: "AAL",  price: 11.55,  day_pct: -0.55, ytd_pct: -11.8, high_52w: 16.50,  vs_high: -30.0, low_52w: 8.92,   vs_low: 29.5 },
            { company: "Southwest Airlines",   ticker: "LUV",  price: 41.95,  day_pct: 0.30,  ytd_pct: 5.7,   high_52w: 55.11,  vs_high: -23.9, low_52w: 23.82,  vs_low: 76.1 },
            { company: "Las Vegas Sands",      ticker: "LVS",  price: 56.80,  day_pct: 0.45,  ytd_pct: 0.4,   high_52w: 70.45,  vs_high: -19.4, low_52w: 30.18,  vs_low: 88.2 },
            { company: "TSMC",                 ticker: "TSM",  price: 381.50, day_pct: 0.65,  ytd_pct: 7.5,   high_52w: 390.21, vs_high: -2.2,  low_52w: 145.84, vs_low: 161.6 },
            { company: "Delta Airlines",       ticker: "DAL",  price: 70.80,  day_pct: -0.20, ytd_pct: 2.5,   high_52w: 76.39,  vs_high: -7.3,  low_52w: 36.56,  vs_low: 93.7 },
            { company: "Ferguson Enterprises", ticker: "FERG", price: 263.40, day_pct: 0.60,  ytd_pct: 12.2,  high_52w: 271.64, vs_high: -3.0,  low_52w: 146.00, vs_low: 80.4 },
            { company: "International Paper",  ticker: "IP",   price: 31.80,  day_pct: -1.40, ytd_pct: -38.4, high_52w: 56.13,  vs_high: -43.4, low_52w: 31.00,  vs_low: 2.6 },
            { company: "Tandy Leather Factory", ticker: "TLF", price: 4.95,   day_pct: 0.20,  ytd_pct: 0.0,   high_52w: 6.10,   vs_high: -18.9, low_52w: 4.10,   vs_low: 20.7 },
            { company: "Lincoln Tech",         ticker: "LINC", price: 45.10,  day_pct: 0.50,  ytd_pct: 84.2,  high_52w: 45.10,  vs_high: 0.0,   low_52w: 14.79,  vs_low: 204.9 },
            { company: "Tesla",                ticker: "TSLA", price: 378.97, day_pct: 0.60,  ytd_pct: 7.5,   high_52w: 488.54, vs_high: -22.4, low_52w: 214.30, vs_low: 76.8 }
        ]
    }
};
