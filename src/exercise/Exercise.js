import React, { useEffect, useState } from "react";

const fakeApi = (index) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`API No. ${index} `);
    }, 1000);
  });
};

const Exercise = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  const [countApi, setCountApi] = useState(0);
  const [countApiCalled, setCountApiCalled] = useState(0);

  useEffect(() => {
    const getApi = async () => {
      setCountApi((prev) => ++prev);
      const res = await fakeApi(value);
      setResult((prev) => ({ ...prev, [value]: res }));
      setCountApiCalled((prev) => ++prev);
    };
    getApi();
  }, [value]);
  const index = Object.keys(result).indexOf(value);
  const handleTextField = (value) => {
    setValue(value);
  };
  if (index >= 0) {
    console.log("result:", result[value]);
    setResult({});
  }

  if ((countApi > 1) & (countApi === countApiCalled)) {
    console.log("Finished Call Api");
  }

  return (
    <div>
      <input onChange={(e) => handleTextField(e.target.value)} />
    </div>
  );
};

export default Exercise;
