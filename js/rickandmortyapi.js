function getCharacters(done) {

    const results = fetch("https://rickandmortyapi.com/api/character");
    
    
    results
        .then(response => response.json())
        .then(data => {
                done(data)
        });
    
    
    }
    
    getCharacters(data => {
    
        data.results.forEach(personaje => {
    
            const article = document.createRange().createContextualFragment(/*html*/`
            
            <article>
           
            <section class="card">
              <div class="product-image">
                <img src="${personaje.image}" alt="Imagen de Personajes" />
              </div>
              <div class="product-info">
                <h2>${personaje.name}</h2>
                <p>Genero: ${personaje.gender} - Especie: ${personaje.species}  </p>
                <div class="localizacion">Localizacion: ${personaje.location.name}</div>
              </div>
              <div class="btn">
                <button class="fav">
                  <svg class="svg" id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
                  </svg>
                </button>
              </div>
            </section>
    
    
             </article> 
             
             `
            );
    
            const main = document.querySelector("main");
    
            main.append(article);
        });
    
    
    });