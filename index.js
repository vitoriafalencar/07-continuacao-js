const seletor = document.querySelector('#selector');

const image = document.querySelector('#image');

const detalhes = document.querySelector('#detalhes')

seletor.addEventListener('change', listar);
function listar() {




    // parte das fts dos carros abaixo

    switch (selector.value){
        case 'carro01':
            image.setAttribute('src', './img/Alfa Romeo.jpeg');

            detalhes.textContent = 'Alfha Romeo 156 Sportwagon, ano 2001,Velocidade máxima : 212 km/h';

            break;

        case 'carro02':
            image.setAttribute('src', './img/Fiat.jpeg');

            detalhes.textContent = 'Fiat Brava ELX 1.6, ano 2001, Velocidade máxima : 186 km/h';
            break;

        case 'carro03':
            image.setAttribute('src', './img/Porche.jpeg');

            detalhes.textContent = 'Porche 911 turbo 3.6, ano 2001, velocidade máxima: 305 km/h';
            break;

        case 'carro04':

            detalhes.textContent = 'Volkswagem Quantum 2.0 Mi, ano 2001,Velocidade máxima: 186km/h';
            image.setAttribute('src', './img/volkswagem.jpeg');
        
    }
}
