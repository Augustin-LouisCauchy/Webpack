(() => {
  "use strict";
  var t = {
      402: (t, r, o) => {
        var n = o(81),
          c = o.n(n),
          e = o(645);
        o.n(e)()(c()).push([t.id, "body { color: #999;}", ""]);
      },
      645: (t) => {
        t.exports = function (t) {
          var r = [];
          return (
            (r.toString = function () {
              return this.map(function (r) {
                var o = "",
                  n = void 0 !== r[5];
                return (
                  r[4] && (o += "@supports (".concat(r[4], ") {")),
                  r[2] && (o += "@media ".concat(r[2], " {")),
                  n &&
                    (o += "@layer".concat(
                      r[5].length > 0 ? " ".concat(r[5]) : "",
                      " {"
                    )),
                  (o += t(r)),
                  n && (o += "}"),
                  r[2] && (o += "}"),
                  r[4] && (o += "}"),
                  o
                );
              }).join("");
            }),
            (r.i = function (t, o, n, c, e) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var a = {};
              if (n)
                for (var i = 0; i < this.length; i++) {
                  var u = this[i][0];
                  null != u && (a[u] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var p = [].concat(t[s]);
                (n && a[p[0]]) ||
                  (void 0 !== e &&
                    (void 0 === p[5] ||
                      (p[1] = "@layer"
                        .concat(p[5].length > 0 ? " ".concat(p[5]) : "", " {")
                        .concat(p[1], "}")),
                    (p[5] = e)),
                  o &&
                    (p[2]
                      ? ((p[1] = "@media "
                          .concat(p[2], " {")
                          .concat(p[1], "}")),
                        (p[2] = o))
                      : (p[2] = o)),
                  c &&
                    (p[4]
                      ? ((p[1] = "@supports ("
                          .concat(p[4], ") {")
                          .concat(p[1], "}")),
                        (p[4] = c))
                      : (p[4] = "".concat(c))),
                  r.push(p));
              }
            }),
            r
          );
        };
      },
      81: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
    },
    r = {};
  function o(n) {
    var c = r[n];
    if (void 0 !== c) return c.exports;
    var e = (r[n] = { id: n, exports: {} });
    return t[n](e, e.exports, o), e.exports;
  }
  (o.n = (t) => {
    var r = t && t.__esModule ? () => t.default : () => t;
    return o.d(r, { a: r }), r;
  }),
    (o.d = (t, r) => {
      for (var n in r)
        o.o(r, n) &&
          !o.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
    }),
    (o.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r)),
    o(402);
})();
