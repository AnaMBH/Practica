/* FONDOS DE COLORES PELICULAS CUADRICULAS */
document.addEventListener("DOMContentLoaded", function () {
    
    const items = document.querySelectorAll(".grid-item");

    items.forEach((item) => {
        const text = item.querySelector(".text");
        const score = item.querySelector(".score");

        // Cambiar fondo de '.text' según el texto
        if (text.textContent.includes("Action")) {
            text.style.backgroundColor = "red"; // Fondo rojo para "Action"
        } else if (text.textContent.includes("Animation")) {
            text.style.backgroundColor = "blue"; // Fondo azul para "Animation"
        } else if (text.textContent.includes("Fiction")) {
            text.style.backgroundColor = "Green"; // Fondo verde para "Fiction"
        } else if (text.textContent.includes("Thriller")) {
            text.style.backgroundColor = "gray"; // Fondo gris para "Thriller"
        } else if (text.textContent.includes("Fantasy")) {
            text.style.backgroundColor = "purple"; // Fondo morado para "Fantasy"
        } else if (text.textContent.includes("Drama")) {
            text.style.backgroundColor = "Chocolate"; // Fondo naranja para "Drama"    
        } else if (text.textContent.includes("Adventure")) {
            text.style.backgroundColor = "Darkgoldenrod"; // Fondo dorado para "Adventure"    
        } else if (text.textContent.includes("Comedy")) {
            text.style.backgroundColor = "#FFC107"; // Fondo amarillo para "Comedy"    
        } else if (text.textContent.includes("Terror")) {
            text.style.backgroundColor = "Darkred"; // Fondo rojo oscuro para "terror"
        }    

        // Cambiar fondo de '.score' según la puntuación
        const scoreValue = parseFloat(score.textContent);
        if (!isNaN(scoreValue)) {
            if (scoreValue >= 7) {
                score.style.backgroundColor = "mediumseagreen"; // Fondo verde si la puntuación es mayor o igual a 7
            } else if (scoreValue >= 5) {
                score.style.backgroundColor = "orange"; // Fondo naranja si la puntuación es mayor o igual a 5
            } else {
                score.style.backgroundColor = "red"; // Fondo rojo si la puntuación es menor a 5
            }
        } else {
            score.style.backgroundColor = "blue"; // Fondo azul si no se indica puntuación
        }
    });
});

// BOTÓN

document.getElementById('toggle-button').addEventListener('click', function () {
    const gridSection = document.querySelector('.grid');
    const listSection = document.querySelector('.list');

    // Verificamos si la sección "list" está visible
    if (listSection.style.display === 'none' || listSection.style.display === '') {
        // Muestra la sección "list" y oculta "grid"
        listSection.style.display = 'grid';
        gridSection.style.display = 'none';
    } else {
        // Muestra la sección "grid" y oculta "list"
        listSection.style.display = 'none';
        gridSection.style.display = 'grid';
    }
});

        // Lista oculta en el botón 

document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".list-item");

    listItems.forEach((item) => {
        const genre = item.querySelector(".genre");
        const rating = item.querySelector(".rating");

        // Cambiar fondo de '.genre' según el texto
        if (genre.textContent.includes("Action")) {
            genre.style.backgroundColor = "red"; // Fondo rojo para "Action"
        } else if (genre.textContent.includes("Animation")) {
            genre.style.backgroundColor = "blue"; // Fondo azul para "Animation"
        } else if (genre.textContent.includes("Fiction")) {
            genre.style.backgroundColor = "green"; // Fondo verde para "Fiction"
        } else if (genre.textContent.includes("Thriller")) {
            genre.style.backgroundColor = "gray"; // Fondo gris para "Thriller"
        } else if (genre.textContent.includes("Fantasy")) {
            genre.style.backgroundColor = "purple"; // Fondo morado para "Fantasy"
        } else if (genre.textContent.includes("Drama")) {
            genre.style.backgroundColor = "Chocolate"; // Fondo naranja para "Drama"    
        } else if (genre.textContent.includes("Adventure")) {
            genre.style.backgroundColor = "Darkgoldenrod"; // Fondo dorado para "Adventure"    
        } else if (genre.textContent.includes("Comedy")) {
            genre.style.backgroundColor = "#FFC107"; // Fondo amarillo para "Comedy"    
        } else if (genre.textContent.includes("Terror")) {
            genre.style.backgroundColor = "Darkred"; // Fondo rojo oscuro para "terror"
        }

        // Cambiar fondo de '.rating' según la puntuación
        const ratingValue = parseFloat(rating.textContent);
        if (!isNaN(ratingValue)) {
            if (ratingValue >= 7) {
                rating.style.backgroundColor = "green"; // Fondo verde si la puntuación es mayor o igual a 7
            } else if (ratingValue >= 5) {
                rating.style.backgroundColor = "orange"; // Fondo naranja si la puntuación es mayor o igual a 5
            } else {
                rating.style.backgroundColor = "red"; // Fondo rojo si la puntuación es menor a 5
            }
        } else {
            rating.style.backgroundColor = "blue"; // Fondo azul si no se indica puntuación
        }    
    });
});

// BUSCADOR

const searchContent = document.querySelector(".search_cont"); // Contenedor del buscador
const inputBox = searchContent.querySelector("input"); // Caja de texto donde el usuario escribe
const icon = searchContent.querySelector(".icon"); // Icono de búsqueda

// Función para buscar películas
function searchMovies() {
    const userInput = inputBox.value.toLowerCase().trim(); 
    const movies = document.querySelectorAll(".list-item"); // Seleccionar todas las películas
    let found = false; // Variable para saber si encontramos una película

    movies.forEach((movie) => {
        const title = movie.querySelector(".heading").textContent.toLowerCase(); 

        if (title.includes(userInput)) {
            found = true; 

            const movieTitle = movie.querySelector(".heading").textContent;
            const movieGenre = movie.querySelector(".genre").textContent;
            const movieSinopsis = movie.querySelector(".sinopsis").textContent;
            const movieImage = movie.querySelector("img").src;

            let movieRatingElement = movie.querySelector(".rating");
            let movieRating = movieRatingElement.textContent.trim();

            // Expresión regular para detectar si el texto es un número
            const isNumeric = /^\d+(\.\d+)?$/.test(movieRating);

            if (!isNumeric) {
                movieRating = '<i class="fa-solid fa-hourglass-start" style="color: black;"></i>'; // Icono en negro solo en la nueva ventana
            }

            // Crear contenido para mostrar en una nueva ventana
            const movieDetails = `
                <html>
                <head>
                    <title>${movieTitle}</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f9f9f9;
                            margin: 0;
                            padding: 20px;
                            text-align: center;
                        }
                        .container {
                            background: #fff;
                            border-radius: 10px;
                            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                            overflow: hidden;
                        }
                        .container img {
                            width: 30%;
                            max-height: 300px;
                            object-fit: cover;
                            margin-top: 30px;
                        }
                        .details {
                            padding: 20px;
                        }
                        .details h1 {
                            font-size: 24px;
                            color: orangered;
                        }
                        .details h2 {
                            font-size: 20px;
                            color: #555;
                        }
                        .details p {
                            font-size: 16px;
                            color: #333;
                        }
                        .rating {
                            font-size: 18px;
                            color: #444;
                        }
                        button {
                            margin-top: 20px;
                            padding: 10px 20px;
                            background-color: orangered;
                            color: white;
                            border: none;
                            border-radius: 5px;
                        }
                        button:hover {
                            background-color: darkred;
                        }
                    </style>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
                </head>
                <body>
                    <div class="container">
                        <img src="${movieImage}" alt="${movieTitle}">
                        <div class="details">
                            <h1>${movieTitle}</h1>
                            <h2>Genre: ${movieGenre}</h2>
                            <p>${movieSinopsis}</p>
                            <p class="rating">Calification: ${movieRating}</p>
                            <button onclick="window.close()">Closed</button>
                        </div>
                    </div>
                </body>
                </html>
            `;

            // Abrir nueva ventana con detalles de la película
            const newWindow = window.open("", "_blank", "width=600,height=800");
            newWindow.document.write(movieDetails);
            newWindow.document.close();

            // Esperar a que la nueva ventana cargue y asegurarse de que el icono tenga el color correcto
            newWindow.onload = function () {
                const faLink = newWindow.document.createElement("link");
                faLink.rel = "stylesheet";
                faLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
                newWindow.document.head.appendChild(faLink);

                // Asegurar que el icono cambie de color tras la carga de FontAwesome
                setTimeout(() => {
                    const icon = newWindow.document.querySelector(".rating i");
                    if (icon) {
                        icon.style.color = "gray";
                    }
                }, 500);
            };
        }
    });

    if (!found) {
        alert("The film was not found. Try another title.");
    }

    inputBox.value = ""; // Limpia el campo de búsqueda
}

// Detectar cuando el usuario presiona Enter para buscar
inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        searchMovies();
    }
});


// ORDENAR TÍTULO Y AÑO 

    // Ordena el grid 

    document.addEventListener("DOMContentLoaded", function () {
        const sortLinks = document.querySelectorAll(".sort-list"); // Opciones del desplegable
        const movieContainer = document.querySelector(".grid"); // Contenedor de todas las películas
    
        sortLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault(); // Evita que la página salte
    
                // Obtener todas las películas en el grid (sin importar si están en la página actual o no)
                let movies = Array.from(movieContainer.querySelectorAll(".grid-item"));
    
                const sortType = this.textContent.trim(); // Tipo de orden seleccionado
    
                // Ordenación alfabética (A-Z o Z-A)
                if (sortType.includes("Title (A-Z)")) {
                    movies.sort((a, b) => {
                        const titleA = a.querySelector(".title").textContent.trim().toLowerCase();
                        const titleB = b.querySelector(".title").textContent.trim().toLowerCase();
                        return titleA < titleB ? -1 : 1; // Si A es antes que B, -1, de lo contrario, 1
                    });
                } else if (sortType.includes("Title (Z-A)")) {
                    movies.sort((a, b) => {
                        const titleA = a.querySelector(".title").textContent.trim().toLowerCase();
                        const titleB = b.querySelector(".title").textContent.trim().toLowerCase();
                        return titleA > titleB ? -1 : 1; // Si A es después que B, -1, de lo contrario, 1
                    });
                }
                // Ordenación por año (ascendente)
                else if (sortType.includes("Year") && this.innerHTML.includes("fa-arrow-up-long")) { // Año ascendente
                    movies.sort((a, b) =>
                        parseInt(a.querySelector(".year").textContent) - parseInt(b.querySelector(".year").textContent)
                    );
                }
                // Ordenación por año (descendente)
                else if (sortType.includes("Year") && this.innerHTML.includes("fa-arrow-down")) { // Año descendente
                    movies.sort((a, b) =>
                        parseInt(b.querySelector(".year").textContent) - parseInt(a.querySelector(".year").textContent)
                    );
                }
    
                // Limpiar el grid y volver a insertar los elementos ordenados
                movieContainer.innerHTML = "";
                movies.forEach(movie => movieContainer.appendChild(movie));
    
                // Llamamos a la función de paginación si está implementada
                paginateGrid();
            });
        });
    });
    
    function paginateGrid() {
        const itemsPerPage = 4;
        const gridItems = document.querySelectorAll(".grid-item");
        const totalPages = Math.ceil(gridItems.length / itemsPerPage);
    
        let currentPage = 1; // Página actual
    
        // Mostrar solo 4 elementos por página
        gridItems.forEach((item, index) => {
            if (index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage) {
                item.style.display = 'block'; // Mostrar solo los items correspondientes a la página
            } else {
                item.style.display = 'none'; // Ocultar los demás
            }
        });
    }
    
    
    
    



    // Ordena la lista 

document.addEventListener("DOMContentLoaded", function () {
    const sortLinks = document.querySelectorAll(".sort-list"); // Opciones del desplegable
    const movieList = document.querySelector(".search_container"); // Contenedor de las películas
    const gridItems = document.querySelectorAll(".grid-item");

    sortLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el salto de página

            

            let movies = Array.from(document.querySelectorAll(".list-item")); // Lista de películas
            const sortType = this.textContent.trim(); // Extrae el texto del enlace seleccionado

            if (sortType.includes("Title (A-Z)")) {
                movies.sort((a, b) => a.querySelector(".heading").textContent.localeCompare(b.querySelector(".heading").textContent));
            } else if (sortType.includes("Title (Z-A)")) {
                movies.sort((a, b) => b.querySelector(".heading").textContent.localeCompare(a.querySelector(".heading").textContent));
            } else if (sortType.includes("Year") && this.innerHTML.includes("fa-arrow-up-long")) { // Año ascendente
                movies.sort((a, b) => parseInt(a.querySelector(".year").textContent) - parseInt(b.querySelector(".year").textContent));
            } else if (sortType.includes("Year") && this.innerHTML.includes("fa-arrow-down")) { // Año descendente
                movies.sort((a, b) => parseInt(b.querySelector(".year").textContent) - parseInt(a.querySelector(".year").textContent));
            }

            // Actualiza la lista en el DOM
            movieList.innerHTML = ""; 
            movies.forEach(movie => movieList.appendChild(movie));
        });
    });
});



// DESPLEGABLE

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const categoryLinks = document.querySelectorAll(".category-link");

    const movies = [
        {
            image: "img/sonic.jpg",
            title: "Sonic 3: The Hedgehog",
            genre: "Action",
            description: "Sonic, Knuckles and Tails reunite to face a powerful new adversary, Shadow, a mysterious villain whose powers are unlike anything our heroes have ever encountered. With their powers surpassed in every way, Sonic Team will have to form an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
            rating: "6.1",
            year: "2024"
        },
        {
            image: "img/moana_2.jpg",
            title: "Moana 2",
            genre: "Animation",
            description: "After receiving an unexpected call from her ancestors, Vaiana must travel to the far seas of Oceania and into dangerous lost waters for an unprecedented adventure.",
            rating: "5.7",
            age: "2024"
        },
        {
            image: "img/oppenheimer.jpg",
            title: "Oppenheimer",
            genre: "Drama",
            description: "In wartime, the brilliant American physicist Julius Robert Oppenheimer, at the head of the ‘Manhattan Project’, leads nuclear tests to build the atomic bomb for his country. Shocked by its destructive power, Oppenheimer questions the moral consequences of his creation. From then on, and for the rest of his life, he would firmly oppose the use of nuclear weapons. ",
            rating: "7.4",
            age: "2025"
        },
        {
            image: "img/la_infiltrada.jpg",
            title: "La infiltrada",
            genre: "Thriller",
            description: "Based on the true story of Aranzazu Berradre Marín, a National Police agent who infiltrated ETA for 8 years. At the age of 20, she became the only woman to live with ETA leaders to dismantle a key commando. During her mission, she cut all family ties, risking her life to prevent an attack when the terrorist group declared a false truce. The story of a brave woman who changed her life to save others.",
            rating: "7.2", 
            age: "2024"
        },
        {
            image: "img/dune.jpg",
            title: "Dune: Part two",
            genre: "Fiction",
            description: "After the events of the first part on the planet Arrakis, young Paul Atreides joins the Fremen tribe and begins a spiritual and martial journey to become a messiah, while trying to avoid the horrible but inevitable future he has witnessed: a Holy War in his name, which spreads across the known universe...",
            rating: "7.7",
            age: "2024"
        },
        {
            image: "img/la_sustancia.jpg",
            title: "The substance",
            genre: "Fiction",
            description: "You, but better in every way'. That's the promise, a revolutionary product based on cell division, creating a younger, more beautiful, more perfect alter ego.",
            rating: "6.9",
            age: "2024"
        },
        {
            image: "img/deadpool_and_wolverine.jpg",
            title: "Deadpool & Wolverine",
            genre: "Action",
            description: "An apathetic Wade Wilson strives for civilian life after leaving behind his days as Deadpool, a morally flexible mercenary. But when his home world faces an existential threat, Wade must reluctantly re-clothe himself with an even more reluctant Wolverine.",
            rating: "6.7",
            age: "2024"
        },
        {
            image: "img/mufasa.jpg",
            title: "Mufasa: The lion king",
            genre: "Animation",
            description: "Rafiki, Timon and Pumba tell Kiara the story of Mufasa, her grandfather, through flashbacks. The story reveals that Mufasa was an orphaned cub until he met Taka, a kindly lion and heir to a royal line. Together, they embark on an adventure with a group of misfits in search of their destiny, facing a dangerous enemy that will test their bonds.",
            rating: "6.3",
            age: "2024"
        },
        {
            image: "img/den_of_thieves_2_pantera.jpg",
            title: "Den of thieves 2: Pantera",
            genre: "Thriller",
            description: "Donnie teams up with the Panther mob to pull off the biggest diamond heist ever seen. Meanwhile, Nick, the cop who has gone after him in the past, is broke and tired of being the hunter, so he proposes to join his gang and pull off the heist together. If this challenge succeeds, they will have pulled off the biggest heist in history.",
            rating: "5.7",
            age: "2025"
        },
        {
            image: "img/attack-on-titan.jpg",
            title: "Attack on Titan: The Last Attack",
            genre: "Animation",
            description: "Eren Yeager lives in a city that is protected by giant walls that protect its citizens from the Titans, huge creatures whose sole purpose is to devour people. However, things take an unexpected turn when two titans, the Colossal and the Battleship, break through the walls and enter the city. Eren's mother is eaten in front of him, a moment that makes him decide that he will extinguish all the titans in the world no matter what the cost.",
            rating: "7.7",
            age: "2025"
        },
        {
            image: "img/spider-man-no-way-home.jpg",
            title: "Spider-Man: No Way Home",
            genre: "Fantasy",
            description: "For the first time in Spider-Man's cinematic history, our hero, neighbour and friend is unmasked, and thus no longer able to separate his normal life from the enormous risks that come with being a superhero. When he asks Doctor Strange for help, the risks become even more dangerous, forcing him to discover what it really means to be him. Sequel to ‘Spider-Man: Far From Home’.",
            rating: "7.0",
            age: "2021"
        },
        {
            image: "img/super-mario-bros.jpg",
            title: "The Super Mario Bros. Movie",
            genre: "Animation",
            description: "While working on an underground malfunction, Brooklyn plumbers Mario and his brother Luigi travel through a mysterious pipe to a magical new world. But when the brothers get separated, Mario must embark on an epic quest to find Luigi. With the help of the local mushroom Toad and a few combat notions from the Mushroom Kingdom's warrior leader, Princess Peach, Mario discovers the power within himself.",
            rating: "6.6",
            age: "2024"
        },
        {
            image: "img/bravenewworld.jpg",
            title: "Captain America: Brave New World",
            genre: "Action",
            description: "After meeting with newly elected US President Thaddeus Ross (Harrison Ford), Sam finds himself in the middle of an international incident. He must uncover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.",
            rating: '<i class="fa-solid fa-hourglass-start"></i>',
            age: "2025"
        },
        {
            image: "img/flight_risk.jpg",
            title: "Flight Risk",
            genre: "Thriller",
            description: "A pilot (Mark Wahlberg) transports a lieutenant general (Michelle Dockery) in his small plane, who is guarding a witness (Topher Grace) who is to testify in a mob trial. As they cross the Alaskan mountains, tensions run high, as not everyone on board is who they appear to be. And at 10,000 feet there is no escape.",
            rating: '<i class="fa-solid fa-hourglass-start"></i>',
            age: "2025"
        },
        {
            image: "img/sinners.jpg",
            title: "Sinners",
            genre: "Terror",
            description: "Trying to put their troubled lives behind them, twin brothers (Jordan) return to their hometown for a fresh start, only to discover that an even greater evil is waiting to greet them.",
            rating: '<i class="fa-solid fa-hourglass-start"></i>',
            age: "2025"
        },
        {
            image: "img/mikaela.jpg",
            title: "Mikaela",
            genre: "Thriller",
            description: "On the eve of Epiphany, an unprecedented snowstorm ravages Spain. Amidst the chaos of a collapsed motorway, a group of robbers seize the opportunity to hold up an armoured car. Just a few metres away is Leo (Antonio Resines), a cop on his last legs who has nothing to lose. With the unexpected help of a young woman (Natalia Azahara), they try to prevent the gang from escaping with the loot in a chase against the clock in the middle of the storm.",
            rating: "5.1",
            age: "2025"
        },
        {
            image: "img/red_notice.jpg",
            title: "Red Notice",
            genre: "Comedy",
            description: "When Interpol sends out a 'Red Alert', it means that police departments around the world must be on the alert to catch the most wanted criminals. Alarm bells go off when a daring robbery unites the FBI's top agent (Dwayne Johnson) with two rival criminals (Gal Gadot and Ryan Reynolds). A coincidence that will cause the unpredictable to happen.",
            rating: "5.3",
            age: "2021"
        },
        {
            image: "img/aquaman.jpg",
            title: "Aquaman: And the lost kingdom",
            genre: "Adventure",
            description: "After failing to defeat Aquaman, Black Manta, driven by revenge for the death of his father, seeks to defeat him once and for all. This time, Black Manta is more powerful than ever, wielding the mythical Black Trident, which unleashes an evil force. Aquaman must form an unexpected alliance with his brother Orm, the former king of Atlantis, to save his kingdom, his family and the world from total destruction.",
            rating: "4.8",
            age: "2023"
        },
        {
            image: "img/army.jpg",
            title: "Army of the dead",
            genre: "Terror",
            description: "A group of mercenaries decide to carry out the biggest heist ever carried out in the city of Las Vegas just after an epidemic of the living dead breaks out. To do so, they will have to enter a quarantine zone, with all the risks that this entails.",
            rating: "4.9",
            age: "2021"
        },
        {
            image: "img/adu.jpg",
            title: "Adú",
            genre: "Drama",
            description: "A boy and his sister try to sneak onto a plane in Cameroon to reach Europe, while an activist fights poaching and faces family problems. At the same time, in Melilla, a group of civil guards prepare for a confrontation with sub-Saharan immigrants trying to cross the fence. Three stories intertwined by the theme of the struggle for survival, whose lives will change forever.",
            rating: "6.2",
            age: "2020"
        }
        
    ];
    
    let currentPage = 0;
    let filteredMovies = [];

    function openModal(content) {
        modal.innerHTML = content;
        modal.style.display = "block";
        modal.style.position = "fixed";
        modal.style.top = "50%";
        modal.style.left = "50%";
        modal.style.transform = "translate(-50%, -50%)";
        modal.style.backgroundColor = "white";
        modal.style.padding = "30px";
        modal.style.borderRadius = "10px";
        modal.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
        modal.style.textAlign = "center";
        modal.style.width = "600px";
        modal.style.height = "700px";
        modal.style.maxWidth = "90%";
        modal.style.display = "flex";
        modal.style.flexDirection = "column";
        modal.style.alignItems = "center";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    function renderPage() {
        if (filteredMovies.length === 0) return;
        const movie = filteredMovies[currentPage];
        openModal(`
            <div class='movie'>
                <h2 style='color: orange;'>Films in this category: ${filteredMovies.length}</h2>
                <img src="${movie.image}" alt="${movie.title}" style='width: 200px; height: 300px; border-radius: 8px;margin-bottom: 10px;'>
                <h3 style='color: orange; margin-bottom:10px;'>${movie.title}</h3>
                <p style='color: black; margin-bottom:10px; '><strong style="font-size: 18px;">Genre:</strong> ${movie.genre}</p>
                <p style='color: black; margin-bottom:10px; '><strong style="font-size: 18px;">Description:</strong> ${movie.description}</p>
                <p style='color: black; margin-bottom:10px; '><strong style="font-size: 18px;">Rating:</strong> ${movie.rating}</p>
                <button id="prev" ${currentPage === 0 ? "disabled" : ""} style="background-color: red; color: white; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px;" >Previous</button>
                <button id="next" ${currentPage === filteredMovies.length - 1 ? "disabled" : ""} style="background-color: green; color: white; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px;" >Next</button>
                <button id="close"  style="background-color: gray; color: white; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;">Closed</button>
            </div>
        `);

        document.getElementById("prev").addEventListener("click", () => {
            if (currentPage > 0) {
                currentPage--;
                renderPage();
            }
        });
        document.getElementById("next").addEventListener("click", () => {
            if (currentPage < filteredMovies.length - 1) {
                currentPage++;
                renderPage();
            }
        });
        document.getElementById("close").addEventListener("click", closeModal);
    }

    function filterMovies(category) {
        filteredMovies = movies.filter(movie => movie.genre === category);
    
        if (filteredMovies.length === 0) {
            openModal(`
                <h2 style="color: orange; margin-top: 20px; text-align: center;"'>No films found</h2>
                <button id="closeModalBtn" style="background-color: gray; color: white; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer; margin-top: 50px;">
                    Closed
                </button>
            `);
    
            // Esperar a que el modal se haya insertado en el DOM antes de asignar el evento
            setTimeout(() => {
                document.getElementById("closeModalBtn").addEventListener("click", closeModal);
            }, 0);
    
            return;
        }
    
        currentPage = 0;
        renderPage();
    }

    categoryLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            filterMovies(event.target.dataset.category);
        });
    });
});



// PASAR DE PÁGINAS

document.addEventListener("DOMContentLoaded", function () {
    // Secciones de películas
    const gridSection = document.querySelector(".grid");
    const listSection = document.querySelector(".list");
    const gridItems = document.querySelectorAll(".grid-item"); // Películas en la cuadrícula
    const listItems = document.querySelectorAll(".list-item"); // Películas en la lista

    // Botones de navegación
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");
    const pageButtons = document.querySelectorAll(".page-button"); // Botones 

    let currentPage = 1; // Página actual
    const moviesPerPage = 4; // Número de películas por página

    // Total de páginas basadas en los elementos visibles
    function calculateTotalPages(items) {
        return Math.ceil(items.length / moviesPerPage);
    }

    // Mostrar las películas de la página actual
    function showPage(page, items) {
        const totalItems = items.length;
        const startIndex = (page - 1) * moviesPerPage;
        const endIndex = startIndex + moviesPerPage;

        // Ocultar todas las películas y mostrar solo las de la página actual
        items.forEach((item, index) => {
            item.style.display = (index >= startIndex && index < endIndex) ? "block" : "none";
        });

        // Actualizar botones de paginación
        updateButtons(items);
    }

    // Actualizar los botones
    function updateButtons(items) {
        const totalPages = calculateTotalPages(items); // Calcular el total de páginas para los elementos activos

        // Resetear estilos de los botones de página y marcar la página actual en naranja
        pageButtons.forEach(button => {
            button.style.backgroundColor = "white";
            button.style.color = "black";
        });

        // Botón de la página actual
        document.getElementById(`page${currentPage}`).style.backgroundColor = "orange";
        document.getElementById(`page${currentPage}`).style.color = "black";
    }

    // Detectar qué sección está activa y mostrar sus películas
    function updatePagination() {
        if (!gridSection.classList.contains("hidden")) {
            showPage(currentPage, gridItems); // Mostrar las películas en la vista de cuadrícula
        } else {
            showPage(currentPage, listItems); // Mostrar las películas en la vista de lista
        }
    }

    // Botón para ir a la página anterior
    prevButton.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
        }
    });

    // Botón para ir a la siguiente página
    nextButton.addEventListener("click", function () {
        const items = !gridSection.classList.contains("hidden") ? gridItems : listItems;
        const totalPages = calculateTotalPages(items);
        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
        }
    });

    // Botones de número de página 
    pageButtons.forEach(button => {
        button.addEventListener("click", function () {
            currentPage = parseInt(this.textContent); 
            updatePagination();
        });
    });

    // Mostrar la primera página al cargar la página
    updatePagination();
});


