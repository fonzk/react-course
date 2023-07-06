import { ChevronRightIcon } from "@heroicons/react/24/solid";
const OrdersCard = (props) => {
  const {totalPrice, totalProducts } = props;
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido); 



  return (
    <div className="flex justify-between items-center  border border-black rounded-lg p-4 w-80  mt-4">
    <div className="flex  w-full "> 
  <p className="flex  flex-col justify-between w-full ">
         <span className=" font-semibold">{hoy.toLocaleDateString()}</span>
    <span className="  font-extralight text-sm">{totalProducts} articles</span>
  </p>
  <p className="flex items-center gap-2">

    <span className="font-medium text-2xl"> ${totalPrice}</span> 
    <ChevronRightIcon  className="h-6 w-6 text-black-500 cursor-pointer" />
  </p>
     </div>
  
  
    </div>
  );
};

export default OrdersCard;
