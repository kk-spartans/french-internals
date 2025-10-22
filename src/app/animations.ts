export function getTitleAnimation(delay = 0, duration = 0.6, once = true) {
  return {
    initial: { opacity: 0, y: 20, filter: "blur(4px)" },
    whileInView: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, delay },
    },
    viewport: { once },
  };
}

export function getSlideUpAnimation(delay = 0, duration = 0.6) {
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration, delay },
    },
    viewport: { once: true },
  };
}

export function getScaleInAnimation(delay = 0, duration = 0.4) {
  return {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: { duration, delay },
    },
    viewport: { once: true },
  };
}

export function getStaggerAnimation(delay = 0, staggerDelay = 0.1) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        staggerChildren: staggerDelay,
      },
    },
    viewport: { once: true },
  };
}
