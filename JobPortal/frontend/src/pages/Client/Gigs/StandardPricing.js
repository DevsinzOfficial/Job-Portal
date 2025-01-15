
import GigPricingTableHelper from "./GigPricingTableHelper";

const StandardPricing = ({ standard }) => {
  const { name, Price, time, revisions, details } = standard?.STANDARD;

  return (
    <div>
      <GigPricingTableHelper
        Title={name}
        Details={details}
        Price={Price}
        DeliveryTime={time}
        Revisions={revisions}
        id={standard._id}
        package="standard"
      />
    </div>
  );
};

export default StandardPricing;
