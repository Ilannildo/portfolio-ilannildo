import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";

import { ExperienceItem } from "@/components/experience-item";
import { SkillBadge } from "@/components/skill-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="font-bold text-xl text-primary">Ilannildo.Dev</div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#skills"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Competências
            </Link>
            <Link
              href="#projects"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projetos
            </Link>
            <Link
              href="#experience"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Experiência
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary hover:text-accent hover:bg-blue-50"
              asChild
            >
              <Link
                href="https://github.com/ilannildo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary hover:text-accent hover:bg-blue-50"
              asChild
            >
              <Link
                href="https://linkedin.com/in/ilannildo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary hover:text-accent hover:bg-blue-50"
              asChild
            >
              <Link href="mailto:ilannildoviana12@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            <div className="flex-1 space-y-6 animate-fade-in">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-secondary font-medium text-sm mb-2">
                Desenvolvedor Full Stack
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Olá, Eu sou Ilannildo
                <span className="text-primary">.</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-md mx-auto md:mx-0">
                Eu construo experiências digitais excepcionais com tecnologias
                modernas. Focado em criar aplicativos escaláveis ​e fáceis de
                usar.
              </p>
              <div className="flex justify-center md:justify-start items-center gap-2 text-slate-600">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Cametá-PA, Brasil</span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <Button
                  className="bg-primary hover:bg-secondary text-white rounded-full px-6"
                  asChild
                >
                  <Link href="#contact">
                    Entre em contato
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center animate-slide-up">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary shadow-lg shadow-blue-200 select-none">
                <Image
                  src="/ilannildo.jpg"
                  alt="Ilannildo"
                  width={288}
                  height={288}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-12 text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-secondary font-medium text-sm mb-2">
              Sobre
            </div>
            <h2 className="text-3xl font-bold lg:w-3/4">Quem eu sou</h2>
            <div className="w-20 h-1 bg-primary mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6 text-justify">
              <p className="text-lg text-slate-700">
                Sou um Desenvolvedor Full Stack apaixonado com experiência em
                construir aplicativos web modernos. Com uma base sólida em
                tecnologias frontend e backend, eu crio experiências perfeitas e
                fáceis de usar que resolvem problemas do mundo real.
              </p>
              <p className="text-lg text-slate-700">
                Minha jornada no desenvolvimento de software começou há 5 anos
                e, desde então, trabalhei em vários projetos que vão desde
                plataformas de e-commerce até soluções empresariais complexas.
                Estou constantemente aprendendo e me adaptando a novas
                tecnologias para permanecer na vanguarda da indústria.
              </p>
            </div>
            <div className="space-y-6 text-justify">
              <p className="text-lg text-slate-700">
                Acredito em escrever código limpo e sustentável e seguir as
                melhores práticas. Minha abordagem ao desenvolvimento é centrada
                em entender as necessidades do negócio e traduzi-las em soluções
                técnicas que entregam valor.
              </p>
              <p className="text-lg text-slate-700">
                Quando não estou codificando, você pode me encontrar
                contribuindo para projetos de código aberto, orientando
                desenvolvedores juniores ou explorando novas tecnologias por
                meio de projetos paralelos.
              </p>
              <div className="flex justify-center md:justify-start pt-4">
                <Button
                  className="bg-primary hover:bg-secondary text-white rounded-full px-6"
                  asChild
                >
                  <Link href="#skills">
                    Minhas habilidades
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-secondary font-medium text-sm mb-2">
              Minhas habilidades
            </div>
            <h2 className="text-3xl font-bold text-center">
              Tecnologias com as quais trabalho
            </h2>
            <div className="w-20 h-1 bg-primary mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-lg shadow-blue-100 hover:shadow-blue-200 transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="React" />
                  <SkillBadge name="Next.js" />
                  <SkillBadge name="TypeScript" />
                  <SkillBadge name="Tailwind CSS" />
                  <SkillBadge name="Zustand" />
                  <SkillBadge name="HTML/CSS" />
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg shadow-blue-100 hover:shadow-blue-200 transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Node.js" />
                  <SkillBadge name="Express" />
                  <SkillBadge name="NestJS" />
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg shadow-blue-100 hover:shadow-blue-200 transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-6M12 17v-3M15 17v-5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  Banco de dados
                </h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="MongoDB" />
                  <SkillBadge name="PostgreSQL" />
                  <SkillBadge name="MySQL" />
                  <SkillBadge name="Redis" />
                  <SkillBadge name="Prisma" />
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg shadow-blue-100 hover:shadow-blue-200 transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  DevOps & Cloud
                </h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge name="Docker" />
                  <SkillBadge name="AWS" />
                  <SkillBadge name="Git" />
                  <SkillBadge name="CI/CD" />
                  <SkillBadge name="Jest" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-gradient-to-b from-primary/5 to-white"
      >
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-secondary font-medium text-sm mb-2">
              Minha jornada
            </div>
            <h2 className="text-3xl font-bold text-center">
              Experiência de trabalho
            </h2>
            <div className="w-20 h-1 bg-primary mt-4 rounded-full"></div>
          </div>
          <div className="space-y-8">
            <ExperienceItem
              title="Tech Manager"
              company="Solarapp"
              period="2024 - Atual"
              description="Desenvolvedor líder para vários projetos de clientes, arquitetando soluções e orientando desenvolvedores juniores. Implementou pipelines de CI/CD e melhorou fluxos de trabalho de desenvolvimento."
              technologies={[
                "Next.js",
                "TypeScript",
                "NestJS",
                "Digital Ocean",
              ]}
            />
            <ExperienceItem
              title="Desenvolvedor Web Pleno"
              company="CuboChat - Freelance"
              period="jan/2024 - mar/2024"
              description="Criei interfaces de usuário responsivas e interativas para vários sites de clientes e aplicativos da web. Trabalhei em estreita colaboração com designers para implementar designs pixel-perfect."
              technologies={["Next.js", "TypeScript"]}
            />
            <ExperienceItem
              title="Desenvolvedor Full Stack Pleno"
              company="Solarapp"
              period="2023 - 2024"
              description="Desenvolveu e manteve aplicativos web para clientes corporativos. Colaborou com equipes de design e produto para entregar soluções de software de alta qualidade."
              technologies={[
                "Next.js",
                "TypeScript",
                "NestJS",
                "Digital Ocean",
              ]}
            />
            <ExperienceItem
              title="Desenvolvedor Web"
              company="DrClick - Freelance"
              period="mar/2023 - jul/2023"
              description="Criei interfaces de usuário responsivas e interativas para vários sites de clientes e aplicativos da web. Trabalhei em estreita colaboração com designers para implementar designs pixel-perfect."
              technologies={["ReactJs", "TypeScript"]}
            />
            <ExperienceItem
              title="Desenvolvedor Full Stack "
              company="Emperium"
              period="2021 - 2023"
              description="Desenvolveu e manteve aplicativos web para clientes corporativos. Colaborou com equipes de design e produto para entregar soluções de software de alta qualidade."
              technologies={["React", "Node.js", "PHP"]}
            />
            <ExperienceItem
              title="Desenvolvedor Mobile"
              company="LASEDi - Estágio"
              period="2020 - 2023"
              description="Desenvolveu o aplicativo Monitora Tocantins. Colaborou com a escrita de articos acadêmicos e estudos científicos usando IoT"
              technologies={["React Native", "NodeJs"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-secondary font-medium text-sm mb-2">
              Entre em contato
            </div>
            <h2 className="text-3xl font-bold text-center">
              Vamos trabalhar juntos
            </h2>
            <div className="w-20 h-1 bg-primary mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white shadow-xl shadow-blue-200">
              <h3 className="text-2xl font-bold mb-6">
                Informações para contato
              </h3>
              <div className="space-y-6">
                <p className="text-blue-100">
                  Estou sempre disponível a discutir novos projetos, ideias
                  criativas ou oportunidades de fazer parte da sua visão.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                      <Mail className="h-5 w-5" />
                    </div>
                    <a
                      href="mailto:ilannildoviana12@gmail.com"
                      className="hover:text-blue-200 transition-colors"
                    >
                      ilannildoviana12@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <a
                      href="https://linkedin.com/in/ilannildo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-200 transition-colors"
                    >
                      linkedin.com/in/ilannildo
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                      <Github className="h-5 w-5" />
                    </div>
                    <a
                      href="https://github.com/ilannildo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-200 transition-colors"
                    >
                      github.com/ilannildo
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <span>Cametá/PA, Brasil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="font-bold text-2xl mb-2">Ilannildo.Dev</div>
              <p className="text-blue-100">
                Desenvolvedor de Sotware | Bacharel em Sistemas de Informação
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-blue-200 hover:bg-blue-800/50 rounded-full"
                asChild
              >
                <Link
                  href="https://github.com/ilannildo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-blue-200 hover:bg-blue-800/50 rounded-full"
                asChild
              >
                <Link
                  href="https://linkedin.com/in/ilannildo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-blue-200 hover:bg-blue-800/50 rounded-full"
                asChild
              >
                <Link href="mailto:ilannildoviana12@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>
              © {new Date().getFullYear()} Ilannildo. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
