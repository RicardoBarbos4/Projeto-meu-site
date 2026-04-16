document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const pedido = {
        nome: document.getElementById('name').value,
        email: document.getElementById('email').value,
        mensagem: document.getElementById('message').value,
        data: new Date().toLocaleString()
    };

    // Pega o que já tem salvo ou cria uma lista vazia
    let pedidosSalvos = JSON.parse(localStorage.getItem('meusPedidos')) || [];
    
    // Adiciona o novo pedido
    pedidosSalvos.push(pedido);
    
    // Salva de volta no navegador
    localStorage.setItem('meusPedidos', JSON.stringify(pedidosSalvos));

    
});