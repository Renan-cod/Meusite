// 🧠 Esse é o cérebro. Vamos fazer uma ação simples:

// 1. Pegar TODOS os cartões e guardar na variável 'cartoes'
const cartoes = document.querySelectorAll('.cartao');

// 2. Para CADA cartão...
cartoes.forEach(cartao => {
    
    // 3. Quando o usuário CLICAR no cartão...
    cartao.addEventListener('click', function() {
        
        // 4. Muda a cor de fundo para um amarelo clarinho
        this.style.backgroundColor = '#fff8e1';
        
        // 5. Espera 300 milissegundos e volta ao branco
        setTimeout(() => {
            this.style.backgroundColor = 'white';
        }, 300);
    });
});

