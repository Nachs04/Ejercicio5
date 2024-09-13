document.addEventListener('DOMContentLoaded', () => {
    const comentarios = []; // Array para almacenar los comentarios
    const formularioComentario = document.getElementById('Formulario');
    const seccionComentarios = document.getElementById('Seccion-de-Comentario');

    function mostrarComentarios() {
        seccionComentarios.innerHTML = '<h2>Comentarios</h2>';

        comentarios.forEach(comentario => {
            const divComentario = document.createElement('div');
            divComentario.style.border = '1px solid #ddd';
            divComentario.style.padding = '10px';
            divComentario.style.marginBottom = '10px';
            divComentario.style.borderRadius = '5px';

            const encabezadoComentario = document.createElement('div');
            encabezadoComentario.style.fontWeight = 'bold';
            encabezadoComentario.textContent = comentario.usuario;

            const cuerpoComentario = document.createElement('div');
            cuerpoComentario.textContent = comentario.comentario;

            divComentario.appendChild(encabezadoComentario);
            divComentario.appendChild(cuerpoComentario);

            seccionComentarios.appendChild(divComentario);
        });
    }

    formularioComentario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const usuario = document.getElementById('Usuario').value;
        const comentarioTexto = document.getElementById('Comentario').value;

        const nuevoComentario = {
            usuario: usuario,
            comentario: comentarioTexto
        };

        comentarios.push(nuevoComentario);

        mostrarComentarios();

        formularioComentario.reset();
    });
});
