"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _process$env = process.env,
    BUSINESS_URL = _process$env.BUSINESS_URL,
    DEV_URL = _process$env.DEV_URL,
    BACKOFFICE_URL = _process$env.BACKOFFICE_URL,
    BLOG_URL = _process$env.BLOG_URL;

var pages = require("./pages");

module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  rewrites: function rewrites() {
    return regeneratorRuntime.async(function rewrites$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              beforeFiles: [].concat(_toConsumableArray(pages), [{
                source: "/business",
                destination: "".concat(BUSINESS_URL, "/business")
              }, {
                source: "/business/:path*",
                destination: "".concat(BUSINESS_URL, "/business/:path*")
              }, {
                source: "/dev",
                destination: "".concat(DEV_URL, "/dev")
              }, {
                source: "/dev/:path*",
                destination: "".concat(DEV_URL, "/dev/:path*")
              }, {
                source: "/backoffice",
                destination: "".concat(BACKOFFICE_URL, "/backoffice")
              }, {
                source: "/backoffice/:path*",
                destination: "".concat(BACKOFFICE_URL, "/backoffice/:path*")
              }, {
                source: "/blog",
                destination: "".concat(BLOG_URL, "/blog")
              }, {
                source: "/blog/:path*",
                destination: "".concat(BLOG_URL, "/blog/:path*")
              }]),
              afterFiles: [].concat(_toConsumableArray(pages), [{
                source: "/business",
                destination: "".concat(BUSINESS_URL, "/business")
              }, {
                source: "/business/:path*",
                destination: "".concat(BUSINESS_URL, "/business/:path*")
              }, {
                source: "/dev",
                destination: "".concat(DEV_URL, "/dev")
              }, {
                source: "/dev/:path*",
                destination: "".concat(DEV_URL, "/dev/:path*")
              }, {
                source: "/backoffice",
                destination: "".concat(BACKOFFICE_URL, "/backoffice")
              }, {
                source: "/backoffice/:path*",
                destination: "".concat(BACKOFFICE_URL, "/backoffice/:path*")
              }, {
                source: "/blog",
                destination: "".concat(BLOG_URL, "/blog")
              }, {
                source: "/blog/:path*",
                destination: "".concat(BLOG_URL, "/blog/:path*")
              }]),
              fallback: [].concat(_toConsumableArray(pages), [{
                source: "/:path*",
                destination: "/:path*"
              }, {
                source: "/business",
                destination: "".concat(BUSINESS_URL, "/business")
              }, {
                source: "/business/:path*",
                destination: "".concat(BUSINESS_URL, "/business/:path*")
              }, {
                source: "/dev",
                destination: "".concat(DEV_URL, "/dev")
              }, {
                source: "/dev/:path*",
                destination: "".concat(DEV_URL, "/dev/:path*")
              }, {
                source: "/backoffice",
                destination: "".concat(BACKOFFICE_URL, "/backoffice")
              }, {
                source: "/backoffice/:path*",
                destination: "".concat(BACKOFFICE_URL, "/backoffice/:path*")
              }, {
                source: "/blog",
                destination: "".concat(BLOG_URL, "/blog")
              }, {
                source: "/blog/:path*",
                destination: "".concat(BLOG_URL, "/blog/:path*")
              }])
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};