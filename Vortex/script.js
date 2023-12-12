

//CALCULAR PARCELAS DAS CAMISAS DE ONE PIECE

document.addEventListener("DOMContentLoaded", function() {
  
  for (let i = 1; i <= 4; i++) {
    const valort = document.querySelector(`#camisa${i}one .valort`);
    const valorp = document.querySelector(`#camisa${i}one .valorp`);

    let parcelaBase = parseFloat(valort.textContent) / 6;
    valorp.textContent = parcelaBase.toFixed(2);
  }
});

//CALCULAR PARCELAS DAS CAMISAS DE STAR WARS

document.addEventListener("DOMContentLoaded", function() {
  
  for (let i = 1; i <= 4; i++) {
    const valort = document.querySelector(`#camisa${i}star .valort`);
    const valorp = document.querySelector(`#camisa${i}star .valorp`);

    let parcelaBase = parseFloat(valort.textContent) / 6;
    valorp.textContent = parcelaBase.toFixed(2);
  }
});

//CALCULAR PARCELAS DAS CAMISAS DE HARRY POTTER

document.addEventListener("DOMContentLoaded", function() {
  
  for (let i = 1; i <= 4; i++) {
    const valort = document.querySelector(`#camisa${i}potter .valort`);
    const valorp = document.querySelector(`#camisa${i}potter .valorp`);

    let parcelaBase = parseFloat(valort.textContent) / 6;
    valorp.textContent = parcelaBase.toFixed(2);
  }
});



//TODAS AS FUNÇÕES DE TROCAR IMG


// Função genérica para trocar imagem com fade
function trocarImagem(elementId, novaImagem) {
  const elemento = document.getElementById(elementId);
  elemento.style.opacity = 0;

  // Aguarde um curto período para garantir que a transição tenha efeito
  setTimeout(() => {
    elemento.src = novaImagem;
    elemento.style.opacity = 1;
  }, 300);
}

// Função genérica para restaurar imagem com fade
function restaurarImagem(elementId, imagemOriginal) {
    const elemento = document.getElementById(elementId);
    elemento.style.opacity = 0;

    // Aguarde um curto período para garantir que a transição tenha efeito
    setTimeout(() => {
        elemento.src = imagemOriginal;
        elemento.style.opacity = 1;
    },  300);
}

// Mapeamento de elementos para suas imagens originais e de hover
const elementosCatalogo = [

  //Trocar img produtos
  { id: "roupa1one", imagemOriginal: "Midias/ft1_camisa1one.png", imagemHover: "Midias/ft2_camisa1one.png" },

  { id: "roupa2one", imagemOriginal: "Midias/ft1_camisa2one.png", imagemHover: "Midias/ft2_camisa2one.png" },

  { id: "roupa3one", imagemOriginal: "Midias/ft1_camisa3one.png", imagemHover: "Midias/ft2_camisa3one.png" },

  { id: "roupa4one", imagemOriginal: "Midias/ft1_camisa4one.png", imagemHover: "Midias/ft2_camisa4one.png" },

  { id: "roupa1star", imagemOriginal: "Midias/ft1_camisa1star.png", imagemHover: "Midias/ft2_camisa1star.png" },

  { id: "roupa2star", imagemOriginal: "Midias/ft1_camisa2star.png", imagemHover: "Midias/f2_camisa2star.png" },

  { id: "roupa3star", imagemOriginal: "Midias/ft1_camisa3star.png", imagemHover: "Midias/f2_camisa3star.png" },

  { id: "roupa4star", imagemOriginal: "Midias/ft1_camisa4star.png", imagemHover: "Midias/f2_camisa4star.png" },

  { id: "roupa1potter", imagemOriginal: "Midias/ft1_camisa1poter.jpg", imagemHover: "Midias/ft2_camisa1poter.jpg" },

  { id: "roupa2potter", imagemOriginal: "Midias/ft1_camisa2poter.jpg", imagemHover: "Midias/ft2_camisa2poter.jpg" },

  { id: "roupa3potter", imagemOriginal: "Midias/ft1_camisa3poter.jpg", imagemHover: "Midias/ft2_camisa3poter.jpg" },

  { id: "roupa4potter", imagemOriginal: "Midias/ft1_camisa4poter.jpg", imagemHover: "Midias/ft2_camisa4poter.jpg" },
  //Trocar img produtos


  //trocar img(icons)
  { id: "fav", imagemOriginal: "Midias/bFav.png", imagemHover: "Midias/bFav--prenchido.png" },

  { id: "login", imagemOriginal: "Midias/blogin.png", imagemHover: "Midias/blogin--prenchido.png" },

  { id: "carrinho", imagemOriginal: "Midias/bcarrinho.png", imagemHover: "Midias/bcarrinho--prenchido.jpg" },
  //trocar img(icons)
  
];

// Adiciona eventos de mouseover e mouseout para cada elemento no catálogo
elementosCatalogo.forEach((elemento) => {
    const elementoHtml = document.getElementById(elemento.id);

    if (elementoHtml) {
        elementoHtml.classList.add("catalogo-item"); // Adiciona a classe CSS

        elementoHtml.addEventListener("mouseover", () => {
            trocarImagem(elemento.id, elemento.imagemHover);
        });

        elementoHtml.addEventListener("mouseout", () => {
            restaurarImagem(elemento.id, elemento.imagemOriginal);
        });
    }
});



//FUNÇÕES DE LOGIN E REGRISTRO


//Função de login
function toggleForm() {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  loginForm.classList.toggle('active');
  registerForm.classList.toggle('active');
}

function login(event) {
  event.preventDefault();

  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const loginError = document.getElementById('login-error');

  // Obter as credenciais armazenadas no LocalStorage
  const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

  const userToLogin = storedUsers.find(user => user.username === usernameInput.value);

  if (userToLogin && userToLogin.password === passwordInput.value) {
    // Login bem-sucedido, redirecionar para index.html
    window.location.href = 'index.html';
  } else {
    // Senha ou usuário incorretos, exibir mensagem de erro
    loginError.textContent = 'Nome de usuário ou senha incorretos. Tente novamente.';
  }
}


//Função de Registro
function register(event) {
  event.preventDefault();

  const newUsernameInput = document.getElementById('new-username');
  const newEmailInput = document.getElementById('new-email');
  const newPasswordInput = document.getElementById('new-password');
  const registerError = document.getElementById('register-error');

  
  const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

  if (storedUsers.length >= 10) {
    if (registerError) {
      registerError.textContent = 'Número máximo de registros atingido (10).';
    } else {
      console.error('Elemento register-error não encontrado.');
    }
  } else {
    

    storedUsers.push({
      username: newUsernameInput.value,
      email: newEmailInput.value,
      password: newPasswordInput.value,
    });

    
    localStorage.setItem('registeredUsers', JSON.stringify(storedUsers));

    if (registerError) {
      registerError.textContent = '';
    } else {
      console.error('Elemento register-error não encontrado.');
    }

    
    const modal = document.getElementById('registration-success-modal');
    modal.style.display = 'flex';

    
    const enterButton = document.getElementById('enterButton');
    enterButton.addEventListener('click', function() {
      
      window.location.href = 'login.html';
    });

    
    newUsernameInput.value = '';
    newEmailInput.value = '';
    newPasswordInput.value = '';
  }
}

// var elem = document.querySelector('#catalogoOne');
// var flkty = new Flickity( elem, {
//   // options
//   cellAlign: 'left',
//   contain: true
// });

// watchCSS: true
















  
  
  



