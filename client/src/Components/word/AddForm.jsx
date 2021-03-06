import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, InputGroup, FormControl, Form } from "react-bootstrap";

const AddForm = (props) => {
  const [word, setWord] = useState("");

  const wordUpdate = (event) => {
    setWord(event.target.value);
  };

  const handleSubmit = async (e) => {
    fetch("v1/word", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("token")
      },
      body: JSON.stringify({
        word: word,
      }),
    }).then(() => {
      setWord("");
      props.update();
    });
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} style={{margin: '0.5rem 2rem 0 2rem'}}>
      <Form.Label htmlFor="basic-url">単語を入力して追加</Form.Label>
      <InputGroup className="mb-3">
        <FormControl
          aria-describedby="basic-addon2"
          required
          onChange={wordUpdate}
          value={word}
        />
        {/* <input required onChange={wordUpdate} value={word}></input> */}
        <Button variant="outline-secondary" id="button-addon2" type="submit">
          追加
        </Button>
      </InputGroup>
    </form>
  );
};

export default AddForm;
