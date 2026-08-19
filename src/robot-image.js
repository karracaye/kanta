import gsap from 'gsap';

export function initRobotImage(image) {
  if (!image) return null;

  const stage = image.parentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const target = { x: 0, y: 0 };
  const pointer = { x: 0, y: 0 };
  const idle = { y: 0 };
  const gesture = { z: 0 };

  image.style.willChange = 'transform';

  const onPointerMove = (event) => {
    if (!stage) return;
    const bounds = stage.getBoundingClientRect();
    target.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    target.y = -((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
  };
  const onPointerLeave = () => { target.x = 0; target.y = 0; };

  stage?.addEventListener('pointermove', onPointerMove);
  stage?.addEventListener('pointerleave', onPointerLeave);

  if (!reducedMotion) {
    gsap.to(idle, { y: -13, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  }

  const ticker = () => {
    pointer.x += (target.x - pointer.x) * 0.06;
    pointer.y += (target.y - pointer.y) * 0.06;
    image.style.transform = `translate3d(${pointer.x * 5}px, ${idle.y + pointer.y * 3}px, 0) rotate(${pointer.x * 2.2 + gesture.z}deg)`;
  };
  gsap.ticker.add(ticker);

  return {
    playGesture() {
      gsap.timeline().to(gesture, { z: -3.5, duration: 0.22, ease: 'power2.out' }).to(gesture, { z: 3.5, duration: 0.22, repeat: 3, yoyo: true, ease: 'sine.inOut' }).to(gesture, { z: 0, duration: 0.28, ease: 'power2.inOut' });
    },
    destroy() {
      gsap.ticker.remove(ticker);
      stage?.removeEventListener('pointermove', onPointerMove);
      stage?.removeEventListener('pointerleave', onPointerLeave);
    }
  };
}
