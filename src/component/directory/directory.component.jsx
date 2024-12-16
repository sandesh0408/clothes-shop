import CategoryItem from "../category-item/category-item.component.jsx";
import "./directory.styles.scss";
const Directory = ({ categories }) => {
  return (
    <div className="directories-container">
      {categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};

export default Directory;
