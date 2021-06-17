let apx_analytics = document.createElement('script');
apx_analytics.src = "https://www.googletagmanager.com/gtag/js?id=G-V0HB6YB66J"
document.head.append(apx_analytics);
apx_analytics.onload = function() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-V0HB6YB66J');
  console.log('Tracking - OK');
};

console.log('Settings and fixes file loaded');
