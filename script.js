// Seleciona o botão de compra pelo ID que definimos no HTML
const btnComprar = document.getElementById('btnComprar');

// Adiciona um evento de clique ao botão
btnComprar.addEventListener('click', function() {
    // Substitui o link abaixo pelo link real do teu Stripe/PayPal quando o criares
    alert('Redirecionando para o checkout seguro...');
    
    // Exemplo de link de pagamento (podes trocar depois por um link do Stripe Payment Link ou PayPal)
    window.location.href = 'https://buy.stripe.com/exemplo'; 
});