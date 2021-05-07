import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Spinner = () => {
  return ( 
    <Loader
      type="TailSpin"
      color="#0F172A"
      height={100}
      width={100}
      timeout={5000} //3 secs
    />
   );
}
 
export default Spinner;
