"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Map as MapIcon, MessageCircle, Calendar, Users, Sparkles, Mic, Route, X, Heart, Share2, MapPin, Search, Music, Film, Activity, UserPlus, Clock } from "lucide-react";

const features = [
  { id: "maps", name: "Maps", icon: MapIcon },
  { id: "messaging", name: "Messaging", icon: MessageCircle },
  { id: "events", name: "Events", icon: Calendar },
  { id: "communities", name: "Communities", icon: Users },
  { id: "recommendations", name: "Recommendations", icon: Sparkles },
  { id: "rooms", name: "Rooms", icon: Mic },
  { id: "routes", name: "Routes", icon: Route }
];

export default function InteractiveEcosystemDemo() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const activeFeatureObj = features.find(f => f.id === activeFeature);

  return (
    <div className="relative w-full aspect-square rounded-[40px] overflow-hidden flex items-center justify-center bg-[#03030A] shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] border border-brand-blue/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,100,224,0.15),transparent_70%)]" />
      
      {/* Header & Controls */}
      <AnimatePresence mode="wait">
        {activeFeature ? (
          <motion.div 
            key="active-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-8 left-8 right-8 md:top-12 md:left-12 md:right-12 z-30 flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              {activeFeatureObj && <activeFeatureObj.icon className="text-[#0000FF]" size={24} />}
              <p className="text-white/90 font-sans font-light text-xl tracking-wide">{activeFeatureObj?.name}</p>
            </div>
            <button 
              onClick={() => setActiveFeature(null)}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key="default-header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-8 left-8 md:top-12 md:left-12 z-20"
          >
            <p className="text-white/90 font-sans font-light text-xl tracking-wide">Select a feature.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        {!activeFeature ? (
          <motion.div
            key="floating-tags"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {features.map((app, i) => {
              const Icon = app.icon;
              const xPath = [
                Math.sin(i * 1.1 + 1) * 180,
                Math.cos(i * 1.3 + 2) * 190,
                Math.sin(i * 1.7 + 3) * 170,
                Math.cos(i * 1.9 + 4) * 180,
                Math.sin(i * 2.3 + 5) * 190,
                Math.sin(i * 1.1 + 1) * 180,
              ];
              const yPath = [
                Math.cos(i * 1.2 + 1) * 180,
                Math.sin(i * 1.4 + 2) * 170,
                Math.cos(i * 1.6 + 3) * 190,
                Math.sin(i * 1.8 + 4) * 180,
                Math.cos(i * 2.2 + 5) * 170,
                Math.cos(i * 1.2 + 1) * 180,
              ];
              const rotatePath = [
                0, Math.sin(i * 2) * 15, Math.cos(i * 3) * -15, Math.sin(i * 4) * 15, Math.cos(i * 5) * -15, 0
              ];
              
              return (
                <motion.button
                  key={app.name}
                  onClick={() => setActiveFeature(app.id)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  animate={{ x: xPath, y: yPath, rotate: rotatePath }}
                  transition={{ 
                    duration: 25 + (i % 4) * 5, 
                    repeat: Infinity,
                    ease: "linear" 
                  }}
                  className="absolute left-1/2 top-1/2 -ml-[100px] -mt-[30px] bg-white backdrop-blur-md px-6 py-4 rounded-2xl border border-[#0000FF]/20 shadow-[0_0_30px_rgba(0,0,255,0.15)] whitespace-nowrap hover:scale-110 transition-transform hover:z-50 cursor-pointer flex items-center justify-center"
                >
                  <div className="flex items-center gap-2 pointer-events-none">
                    <Icon size={16} className="text-[#0000FF]" />
                    <span className="text-sm font-mono tracking-widest uppercase text-[#0000FF] font-semibold">{app.name}</span>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="demo-view"
            initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center p-8 pt-24"
          >
            {activeFeature === "maps" && <MapsDemo />}
            {activeFeature === "recommendations" && <RecommendationsDemo />}
            {activeFeature === "rooms" && <RoomsDemo />}
            {activeFeature === "messaging" && <MessagingDemo />}
            {activeFeature === "communities" && <CommunitiesDemo />}
            {activeFeature === "events" && <EventsDemo />}
            {activeFeature === "routes" && <RoutesDemo />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MapsDemo() {
  return (
    <div className="relative w-full max-w-xl aspect-[4/3] rounded-3xl overflow-hidden bg-[#0a0a0f] border border-white/10 shadow-2xl flex items-center justify-center">
      {/* Simulated Satellite Map Background */}
      <div className="absolute inset-0 opacity-40">
        {/* Fallback to CSS grid styling for map aesthetic */}
        <div className="w-full h-full bg-[#050510] flex flex-wrap gap-[1px]">
          {Array.from({length: 100}).map((_, i) => (
            <div key={i} className="w-[10%] h-[10%] bg-white/[0.02]" />
          ))}
        </div>
      </div>
      
      {/* Map lines overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 300">
        <path d="M 50 300 L 150 150 L 250 100 L 400 120" stroke="#0000FF" strokeWidth="2" fill="none" className="opacity-50" />
        <path d="M 200 300 L 150 150 L 100 0" stroke="#0000FF" strokeWidth="1" fill="none" className="opacity-30" />
      </svg>

      {/* User Post Interaction */}
      <div className="relative z-10 -ml-12 mt-12 flex flex-col items-center">
        {/* Pulsing radius */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 2, 3], opacity: [0, 0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
          className="absolute left-1/2 top-1/2 -ml-12 -mt-12 w-24 h-24 bg-[#0000FF]/40 rounded-full"
        />
        
        {/* Pin */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
          className="relative z-20"
        >
          <div className="w-10 h-10 rounded-full border-2 border-white shadow-[0_0_15px_rgba(0,0,255,0.5)] overflow-hidden bg-[#03030A]">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-2 left-1/2 -ml-1 w-2 h-2 bg-white rotate-45" />
        </motion.div>

        {/* Post Preview Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 1.2 }}
          className="absolute top-0 left-12 w-48 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-xl z-30"
        >
          <div className="flex gap-2 items-start">
            <div className="flex-1">
              <p className="text-white text-xs font-medium leading-relaxed">Just discovered this hidden cafe! ☕</p>
              <p className="text-white/50 text-[10px] mt-1">2 mins ago • 150m away</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function RecommendationsDemo() {
  return (
    <div className="relative w-full max-w-xl aspect-[4/3] rounded-3xl overflow-hidden bg-[#03030A] border border-white/10 shadow-2xl flex flex-col p-6 font-sans">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
        <div className="w-8 h-8 rounded-full bg-[#0000FF] flex items-center justify-center">
          <Sparkles size={16} className="text-white" />
        </div>
        <p className="text-white font-medium">Rheole Intelligence</p>
      </div>
      
      <div className="flex-1 flex flex-col justify-end gap-6 pb-4">
        {/* User Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="self-end bg-white/10 border border-white/10 px-4 py-3 rounded-2xl rounded-br-sm max-w-[80%]"
        >
          <p className="text-white/90 text-sm">What's good around here tonight?</p>
        </motion.div>

        {/* AI Response Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="self-start w-full"
        >
          <p className="text-white/80 text-sm leading-relaxed mb-4 max-w-[90%]">
            Based on your location and the clear weather, here are some local recommendations. The air quality is excellent, perfect for an evening walk!
          </p>
          
          {/* Horizontal Scroller for Cards */}
          <div className="flex gap-4 overflow-hidden -mx-6 px-6 pb-2">
            {[
              { type: "Movies", title: "Dune: Part Two", sub: "AMC Empire • 1.2km", icon: Film, color: "text-purple-400" },
              { type: "Places", title: "Sunset Point", sub: "Scenic View • 0.8km", icon: MapPin, color: "text-orange-400" },
              { type: "Health", title: "Evening Run", sub: "AQI: 42 (Good) • Park", icon: Activity, color: "text-green-400" }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 + (i * 0.2) }}
                className="min-w-[160px] bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <item.icon size={14} className={item.color} />
                  <span className="text-[10px] uppercase tracking-wider text-white/50">{item.type}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{item.title}</p>
                  <p className="text-white/60 text-xs mt-1">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function RoomsDemo() {
  return (
    <div className="relative w-full max-w-xl aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#050515] to-[#020205] border border-white/10 shadow-2xl flex flex-col items-center justify-center p-8 font-sans">
      {/* Active Space */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 text-red-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Live Now
        </div>
        <h3 className="text-white text-2xl font-light">Local Tech Founders</h3>
        <p className="text-white/50 text-sm mt-2">124 tuned in • 1.5km away</p>
      </motion.div>

      {/* Speakers */}
      <div className="flex gap-8 items-center justify-center mb-12">
        {[
          { img: "https://i.pravatar.cc/150?u=1", speaking: true, delay: 0.4 },
          { img: "https://i.pravatar.cc/150?u=2", speaking: false, delay: 0.5 },
          { img: "https://i.pravatar.cc/150?u=3", speaking: false, delay: 0.6 },
        ].map((speaker, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: speaker.delay }}
            className="relative"
          >
            {speaker.speaking && (
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-[#0000FF]"
              />
            )}
            <div className={`relative z-10 w-16 h-16 rounded-full overflow-hidden border-2 ${speaker.speaking ? 'border-[#0000FF]' : 'border-white/20'}`}>
              <img src={speaker.img} alt="Speaker" className="w-full h-full object-cover" />
            </div>
            {speaker.speaking && (
              <div className="absolute -bottom-2 -right-2 bg-[#0000FF] w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#050515] z-20">
                <Mic size={12} className="text-white" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Suggestion Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="w-full max-w-sm bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#0000FF]/20 flex items-center justify-center">
            <Mic size={16} className="text-[#0000FF]" />
          </div>
          <div>
            <p className="text-white text-sm font-medium">Design Critique Open</p>
            <p className="text-white/50 text-xs">Open to Everyone</p>
          </div>
        </div>
        <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-xs transition-colors">
          Join
        </button>
      </motion.div>
    </div>
  );
}

function MessagingDemo() {
  return (
    <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden bg-[#03030A] border border-white/10 shadow-2xl flex flex-col font-sans">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-white/10 bg-white/5 backdrop-blur-md">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/150?u=4" alt="Alex" className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-white font-medium text-sm">Alex Chen</p>
          <p className="text-[#0000FF] text-xs">Typing...</p>
        </div>
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 p-4 flex flex-col gap-4 justify-end">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="self-end bg-[#0000FF] text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] text-sm"
        >
          Hey! Are you heading to the community meetup tonight?
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="self-start bg-white/10 text-white px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%] text-sm"
        >
          Yeah, I'll be there! Where exactly is it?
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8 }}
          className="self-end bg-[#0000FF] text-white p-2 rounded-2xl rounded-tr-sm max-w-[80%] text-sm flex flex-col gap-2"
        >
          <div className="w-full h-24 bg-black/20 rounded-xl overflow-hidden relative flex items-center justify-center">
            <MapIcon size={24} className="text-white/50" />
          </div>
          <span className="px-2 pb-1">It's at the Downtown Hub. Shared the pin!</span>
        </motion.div>

        {/* Typing indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8 }}
          className="self-start bg-white/5 text-white/50 px-4 py-2 rounded-full text-xs flex gap-1 items-center"
        >
          <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 bg-white/50 rounded-full" />
          <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 bg-white/50 rounded-full" />
          <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 bg-white/50 rounded-full" />
        </motion.div>
      </div>

      {/* Input Bar */}
      <div className="p-4 border-t border-white/10 bg-white/5 flex gap-2">
        <div className="flex-1 bg-white/10 rounded-full h-10 flex items-center px-4">
          <span className="text-white/30 text-sm">Message...</span>
        </div>
      </div>
    </div>
  );
}

function CommunitiesDemo() {
  return (
    <div className="relative w-full max-w-xl aspect-[4/3] rounded-3xl overflow-hidden bg-[#03030A] border border-white/10 shadow-2xl flex flex-col font-sans">
      {/* Header */}
      <div className="relative h-32 bg-gradient-to-r from-blue-900 to-[#0000FF] p-6 flex flex-col justify-end">
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 border border-white/10">
          <MapPin size={12} className="text-white" />
          <span className="text-white text-xs">Within 5km</span>
        </div>
        <h2 className="text-white text-2xl font-bold">Urban Photographers</h2>
        <p className="text-white/80 text-sm">Restricted: verified@domain.com only</p>
      </div>
      
      {/* Feed */}
      <div className="flex-1 p-6 flex flex-col gap-4 overflow-hidden relative">
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#03030A] to-transparent z-10" />
        
        {/* Post */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-4"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-white/20 overflow-hidden">
              <img src="https://i.pravatar.cc/150?u=5" alt="Sarah" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-white text-sm font-medium">Sarah Jenkins</p>
              <p className="text-white/40 text-xs">1 hr ago</p>
            </div>
          </div>
          <p className="text-white/90 text-sm mb-4">Hey everyone! Where should we host the next photo walk?</p>
          
          {/* Poll */}
          <div className="flex flex-col gap-2">
            {[
              { option: "Central Park", percent: 65, color: "bg-[#0000FF]" },
              { option: "Financial District", percent: 25, color: "bg-white/20" },
              { option: "Brooklyn Bridge", percent: 10, color: "bg-white/20" }
            ].map((poll, i) => (
              <div key={i} className="relative h-10 bg-white/5 rounded-lg overflow-hidden flex items-center px-4 border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${poll.percent}%` }}
                  transition={{ delay: 1 + (i * 0.2), duration: 1, ease: "easeOut" }}
                  className={`absolute left-0 top-0 bottom-0 ${poll.color} opacity-50`} 
                />
                <div className="relative z-10 flex justify-between w-full">
                  <span className="text-white text-sm">{poll.option}</span>
                  <span className="text-white/70 text-sm">{poll.percent}%</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function EventsDemo() {
  const [phase, setPhase] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setPhase(1), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-xl aspect-[4/3] rounded-3xl overflow-hidden bg-[#03030A] border border-white/10 shadow-2xl flex items-center justify-center p-6 font-sans">
      <AnimatePresence mode="wait">
        {phase === 0 ? (
          <motion.div
            key="create"
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center relative w-full h-full"
          >
            {/* Radar Pulse */}
            <motion.div 
              animate={{ scale: [1, 3], opacity: [0.8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute w-32 h-32 rounded-full border border-[#0000FF] bg-[#0000FF]/10"
            />
            <motion.div 
              animate={{ scale: [1, 2], opacity: [0.8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              className="absolute w-32 h-32 rounded-full border border-[#0000FF] bg-[#0000FF]/10"
            />
            
            <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl text-center shadow-2xl max-w-sm w-full">
              <div className="w-12 h-12 rounded-full bg-[#0000FF] mx-auto flex items-center justify-center mb-4">
                <Calendar className="text-white" size={20} />
              </div>
              <h3 className="text-white text-lg font-medium">Event Created!</h3>
              <p className="text-white/60 text-sm mt-2">Notification blasted to 450 users within a 30km radius.</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="explore"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full h-full flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white text-xl font-medium">Explore Local</h3>
              <div className="bg-white/10 px-3 py-1 rounded-full flex items-center gap-2 border border-white/10">
                <MapPin size={12} className="text-[#0000FF]" />
                <span className="text-white text-xs">Within 30km</span>
              </div>
            </div>
            
            <div className="flex gap-4 overflow-hidden">
              {[
                { title: "Jazz Night in the Park", date: "Tonight, 8 PM", type: "Concert", img: "bg-gradient-to-br from-blue-900 to-indigo-900" },
                { title: "Indie Drama Showcase", date: "Tomorrow, 7 PM", type: "Theater", img: "bg-gradient-to-br from-purple-900 to-pink-900" }
              ].map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, type: "spring", stiffness: 200, damping: 20 }}
                  className="flex-1 rounded-2xl border border-white/10 overflow-hidden bg-white/5"
                >
                  <div className={`h-24 ${event.img} w-full relative`}>
                    <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md text-[10px] text-white uppercase tracking-wider">
                      {event.type}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-white font-medium">{event.title}</p>
                    <p className="text-[#0000FF] text-sm mt-1 font-semibold">{event.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function RoutesDemo() {
  return (
    <div className="relative w-full max-w-xl aspect-[4/3] rounded-3xl overflow-hidden bg-[#0a0a0f] border border-white/10 shadow-2xl flex items-center justify-center font-sans">
      {/* Abstract Map Background */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300">
        <path d="M 0 50 L 100 100 L 200 80 L 400 150 M 0 200 L 150 250 L 300 200 L 400 280" stroke="white" strokeWidth="1" fill="none" />
        <path d="M 100 0 L 100 300 M 300 0 L 300 300" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />
      </svg>
      
      {/* Animated Route Path */}
      <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 400 300">
        <motion.path 
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
          d="M 100 250 C 150 250, 150 100, 250 100 C 300 100, 320 150, 350 150" 
          stroke="#0000FF" 
          strokeWidth="4" 
          strokeLinecap="round"
          fill="none" 
        />
        {/* Origin / Dest Dots */}
        <motion.circle 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          cx="100" cy="250" r="4" fill="white" 
        />
        <motion.circle 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 3 }}
          cx="350" cy="150" r="6" fill="#0000FF" 
        />
      </svg>

      {/* Origin / Dest overlay */}
      <div className="absolute top-4 left-4 right-4 z-20 flex gap-2">
        <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 flex flex-col gap-2 shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white" />
            <span className="text-white/70 text-xs">Pickup: Current Location</span>
          </div>
          <div className="w-[2px] h-3 bg-white/20 ml-1" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#0000FF]" />
            <span className="text-white text-xs font-medium">Dropoff: International Airport</span>
          </div>
        </div>
      </div>

      {/* Contextual Metric Cards */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between gap-2">
        {[
          { text: "Traffic: Clear", sub: "Next 50% route", delay: 1, color: "text-green-400" },
          { text: "Event: Avoid 5th Ave", sub: "Rerouted", delay: 1.5, color: "text-orange-400" },
          { text: "Weather: Clear", sub: "ETA: 24m", delay: 2, color: "text-blue-400" }
        ].map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: metric.delay, type: "spring" }}
            className="flex-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-3 text-center shadow-lg flex flex-col justify-center"
          >
            <p className={`text-[10px] sm:text-xs font-bold ${metric.color} whitespace-nowrap`}>{metric.text}</p>
            <p className="text-[9px] sm:text-[10px] text-white/50 mt-1 whitespace-nowrap">{metric.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
