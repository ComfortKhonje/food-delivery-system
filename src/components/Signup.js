import img from "./images/FOOODIES.jpg"
import logo from "./images/cm-logo.svg"


function Signup() {
  return (
    <>
      <div className="flex flex-col w-full h-screen min-h-screen items-start justify-center" >
        <div className="flex w-full h-full">

          <div className="flex flex-col  bg-white px-28 w-1/3 justify-center">
            <div className="flex flex-col mb-16 items-center">
              <img src={logo} className="w-80 mb-20"/>
            <h2 className="text-2xl font-semibold mb-4">Create a new account</h2>
            </div>
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="text" id="username" name="username" className="mt-1 h-12 bg-gray-200 block w-full  rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" className="mt-1 h-12  block w-full bg-gray-200 rounded-md" />
                
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type="password" id="password" name="password" className="mt-1 h-12  block w-full bg-gray-200 rounded-md" />
                
              </div>
              <div className="flex flex-col items-center justify-between">
                <button type="submit" className="bg-orange-600 text-white w-full h-12 px-4 py-2 mb-5 rounded-md hover:bg-orange-500 focus:outline-none focus:bg-orange-500">Signup</button>
              <a href="#" className="text-sm text-orange-600 hover:text-orange-700">Already Have an account? Login</a>
              </div>

            </form>

          </div>
          
          <div className="flex flex-col bg-gray-200 w-5/6 p-2 bg-cover" style={{ backgroundImage: `url(${img})` }}></div>
        </div>
      </div>
    </>
  );
}

export default Signup;
