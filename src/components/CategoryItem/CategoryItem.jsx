import "./style.scss";

function CategoryItem({title, img}) {
  return (
    <div className="category-item">
      <div className="category-image">
        <img src={img} alt="Name" />
      </div>
      <div className="category-title">{title}</div>
      
    </div>
  );
}

export default CategoryItem;
