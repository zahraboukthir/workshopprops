import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoterBar from "./components/FoterBar";
import NavigationBar from "./components/NavigationBar";
import { ProductList } from "./components/ProductList";
import RecomProd from "./components/RecomProd";

function App() {
  const products = [
    {
      imgSrc: "https://ticou.net/site/assets/images/ordinateur-pc-apple.jpg",
      name: "pc portable",
      price: 1200,
      qts: 30,
      rate: 2,
      comments: [
        {
          nameuser: "mohammed",
          body: "not good",
        },
        {
          nameuser: "ali",
          body: "bed",
        },
      ],
    },
    {
      imgSrc:
        "https://selectshop.tn/31102-medium_default/imprimante-jet-d-encre-canon-pixma-3140-couleur-wi-fi.jpg",
      name: "impremante",
      price: 700,
      qts: 25,
      rate: 5,
      comments: [
        {
          nameuser: "mohammed",
          body: "very good",
        },
        {
          nameuser: "ali",
          body: "good",
        },
      ],
    },
    {
      imgSrc:
        "data:image/jpeg;base64,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",
      name: "souris",
      price: 15,
      qts: 40,
      rate: 4,
      comments: [
        {
          nameuser: "mohammed",
          body: "not good",
        },
        {
          nameuser: "ali",
          body: "good",
        },
      ],
    },
  ];
  const alerstName = (prodname) => {
    alert(prodname);
  };
  return (
    <div className="App">
      <NavigationBar />
      <ProductList produits={products} />
      <RecomProd produits={products} funct={alerstName} />
      <FoterBar names={["manel", "kais", "wijden"]} text="hi">
        <div>
          <img src={products[0].imgSrc} alt="" />
        </div>
      </FoterBar>
    </div>
  );
}

export default App;
