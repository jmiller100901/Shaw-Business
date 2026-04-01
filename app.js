// ================================================================
// Jackson Shaw Weekly Brief — Application Logic
// ================================================================

(function () {
    'use strict';

    // --- Init ---
    document.addEventListener('DOMContentLoaded', function () {
        renderTickerBar();
        renderMasthead();
        renderFridayFinance();
        renderTenantLenderNews();
        initNav();
    });

    // --- Ticker Bar ---
    function renderTickerBar() {
        var bar = document.getElementById('ticker-bar');
        if (!bar || !FRIDAY_FINANCE.ticker_bar) return;

        var html = FRIDAY_FINANCE.ticker_bar.map(function (t) {
            var up = t.change_pct >= 0;
            var arrow = up ? '\u25B2' : '\u25BC';
            var cls = up ? 'up' : 'down';
            return '<span class="ticker-item">' +
                '<span class="sym">' + t.symbol + '</span> ' +
                t.price +
                ' <span class="pct ' + cls + '">' + arrow + Math.abs(t.change_pct).toFixed(1) + '%</span>' +
                '</span>';
        }).join('');

        bar.innerHTML = html;
    }

    // --- Masthead ---
    function renderMasthead() {
        var el = document.getElementById('masthead-date');
        if (el) el.textContent = FRIDAY_FINANCE.date;
    }

    // --- Section Nav ---
    function initNav() {
        var tabs = document.querySelectorAll('.nav-tab');
        tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                tabs.forEach(function (t) { t.classList.remove('active'); });
                tab.classList.add('active');

                var target = tab.getAttribute('data-section');
                document.querySelectorAll('.section').forEach(function (s) {
                    s.classList.remove('active');
                });
                var section = document.getElementById(target);
                if (section) section.classList.add('active');
            });
        });
    }

    // --- Friday Finance ---
    function renderFridayFinance() {
        var data = FRIDAY_FINANCE;

        // News bullets
        var bulletsEl = document.getElementById('ff-news-bullets');
        if (bulletsEl && data.news_bullets) {
            bulletsEl.innerHTML = data.news_bullets.map(function (b) {
                return '<div class="news-bullet">' + b + '</div>';
            }).join('');
        }

        // Watch text
        var watchEl = document.getElementById('ff-watch-text');
        if (watchEl) watchEl.textContent = data.watch_next_week || '';

        // Weekend reading
        var readingEl = document.getElementById('ff-weekend-reading');
        if (readingEl && data.wsj_articles) {
            readingEl.innerHTML = data.wsj_articles.map(function (a, i) {
                return '<div class="reading-item">' +
                    '<span class="reading-num">' + (i + 1) + '</span>' +
                    '<div class="reading-body">' +
                    '<a href="' + a.url + '" target="_blank" rel="noopener">' + a.title + '</a>' +
                    '<div class="reading-source">Wall Street Journal</div>' +
                    '</div></div>';
            }).join('');
        }

        // Rates
        var rateBody = document.getElementById('ff-rate-body');
        if (rateBody && data.rates) {
            var rateHtml = '';
            for (var name in data.rates) {
                var r = data.rates[name];
                rateHtml += '<tr>' +
                    '<td>' + name + '</td>' +
                    '<td>' + r.current + '</td>' +
                    '<td>' + r.one_mo_ago + '</td>' +
                    '<td>' + r.one_yr_ago + '</td>' +
                    '</tr>';
            }
            rateBody.innerHTML = rateHtml;
        }

        // Stock dateline
        var dateline = document.getElementById('ff-stock-dateline');
        if (dateline) dateline.textContent = 'Data as of market close, ' + data.date;

        // Stock table
        var stockBody = document.getElementById('ff-stock-body');
        if (stockBody && data.stocks) {
            var html = '';
            for (var cat in data.stocks) {
                html += '<tr class="cat-row"><td colspan="9">' + cat + '</td></tr>';
                data.stocks[cat].forEach(function (s) {
                    html += '<tr>' +
                        '<td class="company">' + s.company + '</td>' +
                        '<td class="ticker">' + s.ticker + '</td>' +
                        '<td class="num">' + fmtPrice(s.price) + '</td>' +
                        pctCell(s.day_pct) +
                        pctCell(s.ytd_pct) +
                        '<td class="num">' + fmtPrice(s.high_52w) + '</td>' +
                        pctCell(s.vs_high) +
                        '<td class="num">' + fmtPrice(s.low_52w) + '</td>' +
                        pctCell(s.vs_low) +
                        '</tr>';
                });
            }
            stockBody.innerHTML = html;
        }
    }

    // --- Tenant & Lender News ---
    var tlFilter = 'All';
    var tlCollapsed = {};

    var LEVELS = ['HIGH', 'MEDIUM', 'LOW', 'GENERAL'];
    var LEVEL_META = {
        HIGH:    { icon: '\uD83D\uDD34', desc: 'Bankruptcy \u00b7 Default \u00b7 Fraud \u00b7 Major Legal Action' },
        MEDIUM:  { icon: '\uD83D\uDFE0', desc: 'Downgrade \u00b7 C-Suite Exit \u00b7 Earnings Miss \u00b7 Regulatory' },
        LOW:     { icon: '\uD83D\uDFE1', desc: 'Minor Litigation \u00b7 Restructuring Warning \u00b7 Analyst Cuts' },
        GENERAL: { icon: '\u26AA',        desc: 'Neutral or Positive Developments' },
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
            return '<button class="tl-filter-btn' + (tlFilter === c ? ' active' : '') + '" data-tlfilter="' + c + '">' + c + '</button>';
        }).join('');

        el.querySelectorAll('.tl-filter-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                tlFilter = btn.getAttribute('data-tlfilter');
                renderTLFilters();
                renderTLContent();
                renderTLWatchlist();
            });
        });
    }

    function renderTLContent() {
        var data = TENANT_LENDER_NEWS;
        var alerts = data.alerts || [];

        // Filter by category
        var filtered = tlFilter === 'All' ? alerts : alerts.filter(function (a) { return a.cat === tlFilter; });

        // Group by level
        var byLevel = {};
        LEVELS.forEach(function (l) { byLevel[l] = []; });
        filtered.forEach(function (a) { if (byLevel[a.level]) byLevel[a.level].push(a); });

        // Stats
        var statsEl = document.getElementById('tl-stats');
        if (statsEl) {
            statsEl.innerHTML = [
                { lvl: 'HIGH',   count: byLevel.HIGH.length,   label: 'High alerts' },
                { lvl: 'MEDIUM', count: byLevel.MEDIUM.length, label: 'Medium alerts' },
                { lvl: 'LOW',    count: byLevel.LOW.length,    label: 'Low alerts' },
                { lvl: 'GENERAL',count: byLevel.GENERAL.length,label: 'General' },
            ].map(function (s) {
                return '<div class="tl-stat severity-' + s.lvl + '" style="background: var(--sev-bg); border-color: var(--sev-border);">' +
                    '<div class="tl-stat-num" style="color: var(--sev-text);">' + s.count + '</div>' +
                    '<div class="tl-stat-label">' + s.label + '</div></div>';
            }).join('');
        }

        // Alert sections
        var alertsEl = document.getElementById('tl-alerts');
        if (!alertsEl) return;

        var html = '';
        LEVELS.forEach(function (lvl) {
            var items = byLevel[lvl];
            if (lvl === 'GENERAL' && items.length === 0) return;
            var meta = LEVEL_META[lvl];
            var col = tlCollapsed[lvl];

            html += '<div class="tl-level-section severity-' + lvl + '">';

            // Header
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

            // Body
            if (!col) {
                html += '<div class="tl-level-body">';
                if (items.length === 0) {
                    html += '<div class="tl-empty">No ' + lvl.toLowerCase() + ' alerts found across monitored companies</div>';
                } else {
                    items.forEach(function (a) {
                        html += '<div class="tl-alert">' +
                            '<div class="tl-alert-headline">' + a.headline + '</div>' +
                            '<div class="tl-alert-summary">' + a.summary + '</div>';
                        if (a.relevance) {
                            html += '<div class="tl-alert-relevance">' + a.relevance + '</div>';
                        }
                        html += '<div class="tl-alert-meta">' +
                            '<span class="tl-meta-tag">' + a.company + '</span>' +
                            '<span class="tl-meta-cat">' + a.cat + '</span>';
                        if (a.source) html += '<span class="tl-meta-source">' + a.source + '</span>';
                        if (a.date) html += '<span class="tl-meta-source">\u00b7 ' + a.date + '</span>';
                        html += '</div></div>';
                    });
                }
                html += '</div>';
            }

            html += '</div>';
        });

        alertsEl.innerHTML = html;

        // Attach collapse listeners
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
        if (tlFilter !== 'All') {
            companies = companies.filter(function (c) { return c.cat === tlFilter; });
        }

        el.innerHTML = companies.map(function (co) {
            var catClass = 'cat-' + co.cat.replace(/\s+/g, '-');
            return '<div class="tl-watchlist-item">' +
                '<span class="name">' + co.name + '</span>' +
                '<span class="cat-tag ' + catClass + '">' + co.cat + '</span>' +
                '</div>';
        }).join('');
    }

    // --- Helpers ---
    function fmtPrice(val) {
        if (val == null) return '';
        if (val >= 1000) return '$' + val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return '$' + val.toFixed(2);
    }

    function pctCell(val) {
        if (val == null) return '<td class="num"></td>';
        var cls = val >= 0 ? 'up' : 'down';
        var sign = val > 0 ? '+' : '';
        return '<td class="num ' + cls + '">' + sign + val.toFixed(1) + '%</td>';
    }

})();
