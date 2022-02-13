import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  return (
    <div className="featured">
         <div className="featuredItem">
        <div className="fit">
          <span className="featuredTitle">Today</span>
          <div className=" house">
            <span class="material-icons-sharp">attach_money</span>
          </div>
        </div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rwf 0</span>
          <span className="featuredMoneyRate">
            0% <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to yesterday</span>
      </div>
      <div className="featuredItem">
        <div className="fit">
          <span className="featuredTitle">Month</span>
          <div className="sp">
            <span class="material-icons-sharp">price_check</span>
          </div>
        </div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rwf 0 {income[1]?.total}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
   
      <div className="featuredItem">
        <div className="fit">
          <span className="featuredTitle">Expense</span>
          <div className=" road">
            <span class="material-icons-sharp">money_off_csred</span>
          </div>
        </div>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Rwf 0</span>
          <span className="featuredMoneyRate">
            0% <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
