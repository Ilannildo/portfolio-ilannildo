import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export function ExperienceItem({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItemProps) {
  return (
    <Card className="relative border-none shadow-lg shadow-blue-50 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 ease-in-out overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
      <CardHeader className="px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
          <CardTitle className="text-xl text-primary">{title}</CardTitle>
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-slate-100 text-primary text-center">
            {period}
          </span>
        </div>
        <div className="text-lg font-medium text-slate-600">{company}</div>
      </CardHeader>
      <CardContent className="space-y-4 px-6 pb-6">
        <p className="text-slate-600">{description}</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-slate-100 rounded-xl text-slate-800 border-none"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
