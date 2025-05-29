function registrarSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./dist/servicework.js')
      .then(reg => console.log('Service Worker registrado', reg))
      .catch(err => console.error('Error al registrar el SW', err));
  }
}

registrarSW();
