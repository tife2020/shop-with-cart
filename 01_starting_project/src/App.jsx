import Header from "./components/Header";
import Shop from "./components/Shop";
import ShopContextProvider from "./store/ShopContextProvider";

function App() {

  return (
    <ShopContextProvider>
      <div className="mx-auto max-w-[70%] font-cusFont ">
        <Header />
        <Shop />
      </div>
    </ShopContextProvider>
  );
}

export default App;
