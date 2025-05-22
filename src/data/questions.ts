export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
};

export const questions: Question[] = [
  {
    id: 1,
    question: "React nedir?",
    options: ["Bir veritabanı", "Bir programlama dili", "Bir JavaScript kütüphanesi", "Bir tarayıcı eklentisi"],
    answer: "Bir JavaScript kütüphanesi",
    explanation: "React, kullanıcı arayüzleri oluşturmak için kullanılan bir JavaScript kütüphanesidir."
  },
  {
    id: 2,
    question: "JSX nedir?",
    options: ["JavaScript'in yeni bir versiyonu", "HTML ile yazılmış bir stil dosyası", "JavaScript XML", "Veritabanı sorgu dili"],
    answer: "JavaScript XML",
    explanation: "JSX, JavaScript içinde HTML benzeri bir sözdizimidir ve React bileşenlerinde kullanılır."
  },
  {
    id: 3,
    question: "React bileşenleri hangi şekilde tanımlanabilir?",
    options: ["Sadece fonksiyonlarla", "Sadece sınıflarla", "Fonksiyonlar ve sınıflarla", "Sadece HTML ile"],
    answer: "Fonksiyonlar ve sınıflarla",
    explanation: "React bileşenleri hem fonksiyonlarla hem de sınıf yapılarıyla tanımlanabilir."
  },
  {
    id: 4,
    question: "State nedir?",
    options: ["React bileşenlerinin stilidir", "Bir bileşenin iç veri durumudur", "Sunucuya gönderilen veridir", "Kullanıcının IP adresidir"],
    answer: "Bir bileşenin iç veri durumudur",
    explanation: "State, bileşenin zaman içindeki durumunu ve bu durumun nasıl değiştiğini temsil eder."
  },
  {
    id: 5,
    question: "Props nedir?",
    options: ["Component'e dışarıdan aktarılan verilerdir", "Tarayıcı özellikleridir", "CSS class isimleridir", "Veritabanı bağlantı ayarlarıdır"],
    answer: "Component'e dışarıdan aktarılan verilerdir",
    explanation: "Props, bir bileşene dışarıdan aktarılan ve bileşenin davranışını belirleyen verilerdir."
  },
  {
    id: 6,
    question: "useState hook'u ne işe yarar?",
    options: ["Bileşeni yeniden render eder", "Veri gönderir", "Durum (state) oluşturur ve yönetir", "Tarayıcı geçmişini yönetir"],
    answer: "Durum (state) oluşturur ve yönetir",
    explanation: "useState, fonksiyon bileşenlerinde durum oluşturmak ve yönetmek için kullanılır."
  },
  {
    id: 7,
    question: "React'ta hangi hook, bileşen render edildiğinde çalışır?",
    options: ["useParams", "useEffect", "useState", "useContext"],
    answer: "useEffect",
    explanation: "useEffect hook'u, bileşen render edildikten sonra belirli işlemleri gerçekleştirmek için kullanılır."
  },
  {
    id: 8,
    question: "React'ta key prop'u neden kullanılır?",
    options: ["Performansı düşürmek için", "Her bileşene benzersiz kimlik vermek için", "CSS eklemek için", "Veri gönderimi için"],
    answer: "Her bileşene benzersiz kimlik vermek için",
    explanation: "Key prop'u, React'in hangi öğelerin değiştiğini anlaması için kullanılır ve her öğeye benzersiz bir kimlik sağlar."
  },
  {
    id: 9,
    question: "Virtual DOM nedir?",
    options: ["Tarayıcıdaki DOM'un aynısıdır", "Gerçek DOM'dur", "DOM'un hafızadaki kopyasıdır", "Veritabanıdır"],
    answer: "DOM'un hafızadaki kopyasıdır",
    explanation: "Virtual DOM, React'in değişiklikleri daha verimli takip edebilmesi için kullanılan DOM'un hafızadaki kopyasıdır."
  },
  {
    id: 10,
    question: "React'ta hangi hook global veri yönetimi için en uygundur?",
    options: ["useState", "useEffect", "useContext", "useRef"],
    answer: "useContext",
    explanation: "useContext, React uygulamasında global veri yönetimini kolaylaştırmak için kullanılır."
  },

  {
    id: 11,
    question: "React bileşenleri neden küçük ve tekrar kullanılabilir olmalıdır?",
    options: ["Daha karmaşık hale getirmek için", "Kod tekrarını artırmak için", "Bakımı kolaylaştırmak ve yeniden kullanılabilirliği sağlamak için", "Yalnızca performans için"],
    answer: "Bakımı kolaylaştırmak ve yeniden kullanılabilirliği sağlamak için",
    explanation: "React'ta küçük, bağımsız bileşenler kodun bakımını kolaylaştırır ve farklı yerlerde yeniden kullanılabilir."
  },
  {
    id: 12,
    question: "React'ta controlled component ne demektir?",
    options: ["Kullanıcının kontrol ettiği bileşen", "State ile kontrol edilen form bileşeni", "Sunucu tarafından kontrol edilen bileşen", "Random olarak güncellenen bileşen"],
    answer: "State ile kontrol edilen form bileşeni",
    explanation: "Controlled component, değerini state üzerinden alan ve React tarafından kontrol edilen form bileşenidir."
  },
  {
    id: 13,
    question: "React Router'da `<Route>` bileşeninin görevi nedir?",
    options: ["Yönlendirme işlemini başlatmak", "Sayfaları yeniden yüklemek", "URL'ye göre bileşenleri render etmek", "Yalnızca veritabanına veri göndermek"],
    answer: "URL'ye göre bileşenleri render etmek",
    explanation: "<Route> bileşeni, belirli bir URL yoluna karşılık gelen bileşeni ekrana getirir."
  },
  {
    id: 14,
    question: "React’te `useRef` ne işe yarar?",
    options: ["Bileşeni yeniden render eder", "Form inputlarını style eder", "DOM'a doğrudan erişim sağlar", "Yeni bileşen oluşturur"],
    answer: "DOM'a doğrudan erişim sağlar",
    explanation: "useRef, DOM elementine doğrudan erişmek veya değişkenleri render dışında saklamak için kullanılır."
  },
  {
    id: 15,
    question: "Context API ne zaman kullanılmalıdır?",
    options: ["Sadece stil tanımlarken", "Global olarak state paylaşımı gerektiğinde", "CSS class değiştirmek için", "Veri çekme işlemi için"],
    answer: "Global olarak state paylaşımı gerektiğinde",
    explanation: "Context API, component ağacı boyunca prop drilling yapmadan veri paylaşımını sağlar."
  },
  {
    id: 16,
    question: "React'ta `key` props neden sabit ve benzersiz olmalı?",
    options: ["Veriyi şifrelemek için", "useEffect ile çalışmak için", "Liste elemanlarını takip etmek için", "Her bileşeni yeniden oluşturmak için"],
    answer: "Liste elemanlarını takip etmek için",
    explanation: "React, key sayesinde hangi elemanın değiştiğini tespit eder ve yalnızca değişen kısmı yeniden render eder."
  },
  {
    id: 17,
    question: "Bir bileşende birden fazla state varsa ne yapılmalıdır?",
    options: ["Tek bir state nesnesine tüm veriler konur", "useState birden fazla kez kullanılabilir", "useEffect ile state güncellenir", "Sadece props ile çözülür"],
    answer: "useState birden fazla kez kullanılabilir",
    explanation: "React'ta bir bileşende istediğiniz kadar useState kullanabilirsiniz."
  },
  {
    id: 18,
    question: "React'ta `memo` fonksiyonu ne işe yarar?",
    options: ["Verileri localStorage'da saklar", "Bileşenin gereksiz yere yeniden render edilmesini önler", "Form gönderimini sağlar", "Yönlendirme yapar"],
    answer: "Bileşenin gereksiz yere yeniden render edilmesini önler",
    explanation: "memo, props değişmediği sürece bileşeni yeniden render etmez ve performansı artırır."
  },
  {
    id: 19,
    question: "React'ta hangi durum `useEffect` içinde infinite loop’a sebep olur?",
    options: ["Boş dependency array kullanmak", "Hiç dependency vermemek", "State güncellemesini dependency array’de tanımlamamak", "Dependency array’e state’i dahil etmek ve sürekli güncellemek"],
    answer: "Dependency array’e state’i dahil etmek ve sürekli güncellemek",
    explanation: "useEffect içinde güncellenen state dependency olarak verilirse, sürekli render tetiklenebilir."
  },
  {
    id: 20,
    question: "React’te custom hook oluşturmanın temel faydası nedir?",
    options: ["Veriyi cache'lemek", "Kod tekrarını azaltmak", "API ile bağlantı kurmak", "Router işlemi yapmak"],
    answer: "Kod tekrarını azaltmak",
    explanation: "Custom hook'lar, ortak mantıkları soyutlayarak kod tekrarını azaltır ve okunabilirliği artırır."
  },
  {
  id: 21,
  question: "React.memo ne işe yarar?",
  options: ["Bileşeni global yapar", "Bileşeni cache'ler", "Bileşeni yeniden render etmeyi önler", "Props'u günceller"],
  answer: "Bileşeni yeniden render etmeyi önler",
  explanation: "React.memo, props değişmediğinde bileşenin yeniden render edilmesini engeller."
},
{
  id: 22,
  question: "useCallback hook'u ne amaçla kullanılır?",
  options: ["State güncellemek", "Fonksiyonu hatırlamak", "Veri fetch etmek", "Bileşeni yeniden render etmek"],
  answer: "Fonksiyonu hatırlamak",
  explanation: "useCallback, aynı fonksiyonu yeniden oluşturmadan hafızada tutmak için kullanılır."
},
{
  id: 23,
  question: "React'ta context nasıl oluşturulur?",
  options: ["createContext ile", "useState ile", "useEffect ile", "createStore ile"],
  answer: "createContext ile",
  explanation: "createContext fonksiyonu, global veriler paylaşmak için context oluşturur."
},
{
  id: 24,
  question: "React'ta hangi hook, reducer mantığı ile state yönetir?",
  options: ["useState", "useReducer", "useContext", "useMemo"],
  answer: "useReducer",
  explanation: "useReducer, Redux benzeri bir yapı sunarak karmaşık state’leri yönetmeye yardımcı olur."
},
{
  id: 25,
  question: "Props drilling nedir?",
  options: ["Verilerin hook ile yönetilmesi", "Verilerin context ile paylaşılması", "Verilerin birçok bileşenden geçerek aktarılması", "Verilerin sadece bir bileşende tutulması"],
  answer: "Verilerin birçok bileşenden geçerek aktarılması",
  explanation: "Props drilling, verilerin parent’tan child’a birden fazla ara bileşenden geçerek aktarılmasıdır."
},
{
  id: 26,
  question: "Hangi hook, render sırasında DOM’a erişimi sağlar?",
  options: ["useEffect", "useRef", "useContext", "useMemo"],
  answer: "useRef",
  explanation: "useRef ile DOM elemanlarına doğrudan erişim sağlanabilir."
},
{
  id: 27,
  question: "React Router'da dinamik route nasıl tanımlanır?",
  options: ["/user", "/:userId", "user/:id", "userId/:id"],
  answer: "/:userId",
  explanation: "':' ile başlayan ifadeler dinamik parametre anlamına gelir."
},
{
  id: 28,
  question: "React'ta Suspense bileşeni ne işe yarar?",
  options: ["State oluşturur", "Yönlendirme yapar", "Lazy yükleme için bekleme sağlar", "Veri gönderir"],
  answer: "Lazy yükleme için bekleme sağlar",
  explanation: "Suspense, lazy load edilen bileşenler yüklenene kadar fallback içerik gösterir."
},
{
  id: 29,
  question: "React hook'ları hangi tür bileşenlerde kullanılabilir?",
  options: ["Class bileşenlerinde", "Fonksiyon bileşenlerinde", "Her yerde", "Sadece JSX içinde"],
  answer: "Fonksiyon bileşenlerinde",
  explanation: "Hook'lar sadece fonksiyon bileşenleri içinde kullanılabilir."
},
{
  id: 30,
  question: "Hangi yöntemle React performansı profillenebilir?",
  options: ["React Profiler", "Chrome Extensions", "Redux DevTools", "Jest"],
  answer: "React Profiler",
  explanation: "React Profiler, uygulamanın render sürelerini analiz etmeye yardımcı olur."
},
{
  id: 31,
  question: "React bileşenlerinde default props nasıl tanımlanır?",
  options: ["props.default", "defaultProps", "setProps", "initialProps"],
  answer: "defaultProps",
  explanation: "defaultProps, bir bileşene varsayılan prop değerleri atamak için kullanılır."
},
{
  id: 32,
  question: "React form bileşeninde input değerini nasıl alırsınız?",
  options: ["e.target.text", "e.input.value", "e.target.value", "e.value"],
  answer: "e.target.value",
  explanation: "Input elemanlarındaki değer e.target.value ile alınır."
},
{
  id: 33,
  question: "React uygulamasında hata sınırları (Error Boundaries) nasıl çalışır?",
  options: ["useEffect ile tanımlanır", "Try-catch içinde kullanılır", "Class bileşeni ile try-catch benzeri çalışır", "useError hook'u ile tanımlanır"],
  answer: "Class bileşeni ile try-catch benzeri çalışır",
  explanation: "Error Boundaries, yalnızca class bileşenleri kullanılarak oluşturulur ve alt bileşenlerdeki hataları yakalar."
},
{
  id: 34,
  question: "React'ta hydration nedir?",
  options: ["Server-side rendering sonrası client tarafının devralması", "Lazy yükleme işlemi", "Veri çekme işlemi", "DOM güncellemesi"],
  answer: "Server-side rendering sonrası client tarafının devralması",
  explanation: "Hydration, sunucuda render edilen HTML'in client tarafında interaktif hale getirilmesidir."
},
{
  id: 35,
  question: "React bileşeninin yeniden render edilmesini önlemek için ne yapılabilir?",
  options: ["setState kullanmak", "useMemo ile cache'lemek", "Props güncellemek", "useEffect çalıştırmak"],
  answer: "useMemo ile cache'lemek",
  explanation: "useMemo, hesaplanan değeri hatırlayarak bileşenin gereksiz render olmasını önler."
},
{
  id: 36,
  question: "React bileşenine veri göndermek için ne kullanılır?",
  options: ["State", "Context", "Props", "Ref"],
  answer: "Props",
  explanation: "Props, bileşenler arasında veri iletimi için kullanılır."
},
{
  id: 37,
  question: "React’te hangi yapı birden fazla state güncellemesini tek işlem gibi işler?",
  options: ["useMemo", "useReducer", "Batched updates", "Concurrent mode"],
  answer: "Batched updates",
  explanation: "React, birden fazla state güncellemesini tek render ile işlemek için batched updates yapar."
},
{
  id: 38,
  question: "React'ta context ile hangi hook birlikte kullanılır?",
  options: ["useRef", "useEffect", "useContext", "useMemo"],
  answer: "useContext",
  explanation: "Context içerisindeki verilere erişmek için useContext hook'u kullanılır."
},
{
  id: 39,
  question: "React uygulamasında loading göstermek için ne yapılabilir?",
  options: ["Lazy load", "useState ile isLoading durumu", "useEffect ile veri çekmek", "Tüm bileşeni gizlemek"],
  answer: "useState ile isLoading durumu",
  explanation: "Veri çekme gibi işlemlerde loading durumu state ile kontrol edilir."
},
{
  id: 40,
  question: "React'ta portal kullanmanın amacı nedir?",
  options: ["Veri çekmek", "Modal gibi bileşenleri farklı DOM node’una render etmek", "State yönetmek", "Yönlendirme yapmak"],
  answer: "Modal gibi bileşenleri farklı DOM node’una render etmek",
  explanation: "Portals, bileşenleri parent DOM hiyerarşisi dışında render etmeye olanak tanır."
},
{
  id: 41,
  question: "React'ta Concurrent Mode’un amacı nedir?",
  options: ["Verileri daha hızlı fetch etmek", "State’i paylaşmak", "UI’yi daha duyarlı hale getirmek", "Router yönetimi"],
  answer: "UI’yi daha duyarlı hale getirmek",
  explanation: "Concurrent Mode, daha akıcı kullanıcı deneyimi için iş parçacıklarını kesintili işler."
},
{
  id: 42,
  question: "useLayoutEffect ile useEffect arasındaki fark nedir?",
  options: ["useLayoutEffect daha yavaş çalışır", "useLayoutEffect DOM boyamadan hemen önce çalışır", "useEffect DOM boyamasından önce çalışır", "İkisi aynıdır"],
  answer: "useLayoutEffect DOM boyamadan hemen önce çalışır",
  explanation: "useLayoutEffect, tarayıcı DOM’u boyamadan hemen önce çalışır."
},
{
  id: 43,
  question: "React bileşenleri neden küçük ve tek amaçlı olmalıdır?",
  options: ["Performans için", "Test edilebilirlik ve yeniden kullanılabilirlik için", "Daha fazla CSS uygulanabilmesi için", "JSX kısıtlaması nedeniyle"],
  answer: "Test edilebilirlik ve yeniden kullanılabilirlik için",
  explanation: "Tek amaçlı küçük bileşenler daha kolay test edilir ve yeniden kullanılabilir."
},
{
  id: 44,
  question: "React’te fallback UI nedir?",
  options: ["Veri yüklenirken gösterilen arayüz", "Uygulama yedek tasarımı", "Redux alternatifidir", "Tarayıcı temasıdır"],
  answer: "Veri yüklenirken gösterilen arayüz",
  explanation: "Suspense ve lazy bileşenlerde, bileşen yüklenene kadar gösterilen geçici arayüzdür."
},
{
  id: 45,
  question: "React uygulamasında TypeScript’in katkısı nedir?",
  options: ["Verileri gizler", "Stilleri kontrol eder", "Tip güvenliği sağlar", "Server çalıştırır"],
  answer: "Tip güvenliği sağlar",
  explanation: "TypeScript, JavaScript'e tip güvenliği ve daha iyi geliştirme deneyimi kazandırır."
},
{
  id: 46,
  question: "React Native nedir?",
  options: ["React için test aracı", "React'in mobil uygulama geliştirme versiyonu", "Veri görselleştirme kütüphanesi", "CSS framework"],
  answer: "React'in mobil uygulama geliştirme versiyonu",
  explanation: "React Native, React sözdizimiyle native mobil uygulama geliştirmenizi sağlar."
},
{
  id: 47,
  question: "React bileşeni nasıl test edilir?",
  options: ["Sadece tarayıcıda", "CSS ile", "Jest ve React Testing Library ile", "Redux ile"],
  answer: "Jest ve React Testing Library ile",
  explanation: "React bileşenleri Jest ve React Testing Library kullanılarak test edilebilir."
},
{
  id: 48,
  question: "Hangi araç React state yönetimi için değildir?",
  options: ["Redux", "MobX", "Recoil", "Axios"],
  answer: "Axios",
  explanation: "Axios, HTTP istekleri yapmak için kullanılır, state yönetimi yapmaz."
},
{
  id: 49,
  question: "React’te prop types tanımı hangi kütüphane ile yapılır?",
  options: ["TypeScript", "React-Check", "PropTypes", "useProp"],
  answer: "PropTypes",
  explanation: "PropTypes, prop türlerini kontrol etmek için kullanılan bir kütüphanedir."
},
{
  id: 50,
  question: "React’te children nedir?",
  options: ["Bileşenin alt bileşenleri", "Bir state", "Yalnızca bir prop", "useEffect sonucu"],
  answer: "Bileşenin alt bileşenleri",
  explanation: "`children` prop'u, bileşen içine yerleştirilen JSX içeriklerdir."
}
];
