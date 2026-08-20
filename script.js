const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');
const searchButton = document.getElementById('searchButton');
const searchModal = document.getElementById('searchModal');
const closeSearch = document.getElementById('closeSearch');
const siteSearch = document.getElementById('siteSearch');
const newsletterForm = document.getElementById('newsletterForm');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

function openSearch() {
  if (!searchModal) return;
  searchModal.classList.add('open');
  searchModal.setAttribute('aria-hidden', 'false');
  setTimeout(() => siteSearch?.focus(), 0);
}

function hideSearch() {
  if (!searchModal) return;
  searchModal.classList.remove('open');
  searchModal.setAttribute('aria-hidden', 'true');
  searchButton?.focus();
}

searchButton?.addEventListener('click', openSearch);
closeSearch?.addEventListener('click', hideSearch);
searchModal?.addEventListener('click', (event) => {
  if (event.target === searchModal) hideSearch();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && searchModal?.classList.contains('open')) hideSearch();
});

newsletterForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = document.getElementById('newsletterEmail')?.value?.trim();
  if (!email) return;

  const endpoint = window.PORTAL_CONFIG?.newsletterEndpoint;
  if (!endpoint) {
    alert('Cadastro preparado. A integração da newsletter será ativada junto com o backend do portal.');
    return;
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    if (!response.ok) throw new Error('Falha no cadastro');
    alert('Cadastro realizado com sucesso!');
    newsletterForm.reset();
  } catch (error) {
    console.error(error);
    alert('Não foi possível concluir o cadastro agora. Tente novamente em instantes.');
  }
});
