'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ffc640659f11f432838e3af0f3e9c7ac",
"version.json": "4a70af3977a3e956a478082fa2b654e0",
"index.html": "88d7fe0c92a5a22c93bafe42e2ea7e6f",
"/": "88d7fe0c92a5a22c93bafe42e2ea7e6f",
"main.dart.js": "42aff3fb4878f72610313626ab53cb00",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "aa4414adb8053dc03a6dc10fd6f367d4",
".git/ORIG_HEAD": "e44b4015668d142456e6a53645364749",
".git/config": "a79212c4ba2d500abe0efcaf55edb075",
".git/objects/95/ad26731771dc05052d0279fefa025e4300906a": "142cb243f0960a3ef5c661ea582efddc",
".git/objects/57/355e2ce4283f3504b1da751254b02806d664f6": "c3c7e1a939f18e62b529fffb36e664f2",
".git/objects/04/92ba0d916e2e446d663a77d9c904861c7a0a34": "d295455be8a224a2384f529b27c583cd",
".git/objects/94/79f4f25e36b9c0bae893ec7b2603fc50d4a473": "96a2b30f1c7b34439d1ce0b33be3d3ac",
".git/objects/c9/c3198d6cbba11a7f9c2c1d23d0933638e45657": "55aa470998ae0f66ee6e1955bee1e10c",
".git/objects/ec/e33ffe86207037b27e84c8fa08e9a1108fa37b": "d4e180c8e701ab8601047c82c0442892",
".git/objects/4b/509432abfe55e51643626b3f83ff16a72b3b9e": "732fc416957de8a03c428bed5a6b6a9e",
".git/objects/pack/pack-c0f4a80e2b217fca381e16de89e3cacc6128f0fe.pack": "d3a91372541a88780a5f06a6cdc8de59",
".git/objects/pack/pack-c0f4a80e2b217fca381e16de89e3cacc6128f0fe.idx": "5dd594a17f96d5a3d0f20712a164018f",
".git/objects/16/b1614ee3a577c0c4c9c81d7c174e463425d201": "5ef1c6c8e91d1443e9e1247ac4ef4d30",
".git/objects/43/c792ea699b0fd2b1843d634087e06191bdc48e": "47b4853d66bc5fd852843b63be887c39",
".git/objects/91/7b7e1f2b9c26612dbaebab851e8229381bd81d": "07cbf436cc5331cd94c09626bac6aee1",
".git/objects/90/413a8ca6dc5377d08dfdc826dae27c968ba85a": "f8152d8cf023762353b7967785491393",
".git/objects/ea/29175888524e18f88cfb1585a9349249412dbb": "3f6dbed17f0d2c0c1f757843b405cf5a",
".git/objects/1b/3f947da8779d26cbf177a94d823662003f7f8b": "2913a45f5010b8f596b77cd0da6c87e5",
".git/objects/1e/d3d4da4faf0c7f19029727540d18a9e84b7701": "42527711deab6c6506575928b1853d7f",
".git/objects/84/88828e3386be05400a02374ab0a15e3b94409f": "fdea7391e9b9c43aa19574cec921fe19",
".git/objects/8b/cfc75bcff3bba7e91897f633611e3304c5798c": "c80ffa6c70bedd3145a9776ed12f4f31",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5c097374a9fa1ca079fe5dbf30d9b027",
".git/logs/refs/heads/master": "5c097374a9fa1ca079fe5dbf30d9b027",
".git/logs/refs/remotes/origin/HEAD": "bd78decbb1101b97ae59b309a8d9ec50",
".git/logs/refs/remotes/origin/master": "51bcc6993a510e760444d2004ce39a41",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "e44b4015668d142456e6a53645364749",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "e44b4015668d142456e6a53645364749",
".git/index": "7bb23831da7b0a50c23ee115a751047d",
".git/packed-refs": "8fbb15509a962d3b4c259400134cc4af",
".git/COMMIT_EDITMSG": "af5cb0facdebbeabe1f46fed12d84a88",
".git/FETCH_HEAD": "e9e88775c1e0a244385b9aac5b8878f2",
"assets/AssetManifest.json": "ea544fd314a2b7edace83dceadd41cef",
"assets/NOTICES": "c888a6304c99f779659b415a5da4fa29",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "61e9051ed201fc46b55332a6b6f13ce3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6a9bf1b5b599f72d2a434cdc64def68c",
"assets/fonts/MaterialIcons-Regular.otf": "ecb117b30efecba5cfc23231107c0dcb",
"assets/assets/new_file.riv": "86aacc145d8b86a918cccd6f297a22a7",
"assets/assets/images/avatar.png": "4320834ed7bd479785b5673f59dba907",
"assets/assets/switch.riv": "51a5f22fd19bda9ab07381bc0fba6748",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
