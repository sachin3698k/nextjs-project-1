import React from "react";
import Image from "next/image";

export const Product = ({
  productId,
  propductName,
  productImage,
  productDescription,
  productPrice,
}) => {
  console.log(productImage);
  return (
    <div className="bg-slate-700;">
      <div className="max-w-sm overflow-hidden rounded shadow-lg; bg-gray-800">
        <img
          src={productImage}
          alt="Picture of the author"
          width={500}
          height={500}
        ></img>
        {/* <Image
src={productImage}
alt="Picture of the author"
width={500}
height={500}
/> */}
        <div className="px-6 py-4">
          <div className="mb-2 text-l font-bold text-gray-300">{productId}</div>
          <div className="mb-2 text-xl font-bold text-gray-300">
            {propductName}
          </div>
          <p className="text-base text-gray-300">{productDescription}</p>
          <h3 className="text-base text-gray-300">
            <span>₹&nbsp;</span>
            {productPrice}{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Product;
