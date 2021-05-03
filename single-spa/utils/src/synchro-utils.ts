// Qualquer função aqui no utils estará disponível para
// qualquer aplicação/parcel dos micro frontends

// Dispara um CustomEvent com um payload
export function emitEvent(name, data) {
  dispatchEvent(
    new CustomEvent(name, {
      detail: data,
    })
  );
}

// Gera um listener de eventos
export function listenEvent(name, cb) {
  window.addEventListener(name, cb);
}
