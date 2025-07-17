'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6c17eb80c4f09402cf1a2a711c32d7ca",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "80b7f3c2a7bb29c643595523dbc0fc2e",
"/": "80b7f3c2a7bb29c643595523dbc0fc2e",
"main.dart.js": "bf32718924852924328fe5abd565bacd",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "fb2ae2e673c8f2e744126d158f9fc685",
"assets/NOTICES": "4c9d1e4c7dc4dade4a157f17c7f555db",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "01036f53912fe4ab2b26cb1e438275e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "904b6c1c5560d2dfe5d7a69ad0e2491a",
"assets/fonts/MaterialIcons-Regular.otf": "fdf246ebd2ecef0ea1d7a9beabaaa1ed",
"assets/assets/me.png": "55e1f6f28987606d0a2862a0a9143696",
"assets/assets/pisa.png": "20517f8fa9b6faae8f3ad27a5870e881",
"assets/assets/phone.webp": "5c0a9ed1b590db2c31768a469e209935",
"assets/assets/bits.png": "157238df0278b82bfc374c1fc4f81de7",
"assets/assets/image0.jpeg": "cdeb608b46ca9f2a2e3b032eaff363b6",
"assets/assets/poster-image.jpeg": "92be2efb938535381416bdbf275fbc68",
"assets/assets/translatorarch.jpeg": "415e05a964c58264024c5cb87188aeea",
"assets/assets/terminal-arcade.png": "3018ea9dd3af511e57bbb57c93573c7f",
"assets/assets/some2.jpeg": "c587be092e2200926b9e378759f00125",
"assets/assets/awsarch.jpeg": "ec1009f25307f1e1c6e03c1d25921e5d",
"assets/assets/bitshousehelp.png": "6649d674de93269544c1405a9621c5d4",
"assets/assets/transparent-logos.png": "8fd62517ef32282dab5d56af61b402f1",
"assets/assets/image1.jpeg": "92be2efb938535381416bdbf275fbc68",
"assets/assets/flutter.png": "03f657fa5521bd7308643a5598491608",
"assets/assets/phonescreen2.png": "a85cdb555c7dc296da9f5d801ba136f5",
"assets/assets/gmaillogo.webp": "3334cfa43969d4f91827e3e5fe9b6bb9",
"assets/assets/lex.png": "cd26430f32c38f755d509bc4efc659b1",
"assets/assets/some5.jpeg": "e553f37b6a868e8f4f6bc0a21287fda3",
"assets/assets/phonescreen1.png": "114505ef2ad12315004cbf0ae6aa542a",
"assets/assets/image6.jpeg": "ca9a6b1a354365e0920917125cfe5ccd",
"assets/assets/acmw.png": "cf205256947b1f5d1eafe92214b823ba",
"assets/assets/image7.jpeg": "1478d710baabb993a6ece01fa8f0e312",
"assets/assets/user.png": "ec565a2a2152d221fcc08c8aada59bd5",
"assets/assets/jellyfish3.png": "ad05bab4bfc572ede26b300da719d3d4",
"assets/assets/crux.png": "c60debc47add39b120c2386a65afe34c",
"assets/assets/some4.jpeg": "631b7f1e0371022db02c380e2e9e07bb",
"assets/assets/bits-fest-app.png": "adda54f5d9b21c80a953c0e016451f8a",
"assets/assets/logos.jpeg": "ebf27a3b2564a18ca7966bb97453aa4d",
"assets/assets/earth.png": "ccb3c051f1a9bae13b8e137387c8c459",
"assets/assets/linkedinlogo.webp": "ef9b9c05b778bdca7d37d6b19cfb2472",
"assets/assets/image4.jpeg": "74b040ed2bfe63ee51fe8dc895d5afa0",
"assets/assets/click.png": "bc467c0df33cb8f4b7903142998538c0",
"assets/assets/ellipse1.png": "2eb05c6e97e98e3813d3237664121b54",
"assets/assets/animals/picture7.jpeg": "194d16c2e66c32b9e216bc94ede0780b",
"assets/assets/animals/picture11.jpeg": "4348240231a23c3609594282643ac8e2",
"assets/assets/animals/picture10.jpeg": "fb2d8dd48ecb16d3f4718720d0cb2e49",
"assets/assets/animals/picture6.jpeg": "785759d471277a55193c3788069173f1",
"assets/assets/animals/picture1.jpeg": "0b99d72ad92a7cc6ff2104f088d8dbf8",
"assets/assets/animals/picture0.jpeg": "c18b74e8b3b7fc0128ea8d3d7bb98e98",
"assets/assets/animals/picture3.jpeg": "618b75f87f1679b756eb4b6a43da6112",
"assets/assets/animals/picture2.jpeg": "318861fd274892cd8f6e8cc3ddd6bd0b",
"assets/assets/animals/picture5.jpeg": "84953a97724cb23b8f1d95682bc869e8",
"assets/assets/animals/picture9.jpeg": "6976264fc349d2201e92acd70e1e4359",
"assets/assets/animals/picture8.jpeg": "d9fd5258cfef609846de45032fd67592",
"assets/assets/animals/picture4.jpeg": "26d7e0724fa1fdf3dee9b41d11d4e41d",
"assets/assets/frog.png": "052931300cda2d4f5b06c7dd61cba187",
"assets/assets/image5.jpeg": "b9903849a2334852bfaa2f883a1cebf2",
"assets/assets/linkedin.png": "b56c4c9c0c8ff12ce97bff535d8d2cb3",
"assets/assets/new_pipeline.png": "f80018d6269805168e79f3c7953bd61a",
"assets/assets/clickmore.png": "87e6b043082ecc9b9258438e5ea8ac28",
"assets/assets/ellipse2.png": "09167258167c78f5771f33641ae20bfc",
"assets/assets/leaningtower.png": "0861e2ad350c44569028e5934d6ec36a",
"assets/assets/productlogo.png": "58ca1e5ce0779f729b4efa67794e0215",
"assets/assets/image2.jpeg": "7114a14079fea62d161dd0c719c5c2a9",
"assets/assets/snapsorter.png": "2ab1db01e87f43a682198e62d94f5978",
"assets/assets/clickme.png": "1347eaac935b0c6c555a784fead9a49f",
"assets/assets/some1.jpeg": "a30473ffff51cfd6d428b137e3ec6284",
"assets/assets/image2.JPG": "1082f0bab12d316d4b928503b260638d",
"assets/assets/image3.jpeg": "68b0a4980452728bdd654fd22caa6ffb",
"assets/assets/backendsys.png": "59e2312ecf803191f3ddbb39722a2546",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
