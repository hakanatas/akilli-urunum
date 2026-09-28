/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 9, tr: "Modelimiz hazır. Şimdi onu bir ürüne dönüştürelim!", en: "Our model is ready. Now let's turn it into a product!",
      note: "Karo'nun takımı atıkları tanıyan bir model eğitmişti. Şimdi bu modeli kullanan, herkesin kolayca kullanabileceği bir ürün yapmak istiyorlar." },
    { scene: 1, start: 9.8, end: 15.5, tr: "Akıllı Geri Dönüşüm Yardımcısı", en: "The Smart Recycling Helper",
      note: "Ürünün adı: Akıllı Geri Dönüşüm Yardımcısı. Kameraya atığı gösteriyorsun, sana hangi kutuya atacağını söylüyor." },
    { scene: 2, start: 18.3, end: 24, tr: "Kamera girişi: atığı göster", en: "Camera input: show the item",
      note: "Kullanıcı atığı kameraya gösterecek. Bu, ürünün girdisidir." },
    { scene: 2, start: 24.8, end: 30.4, tr: "Sesli yönlendirme: kutuyu söyle", en: "Voice guidance: say which bin",
      note: "Ürün sonucu sesli söyleyecek: Plastik, sarı kutu! Okuma bilmeyen küçük kardeşler bile kullanabilir." },
    { scene: 2, start: 31.3, end: 36.9, tr: "Kolay kullanım: tek düğme", en: "Easy to use: one button",
      note: "Ekranda tek bir düğme ve büyük yazılar olacak." },
    { scene: 2, start: 37.8, end: 44.5, tr: "Gizlilik ve hız da gereksinim", en: "Privacy and speed are requirements too",
      note: "Kameradan alınan görüntüler kaydedilmeyecek; bu gizlilik için önemli. Cevap da hızlı gelmeli." },
    { scene: 3, start: 47.3, end: 52.9, tr: "Hangi eklentiler gerekli?", en: "Which extensions do we need?",
      note: "Blok tabanlı ortamlarda görüntü tanıma, ses tanıma, çeviri gibi yapay zekâ eklentileri vardır. Gereksinimlerimize bakarak seçeriz." },
    { scene: 3, start: 53.8, end: 59.4, tr: "Görüntü tanıma, sese çevirme, kamera", en: "Image recognition, text-to-speech, camera",
      note: "Atığı tanımak için görüntü tanıma, sonucu söylemek için metni sese çevirme eklentisine ve kameraya ihtiyacımız var." },
    { scene: 3, start: 60.3, end: 67, tr: "Çeviri ve öneri bu ürün için gereksiz", en: "Translation and recommendations aren't needed here",
      note: "Çeviri ve öneri sistemi bu ürünün gereksinimlerinde yok. Gereksiz araç eklemeyiz." },
    { scene: 4, start: 69.7, end: 78.1, tr: "Blokları diz: kamera, tanı, karar ver, söyle", en: "Place the blocks: camera, recognise, decide, speak",
      note: "Blokları diziyoruz: düğmeye basılınca kameradan görüntü al, yapay zekâ ile tanı, eğer plastikse sarı kutuya yönlendir ve sesli söyle." },
    { scene: 4, start: 78.9, end: 87.6, tr: "Test: yanlış kutuya gitti!", en: "Test: it went to the wrong bin!",
      note: "Test edelim. Model plastiği doğru tanıdı ama yardımcı sarı kutuya kadar gitmedi. Bir adım eksik!" },
    { scene: 4, start: 88.4, end: 94.1, tr: "Hata: adım sayısı eksik", en: "Bug: a step is missing",
      note: "Hatayı bulduk: sarı kutu üç kare ötede, ama kod yalnızca bir adım ilerliyor." },
    { scene: 4, start: 94.9, end: 105.6, tr: "Düzelt ve yeniden test et", en: "Fix it and test again",
      note: "Bloğu \"3 adım ilerle\" yapıyoruz ve yeniden test ediyoruz. Plastik! Sarı kutu! Ürün çalışıyor." },
    { scene: 5, start: 108.4, end: 114.1, tr: "Doğru kutuya yönlendiriyor mu?", en: "Does it point to the right bin?",
      note: "Yirmi atıkla denedik; on dokuzunu doğru kutuya yönlendirdi. Ölçütü karşılıyor." },
    { scene: 5, start: 114.9, end: 120.6, tr: "Gizlilik: görüntüler kaydediliyor mu?", en: "Privacy: are images being saved?",
      note: "İlk sürümde kameradan alınan her görüntü klasöre kaydediliyordu. Gizlilik gereksinimine aykırı; bu bloğu kaldırmalıyız." },
    { scene: 5, start: 121.4, end: 127.1, tr: "Küçükler de kullanabiliyor mu?", en: "Can younger children use it?",
      note: "Birinci sınıftaki kardeşler tek düğmeye basıp sesli yönlendirmeyle atıklarını doğru kutuya attı. Karşılıyor." },
    { scene: 6, start: 129.9, end: 136.7, tr: "Aklında kalsın: akıllı ürün, insana yardım eder", en: "Remember: a smart product helps people",
      note: "Aklında kalsın: yapay zekâ destekli bir ürün, gerçek bir problemi çözdüğünde ve güvenli olduğunda değerlidir." },
    { scene: 6, start: 137.4, end: 143.2, tr: "Senin akıllı ürünün ne olacak?", en: "What will your smart product be?",
      note: "Bilişim yolculuğunda çok şey öğrendin. Şimdi sıra senin akıllı ürününde!" },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
