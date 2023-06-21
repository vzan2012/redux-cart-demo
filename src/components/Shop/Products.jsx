import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test Item"
          price={6}
          description="This is a test product"
        />
      </ul>
    </section>
  );
};

export default Products;
