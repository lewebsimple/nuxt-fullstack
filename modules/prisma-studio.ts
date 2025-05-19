import { defineNuxtModule } from "nuxt/kit";
import { x } from "tinyexec";
import { consola } from "consola";
import { addCustomTab } from "@nuxt/devtools-kit";

export default defineNuxtModule({
  async setup(options, nuxt) {
    const npmLifecycleEvent = process.env?.npm_lifecycle_event;
    if (npmLifecycleEvent !== "dev") return;
    await startPrismaStudio(nuxt.options.rootDir);
    addCustomTab({
      name: "nuxt-prisma",
      title: "Prisma Studio",
      icon: "simple-icons:prisma",
      category: "server",
      view: {
        type: "iframe",
        src: "http://localhost:5555/",
        persistent: true,
      },
    });
  },
});

let isPrismaStudioRunning = false;
export async function startPrismaStudio(cwd: string) {
  try {
    if (isPrismaStudioRunning) return true;
    const proc = x(
      "npx",
      ["prisma", "studio", "--browser", "none"],
      { nodeOptions: { cwd }, throwOnError: true },
    );
    proc.process?.unref();
    isPrismaStudioRunning = true;
    return true;
  }
  catch {
    consola.error("Failed to start Prisma Studio");
  }
}
