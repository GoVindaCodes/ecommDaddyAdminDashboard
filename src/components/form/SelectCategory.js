import { Select } from "@windmill/react-ui";
import React from "react";
import { useTranslation } from "react-i18next";

//internal import

// import useAsync from "hooks/useAsync";
// import CategoryServices from "services/CategoryServices";
import { showingTranslateValue } from "utils/translate";
import categoryData from "utils/categories";

const SelectCategory = ({ setCategory, lang }) => {
  // const { data } = useAsync(CategoryServices.getAllCategories);
  const data = categoryData;
  // console.log('data category', data)
  const { t } = useTranslation();

  const handleChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedOption = e.target[selectedIndex];
    //console.log("Selected category value:", selectedOption.value);
    // console.log("Selected category text:", selectedOption.text);
    setCategory(selectedOption.value);
  };
  return (
    <>
      <Select
        onChange={handleChange}
        className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
      >
        <option value="All" defaultValue hidden>
          {t("Category")}
        </option>
        {data?.map((data) => {
          // console.log('Parent data:', data.parent);
          return (
            <option key={data._id} value={data._id}>
              {showingTranslateValue(data.parent, lang)}
            </option>
          );
        })}

      </Select>
    </>
  );
};

export default SelectCategory;
