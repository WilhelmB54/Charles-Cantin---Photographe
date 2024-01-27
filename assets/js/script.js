document.addEventListener("DOMContentLoaded", function () {
  const categoryLinks = document.querySelectorAll(".category-link");
  const imageContainer = document.querySelector(".image-container");

  // Masquer tous les liens de catégorie au chargement initial
  categoryLinks.forEach((link) => {
    link.style.display = "none";
  });

  categoryLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const category = link.getAttribute("data-category");
      loadImages(category);
    });
  });

  function loadImages(category) {
    // Exemples de noms d'images pour chaque catégorie
    const imageNames = getImageNames(category);

    if (imageNames.length === 0) {
      // Aucune image trouvée pour cette catégorie
      imageContainer.innerHTML =
        "<p>Aucune image disponible pour cette catégorie.</p>";
    } else {
      // Afficher les images
      imageContainer.innerHTML = "";
      imageNames.slice(0, 2).forEach((imageName) => {
        const img = document.createElement("img");
        img.src = `assets/img/${category}/${imageName}`;
        img.alt = category + " " + imageName.replace(".jpg", "");
        imageContainer.appendChild(img);
      });
    }
  }

  // Fonction pour récupérer les noms d'images pour une catégorie donnée
  function getImageNames(category) {
    switch (category) {
      case "mariage":
        return ["mariage1.jpg", "mariage2.jpg"];
      case "grossesse":
        return ["grossesse1.jpg", "grossesse2.jpg"];
      case "bebe":
        return ["bebe1.jpg", "bebe2.jpg"];
      case "famille":
        return ["famille1.jpg", "famille2.jpg"];
      case "bapteme":
        return ["bapteme1.jpg", "bapteme2.jpg"];
      case "couple":
        return ["couple1.jpg", "couple2.jpg"];
      default:
        return [];
    }
  }

  // Afficher les liens de catégorie après le chargement de la page
  categoryLinks.forEach((link) => {
    link.style.display = "inline-block";
  });
});
