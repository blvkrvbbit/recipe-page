import { useEffect } from 'react';
import Header from './components/header/header.component';
import Prep from './components/prep/prep.component';
import Ingredients from './components/ingredients/ingredients.component';

function App() {
  useEffect(() => {
    document.title = 'Simple Omelette Recipe';
  }, []);
  return (
    <>
      <img className='mobile-img' src='/img/image-omelette.jpeg' alt='' />
      <div className='container'>
        <div className='recipe'>
          <img className='desktop-img' src='/img/image-omelette.jpeg' alt='' />
          <Header
            title='Simple Omelette Recipe'
            desc=' An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.'
          />
          <Prep approxTime='10' prepTime='5' cookingTime='5' />
          <Ingredients
            ingredients={[
              '2-3 large eggs',
              'Salt, to taste',
              'Pepper, to taste',
              '1 tablespoon of butter or oil',
              'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
            ]}
          />

          <div className='instructions'>
            <h2 className='title'>Instructions</h2>
            <ol>
              <li>
                <strong>Beat the eggs</strong>: In a bowl, beat the eggs with a
                pinch of salt and pepper until they are well mixed. You can add
                a tablespoon of water or milk for a fluffier texture.
              </li>
              <li>
                <strong>Heat the pan</strong>: Place a non-stick frying pan over
                medium heat and add butter or oil.
              </li>
              <li>
                <strong>Cook the omelette</strong>: Once the butter is melted
                and bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </li>
              <li>
                <strong>Add fillings (optional)</strong>: When the eggs begin to
                set at the edges but are still slightly runny in the middle,
                sprinkle your chosen fillings over one half of the omelette.
              </li>
              <li>
                <strong>Fold and serve</strong>: As the omelette continues to
                cook, carefully lift one edge and fold it over the fillings. Let
                it cook for another minute, then slide it onto a plate.
              </li>
              <li>
                <strong>Enjoy</strong>: Serve hot, with additional salt and
                pepper if needed.
              </li>
            </ol>
          </div>
          <hr />
          <div className='nutrition'>
            <h2 className='title'>Nutrition</h2>
            <p>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table>
              <tr>
                <td>Calories</td>
                <td>
                  <strong>277kcal</strong>
                </td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td>
                  <strong>0g</strong>
                </td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>
                  <strong>20g</strong>
                </td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>
                  <strong>22g</strong>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <footer className='container attribution'>
          Challenge by{' '}
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor
          </a>
          . Coded by <a href='#'>Blvk Rvbbit</a>.
        </footer>
      </div>
    </>
  );
}

export default App;
