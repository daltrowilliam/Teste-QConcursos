
const seguidores = document.getElementById("seguidores")
const seguindo = document.getElementById("seguindo")
const fotoPerfil = document.getElementById("fotoPerfil")
const repositorios = document.getElementById("repositorios")


fetch('https://api.github.com/users/daltrowilliam')
  .then(response => response.json())
  .then(data => fotoPerfil.src = data.avatar_url);

fetch('https://api.github.com/users/daltrowilliam/repos')
  .then(response => response.json())
  .then(data => repositorios.innerHTML = "Repositórios: " + data.length);

fetch('https://api.github.com/users/daltrowilliam/followers')
  .then(response => response.json())
  .then(data => seguidores.innerHTML = "Seguidores: " + data.length);

fetch('https://api.github.com/users/daltrowilliam/following')
  .then(response => response.json())
  .then(data => seguindo.innerHTML = "Seguindo: " + data.length);





/* 
requestRepositorios.open('get', 'https://api.github.com/users/daltrowilliam/repos');
requestRepositorios.send()


requestRepositorios.onreadystatechange = function() {
    
    if(requestRepositorios.readyState === 4) {
    
      if(requestRepositorios.status === 200) {
        const json = request.response;
        const resposta = JSON.parse(json);
        repositorios.innerHTML = "Repositórios:" + resposta.length
      } else {
        repositorios.innerHTML = "Repositório Offline"
      }
    } else {
        repositorios.innerHTML = "Repositório Offline"
    }
}

const btn = document.getElementById('request');
var bio = document.getElementById('bio');
 
var request = new XMLHttpRequest();
 
request.onreadystatechange = function() {
  if(request.readyState === 4) {
    bio.style.border = '1px solid #e8e8e8';
    if(request.status === 200) { 
      bio.innerHTML = request.responseText;
    } else {
      bio.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
    } 
  }
}
 
request.open('Get', 'Bio.txt');
 
btn.addEventListener('click', function() {
  this.style.display = 'none';
  request.send();
}); */







