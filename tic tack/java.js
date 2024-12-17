document.addEventListener('DOMContentLoaded', () => {
  let items = document.querySelectorAll('tr td');
  let chosedOne = document.querySelectorAll('.choose p');
  let message = document.getElementById('message');
  let curentPlayer = '❌';
  let clickCount = 0;
  let gameover = false;

  chosedOne.forEach(choice => {
      choice.addEventListener('click', () => {
          curentPlayer = choice.textContent;
          startgame();
      });
  });

  function startgame() {
      clickCount = 0;
      gameover = false;
      message.textContent = '';
      items.forEach(item => {
          item.textContent = '';
          item.addEventListener('click', activeCellClick);
      });
  }

  function activeCellClick(e) {
      const item = e.target;
      if (gameover || item.textContent !== '') return;

      item.textContent = curentPlayer;
      clickCount++;

      if (checkWin()) {
          message.textContent = `${curentPlayer} wins!`;
          gameover = true;
          return;
      }

      if (clickCount === 9) {
          message.textContent = `It's a draw`;
          gameover = true;
          return;
      }

      curentPlayer = curentPlayer === '❌' ? '⭕' : '❌';
  }

  function checkWin() {
      const winningCombinations = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
      ];

      return winningCombinations.some(combination => {
          const [a, b, c] = combination;
          return items[a].textContent === curentPlayer &&
                 items[b].textContent === curentPlayer &&
                 items[c].textContent === curentPlayer;
      });
      
  }
});



