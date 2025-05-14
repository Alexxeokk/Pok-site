const curiosidades = [
    {
      imagem: "imagensCuriosidades/pikachu.png",
      texto: "O Pikachu original dos primeiros jogos era mais gordinho e arredondado, refletindo um design mais 'fofinho'."
    },
    {
      imagem: "imagensCuriosidades/ditto.png",
      texto: "Ditto e Mew compartilham traços genéticos semelhantes, levando fãs a acreditar que Ditto é uma tentativa fracassada de clonar Mew."
    },
    {
      imagem: "imagensCuriosidades/cubone.png",
      texto: "Cubone usa o crânio de sua mãe falecida como capacete, tornando sua história uma das mais tristes de Pokémon."
    },
    {
      imagem: "imagensCuriosidades/pocket-monster.png",
      texto: "Pokémon vem de 'Pocket Monsters', ou 'Monstros de Bolso', representando a ideia de carregar criaturas poderosas no bolso."
    },
    {
      imagem: "imagensCuriosidades/rhydon.png",
      texto: "Rhydon foi o primeiro Pokémon criado pela equipe de desenvolvimento, antes mesmo de Pikachu ou Bulbasaur."
    },
    {
      imagem: "imagensCuriosidades/mil-pokemons.png",
      texto: "Com mais de 1000 Pokémon existentes, a franquia continua crescendo a cada geração."
    },
    {
      imagem: "imagensCuriosidades/lucrativa.png",
      texto: "Pokémon é a franquia de mídia mais lucrativa do mundo, ultrapassando Star Wars e Marvel."
    },
    {
      imagem: "imagensCuriosidades/arcanine.png",
      texto: "Arcanine era originalmente planejado para ser um Pokémon Lendário junto com Articuno, Zapdos e Moltres."
    },
    {
      imagem: "imagensCuriosidades/lavander-town.png",
      texto: "A música de Lavender Town gerou lendas urbanas assustadoras no Japão, envolvendo crianças e comportamentos estranhos."
    }
  ];
  
  function mostrarDetalhe(index) {
    const curiosidadeElement = document.querySelectorAll(".curiosidade")[index];
    
    // Verificar se a imagem já foi inserida
    if (curiosidadeElement.querySelector("img")) {
      // Se a imagem já existe, removê-la
      curiosidadeElement.querySelector("img").remove();
    } else {
      // Caso contrário, adicionar a imagem
      const imagem = document.createElement("img");
      imagem.src = curiosidades[index].imagem;
      imagem.alt = `Imagem da Curiosidade - ${curiosidades[index].texto}`;
      imagem.style.maxWidth = "300px"; // Tamanho da imagem
      imagem.style.marginTop = "15px"; // Espaço entre o texto e a imagem
      curiosidadeElement.appendChild(imagem); // Inserir a imagem no item de curiosidade
    }
  }
  