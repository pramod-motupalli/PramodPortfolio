// src/hooks/useIntersectionObserver.ts (or lib/utils.ts)
import { useEffect, useState, useRef, RefObject } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0.1, // How much of the element needs to be visible to trigger
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = true, // Stop observing after it becomes visible once
  }: IntersectionObserverOptions = {} // Default empty object for options
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // If already intersecting and we want to freeze, or no element, do nothing further.
    if ((freezeOnceVisible && isIntersecting) || !elementRef.current) {
        if (observerRef.current && freezeOnceVisible && isIntersecting) {
            observerRef.current.disconnect(); // Disconnect if already frozen and intersecting
        }
        return;
    }

    const currentElement = elementRef.current; // Capture current element

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && freezeOnceVisible && observerRef.current) {
          observerRef.current.unobserve(entry.target); // Unobserve the target
          observerRef.current.disconnect(); // Fully disconnect observer if frozen
        }
      },
      { threshold, root, rootMargin }
    );

    observerRef.current.observe(currentElement);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect(); // Clean up observer on unmount
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible, isIntersecting]); // isIntersecting helps re-evaluate for freezeOnceVisible logic

  return isIntersecting;
}