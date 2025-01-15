
import GigPricingTableHelper from "./GigPricingTableHelper";

const PremiumPricing = ({ premium }) => {
  const { name, Price, time, revisions, details } = premium?.PREMIUM;
  return (
    <div>
      <GigPricingTableHelper
        Title={name}
        Details={details}
        Price={Price}
        DeliveryTime={time}
        Revisions={revisions}
        id={premium._id}
        package="premium"
      />
    </div>
  );
};

export default PremiumPricing;
