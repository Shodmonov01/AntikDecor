import { useEffect, useState } from "react";
import "./checkout.scss";

function Checkout() {
  const [cartData, setCartData] = useState([]);
  const [response, setResponse] = useState(false);
  const [customerForm, setCustomerForm] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    customer_address: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const products = cartData.map((el) => el.id);

  const total_price = cartData.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  async function getFromLocalStorage() {
    if (!localStorage.getItem("cartData")) {
    } else {
      if (JSON.parse(localStorage.getItem("cartData")).length) {
        const data = await JSON.parse(localStorage.getItem("cartData"));
        setCartData(data);
      } else {
      }
    }
  }

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  async function postData(data) {
    const response = await fetch("https://api.antikdecor.ru/order/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
    return response.json();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const customer = { ...customerForm, total_price, products };

    postData(customer).then((res) => setResponse(res.success));

    setCustomerForm({
      customer_name: "",
      customer_email: "",
      customer_phone: "",
      customer_address: "",
    });
  }

  return (
    <div className="checkout">
      <section className="section">
        <div className="container">
          <h2 className="subtitle">Оформить заказ</h2>

          <div className="checkout__inner">
            <div className="checkout__products">
              {cartData.map((product) => (
                <div className="checkout__product" key={product.id}>
                  <span>
                    <img src={product.images[0]} alt="" />
                  </span>
                  <h3>{product.name}</h3>
                </div>
              ))}
            </div>

            <form
              method="POST"
              className="checkout__form"
              action="https://antikdecor.server.paykeeper.ru/create"
            >
              <div>
                <label htmlFor="clientid">Фамилия Имя:</label>
                <input
                  onChange={(e) =>
                    setCustomerForm((prev) => ({
                      ...prev,
                      customer_name: e.target.value,
                    }))
                  }
                  id="clientid"
                  class="input_type"
                  type="text"
                  name="clientid"
                  value={customerForm.customer_name}
                  required
                />
              </div>
              <div>
                <label htmlFor="client_phone">Телефон:</label>
                <input
                  id="client_phone"
                  class="input_type"
                  type="text"
                  name="client_phone"
                  value={customerForm.customer_phone}
                  required
                  onChange={(e) =>
                    setCustomerForm((prev) => ({
                      ...prev,
                      customer_phone: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label htmlFor="client_email">Электронный адрес: </label>
                <input
                  class="input_type"
                  type="text"
                  name="client_email"
                  value={customerForm.customer_email}
                  required
                  onChange={(e) =>
                    setCustomerForm((prev) => ({
                      ...prev,
                      customer_email: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label htmlFor="sum">Введите сумму оплаты: </label>
                <input
                  class="input_type"
                  type="text"
                  name="sum"
                  value={
                    total_price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽."
                  }
                />
                <br />
              </div>
              <input class="sub_btn" type="submit" value="Перейти к оплате" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
