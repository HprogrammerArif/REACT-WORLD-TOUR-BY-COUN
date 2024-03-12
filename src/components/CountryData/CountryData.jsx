import CountryPropsPass from "../CountryPropsPass/CountryPropsPass";

const CountryData = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Country Props Pass</h1>

      <CountryPropsPass
      {...props}
      ></CountryPropsPass>
    </div>
  );
};

export default CountryData;