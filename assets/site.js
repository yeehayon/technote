// 테마 거르기
document.querySelectorAll('.filters .chip').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var f = btn.dataset.filter;
    document.querySelectorAll('.filters .chip').forEach(function (b) { b.classList.toggle('is-on', b === btn); });
    document.querySelectorAll('.index li[data-theme]').forEach(function (li) {
      li.hidden = !(f === 'all' || li.dataset.theme === f);
    });
  });
});

// 코드 복사 버튼
document.querySelectorAll('.prose pre > code').forEach(function (code) {
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'copy';
  btn.textContent = '복사';
  btn.addEventListener('click', function () {
    navigator.clipboard.writeText(code.innerText).then(function () {
      btn.textContent = '복사됨';
      setTimeout(function () { btn.textContent = '복사'; }, 1500);
    });
  });
  code.parentElement.appendChild(btn);
});

// 넓은 표는 가로 스크롤
document.querySelectorAll('.prose table').forEach(function (t) {
  var w = document.createElement('div');
  w.className = 'table-wrap';
  t.parentNode.insertBefore(w, t);
  w.appendChild(t);
});
