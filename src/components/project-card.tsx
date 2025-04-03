import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full border-none shadow-lg shadow-blue-50 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-primary">{title}</CardTitle>
        <CardDescription className="text-slate-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pb-2">
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-slate-50 text-slate-800 border-slate-100 rounded-xl"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-2">
        <Button
          variant="outline"
          size="sm"
          className="rounded-full border-blue-200 text-blue-700 hover:bg-blue-50"
          asChild
        >
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Code
          </Link>
        </Button>
        <Button
          size="sm"
          className="rounded-full bg-blue-600 hover:bg-blue-700"
          asChild
        >
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
