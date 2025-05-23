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
    question: `Aşağıdaki React kodu çalıştırıldığında ne olur?

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Artır</button>
      <p>{count}</p>
    </div>
  );
}`,
    options: [
      "Sayfa hata verir.",
      "Butona basıldığında sayfa yenilenir.",
      "Butona basıldıkça count artar.",
      "useState tanımsızdır."
    ],
    answer: "Butona basıldıkça count artar.",
    explanation: "useState ile tanımlanan count state'i butona her basıldığında bir artar ve bileşen yeniden render edilir."
  },
  {
    id: 2,
    question: `Bu React kodundaki hata nedir?

function Greeting() {
  const name = "Sinem";
  return (
    <div>
      <h1>Merhaba, {name}</h1>
    </div>
  );
}`,
    options: [
      "Syntax hatası var.",
      "name değişkeni yanlış tanımlanmış.",
      "Fonksiyon bileşenleri büyük harfle başlamalı.",
      "Kodda hata yoktur."
    ],
    answer: "Kodda hata yoktur.",
    explanation: "Fonksiyon bileşeni doğru tanımlanmış, JSX içinde JavaScript ifadeleri süslü parantez içinde doğru kullanılmıştır."
  },
  {
    id: 3,
    question: `Aşağıdaki kod parçası neden hata verir?

const App = () => {
  const [value, setValue] = useState;
  return <div>{value}</div>;
}`,
    options: [
      "setValue yanlış kullanılmış.",
      "useState yanlış kullanılmış.",
      "JSX içinde hata var.",
      "value tanımsız."
    ],
    answer: "useState yanlış kullanılmış.",
    explanation: "useState çağrısı parantezle yapılmalıdır: useState(başlangıçDeğeri). Parantez eksik olduğu için hata verir."
  },
  {
    id: 4,
    question: `Aşağıdaki kod parçası çalışır mı?

function MyComponent() {
  let count = 0;

  function handleClick() {
    count++;
    console.log(count);
  }

  return <button onClick={handleClick}>Click</button>;
}`,
    options: [
      "Evet, ancak count her zaman 1'den başlar.",
      "Hayır, JSX hatası var.",
      "Evet, count her tıklamada bir artar ve ekranda görünür.",
      "Hayır, count değişkeni global tanımlanmalı."
    ],
    answer: "Evet, ancak count her zaman 1'den başlar.",
    explanation: "count her render'da sıfırlanır. useState kullanılmadığı için değer her zaman 0'dan başlar."
  },
  {
    id: 5,
    question: `Aşağıdaki kod ne zaman sonsuz döngüye girer?

useEffect(() => {
  setData(fetchData());
}, [data]);`,
    options: [
      "Hiçbir zaman sonsuz döngüye girmez.",
      "data değişmediği sürece çalışmaz.",
      "Her render'da data değişirse sonsuz döngü oluşur.",
      "fetchData yanlış yazılmıştır."
    ],
    answer: "Her render'da data değişirse sonsuz döngü oluşur.",
    explanation: "data state'i değiştiğinde useEffect tekrar çalışır, bu da tekrar setData çağrılmasına neden olur ve sonsuz döngü oluşur."
  },
  {
    id: 6,
    question: `Bu TypeScript kodunda hata var mı?

type User = {
  name: string;
  age?: number;
};

const user: User = {
  name: "Ali"
};`,
    options: [
      "Evet, age zorunlu tanımlanmalı.",
      "Hayır, çünkü age opsiyoneldir.",
      "Evet, name eksik.",
      "Evet, tip hatası var."
    ],
    answer: "Hayır, çünkü age opsiyoneldir.",
    explanation: "age alanı '?' ile tanımlandığı için opsiyoneldir. Bu yüzden yalnızca name tanımlamak yeterlidir."
  },
  {
    id: 7,
    question: `Aşağıdaki kod neden bekleneni vermez?

const arr = [1, 2, 3];
const result = arr.map(async (num) => num * 2);
console.log(result);`,
    options: [
      "map kullanılmaz.",
      "async map fonksiyonu yanlış.",
      "result bir Promise dizisidir.",
      "Kodda hata yok."
    ],
    answer: "result bir Promise dizisidir.",
    explanation: "async fonksiyonlar Promise döner. Bu nedenle map işlemi sonucunda result, sayılar yerine Promise'lerden oluşan bir dizidir."
  },
  {
    id: 8,
    question: `Bu React kodundaki sorun nedir?

function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}`,
    options: [
      "map yanlış kullanılmış.",
      "key değeri benzersiz değilse sorun çıkar.",
      "index kullanılmalıydı.",
      "items hatalıdır."
    ],
    answer: "key değeri benzersiz değilse sorun çıkar.",
    explanation: "React'ta key prop'u benzersiz olmalıdır. item değerleri benzersiz değilse performans sorunları veya hatalar oluşabilir."
  },
  {
    id: 9,
    question: `Aşağıdaki React useEffect kullanımı hakkında ne söylenebilir?

useEffect(() => {
  console.log("Component yüklendi");
}, []);`,
    options: [
      "Her render'da çalışır.",
      "Hiçbir zaman çalışmaz.",
      "Sadece component ilk yüklendiğinde çalışır.",
      "State değişiminde tetiklenir."
    ],
    answer: "Sadece component ilk yüklendiğinde çalışır.",
    explanation: "useEffect'in dependency array'i boş olduğunda, bu effect sadece component mount edildiğinde çalışır."
  },
  {
    id: 10,
    question: `Aşağıdaki kodda hangi sorun vardır?

function App() {
  const [name, setName] = useState("");

  return (
    <input value={name} onChange={(e) => setName(e)} />
  );
}`,
    options: [
      "useState yanlış kullanılmış.",
      "setName fonksiyonu eksik.",
      "onChange event'ini doğru işlemez.",
      "JSX hatası vardır."
    ],
    answer: "onChange event'ini doğru işlemez.",
    explanation: "onChange event handler içinde 'e' doğrudan setName'e verilmiş. Ancak e.target.value şeklinde alınmalıdır."
  },
  {
  id: 11,
  question: `Aşağıdaki kod parçasında hangi hata yapılmıştır?

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
  }, []);

  return <div>{seconds}</div>;
}`,
  options: [
    "useState hatalı kullanılmış.",
    "useEffect bağımlılık dizisi eksik.",
    "seconds state'i her zaman 0 olarak kalır.",
    "setInterval yanlış kullanılmış."
  ],
  answer: "seconds state'i her zaman 0 olarak kalır.",
  explanation: "setInterval içindeki callback, ilk render'daki 'seconds' değerine bağlı kalır. Bu nedenle her saniyede 0 + 1 hesaplanır ve state her zaman 1 olur. Doğru kullanım için fonksiyonel setState (setSeconds(prev => prev + 1)) kullanılmalıdır."
},
{
    id: 12,
    question: `Aşağıdaki kod ne tür bir bellek sızıntısı riski taşır?

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  return <div>{data.length}</div>;
}`,
    options: [
      "fetch hatalı kullanılmış.",
      "setData yanlış yazılmış.",
      "Component unmount edildiğinde ongoing fetch iptal edilmez.",
      "useEffect dependency dizisi hatalı."
    ],
    answer: "Component unmount edildiğinde ongoing fetch iptal edilmez.",
    explanation: "Eğer component fetch işlemi bitmeden unmount olursa, setState çağrısı bir uyarı üretir. AbortController kullanılarak fetch işlemi iptal edilmelidir."
  },
  {
    id: 13,
    question: `Aşağıdaki TypeScript kodu neden derleme hatası verir?

type User = {
  name: string;
};

const user: User = null;` ,
    options: [
      "name property eksik.",
      "null değeri User tipine atanamaz.",
      "type yerine interface kullanılmalı.",
      "TS config dosyası eksik."
    ],
    answer: "null değeri User tipine atanamaz.",
    explanation: "Varsayılan olarak, TypeScript'te bir değişkenin null olabilmesi için union tipi (User | null) tanımlanmalıdır. Aksi halde derleme hatası alınır."
  },
  {
    id: 14,
    question: `Aşağıdaki React kodunda performans problemi nereden kaynaklanır?

const List = ({ items }) => {
  const renderedItems = items.map(item => <li>{item}</li>);

  return <ul>{renderedItems}</ul>;
};

function App() {
  const [list, setList] = useState([1, 2, 3]);

  return <List items={list} />;
}`,
    options: [
      "useMemo kullanılmıyor.",
      "useEffect yanlış yerde.",
      "items değişmiyor.",
      "Key prop'u eksik."
    ],
    answer: "Key prop'u eksik.",
    explanation: "React listeleri işlerken her öğe için 'key' prop'una ihtiyaç duyar. Aksi halde yeniden render sırasında performans düşebilir veya hatalı davranışlar görülebilir."
  },
  {
    id: 15,
    question: `Aşağıdaki kod TypeScript ile neden tip hatası verir?

const getLength = (value: string | string[]): number => {
  return value.length;
};` ,
    options: [
      "value.length her iki tipte de bulunmaz.",
      "Fonksiyon tipi yanlış yazılmış.",
      "Type guard eksik.",
      "string tipi number ile toplanamaz."
    ],
    answer: "Type guard eksik.",
    explanation: "string ve string[] tiplerinin her ikisi de 'length' özelliğine sahip olsa da, TypeScript birleşik türlerde doğrudan ortak olmayan özelliklere erişime izin vermez. Type guard kullanmak gerekir."
  },
   {
    id: 16,
    question: `useEffect(() => {
  console.log("Component mounted");
}, [count]);

Bu useEffect ne zaman çalışır?`,
    options: [
      "Sadece component ilk yüklendiğinde",
      "Her render'da",
      "Sadece count değiştiğinde",
      "Hiçbir zaman"
    ],
    answer: "Sadece count değiştiğinde",
    explanation: "Dependency array içinde sadece 'count' yer aldığı için, sadece count değeri değiştiğinde çalışır."
  },

  {
    id: 17,
    question: `Bir componentin re-render edilmesini engellemek için aşağıdakilerden hangisi kullanılır?`,
    options: [
      "useMemo",
      "useCallback",
      "React.memo",
      "useEffect"
    ],
    answer: "React.memo",
    explanation: "React.memo bir bileşeni sararak, props'lar değişmedikçe yeniden render edilmesini engeller."
  },

  {
    id: 18,
    question: `Aşağıdaki tanım ne işe yarar?

const add = useCallback((a, b) => a + b, []);`,
    options: [
      "Fonksiyonun değişmesini engeller",
      "Fonksiyonun içini cache'ler",
      "Fonksiyonu her render'da yeniden oluşturur",
      "Fonksiyon sadece ilk render'da çalışır"
    ],
    answer: "Fonksiyonun değişmesini engeller",
    explanation: "useCallback, dependency array değişmediği sürece aynı fonksiyon referansını döndürür."
  },

  {
    id: 19,
    question: `React’te context API hangi problem için en uygundur?`,
    options: [
      "DOM manipülasyonu",
      "Veri görselleştirme",
      "Global state paylaşımı",
      "Routing işlemleri"
    ],
    answer: "Global state paylaşımı",
    explanation: "Context API, componentler arasında prop drilling yapmadan veri paylaşmak için kullanılır."
  },
  {
    id: 20,
    question: `React’te controlled component ne anlama gelir?`,
    options: [
      "Kendi durumunu yönetemeyen component",
      "State'i DOM'dan alan component",
      "State'i React tarafından kontrol edilen form elementi",
      "Context kullanan component"
    ],
    answer: "State'i React tarafından kontrol edilen form elementi",
    explanation: "Controlled component'lerde input'ların değeri bir state tarafından kontrol edilir."
  },
  {
    id: 21,
    question: `Virtual DOM ne işe yarar?`,
    options: [
      "Gerçek DOM'u kaldırır",
      "DOM işlemlerini yavaşlatır",
      "DOM güncellemelerini daha verimli hale getirir",
      "Sadece class componentlerde kullanılır"
    ],
    answer: "DOM güncellemelerini daha verimli hale getirir",
    explanation: "Virtual DOM, gerçek DOM'daki değişiklikleri minimize ederek performansı artırır."
  },
  {
    id: 22,
    question: `Aşağıdakilerden hangisi React Router kullanımı için doğrudur?`,
    options: [
      "<Router path='/home'>Home</Router>",
      "<Route path='/home' component={Home} />",
      "<Route to='/home' component={Home} />",
      "<Navigate path='/home' element={<Home />} />"
    ],
    answer: "<Route path='/home' component={Home} />",
    explanation: "React Router v5'te route tanımı bu şekilde yapılır. v6 ile birlikte 'element' kullanımı gelmiştir."
  },
  {
    id: 23,
    question: `Aşağıdaki kod parçası ne işe yarar?

const MyComponent = React.memo(() => {
  return <div>Memoized</div>;
});`,
    options: [
      "Component'in tüm props'larını kaldırır",
      "Component her render'da yeniden çalışır",
      "Component sadece props değişince render edilir",
      "Component'in DOM'a erişimini sağlar"
    ],
    answer: "Component sadece props değişince render edilir",
    explanation: "React.memo, props'lar değişmediği sürece component'i yeniden render etmez."
  },
  {
    id: 24,
    question: `React'te neden key prop'u kullanılır?`,
    options: [
      "Component'e id vermek için",
      "Render'ı zorlamak için",
      "Listelerde öğeleri benzersiz şekilde tanımlamak için",
      "Style vermek için"
    ],
    answer: "Listelerde öğeleri benzersiz şekilde tanımlamak için",
    explanation: "Key prop'u, React'in hangi öğenin değiştiğini anlamasına yardımcı olur."
  },
  {
    id: 25,
    question: `Aşağıdaki JSX ifadesi ne döner?

{true && <p>Merhaba</p>}`,
    options: [
      "Hiçbir şey",
      "true",
      "<p>Merhaba</p>",
      "false"
    ],
    answer: "<p>Merhaba</p>",
    explanation: "true && ifade olduğunda, ifade döner. false && olsaydı, false dönerdi."
  },
  {
    id: 26,
    question: `React'te aşağıdaki kullanım ne hata üretir?

const [count, setCount] = useState();
console.log(count + 1);`,
    options: [
      "Hata vermez, NaN döner",
      "ReferenceError",
      "count undefined olduğu için TypeError",
      "React crash olur"
    ],
    answer: "Hata vermez, NaN döner",
    explanation: "useState() çağrıldığında undefined ile başlar, undefined + 1 = NaN olur ama hata atmaz."
  },
  {
    id: 27,
    question: `Aşağıdaki JSX neden hata verir?

const el = <div class="box">Hello</div>;`,
    options: [
      "class kullanılmaz, className olmalı",
      "div kapatılmadığı için",
      "'box' tanımsız olduğu için",
      "JSX içinde div kullanılamaz"
    ],
    answer: "class kullanılmaz, className olmalı",
    explanation: "JSX'te class yerine className kullanılır çünkü class JS'de reserved keyword'dür."
  },
  {
    id: 28,
    question: `Aşağıdaki useEffect sonsuz döngüye girer mi?

useEffect(() => {
  setValue(value + 1);
}, [value]);`,
    options: [
      "Evet",
      "Hayır",
      "Sadece bir kez",
      "Bağımlılık array'i olmadığı için hata verir"
    ],
    answer: "Evet",
    explanation: "Her seferinde value güncellendiği için tekrar çalışır ve sonsuz döngüye girer."
  },
  {
    id: 29,
    question: `React'te props drilling nedir?`,
    options: [
      "Props'un yanlış yazılması",
      "Props'un component'ten component'e manuel olarak iletilmesi",
      "Props'un default olması",
      "Props yerine context kullanılması"
    ],
    answer: "Props'un component'ten component'e manuel olarak iletilmesi",
    explanation: "Props drilling, bir veriyi çok katmanlı component ağacında aktarmak anlamına gelir."
  },
  {
    id: 30,
    question: `React'te bu kod ne döner?

console.log(typeof null);`,
    options: [
      "'object'",
      "'null'",
      "'undefined'",
      "Hata verir"
    ],
    answer: "'object'",
    explanation: "JavaScript'te bir bug nedeniyle typeof null === 'object' döner."
  }

];
