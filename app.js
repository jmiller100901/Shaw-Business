// ================================================================
// The Shaw Report — Application Logic
// ================================================================

(function () {
    'use strict';

    // ----------------------------------------------------------------
    // Symbol mapping — indices need caret-prefix for Yahoo URLs and Finnhub
    // ----------------------------------------------------------------
    var INDEX_MAP = {
        'SPX':  '^GSPC',
        'DJIA': '^DJI',
        'DJI':  '^DJI',
        'IXIC': '^IXIC',
        'COMP': '^IXIC'
    };

    // Yahoo Finance URL for clickable ticker/company links
    function yahooUrl(sym) {
        return 'https://finance.yahoo.com/quote/' + encodeURIComponent(INDEX_MAP[sym] || sym);
    }

    // ----------------------------------------------------------------
    // Live data cache  { ticker: { price, dayPct } }
    // ----------------------------------------------------------------
    var liveCache = {};

    // ----------------------------------------------------------------
    // Init
    // ----------------------------------------------------------------
    document.addEventListener('DOMContentLoaded', function () {
        renderTickerBar();
        renderMasthead();
        renderFridayFinance();
        renderTenantLenderNews();
        initNav();
        // Fetch live data immediately on every page load
        initLiveStockData();
    });

    // ----------------------------------------------------------------
    // Ticker Bar
    // ----------------------------------------------------------------
    function renderTickerBar() {
        var bar = document.getElementById('ticker-bar');
        if (!bar || !FRIDAY_FINANCE.ticker_bar) return;
        bar.innerHTML = FRIDAY_FINANCE.ticker_bar.map(function (t) {
            var live      = liveCache[t.symbol];
            var price     = live ? fmtTickerPrice(live.price) : t.price;
            var changePct = (live !== undefined) ? live.dayPct : t.change_pct;
            var up        = changePct >= 0;
            return '<a class="ticker-item" href="' + yahooUrl(t.symbol) + '" target="_blank" rel="noopener">' +
                '<span class="sym">' + t.symbol + '</span>' +
                '<span class="ticker-price">' + price + '</span>' +
                '<span class="pct ' + (up ? 'up' : 'down') + '">' +
                (up ? '\u25B2' : '\u25BC') + Math.abs(changePct).toFixed(1) + '%</span>' +
                '</a>';
        }).join('');
    }

    // ----------------------------------------------------------------
    // Masthead
    // ----------------------------------------------------------------
    function renderMasthead() {
        var el = document.getElementById('masthead-date');
        if (el) el.textContent = FRIDAY_FINANCE.date;
        var q   = FRIDAY_FINANCE.quote;
        var qEl = document.getElementById('masthead-quote');
        if (qEl && q) {
            qEl.innerHTML = '&ldquo;' + q.text + '&rdquo; &mdash; ' + q.author;
        }
    }

    // ----------------------------------------------------------------
    // Section Nav
    // ----------------------------------------------------------------
    function initNav() {
        var tabs = document.querySelectorAll('.nav-tab');
        tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                tabs.forEach(function (t) { t.classList.remove('active'); });
                tab.classList.add('active');
                var target = tab.getAttribute('data-section');
                document.querySelectorAll('.section').forEach(function (s) { s.classList.remove('active'); });
                var section = document.getElementById(target);
                if (section) section.classList.add('active');
            });
        });
    }


    // ----------------------------------------------------------------
    // Friday Finance Section
    // ----------------------------------------------------------------
    function renderFridayFinance() {
        var data = FRIDAY_FINANCE;

        // News bullets
        var bulletsEl = document.getElementById('ff-news-bullets');
        if (bulletsEl && data.news_bullets) {
            bulletsEl.innerHTML = data.news_bullets.map(function (b) {
                return '<li class="news-bullet">' + b + '</li>';
            }).join('');
        }

        // Watch next week
        var watchEl = document.getElementById('ff-watch-text');
        if (watchEl) watchEl.innerHTML = data.watch_next_week || '';

        // Weekend reading — supports reading_links (new) or wsj_articles (legacy)
        var articles  = data.reading_links || data.wsj_articles || [];
        var readingEl = document.getElementById('ff-weekend-reading');
        if (readingEl) {
            readingEl.innerHTML = articles.map(function (a, i) {
                return '<div class="reading-item">' +
                    '<span class="reading-num">' + (i + 1) + '</span>' +
                    '<div class="reading-body">' +
                    '<a href="' + a.url + '" target="_blank" rel="noopener">' + a.title + '</a>' +
                    (a.description ? '<p class="reading-desc">' + a.description + '</p>' : '') +
                    '<div class="reading-source">' + (a.source || 'Wall Street Journal') + '</div>' +
                    '</div></div>';
            }).join('');
        }

        // Rates table
        var rateBody = document.getElementById('ff-rate-body');
        if (rateBody && data.rates) {
            var rateHtml = '';
            for (var name in data.rates) {
                var r = data.rates[name];
                rateHtml += '<tr><td>' + name + '</td><td>' + r.current +
                    '</td><td>' + r.one_mo_ago + '</td><td>' + r.one_yr_ago + '</td></tr>';
            }
            rateBody.innerHTML = rateHtml;
        }

        // Stock table — show loading state until live data arrives
        setStockStatus('<span class="loading-badge">&#8635; Loading live data&hellip;</span>');
        renderStockTable();
    }

    // ----------------------------------------------------------------
    // Stock Table
    // ----------------------------------------------------------------
    function renderStockTable() {
        var data      = FRIDAY_FINANCE;
        var stockBody = document.getElementById('ff-stock-body');
        if (!stockBody || !data.stocks) return;

        var hasLive = Object.keys(liveCache).length > 0;
        var html = '';
        for (var cat in data.stocks) {
            html += '<tr class="cat-row"><td colspan="9">' + cat + '</td></tr>';
            data.stocks[cat].forEach(function (s) {
                var L    = liveCache[s.ticker];
                var yurl = yahooUrl(s.ticker);

                if (hasLive && L) {
                    // All live from Finnhub; fall back to static only if API returned null
                    var ytd   = L.ytdPct  != null ? L.ytdPct  : s.ytd_pct;
                    var hi    = L.high52  != null ? L.high52  : s.high_52w;
                    var lo    = L.low52   != null ? L.low52   : s.low_52w;
                    var vsHi  = L.vsHigh  != null ? L.vsHigh  : s.vs_high;
                    var vsLo  = L.vsLow   != null ? L.vsLow   : s.vs_low;
                    html += '<tr data-ticker="' + s.ticker + '">' +
                        '<td class="company"><a href="' + yurl + '" target="_blank" rel="noopener">' + s.company + '</a></td>' +
                        '<td class="ticker"><a href="' + yurl + '" target="_blank" rel="noopener">' + s.ticker + '</a></td>' +
                        '<td class="num">' + fmtPrice(L.price) + '</td>' +
                        pctCell(L.dayPct) + pctCell(ytd) +
                        '<td class="num">' + fmtPrice(hi) + '</td>' +
                        pctCell(vsHi) +
                        '<td class="num">' + fmtPrice(lo) + '</td>' +
                        pctCell(vsLo) +
                        '</tr>';
                } else if (hasLive && !L && isIndex(s.ticker)) {
                    // Index symbol — Finnhub free tier doesn't support these, use static data
                    html += '<tr data-ticker="' + s.ticker + '">' +
                        '<td class="company"><a href="' + yurl + '" target="_blank" rel="noopener">' + s.company + '</a></td>' +
                        '<td class="ticker"><a href="' + yurl + '" target="_blank" rel="noopener">' + s.ticker + '</a></td>' +
                        '<td class="num">' + fmtPrice(s.price) + '</td>' +
                        pctCell(s.day_pct) + pctCell(s.ytd_pct) +
                        '<td class="num">' + fmtPrice(s.high_52w) + '</td>' +
                        pctCell(s.vs_high) +
                        '<td class="num">' + fmtPrice(s.low_52w) + '</td>' +
                        pctCell(s.vs_low) +
                        '</tr>';
                } else if (hasLive && !L) {
                    // Live fetch ran but this stock failed
                    html += '<tr data-ticker="' + s.ticker + '" class="stale-row">' +
                        '<td class="company"><a href="' + yurl + '" target="_blank" rel="noopener">' + s.company + '</a></td>' +
                        '<td class="ticker"><a href="' + yurl + '" target="_blank" rel="noopener">' + s.ticker + '</a></td>' +
                        '<td class="num" colspan="7" style="text-align:center;color:var(--text-ter);font-style:italic;">Data unavailable</td>' +
                        '</tr>';
                } else {
                    // Still loading
                    html += '<tr data-ticker="' + s.ticker + '">' +
                        '<td class="company"><a href="' + yurl + '" target="_blank" rel="noopener">' + s.company + '</a></td>' +
                        '<td class="ticker"><a href="' + yurl + '" target="_blank" rel="noopener">' + s.ticker + '</a></td>' +
                        '<td class="num" colspan="7" style="text-align:center;color:var(--text-ter);">&mdash;</td>' +
                        '</tr>';
                }
            });
        }
        stockBody.innerHTML = html;
    }

    function setStockStatus(html) {
        var el = document.getElementById('ff-stock-dateline');
        if (el) el.innerHTML = html;
    }

    function bindRefreshBtn() {
        var btn = document.getElementById('refresh-live-btn');
        if (btn) btn.addEventListener('click', function (e) {
            e.preventDefault();
            liveCache = {};
            initLiveStockData();
        });
    }

    // ----------------------------------------------------------------
    // Live Data — Finnhub REST API (direct CORS, no proxy)
    // /quote → price, day%; /stock/metric → 52W high/low, YTD%
    // ----------------------------------------------------------------
    var FINNHUB_TOKEN = 'd7h5mkhr01qhiu0abuegd7h5mkhr01qhiu0abuf0';
    var FINNHUB_ROOT  = 'https://finnhub.io/api/v1/';

    function fetchFinnhubQuote(symbol) {
        var finnhubSym = INDEX_MAP[symbol] || symbol;
        var tok        = '&token=' + FINNHUB_TOKEN;

        var quoteUrl  = FINNHUB_ROOT + 'quote?symbol='        + encodeURIComponent(finnhubSym) + tok;
        var metricUrl = FINNHUB_ROOT + 'stock/metric?symbol=' + encodeURIComponent(finnhubSym) + '&metric=all' + tok;

        var quoteFetch  = fetch(quoteUrl).then(function (r) { return r.json(); });
        var metricFetch = fetch(metricUrl).then(function (r) { return r.json(); }).catch(function () { return null; });

        return Promise.all([quoteFetch, metricFetch])
            .then(function (res) {
                var q = res[0];
                var m = res[1] && res[1].metric ? res[1].metric : null;

                if (!q || q.c == null || q.c === 0) throw new Error('No data for ' + symbol);

                var price  = q.c;
                var dayPct = q.dp != null ? q.dp : (q.pc ? ((price - q.pc) / q.pc * 100) : 0);
                var ytdPct = m && m.yearToDatePriceReturnDaily != null ? m.yearToDatePriceReturnDaily : null;
                var high52 = m && m['52WeekHigh'] != null       ? m['52WeekHigh']        : null;
                var low52  = m && m['52WeekLow']  != null       ? m['52WeekLow']         : null;
                var vsHigh = (high52 && price) ? ((price - high52) / high52 * 100) : null;
                var vsLow  = (low52  && price) ? ((price - low52)  / low52  * 100) : null;

                return { ticker: symbol, price: price, dayPct: dayPct, ytdPct: ytdPct,
                         high52: high52, low52: low52, vsHigh: vsHigh, vsLow: vsLow };
            });
    }

    function initLiveStockData() {
        var symbols = collectAllSymbols();

        setStockStatus('<span class="loading-badge">&#8635; Fetching live prices&hellip;</span>');

        var promises = symbols.map(function (sym) {
            return fetchFinnhubQuote(sym)
                .then(function (data) { return { status: 'fulfilled', value: data }; })
                .catch(function (err) { return { status: 'rejected', ticker: sym, reason: err }; });
        });

        Promise.all(promises)
            .then(function (results) {
                var success = 0;
                results.forEach(function (r) {
                    if (r.status === 'fulfilled') {
                        liveCache[r.value.ticker] = r.value;
                        success++;
                    }
                });

                if (success === 0) throw new Error('All requests failed');

                renderStockTable();
                renderTickerBar();
                var t = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                setStockStatus(
                    '<span class="live-badge">&#10003; Live data &bull; ' + success + '/' + symbols.length + ' symbols &bull; ' + t + '</span>' +
                    '&nbsp;&nbsp;<a href="#" id="refresh-live-btn" class="refresh-link">&#8635; Refresh</a>'
                );
                bindRefreshBtn();
            })
            .catch(function (err) {
                console.warn('[Shaw Report] Finnhub error:', err);
                setStockStatus(
                    '<span class="error-badge">Live data unavailable</span>' +
                    '&nbsp;&bull;&nbsp;Showing static data&nbsp;&nbsp;' +
                    '<a href="#" id="refresh-live-btn" class="refresh-link">&#8635; Retry</a>'
                );
                bindRefreshBtn();
            });
    }


    // ----------------------------------------------------------------
    // Helpers
    // ----------------------------------------------------------------
    function isIndex(sym) {
        return !!INDEX_MAP[sym];
    }

    function collectAllSymbols() {
        var symbols = [], seen = {};
        // Include ticker bar symbols (skip indices — Finnhub free tier blocks them)
        if (FRIDAY_FINANCE.ticker_bar) {
            FRIDAY_FINANCE.ticker_bar.forEach(function (t) {
                if (!seen[t.symbol] && !isIndex(t.symbol)) { seen[t.symbol] = true; symbols.push(t.symbol); }
            });
        }
        // Include stock table symbols (skip indices)
        if (FRIDAY_FINANCE.stocks) {
            for (var cat in FRIDAY_FINANCE.stocks) {
                FRIDAY_FINANCE.stocks[cat].forEach(function (s) {
                    if (!seen[s.ticker] && !isIndex(s.ticker)) { seen[s.ticker] = true; symbols.push(s.ticker); }
                });
            }
        }
        return symbols;
    }

    function fmtPrice(val) {
        if (val == null) return '';
        if (val >= 1000) return val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return val.toFixed(2);
    }

    function fmtTickerPrice(val) {
        if (val == null) return '';
        if (val >= 1000) return val.toLocaleString('en-US', { maximumFractionDigits: 0 });
        return val.toFixed(2);
    }

    function pctCell(val) {
        if (val == null) return '<td class="num"></td>';
        var cls  = val >= 0 ? 'up' : 'down';
        var sign = val > 0 ? '+' : '';
        return '<td class="num ' + cls + '">' + sign + val.toFixed(1) + '%</td>';
    }

    // ----------------------------------------------------------------
    // Tenant & Lender News
    // ----------------------------------------------------------------
    var tlFilter    = 'All';
    var tlCollapsed = {};

    var LEVELS = ['HIGH', 'MEDIUM', 'LOW', 'GENERAL'];
    var LEVEL_META = {
        HIGH:    { icon: '\uD83D\uDD34', desc: 'Bankruptcy \u00b7 Default \u00b7 Fraud \u00b7 Major Legal Action' },
        MEDIUM:  { icon: '\uD83D\uDFE0', desc: 'Downgrade \u00b7 C-Suite Exit \u00b7 Earnings Miss \u00b7 Regulatory' },
        LOW:     { icon: '\uD83D\uDFE1', desc: 'Minor Litigation \u00b7 Restructuring Warning \u00b7 Analyst Cuts' },
        GENERAL: { icon: '\u26AA',        desc: 'Neutral or Positive Developments' }
    };

    function renderTenantLenderNews() {
        if (!TENANT_LENDER_NEWS) return;
        renderTLFilters();
        renderTLContent();
        renderTLWatchlist();
    }

    function renderTLFilters() {
        var el = document.getElementById('tl-filters');
        if (!el) return;
        var cats = ['All', 'Tenant', 'Lender', 'Equity Partner'];
        el.innerHTML = cats.map(function (c) {
            return '<button class="tl-filter-btn' + (tlFilter === c ? ' active' : '') +
                '" data-tlfilter="' + c + '">' + c + '</button>';
        }).join('');
        el.querySelectorAll('.tl-filter-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                tlFilter = btn.getAttribute('data-tlfilter');
                renderTLFilters(); renderTLContent(); renderTLWatchlist();
            });
        });
    }

    var ALERT_MAX_AGE_DAYS = 60;

    function renderTLContent() {
        var data     = TENANT_LENDER_NEWS;
        var alerts   = data.alerts || [];

        // Filter out alerts older than 60 days
        var cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - ALERT_MAX_AGE_DAYS);
        alerts = alerts.filter(function (a) {
            if (!a.date) return true;
            return new Date(a.date + 'T00:00:00') >= cutoff;
        });

        var filtered = tlFilter === 'All' ? alerts : alerts.filter(function (a) { return a.cat === tlFilter; });

        var byLevel = {};
        LEVELS.forEach(function (l) { byLevel[l] = []; });
        filtered.forEach(function (a) { if (byLevel[a.level]) byLevel[a.level].push(a); });

        var statsEl = document.getElementById('tl-stats');
        if (statsEl) {
            statsEl.innerHTML = [
                { lvl: 'HIGH',    count: byLevel.HIGH.length,    label: 'High' },
                { lvl: 'MEDIUM',  count: byLevel.MEDIUM.length,  label: 'Medium' },
                { lvl: 'LOW',     count: byLevel.LOW.length,     label: 'Low' },
                { lvl: 'GENERAL', count: byLevel.GENERAL.length, label: 'General' }
            ].map(function (s) {
                return '<div class="tl-stat severity-' + s.lvl + '">' +
                    '<div class="tl-stat-num">' + s.count + '</div>' +
                    '<div class="tl-stat-label">' + s.label + '</div></div>';
            }).join('');
        }

        var alertsEl = document.getElementById('tl-alerts');
        if (!alertsEl) return;
        var html = '';
        LEVELS.forEach(function (lvl) {
            var items = byLevel[lvl];
            if (lvl === 'GENERAL' && items.length === 0) return;
            var meta = LEVEL_META[lvl];
            var col  = tlCollapsed[lvl];

            html += '<div class="tl-level-section severity-' + lvl + '">';
            html += '<div class="tl-level-header' + (col ? ' collapsed' : '') + '" data-level="' + lvl + '">' +
                '<div class="tl-level-left">' +
                '<span class="tl-level-badge">' + lvl + '</span>' +
                '<span class="tl-level-title">' + meta.icon + ' ' + lvl + ' ALERTS</span>' +
                '<span class="tl-level-desc">' + meta.desc + '</span>' +
                '</div>' +
                '<div class="tl-level-right">' +
                '<span class="tl-level-count">' + items.length + '</span>' +
                '<span class="tl-level-chevron">' + (col ? '\u25BC' : '\u25B2') + '</span>' +
                '</div></div>';

            if (!col) {
                html += '<div class="tl-level-body">';
                if (items.length === 0) {
                    html += '<div class="tl-empty">No ' + lvl.toLowerCase() + ' alerts this week</div>';
                } else {
                    items.forEach(function (a) {
                        html += '<div class="tl-alert">' +
                            '<div class="tl-alert-headline">' + a.headline + '</div>' +
                            '<div class="tl-alert-summary">' + a.summary + '</div>';
                        if (a.relevance) html += '<div class="tl-alert-relevance">' + a.relevance + '</div>';
                        html += '<div class="tl-alert-meta">' +
                            '<span class="tl-meta-tag">' + a.company + '</span>' +
                            '<span class="tl-meta-cat">' + a.cat + '</span>';
                        if (a.source) html += '<span class="tl-meta-source">' + a.source + '</span>';
                        if (a.date)   html += '<span class="tl-meta-source">\u00b7 ' + a.date + '</span>';
                        html += '</div></div>';
                    });
                }
                html += '</div>';
            }
            html += '</div>';
        });

        alertsEl.innerHTML = html;
        alertsEl.querySelectorAll('.tl-level-header').forEach(function (hdr) {
            hdr.addEventListener('click', function () {
                var lvl = hdr.getAttribute('data-level');
                tlCollapsed[lvl] = !tlCollapsed[lvl];
                renderTLContent();
            });
        });
    }

    function renderTLWatchlist() {
        var el = document.getElementById('tl-watchlist');
        if (!el || !TENANT_LENDER_NEWS.companies) return;
        var companies = TENANT_LENDER_NEWS.companies;
        if (tlFilter !== 'All') companies = companies.filter(function (c) { return c.cat === tlFilter; });
        el.innerHTML = companies.map(function (co) {
            var catClass = 'cat-' + co.cat.replace(/\s+/g, '-');
            return '<div class="tl-watchlist-item">' +
                '<span class="name">' + co.name + '</span>' +
                '<span class="cat-tag ' + catClass + '">' + co.cat + '</span>' +
                '</div>';
        }).join('');
    }

})();
