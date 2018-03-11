---
title: Lightbulb SVG with Anime.js
date: 2018-03-10 14:18:30
seo_title: Lightbulb SVG animation with Anime.js
subtitle: Experimenting with using the Animejs library to animate SVG
tags: [Animation, SVG, Anime.js]
description: Experimenting with using the Animejs library to animate SVG
icon: http://res.cloudinary.com/duua3lsu1/image/upload/v1520708774/blog/lightbulbthumbnail.png
custom_stylesheet: /assets/lightbulb/styles.css
---

<svg version="1.1" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" id="lightbulb"><g><circle cx="251.45" cy="248.55" r="237.45" fill="#00001a" stroke="#e1e1c4" stroke-width=".10993" id="blue_disc" /></g><g transform="translate(0 -164.71)" fill="none" stroke="#e1e1c4"><g stroke-width="5"><path id="socketLeft" class="socket" d="m250.21 580.62h-37.5l-15-15v-11.25h48.75v-3.75h-48.75v-7.5h48.75v-3.75h-48.75v-7.5h48.75v-3.75h-48.75v-7.5h52.5"/><path id="socketRight" class="socket" d="m250.21 580.62h37.5l15-15v-11.25h-48.75v-3.75h48.75v-7.5h-48.75v-3.75h48.75v-7.5h-48.75v-3.75h48.75v-7.5h-52.5"/></g><path id="shell" class="pulse" d="m 199.70978,520.62194 -17.75001,-60.9346 c -42.01412,-31.30467 -58.82744,-84.92051 -42.29441,-133.41511 16.53304,-48.4946 62.59621,-80.67425 113.81847,-79.51338 51.22226,1.16087 95.78028,35.3943 110.09937,84.58811 14.3191,49.19381 -4.90594,101.99289 -46.68848,129.86868 l -16.18494,59.4063" stroke-width="10.5" /><path id="shell_fill" class="pulse" d="m 199.70978,520.62194 -17.75001,-60.9346 c -42.01412,-31.30467 -58.82744,-84.92051 -42.29441,-133.41511 16.53304,-48.4946 62.59621,-80.67425 113.81847,-79.51338 51.22226,1.16087 95.78028,35.3943 110.09937,84.58811 14.3191,49.19381 -4.90594,101.99289 -46.68848,129.86868 l -16.18494,59.4063" fill="#eeecb9ff" stroke-width="0" opacity="0"/></g><path id="filament" d="m 226.33846,351.05699 c 0,0 -27.66451,-117.53958 -28.25368,-129.5184 C 197.49561,209.55977 200.21669,191.03295 211,191.5 c 10.78331,0.46705 4.49346,30.08882 11,30.25 6.50654,0.16118 2.99807,-31.49386 9.25,-31.25 6.25193,0.24386 3.77406,31.12217 9.75,31.25 5.97594,0.12783 2.79633,-31.16331 8.75,-31 5.95367,0.16331 4.58157,29.81461 10.5,30 5.91843,0.18539 4.34669,-29.46674 10,-29.25 5.65331,0.21674 3.08333,28.1782 8.5,28.25 5.41667,0.0718 4.28258,-27.3066 14.5,-27.5 10.21663,-0.19339 10.39026,17.1893 9.33478,29.78859 -1.05548,12.59929 -29.875,130.375 -29.875,130.375" fill="none" stroke="#e1e1c4" stroke-width="5"/></svg>

<button id="restart">Restart</button>  


A simple SVG animation built on an Anime.js timeline.  

The restart button above fires the restart() method on the timeline, to replay the animation from the beginning.


  <!-- AnimeJS from CDN -->
  <script src="https://cdn.jsdelivr.net/npm/animejs@2.2.0/anime.min.js"></script>
  <!-- Custom Scripts to handle animation -->
  <script src="/assets/lightbulb/scripts.js"></script>
