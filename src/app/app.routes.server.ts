import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'books/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: '',
    renderMode: RenderMode.Client, // 👈 skips SSR for this route
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
