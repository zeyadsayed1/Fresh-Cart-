'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, MapPin, Settings as SettingsIcon, ChevronRight, Pencil, Trash2, Plus, Phone, Building2 } from 'lucide-react';

const MOCK_ADDRESSES = [
  {
    id: 1,
    title: 'Sadat City',
    details: 'Sadat City',
    phone: '01097514862',
    city: 'Sadat City',
  },
];

export default function AddressesPage() {
  const [addresses, setAddresses] = useState(MOCK_ADDRESSES);

  const handleDelete = (id: number) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6]">


      <div className="bg-[#1cc065] py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-[1100px]">
          <div className="flex items-center gap-2 text-[12px] text-white/80 mb-5 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-bold">My Account</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-[60px] h-[60px] bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 text-white">
              <User className="w-7 h-7 fill-current" />
            </div>
            <div>
              <h1 className="text-[26px] font-bold text-white tracking-tight">My Account</h1>
              <p className="text-[13px] text-white/80 font-medium mt-0.5">Manage your addresses and account settings</p>
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1100px] py-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">


          <div className="w-full md:w-[260px] flex-shrink-0">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <h2 className="font-bold text-[#1e293b] text-[14px] px-2 mb-3 mt-1">My Account</h2>
              <div className="flex flex-col gap-1">
                <Link href="/account/addresses" className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#ecfdf5] transition-colors">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#1cc065]" />
                    <span className="text-[13.5px] font-bold text-[#1cc065]">My Addresses</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#1cc065]/70" />
                </Link>
                <Link href="/account/settings" className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <SettingsIcon className="w-4 h-4 text-gray-400" />
                    <span className="text-[13.5px] font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">Settings</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                </Link>
              </div>
            </div>
          </div>


          <div className="flex-1 min-w-0">


            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <h2 className="text-[19px] font-extrabold text-[#1e293b]">My Addresses</h2>
                <p className="text-[13px] text-gray-500 mt-1">Manage your saved delivery addresses</p>
              </div>
              <button className="flex-shrink-0 flex items-center gap-2 bg-[#1cc065] hover:bg-[#18a959] text-white px-4 py-2.5 rounded-xl font-bold text-[13.5px] transition-all shadow-[0_4px_12px_rgba(28,192,101,0.25)]">
                <Plus className="w-4 h-4" strokeWidth={2.5} />
                <span>Add Address</span>
              </button>
            </div>


            <div className="flex flex-col gap-3">
              {addresses.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-16 flex flex-col items-center justify-center gap-3 text-center px-6">
                  <div className="w-[60px] h-[60px] rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-1">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#1e293b]">No Addresses Yet</h3>
                  <p className="text-[13px] text-gray-500 max-w-[280px]">Add your first delivery address to make checkout faster and easier.</p>
                  <button className="mt-3 flex items-center gap-2 bg-[#1cc065] hover:bg-[#18a959] text-white px-6 py-2.5 rounded-xl font-bold text-[13.5px] transition-all shadow-[0_4px_12px_rgba(28,192,101,0.25)]">
                    <Plus className="w-4 h-4" strokeWidth={2.5} />
                    Add Your First Address
                  </button>
                </div>
              ) : (
                addresses.map((address) => (
                  <div key={address.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-start gap-4">

                    <div className="w-9 h-9 rounded-full bg-[#ecfdf5] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-[17px] h-[17px] text-[#1cc065]" />
                    </div>


                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-[#1e293b] text-[14.5px]">{address.title}</h3>
                      <p className="text-[13px] text-gray-500 mt-0.5">{address.details}</p>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mt-3">
                        <div className="flex items-center gap-1.5 text-gray-500">
                          <Phone className="w-3.5 h-3.5 shrink-0" />
                          <span className="text-[12.5px]">{address.phone}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-500">
                          <Building2 className="w-3.5 h-3.5 shrink-0" />
                          <span className="text-[12.5px]">{address.city}</span>
                        </div>
                      </div>
                    </div>


                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#1cc065] hover:border-[#1cc065]/30 hover:bg-green-50 transition-all">
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(address.id)}
                        className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
