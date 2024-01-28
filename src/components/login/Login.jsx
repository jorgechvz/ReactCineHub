import { useState } from "react";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Fetch the request token
    const optionsRequesToken = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODZkYTRmNTM2ZjQ3NWYxZTQ0Njc0MGUwNTE3OWY2NSIsInN1YiI6IjY0OWI3YmRmNzdjMDFmMDEwYzViZmU5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xRka_dB0J_kQ_sdM3aPcxQ1LEkMSJzwqwpqtZfKtA48",
      },
    };
    const response = await fetch(
      "https://api.themoviedb.org/3/authentication/token/new",
      optionsRequesToken
    );
    const data = await response.json();
    const requestToken = data.request_token;
    console.log(requestToken);

    // Use the request token to validate the login
    const optionsSession = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODZkYTRmNTM2ZjQ3NWYxZTQ0Njc0MGUwNTE3OWY2NSIsInN1YiI6IjY0OWI3YmRmNzdjMDFmMDEwYzViZmU5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xRka_dB0J_kQ_sdM3aPcxQ1LEkMSJzwqwpqtZfKtA48",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        request_token: requestToken,
      }),
    };
    const sessionResponse = await fetch(
      "https://api.themoviedb.org/3/authentication/token/validate_with_login",
      optionsSession
    );
    const sessionData = await sessionResponse.json();
    console.log(sessionData)
    const newRequestToken = sessionData.request_token;

    // Create a sessionId
    const optionsSessionId = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODZkYTRmNTM2ZjQ3NWYxZTQ0Njc0MGUwNTE3OWY2NSIsInN1YiI6IjY0OWI3YmRmNzdjMDFmMDEwYzViZmU5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xRka_dB0J_kQ_sdM3aPcxQ1LEkMSJzwqwpqtZfKtA48",
      },
      body: JSON.stringify({ request_token: newRequestToken }),
    };
    const sessionIdResponse = await fetch(
      "https://api.themoviedb.org/3/authentication/session/new",
      optionsSessionId
    );
    const sessionIdData = await sessionIdResponse.json();
    console.log(sessionIdData)
    const sessionId = sessionIdData.session_id;
    // Put the sessionId in the session storage
    sessionStorage.setItem("sessionId", sessionId);

    if (sessionIdData.success === true) {
      // Redirect to the homepage
      window.location.href = "/";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center w-96 h-96 border-2 border-gray-300 rounded-md">
        <h1 className="text-3xl mt-16 font-semibold">Login</h1>
        <form
          className="flex flex-col items-center justify-center w-full h-full"
          onSubmit={handleSubmit}
        >
          <input
            className="w-3/4 h-10 px-2 mt-4 mb-2 border-2 border-gray-300 rounded-md"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-3/4 h-10 px-2 mb-2 border-2 border-gray-300 rounded-md"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-3/4 h-10 mt-4 mb-2 text-white bg-blue-500 rounded-md"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
