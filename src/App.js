import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Catalog from "./pages/catalog/Catalog";
import Contacts from "./pages/contacts/Contacts";
import News from "./pages/news/News";
import Products from "./pages/products/Products";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import NewsDetail from "./pages/news/newsDetail/NewsDetail";
import ProductDetails from "./pages/products/productDetails/productDetails";
import Checkout from "./pages/checkout/Checkout";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { newsData } from "./redux/newsSlice";
import { getData } from "./utils";
import Cart from "./pages/cart/Cart";
import DesignerFormalization from "./pages/designerFormalization/DesignerFormalization";
import PrivacyPolicy from "./pages/privacyPolicy/privacyPolicy";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getNews(url) {
      const res = await getData(url);
      dispatch(newsData(res));
    }
    getNews("news/");
  }, [dispatch]);

  const [updateCart, setUpdateCart] = useState(false);
  console.log(updateCart);
  return (
    <>
      <Header updateCart={updateCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart setUpdateCart={setUpdateCart} />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<Products />} />
        <Route
          path="/catalog/:id/:id"
          element={<ProductDetails setUpdateCart={setUpdateCart} />}
        />
        <Route
          path="/products/:id"
          element={<ProductDetails setUpdateCart={setUpdateCart} />}
        />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/designer" element={<DesignerFormalization />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
