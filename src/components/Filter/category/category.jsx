import { useEffect, useState } from "react";
import api from "../../../utils/api-call";
import Input from "../../ButtonComp/InputField";
function Category({ handleChange }) {
  return (
    <div>
      <h2 className="">Category</h2>

      <div>
        <label className="flex gap-3 m-2">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="pant"
          title="Pants"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="suit"
          title="Suit"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="short"
          title="Shorts"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="counsel"
          title="Counsel"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
