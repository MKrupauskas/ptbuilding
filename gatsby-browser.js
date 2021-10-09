/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// onPreRouteUpdate() and onRouteUpdate() are called before onInitialClientRender,
// use initialized flag to ensure that window.onGatsbyPreRouteUpdate() and
// window.onGatsbyRouteUpdate() will not be called before
// window.onGatsbyInitialClientRender() has run
let initialized = false;

exports.onInitialClientRender = () => {
  initialized = true;
  if (
    'onGatsbyInitialClientRender' in window &&
    typeof window.onGatsbyInitialClientRender === 'function'
  ) {
    window.onGatsbyInitialClientRender();
  }
  if (
    'onGatsbyRouteUpdate' in window &&
    typeof window.onGatsbyRouteUpdate === 'function'
  ) {
    window.onGatsbyRouteUpdate();
  }
};

exports.onRouteUpdate = () => {
  if (
    initialized &&
    'onGatsbyRouteUpdate' in window &&
    typeof window.onGatsbyRouteUpdate === 'function'
  ) {
    window.onGatsbyRouteUpdate();
  }
};

exports.onPreRouteUpdate = () => {
  if (
    initialized &&
    'onGatsbyPreRouteUpdate' in window &&
    typeof window.onGatsbyPreRouteUpdate === 'function'
  ) {
    window.onGatsbyPreRouteUpdate();
  }
};

!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = '2.0';
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(
  window,
  document,
  'script',
  'https://connect.facebook.net/en_US/fbevents.js',
);
fbq('init', '888390718455357');
fbq('track', 'PageView');
