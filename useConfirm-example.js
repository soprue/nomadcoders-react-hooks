const useConfirm = (message = "", onConfirm, onCancle) => {
  if (onConfirm && typeof onConfirm !== "function") return;
  if(onCancle && typeof onCancle !== "function") return;

  const confirmAction = () => {
    if (confirm(message)) {
        onConfirm();
    } else {
        onCancle();
    }
  };
  return confirmAction;
};

const App = () => {
    const deleteWorld = () => console.log("Deleting the world...");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);

    return (
        <div className="App">
            <button onClick={confirmDelete}>delete the world</button>
        </div>
    );
};

export default App;
