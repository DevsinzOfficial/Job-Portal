import GigPricingTableHelper from "./GigPricingTableHelper";

const BasicPricing = ({ basic }) => {
  const { name, Price, time, revisions, details } = basic;
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

export default BasicPricing;
