
(function () {
  const token = localStorage.getItem('es_token');
  const role = String(localStorage.getItem('es_user_role') || '').toUpperCase();
  const name = localStorage.getItem('es_user_name') || '';
  const isLoggedIn = !!token;
  const isAdmin = isLoggedIn && role === 'ADMIN';

  const userNav = document.getElementById('userNavBtn');
  const bookingsNav = document.getElementById('myBookingsNavBtn');
  const loginNav = document.getElementById('loginNavBtn');

  if (userNav) userNav.style.display = isAdmin ? 'inline-block' : 'none';
  if (bookingsNav) bookingsNav.style.display = isLoggedIn ? 'inline-block' : 'none';

  if (loginNav) {
    if (isLoggedIn) {
      const firstName = name.trim().split(/\s+/)[0] || 'Account';
      loginNav.textContent = `Hi, ${firstName} · Logout`;
      loginNav.href = '#';
      loginNav.addEventListener('click', function (event) {
        event.preventDefault();
        localStorage.clear();
        window.location.href = 'login.html';
      });
    } else {
      loginNav.textContent = 'Login';
      loginNav.href = 'login.html';
    }
  }
})();
