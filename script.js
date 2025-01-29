onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
window.onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

    // Esperar 3 segundos y mostrar el mensaje
    setTimeout(() => {
        document.getElementById("textContainer").style.display = "block";
    }, 3000); // 3 segundos después de iniciar la animación
};
