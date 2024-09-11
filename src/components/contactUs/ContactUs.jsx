import "./contact.us.scss";
import globe from "../../assets/png/contact_globe.png";
import { useState } from "react";

function ContactUs({ title }) {
  const [userInfo, setUserInfo] = useState({
    applicant_name: "",
    applicant_email: "",
  });
  const [response, setResponse] = useState(false);

  async function postData(data) {
    const response = await fetch("http://5.35.84.206:8000/callback/", {
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
    const applicant = userInfo;

    postData(applicant).then((res) => setResponse(res.success));

    setUserInfo({
      applicant_name: "",
      applicant_email: "",
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setUserInfo((prevInfo) => {
      return { ...prevInfo, [name]: value };
    });
  }

  return (
    <div id="contact" className="home-contacts">
      <section className="section">
        <div className="container">
          <h2 className="subtitle">{title ? title : "Обратная связь"}</h2>
          <div className="home-contacts__content">
            <div className="home-contacts__left">
              <h2 className="subtitle subtitle-large">
                {title ? title : "Обратная связь"}
              </h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Введите имя"
                  required
                  name="applicant_name"
                  onChange={handleChange}
                  value={userInfo.applicant_name}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  required
                  name="applicant_email"
                  onChange={handleChange}
                  value={userInfo.applicant_email}
                />
                {response ? "" : <button>Связаться с нами</button>}
                {response && (
                  <p>Спасибо за заполнение формы! Мы скоро свяжемся с Вами.</p>
                )}
              </form>
              {response ? (
                ""
              ) : (
                <p className="response-message">
                  Нажимая на кнопку, вы даете согласие на обработку персональных
                  данных
                </p>
              )}
            </div>
            <div className="home-contacts__right">
              <img className="globe" src={globe} alt="globe" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
