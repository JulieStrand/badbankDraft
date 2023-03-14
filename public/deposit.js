function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  // const [active, setActive] = React.useState(true);
  // const [balance, setBalance] = React.useState("");

  return (
    <Card
      bgcolor="warning"
      header="Deposit"
      status={status}
      body={
        show ? (
          <DepositForm
            setShow={setShow}
            setStatus={setStatus}
            // setActive={setActive}
          />
        ) : (
          <DepositMsg
            setShow={setShow}
            setStatus={setStatus}
            // setActive={setActive}
          />
        )
      }
    />
  );
}

const clearForm = () => {
  props.setEmail("");
  props.setAmount("");
  props.setShow(true);
  // props.setActive(true);
};

function DepositMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <br />
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => {
          props.setShow(true);
          props.setStatus("");
          clearForm();
        }}
      >
        Make another deposit
      </button>
      <br />
      <p>Current balance: $</p>
    </>
  );
}

function DepositForm(props) {
  const [email, setEmail] = React.useState("");
  const [amount, setAmount] = React.useState("");

  function handle() {
    if (!amount || amount.length < 1 || amount <= 0)
      alert("Error: Please enter a valid amount");
    else if (isNaN(amount)) alert("Error: Please enter a valid number");
    else {
      console.log(`depositing $${amount}`);
      fetch(`/account/update/${email}/${amount}`)
        .then((response) => response.text())
        .then((text) => {
          try {
            console.log("making deposit...");
            const data = JSON.parse(text);
            console.log("setting props...");
            // const bal = data.value.balance;
            props.setStatus(data.value.balance);
            // props.setActive(false);
            props.setShow(false);
            console.log(`New balance: $${data.value.balance}`);
          } catch (err) {
            props.setStatus("Deposit failed");
            console.log("err:", text);
          }
        });
    }
  }

  return (
    <>
      Email
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => {
          setEmail(e.currentTarget.value);
          // props.setActive(false);
        }}
      />
      <br />
      Amount
      <br />
      <input
        type="number"
        className="form-control"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => {
          setAmount(e.currentTarget.value);
          // props.setActive(false);
        }}
      />
      <br />
      <button
        type="submit"
        className="btn btn-light"
        // disabled={active}
        onClick={handle}
      >
        Deposit
      </button>
    </>
  );
}
