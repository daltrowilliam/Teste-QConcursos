const seguidores = document.getElementById("seguidores")
const seguindo = document.getElementById("seguindo")
const fotoPerfil = document.getElementById("fotoPerfil")
const repositorios = document.getElementById("repositorios")
const repolist = document.getElementById("repolist")
const favoritosContainer = document.getElementById("favoritosContainer")
let arrayList = []


async function request() {
    const data1 = await (await fetch('https://api.github.com/users/daltrowilliam')).json();
    const data2 = await (await fetch('https://api.github.com/users/daltrowilliam/repos')).json();
    const data3 = await (await fetch('https://api.github.com/users/daltrowilliam/followers')).json();
    const data4 = await (await fetch('https://api.github.com/users/daltrowilliam/following')).json();
    const data5 = await (await fetch('https://api.github.com/users/daltrowilliam/starred')).json();
    return [data1, data2, data3, data4, data5]
  }

  request().then(data => {
    fotoPerfil.src = data[0].avatar_url
    repositorios.innerHTML = "Repositórios: " + data[1].length
    seguidores.innerHTML = "Seguidores: " + data[2].length
    seguindo.innerHTML = "Seguindo: " + data[3].length

    
    data[4].forEach(element => {
        arrayList.push(element.name)
    })

    for (let index = 0; index < arrayList.length; index++) {
        if ((index%2) === 0) {
            favoritosContainer.innerHTML += "<div class='linhaazul'>" + arrayList[index] + "</div>"
        } else {
            favoritosContainer.innerHTML += "<div class='linhabranca'>" + arrayList[index] + "</div>"
        }
    }
  })
  .catch((error) => console.log(error))