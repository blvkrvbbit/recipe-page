type PrepProps = {
  approxTime: string;
  prepTime: string;
  cookingTime: string;
};

const Prep = ({ approxTime, prepTime, cookingTime }: PrepProps) => {
  return (
    <div className='prep'>
      <h3 className='title'>Preparation time</h3>
      <ul>
        <li>
          <strong>Total</strong>: Approximately ${approxTime} minutes
        </li>
        <li>
          <strong>Preparation</strong>: ${prepTime} minutes
        </li>
        <li>
          <strong>Cooking</strong>: ${cookingTime} minutes
        </li>
      </ul>
    </div>
  );
};

export default Prep;
