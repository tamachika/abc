document.addEventListener('DOMContentLoaded', function() {
  // ジョークの答えを非表示にする
  const answer = document.querySelector('#jokes p:nth-child(2)');
  answer.style.display = 'none';

  // ジョークの質問をクリックしたときに答えを表示する
  const question = document.querySelector('#jokes p:nth-child(1)');
  question.addEventListener('click', function() {
    answer.style.display = 'block';
  });
});
