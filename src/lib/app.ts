    export      const getAllApps = async () => {
  const res = await fetch("http://localhost:3000/data.json",{cache:"force-cache"});
  const data = await res.json();

  console.log(data, "data");

  return data;
};