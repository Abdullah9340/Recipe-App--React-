import "./App.css";

const Recipe = ({ title, calories, image }) => {
  return (
    <div className="recipeCard">
      <h1 style={{ marginBottom: 20, marginTop: 20 }}>{title}</h1>
      <div className="recipeDetail">
        <img src={image} alt="" />
        <h3 style={{ marginLeft: 20 }}>Calories:</h3>
        <h3 style={{ marginLeft: 20 }}>{calories}</h3>
      </div>
    </div>
  );
};

export default Recipe;
