import { Outlet } from "react-router-dom";
import ClothingHubBlack from "../../assets/ClothingHubBlack.jpg";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
        <img
          src={ClothingHubBlack}
          alt="Clothing Hub Banner"
          className="max-w-full h-auto rounded-xl shadow-lg"
        />
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
