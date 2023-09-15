import React from "react";
import "reset.css";
import Header from "./compornents/03organisms/Header";
import Inner from "./compornents/01atoms/Inner";
import AddForm from "./compornents/02molecules/AddForm";
import ApiGetList from "./compornents/03organisms/ApiGetList01";

function App() {
  return (
    <div className="App">
      <Header />
      <Inner>
        {/* この中に書け！！！！！！ */}
        {/* <CardLists /> //いつも通りのカード型コンポーネント */}
        <AddForm />
        <ApiGetList />
      </Inner>
    </div>
  );
}

export default App;