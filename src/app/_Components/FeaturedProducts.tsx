import React from 'react';
import ProductCard from './ProductCard';
import { AllProductsData } from '../home.interface';

interface FeaturedProductsProps {
  title?: string;
  coloredTitle?: string;
  products: AllProductsData[];
}

export default function FeaturedProducts({ 
  title = "Featured", 
  coloredTitle = "Products", 
  products 
}: FeaturedProductsProps) {
  return (
    <div className="w-full bg-white px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="container mx-auto">
        

        <div className="flex items-center gap-3 mb-8 sm:mb-10">
          <div className="w-1.5 h-7 sm:h-8 bg-[#0aad0a] rounded-full"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            {title} <span className="text-[#0aad0a]">{coloredTitle}</span>
          </h2>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mt-8">
          {products.map((product: AllProductsData) => (
      
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}
