'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8b9585044b76d832187814d52e1d5aea",
".git/config": "29503f910342899e349e7dc0e7e00d3d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "be4485f8eb8af4bb526bd9f01e4334b6",
".git/HEAD": "ebefaeec70a0b562c585df41c9cc71ba",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5de3a7b9d050d026dc32180982e2739a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "81762517fe0867bd48bd9a78813d3ed5",
".git/logs/refs/heads/apologize": "941a9fe3bd252b487ed423a07105aca7",
".git/logs/refs/remotes/origin/apologize": "ccf15265b3194f9da48e4082535e1e37",
".git/logs/refs/remotes/origin/dependabot/npm_and_yarn/follow-redirects-1.14.8": "c2bc89d21c1c0e7a3ac509acb8594acc",
".git/logs/refs/remotes/origin/dependabot/npm_and_yarn/http-proxy-1.18.1": "d58da9d60d3b849c4f360fe9086596bf",
".git/logs/refs/remotes/origin/gh-pages": "e4924ef10f65a256eb99cc2beca97548",
".git/logs/refs/remotes/origin/master": "f3418bba6b5f0875fa1a0f33e329dd00",
".git/objects/06/964730be42727eba5c7a677aa65b34234ff18a": "832c81bf137137d79c601c6550bf346a",
".git/objects/09/08b1b6b0db3ad21a1d7c6b56129e476fb5d1f5": "9423490a63950cce9ece06c3aab5754e",
".git/objects/0d/934858c7cbd4657dac3e9dcfd0fbea3dd51768": "67d04e7f4ff51937d2d9be190602169b",
".git/objects/0f/92c32b477cd1e29beea15be6459c19dba698f0": "eb235ef920579dee16a7bc35ea1a0dea",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/13/626a42668b5bcc6dfba021932d58e05f71b69a": "7becc16019fd16c97da07207fb8de506",
".git/objects/13/e60bd4535f0b4a76d138237006ea90882537fa": "1b145071a25969006649373e69b45cf8",
".git/objects/17/4979d93eb9b92e9c9b71b50e69d84535ff7ebc": "a369de510f878fe35be44233d19b4db9",
".git/objects/18/613386fcad0ea8a0eb1d924c1e559deeda2162": "aa8bb2b465420be1b9ee8ecb112d1953",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/e3ca7ecf02ccd55602b3b025043a2fda38f5e6": "9e3e6b4a4e1640433f80d3b77252af31",
".git/objects/1f/40b4b4844d9ca64897086c18ca596dd0f19d9b": "2cd8c0959aa9e1262a95143fea2d40d8",
".git/objects/1f/f560d7891340736d430ee52ad65b2abf25ff4d": "3ec6071a4b55d388525bc82d142c0c6f",
".git/objects/21/37c3e554594b8dd949386b062f6eb45c3699a3": "7dee6ad7918ae5c04b48ccb2318a973a",
".git/objects/26/4b4871bb039a8408330e8e70cd9a434a08588d": "f8b63725a7beed3de9c197436d5d7f2a",
".git/objects/27/4f5c02508358751dd1456629cd14cd9a20d01d": "d4e1519dba91e437fa8d3f6d958c0777",
".git/objects/29/ecf9912a623b5ba8d6db1ab99f81160eb07fb9": "71916df48ced52abc70200352d4a3904",
".git/objects/29/ffc31c7215a9cf840f417fcea46bf48638ebe5": "a030ba819a2b416a99d0d018825b11b1",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2c/4bed54113a7cb46f766d1c36b5f41fb5657e3e": "9896f6171e5c0d93820da795f569663c",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2f/af7277968a4585a9a6da07f505a039b75890e5": "197d40d5bce91ddb7f5f3cd888236afa",
".git/objects/38/f43f335de59d27045b67b7fdea94a4b6efe557": "2130f5593a949c6fcd80def1aac2caff",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/24af29b9fc6a26f4ca74b1129836cf0dc9a43d": "015a92ef04e629334d5f0118a8cc0874",
".git/objects/40/34bc4b4865c451c384b93dce82c105598ca91a": "b979fca1edde08e15d833757542b2960",
".git/objects/43/beea3455f741fa403d453d8703794f5a0d3262": "68356a45f58b43b737e353ef222dfc92",
".git/objects/48/56247ebd0c85f2d7e29329698bb9029549dc65": "d8a3629e55d26b2e755da8d2b3732a03",
".git/objects/49/4c129c194565a4f94a40b6a0e43c902c17df78": "31b11f3d5d51bc2d7ab57b63af9e7916",
".git/objects/4c/b5e450df8796439e4aaf6617ac6238adb7cef7": "e434a6e96dc5906dc025f67dd05f3a71",
".git/objects/55/7d8836fbe8c40cfcffbc95f418124106f54c4a": "678f7ddc020a916586ae1a54e43244a6",
".git/objects/5a/11e3d7f95887378ba64f11a6e4c687a1ff60c5": "0e31d6a6b4e2dacabc22d8a4a1aa69b1",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/66/0f9c43b8968b18c3163b1cd0eaee8e1e8ebf05": "32c94ae31da3911adec35fa8e7da5bc6",
".git/objects/67/26fa6f9d50349be13114dfbe699dd018aa90fd": "6f21310d0e88239deb9661fd2465ec79",
".git/objects/71/7bcef0cd1411d7fcdd55ce5e570b9ec7e9076a": "4d1f6629bc298a694dff2e57e3d18e53",
".git/objects/75/5b8cdbd3737981c2e3de95216030e6789550ae": "6bb633c0058e4321929d0309b1608ec8",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7e/ce4733eae5fd2d3737e0da8d90de8835207ac1": "cb699b23c2e1b1123ee4a2876ece50d9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/1588f24fbc4b40de0c76baa11df97cfb3655ef": "73669f889442e87753ce0ad75afb8678",
".git/objects/8e/b2201b80ab1c1053fcb751e255fdd466836f5e": "6b9b0bc2f040c724e50f10a6b163ce0e",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/57112b3e77d7e05cc8e5148d84629607481018": "0846d0ccc7b4ab1291ec2a574cc2b39b",
".git/objects/9f/053a468da6391da9d915ebc0664736963fcdc4": "62edd613c57b193065ad71c8a34047ea",
".git/objects/9f/9f9fed83c7ca30bcc086b2a81a585681a8b088": "2ba763bf40110bd9f5ac736308a30b2b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/3046f3dd01c568c8e4ca6e131974e3e242be8f": "daca3d58557ed84f165f8daa054c4864",
".git/objects/a5/70fc2e108b755de3039db529adbdbb674759fd": "0dee0a731028ec7d7427e6f34e552c57",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b2/4e95b247b82d34488c8b5991574e0f4ccfa2aa": "cec860f521cc7086b080d1d6b5dd951e",
".git/objects/b5/97b23ce19140d378a02dc2858659ba49a7f3fd": "d66ecab1c049d3a14a69a9d6174322d9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/ee20c0418a37160f034965393688af3ff9712b": "2b5f58cc28f0354061d36825c0b12f54",
".git/objects/c5/8d3bc5dcb1c2e060b9a9b18a94ed3a6b65a4e2": "8f30e272bcff739410fbf2c57e85c584",
".git/objects/c7/d74558de6454f0f5f095cbde5967aa9a7ac00d": "5d5f54bf01e6a4eeeab5f06770d9b7ae",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/b72235b6463867d9f96983500d4a5899e126d5": "c5451f83ad676447329a5c1aa33773a1",
".git/objects/d4/89cd0cd6ca4a469bc9138a8126dd648296fb6f": "6f20eb0a41c84702998131a802f62531",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/f15e544da73402150bf0e498054c5a17896af9": "8427e44315572a8c56535010d391cc92",
".git/objects/da/7ec64c2266a73ac0a10c7baa743ba89b9cb119": "f455da27a061c7d4eab947da5edeac70",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/a2361ac2cc497da5490a10b3d6c8b9140db438": "b7b3681391af05cbdb37b5f10eb06ab6",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/797dd2d099d2b032b0c21aec24a907a67626d6": "ca8f84960e627030d8b0bac637bb5ee5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/b816adc81b1d0c1ea6085c8892a2b7a2835061": "70a206da2b841d4a49837a862cca167f",
".git/objects/ea/684fcb56512e899454f46c9d76515ad8d7c45d": "ca1b1aa0cd826ff6755ca06f7abc8368",
".git/objects/ea/e8bc527216e9129cf17d86e615980ecc84a0aa": "0883756b7ca197c3e27e8abc58b0b6c0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/8b0f7a10be861b70bd3de4f7253977ced424b8": "05244a80ed6b714b108669e7da665d3d",
".git/objects/fb/e9ba38d97df61b0c7a0a9071285a1446371b08": "116e94ae6b6887c444c206b2b4a5300d",
".git/objects/pack/pack-b67012fb91445532c08f066c502fee04c2ed22fb.idx": "0b867aa8ac0a90242d181bf49fb1fbbc",
".git/objects/pack/pack-b67012fb91445532c08f066c502fee04c2ed22fb.pack": "a120a4f09894517d2315c4f4f3b31252",
".git/ORIG_HEAD": "354201544ac6e06ffa315de6d2eba20a",
".git/refs/heads/apologize": "6f9e91fd4aad89124bacbc11e05d34e7",
".git/refs/remotes/origin/apologize": "6f9e91fd4aad89124bacbc11e05d34e7",
".git/refs/remotes/origin/dependabot/npm_and_yarn/follow-redirects-1.14.8": "2b5250f923cb6012bd463797f240dcd9",
".git/refs/remotes/origin/dependabot/npm_and_yarn/http-proxy-1.18.1": "a799b79ffded5a5bf60ac959eca89135",
".git/refs/remotes/origin/gh-pages": "38282dfe154efb176e897cf0ea4c94ba",
".git/refs/remotes/origin/master": "d977849d30802f4bf5ae4bb4287e4394",
"assets/AssetManifest.json": "7d33dcff7a08f8306e2ce8de75f877bf",
"assets/assets/audio.mp3": "eb621a2aa1d12c76c012aca8c09cbd1c",
"assets/assets/fonts/Anton-Regular.ttf": "055c4df4e2f8c7a4d4675cdd8fa68da0",
"assets/assets/images/background.gif": "90fb5876f3af62834af7a0be233d361f",
"assets/assets/images/background.jpg": "cab07574ba075c0c7f6833beb6396e3f",
"assets/assets/images/background2.jpg": "d03ce8f38810edef23f5af97cf9b37f6",
"assets/assets/images/background3.jpg": "52286872d923385ff2259fcc5e888796",
"assets/FontManifest.json": "4f454fcfd4b9ab426f0c12441ebda305",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "e5b66d8bf026c0bd77654fb19e7e0705",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e70253bf35e1009a1fa4ddb21e0103d9",
"/": "e70253bf35e1009a1fa4ddb21e0103d9",
"main.dart.js": "51dc80038da81627343183bad8aef337",
"manifest.json": "181c97fa991c7692dc7147b5bc96d33a",
"version.json": "e1694dc080818c10347a1c6442c9bf35"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
