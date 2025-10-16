import Input from "../../ButtonComp/InputField";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="flex gap-3 m-2">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={200}
          title="$160 - 200"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={400}
          title="$240 - $400"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={500}
          title="$410 - $500"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={600}
          title="Over $510"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
