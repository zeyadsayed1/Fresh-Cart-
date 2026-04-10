'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Tag } from 'lucide-react';
import PageBanner from '../_Components/PageBanner';

const BRANDS = [
  {
    name: 'Canon', slug: 'canon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Canon_logo.svg/320px-Canon_logo.svg.png',
  },
  {
    name: 'Dell', slug: 'dell',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/320px-Dell_Logo.svg.png',
  },
  {
    name: 'Lenovo', slug: 'lenovo',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/320px-Lenovo_logo_2015.svg.png',
  },
  {
    name: 'Sony', slug: 'sony',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/320px-Sony_logo.svg.png',
  },
  {
    name: 'Infinix', slug: 'infinix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Infinix_Mobility_logo.svg/320px-Infinix_Mobility_logo.svg.png',
  },
  {
    name: 'Realme', slug: 'realme',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Realme_logo.svg/320px-Realme_logo.svg.png',
  },
  {
    name: 'Honor', slug: 'honor',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Huawei_Honor_Logo.svg/320px-Huawei_Honor_Logo.svg.png',
  },
  {
    name: 'Nokia', slug: 'nokia',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nokia_wordmark.svg/320px-Nokia_wordmark.svg.png',
  },
  {
    name: 'Oppo', slug: 'oppo',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/OPPO_LOGO_2019.svg/320px-OPPO_LOGO_2019.svg.png',
  },
  {
    name: 'Huawei', slug: 'huawei',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Huawei_Logo.svg/320px-Huawei_Logo.svg.png',
  },
  {
    name: 'Apple', slug: 'apple',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/160px-Apple_logo_black.svg.png',
  },
  {
    name: 'Xiaomi', slug: 'xiaomi',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Xiaomi_logo.svg/320px-Xiaomi_logo.svg.png',
  },
  {
    name: 'Samsung', slug: 'samsung',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/320px-Samsung_Logo.svg.png',
  },
  {
    name: 'Jack & Jones', slug: 'jack-jones',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jack_%26_Jones_logo.svg/320px-Jack_%26_Jones_logo.svg.png',
  },
  {
    name: 'LC Waikiki', slug: 'lc-waikiki',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/LC_Waikiki_logo.svg/320px-LC_Waikiki_logo.svg.png',
  },
  {
    name: 'Puma', slug: 'puma',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Puma_logo.svg/320px-Puma_logo.svg.png',
  },
  {
    name: 'Skechers', slug: 'skechers',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Skechers-logo.svg/320px-Skechers-logo.svg.png',
  },
  {
    name: 'Reebok', slug: 'reebok',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Reebok_2019_logo.svg/320px-Reebok_2019_logo.svg.png',
  },
  {
    name: 'Adidas', slug: 'adidas',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/320px-Adidas_Logo.svg.png',
  },
  {
    name: 'Nike', slug: 'nike',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/320px-Logo_NIKE.svg.png',
  },
  {
    name: 'Beko', slug: 'beko',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Beko_logo.svg/320px-Beko_logo.svg.png',
  },
  {
    name: 'Philips', slug: 'philips',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Philips_logo_new.svg/320px-Philips_logo_new.svg.png',
  },
  {
    name: 'Toshiba', slug: 'toshiba',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Toshiba_logo.svg/320px-Toshiba_logo.svg.png',
  },
  {
    name: 'Braun', slug: 'braun',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Braun-logo.svg/320px-Braun-logo.svg.png',
  },
  {
    name: 'Garnier', slug: 'garnier',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Garnier_logo.svg/320px-Garnier_logo.svg.png',
  },
  {
    name: 'Calvin Klein', slug: 'calvin-klein',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Calvin_Klein_Logo.svg/320px-Calvin_Klein_Logo.svg.png',
  },
  {
    name: "L'Oréal", slug: 'loreal',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/L%27Or%C3%A9al_logo.svg/320px-L%27Or%C3%A9al_logo.svg.png',
  },
  {
    name: 'Maybelline', slug: 'maybelline',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Maybelline_%282022%29.svg/320px-Maybelline_%282022%29.svg.png',
  },
];


function BrandCard({ brand }: { brand: typeof BRANDS[0] }) {
  const [failed, setFailed] = useState(false);

  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#7c3aed]/40 transition-all duration-300 group flex flex-col overflow-hidden"
    >

      <div className="flex items-center justify-center bg-gray-50 overflow-hidden min-h-[110px] rounded-t-2xl px-4 py-5">
        {!failed ? (

          <img
            src={brand.logo}
            alt={brand.name}
            className="max-h-[60px] max-w-[120px] w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-125"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 font-black text-[20px]">
            {brand.name.charAt(0)}
          </div>
        )}
      </div>


      <div className="bg-white px-3 pb-4 pt-2.5 flex flex-col items-center gap-0.5">
        <span className="text-[12.5px] font-bold text-gray-500 group-hover:text-[#7c3aed] transition-colors duration-300 text-center">
          {brand.name}
        </span>
        <span className="text-[11px] font-medium text-[#7c3aed] opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          View Products →
        </span>
      </div>
    </Link>
  );
}

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f6]">


      <PageBanner
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Brands' },
        ]}
        icon={Tag}
        title="Top Brands"
        subtitle="Shop from your favorite brands"
      />


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1100px] py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {BRANDS.map((brand) => (
            <BrandCard key={brand.slug} brand={brand} />
          ))}
        </div>
      </div>

    </div>
  );
}
