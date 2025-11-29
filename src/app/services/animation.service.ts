import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  
  fadeInUp(element: Element | string, delay = 0): void {
    gsap.from(element, {
      y: 0,
      opacity: 1,
    });
  }

  fadeIn(element: Element | string, delay = 0): void {
    gsap.from(element, {
      opacity: 1,
      duration: 0.6,
      delay,
      ease: 'power2.out'
    });
  }

  scaleIn(element: Element | string, delay = 0): void {
    gsap.from(element, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      delay,
      ease: 'back.out(1.7)'
    });
  }

  slideInFromLeft(element: Element | string, delay = 0): void {
    gsap.from(element, {
      x: -100,
      opacity: 0,
      duration: 0.8,
      delay,
      ease: 'power3.out'
    });
  }

  slideInFromRight(element: Element | string, delay = 0): void {
    gsap.from(element, {
      x: 100,
      opacity: 0,
      duration: 0.8,
      delay,
      ease: 'power3.out'
    });
  }

  staggerFadeInUp(elements: string, staggerDelay = 0.1): void {
    gsap.from(elements, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: staggerDelay,
      ease: 'power3.out'
    });
  }

  scrollTriggerAnimation(element: Element | string, animationProps: gsap.TweenVars): void {
    gsap.from(element, {
      ...animationProps,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%', // TRIGGER EARLIER (was 80%)
        end: 'bottom 10%', // STAY VISIBLE LONGER (was 20%)
        toggleActions: 'play none none none', // DON'T REVERSE ON SCROLL UP
        once: true, // ANIMATE ONLY ONCE
        markers: false // Set to true for debugging
      }
    });
  }

  // NEW METHOD: Scroll animation that stays visible
  scrollFadeInUp(element: Element | string, delay = 0): void {
    gsap.from(element, {
      y: 50,
      opacity: 0,
      duration: 1, // LONGER DURATION
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%', // TRIGGER EARLIER
        end: 'bottom 10%', // STAY VISIBLE LONGER
        toggleActions: 'play none none none', // DON'T REVERSE
        once: true // ONLY ONCE
      }
    });
  }

  // NEW METHOD: Stagger with scroll trigger
  staggerScrollFadeInUp(elements: string, staggerDelay = 0.15): void {
    gsap.from(elements, {
      y: 50,
      opacity: 0,
      duration: 1, // LONGER DURATION
      stagger: staggerDelay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: elements,
        start: 'top 85%', // TRIGGER EARLIER
        end: 'bottom 10%', // STAY VISIBLE LONGER
        toggleActions: 'play none none none', // DON'T REVERSE
        once: true // ONLY ONCE
      }
    });
  }

  glitchEffect(element: Element | string): void {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    
    tl.to(element, {
      x: -2,
      duration: 0.1,
      ease: 'power1.inOut'
    })
    .to(element, {
      x: 2,
      duration: 0.1,
      ease: 'power1.inOut'
    })
    .to(element, {
      x: -2,
      duration: 0.1,
      ease: 'power1.inOut'
    })
    .to(element, {
      x: 0,
      duration: 0.1,
      ease: 'power1.inOut'
    });
  }

  hoverGlow(element: Element | string): void {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    
    if (el) {
      el.addEventListener('mouseenter', () => {
        gsap.to(el, {
          boxShadow: '0 0 30px rgba(121, 80, 242, 0.8), 0 0 60px rgba(121, 80, 242, 0.6)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          boxShadow: '0 0 20px rgba(121, 80, 242, 0.4)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    }
  }

  typewriterEffect(element: Element | string, text: string, speed = 0.05): void {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    
    if (el) {
      let index = 0;
      el.textContent = '';
      
      const type = (): void => {
        if (index < text.length) {
          el.textContent += text.charAt(index);
          index++;
          setTimeout(type, speed * 1000);
        }
      };
      
      type();
    }
  }

  // Refresh ScrollTrigger (useful after dynamic content loads)
  refreshScrollTrigger(): void {
    ScrollTrigger.refresh();
  }
}