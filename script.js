// login.html 的 JavaScript 程式碼
const loginForm = document.getElementById('login-form');
const messageDiv = document.getElementById('message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // 阻止表單默認提交行為

  // 獲取用戶名和密碼
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // 進行簡單的表單驗證
  if (username === '' || password === '') {
    messageDiv.textContent = '請輸入用戶名和密碼';
    return;
  }

  // 模擬登錄成功
  messageDiv.textContent = '登錄成功！';
});

// register.html 和 profile.html 的 JavaScript 程式碼類似，暫時省略
