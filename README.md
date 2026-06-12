# Mona Lisa Interativa - p5.js

Projeto interativo que cria uma representação da famosa **Mona Lisa** de Leonardo da Vinci usando **p5.js**, com uma característica especial: **os olhos acompanham o movimento do cursor do mouse**.

## 🎨 Características

✨ **Olhos Interativos**: Os olhos da Mona Lisa acompanham o movimento do seu mouse em tempo real.

🎭 **Cores Originais**: Utiliza a paleta de cores do quadro original renascentista.

📱 **Responsivo**: Design adaptável a diferentes tamanhos de tela.

🖼️ **Detalhes Artísticos**: Inclui elementos como o famoso sorriso enigmático, cabelo, roupas renascentistas e mais.

## 📋 Estrutura do Projeto

```
alura1-/
├── index.html      # Arquivo HTML principal
├── sketch.js       # Código p5.js com toda a lógica de desenho
├── style.css       # Estilos CSS
└── README.md       # Este arquivo
```

## 🚀 Como Usar

### Online (GitHub Pages)
1. Acesse o repositório
2. Vá para a aba **Settings** > **Pages**
3. Configure para usar a branch `main`
4. Acesse a URL fornecida

### Localmente
1. Clone o repositório:
```bash
git clone https://github.com/annaarend-web/alura1-.git
```

2. Abra o arquivo `index.html` em um navegador web

## 💻 Tecnologias Utilizadas

- **HTML5** - Estrutura
- **CSS3** - Estilização
- **JavaScript** - Lógica
- **p5.js** - Biblioteca para gráficos e interatividade

## 🎓 Conceitos Aprendidos

Este projeto demonstra:

- Uso da biblioteca **p5.js**
- Rastreamento de mouse com `mouseX` e `mouseY`
- Cálculo de ângulos com `atan2()`
- Coordenadas polares com `cos()` e `sin()`
- Desenho de formas com `ellipse()`, `bezierVertex()`
- Manipulação de cores e opacidade
- Responsividade com `windowResized()`

## 🎯 Funcionalidades Principais

### Rastreamento de Olhos
A função `drawEye()` calcula o ângulo entre a posição da íris e o cursor:
```javascript
let angle = atan2(mouseY - eyeY, mouseX - eyeX);
let distance = 6;
let irisX = eyeX + cos(angle) * distance;
let irisY = eyeY + sin(angle) * distance;
```

### Cores da Obra Original
- **Tez**: RGB(220, 185, 150)
- **Cabelo**: RGB(139, 90, 50)
- **Íris**: RGB(80, 120, 140)
- **Fundo**: RGB(245, 240, 225)

## 📝 Detalhes Técnicos

- **Canvas responsivo** que se adapta ao tamanho da tela
- **Cursor customizado** com estilo `crosshair`
- **Sombras e detalhes** para profundidade visual
- **Animação suave** dos olhos seguindo o mouse

## 🌐 Visualização

Abra `index.html` em seu navegador e mova o mouse para ver a Mona Lisa acompanhá-lo com seus olhos misteriosos!

## 📚 Referências

- [p5.js Documentation](https://p5js.org/reference/)
- [Leonardo da Vinci - Mona Lisa](https://en.wikipedia.org/wiki/Mona_Lisa)
- [Trigonometria em p5.js](https://p5js.org/examples/)

## 👩‍💻 Autor

Criado por **Anna Arend** para aprender desenvolvimento web interativo com p5.js.

---

**Divirta-se criando arte interativa!** 🎨✨