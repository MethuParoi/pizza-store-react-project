import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import backgroundImage from "../../public/images/Desktop_4.png";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className=" max-h-screen lg:w-[80rem] flex justify-center">
      {/* Background Image */}
      <img
        className="hidden lg:block absolute inset-0 h-full w-full object-cover -z-10"
        src="../../public/images/Desktop_4.png"
        alt="Background"
      />

      {/* Content */}
      <div className="text-center my-10 z-10 flex flex-col items-center lg:mr-[30rem]">
        <h1 className="text-2xl md:text-3xl font-semibold mb-14">
          The best pizza.
          <br />
          <span className="text-yellow-500">
            Straight out of the oven, straight to you.
          </span>
        </h1>

        {username === "" ? (
          <CreateUser />
        ) : (
          <Button to="/menu" type="primary">
            Continue ordering, {username}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Home;
