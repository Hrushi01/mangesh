import React, { useRef } from "react";
import Header from "../components/Header";
import Webcam from "react-webcam";

function DisplayValues({ setDisplay }) {
  let temperature = 22;
  let humidity = 22;
  let lightIntensity = 22;
  let soilMoisture = 22;
  const webcamRef = useRef(null);
  //   const [isRecording, setIsRecording] = useState(false);

  //   const startRecording = () => {
  //     setIsRecording(true);
  //   };

  //   const stopRecording = () => {
  //     setIsRecording(false);
  //   };

  const videoConstraints = {
    facingMode: "user",
  };

  return (
    <div className="bg-white rounded-md overflow-hidden shadow-lg p-4">
      <Header setDisplay={setDisplay} />
      <div className="flex justify-center mt-10">
        <Webcam
          audio={false}
          height={480}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={640}
          videoConstraints={videoConstraints}
        />
      </div>

      <div className="p-10 flex justify-around">
        <div className="flex flex-col mt-6 ">
          <div className="flex items-center mb-4">
            <div className="rounded-full bg-blue-600 h-8 w-8 flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l-1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l-1.42 1.42"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold">Temperature</h3>
          </div>
          <p className="text-gray-700 mb-2">{temperature}°C</p>
        </div>
        <div className="flex flex-col mt-6">
          <div className="flex items-center mb-4">
            <div className="rounded-full bg-green-600 h-8 w-8 flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 22s8-4.5 8-11.8c0-4.26-3.31-7.76-7.42-8.16"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2L12 2M20 6s-2.67 5.5-8 5.5-8-5.5-8-5.5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 22V12"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold">Humidity</h3>
          </div>
          <p className="text-gray-700 mb-2">{humidity}%</p>
        </div>
        <div className="flex flex-col mt-6">
          <div className="flex items-center mb-4">
            <div className="rounded-full bg-yellow-500 h-8 w-8 flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 22a10 10 0 110-20 10 10 0 010 20z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 16l-2-2m0 0l-2-2m2 2l2-2m0 2l2-2"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold">Light Intensity</h3>
          </div>
          <p className="text-gray-700 mb-2">{lightIntensity} lumens</p>
        </div>
        <div className="flex flex-col mt-6">
          <div className="flex items-center mb-4">
            <div className="rounded-full bg-red-500 h-8 w-8 flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold">Soil Moisture</h3>
          </div>
          <p className="text-gray-700 mb-2">{soilMoisture}%</p>
        </div>
      </div>
    </div>
  );
}

export default DisplayValues;
