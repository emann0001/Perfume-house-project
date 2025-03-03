import React, { useState, useEffect } from 'react';

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate API call or data receiving
    const fetchData = () => {
      const apiData = [
        {
          id: 1,
          image: "https://res.cloudinary.com/eguono/image/upload/v1724144617/perfume%20house%20jpg/Ralph_Lauren_Perfume_z8v8mw.jpg",
          title: "Ralph Lauren Perfume",
          rating: "5.0",
          rateCount: "24",
          price: "3,000",
          discountPrice: "4,000"
        },
        {
          id: 2,
          image: "https://res.cloudinary.com/eguono/image/upload/v1724144617/perfume%20house%20jpg/Oud_Touch_Franck_Oliver_snhuff.jpg",
          title: "Oud Touch Franck Oliver",
          rating: "5.0",
          rateCount: "24",
          price: "3,000",
          discountPrice: "4,000"
        },
        {
          id: 3,
          image: "https://res.cloudinary.com/eguono/image/upload/v1724144617/perfume%20house%20jpg/Elegance_Essence_ah22rz.jpg",
          title: "Elegance Essence",
          rating: "5.0",
          rateCount: "24",
          price: "3,000",
          discountPrice: "4,000"
        },
        {
          id: 4,
          image: "https://res.cloudinary.com/eguono/image/upload/v1724144617/perfume%20house%20jpg/Timeless_Bouquet_exajsl.jpg",
          title: "Timeless Bouquet",
          rating: "5.0",
          rateCount: "24",
          price: "3,000",
          discountPrice: "4,000"
        },
        {
          id: 5,
          image: "https://res.cloudinary.com/eguono/image/upload/v1724144617/perfume%20house%20jpg/Aventos_Blue_for_Him_sg2dxx.jpg",
          title: "Aventos Blue for Him",
          rating: "5.0",
          rateCount: "24",
          price: "3,000",
          discountPrice: "4,000"
        },
        {
          id: 6,
          image: "https://res.cloudinary.com/eguono/image/upload/v1724144617/perfume%20house%20jpg/Asad_Mousouff_p29rk3.jpg",
          title: "Asad Mousouff",
          rating: "5.0",
          rateCount: "24",
          price: "3,000",
          discountPrice: "4,000"
        }
      ];
      setData(apiData); // Set the fetched data to state
    };

    fetchData(); // Call fetchData function to set data
  }, []);

  return (
    <main>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((product) => (
        <div key={product.id} className="product-item">
          <img className="w-[256.62px] h-[256.62px]" src={product.image} alt={product.title} />
          <h2 className="text-[15.97px] font-[700]">{product.title}</h2>
          
          
          <div className="flex items-center">
            {/* Star Rating with yellow stars */}
            <div className="stars flex mr-2 text-yellow-500">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={`star ${index < parseFloat(product.rating) ? 'filled' : ''}`}
                  aria-label={`${index + 1} star`}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Rating text and review count */}
            <p>
              {product.rating} ({product.rateCount})
            </p>
          </div>
          
          <p>Price: {product.price}</p>
          <p className='line-through'>{product.discountPrice}</p>
          <button className="btn  w-full bg-[#8D34FF] outline-0 text-white rounded ">Add To Cart</button>
        </div>
      ))}
    </div>
  </main>
  );

}

export default Products