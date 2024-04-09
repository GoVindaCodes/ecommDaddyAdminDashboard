import useAsync from "hooks/useAsync";
import React, { useEffect, useState } from "react";
import CategoryServices from "services/CategoryServices";

const ChildrenCategory = ({ value }) => {
  const [categories, setCategories] = useState([]);

  const { data } = useAsync(CategoryServices.getAllCategory);

  useEffect(() => {
    if (data && value) {
      const result = data.filter((parent) =>
        parent.parentName.toLowerCase().includes(value.toLowerCase())
      );
      setCategories(result);
    } else {
      setCategories(data || []); // Handle data being undefined or null
    }
  }, [data, value]);

  return (
    <>
      {categories.map((category) => (
        <option key={category._id} value={category.parentName}>
          {category.parentName}
        </option>
      ))}
    </>
  );
};

export default ChildrenCategory;
