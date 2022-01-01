import lifting from "../assets/images/lashes/lifting-rzęs-3.jpg" ;
import laminating from '../assets/images/lashes/laminacja-brwi.jpg';
import henna from "../assets/images/lashes/henna-pudrowa.jpg";
import lashes3D from '../assets/images/lashes/3D.jpg';
import lashes2D from '../assets/images/lashes/2D.jpg';
import lashes11 from '../assets/images/lashes/3D-2.jpg';

export const services =[
    {
        serviceName:"Lifting rzęs",
        servicePhoto:`${lifting}`,
        serviceExcerpt:`Lifting rzęs to zabieg podniesienia i podkręcenia rzęs, który daje trwały, naturalny efekt...`,
        serviceDescription1:`Lifting rzęs to zabieg podniesienia i podkręcenia rzęs, który daje trwały, naturalny efekt. 
        Polecany jest kobietom, których rzęsy rosną w linii prostej, są cienkie, rzadkie i trudno zmienić to przy pomocy
        zalotki i tuszu. Podczas liftingu, kosmetyczka, po oczyszczeniu i zabezpieczeniu okolic oka, zawija rzęsy na malutki, 
        silikonowy wałeczek, po czym nakłada na włoski rzęs specjalistyczny preparat.`,
        serviceDescription2:`Kolejnym etapem zabiegu, wykonywanym po liftingu jest laminacja rzęs, która
        polega ona na nałożeniu na rzęsy wartościowej odżywki czyli olejku keratynowego.`, 
        servicePrice:"150 zł",
        duration:"2h",
        id:"lifting_rzes",
    },
    {
        serviceName:"Laminacja brwi",
        servicePhoto:`${laminating}`,
        serviceExcerpt:"Zabieg pozwalający na semi-permanentną zmianę ułożenia włosków brwi...",
        serviceDescription1:`Laminacja brwi to procedura polegająca na trwałej zmianie kształtu oraz kierunku 
        wzrostu włosków na skutek działania kwasu tioglikolowego, który wpływa na wiązania dwusiarczkowe,
         rozrywając je w pierwszym etapie, następnie tworząc nowe.Łuska włoska zostaje otwarta, dlatego bardzo ważną 
         kwestią w kolejnych etapach zabiegu jest regeneracja.`,
        serviceDescription2:`To zapewnia nam zastosowanie preparatów silnie 
        regenerujących, które w składzie zawierają keratynę oraz olejki roślinne. Dodatkowo produkty te działają okluzyjnie, 
        uzupełniają spoiwo między łuskami, poprawiają kondycję oraz elastyczność włoska, przywracają odpowiednie natłuszczenie 
        oraz nadają włoskom blask.`, 
        servicePrice:"150 zł",
        duration:"2h",
        id:"laminacja_brwi",

    },
    {
        serviceName:"Henna pudrowa brwi",
        servicePhoto:`${henna}`,
        serviceExcerpt:"Innowacyjna metoda koloryzacji i stylizacji brwi, w całości oparta na naturalnych składnikach...",
        serviceDescription1:`Henna pudrowa jest naturalnym preparatem pochodzenia roślinnego. Dzięki prostemu, naturalnemu składowi produkt ten nie tylko 
        skutecznie barwi, lecz także pielęgnuje skórę i włoski dzięki zawartości minerałów i witamin. Efekty zabiegu utrzymują się nawet do 6 tygodni. `,
        servicePrice:"150 zł",
        duration:"2h",
        id:"henna_pudrowa_brwi",

    },
    {
        serviceName:"Rzęsy 3D",
        servicePhoto:`${lashes3D}`,
        serviceExcerpt:"Zabieg przedłużania rzęs metodą 3D, oznacza, że do każdej naturalnej rzęsy zostają doklejone 3 sztuczne...",
        serviceDescription1:`Rzęsy przedłużane metodą 3:1, nazywa się właśnie rzęsami 3D. Technika ta polega na tym, że do każdej
        z naturalnych rzęs doklejana jest kępka, która składa się z trzech sztucznych rzęs. Wówczas uzyskuje się atrakcyjny efekt, 
        który z powodzeniem zastąpi codzienny makijaż.`,
        serviceDescription2:`Aplikacja rzęs kępek 3D jest przeprowadzana przez profesjonalne stylistki. Istotne jest wykorzystanie
         specjalnego kleju, który pomoże przymocować włoski tak, żeby były bardziej stabilne i mogły utrzymać się przez okres 2-6 tygodni.`,
        servicePrice:"150 zł",
        duration:"2h",
        id:"rzesy_3D",

    },
    {
        serviceName:"Rzęsy 2D",
        servicePhoto:`${lashes2D}`,
        serviceExcerpt:"To jedna z najczęściej wybieranych objętościowych metod przedłużania rzęs, dzięki której spojrzenie nabiera wyrazistości...",
        serviceDescription1:`Zabieg przedłużania rzęs metodą 2D, oznacza, że do każdej naturalnej rzęsy doczepiane są dwie sztuczne rzęsy,
         które wykonane są z jedwabiu syntetycznego lub włosia norki.`,
        serviceDescription2:`Stylistka rzęs dobiera indywidualną stylizację do wyglądu oka i oczekiwań każdej klientki`,
        servicePrice:"150 zł",
        duration:"2h",
        id:"rzesy_2D",

    },
    {
        serviceName:"Rzęsy 1:1",
        servicePhoto:`${lashes11}`,
        serviceExcerpt:"Metoda polega na przyklejeniu jednej rzęsy syntetycznej do jednej rzęsy naturalnej...",
        serviceDescription1:`Technika ta jest jedną z najpopularniejszych i najbardziej klasycznych 
        sposobów stylizacji rzęs. Delikatnie podkreśla spojrzenie, a jednocześnie sprawia, 
        że oczy wyglądają lekko i naturalnie. Zabieg zapewnia maksymalny komfort podczas noszenia i 
        jest ciekawą alternatywą dla kobiet, które chcą zaoszczędzić czas na codziennym tuszowaniu rzęs mascarą.`,
        duration:"2h",
        servicePrice:"150 zł",
        id:"rzesy_1_1"
    }
];