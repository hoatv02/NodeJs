import Navigo from "navigo";
import Products from "./src/pages (1)/Products/Products";
import Home from "./src/pages (1)/Home/Home";
import ProductsDetail from "./src/pages (1)/ProductsDetail/ProductsDetail";
import LayoutSite from "./src/Layout/LayoutSite";
import ManageProducts from "./src/pages (1)/ManageProducts/ManageProducts";
const $ = document.querySelector.bind(document);
const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
  const app = ($("#app").innerHTML = content);
};
router.on({
  "/": () => {
    print(LayoutSite(Home.start()));
  },
  "/products": () => {
    print(LayoutSite(Products.start()));
  },
  "/products/:id": (value) => {
    print(LayoutSite(ProductsDetail.start(value.data.id)));
  },
  "/manage": () => {
    print(LayoutSite(ManageProducts.start()));
  },
  "/login": () => {
    print(Login());
  },
  "/error": () => {
    print("Error");
  },
});

router.resolve();
