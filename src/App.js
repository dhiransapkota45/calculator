import { useState } from "react";
import Button from "./Button";
import { BsFillBackspaceFill } from "react-icons/bs";

const App = () => {
  const [value1, setValue1] = useState("0");
  const [result, setResult] = useState("0");
  const values = (a) => {
    if (value1 == 0) {
      setValue1(a);
    } else {
      if (result != 0) {
        if (a == "+" || a == "*" || a == "/" || a == "-") {
          setValue1(result + a);
        } else {
          setValue1(a);
        }
        setResult("0");
      } else {
        setValue1(value1 + a);
      }
    }
  };
  const backslash = () => {
    if(value1.length === 1){
      setValue1("0")
    }else{
      setValue1(value1.substring(0, value1.length - 1));
    }
  };

  const Clearer = () => {
    setValue1("0");
    setResult("0");
  };

  return (
    <>
      <div className="mx-auto overflow-hidden mt-10 mb-2 bg-purple-900 shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
        <div className="">
          <div className="p-5 text-white text-center text-3xl bg-purple-900">
            <span className="text-orange-500">Calcu</span>lator
          </div>
          <div className="pt-16 p-5 pb-0 text-white text-right text-3xl bg-purple-800">
            {value1}
          </div>
          <div className="p-5 text-white text-right text-3xl bg-purple-800">
            <span className="text-orange-500">{result}</span>
          </div>

          <div className="flex items-stretch bg-purple-900 h-24">
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
                onClick={() => Clearer()}
              >
                C
              </div>
            </div>

            <Button symbol="(" propfunc={values} />

            <Button symbol=")" propfunc={values} />

            <Button symbol="/" propfunc={values} />
          </div>

          <div className="flex items-stretch bg-purple-900 h-24">
            <Button symbol="7" propfunc={values} />

            <Button symbol="8" propfunc={values} />

            <Button symbol="9" propfunc={values} />
            <Button symbol="*" propfunc={values} />
          </div>

          <div className="flex items-stretch bg-purple-900 h-24">
            <Button symbol="4" propfunc={values} />
            <Button symbol="5" propfunc={values} />

            <Button symbol="6" propfunc={values} />

            <Button symbol="-" propfunc={values} />
          </div>

          <div className="flex items-stretch bg-purple-900 h-24">
            <Button symbol="1" propfunc={values} />

            <Button symbol="2" propfunc={values} />

            <Button symbol="3" propfunc={values} />

            <Button symbol="+" propfunc={values} />
          </div>

          <div className="flex items-stretch bg-purple-900 h-24 mb-4">
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div
                className="rounded-full h-20 w-20 flex items-center bg-purple-800 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
                onClick={() => backslash()}
              >
                <BsFillBackspaceFill />
              </div>
            </div>

            <Button symbol="0" propfunc={values} />

            <Button symbol="." propfunc={values} />

            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
              <div
                className="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-gray-500 focus:outline-none"
                onClick={() => setResult(eval(value1).toString())}
              >
                =
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
