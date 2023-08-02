import ImgCard from "./images/image-product-mobile.jpg";
import IconCard from "./images/icon-cart.svg";
import ImgCardDesktop from "./images/image-product-desktop.jpg";

function App() {
  return (
    <div className="App border bg-white text-black rounded-xl max-w-2xl xl:flex xl:flex-row xl:shadow-xl">
      <header className="xl:w-1/2">
        <img
          className="rounded-t-xl xl:hidden"
          src={ImgCard}
          alt="Image Gabrielle Essence Eau De Parfum"
        />
        <img
          className="hidden xl:flex xl:rounded-l-xl"
          src={ImgCardDesktop}
          alt="Image Gabrielle Essence Eau De Parfum"
        />
      </header>
      <section className="p-5 xl:px-8 xl:py-11 flex flex-col gap-4 xl:gap-7 xl:w-1/2">
        <div className="flex flex-col gap-5">
          <h3 className="tracking-[0.3em] text-[#6C7289] text-sm">PERFUME</h3>
          <h1 id="title" className="text-3xl font-bold xl:text-4xl">
            Gabrielle Essence Eau De Parfum
          </h1>
        </div>
        <p className="text-[#6C7289] text-sm">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex flex-row items-center gap-6 ">
          <p id="paragraph-1" className="text-3xl text-[#3d8167]">
            $149.99
          </p>
          <p id="paragraph-2" className="line-through text-[#6C7289]">
            $169.99
          </p>
        </div>
        <a href="https://www.frontendmentor.io/home">
          <button className="w-full justify-center items-center flex flex-row gap-3 border py-3 rounded-xl bg-[#3d8167] text-white font-semibold hover:bg-[#1a4032] hover:cursor-cell">
            <img src={IconCard} alt="Add your product to the card" />
            <p>Add to card</p>
          </button>
        </a>
      </section>
    </div>
  );
}

export default App;
