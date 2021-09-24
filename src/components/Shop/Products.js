import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    desciption: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    desciption: "The second book I ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(({ id, title, price, desciption }) => (
          <ProductItem
            key={id}
            id={id}
            title={title}
            price={price}
            description={desciption}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
