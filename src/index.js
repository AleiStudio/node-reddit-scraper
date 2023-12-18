const axios = require('axios');
const fs = require('fs');

async function descargarTodasLasImagenes() {
  try {
    const subreddits = ['subreddit'];

    for (let j = 0; j < subreddits.length; j++) {
      const subreddit = subreddits[j];
      let after = null; 

      do {

        const response = await axios.get(`https://www.reddit.com/r/${subreddit}/hot.json?limit=100&after=${after}`, {
          headers: {
            'User-Agent': '<username>',
          },
        });

        const publicaciones = response.data.data.children;
        const imagenes = publicaciones
          .map(post => post.data.url) 
          .filter(url => url.match(/\.(jpg|png|gif)$/i) || response.data.data.over_18);

        const carpetaDestino = subreddit.toLowerCase();
        if (!fs.existsSync(carpetaDestino)) {
          fs.mkdirSync(carpetaDestino);
        }

        for (let i = 0; i < imagenes.length; i++) {
          const imageUrl = imagenes[i];
          const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

          const nombreArchivo = `${carpetaDestino}/imagen_${Date.now()}_${i + 1}.jpg`;

          if (!fs.existsSync(nombreArchivo)) {
            fs.writeFileSync(nombreArchivo, response.data);
            console.log(`Se ha descargado una imagen en la carpeta "${carpetaDestino}".`);
          }
        }

        after = response.data.data.after;

      } while (after !== null);

      console.log(`Se han descargado todas las imágenes de ${subreddit}.`);
    }

    console.log('Proceso completado.');

  } catch (error) {
    console.error('Error al obtener o descargar la imagen:', error.message);
  }
}

descargarTodasLasImagenes();