import api from "../../api/api";

const FetchState = {
  FETCH_INIT: 0,
  FETCH_SUCCESS: 1,
  FETCH_FAILURE: 2,
};

const Todo = ({ user, dispatch }) => {

  const handleLogout = async (e) => {
    dispatch({ type: FetchState.FETCH_INIT });
    try {
      await api.deleteCurrentSession();
      dispatch({ type: FetchState.FETCH_SUCCESS, payload: null });
    } catch (e) {
      dispatch({ type: FetchState.FETCH_FAILURE });
    }
  };

  return (
    <>
      <section className="container h-screen max-h-screen px-3 max-w-xl mx-auto flex flex-col">
        <div className="my-auto p-16 rounded-lg text-center">
          <div className="font-bold text-3xl md:text-5xl lg:text-6xl">
            📝 <br /> &nbsp; Account&nbsp;Details
          </div>

          <div className="w-full my-8 px-6 py-4 text-xl rounded-lg border-0 focus:ring-2 focus:ring-gray-800 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl shadow-md">
            <p>Name:&nbsp;{user['name']}</p>
            <p>ID:&nbsp;{user['$id']}</p>
            <p>Registration:&nbsp;{user['registration']}</p>
            <p>Status:&nbsp;{user['status']}</p>
            <p>Password Update:&nbsp;{user['passwordUpdate']}</p>
            <p>Email:&nbsp;{user['email']}</p>
            <p>Email Verification:&nbsp;{JSON.stringify(user['emailVerification'])}</p>
            <p>prefs:&nbsp;{JSON.stringify(user['prefs'])}</p>
          </div>
        </div>
      </section>

      <section className="absolute bottom-0 right-0 py-3 px-6 mr-8 mb-8">
        <button
          onClick={handleLogout}
          className="mx-auto mt-4 py-3 px-12 font-semibold text-md rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none"
        >
          Logout 👋
        </button>
      </section>
    </>
  );
};

export default Todo;
