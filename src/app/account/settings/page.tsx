'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, MapPin, Settings as SettingsIcon, ChevronRight, Lock, Eye, EyeOff } from 'lucide-react';

const OrangeLockSVG = () => (
  <svg width="16" height="22" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M6 6V9H12V6C12 4.34531 10.6547 3 9 3C7.34531 3 6 4.34531 6 6ZM3 9V6C3 2.68594 5.68594 0 9 0C12.3141 0 15 2.68594 15 6V9C16.6547 9 18 10.3453 18 12V22.5C18 24.1547 16.6547 25.5 15 25.5H3C1.34531 25.5 0 24.1547 0 22.5V12C0 10.3453 1.34531 9 3 9Z" fill="#E17100"/>
  </svg>
);

const WhiteSaveSVG = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M2 0C0.896875 0 0 0.896875 0 2V12C0 13.1031 0.896875 14 2 14H12C13.1031 14 14 13.1031 14 12V4.41563C14 3.88438 13.7906 3.375 13.4156 3L11 0.584375C10.625 0.209375 10.1156 0 9.58438 0H2ZM3 3C3 2.44688 3.44688 2 4 2H9C9.55313 2 10 2.44688 10 3V5C10 5.55312 9.55313 6 9 6H4C3.44688 6 3 5.55312 3 5V3ZM7 8C7.53043 8 8.03914 8.21071 8.41421 8.58579C8.78929 8.96086 9 9.46957 9 10C9 10.5304 8.78929 11.0391 8.41421 11.4142C8.03914 11.7893 7.53043 12 7 12C6.46957 12 5.96086 11.7893 5.58579 11.4142C5.21071 11.0391 5 10.5304 5 10C5 9.46957 5.21071 8.96086 5.58579 8.58579C5.96086 8.21071 6.46957 8 7 8Z" fill="white"/>
  </svg>
);

export default function SettingsPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                <Link href="#" className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-[13.5px] font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">My Addresses</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                </Link>
                <Link href="/account/settings" className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#ecfdf5] transition-colors">
                  <div className="flex items-center gap-3">
                    <SettingsIcon className="w-4 h-4 text-[#1cc065]" />
                    <span className="text-[13.5px] font-bold text-[#1cc065]">Settings</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#1cc065]/70" />
                </Link>
              </div>
            </div>
          </div>


          <div className="flex-1 min-w-0 flex flex-col gap-5">
            
            <div>
              <h2 className="text-[19px] font-extrabold text-[#1e293b]">Account Settings</h2>
              <p className="text-[13px] text-gray-500 mt-1">Update your profile information and change your password</p>
            </div>


            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#ecfdf5] flex items-center justify-center flex-shrink-0">
                  <User className="w-[18px] h-[18px] text-[#1cc065] fill-current" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1e293b] text-[14.5px]">Profile Information</h3>
                  <p className="text-[12.5px] text-gray-400 mt-0.5">Update your personal details</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-[12px] font-semibold text-gray-600 mb-1.5">Full Name</label>
                  <input type="text" defaultValue="Usama" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-gray-800 text-[14px] font-medium focus:outline-none focus:ring-1 focus:ring-[#1cc065] focus:border-[#1cc065] transition-all bg-white"/>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-gray-600 mb-1.5">Email Address</label>
                  <input type="email" placeholder="Enter your email" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 placeholder:text-gray-300 text-gray-800 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#1cc065] focus:border-[#1cc065] transition-all bg-white"/>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-gray-600 mb-1.5">Phone Number</label>
                  <input type="tel" placeholder="01xxxxxxxxx" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 placeholder:text-gray-300 text-gray-800 text-[14px] focus:outline-none focus:ring-1 focus:ring-[#1cc065] focus:border-[#1cc065] transition-all bg-white"/>
                </div>
                <div className="mt-1">
                  <button className="bg-[#1cc065] hover:bg-[#18a959] text-white px-5 py-2.5 rounded-xl font-bold text-[13.5px] inline-flex items-center gap-2 transition-all shadow-[0_4px_12px_rgba(28,192,101,0.25)]">
                    <WhiteSaveSVG />
                    Save Changes
                  </button>
                </div>
              </div>


              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-bold text-[#1e293b] text-[13.5px] mb-4">Account Information</h4>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center pb-3 border-b border-dashed border-gray-100">
                    <span className="text-[13px] text-gray-500 font-medium">User ID</span>
                    <span className="text-[13px] text-gray-300 font-bold">--</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[13px] text-gray-500 font-medium">Role</span>
                    <span className="bg-[#ecfdf5] text-[#1cc065] px-3 py-0.5 rounded-md text-[11px] font-bold">User</span>
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                  <OrangeLockSVG />
                </div>
                <div>
                  <h3 className="font-bold text-[#1e293b] text-[14.5px]">Change Password</h3>
                  <p className="text-[12.5px] text-gray-400 mt-0.5">Update your account password</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <label className="block text-[12px] font-semibold text-gray-600 mb-1.5">Current Password</label>
                  <div className="relative">
                    <input type={showCurrentPassword ? "text" : "password"} placeholder="Enter your current password" className="w-full border border-gray-200 rounded-xl pl-4 pr-12 py-2.5 placeholder:text-gray-300 text-gray-800 text-[14px] focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 transition-all bg-white"/>
                    <button type="button" onClick={() => setShowCurrentPassword(!showCurrentPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                      {showCurrentPassword ? <EyeOff className="w-[17px] h-[17px]" strokeWidth={2} /> : <Eye className="w-[17px] h-[17px]" strokeWidth={2} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-gray-600 mb-1.5">New Password</label>
                  <div className="relative">
                    <input type={showNewPassword ? "text" : "password"} placeholder="Enter your new password" className="w-full border border-gray-200 rounded-xl pl-4 pr-12 py-2.5 placeholder:text-gray-300 text-gray-800 text-[14px] focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 transition-all bg-white"/>
                    <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                      {showNewPassword ? <EyeOff className="w-[17px] h-[17px]" strokeWidth={2} /> : <Eye className="w-[17px] h-[17px]" strokeWidth={2} />}
                    </button>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1.5">Must be at least 6 characters</p>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-gray-600 mb-1.5">Confirm New Password</label>
                  <div className="relative">
                    <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm your new password" className="w-full border border-gray-200 rounded-xl pl-4 pr-12 py-2.5 placeholder:text-gray-300 text-gray-800 text-[14px] focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 transition-all bg-white"/>
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                      {showConfirmPassword ? <EyeOff className="w-[17px] h-[17px]" strokeWidth={2} /> : <Eye className="w-[17px] h-[17px]" strokeWidth={2} />}
                    </button>
                  </div>
                </div>
                <div className="mt-1">
                  <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-5 py-2.5 rounded-xl font-bold text-[13.5px] inline-flex items-center gap-2 transition-all shadow-[0_4px_12px_rgba(249,115,22,0.25)]">
                    <Lock className="w-[14px] h-[14px]" strokeWidth={2.5} />
                    Change Password
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
