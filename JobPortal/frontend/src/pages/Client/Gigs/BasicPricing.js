
import GigPricingTableHelper from "./GigPricingTableHelper";

const BasicPricing = ({ basic }) => {
  const { name, Price, time, revisions, details } = basic?.BASIC;
 
  return (
    <div>
      <GigPricingTableHelper
        Title={name}
        Details={details}
        Price={Price}
        DeliveryTime={time}
        Revisions={revisions}
        id={basic._id}
        package="basic"
      />
    </div>
  );
};

export default BasicPricing;
