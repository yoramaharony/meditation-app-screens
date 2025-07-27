"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import emojiFoodBeverage from '../../public/icons/emoji_food_beverage.svg';
import relax from '../../public/icons/relax.svg';
import sentimentCalm from '../../public/icons/sentiment_calm.svg';
import selfImprovement from '../../public/icons/self_improvement.svg';
import CancelIcon from '../components/icons/CancelIcon';
import AssuredWorkloadIcon from '../components/icons/AssuredWorkloadIcon';
import AdGroupOffIcon from '../components/icons/AdGroupOffIcon';
import EmojiFoodBeverageIcon from '../components/icons/EmojiFoodBeverageIcon';
import RelaxIcon from '../components/icons/RelaxIcon';
import SentimentCalmIcon from '../components/icons/SentimentCalmIcon';
import SelfImprovementIcon from '../components/icons/SelfImprovementIcon';
import LockOpenRightIcon from '../components/icons/LockOpenRightIcon';
import NotificationsIcon from '../components/icons/NotificationsIcon';
import CreditCardIcon from '../components/icons/CreditCardIcon';
import CreditCardOffIcon from '../components/icons/CreditCardOffIcon';

const phoneScreens = [
  {
    src: '/images/screens/homecreen.png',
    title: 'Home',
  },
  {
    src: '/images/screens/create-meditation.png',
    title: 'Create Meditation',
  },
  {
    src: '/images/screens/player.png',
    title: 'Player',
  },
  {
    src: '/images/screens/journey.png',
    title: 'Journey',
  },
  {
    src: '/images/screens/manage-library.png',
    title: 'Manage Library',
  },
  {
    src: '/images/screens/music-background-sound.png',
    title: 'Background Sound',
  },
];

export default function PaywallPage() {
  const [selectedPlan, setSelectedPlan] = useState('quarterly');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const plans: Record<string, { label: string; price: string; total: string; perMonth: string; savings: string }> = {
    monthly:   { label: 'Monthly',   price: '$9.99',  total: '$9.99',  perMonth: '$9.99', savings: '–' },
    quarterly: { label: 'Quarterly', price: '$19.99', total: '$19.99', perMonth: '$6.66', savings: '~33%' },
    yearly:    { label: 'Yearly',    price: '$59.99', total: '$59.99', perMonth: '$5.00', savings: '~50%' }
  };

  const nextScreen = () => setCarouselIndex((i) => (i + 1) % phoneScreens.length);
  const prevScreen = () => setCarouselIndex((i) => (i - 1 + phoneScreens.length) % phoneScreens.length);

  return (
    <div className="bg-black text-white min-h-screen relative">
      {/* Sticky Paywall Header */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#021536] border-t border-blue-400/20 shadow-2xl p-4">
        <div className="max-w-md mx-auto">
          {/* Top Container - Two Columns */}
          <div className="flex justify-between items-start mb-4">
            {/* Left Column - Trial Info */}
            <div className="text-left">
              <p className="text-2xl font-normal text-white">7-Day Free Trial</p>
              <p className="text-xs text-gray-400 mt-1">Cancel anytime • No commitment</p>
            </div>
            {/* Right Column - Price */}
            <div className="flex flex-col items-center text-center">
              <p className="text-2xl font-bold">{plans['quarterly'].price}</p>
              <p className="text-xs font-semibold text-green-400 mt-0.5">Save ~33% vs monthly</p>
            </div>
          </div>
          {/* Three-Option Toggle */}
          <div className="relative bg-white/5 backdrop-blur-sm rounded-full p-1 mb-2 border border-white/10 shadow-lg">
            <div className="relative flex">
              {Object.entries(plans).map(([key, plan]) => (
                <button
                  key={key}
                  className={`flex-1 py-3 px-4 rounded-full transition-all duration-300 relative z-10 text-sm font-medium ${
                    selectedPlan === key
                      ? 'text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setSelectedPlan(key)}
                >
                  {plan.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Start Free Trial Button - Equal Height */}
          <button className="w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-white py-3 rounded-full hover:from-blue-500 hover:via-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 mb-3 relative overflow-hidden group text-base">
            {/* Radiant glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Button content */}
            <div className="flex flex-col items-center justify-center w-full">
              <span className="relative z-10 font-normal text-xl">Start Free Trial</span>
            </div>
          </button>
          <div className="text-[15px] text-[#D0D9FF] font-medium text-center mt-0.5">
            $0 is charged today!
          </div>
          
          {/* Links at bottom of sticky header */}
          <div className="flex justify-center items-center space-x-1 text-xs text-white border-t border-white/10 pt-3">
            <Link href="/terms" className="hover:text-gray-300 transition-colors underline">Terms of Use</Link>
            <span className="text-white">•</span>
            <Link href="/privacy" className="hover:text-gray-300 transition-colors underline">Privacy Policy</Link>
            <span className="text-white">•</span>
            <Link href="#" className="hover:text-gray-300 transition-colors underline">Restore Purchase</Link>
          </div>
        </div>
      </div>

      {/* Main Content - No Footer in scrollable area */}
      <div className="pb-64 px-4 py-8 space-y-6 max-w-md mx-auto">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Unlock Your Full Potential</h1>
          <p className="text-gray-300 mb-6">Experience personalized meditation that adapts to your needs and transforms your daily life.</p>
          
          <div className="flex justify-center relative">
            <div className="relative group cursor-pointer">
              <Image 
                src="/images/screens/create-meditation.png" 
                alt="Create Meditation Screen" 
                width={240} 
                height={480}
                priority
                className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                style={{ width: 'auto', height: 'auto' }}
              />
              {/* Glassy Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Glassy play button with backdrop blur */}
                <div className="relative w-24 h-24 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 border-2 border-white/10">
                  {/* Inner glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-blue-500/15 to-blue-600/20 animate-pulse"></div>
                  {/* Play button background */}
                  <div className="relative w-16 h-16 bg-gradient-to-br from-blue-400/50 via-blue-500/50 to-blue-700/50 rounded-full flex items-center justify-center shadow-lg">
                    {/* Play icon */}
                    <svg className="w-10 h-10 text-white/90 ml-0.5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </div>
                  {/* Outer radiating rings */}
                  <div className="absolute inset-0 rounded-full border-4 border-blue-400/20 animate-ping"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-blue-300/15 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-300 text-sm mt-6">Create personalized meditations with AI</p>
        </div>
        
        {/* How Trial Works */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-400/20" style={{ background: 'linear-gradient(135deg, rgba(2,21,54,0.3) 0%, rgba(2,21,54,0.6) 50%, rgba(2,21,54,0.9) 100%)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-blue-600/10"></div>
          <div className="relative z-10 p-6">
            <h2 className="text-xl font-semibold mb-6 text-center text-white">How your free trial works</h2>
            
            {/* Timeline refactor */}
            <div className="relative flex flex-col">
              {/* Vertical bar with breathing room, absolutely positioned and shifted right by 10px total */}
              <div className="absolute left-[23px] -translate-x-1/2 -top-4 -bottom-4 w-8 bg-gradient-to-b from-blue-400/30 via-purple-400/30 to-yellow-300/30 rounded-full" style={{ zIndex: 0 }} />
              {/* Timeline steps */}
              <div className="space-y-8 z-10">
                {/* Today */}
                <div className="flex items-start">
                  <div className="w-12 flex flex-col items-center justify-center relative z-10" style={{ minHeight: 48 }}>
                    <LockOpenRightIcon className="w-7 h-7" />
                  </div>
                  <div className="flex-1 flex flex-col ml-2">
                    <h3 className="font-bold text-white">Today</h3>
                    <p className="text-gray-300 text-sm">Get instant access and see how it can change your life.</p>
                  </div>
                </div>
                {/* Reminder */}
                <div className="flex items-start">
                  <div className="w-12 flex flex-col items-center justify-center relative z-10" style={{ minHeight: 48 }}>
                    <NotificationsIcon className="w-7 h-7" />
                  </div>
                  <div className="flex-1 flex flex-col ml-2">
                    <h3 className="font-bold text-white">Reminder</h3>
                    <p className="text-gray-300 text-sm">We’ll remind you before your trial ends.</p>
                  </div>
                </div>
                {/* Charge */}
                <div className="flex items-start">
                  <div className="w-12 flex flex-col items-center justify-center relative z-10" style={{ minHeight: 48 }}>
                    <CreditCardIcon className="w-7 h-7" />
                  </div>
                  <div className="flex-1 flex flex-col ml-2">
                    <h3 className="font-bold text-white">Charge</h3>
                    <p className="text-gray-300 text-sm">You will be charged unless you cancel first.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pricing Information */}
            <div className="mt-8 text-center">
              <p className="text-gray-300">
                Unlimited free access for 7 days, then <span className="font-bold text-white">$59.99 per year</span> ($4.99/month).
              </p>
            </div>
          </div>
        </div>

        {/* 7-Day Journey Section */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-400/20" style={{ background: 'linear-gradient(135deg, rgba(2,21,54,0.3) 0%, rgba(2,21,54,0.6) 50%, rgba(2,21,54,0.9) 100%)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-blue-600/10"></div>
          <div className="relative z-10 p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Your 7-Day Journey</h2>
            <div className="space-y-3">
              {/* Day 1 */}
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center">
                  <span className="mr-3 inline-flex items-center justify-center">
                    <EmojiFoodBeverageIcon className="w-6 h-6 text-blue-500" />
                  </span>
                  <div>
                    <p className="font-medium">Day 1: Morning Calm Reset</p>
                    <p className="text-sm text-gray-400">Start your day with clarity and purpose</p>
                  </div>
                </div>
              </div>
              {/* Day 2 */}
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center">
                  <span className="mr-3 inline-flex items-center justify-center">
                    <RelaxIcon className="w-6 h-6 text-blue-500" />
                  </span>
                  <div>
                    <p className="font-medium">Day 2: Breathing into Presence</p>
                    <p className="text-sm text-gray-400">Breathe mindfully to find calm and focus</p>
                  </div>
                </div>
              </div>
              {/* Day 3 */}
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center">
                  <span className="mr-3 inline-flex items-center justify-center">
                    <SentimentCalmIcon className="w-6 h-6 text-blue-500" />
                  </span>
                  <div>
                    <p className="font-medium">Day 3: Body Scan Confidence</p>
                    <p className="text-sm text-gray-400">Connect with your body’s wisdom and strength</p>
                  </div>
                </div>
              </div>
              {/* Day 4 */}
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center">
                  <span className="mr-3 inline-flex items-center justify-center">
                    <SelfImprovementIcon className="w-6 h-6 text-blue-500" />
                  </span>
                  <div>
                    <p className="font-medium">Day 4: Stress Release Flow</p>
                    <p className="text-sm text-gray-400">Release tension and anxiety for deep peace</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Rest? Section with 3D Radiant Gradient Checkmarks */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-400/20" style={{ background: 'linear-gradient(135deg, rgba(2,21,54,0.3) 0%, rgba(2,21,54,0.6) 50%, rgba(2,21,54,0.9) 100%)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-blue-600/10"></div>
          <div className="relative z-10 p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Why Rest?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                {/* 3D Radiant Gradient Checkmark */}
                <div className="relative flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-lg relative overflow-hidden">
                    {/* Radiant glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300/50 via-transparent to-blue-700/50 animate-pulse"></div>
                    {/* 3D highlight */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                    {/* Inner shadow for depth */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
                    {/* Checkmark icon */}
                    <svg className="absolute inset-0 w-6 h-6 text-white p-1 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400/30 to-blue-600/30 blur-sm animate-pulse"></div>
                </div>
                <div>
                  <p className="font-medium">AI-Powered Personalization</p>
                  <p className="text-sm text-gray-400">Every meditation is tailored to your mood and needs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                {/* 3D Radiant Gradient Checkmark */}
                <div className="relative flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-lg relative overflow-hidden">
                    {/* Radiant glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300/50 via-transparent to-blue-700/50 animate-pulse"></div>
                    {/* 3D highlight */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                    {/* Inner shadow for depth */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
                    {/* Checkmark icon */}
                    <svg className="absolute inset-0 w-6 h-6 text-white p-1 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400/30 to-blue-600/30 blur-sm animate-pulse"></div>
                </div>
                <div>
                  <p className="font-medium">Multiple Voice Options</p>
                  <p className="text-sm text-gray-400">Choose from calming, energetic, or soothing voice narrators.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                {/* 3D Radiant Gradient Checkmark */}
                <div className="relative flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-lg relative overflow-hidden">
                    {/* Radiant glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300/50 via-transparent to-blue-700/50 animate-pulse"></div>
                    {/* 3D highlight */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                    {/* Inner shadow for depth */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
                    {/* Checkmark icon */}
                    <svg className="absolute inset-0 w-6 h-6 text-white p-1 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400/30 to-blue-600/30 blur-sm animate-pulse"></div>
                </div>
                <div>
                  <p className="font-medium">No Ads, No Distractions</p>
                  <p className="text-sm text-gray-400">Enjoy a pure meditation experience, always ad-free here.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                {/* 3D Radiant Gradient Checkmark */}
                <div className="relative flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-lg relative overflow-hidden">
                    {/* Radiant glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300/50 via-transparent to-blue-700/50 animate-pulse"></div>
                    {/* 3D highlight */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent"></div>
                    {/* Inner shadow for depth */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
                    {/* Checkmark icon */}
                    <svg className="absolute inset-0 w-6 h-6 text-white p-1 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400/30 to-blue-600/30 blur-sm animate-pulse"></div>
                </div>
                <div>
                  <p className="font-medium">On-Demand, Anywhere</p>
                  <p className="text-sm text-gray-400">Access your practice anytime, anywhere, on any device.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience the Full App Section with Carousel */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-400/20" style={{ background: 'linear-gradient(135deg, rgba(2,21,54,0.3) 0%, rgba(2,21,54,0.6) 50%, rgba(2,21,54,0.9) 100%)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-blue-600/10"></div>
          <div className="relative z-10 p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Experience the Full App</h2>
            <div className="flex items-center justify-center space-x-4 pb-4">
              <button
                aria-label="Previous screen"
                onClick={prevScreen}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <div className="flex-shrink-0 text-center">
                <Image
                  src={phoneScreens[carouselIndex].src}
                  alt={phoneScreens[carouselIndex].title}
                  width={200}
                  height={410}
                  className="rounded-2xl shadow-lg mb-2 mx-auto"
                  style={{ maxHeight: 410, objectFit: 'contain' }}
                />
                <p className="text-xs text-gray-400 mt-2 font-semibold">{phoneScreens[carouselIndex].title}</p>
              </div>
              <button
                aria-label="Next screen"
                onClick={nextScreen}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
            <div className="flex justify-center mt-2 space-x-2">
              {phoneScreens.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full ${carouselIndex === idx ? 'bg-blue-400' : 'bg-white/20'} transition-colors`}
                  onClick={() => setCarouselIndex(idx)}
                  aria-label={`Go to screen ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-400/20" style={{ background: 'linear-gradient(135deg, rgba(2,21,54,0.3) 0%, rgba(2,21,54,0.6) 50%, rgba(2,21,54,0.9) 100%)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-blue-600/10"></div>
          <div className="relative z-10 p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">What Users Say</h2>
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <p className="text-sm text-gray-300 italic mb-2">"The AI-generated meditations are incredibly personalized. It's like having a meditation coach who knows exactly what I need."</p>
                <p className="text-xs text-gray-400">- David K., Entrepreneur</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <p className="text-sm text-gray-300 italic mb-2">"Rest has become my daily sanctuary. The voice options and sound personalization make each session unique and meaningful."</p>
                <p className="text-xs text-gray-400">- Lisa M., Teacher</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust & Safety with Fancy Gradient Icons */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-400/20" style={{ background: 'linear-gradient(135deg, rgba(2,21,54,0.3) 0%, rgba(2,21,54,0.6) 50%, rgba(2,21,54,0.9) 100%)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-blue-600/10"></div>
          <div className="relative z-10 p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Your Trust & Safety</h2>
            <div className="space-y-4 text-sm">
              <div className="flex items-center">
                <span className="mr-4 inline-flex items-center justify-center">
                  <EmojiFoodBeverageIcon className="w-6 h-6" />
                </span>
                <span>Cancel anytime, no hidden fees</span>
              </div>
              <div className="flex items-center">
                <span className="mr-4 inline-flex items-center justify-center">
                  <RelaxIcon className="w-6 h-6" />
                </span>
                <span>Secure payment via Apple / Google</span>
              </div>
              <div className="flex items-center">
                <span className="mr-4 inline-flex items-center justify-center">
                  <SentimentCalmIcon className="w-6 h-6" />
                </span>
                <span>No ads, no distractions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Manifesto */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-400/20" style={{ background: 'linear-gradient(135deg, rgba(2,21,54,0.3) 0%, rgba(2,21,54,0.6) 50%, rgba(2,21,54,0.9) 100%)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-blue-600/10"></div>
          <div className="relative z-10 p-6 text-center">
            <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Your Mind Deserves Care
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We believe your mental space deserves care — just like your body. 
              Rest was built to support your real life, not escape it. 
              Mindfulness, built for this generation.
            </p>
            <p className="text-sm text-gray-400 mt-4 italic">
              "Built by real mindfulness teachers & therapists, generated by AI, approved by humans."
            </p>
          </div>
        </div>

        {/* Additional vertical spacing */}
        <div className="h-2 bg-black"></div>
      </div>
    </div>
  );
} 