import useAsync from "hooks/useAsync";
import Multiselect from "multiselect-react-dropdown";
import Tree from "rc-tree";
import CategoryServices from "services/CategoryServices";
import { notifySuccess } from "utils/toast";
import { showingTranslateValue, showingTranslateValue1 } from "utils/translate";

const ParentCategory = ({
  selectedCategory,
  setSelectedCategory,
  setDefaultCategory,
  lang,
}) => {
  const { data, loading } = useAsync(CategoryServices?.getAllCategory);


  const STYLE = `
  .rc-tree-child-tree {
    display: block;
  }
  .node-motion {
    transition: all .3s;
    overflow-y: hidden;
  }
`;

  const motion = {
    motionName: "node-motion",
    motionAppear: false,
    onAppearStart: (node) => {
      return { height: 0 };
    },
    onAppearActive: (node) => ({ height: node.scrollHeight }),
    onLeaveStart: (node) => ({ height: node.offsetHeight }),
    onLeaveActive: () => ({ height: 0 }),
  };

  // const renderCategories = (categories) => {
  //   let myCategories = [];
  //   for (let category of categories) {
  //     myCategories.push({
  //       title: showingTranslateValue(category.parent, lang),
  //       key: category._id,
  //       children:
  //         category.children?.length > 0 && renderCategories(category.children), // Fix
  //     });
  //   }

  //   return myCategories;
  // };


  const renderCategories = (categories) => {
    let myCategories = [];
    if (categories !== undefined) {
      for (let category of categories) {
        // console.log("categories from Categories Drawer :", category)
        let children = [];
        if (category.children && category.children.length > 0) {
          children = category.children.map(child => ({
            title: showingTranslateValue(child, lang),
            key: child,
          }));
        }
        myCategories.push({
          title: showingTranslateValue(category?.name, lang),
          key: category._id,
          children: children,
        });
      }
    }

    return myCategories;
  };




  const findObject = (obj, target) => {
    return obj._id === target
      ? obj
      : obj?.children?.reduce(
        (acc, obj) => acc ?? findObject(obj, target),
        undefined
      );
    // if (obj._id === target) return obj;

    // for (let c of obj.children) {
    //   let x = findObject(target, c);
    //   console.log('c', c);
    //   if (x) return x;
    // }
  };

  // const handleSelect = (key) => {
  //   const obj = data[0];
  //   const result = findObject(obj, key);

  //   if (result !== undefined) {
  //     const getCategory = selectedCategory.filter(
  //       (value) => value._id === result._id
  //     );

  //     if (getCategory.length !== 0) {
  //       return notifySuccess("This category already selected!");
  //     }

  //     setSelectedCategory((pre) => [
  //       ...pre,
  //       {
  //         _id: result?._id,
  //         name: showingTranslateValue(result?.parent, lang),
  //         // children: showingTranslateValue1(result?.children, lang),
  //       },
  //     ]);
  //     setDefaultCategory(() => [
  //       {
  //         _id: result?._id,
  //         name: showingTranslateValue(result?.parent, lang),
  //         // children: showingTranslateValue1(result?.children, lang),
  //       },
  //     ]);
  //   }
  // };



  const handleSelect = (key) => {
    const results = data.map(obj => findObject(obj, key)).filter(result => result !== undefined);

    results.forEach(result => {
      const getCategory = selectedCategory.filter(value => value._id === result._id);
      console.log("getcategories :", getCategory)
      if (getCategory.length !== 0) {
        notifySuccess("This category already selected!");
        return; // Stop execution for this result if category is already selected
      }
      let children = [];
      if (result.children && result.children.length > 0) {
        children = result.children.map(child => ({
          title: showingTranslateValue(child, lang),
          key: child,
        }));
      }
      console.log("childrens : ", children)
      setSelectedCategory(prev => {
        const newCategory = {
          _id: result?._id,
          name: showingTranslateValue(result?.name, lang),
          children: children,
        };
        console.log("New category added to selectedCategory:", newCategory);
        return [...prev, newCategory];
      });

      setDefaultCategory(() => [
        {
          _id: result?._id,
          name: showingTranslateValue(result?.name, lang),
          children: children,
        },
      ]);
    });
  };


  const handleRemove = (v) => {
    setSelectedCategory(v);
  };

  return (
    <>
      <div className="mb-2">
        <Multiselect
          displayValue="name"
          groupBy="name"
          isObject={true}
          hidePlaceholder={true}
          onKeyPressFn={function noRefCheck() { }}
          onRemove={(v) => handleRemove(v)}
          onSearch={function noRefCheck() { }}
          onSelect={(v) => handleSelect(v)}
          options={selectedCategory}
          selectedValues={selectedCategory}
          placeholder={"Select Category"}
        ></Multiselect>
      </div>

      {!loading && data !== undefined && (
        <div className="draggable-demo capitalize">
          <style dangerouslySetInnerHTML={{ __html: STYLE }} />
          <Tree
            expandAction="click"
            treeData={renderCategories(data)}
            // defaultCheckedKeys={id}
            onSelect={(v) => handleSelect(v[0])}
            motion={motion}
            animation="slide-up"
          />
        </div>
      )}
    </>
  );
};

export default ParentCategory;
