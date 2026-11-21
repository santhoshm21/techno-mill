import { useEffect } from 'react';

export function useDocumentTitle(title, enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    const prevTitle = document.title;
    if (title) {
      document.title = `${title} | TECHNO MECH TOOLINGS (TMT)`;
    } else {
      document.title = 'TECHNO MECH TOOLINGS (TMT) | Precision Solid Carbide Cutting Tools';
    }

    return () => {
      document.title = prevTitle;
    };
  }, [title, enabled]);
}
