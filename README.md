# Temel Siber Hijyen Eğitimi ve Sınavı

Çalışanlar ve bireyler için ücretsiz, tamamen istemci tarafında çalışan siber hijyen eğitimi + sınav + LinkedIn'de doğrulanabilir sertifika sitesi.

- **14 modüllük ayrıntılı eğitim**: açıklama, ayrıntılı anlatım, gerçek hayattan örnek, yapılacak/yapılmayacaklar, pekiştirme sorusu. Tamamlanmadan sınav açılmaz.
- 80 soruluk havuzdan her denemede rastgele **50 soru**, **75 dakika**, başarı barajı **%70** (35/50)
- Seçenekler her denemede karışır; yanlış cevaplar için açıklamalı inceleme
- Sertifika: PNG/PDF indirme, **LinkedIn'e sertifika olarak ekle** (ad, veren kurum, tarih, sertifika no ve doğrulama bağlantısı otomatik dolar), gönderi paylaşımı
- Doğrulama sayfası: sertifika bağlantısı (`?v=...&k=...`) açıldığında bilgiler kontrol edilir ve sertifika yeniden çizilir; bağlantı değiştirilmişse "Doğrulanamadı" gösterilir
- Sunucu, veritabanı veya üyelik yok; veriler yalnızca tarayıcıda (localStorage)

## GitHub Pages'e yayınlama

Settings → Pages → Deploy from a branch → main / (root). Adres: `https://<kullanici>.github.io/<depo>/`

## Özelleştirme

- Sorular: `questions.js` (ilk seçenek doğru cevaptır, sınavda karıştırılır)
- Süre, soru sayısı, baraj, imza: `app.js` içindeki `CFG`
- Eğitim: `training.js`; minimum okuma süresi `app.js` içindeki `MIN_SEC`

## Not

Site statik olduğu için doğrulama kriptografik olarak güvenli değildir: bağlantıdaki bilgilerin tutarlılığını kontrol eder, ancak bilgiyi bilen biri geçerli görünen bağlantı üretebilir. Gerçek, sunucu taraflı doğrulama gerekiyorsa sertifika kayıtları bir sunucuda imzalanıp saklanmalıdır. Bu sertifika bir eğitim belgesidir, akredite kişi belgelendirmesi değildir.
