const toggle = document.getElementById('tema');

toggle.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark')
    ? 'Ativar tema claro'
    : 'Ativar tema escuro';
});