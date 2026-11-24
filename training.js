// Eğitim modülleri. c = pekiştirme sorusu: [soru, DOĞRU cevap, yanlış1, yanlış2, açıklama]
// more = ayrıntılı açıklama paragrafları
window.TRAINING = [
{
  t: "Siber hijyen nedir?",
  intro: "Siber hijyen, diş fırçalamak gibi düzenli ve basit alışkanlıklarla dijital varlıklarınızı, hesaplarınızı ve verilerinizi korumaktır. Saldırıların büyük bölümü gelişmiş teknik yöntemler yerine, ihmal edilmiş temel önlemlerden yararlanır.",
  points: [
    "Siber hijyen; parola, güncelleme, yedekleme, e-posta ve cihaz kullanımı gibi günlük alışkanlıkların bütünüdür.",
    "Saldırganlar çoğu zaman en zayıf halkayı hedefler; bu halka sıklıkla teknoloji değil insandır.",
    "Küçük bir ihmal (eski bir yazılım, tekrar kullanılan bir parola) tüm kurumu etkileyen bir olayın başlangıcı olabilir.",
    "Hijyen tek seferlik bir iş değildir; düzenli tekrarlanan bir alışkanlıktır.",
    "Kişisel ve kurumsal güvenlik birbirinden ayrılamaz: kişisel hesabınız ele geçirilirse kurumsal hesaplarınız da risk altına girer.",
    "Hedef kusursuz güvenlik değil, saldırıyı zorlaştırmak ve olası zararı küçültmektir (katmanlı savunma)."
  ],
  more: [
    "Siber saldırganlar çoğunlukla fırsatçıdır. Binlerce hesabı aynı anda deneyen otomatik araçlar kullanırlar; amaç sizi kişisel olarak seçmek değil, önlemi zayıf olanı bulmaktır. Bu yüzden temel önlemleri uygulayan biri, uygulamayan birine göre çok daha az cazip hedeftir.",
    "Katmanlı savunma (derinlemesine savunma) fikri şudur: tek bir önleme güvenmeyin. Güçlü parola + çok faktörlü doğrulama + güncel yazılım + yedek birlikte çalışır; biri aşılsa bile diğerleri zararı sınırlar."
  ],
  example: "Bir çalışan, yıllardır kullandığı parolayı hem iş e-postasında hem de bir alışveriş sitesinde kullanıyor. Alışveriş sitesi veri ihlali yaşıyor, parola sızıyor ve saldırgan aynı parolayı iş e-postasında deniyor. Hesap ele geçiriliyor. Saldırı teknik değil, alışkanlık kaynaklıydı.",
  dos: ["Temel önlemleri düzenli bir rutine bağlayın.", "Kişisel ve iş hesaplarını ayırın.", "Şüphe duyduğunuzda durup sorun.", "Öğrendiklerinizi çevrenizle paylaşın."],
  donts: ["“Beni kim hedef alsın?” diye düşünmeyin.", "Önlemleri “zahmetli” diye devre dışı bırakmayın.", "Güvenliği yalnızca BT ekibinin işi saymayın.", "Tek bir önleme güvenmeyin."],
  c: ["Siber hijyen en iyi nasıl tanımlanır?", "Günlük hayatta uygulanan düzenli ve temel güvenlik alışkanlıkları", "Yalnızca antivirüs programı kurmak", "Yılda bir kez yapılan güvenlik denetimi", "Sadece BT personelinin yürüttüğü teknik çalışmalar", "Siber hijyen, düzenli ve basit alışkanlıklarla yürütülen bir süreçtir."]
},
{
  t: "Güçlü parolalar ve parola yöneticileri",
  intro: "Parola, çoğu hesabın tek kilididir. Zayıf veya tekrar kullanılan parolalar, hesap ele geçirmenin en yaygın yoludur. Uzun, benzersiz parolalar ve bir parola yöneticisi bu riski büyük ölçüde ortadan kaldırır.",
  points: [
    "Uzunluk karmaşıklıktan önemlidir: 14 ve üzeri karakterlik parolalar veya birkaç kelimeden oluşan parola cümleleri tercih edin.",
    "Her hesap için farklı bir parola kullanın; bir sitedeki sızıntı diğer hesaplarınızı etkilemesin.",
    "Doğum tarihi, isim, takım adı, “123456”, “Sifre1!” gibi tahmin edilebilir kalıplardan kaçının.",
    "Parola yöneticisi, benzersiz ve uzun parolaları sizin yerinize üretir, saklar ve doldurur.",
    "Parola yöneticisinin ana parolası çok güçlü olmalı ve başka hiçbir yerde kullanılmamalıdır.",
    "Parolayı kimseyle paylaşmayın; BT desteği dahil hiç kimse parolanızı sormaz.",
    "Bir hesabın sızdığından şüphelenirseniz parolayı hemen değiştirin ve açık oturumları sonlandırın."
  ],
  more: [
    "Saldırganlar parolaları iki yolla ele geçirir: tahmin (deneme saldırıları, sızmış parola listeleri) ve kandırma (oltalama). Uzun ve rastgele bir parola tahmini pratikte imkânsız hâle getirir; ancak oltalamaya karşı korumaz. Bu yüzden parola tek başına yetmez, çok faktörlü doğrulama ile desteklenmelidir.",
    "Kurumsal parola politikası genellikle periyodik zorunlu değişim yerine, ihlal şüphesinde değişim ve uzun parola ilkesini benimser. Yeni yaklaşım şudur: sık değiştirilen zayıf parola yerine, nadiren değişen ama uzun ve benzersiz parola daha güvenlidir."
  ],
  example: "Bir çalışan parolalarını “Ahmet2024!”, “Ahmet2025!” gibi küçük değişikliklerle yeniliyor. Bir sızıntıda eski parolası ortaya çıkıyor; saldırgan yıl bilgisini değiştirerek güncel parolayı ilk denemelerde buluyor.",
  dos: ["Bir parola yöneticisi kullanın.", "Parola cümleleri oluşturun (ör. rastgele 4-5 kelime).", "Sızmış parolaları kontrol eden hizmetlerden yararlanın.", "Varsayılan cihaz parolalarını değiştirin."],
  donts: ["Parolayı not kâğıdına, monitöre veya düz metin dosyaya yazmayın.", "Aynı parolayı birden fazla hesapta kullanmayın.", "Parolayı e-posta veya mesajla göndermeyin.", "Tarayıcıda paylaşımlı bilgisayara parola kaydetmeyin."],
  c: ["Aşağıdakilerden hangisi en güvenli parola yaklaşımıdır?", "Her hesap için farklı, uzun ve parola yöneticisinde saklanan parola", "Tüm hesaplarda aynı karmaşık parola", "Doğum tarihine küçük eklemeler yapılmış parola", "Parolaların telefon notlarında saklanması", "Uzun, benzersiz parolalar bir parola yöneticisiyle yönetildiğinde hem güvenli hem uygulanabilir olur."]
},
{
  t: "Çok faktörlü kimlik doğrulama (MFA)",
  intro: "Çok faktörlü kimlik doğrulama, parolaya ek olarak ikinci bir kanıt ister. Parolanız çalınsa bile saldırgan ikinci faktör olmadan hesabınıza giremez. Hesap ele geçirmelerinin büyük çoğunluğu MFA ile engellenebilir.",
  points: [
    "Faktör türleri: bildiğiniz bir şey (parola), sahip olduğunuz bir şey (telefon, güvenlik anahtarı), olduğunuz bir şey (parmak izi, yüz).",
    "Doğrulayıcı uygulamalar ve donanım güvenlik anahtarları, SMS kodlarından genellikle daha güvenlidir.",
    "SMS, SIM kopyalama gibi saldırılara açıktır; ancak hiç MFA olmamasından çok daha iyidir.",
    "E-posta, bulut depolama, bankacılık ve sosyal medya hesaplarında MFA’yı öncelikle açın.",
    "Doğrulama kodunuzu kimseyle paylaşmayın; kodu isteyen kişi sizi kandırmaya çalışıyordur.",
    "Beklemediğiniz bir onay bildirimi gelirse onaylamayın; bu, parolanızın ele geçirildiğinin işaretidir.",
    "Yedek kurtarma kodlarını güvenli bir yerde saklayın; telefonunuzu kaybederseniz hesabınıza dönebilirsiniz."
  ],
  more: [
    "“MFA yorgunluğu” saldırısında saldırgan, çalınan parolayla art arda giriş denemesi yapar ve kurbanın telefonuna sürekli onay bildirimi düşer. Bıkan kullanıcı bir noktada “Onayla”ya basar. Beklemediğiniz her onay isteğini reddedin ve BT birimine bildirin.",
    "Mümkünse “eşleşen sayı” gibi ek doğrulama içeren ve oltalamaya dayanıklı yöntemleri (geçiş anahtarları, FIDO2 güvenlik anahtarları) tercih edin. Bunlar, sahte giriş sayfasında kullanıldığında bile çalışmaz."
  ],
  example: "Bir çalışan sahte bir giriş sayfasına parolasını girer. Saldırgan o parolayla gerçek hesaba giriş yapmaya çalışır ancak MFA devreye girer ve çalışanın telefonuna beklenmedik bir onay bildirimi düşer. Çalışan reddeder ve durumu bildirir; hesap kurtarılır.",
  dos: ["Önemli tüm hesaplarda MFA’yı etkinleştirin.", "Yedek kodları güvenli yerde saklayın.", "Beklenmeyen onay isteklerini bildirin.", "Telefon numaranızı değiştirdiğinizde MFA ayarlarını güncelleyin."],
  donts: ["Doğrulama kodunu telefonda veya e-postada kimseyle paylaşmayın.", "Beklemediğiniz bildirimi “belki sistemdir” diye onaylamayın.", "MFA’yı “zahmetli” diye kapatmayın.", "Yedek kodları e-postanızda saklamayın."],
  c: ["Telefonunuza beklemediğiniz bir giriş onayı bildirimi geldi. Ne yaparsınız?", "Reddeder, parolamı değiştirir ve BT birimine bildiririm", "Sistem hatasıdır diye onaylarım", "Bir süre bekler, tekrar gelirse onaylarım", "Bildirimi kapatırım", "Beklenmeyen onay isteği, parolanızın başkasında olabileceğinin işaretidir; reddetmeli, parolayı değiştirmeli ve bildirmelisiniz."]
},
{
  t: "Oltalama ve sosyal mühendislik",
  intro: "Oltalama (phishing), sizi sahte bir mesajla kandırarak parola, kart bilgisi veya zararlı dosya elde etme girişimidir. Sosyal mühendislik ise teknolojiyi değil insan psikolojisini hedef alan tüm kandırma yöntemlerinin genel adıdır.",
  points: [
    "Saldırganlar aciliyet (“hesabınız 1 saat içinde kapanacak”), korku, merak, otorite ve ödül vaadi gibi duyguları kullanır.",
    "Gönderen adresine dikkat edin: görünen ad güvenilir olsa bile gerçek alan adı farklı olabilir.",
    "Bağlantıya tıklamadan üzerine gelerek gerçek adresi kontrol edin; kısaltılmış bağlantılara şüpheyle yaklaşın.",
    "Beklemediğiniz ekler (özellikle .zip, .html, .iso, makrolu ofis dosyaları) tehlikelidir.",
    "Hedefli oltalama (spear phishing), sizin adınıza, unvanınıza ve işinize özel hazırlanır; genel mesajlardan çok daha inandırıcıdır.",
    "Vishing (telefon), smishing (SMS) ve QR kod ile oltalama (quishing) de aynı mantıkla çalışır.",
    "Şüpheli bir mesajı kendi başınıza test etmeyin; bildirin ve silin."
  ],
  more: [
    "Oltalamayı tanımanın en güvenilir yolu mesajın içeriğine değil davranışına bakmaktır: sizden acele bir işlem, parola, kod veya para istiyor mu? Doğrulama kanalı olarak mesajdaki numarayı veya bağlantıyı değil, bildiğiniz resmi kanalı kullanın.",
    "Sosyal mühendislik yüz yüze de olabilir: kuryeyim diyerek binaya giren, BT’denim diyerek parola isteyen veya yanlışlıkla kapıyı açık tutturan kişi (tailgating). Kimliği doğrulanmamış kişiye hiçbir bilgi veya erişim vermeyin."
  ],
  example: "Muhasebe çalışanına, genel müdürün adıyla “acil, toplantıdayım, şu hesaba hemen ödeme yap” e-postası gelir. Gönderen adresi gerçeğe benzeyen ama bir harfi farklı bir alan adıdır. Çalışan genel müdürü telefonla arayıp doğrular ve dolandırıcılık engellenir.",
  dos: ["Acil para veya bilgi isteklerini ikinci bir kanaldan doğrulayın.", "Şüpheli iletiyi BT’ye bildirin.", "Bağlantıyı tıklamak yerine adresi kendiniz yazın veya yer imini kullanın.", "Telefonda kimliği doğrulanmamış kişiye bilgi vermeyin."],
  donts: ["Acele baskısıyla işlem yapmayın.", "Bilinmeyen kişilerden gelen ekleri açmayın.", "Mesajdaki “abonelikten çık” veya “iptal” bağlantısına şüpheli iletide tıklamayın.", "QR kodu kaynağını bilmeden taramayın."],
  c: ["Aşağıdakilerden hangisi oltalama iletisinin tipik işaretidir?", "Aciliyet baskısı yaratıp parola veya bağlantı tıklaması istemesi", "Bilinen bir iş arkadaşından gelen, beklenen toplantı daveti", "Kurumsal duyuru sayfasındaki haber", "Takvim uygulamasının otomatik hatırlatması", "Oltalamada saldırgan aciliyet, korku veya ödül vaadiyle sizi düşünmeden işlem yapmaya iter."]
},
{
  t: "E-posta ve mesajlaşma güvenliği",
  intro: "E-posta, kurumlara yönelik saldırıların en yaygın giriş kapısıdır. Hesap ele geçirme ve iş e-postası dolandırıcılığı (BEC), kurumlara en çok maddi zarar veren saldırı türleri arasındadır.",
  points: [
    "Kurumsal e-postanızı kişisel amaçlarla kullanmayın; kişisel e-postanıza iş belgesi yönlendirmeyin.",
    "Hassas bilgi içeren e-postaları doğru alıcıya gönderdiğinizden emin olun; otomatik doldurmaya dikkat edin.",
    "Alıcı alanında (Kime/Bilgi/Gizli) yanlış kişi seçimi en sık yaşanan veri sızıntısı nedenlerinden biridir.",
    "İş e-postası dolandırıcılığı: banka hesabı değişikliği, acil ödeme veya fatura düzeltme talepleri sahte olabilir.",
    "Mesajlaşma uygulamalarında da tanımadığınız kişilerden gelen bağlantı ve dosyalara aynı şüpheyle yaklaşın.",
    "Hassas dosyaları paylaşırken parola korumalı bağlantı veya kurum onaylı paylaşım araçlarını kullanın.",
    "Şüpheli iletiyi “Yanıtla” ile değil, kurumun bildirim yöntemiyle iletin."
  ],
  more: [
    "Gelen kutunuzdaki beklenmedik “paylaşılan belge” bildirimleri de oltalama olabilir. Belgeyi doğrudan açmak yerine, gönderene başka bir kanaldan sorun. Özellikle “şifre sıfırlama” ve “hesap doğrulama” iletilerinde, kendi başlatmadığınız işlemleri dikkate almayın.",
    "Otomatik yönlendirme kuralları, hesabı ele geçiren saldırganın en sevdiği kalıcılık yöntemidir. Posta kutunuzda tanımadığınız bir kural veya yönlendirme görürseniz hemen bildirin."
  ],
  example: "Bir tedarikçi, “banka hesabımız değişti” diyerek yeni IBAN gönderir. Gerçekte tedarikçinin e-postası ele geçirilmiştir. Firma, tedarikçiyi bilinen telefon numarasından arayarak doğruladığı için ödeme dolandırıcılığından kurtulur.",
  dos: ["IBAN, fatura ve ödeme değişikliklerini telefonla doğrulayın.", "Göndermeden önce alıcı listesini kontrol edin.", "Hassas dosyalar için kurumsal paylaşım araçlarını kullanın.", "Şüpheli kuralları ve yönlendirmeleri bildirin."],
  donts: ["Kurumsal veriyi kişisel e-postaya göndermeyin.", "Tanımadığınız ekleri açmayın.", "Parola veya kod içeren yanıtı e-postayla paylaşmayın.", "Büyük gruba toplu (Bilgi alanıyla) hassas bilgi göndermeyin."],
  c: ["Tedarikçiden “banka hesabımız değişti” e-postası geldi. En doğru adım hangisidir?", "Bilinen telefon numarasından arayıp değişikliği doğrulamak", "E-postadaki numarayı arayıp teyit etmek", "Hemen yeni hesaba ödeme yapmak", "E-postayı yanıtlayıp belge istemek", "Ödeme bilgisi değişiklikleri, e-postadaki iletişim bilgileri yerine önceden bilinen bir kanaldan doğrulanmalıdır."]
},
{
  t: "Yazılım güncellemeleri ve yama yönetimi",
  intro: "Yazılımlardaki açıklar, saldırganların sistemlere girmesinin en kolay yollarından biridir. Üreticiler bu açıkları güncellemelerle kapatır; güncellemeyi geciktirmek, kapıyı açık bırakmak anlamına gelir.",
  points: [
    "Güvenlik açıkları (zafiyetler) ortaya çıktığında üreticiler yama yayımlar; saldırganlar yamadan sonra bile eski sistemleri tarar.",
    "İşletim sistemi, tarayıcı, ofis yazılımları, PDF okuyucular ve eklentiler düzenli güncellenmelidir.",
    "Mümkün olduğunda otomatik güncellemeyi açın.",
    "Üretici desteğini kaybetmiş (ömrünü tamamlamış) yazılım ve işletim sistemleri güvenli değildir.",
    "Yönlendirici, yazıcı, kamera gibi ağ cihazlarının donanım yazılımları da güncellenmelidir.",
    "Yalnızca resmi mağaza veya üretici sitesinden yazılım indirin; kırık (crack) yazılım zararlı içerir.",
    "Güncelleme bildirimi görünce ertelemek yerine uygun bir zamana mutlaka planlayın."
  ],
  more: [
    "Birçok büyük fidye yazılımı salgını, aylar önce yayımlanmış bir yamanın uygulanmamasından kaynaklandı. Yani çözüm uzun süredir mevcuttu; sorun uygulanmamasıydı. Bu yüzden yama yönetimi, en ucuz ve en etkili siber güvenlik önlemlerinden biridir.",
    "Kurumsal ortamda yazılım kurulumu ve güncelleme BT biriminin kontrolündedir. Kendi başınıza yetkisiz yazılım kurmak hem güvenlik hem lisans riski yaratır; ihtiyacınız olan yazılımı BT’den talep edin."
  ],
  example: "Bir firmada eski bir VPN cihazı aylardır güncellenmemiş. Yayımlanmış bilinen bir açık kullanılarak içeri girilen saldırgan, ağda yayılır ve veri sunucularını şifreler. Yama aylar önce yayımlanmıştı.",
  dos: ["Otomatik güncellemeleri açık tutun.", "Bilgisayarı güncelleme sonrası yeniden başlatın.", "Desteği biten yazılımı değiştirmeyi planlayın.", "Yazılımı yalnızca resmi kaynaktan indirin."],
  donts: ["Güncelleme bildirimini sürekli ertelemeyin.", "Kırık veya lisanssız yazılım kullanmayın.", "Bilinmeyen sitelerden “güncelleme” indirmeyin.", "BT onayı olmadan kurumsal cihaza yazılım kurmayın."],
  c: ["Güvenlik güncellemelerini zamanında uygulamanın temel amacı nedir?", "Bilinen güvenlik açıklarını kapatmak", "Sadece yeni özellik eklemek", "Bilgisayarı yavaşlatmak", "Lisans süresini uzatmak", "Güncellemeler üreticinin tespit ettiği güvenlik açıklarını kapatır."]
},
{
  t: "Zararlı yazılımlar ve fidye yazılımı",
  intro: "Zararlı yazılım (malware); virüs, solucan, truva atı, casus yazılım ve fidye yazılımı gibi kötü amaçlı tüm yazılımların genel adıdır. Fidye yazılımı, dosyalarınızı şifreleyip erişim karşılığında para talep eder.",
  points: [
    "Zararlı yazılım genellikle oltalama ekleri, sahte indirmeler, güvenlik açıkları ve USB bellekler yoluyla bulaşır.",
    "Truva atı, faydalı bir uygulama gibi görünüp arka planda zarar veren yazılımdır.",
    "Casus yazılım ve keylogger, yazdıklarınızı ve ekranınızı gizlice izler.",
    "Fidye yazılımı yalnızca dosyaları şifrelemekle kalmaz, çoğu zaman önce veriyi çalıp sızdırmakla da tehdit eder.",
    "Güncel antivirüs/EDR çözümü gerekli bir katmandır ancak tek başına yeterli değildir.",
    "Bulaşma şüphesinde cihazı ağdan çıkarın (kablo veya Wi-Fi) ama kapatmayın; hemen BT birimine bildirin.",
    "Fidye ödemek verinin geri geleceğini garanti etmez ve saldırganları cesaretlendirir; karar kurumun yönetimine aittir."
  ],
  more: [
    "Fidye yazılımına karşı en güçlü savunma, çevrimdışı ve test edilmiş yedeklerdir. Yedeğiniz varsa şifrelenen sistemi temizleyip yedekten geri dönebilirsiniz. Ayrıca yetkilerin sınırlandırılması (en az yetki ilkesi), bulaşmanın yayılmasını da yavaşlatır.",
    "Bulaşma belirtileri: beklenmedik yavaşlama, bilinmeyen programlar, dosya uzantılarının değişmesi, ekranda fidye notu, kapatılamayan açılır pencereler ve antivirüsün devre dışı kalması."
  ],
  example: "Bir çalışan, e-postayla gelen “fatura.zip” dosyasını açar. Dosya bir fidye yazılımı çalıştırır ve paylaşımlı sürücüdeki dosyalar şifrelenmeye başlar. Çalışan ekranda fidye notunu görür, ağ kablosunu çeker ve BT’yi arar. Erken müdahale yayılmayı sınırlar.",
  dos: ["Şüphede cihazı ağdan ayırın ve bildirin.", "Antivirüs/EDR’nin etkin olduğundan emin olun.", "Düzenli yedek alın.", "Yalnızca güvenilir kaynaktan yazılım yükleyin."],
  donts: ["Zararlı olduğundan şüphelendiğiniz dosyayı tekrar açmayıp deneme yapmayın.", "Antivirüsü devre dışı bırakmayın.", "Fidye notundaki talimatları kendi başınıza uygulamayın.", "Bulaşmayı gizlemeyin."],
  c: ["Cihazınızda fidye notu belirdi. İlk adımınız ne olmalıdır?", "Cihazı ağdan ayırıp BT birimine hemen bildirmek", "Fidyeyi ödemek", "Notu görmezden gelip çalışmaya devam etmek", "Dosyaları arkadaşlarla paylaşmak", "Yayılmayı sınırlamak için cihazı ağdan ayırın ve hızla bildirin; fidye ödemek garanti değildir."]
},
{
  t: "Güvenli internet ve tarayıcı kullanımı",
  intro: "Tarayıcı, her gün en çok kullandığınız uygulamadır ve saldırganların da en sık hedef aldığı noktalardan biridir. Güvenli gezinme alışkanlıkları, birçok saldırıyı daha başlamadan engeller.",
  points: [
    "Adres çubuğunda https ve kilit simgesi, trafiğin şifreli olduğunu gösterir; ancak sitenin güvenilir olduğunu garanti etmez.",
    "Sahte siteler gerçeğine çok benzeyen alan adları kullanır (ör. harf değişikliği); adresi dikkatle okuyun.",
    "Reklam ve “indir” düğmeleriyle dolu sitelerde sahte indirme bağlantılarına dikkat edin.",
    "Tarayıcı eklentilerini yalnızca ihtiyacınız olduğu kadar ve güvenilir yayıncılardan kurun; eklentiler tüm verinizi görebilir.",
    "Tarayıcıda “bildirim izni” veya “güncelleme gerekli” gibi açılır pencereler sıklıkla tuzaktır.",
    "Hassas işlemleri (bankacılık, kurumsal sistemler) paylaşımlı veya halka açık bilgisayarlarda yapmayın.",
    "İşiniz bittiğinde oturumu kapatın; paylaşımlı cihazlarda “beni hatırla” seçeneğini kullanmayın."
  ],
  more: [
    "Arama motoru sonuçlarındaki sponsorlu reklamlar da sahte sitelere yönlendirebilir. Önemli hizmetler (banka, kargo, devlet sitesi) için adresi kendiniz yazın veya daha önce kaydettiğiniz yer imini kullanın.",
    "Tarayıcının parola kaydetme ve otomatik doldurma özelliği yerine, ayrı bir parola yöneticisi tercih edin; ayrıca tarayıcı güncel ve güvenli gezinme özelliği açık olmalıdır."
  ],
  example: "Bir çalışan kargo takibi için arama motorunda reklam olarak çıkan bir siteye girer. Site gerçek kargo firmasının birebir kopyasıdır ve kart bilgisi ister. Adres çubuğunda küçük bir yazım farkı vardır. Çalışan fark edip kapatır.",
  dos: ["Adresi tıklamadan önce dikkatle okuyun.", "Önemli siteleri yer imine ekleyin.", "Tarayıcıyı güncel tutun.", "Kullanmadığınız eklentileri kaldırın."],
  donts: ["Kilit simgesini “güvenli site” sanmayın.", "Bilinmeyen sitelerden dosya indirmeyin.", "Şüpheli açılır pencerelerdeki izinleri onaylamayın.", "Paylaşımlı bilgisayarda parola kaydetmeyin."],
  c: ["Adres çubuğundaki kilit simgesi neyi gösterir?", "Bağlantının şifreli olduğunu; sitenin güvenilirliğini garanti etmez", "Sitenin kesinlikle güvenli ve dolandırıcılıktan uzak olduğunu", "Sitenin devlet onaylı olduğunu", "Sitede virüs bulunmadığını", "Kilit yalnızca trafiğin şifreli olduğunu gösterir; sahte siteler de https kullanabilir."]
},
{
  t: "Wi-Fi, VPN ve uzaktan çalışma",
  intro: "Evde, kafede, otelde veya havalimanında çalışırken kullandığınız ağ, verinizin güvenliğini doğrudan etkiler. Güvenli olmayan ağlarda trafik izlenebilir veya sahte erişim noktaları kurulabilir.",
  points: [
    "Halka açık Wi-Fi ağları şifresiz veya paylaşımlı şifrelidir; trafiğiniz izlenebilir veya yönlendirilebilir.",
    "Sahte erişim noktaları (evil twin), gerçek ağın adını taklit ederek bağlananların verisini ele geçirir.",
    "Kurumsal verilere uzaktan erişirken kurumun VPN çözümünü kullanın.",
    "VPN, trafiği şifreleyerek tünel oluşturur; ancak cihazınızdaki zararlı yazılıma karşı koruma sağlamaz.",
    "Ev yönlendiricisinde varsayılan yönetici parolasını değiştirin, WPA2/WPA3 şifrelemesi kullanın ve donanım yazılımını güncelleyin.",
    "Misafir ağı ile kendi cihazlarınızı ve iş cihazınızı ayırın.",
    "Halka açık alanda ekranınızın başkaları tarafından görülmesini engelleyin (omuz sörfü)."
  ],
  more: [
    "Uzaktan çalışmada kurumsal cihaz yalnızca sizin tarafınızdan ve yalnızca iş için kullanılmalıdır. Aile bireyleri veya arkadaşlar tarafından kullanım, cihazın güvenliğini zayıflatır. Ofisteki kurallar (kilit ekranı, parola, yazıcı kullanımı) evde de geçerlidir.",
    "Kafede çalışırken mobil hotspot (telefon internet paylaşımı), halka açık Wi-Fi’ye göre çok daha güvenli bir alternatiftir. Toplantılarda konuşmanızın veya ekranınızın görülebileceğini unutmayın."
  ],
  example: "Bir çalışan havalimanında “Havalimani_Ucretsiz_WiFi” adlı ağa bağlanır ve kurumsal e-postasına girer. Ağ, saldırganın kurduğu sahte bir erişim noktasıdır. Oturum bilgileri ele geçirilir. VPN kullanıp mobil hotspot tercih etseydi risk büyük ölçüde azalırdı.",
  dos: ["Kurumsal verilere VPN ile bağlanın.", "Ev yönlendiricisini güncelleyin ve parolasını değiştirin.", "Halka açık alanda mobil hotspot tercih edin.", "Ekran kilidini, uzaklaşırken hemen devreye alın."],
  donts: ["Halka açık Wi-Fi’de bankacılık veya kurumsal sistemlere VPN’siz girmeyin.", "Otomatik Wi-Fi bağlantısını açık bırakmayın.", "İş cihazını aile ile paylaşmayın.", "Ağ adına bakarak bağlanmayın; doğrulayın."],
  c: ["Halka açık bir Wi-Fi ağında kurumsal sisteme erişmeniz gerekiyor. En uygun yaklaşım hangisidir?", "Kurumun VPN’ini kullanmak veya mobil hotspot tercih etmek", "Doğrudan bağlanıp çalışmak", "Parolayı not defterine yazıp bağlanmak", "Güvenlik uyarılarını kapatmak", "VPN, trafiği şifreleyerek halka açık ağdaki izleme riskini azaltır."]
},
{
  t: "Mobil cihaz güvenliği",
  intro: "Telefonlar ve tabletler; e-postanızı, kimlik doğrulama uygulamalarınızı, fotoğraflarınızı ve bankacılığınızı bir arada taşır. Kaybolduğunda veya ele geçirildiğinde etkisi bir bilgisayardan daha büyük olabilir.",
  points: [
    "Cihaza kilit ekranı koyun (PIN, parola veya biyometri) ve otomatik kilitlenme süresini kısa tutun.",
    "İşletim sistemini ve uygulamaları güncel tutun; mümkünse otomatik güncellemeyi açın.",
    "Yalnızca resmi mağazalardan uygulama kurun ve uygulamanın istediği izinleri inceleyin.",
    "Bir el feneri uygulamasının rehbere veya konuma erişim istemesi gibi gereksiz izinleri vermeyin.",
    "Cihaz kaybolursa uzaktan kilitleme ve silme özelliklerini kullanabilmek için “cihazımı bul” hizmetini önceden etkinleştirin.",
    "Cihaz şifreleme özelliğini etkin tutun; root/jailbreak yapılmış cihaz kullanmayın.",
    "Bilinmeyen kişilerden gelen SMS ve mesajlardaki bağlantılara tıklamayın."
  ],
  more: [
    "Kişisel cihazlarla (BYOD) iş verisine erişiliyorsa kurumsal politika ve gerekirse mobil cihaz yönetimi uygulanır. Bu, hem sizin hem kurumun verisini korur. Cihaz kaybını gecikmeden bildirmek, uzaktan müdahale ihtimalini artırır.",
    "SIM değiştirme saldırısında saldırgan, operatörü kandırarak numaranızı kendi SIM kartına taşır ve SMS kodlarını alır. SIM/PIN koruması ve SMS yerine uygulama tabanlı doğrulama bu riski azaltır."
  ],
  example: "Bir çalışan telefonunu taksiye unutur. Cihazın ekran kilidi ve şifrelemesi açıktır, “cihazımı bul” etkindir. Çalışan telefonu uzaktan kilitler ve BT’ye bildirir. Veriler ele geçirilmez.",
  dos: ["Ekran kilidi ve şifrelemeyi etkinleştirin.", "Uygulama izinlerini düzenli gözden geçirin.", "Kayıp/çalıntı cihazı hemen bildirin.", "Yalnızca resmi mağazadan uygulama kurun."],
  donts: ["Kilit ekranını kapatmayın.", "Bilinmeyen kaynaklardan APK/uygulama yüklemeyin.", "Kamuya açık şarj istasyonlarına şüpheyle yaklaşın; kendi şarj cihazınızı kullanın.", "Cihazı jailbreak/root yapmayın."],
  c: ["Telefonunuzu kaybettiğinizde riski en çok ne azaltır?", "Ekran kilidi, şifreleme ve uzaktan kilitleme/silme özelliğinin önceden etkin olması", "Telefonda parolaların not olarak saklanması", "Ekran kilidinin kapalı olması", "Yedeğin hiç alınmaması", "Önceden alınmış kilit, şifreleme ve uzaktan silme önlemleri, kayıp durumunda verinin korunmasını sağlar."]
},
{
  t: "Yedekleme ve veri şifreleme",
  intro: "Yedekleme; fidye yazılımı, donanım arızası, yanlışlıkla silme veya doğal afet karşısında en güçlü sigortanızdır. Şifreleme ise veriniz yanlış ellere geçse bile okunmasını engeller.",
  points: [
    "3-2-1 kuralı: verinin en az 3 kopyası, 2 farklı ortamda, 1 kopya farklı bir konumda (çevrimdışı veya bulutta) olmalıdır.",
    "Yedek, ana sistemden ayrı tutulmalıdır; ağa sürekli bağlı yedekler fidye yazılımı tarafından da şifrelenebilir.",
    "Yedekleri düzenli olarak geri yükleyerek test edin; test edilmemiş yedek, yedek sayılmaz.",
    "Yedeklerin de şifrelenmesi ve erişiminin kısıtlanması gerekir.",
    "Dizüstü, USB bellek ve harici disk gibi taşınabilir ortamlarda hassas veri şifrelenmelidir.",
    "Bulut depolama yedek yerine geçmez; senkronizasyon, silinen veya şifrelenen dosyayı da eşitleyebilir.",
    "Kurumsal veriyi kişisel bulut hesaplarına yüklemeyin."
  ],
  more: [
    "Kurumlar için iki kavram önemlidir: RPO (ne kadar veri kaybı kabul edilebilir) ve RTO (sistem ne kadar sürede geri gelmelidir). Yedekleme sıklığı ve yöntemi bu hedeflere göre belirlenir.",
    "Şifreleme iki durumda uygulanır: depolanırken (disk şifreleme) ve iletilirken (https, VPN). Kayıp bir dizüstü bilgisayar, diski şifreliyse yalnızca bir donanım kaybıdır; şifreli değilse bir veri ihlalidir."
  ],
  example: "Bir firmanın dosya sunucusu fidye yazılımıyla şifrelenir. Firmanın çevrimdışı ve düzenli test edilen yedeği olduğundan sistem birkaç saat içinde geri döner. Yedeği olmayan komşu firma haftalarca kapalı kalır.",
  dos: ["3-2-1 kuralını uygulayın.", "Yedekten geri dönüşü periyodik test edin.", "Taşınabilir ortamları şifreleyin.", "Yedek erişimini sınırlayın."],
  donts: ["Yedeği ana bilgisayarın yanında bırakmayın.", "Yalnızca bulut senkronizasyonuna güvenmeyin.", "Yedeklerin çalıştığını varsaymayın; doğrulayın.", "Hassas veriyi şifresiz USB’de taşımayın."],
  c: ["3-2-1 yedekleme kuralı neyi ifade eder?", "3 kopya, 2 farklı ortam, 1’i farklı konumda", "3 gün, 2 saat, 1 dakika yedekleme aralığı", "3 parola, 2 kullanıcı, 1 yönetici", "3 disk, 2 sunucu, 1 yazıcı", "3-2-1 kuralı; 3 kopya, 2 farklı ortam ve 1 farklı konumda yedek tutmayı öngörür."]
},
{
  t: "Fiziksel güvenlik, temiz masa ve USB",
  intro: "Siber güvenlik yalnızca ekranda değildir. Açık bırakılmış bir bilgisayar, masada unutulmuş bir belge veya takılan bilinmeyen bir USB bellek de ciddi bir güvenlik olayına yol açabilir.",
  points: [
    "Masanızdan kalkarken ekranı kilitleyin (Windows + L).",
    "Temiz masa, temiz ekran: Hassas belgeleri masada ve yazıcıda bırakmayın; mesai bitiminde kilitli yere koyun.",
    "Gereksiz basılı belgeleri çapraz kesen makineyle imha edin.",
    "Bilinmeyen USB belleği hiçbir zaman bilgisayara takmayın; içinde otomatik çalışan zararlı yazılım olabilir.",
    "Kapıyı arkanızdan gelen tanımadığınız kişilere açık tutmayın (tailgating); ziyaretçileri refakatsiz bırakmayın.",
    "Kimlik kartınızı ve erişim araçlarınızı görünür tutun ve kaybederseniz hemen bildirin.",
    "Dizüstü bilgisayarınızı araçta, kafede veya havalimanında yalnız bırakmayın."
  ],
  more: [
    "Sosyal mühendisler fiziksel alanları da hedefler: sahte teknisyen, kurye veya ziyaretçi kimliğiyle binaya girebilirler. Kimliği doğrulanmamış kişiye, görevli olduğunu söylese bile, erişim vermeyin ve güvenliğe bildirin.",
    "Yazıcı ve fotokopi makinelerinde unutulan belgeler çok sık yaşanan bir veri sızıntısı kaynağıdır. Güvenli yazdırma (kartla/PIN ile çıktı alma) özelliği varsa kullanın."
  ],
  example: "Bir saldırgan, otopark ve lobi alanına “Maaş Listesi 2025” etiketli birkaç USB bellek bırakır. Meraklı bir çalışan belleği bilgisayarına takar ve zararlı yazılım ağa bulaşır. Çalışan belleği BT’ye teslim etseydi olay yaşanmazdı.",
  dos: ["Ayrılırken ekranı kilitleyin.", "Bulduğunuz USB belleği BT’ye teslim edin.", "Ziyaretçileri karşılayın ve refakat edin.", "Hassas çıktıları hemen alın ve imha edin."],
  donts: ["Bilinmeyen USB belleği takmayın.", "Kimlik kartınızı başkasına vermeyin.", "Hassas belgeyi masada bırakmayın.", "Kapıyı tanımadığınız kişiye tutmayın."],
  c: ["Otoparkta bulduğunuz USB belleği ne yapmalısınız?", "Bilgisayara takmadan BT/güvenlik birimine teslim etmek", "İçinde ne olduğunu merak edip kendi bilgisayarınıza takmak", "Sahibini bulmak için iş bilgisayarına takmak", "Bellek temizleyip kullanmak", "Bulunan USB’ler zararlı olabilir; takılmadan BT’ye teslim edilmelidir."]
},
{
  t: "Sosyal medya, gizlilik ve yapay zekâ araçları",
  intro: "Paylaştığınız her bilgi, saldırganlar için keşif malzemesi olabilir. Ayrıca yapay zekâ araçlarına girdiğiniz veriler kurum dışına çıkabilir. Dijital ayak izinizi bilinçli yönetmek, siber hijyenin parçasıdır.",
  points: [
    "İş unvanınız, kullandığınız sistemler, tatil planlarınız veya ofis fotoğraflarınız saldırganlara ipucu verebilir.",
    "Kimlik kartı, ekran, beyaz tahta veya parola içeren fotoğrafları paylaşmayın.",
    "Gizlilik ayarlarını düzenli gözden geçirin; profilinizi mümkün olduğunca sınırlı kitleye açın.",
    "Tanımadığınız kişilerden gelen bağlantı veya iş teklifi taleplerine karşı dikkatli olun; sahte profiller yaygındır.",
    "Yapay zekâ sohbet araçlarına müşteri verisi, kaynak kod, sözleşme veya kişisel veri yapıştırmayın; yalnızca kurumun onayladığı araçları kullanın.",
    "Yapay zekâ ile üretilmiş ses, görüntü ve video (deepfake) ile dolandırıcılık girişimleri artıyor; olağan dışı taleplerde doğrulama yapın.",
    "Yapay zekâ çıktılarını kullanmadan önce doğruluğunu kontrol edin; yanıltıcı veya uydurma bilgi içerebilir."
  ],
  more: [
    "Saldırganlar hedefli oltalama hazırlarken sosyal medya ve profesyonel ağ profillerinden toplanan bilgileri kullanır: kimin kimin yöneticisi olduğunu, hangi yazılımları kullandığınızı, hangi etkinliğe katıldığınızı öğrenebilirler. Bu yüzden iş bilgilerini paylaşırken “bu bilgiyi kötü niyetli biri nasıl kullanır?” diye düşünün.",
    "Yapay zekâ araçlarına yazılan istemler (prompt) hizmet sağlayıcıda saklanabilir ve ilgili politikaya göre işlenebilir. Kişisel veriler söz konusuysa KVKK kapsamında yükümlülükler doğabilir. Şüphe durumunda kurumun yapay zekâ kullanım politikasına bakın."
  ],
  example: "Bir çalışan, müşteri sözleşmesinin tamamını özetletmek için herkese açık bir yapay zekâ sohbet aracına yapıştırır. Sözleşmede ticari sırlar ve kişisel veriler vardır. Çalışan, bu verinin kurum dışına çıkmış olabileceğini fark edip olayı bildirir.",
  dos: ["Paylaşımdan önce “bu bilgi ne işe yarar?” diye sorun.", "Yalnızca onaylı yapay zekâ araçlarını kullanın.", "Gizlilik ayarlarını periyodik kontrol edin.", "Olağan dışı ses/video taleplerini doğrulayın."],
  donts: ["Müşteri verisini veya kaynak kodu herkese açık yapay zekâ araçlarına yapıştırmayın.", "İş ortamı fotoğraflarında ekran ve belgeleri açıkta bırakmayın.", "Tanımadığınız kişilerin bağlantı isteklerini otomatik kabul etmeyin.", "Yapay zekâ çıktılarını doğrulamadan kullanmayın."],
  c: ["Müşteri verisi içeren bir belgeyi özetletmek için ne yapmalısınız?", "Kurumun onayladığı araçları kullanmak; yoksa veriyi paylaşmamak", "Belgeyi herkese açık bir yapay zekâ aracına yapıştırmak", "Belgeyi kişisel hesaba yüklemek", "Müşteri adını silip geri kalanı yapıştırmak yeterlidir", "Kurum dışı yapay zekâ araçlarına hassas veri girmek veri sızıntısı riski yaratır."]
},
{
  t: "Olay bildirimi, KVKK ve yapılması gerekenler",
  intro: "Hiçbir önlem riski sıfıra indirmez. Bu yüzden bir güvenlik olayını erken fark etmek ve hızlı bildirmek, zararın büyüklüğünü belirleyen en önemli etkendir. Bildirim bir suçlama değil, bir sorumluluktur.",
  points: [
    "Güvenlik olayı örnekleri: oltalama bağlantısına tıklamak, kaybolan cihaz, yanlış alıcıya gönderilen e-posta, şüpheli giriş uyarısı, fidye notu.",
    "Hatayı gizlemek, zararı büyütür; erken bildirim kurumun müdahale şansını artırır.",
    "Olayı kendi başınıza “düzeltmeye” çalışmayın; delilleri silmeyin, cihazı kapatmayın (BT yönlendirmedikçe).",
    "Bildirimde ne olduğunu, ne zaman fark ettiğinizi ve hangi bilgi/sistemin etkilendiğini kısa ve net anlatın.",
    "Kişisel veri içeren olaylarda KVKK kapsamında veri sorumlusunun, ihlali öğrendiği andan itibaren en geç 72 saat içinde Kurula bildirim yükümlülüğü vardır.",
    "Kişisel veri; kimliği belirli veya belirlenebilir gerçek kişiye ait her türlü bilgidir (ad, TC kimlik no, e-posta, konum, plaka vb.).",
    "Kurumunuzun olay bildirim kanalını (telefon, e-posta, bilet sistemi) önceden öğrenin."
  ],
  more: [
    "Olay müdahalesinin temel aşamaları şunlardır: hazırlık, tespit ve analiz, sınırlandırma, ortadan kaldırma, kurtarma ve olay sonrası değerlendirme. Çalışanın rolü tespit ve bildirimdir; ne kadar hızlı bildirirseniz sınırlandırma o kadar kolaylaşır.",
    "ISO/IEC 27001 kapsamında güvenlik olayları kayıt altına alınır, analiz edilir ve tekrarını önlemek için iyileştirme yapılır. Bu nedenle “ramak kala” olayları da bildirmek değerlidir; başkalarının aynı hataya düşmesini önler."
  ],
  example: "Bir çalışan oltalama bağlantısına tıklayıp parola girdiğini fark eder. Hemen BT’yi arar, parolayı değiştirir ve oturumlar sonlandırılır. Hesapta henüz bir kötüye kullanım olmadan müdahale edilmiş olur. Aynı hatayı saklayan bir çalışan, günler sonra büyük bir olayla karşılaşabilirdi.",
  dos: ["Şüphe duyduğunuz an bildirin.", "Gördüklerinizi not edin (saat, ekran, mesaj).", "BT/güvenlik birimini yönlendirmeleriyle çalışın.", "Ramak kala olayları da paylaşın."],
  donts: ["Hatayı gizlemeyin.", "Delilleri silmeyin.", "Olayı sosyal medyada veya iş dışında paylaşmayın.", "“Zaten bir şey olmaz” demeyin."],
  c: ["Oltalama bağlantısına tıklayıp parola girdiğinizi fark ettiniz. Ne yaparsınız?", "Hemen BT/güvenlik birimine bildirir ve parolayı değiştiririm", "Kimseye söylemeden beklerim", "Hesabı silip yeni hesap açarım", "Bir hafta sonra tekrar kontrol ederim", "Erken bildirim ve parola değişikliği, olası zararı büyük ölçüde sınırlar."]
}
];
