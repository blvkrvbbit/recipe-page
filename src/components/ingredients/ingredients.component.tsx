type IngredientsProps = {
  ingredients: string[];
};
const Ingredients = ({ ingredients }: IngredientsProps) => {
  return (
    <>
      <div className='ingredients'>
        <h2 className='title'>Ingredients</h2>
        <ul>
          {ingredients.map((item: string) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <hr />
    </>
  );
};

export default Ingredients;
