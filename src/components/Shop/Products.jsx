import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "First product",
    description: "First Product Description",
  },
  {
    id: "p2",
    price: 7,
    title: "Second product",
    description: "Second Product Description",
  },
  {
    id: "p3",
    price: 8,
    title: "Third product",
    description: "Third Product Description",
  },
  {
    id: "p4",
    price: 9,
    title: "Fourth product",
    description: "Fourth Product Description",
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            id={item.id}
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
        {/* <ProductItem
          title="Test Item"
          price={6}
          description="This is a test product"
        /> */}
      </ul>
    </section>
  );
};

export default Products;
