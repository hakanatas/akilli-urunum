/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "akilli-urunum",
    "title": "Akıllı Ürünüm",
    "titleEn": "My Smart Product",
    "grade": 6,
    "theme": "Yazılım Tasarımı ve Programlama",
    "code": "BTY.6.6.3",
    "outcome": "Blok tabanlı ortamda yapay zekâ destekli ürün ortaya koyabilme",
    "outcomeEn": "Creating an AI-supported product in a block-based environment",
    "duration": 144.5,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 16.8,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 16.8,
      "t1": 45.8,
      "name": "Gereksinimler",
      "en": "Requirements",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 45.8,
      "t1": 68.3,
      "name": "Araçları seç",
      "en": "Choose the tools",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 68.3,
      "t1": 107,
      "name": "Oluştur ve çalıştır",
      "en": "Build and run",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 107,
      "t1": 128.5,
      "name": "Ölçütleri karşılıyor mu?",
      "en": "Does it meet the criteria?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 128.5,
      "t1": 144.5,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
