class Book{
    constructor(titulo, genero, autor, leer, leerFecha){
        this.title = titulo;
        this.genre = genero;
        this.author = autor;
        this.read = leer;
        this.readDate = leerFecha;
    }
    show(){
        return (`Titulo: ${this.title}<br>Género: ${this.genre}<br>Autor: ${this.author}<br>Leer: ${this.read}<br>Leer fecha: ${this.readDate},`);
    }
}

const nombreLibros = new Array("Ready Player One", "Buick 8", "Las 2 despues de media noche", "Cell");
const intBook = new Book(nombreLibros, "terror", "Stephen King", true, Date());

/*
const libroUno = new Book("Cementerio de animales", "Terror", "Stephen King", true, Date());
const libroDos = new Book("La larga marcha", "Suspenso", "Stephen King", false, Date());

document.getElementById("bookOne").innerHTML = `<h3>${libroUno.show()}</h3>`
document.getElementById("bookTwo").innerHTML = `<h3>${libroDos.show()}</h3>`
*/

class bookList extends Book{
    constructor(librosLeidos, librosNoLeidos, titulo, matLibros){
        super(titulo)
        this.numBooks = librosLeidos;
        this.numNotBooks = librosNoLeidos;
        this.arrayBook = matLibros;
    }
    show(){
        return (`Libros leidos: ${this.numBooks}
            <br>Libros no leidos: ${this.numNotBooks}
            <br>Siguiente libro por leer: ${this.title[0]}
            <br>Libro que se esta leyendo: ${this.title[3]}
            <br>Ultimo libro leido: ${this.title[1]}
            <br>Lista de libros: ${this.arrayBook}`
        );
    }
    add(){
        this.arrayBook[4]=this.title[2];
        return(this.arrayBook);
    }
    finishCurrentBook(){
        return(`Libro leido: ${this.title[3]}
            <br>Nueva fecha: ${Date()}
            <br>Siguiente libro por leer: ${this.title[1]}
            <br>Libro que se esta leyendo: ${this.title[0]}
            <br>Ultimo libro leido: ${this.title[3]}
            <br> `
        )
    }
    
}

const libros = new Array("Cementerio de mascotas", "La larga marcha", "Misery", "La tienda");
const listaLibros = new bookList(3, 5, intBook.title, libros);

document.getElementById("part1").innerHTML = `<h3>${listaLibros.show()}</h3>`
document.getElementById("part2").innerHTML = `<h3>${listaLibros.add()}</h3>`
document.getElementById("part3").innerHTML = `<h3>${listaLibros.finishCurrentBook()}</h3>`