// import ListGroup from "./components/ListGroup";
// import Message from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  // let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      {/* <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
