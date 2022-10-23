import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const provider = new GoogleAuthProvider();

const Register = () => {
  const { createUser, signInWithGoogle, emailVerify, updateUserProfile } =
    useContext(AuthContext);
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(photoURL);

    createUser(email, password)
      .then((res) => {
        // console.log(res.user);
        toast.success("Registered Successfully!");
        form.reset();

        //profile update
        updateUserProfile({
          displayName: name,
          photoURL: photoURL
        })
          .then(() => {
            toast.success("Profile Updated");

            //email verification
            emailVerify()
              .then(() => {
                toast.success(
                  "Please check your email for verification link!!"
                );
                // navigate(from, { replace: true });
              })
              .catch((error) => {
                // console.error(error);
                toast.error(error.message);
              });
          })
          .catch((error) => {
            // console.error(error)
            toast.error(error.message);
          });
      })
      .catch((error) => {
        // console.error(error);
        toast.error(error.message);
      });
  };

  const googleSignIn = () => {
    signInWithGoogle(provider)
      .then((res) => {
        toast.success("Succesfully registered with Google!!");
        console.log(res.user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 shadow-lg mt-5 border border-gray-200 mx-auto">
      <h1 className="text-2xl font-bold text-center">Please Register</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1">
          <label htmlFor="username" className="block text-gray-700">
            Username
          </label>
          <input
            type="text"
            name="name"
            id="username"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md text-gray-800 text-xl "
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="photo" className="block text-gray-700">
            Photo URL
          </label>
          <input
            type="photo"
            name="photoURL"
            id="photo"
            placeholder="Your Photo url"
            className="w-full px-4 py-3 rounded-md text-gray-800 text-xl "
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md text-gray-800 text-xl "
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            required
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md text-gray-800 text-xl"
          />
        </div>
        <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 hover:bg-violet-600">
          Register
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        <p className="px-3 text-sm text-gray-800">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
      </div>
      <div className="flex flex-row justify-evenly">
        <button onClick={googleSignIn} className="text-3xl">
          <FaGoogle></FaGoogle>
        </button>
        <button className="text-3xl">
          <FaGithub></FaGithub>
        </button>
        <button className="text-3xl">
          <FaFacebook></FaFacebook>
        </button>
      </div>

      <p className="text-center sm:px-6 text-gray-600">
        Already have an account?
        <Link to="/login" className="underline text-orange-500">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default Register;
