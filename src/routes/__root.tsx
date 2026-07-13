import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function NotFoundComponent() {
  return (
    <SiteChrome>
      <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-primary">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </SiteChrome>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <SiteChrome>
      <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            This page didn't load
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Something went wrong on our end. You can try refreshing or head back home.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => {
                router.invalidate();
                reset();
              }}
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              Try again
            </button>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Go home
            </a>
          </div>
        </div>
      </div>
    </SiteChrome>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Neural Soft — Custom Software, AI & Enterprise Solutions" },
      {
        name: "description",
        content:
          "Neural Soft engineers scalable web, mobile, cloud, AI, and enterprise software for growing businesses worldwide. Based in Dhaka, delivering globally.",
      },
      { name: "author", content: "Neural Soft" },
      { property: "og:site_name", content: "Neural Soft" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Neural Soft — Custom Software, AI & Enterprise Solutions" },
      {
        property: "og:description",
        content:
          "Neural Soft engineers scalable web, mobile, cloud, AI, and enterprise software for growing businesses worldwide. Based in Dhaka, delivering globally.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Neural Soft — Custom Software, AI & Enterprise Solutions" },
      {
        name: "twitter:description",
        content: "Neural Soft engineers scalable web, mobile, cloud, AI, and enterprise software for growing businesses worldwide. Based in Dhaka, delivering globally.",
      },
      { name: "description", content: "Neural Soft engineers scalable web, mobile, cloud, AI, and enterprise software for growing businesses worldwide. Based in Dhaka, delivering globally." },
      { property: "og:description", content: "Neural Soft engineers scalable web, mobile, cloud, AI, and enterprise software for growing businesses worldwide. Based in Dhaka, delivering globally." },
      { name: "twitter:description", content: "Neural Soft engineers scalable web, mobile, cloud, AI, and enterprise software for growing businesses worldwide. Based in Dhaka, delivering globally." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/176d4832-b244-4d2b-a5b2-7f51134a0c4f/id-preview-b28f18c7--84798df1-f40a-4f08-a6ac-f75fdb22d0d7.lovable.app-1783320467573.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/176d4832-b244-4d2b-a5b2-7f51134a0c4f/id-preview-b28f18c7--84798df1-f40a-4f08-a6ac-f75fdb22d0d7.lovable.app-1783320467573.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteChrome>
        <Outlet />
      </SiteChrome>
    </QueryClientProvider>
  );
}
