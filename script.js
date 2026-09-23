document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os botões e os itens do cardápio
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // 2. Adiciona a classe 'active' apenas no botão clicado
            button.classList.add('active');

            // 3. Descobre qual categoria foi clicada
            const filterValue = button.getAttribute('data-filter');

            // 4. Mostra ou esconde os itens com base na categoria
            menuItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.style.display = 'flex'; 
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});