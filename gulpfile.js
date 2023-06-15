const gulp = require("gulp");
const shell = require("gulp-shell");
const workbox = require("workbox-build");

gulp.task("hugo-build", shell.task(["hugo --minify"])); // this can change depending on which static generator you are using.

gulp.task("generate-service-worker", () => {
  return workbox.generateSW({
    cacheId: "yourCacheID",
    globDirectory: "./public", // the directory where static file is stored
    swDest: "./public/sw.js", // destination of sw.js file
    globPatterns: ["**/*.{html,css,js,jpg,png,gif,svg}"]
    navigateFallback: "/404.html", // fallback file
    globIgnores: ["**/index.xml", "**/index.json", "**/sitemap.xml", "injected/**/*", "NFTgame/**/*"],
    runtimeCaching: [
  {
    urlPattern: /\.(?:png|jpg|jpeg|gif|bmp|webp|svg)$/,
    handler: 'CacheFirst',
    options: {
      cacheName: 'images',
      expiration: {
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      },
    },
  },
  {
    urlPattern: /\.(?:js)$/,
    handler: 'CacheFirst',
    options: {
      cacheName: 'js',
      expiration: {
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      },
    },
  },
]
  });
});

gulp.task("build", gulp.series("hugo-build", "generate-service-worker"));