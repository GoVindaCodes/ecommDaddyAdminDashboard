// For Dynamic datas

//const showingTranslateValue = (data, lang) => {
//console.log("data : ", data, " langs :", lang);
//  return data !== undefined && Object?.keys(data).includes(lang)
//    ? data[lang]
//    : data?.en;
//};

// Added by : Govinda 28/3/2024 just for static data as of now

const showingTranslateValue = (categoryName) => {
  // console.log("hi", categoryName)
  const translations = {};
  if (translations.hasOwnProperty(categoryName)) {
    return translations[categoryName];
  } else {
    return categoryName;
  }
};

const showingTranslateValue1 = (categoryName) => {
  console.log("hi", categoryName)
  const translations = [];
  if (translations.hasOwnProperty(categoryName)) {
    return translations[categoryName];
  } else {
    return categoryName;
  }
};

const showingImage = (data) => {
  return data !== undefined && data;
};

const showingUrl = (data) => {
  return data !== undefined ? data : '!#';
};

export { showingTranslateValue, showingImage, showingUrl, showingTranslateValue1 };
