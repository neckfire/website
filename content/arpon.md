---
title: Arpon OS
date: 5 september 2021
---
go to the official page of [Arpon OS](https://nfteam.netlify.app/arpon/home.html) !
<script>
		// fonction qui redirige vers une page spécifique en fonction de l'ancre de l'URL
		function redirect() {
			// récupère l'ancre de l'URL (ce qui suit le #)
			var hash = window.location.hash;
			
			// vérifie si l'ancre est "#section1"
			if (hash === "#arpon-os") {
				// redirige vers la page spécifique
				window.location.href = "arpon/home.html";
			}
		}
		
		// appelle la fonction redirect lorsque la page est chargée
		window.onload = redirect;
	</script>