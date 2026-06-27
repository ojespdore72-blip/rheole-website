import { create } from 'zustand';

interface AmbientState {
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
  trafficDensity: 'low' | 'medium' | 'high';
  weather: 'clear' | 'cloudy' | 'rain' | 'overcast';
  activeCommunities: number;
  liveEvents: number;
  
  // Real-time updates simulation
  updateSimulation: () => void;
}

export const useAmbientStore = create<AmbientState>((set) => ({
  timeOfDay: 'morning',
  trafficDensity: 'medium',
  weather: 'clear',
  activeCommunities: 142,
  liveEvents: 45,
  
  updateSimulation: () => set((state) => {
    // Simulate natural fluctuations in the city
    const newCommunities = state.activeCommunities + (Math.floor(Math.random() * 5) - 2);
    const newEvents = state.liveEvents + (Math.floor(Math.random() * 3) - 1);
    
    return {
      activeCommunities: Math.max(100, Math.min(300, newCommunities)),
      liveEvents: Math.max(20, Math.min(100, newEvents)),
    };
  }),
}));
