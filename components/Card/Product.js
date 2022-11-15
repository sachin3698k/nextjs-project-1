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
    <>
      <div className="max-w-sm overflow-hidden rounded shadow-lg">
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
          <div className="mb-2 text-xl font-bold">{productId}</div>
          <div className="mb-2 text-xl font-bold">{propductName}</div>
          <p className="text-base text-gray-700">{productDescription}</p>
          <h3 className="text-base text-gray-700">
            <span>₹&nbsp;</span>
            {productPrice}{" "}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Product;
