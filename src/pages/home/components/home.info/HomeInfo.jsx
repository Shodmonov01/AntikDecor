import "./home.info.scss";
import experience from "../../../../assets/svg/experience.svg";
import fastService from "../../../../assets/svg/fast_service.svg";
import delivery from "../../../../assets/svg/delivery.svg";
import guest from "../../../../assets/svg/guest.svg";

const info = [
  {
    img: experience,
    title: "Опыт, профессионализм и большой выбор.",
    description:
      "Вот уже двадцать лет мы специализируемся на старинных гравюрах, литографиях, эстампах и печатной графике всех стилей, направлений и эпох. Тесно сотрудничаем с музеями и коллекционерами",
  },
  {
    img: fastService,
    title: "Экономим время",
    description:
      "Предлагаем гравюры, уже оформленные в паспарту или рамы - это готовое решение для подарка. Меняем цвет паспарту по желанию покупателя.",
  },
  {
    img: delivery,
    title: "Быстрая доставка",
    description:
      "В Москве наш курьер доставит понравившиеся предметы в удобное вам время. Доступна почтовая и курьерская отправка в любой город страны",
  },
  {
    img: guest,
    title: "Приятный выбор антиквариата в комфортной атмосфере ",
    description:
      "В Гравюрном кабинете вам без суеты и шума покажут то, что может подойти и по цене, и по стилю, и за чашкой кофе вы можете не спеша сделать свой выбор и получить профессиональный совет нашего сотрудника.",
  },
];

function HomeInfo() {
  return (
    <div className="home-info">
      <section className="section">
        <div className="container">
          <h2 className="subtitle">Почему выбирают нас?</h2>
          <div className="home-info__cards_wrapper">
            {info.map((inf) => (
              <div key={inf.title} className="home-info__card">
                <img src={inf.img} alt="years of experience" />
                <h3>{inf.title}</h3>
                <p>{inf.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeInfo;
