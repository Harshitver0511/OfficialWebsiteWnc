'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/hooks/useGSAPAnimation';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { FEATURES } from '@/lib/data/features';

export default function BentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  // Strict Senior-Specified GSAP Entry Animation Engine - UNTOUCHED
  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.fromTo('.bento-item', 
      { opacity: 0, y: 40, scale: 0.97 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        stagger: 0.06, 
        duration: 0.75, 
        ease: 'power3.out', 
        scrollTrigger: { 
          trigger: '.bento-grid-container', 
          start: 'top 85%' 
        } 
      }
    );
  }, { scope: sectionRef });

  // Absolute Grid Matrix Coordinate Assignment Mapping - UNTOUCHED
  const getGridPlacement = (id: string) => {
    switch (id) {
      case 'tech-talks':
        return 'col-span-1 row-span-1 md:col-start-1 md:row-start-1';
      case 'hackathons':
        return 'col-span-1 row-span-2 sm:col-span-2 md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-2';
      case 'open-source':
        return 'col-span-1 row-span-1 md:col-start-4 md:row-start-1';
      case 'workshops':
        return 'col-span-1 row-span-2 md:col-start-1 md:row-start-2 md:row-span-2';
      case 'peer-learning':
        return 'col-span-1 row-span-2 md:col-start-2 md:row-start-3 md:row-span-2';
      case 'community-events':
        return 'col-span-1 row-span-1 md:col-start-3 md:row-start-3';
      case 'project-mentoring':
        return 'col-span-1 row-span-2 md:col-start-4 md:row-start-2 md:row-span-2';
      case 'code-challenges':
        return 'col-span-1 row-span-1 md:col-start-1 md:row-start-4';
      case 'industry-connect':
        return 'col-span-1 row-span-1 sm:col-span-2 md:col-start-3 md:col-span-2 md:row-start-4';
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const getImageSrc = (id: string): string => {
    const imageMap: Record<string, string> = {
      'tech-talks': '/images/bento/tech-talks.webp',
      'hackathons': '/images/bento/hackathons.jpg',
      'open-source': '/images/bento/open-source.webp',
      'workshops': '/images/bento/workshops.webp',
      'peer-learning': '/images/bento/peer-learning.jpg',
      'community-events': '/images/bento/community-events.jpg',
      'project-mentoring': '/images/bento/project-mentoring.jpg',
      'code-challenges': '/images/bento/code-challenges.webp',
      'industry-connect': '/images/bento/industry-connect.webp',
    };
    return imageMap[id] || '';
  };

  return (
    <section ref={sectionRef} className="section-padding bg-[var(--bg-primary)] overflow-hidden">
      <div className="container-wide">
        <SectionHeader title="What We Offer" subtitle="A complete ecosystem for tech enthusiasts" accent="sage" />

        <div className="bento-grid-container mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[195px]">
          {FEATURES.map((feature) => {
            const placementClass = getGridPlacement(feature.id);
            const imageSrc = getImageSrc(feature.id);
            
            const isSmallBlock = ['tech-talks', 'open-source', 'community-events', 'code-challenges'].includes(feature.id);
            const isTallBlock = ['workshops', 'project-mentoring', 'peer-learning'].includes(feature.id);
            const isWideBlock = feature.id === 'industry-connect';
            const isHackathon = feature.id === 'hackathons';

            return (
              <div
                key={feature.id}
                className={`bento-item group relative overflow-hidden rounded-[var(--radius-xl)] flex flex-col justify-between transition-all duration-500 border cursor-default ${placementClass}
                  bg-gradient-to-b from-[#121215] to-[#0a0a0c]
                  border-[var(--border-subtle)] hover:border-[var(--border-hover)]
                  shadow-[0_4px_30px_rgba(0,0,0,0.4)]`}
                style={{
                  boxShadow: `hover: 0 0 45px -12px ${feature.color}25`
                }}
              >
                {/* Ambient Dynamic Background Light Pools */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <div 
                    className="absolute -top-16 -left-16 w-44 h-44 rounded-full blur-[75px] opacity-20 group-hover:opacity-45 transition-opacity duration-700" 
                    style={{ backgroundColor: feature.color }}
                  />
                  <div 
                    className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-[90px] opacity-10 group-hover:opacity-25 transition-opacity duration-700" 
                    style={{ backgroundColor: feature.color }}
                  />
                </div>

                {/* Micro-mesh Grid Overlay Pattern */}
                <div className="noise-overlay absolute inset-0 mix-blend-overlay pointer-events-none opacity-[0.03]" 
                     style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`}}/>

                {/* Typology A: 1x1 Small Blocks Background Texture integration */}
                {isSmallBlock && imageSrc && (
                  <div 
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-15 mix-blend-luminosity group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                    style={{ 
                      backgroundImage: `linear-gradient(to bottom, rgba(10,10,12,0.4) 0%, #0a0a0c 95%), url(${imageSrc})` 
                    }}
                  />
                )}

                {/* Content Layout Distribution Layer */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-7">
                  
                  {/* --- CASE 1: FIXED INDUSTRY CONNECT (WIDE BLOCK 2x1) --- */}
                  {isWideBlock ? (
                    <div className="w-full h-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      {/* Left: Text Content */}
                      <div className="md:col-span-7 flex flex-col justify-center h-full">
                        <div className="flex items-center gap-3 mb-2.5">
                          <span className="text-2xl flex-shrink-0" style={{ color: feature.color }}>
                            {feature.icon}
                          </span>
                          <h3 className="text-sm md:text-base font-bold tracking-wider uppercase text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-xs md:text-sm font-normal leading-relaxed text-[var(--text-secondary)]">
                          {feature.description}
                        </p>
                      </div>

                      {/* Right: Media & Counter Module side-by-side splits */}
                      <div className="md:col-span-5 flex items-center justify-between gap-4 h-full border-t md:border-t-0 md:border-l border-[var(--border-subtle)] pt-3 md:pt-0 md:pl-6">
                        {imageSrc && (
                          <div className="w-[120px] h-[75px] rounded-[10px] overflow-hidden border border-white/5 bg-neutral-900 hidden sm:block flex-shrink-0">
                            <img src={imageSrc} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          </div>
                        )}
                        {feature.stat && (
                          <div className="text-right md:text-left flex-shrink-0">
                            <span className="text-2xl md:text-3xl font-black tracking-tighter block leading-none" style={{ color: feature.color, fontFamily: 'var(--font-display)' }}>
                              <AnimatedCounter target={parseInt(feature.stat)} suffix={feature.stat.replace(/\d+/, '')} />
                            </span>
                            <p className="mt-1 uppercase tracking-widest text-[0.62rem] font-bold text-[var(--text-muted)]" style={{ fontFamily: 'var(--font-mono)' }}>
                              {feature.statLabel}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* --- CASE 2: GENERAL BLOCK ARCHITECTURE (Small, Tall, and Hackathons) --- */
                    <>
                      <div className={isHackathon ? 'md:max-w-[55%]' : 'w-full'}>
                        <div className="flex items-center gap-3 mb-2.5">
                          <span className="text-2xl flex-shrink-0 transition-transform duration-500 group-hover:scale-110" style={{ color: feature.color }}>
                            {feature.icon}
                          </span>
                          <h3 className="text-sm md:text-base font-bold tracking-wider uppercase text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
                            {feature.title}
                          </h3>
                        </div>
                        
                        <p className={`leading-relaxed text-[var(--text-secondary)] ${isSmallBlock ? 'text-xs line-clamp-3' : 'text-xs md:text-sm font-normal'}`}>
                          {feature.description}
                        </p>

                        {/* Hackathon Specific Right Side Floating Render Frame */}
                        {isHackathon && imageSrc && (
                          <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 w-[40%] h-[82%] rounded-[16px] overflow-hidden border border-white/5 shadow-2xl bg-neutral-900">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                            <img src={imageSrc} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                          </div>
                        )}
                      </div>

                      {/* Bottom Layout Layer: Handles Tall Images and Numeric Counters cleanly */}
                      <div className="w-full flex flex-col justify-end mt-auto pt-3">
                        {/* FIXED PEER LEARNING & WORKSHOPS (TALL BLOCKS 1x2) - Render Image Under Text */}
                        {isTallBlock && imageSrc && (
                          <div className="w-full h-[110px] md:h-[135px] mb-3 rounded-[12px] overflow-hidden border border-white/5 relative bg-neutral-900 flex-shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#121215]/40 to-transparent z-10" />
                            <img src={imageSrc} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          </div>
                        )}

                        {feature.stat && (
                          <div className="w-full pt-2 border-t border-[var(--border-subtle)] flex items-end justify-between">
                            <div>
                              <span className="text-2xl md:text-3xl font-black tracking-tighter block leading-none" style={{ color: feature.color, fontFamily: 'var(--font-display)' }}>
                                <AnimatedCounter target={parseInt(feature.stat)} suffix={feature.stat.replace(/\d+/, '')} />
                              </span>
                              <p className="mt-1 uppercase tracking-widest text-[0.62rem] font-bold text-[var(--text-muted)]" style={{ fontFamily: 'var(--font-mono)' }}>
                                {feature.statLabel}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}