'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cf57dff3d5787c3ea8c59af4014ce926",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "6a50c63499e1051e50e643e1607c87dc",
"/": "6a50c63499e1051e50e643e1607c87dc",
"main.dart.js": "b471bbd7fd26a7ac4e887b1df34e3998",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "68d3e9dec1546a178e65da21c2053579",
".git/objects/95/b8f5ace661aaf2f4bd57c468d2e3ea5e0a4fcd": "897b184adeb19f6f514bc17491f33ce0",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/92/516c14904631ce5c32a105c134dee5c56acca3": "28dee2171697542c4593d31833173322",
".git/objects/66/2b5e634cf797f2b1b3babbc00cf357876c2b09": "7a4b44746979d5ae104ff27f5ee9e24e",
".git/objects/3e/77d8530488dc6a8c98d1e316f22aa5085ecf3c": "e9ea7686aa630548990519359795388c",
".git/objects/6f/3e793e77849f2d21772d5046dcdd7f7eb35af9": "399beb8fc065341a3e920500f599bb67",
".git/objects/6f/38de0e9ed69f4dc5e58b9fb1e8cb400b3a6c1c": "6ecf357d31d7fc4b4a49d660504b655a",
".git/objects/03/23a145cb6d5352f93c9aa845c591b223c192a9": "c77560af209703a0d53a639c24d15857",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/51/5fda21771123014dbff2f1258b74bd32240e6b": "6f9165db2085f7ca05a9f7cec6546e9c",
".git/objects/60/6fb013ca3f3f8240795e0176391c06fc5816d9": "e0c9ef34054860ed53fd771fe75960c8",
".git/objects/5f/98e24af03ecd87715988b22bd882c9a8657262": "94f770adca6a9c00208a7def0148e057",
".git/objects/a4/838c4013ce572560c6ec078a220c325174a8a2": "a93be9223569f995500d8ee37bd2872d",
".git/objects/a3/ee63c614fbce1416e56b241424357159604186": "827eb5b5d551d7aed9b4dafb75c79989",
".git/objects/ac/254e2cfacd5333167d62104a7486403c369e61": "30bae624a2740c435fe374576c8f93e6",
".git/objects/ad/7c522266a333703b456ba8ebeef2cb847c7234": "d24a98b7374a2982ff698c205cb37ec3",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/06a63a3e780134d094768864144262716c36ab": "75ef2aaffa2947fcc0f0e661694ca0b2",
".git/objects/a2/0a227f860c2649985a7be10525dab05817b42b": "caf4263aa3a367dc11e0242b534efe3d",
".git/objects/d1/a008de02c6560dd3b7a4a2518ae1d6057aa94c": "f0b2204d369d327566bf19ae75c1b4a0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/a6a56d69fa217aa5bb06bda75e5a2b88a2d94d": "1d4aa767b2f8a872c15a2d77d5c9cf3b",
".git/objects/e2/40c62d3a7bd0c55ade667fd340d8bf8c5157ce": "e69892523eabfeac6bd2413a409d06de",
".git/objects/f4/ae220c99c067dac5952c835d43c9f2751aa48c": "bd7562fa3f6243005bd5e0787ae7be72",
".git/objects/f3/a51e753da427138668a3dc6144962c12839f1b": "444739576a43e17642ba2f44c936d829",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/fc/0c0f7218e3b7c817c5a5410dade297482e06cc": "8037ea27b37774c15299993e5e32f2e1",
".git/objects/fd/a9c93f784074ebe0ef2f9f8d0516ddaf07330e": "a07e7e678f7ac9d00b94085ff53e7a6a",
".git/objects/fd/ebba48aeee1d5533df4628e0d58a03fa9a7d35": "1117ca6dad8e61a6155e54340e329256",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/84363813e91937b5f315102faca9de5ae1ac38": "8fa502ad844e2c6491a4903c6d217672",
".git/objects/e3/84dd8d2d972fbbba61b1d7b259895c1fdbda07": "db5c4a136c6cb4d3f2c6a6a6f01fae21",
".git/objects/cf/510ec0b4ad9d52bcb74f986a3321e0e4a8b6aa": "a2ccad6c44b253853ef7d7cd0812d901",
".git/objects/ca/e541c6bac9205824769231ff20968860a4b24d": "31c8af7553b45e14288b9e5b38d39008",
".git/objects/e4/5a9f8524f6558a330837508c42bb6fcf9d4e8c": "2bbe41391fa685eed96c0d7f0f8728d1",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/c8/1282042dd8e4e41476dc70c5f2d578acb09f40": "1ffc5519db6658e3919fdd1d2c395f58",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ed/04d75c4850354c928c5d7291890b28bcd4b62c": "b287a1973efd21ce7071899cd470ad1a",
".git/objects/ed/b8090b842984866dc7ccae0c88674f2be4fd64": "1013a021b172817194cfaa83a79704e2",
".git/objects/4e/7d6b49bee0b53914cae4ce1cbc3a8c667309f0": "3626055eb37ce19481f855525e2d03fc",
".git/objects/20/830c9b8cd58a7f15e98c15178ffd47697bb185": "00352b7928a83bb52657cacc469b28b5",
".git/objects/20/60c7d1e7ffef6834c35e0e530dcf055b127986": "b2d72a7737704bf4c7e7ab0177e2e06f",
".git/objects/4b/c01ea22048fdf40ed6ac96f0ae925b042a634f": "a1a4c6999dee6995916671e5194acef3",
".git/objects/29/a13781cad65f6dc2c0681c9d348f82abf646db": "24ed5c5eb0cd4495d6ce10d444ca494d",
".git/objects/7c/a9113b120419cffa3486e45b3277057b1c91b0": "8ae138260e8d0db106d4da3bef7001e3",
".git/objects/16/d5654ca41e3fb42b5e64590e2a4d05ee50926c": "c0c5c19fd9f11537ecdd10f60287065f",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/80/39e839fc9aed00c65e2db5693097c4c76da1cf": "5856801cd64d536a59ebcd3bfec29987",
".git/objects/80/81ae85ee300d9a5860728d07adf3b9f409dc50": "573159bc5fad3313d10a278294bc2e2f",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/28/ea5eea560730352debcd808aff26a8e17bb1cb": "78c535f150c2cc0bc25c3ad4274a04eb",
".git/objects/8f/695e8d7866804d0da421a7db668073ffbc048b": "30f985026f25b0db1cd4f13cc3fca522",
".git/objects/8a/f2d3700541612d26e9e8cc1c5dc2412aa693a7": "06eca9d69954220d4204bcd79f235f6b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/34cf23889a3d262fdf0139234e383125b8a65a": "01f6998993672e7e4714aec1ccbda114",
".git/objects/19/ab6c4c93213b10966f4f14be996dd135eae404": "f07220449d2b6faed307a46e86f4e3ef",
".git/objects/26/2849034b5a692319c8b82d8b8852bf23f4ae4e": "e2876b6c5b0129f8d9853f597841eafd",
".git/objects/81/da0a8176c10921c76b306a65e7fe8784e37bbc": "eeb864f9cad85a191174d2de7376884c",
".git/objects/43/f77b65b349eeb3612b08dc98f073ae199cca94": "24e67b9ddc5266f1b0c376038156acdd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/b66e334b4b2e234ef8c1de242aec907e8e20f1": "b48e802bf96b8282516f5cf462de3238",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/00/57b4b4db820e8b26d1c78dd9f0bb6bb8b22535": "db18063d4237976db2ea75a796fdb3f7",
".git/objects/36/ec5fd151592be1600eef0983dc627e70603342": "fe55bb3b6f31456d2b16016706e0e734",
".git/objects/09/daf5a08a238952a964c0c9007e008e281ff8b1": "d7e8fa07df13c91dba49773b605b5d84",
".git/objects/91/3d5ac49e71a6ce0b26e43e14b6fc0a2bdcf5c2": "3c1a3cd6d26cf214ddee15a8a09120b7",
".git/objects/65/0a894831f848468faf5a28d18512782fa61337": "3735751f88f051d1f7f126f310602e83",
".git/objects/98/cffea41ddc9593a93755e039551667a327348b": "ce99e93bc0883aba21c60c1c51012361",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/74497492e399199974f9ac8995f2608e961b58": "15312c1e1b2dc32bec63ddeba55542c0",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/30/74d8753ec88991122c06cacc922dd0cc170fac": "aee967f37bb70140616ae222e93b1b6b",
".git/objects/37/bada9df1716810cfbd1e00a4f72b64bb25e69e": "0c31348ea8fd39eb7ac2e3894a2aab91",
".git/objects/06/ca1edd1b456c89bbd9381ff78a290757d9d6c7": "fb5c6d26ad3e023a4c963d4ed7407459",
".git/objects/06/3f97cc6e0bf0b717930ff3801238afa2e73b8a": "6f249040dd9406859e92a4d76de0cb5c",
".git/objects/39/5a8e85486b9938ad2bac259caebd6e3c9cca6c": "2f6bb01703899433a8d26c2b4ca3b2e1",
".git/objects/99/d31971cd603a3278818bc6e06431f658c6edc0": "ab2537e86ed4cb0de04e9a5d93a28860",
".git/objects/55/7835772ed816ec04cbeb327328a33f4ac09c91": "825f97b29b47791b4e1bbff6fc1712bd",
".git/objects/97/aa5deb9febf7377b25db9f3a185f3da8b9ff69": "3ef61cd03766e685061772c138bef5dd",
".git/objects/0a/897392e75c8d2ea6a9ccf952f3ed102926ddfb": "3827167f02e24a2c67d0a48cdb23f806",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/d3/b00825514b84db9e410b88b7415370319d4814": "8e34cf4b4f84d3a170b8247e9402787d",
".git/objects/d3/b1828f2952f88ef5828ecafe11149a28eb3fb7": "dc6bc8742592a95856bb5619c0f6fe7a",
".git/objects/d3/596b5082019ec5d0367c50aa830efd832ae44d": "b085fc7d4875bf091338de438bfdfbb4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dd/016c359a518b45cbcd4f560c46774d4abe0a68": "8a401d619c316a0480fd3a0558f253f5",
".git/objects/dc/926675be0b2295c92746c9f7b043ab5e62c19a": "05919c495936aab389944f97166f18e4",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/d5/ccb6d1ff26ced1bc3193c370921cd16aa3bda2": "844b07987b609ae31661171ad82ce655",
".git/objects/d5/39ea6f1a8b5568d8338cd2db074257a1c8b983": "875b77dd5e64e7f752b23f52525f8a6f",
".git/objects/d5/53da0600666bd8122a227a7f7a21cc4ce65d14": "a683dee625580e490105da150f0c3bb1",
".git/objects/d2/3ae64fc1c7acb7426d7264d0273f0c12bc1c29": "3bcb6716ef130d4cd2ad76654f735f0b",
".git/objects/aa/e3eafda95ebfc1713f57f7c25fcbb7c18fa205": "0cc8438a1b0c33acd4ef591c87a4638f",
".git/objects/aa/0f42676837064ec5433b921834f4a12a1e6f76": "33cb151daefa909f6d766faf047e3c9d",
".git/objects/af/fdecf8040912060fa243a1c3af54a733368c12": "03e0481571501c55ca538fa08f2b0eb2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/b565daaca09cd6ca1fe91336dae55473fed35d": "dc1c8f19b4f776e38ea5a73f100b84d2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ef/36ec4d22407902e1b626adf58453c5db4d130a": "09702e1f12ae4842893e11408bb37081",
".git/objects/c3/cc4b0debd3f39f5f15152c17444e7d3a9388ef": "1376e7d86576ee551de5365b03003912",
".git/objects/ea/4a8730ceac2886e6b80130bea143a0c48a0942": "fdddab5be7097813dc14946bd74229f6",
".git/objects/f0/db8560a7ee9ec564c2e09071a1b93c850f9269": "044ce53f19fb02efc99020589f72ed29",
".git/objects/e9/8d032fe0ef580690785e3e552b10c0f2fa7493": "1b967dec6ab334304e58fcb90af510c2",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/9d32c6156c6154b9bebd0f14aaa92f3a223ebe": "95fa5e6b3ea3e07f3bef2c9480e31b38",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e0/1b98deefada8a9665bb5149d4e859b24b97a58": "21a20f45eb8d4652691f34824158a787",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/8584285783096fa3dded741d67930ae89248ef": "a24dd278c3bbab28bebbb5f02999ec06",
".git/objects/2c/016e7353d360960ad9275be18b6646f3c09916": "2c7e93d8a124a64ef5a4759f13d9d09d",
".git/objects/1b/edeb36da3c4f690c6ea67bcdb4a3b7a5c47209": "10204206c16d8392c85e8bce84100c2f",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/532864ce990a8dd0c12d221823c3a313e507c5": "ac09286dd108fca7295bdff7e3aa789d",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/4f/74d718b18f37189066582f053ee380a9e77b1b": "504008bafa0fc276b17ab81ef2abe18f",
".git/objects/15/85476acd64707d7969c2d1f3efd2966003fbe4": "737021340d030a3822b370beb798a472",
".git/objects/8c/9ce01f550292986820b7938828f75c20697681": "528ae0806e717beff251ae08a241729a",
".git/objects/76/86050d4b59c6ba9f829f8b05884628ee3b769d": "e62fcd129f420a2e9d65285640e01e73",
".git/objects/82/95b7dba4798ccc063b12d301ad3886ebad70a6": "3819ca9430df5d559146849c33572a38",
".git/objects/40/cb8e24bc598b474932d5f224b0443ef9f1dd06": "e6843418f1284f0cf12667f8f12aadd9",
".git/objects/8b/96c679dcb720d49db609a5d4d2aebcd860a3a1": "e7a12cd6b690f92ed868d19d46719567",
".git/objects/8e/aa3e5645ad2fc9733de20868e907f097628ce6": "068208246af4ca5bd41af8f3b7b9f190",
".git/objects/22/6d489344747727f887184d0d448727d5c8f769": "38b4e3c428d5a8f8f491423d2aff9d22",
".git/objects/22/e4f2704cfab09caf9cdb82fec8058b72ee045e": "a1d9cf8b439db7ec829d3b23e86a198b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0df27b625c15b955454a26aebc6cb3ec",
".git/logs/refs/heads/master": "0df27b625c15b955454a26aebc6cb3ec",
".git/logs/refs/remotes/origin/master": "b399bba6662daa3f1accefd607dbfec4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
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
".git/refs/heads/master": "0a596417c1fc44afc9afda82c1f800ec",
".git/refs/remotes/origin/master": "0a596417c1fc44afc9afda82c1f800ec",
".git/index": "f91ee822f71e1100a5504d009fdebaff",
".git/COMMIT_EDITMSG": "7616078fa2865d50730350461181d7f8",
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
