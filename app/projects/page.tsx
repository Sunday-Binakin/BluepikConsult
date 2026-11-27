import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ArticleVisual, GhanaDriveVisual, SimulatorVisual } from "@/components/projects/Visuals";
import { Grid, Section } from "@/components/ui/Layout";
import { getProject } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Client work, insights on driver training and testing in Ghana, and an interactive driver simulator.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        crumb="Projects"
        title="Projects and insights"
        lead="Work we have delivered, what we have learned about driver training and testing in Ghana, and tools you can try for yourself."
      />
      <Section containerClassName="flex flex-col gap-8">
        <ProjectCard project={getProject("ghanadrive")} visual={<GhanaDriveVisual />} featured />
        <Grid cols={2}>
          <ProjectCard project={getProject("driver-training-and-testing")} visual={<ArticleVisual />} />
          <ProjectCard project={getProject("driver-simulator")} visual={<SimulatorVisual />} />
        </Grid>
      </Section>
    </>
  );
}
