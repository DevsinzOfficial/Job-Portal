
import GigPricingTableHelper from "./GigPricingTableHelper";

const StandardPricing = ({ standard }) => {
  const { name, Price, time, revisions, details } = standard;
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

export default StandardPricing;
