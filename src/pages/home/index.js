export default () => {

  const container = document.createElement('div');
  const template = `
  <header>
      <h1 class="logo">MoodMovie</h1>
      <div class="logo-background">
          <span class="logo-background-red"></span>
          <span class="logo-background-orange"></span>
          <span class="logo-background-yellow"></span>
          <span class="logo-background-green"></span>
          <span class="logo-background-royalBlue"></span>
          <span class="logo-background-blue"></span>
          <span class="logo-background-purple"></span>
          <span class="logo-background-pink"></span>
      </div>
  </header>
  <main>
          <h2 class="title-home">Me diga como se sente, que eu te direi o que assistir</h2>
          <a href="./#feeling"> <button id="start" class="btn-start">Começar</button></a>
   </main>
      <footer class="github-footer">
        <p><i class="github-icon fab fa-github-alt"></i>Desenvolvido por</p>
        <p>
        <a class="link-footer" href="https://github.com/ale-alves" target="_blank" rel="noopener noreferrer">Alessandra</a>, 
        <a class="link-footer" href="https://github.com/carinarocha" target="_blank" rel="noopener noreferrer">Carina</a>,
        <a class="link-footer" href="https://github.com/CarolineSCosta" target="_blank" rel="noopener noreferrer">Caroline</a>,
        <a class="link-footer" href="https://github.com/JuliaTerin" target="_blank" rel="noopener noreferrer">Julia</a>, 
        <a class="link-footer" href="https://github.com/julianaads" target="_blank" rel="noopener noreferrer">Juliana</a> e 
        <a class="link-footer" href="https://github.com/karinesouza" target="_blank" rel="noopener noreferrer">Karine</a>
        </p>
      </footer>
  `;
  container.innerHTML = template;

  return container
}

