
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./dist/servicework.js')
    .then(function(reg) {
      console.log('✅ Service Worker registrado', reg);
    })
    .catch(function(err) {
      console.error('❌ Error al registrar Service Worker', err);
    });
}
