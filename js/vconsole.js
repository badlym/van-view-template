function runVconsole() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState == 'loaded' || script.readyState == 'complete') {
        script.onreadystatechange = null;
        // 初始化
        // var vConsole = new window.VConsole({
        //   theme: 'dark',
        // });
        // eruda.init();
      }
    };
  } else {
    script.onload = function () {
      // 初始化
      // var vConsole = new window.VConsole({
      //   theme: 'dark',
      // });
      eruda.init();
    };
  }
  // script.src = 'https://unpkg.com/vconsole@latest/dist/vconsole.min.js';
  // script.src = 'https://cdn.bootcss.com/vConsole/3.3.0/vconsole.min.js';
  // script.src = 'https://unpkg.com/vconsole@3.14.7/dist/vconsole.min.js';
  script.src = 'https://cdn.jsdelivr.net/npm/eruda';
  document.body.appendChild(script);
}
runVconsole();
