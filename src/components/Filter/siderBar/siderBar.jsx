import Category from "../category/category";
import Colors from "../color/color";
import Price from "../price/price";

Category
const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar mr-7">

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
