---
title: drone
date: "18 july 2021"
---
Quelques clichés par [thefroger](https://nfteam.netlify.app/team/#thefroger)
- pic du lisieux
<div class="container">
  <div id="player-wrapper" class="{{ .Get 1 }}"></div>
</div>

<script 
  type="text/javascript" 
  src="https://cdn.jsdelivr.net/npm/@clappr/player@latest/dist/clappr.min.js"
>
</script>

<script>
  var playerElement = document.getElementById("player-wrapper");

  var player = new Clappr.Player({
    source: "./md.mp4",
    mute: true,
    height: 360,
    width: 640
  });

  player.attachTo(playerElement);  
</script>
