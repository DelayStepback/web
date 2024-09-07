'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ffce59c7dd09c44e7640cca30d22079f",
"version.json": "4a70af3977a3e956a478082fa2b654e0",
"index.html": "d187563ce5989b20cfe83d8f51fa63d0",
"/": "d187563ce5989b20cfe83d8f51fa63d0",
"main.dart.js": "a65821771e94fed4fcbdba86438667cc",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "aa4414adb8053dc03a6dc10fd6f367d4",
".git/ORIG_HEAD": "ae57c19babafd5e50e944a2c55f577bf",
".git/config": "4d306652a33dc1e4c43c47bf91bc0f2c",
".git/objects/0d/987a39a5f40b5f90db38a71f588bd94683a98a": "cceb25b403c576f15ca018915d0a9118",
".git/objects/0c/ba2a1b8511c08a5ef44bf4b148eef1af11f36f": "6d76417776502fd2c43d3ffb79a6c162",
".git/objects/68/23caec78a93acb93bf96fffe1686ea2efd2bf4": "842085b92f2d907eb42e6d78458aceaa",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/35/a90641a0f43dc51ac6672520400159562d0433": "a3f4d7f1dbc3004e44957cd59927df88",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/02/b9079443c07eb23e587118b78fcaba9e330168": "015ef5e227a57de2ad22edf5fe29d136",
".git/objects/a3/0df70784c485d78fd0259a876e84319b000451": "fabd86a538c48da1f8c16761087b0dbf",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b2/eb95b874f79612d887f9e8ed4e347c83bbbd6d": "673db1a895b1ceb6eae07044831333ea",
".git/objects/ad/1615243d6748d4e94feb6a1567d279b22c2f3e": "adcb45bc06ab48514656abf75ba37ca3",
".git/objects/ad/76abf9b4afb02c87ee2ac53e19addf2d408e0f": "99e1d62e35b144c0600431b9aa43f003",
".git/objects/ad/846300d9debc6ce3a31eb333177ff97a25529a": "fa8c7e0ed5ea8d5a622ad14b98651ace",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/1f2cc0322fabc1ce069c09293f0913c00b9b1e": "614236bc1c951c0c87d43d6ebb6f3697",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/bd/88f66c3fe3de3e7e414eb27c7c0f649032f202": "da2335196e957d2ebc9ca5c612000019",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d1be1195aeef8d64374e961f29ac26b7da2c75": "6f58888399885605c63cae31e579b85a",
".git/objects/bc/7c46bd6c9832b237d26eab22976f8c277d9f39": "8fe419b6efecd302fcacc246fa3aa012",
".git/objects/e5/0e8809da4b26e541ca8c1f2f2326ed1c107eaa": "d8fb1436a797a493c5d69ef849a4ff2f",
".git/objects/f4/295f8549dc51d2184fc0008222d820c88b85af": "6585c5c7036c20cb291423e82dd28181",
".git/objects/f3/3aa34d12a33f0f1fa3f7dc0b63d081a00b5b3f": "006943c3b5ea68e286ebb4c9665e1223",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/a85c25609c04f836236bb8d2775271c0eb1ce4": "2b7e42e21a1f43f356310d3efee91ef6",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/fb/bf4a6519d649703cb805ec291018461d2b7e09": "d5b24986d0988dd8bcd03de3a38fa27c",
".git/objects/fb/685b05c18565903260a48b99632e80cff04a1c": "f7b19720d0c1804967c1fac4c3069c90",
".git/objects/ec/87cdc0f41fddab287496d4638b5fe7373c32ce": "5cfe6e8bb331fab556e141e33f4aa404",
".git/objects/ec/67f5f584d820aeca9610403595c512ef9dac8c": "0634ccabaceeb939bab6d6e7ee338ba6",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/ca7aa989b6908f6f1c95412132634a362119d0": "0af6435e87f82ed3deadb2dc09c73e34",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/pack/pack-3ab8154f54b3baeaa0a3035defef652ac7a91b45.pack": "c2ae6a2a9bdd5aaec21bbbd1f6196007",
".git/objects/pack/pack-3ab8154f54b3baeaa0a3035defef652ac7a91b45.idx": "fa49e933c02c69c85dc4b46d0313e760",
".git/objects/29/872f5cde1353fa7bd3cc72f2516cf6d06f6f5f": "9a3f953e24729ad17af556a0b18e025d",
".git/objects/29/0478bd825773b406c1b3d83e9dafd4a9baf395": "9414efb4e05e2310c8ac72651c8d5f4f",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1a/1e3ced30e2a352b874911000e847ef2a49f991": "e8aa641c39d22657d26661e62dc234f6",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/8a/a9afcb5edd11f99c44342aadd55f4da707f2f5": "126f42a43497b0296abcb4b1553cf71e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/d4e4f6245190c0e654c06dcc2cf5175bb60bbf": "ce114431a99edcb9b64834479d9b75a3",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/43/ffeca6d48efb30abf37268bf7cfc0bf6d3669a": "ff8e0b8ecf4c663330ffccd27fd7d3f7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/00/4cd1a022fef6c2e3d626df3d2e35c97d5fca16": "95ea5b0d9a372275f6686154df58c9fe",
".git/objects/6e/2902d92a89a7e11b2f6be852dfa85631390d40": "d76c31879b55942179c34d1f0aae40ab",
".git/objects/9a/7e459a408a606f5134acfe4f64896d5d551b24": "6b56a8d996d290ae18ed6480f71e33b8",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/62/462c7ecffc04cc1303eeab50f66f77e91b3b0c": "48612d5f49b74af06f6399899033329b",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/5b/ce2c1461d147a372febeee8e5b58687074f156": "3851e5507e3063a03fb574d4a28b58cb",
".git/objects/37/d5c27519340f208a11a497d6db5eb82008955c": "597b5bc3d531aee271f9884b285d47f7",
".git/objects/01/f6883e0511927b181e8f89d7ca55a26506cc85": "7ee9a0b133582d47802d8284c84487cc",
".git/objects/52/02d63e4544ed1c220c9be22a37ae41d6af0b11": "809ac9c14c635e7f1490dcbe15dcea9a",
".git/objects/52/86301c564aed9254e80946a2837c33dfda7981": "6d16b2af744722336aa0117e581e2d3a",
".git/objects/52/93057a04b8938ad1c1ce40cb289c063c5bc7f8": "3563d55d2b58c5888806b9051a1ba017",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/55f4bb5e5cad314602c3cbd2131eec3e659c4a": "1aa2e546c4986fb42ba7f010bafd6f61",
".git/objects/b6/d2012a096c7020f00f7d671a4a23313fdd87f8": "d27d8fda540176272adb67d38745b743",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/1afa8702eb33460c2a989220383d4a4dfa283a": "580e49c0499277f53e4012cbb6b6e704",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cd/4a1f515a7b70a6aeb3cacb9365666c59960654": "ad083d39f13b3ca5caf8a66587d50624",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/84/22f807964a62e57a3c81cadf77976584f7470a": "8eba13fa9c87607dd3e6c1501cd6bc29",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/24/7c5969025ce18b6f9e469a9ee57b856011a033": "18ee92947cfc463bec114c3d68d5c63e",
".git/objects/12/af130f2cc8efbb13477a957886d6785e80015a": "78bc2bb9ffd254586212c02e6fac90eb",
".git/objects/8c/c59b851c418a8b62c34f8a8de5a68b2beeaff9": "a8acb6ce950a12bac76f53e814c6c915",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/dab80cdba2c856cae73db7ea37c1456770b5e9": "f62a63b276c9d82029fe5595d8939d12",
".git/objects/76/fbe8ac3e37d5346868fbd03f3c92c1c75239e7": "8c480617f0d264de7aa8f792f3a5e991",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/1c/ddb663d1c8914c051ce9d42e76cbb4b67c74b9": "a8137f4302d4dee2a8e1c3601bf964d0",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/8b/166fd70129e92cd84687b40b4c2f63d8f1b90c": "77d1655da71c712f1ecd5f052307ef42",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b1c20f077c8efb14005e6b8c1fe81e73",
".git/logs/refs/heads/master": "b1c20f077c8efb14005e6b8c1fe81e73",
".git/logs/refs/remotes/origin/HEAD": "f6dce514c4241b465e53d99e99363701",
".git/logs/refs/remotes/origin/master": "7a68fbc0e842c1ea316077bb0da3c42d",
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
".git/refs/heads/master": "ae57c19babafd5e50e944a2c55f577bf",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "ae57c19babafd5e50e944a2c55f577bf",
".git/index": "8441d8ed4beba5ed6ada3f4fe9243abf",
".git/packed-refs": "1fec39702978771f82b5bff134ce374c",
".git/COMMIT_EDITMSG": "eb04c11178f63e0485b8dc9359187828",
".git/FETCH_HEAD": "4f2fef905347e610c91ef3ab74434988",
"assets/AssetManifest.json": "88d98d8ffd339508c0be01be94a822f3",
"assets/NOTICES": "639f646c2f80ddffefd19ddfcb9c1305",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "d1cbe9a877629ef2aa7a97d677d0effe",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e53439342d60f929505fdaf5dbe7a338",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/new_file.riv": "86aacc145d8b86a918cccd6f297a22a7",
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
