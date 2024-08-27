const body = document.querySelector('body')
const root = document.querySelector(':root')

rodarTemaEscolhido()

function salvarTema(tema) {
    if (tema === 'dark') {
        localStorage.setItem('theme', 'dark')
    }else {
        localStorage.setItem('theme', 'ligth')
    }
}

function rodarTemaEscolhido () {
    const temaDefinido = localStorage.getItem('theme')
    if (temaDefinido === 'dark') {
        setarTemaEscuro()
    }else {
        setarTemaClaro()
    }
}

function setarTemaEscuro() {
    root.style.setProperty('--cor-de-fundo', '#2E3440')
        root.style.setProperty('--cor-de-texto', '#eeeeee')
        root.style.setProperty('--cor-destaque', '#32bde0')
        root.style.setProperty('--cor-de-fundo-nav', '#3B4252')
        root.style.setProperty('--cor-botao-hover', '#4C566A')
        body.dataset.theme = 'dark'
        salvarTema('dark')
}

function setarTemaClaro() {
    root.style.setProperty('--cor-de-fundo', '#eeeeee')
        root.style.setProperty('--cor-de-texto', '#2E3440')
        root.style.setProperty('--cor-destaque', '#00627a')
        root.style.setProperty('--cor-de-fundo-nav', '#a2a2a2')
        root.style.setProperty('--cor-botao-hover', '#a2a2a2')
        body.dataset.theme = 'ligth'
        salvarTema('ligth')
}

document.getElementById('btn-mudar-tema').addEventListener('click', () => {
    if (body.dataset.theme === 'dark'){
        setarTemaClaro()
    }else {
        setarTemaEscuro()
    }
 })
