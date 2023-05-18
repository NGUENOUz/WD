var sparkle = document.querySelector('.sparkle');

document.addEventListener('mousemove', function(e) {
  // Positionner l'étincelle à la position de la souris
  sparkle.style.top = e.pageY + 'px';
  sparkle.style.left = e.pageX + 'px';

  // Ajouter la classe "active" pour activer l'effet d'étincelle
  sparkle.classList.add('active');

  // Supprimer la classe "active" après une courte période pour désactiver l'effet d'étincelle
  setTimeout(function() {
    sparkle.classList.remove('active');
  }, 500);
});