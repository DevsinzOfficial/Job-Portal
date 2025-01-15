
import GigPricingTableHelper from "./GigPricingTableHelper";

const PremiumPricing = ({ premium }) => {
  const { name, Price, time, revisions, details } = premium;
  return (
    <div>
      <GigPricingTableHelper
        Title={name}
        Details={details}
        Price={Price}
        DeliveryTime={time}
        Revisions={revisions}
      />
    </div>
  );
};

export default PremiumPricing;
