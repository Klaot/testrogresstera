import { useEffect, useState } from "react";
import "./App.scss";
import { getToken, getBonus } from "./getTokenAndInfo";
import Info from "./assets/info.png";
import ButtonIcon from "./assets/button.png";
import FireIcon from "./assets/fire.png";
import { IUserBonus } from "./type";

export default function App() {
  const [bonusInfo, setBonusInfo] = useState<IUserBonus | null>(null);
  useEffect(() => {
    getToken().then((item) => {
      getBonus(item?.accessToken).then((item) => setBonusInfo(item.data));
    });
  }, []);

  const add2Digit = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  const formatDate = (date: any) => {
    return [add2Digit(date.getDate()), add2Digit(date.getMonth() + 1)].join(
      "."
    );
  };
  const BurningDate = formatDate(new Date(bonusInfo?.dateBurning!));

  return (
    <div className="App">
      <div className="header">
        <div className="header_logo">
          <p className="header_logo_p">ЛОГОТИП</p>
          <img src={Info} alt="Info-icon" />
        </div>
      </div>
      <section className="info_wrapper">
        <div className="info_general">
          <div className="info_general_bonus-info">
            <h1>{bonusInfo && bonusInfo?.currentQuantity!} бонусов</h1>
            <div className="info_general_burning-info">
              <p>{bonusInfo && BurningDate} сгорит</p>
              <img src={FireIcon} alt="fire-icon" />
              <p>{bonusInfo && bonusInfo?.forBurningQuantity!} бонусов</p>
            </div>
          </div>
          <button>
            <img src={ButtonIcon} alt="button-icon" />
          </button>
        </div>
      </section>
      <footer></footer>
    </div>
  );
}
