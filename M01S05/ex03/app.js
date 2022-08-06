const calculateRectangleArea = function (width, height) {
  return width * height;
};

console.warn(`
Stiind ca un camp dreptunghiular de hamei produce 25kg/m2 . Ce diferenta de
productie este intre un teren de 100m pe 250m si unul de 350m pe 200m?
`);
const yield = 25; // kilograme / metru patrat
const field1Yield = yield * calculateRectangleArea(100, 250);
const field2Yield = yield * calculateRectangleArea(350, 200);
console.log(field2Yield - field1Yield);

console.warn(`
Stiind ca din 10kg de hamei produc 2.5l de bere, cati litri de bere va produce un
teren de 400m pe 370m?
`);
const beerPerKilo = 2.5 / 10; // litri / kilogram
const beerPerSquareMeter = yield * beerPerKilo; // litri / mp
const field3Yield = beerPerSquareMeter * calculateRectangleArea(400, 370);
console.log(field3Yield);

console.warn(`
Stiind ca un camp dreptunghiular de grau produce 32kg/m2  de faina. Afla si afiseaza cate
kilograme de paine produce un camp de 300 pe 200 metri stiind ca dintr-un kilogram de faina
ies 2.5 kg de paine.
`);
const flourPerSquareMeter = 32; // kg faina / mp
const breadPerKiloFlour = 2.5; // kg paine / kg faina
const fieldProduction = flourPerSquareMeter * breadPerKiloFlour; // paine produsa din 32 kg faina per metru patrat
const fiel1dArea = calculateRectangleArea(300, 200);
const totalBreadProduction = fieldProduction * fiel1dArea;
console.log(totalBreadProduction);

console.warn(`
Dar doua campuri de 150 pe 200 si 500 pe 300 in total?`);
const field2Area = calculateRectangleArea(150, 200);
const field3Area = calculateRectangleArea(500, 300);
const twoFields = field2Area + field3Area;

const breadTwoFields = twoFields * fieldProduction;
console.log(breadTwoFields);
