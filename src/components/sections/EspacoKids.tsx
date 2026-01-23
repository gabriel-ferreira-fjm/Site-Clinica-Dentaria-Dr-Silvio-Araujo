import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  Baby,
  CheckCircle,
  Palette,
  Users,
  Gamepad2,
  Calendar,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VideoPlayer from "@/components/VideoPlayer";

const EspacoKids = () => {
  const { t, i18n } = useTranslation("translation");

  const base = "services.espacoKids";
  const tt = (key: string) => t(`${base}.${key}`);

  // ✅ Idioma atual (pt/en/es/fr) com fallback seguro
  const lang = (i18n.language || "pt").slice(0, 2).toLowerCase();
  const normalizedLang = (["pt", "en", "es", "fr"] as const).includes(
    lang as "pt" | "en" | "es" | "fr"
  )
    ? (lang as "pt" | "en" | "es" | "fr")
    : "pt";

  // ✅ Legendas por idioma (public/vídeos)
  const subtitleByLang: Record<"pt" | "en" | "es" | "fr", string> = {
    pt: "/vídeos/espaco-kids.pt.vtt",
    en: "/vídeos/espaco-kids.en.vtt",
    es: "/vídeos/espaco-kids.es.vtt",
    fr: "/vídeos/espaco-kids.fr.vtt",
  };

  const features = [
    {
      icon: Palette,
      titleKey: `${base}.features.item1.title`,
      descriptionKey: `${base}.features.item1.description`,
    },
    {
      icon: Baby,
      titleKey: `${base}.features.item2.title`,
      descriptionKey: `${base}.features.item2.description`,
    },
    {
      icon: Users,
      titleKey: `${base}.features.item3.title`,
      descriptionKey: `${base}.features.item3.description`,
    },
    {
      icon: Gamepad2,
      titleKey: `${base}.features.item4.title`,
      descriptionKey: `${base}.features.item4.description`,
    },
  ];

  const benefits = [
    `${base}.benefits.item1`,
    `${base}.benefits.item2`,
    `${base}.benefits.item3`,
    `${base}.benefits.item4`,
  ];

  const emojiCards = [
    { emoji: "🦷", textKey: `${base}.emojiCards.item1` },
    { emoji: "😊", textKey: `${base}.emojiCards.item2` },
    { emoji: "🎨", textKey: `${base}.emojiCards.item3` },
    { emoji: "💪", textKey: `${base}.emojiCards.item4` },
  ];

  return (
    <>
      <Helmet>
        <title>{tt("title")} - Clínica Dr. Sílvio Araújo</title>
        <meta name="description" content={tt("heroDescription")} />
      </Helmet>

      <Header />

      <main className="pt-0 pb-16">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-blue-50 via-background to-indigo-50/40 py-10 md:py-14 overflow-hidden">
          {/* Doodles decorativos */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full bg-blue-200/30 blur-2xl" />
            <div className="absolute top-24 right-10 w-72 h-72 rounded-full bg-indigo-200/25 blur-3xl" />
            <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-sky-200/25 blur-3xl" />

            <div className="absolute top-6 left-12 text-6xl opacity-25 animate-float">
              ☁️
            </div>
            <div className="absolute top-10 right-16 text-7xl opacity-20 animate-float">
              🫧
            </div>
            <div
              className="absolute bottom-20 left-24 text-6xl opacity-25 animate-float"
              style={{ animationDelay: "1s" }}
            >
              🦄
            </div>
            <div
              className="absolute bottom-10 right-20 text-6xl opacity-25 animate-float"
              style={{ animationDelay: "1.3s" }}
            >
              ⭐
            </div>
            <div
              className="absolute top-32 left-1/2 -translate-x-1/2 text-6xl opacity-20 animate-float"
              style={{ animationDelay: "2s" }}
            >
              💙
            </div>
          </div>

          <div className="container relative">
            <div className="mb-8">
              <Link
                to="/"
                className="inline-flex items-center text-primary hover:underline group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                {tt("back")}
              </Link>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-200 shadow-sm">
                <Baby className="w-4 h-4" />
                {tt("subtitle")} <span>🫧</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
                {tt("heroTitleMain")}{" "}
                <span className="text-blue-600 drop-shadow-sm">
                  {tt("heroTitleAccent")}
                </span>
              </h1>

              <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                {tt("heroDescription")}
              </p>
            </div>
          </div>
        </section>

        {/* VIDEO */}
        <section className="relative py-14 md:py-16 bg-background overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-12 left-10 text-6xl opacity-20 animate-float">
              🫧
            </div>
            <div
              className="absolute top-10 right-16 text-6xl opacity-20 animate-float"
              style={{ animationDelay: "1s" }}
            >
              🐳
            </div>
            <div className="absolute -top-24 right-10 w-80 h-80 rounded-full bg-blue-200/20 blur-3xl" />
            <div className="absolute -bottom-28 left-10 w-96 h-96 rounded-full bg-indigo-200/20 blur-3xl" />
          </div>

          <div className="container relative">
            <div className="mx-auto max-w-7xl">
              {/* ✅ VideoPlayer com caminho corrigido para pasta "vídeos" */}
              <VideoPlayer
                src="/vídeos/espaco-kids.mp4"
                poster="/vídeos/espaco-kids-poster.jpg"
                className="w-full"
                trackSrc={subtitleByLang[normalizedLang]}
                trackLang={normalizedLang}
                showCaptionsByDefault={true}
              />
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="relative py-20 bg-blue-50/60 overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-14 left-12 text-6xl opacity-20 animate-float">
              🍬
            </div>
            <div
              className="absolute top-20 right-14 text-6xl opacity-20 animate-float"
              style={{ animationDelay: "1s" }}
            >
              🫧
            </div>
          </div>

          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold">
                {tt("features.title")}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="relative bg-white/90 backdrop-blur rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl transition text-center"
                >
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-blue-200/60 flex items-center justify-center border border-blue-200">
                    🫧
                  </div>

                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                    <f.icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-xl font-extrabold mb-3">{t(f.titleKey)}</h3>
                  <p className="text-muted-foreground">{t(f.descriptionKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="relative py-20 bg-gradient-to-br from-blue-700 to-indigo-800 overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-14 left-10 text-6xl opacity-20 animate-float">
              ⭐
            </div>
            <div
              className="absolute top-16 right-14 text-6xl opacity-20 animate-float"
              style={{ animationDelay: "1s" }}
            >
              🫧
            </div>
            <div className="absolute -top-24 left-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 right-20 w-[28rem] h-[28rem] rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
                {tt("benefits.title")}
              </h2>
              <ul className="space-y-6">
                {benefits.map((b, i) => (
                  <li key={i} className="flex gap-4 text-white/95 text-lg">
                    <span className="w-10 h-10 rounded-2xl bg-white/15 border border-white/15 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </span>
                    <span>{t(b)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {emojiCards.map((e, i) => (
                <div
                  key={i}
                  className="bg-white/12 backdrop-blur rounded-2xl p-6 text-center text-white border border-white/15 hover:bg-white/18 transition"
                >
                  <div className="text-5xl mb-4">{e.emoji}</div>
                  <div className="font-bold">{t(e.textKey)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 bg-blue-50/60 overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">
              🫧
            </div>
            <div
              className="absolute top-16 right-10 text-6xl opacity-20 animate-float"
              style={{ animationDelay: "1s" }}
            >
              💙
            </div>
            <div className="absolute -top-24 right-10 w-80 h-80 rounded-full bg-blue-200/25 blur-3xl" />
            <div className="absolute -bottom-28 left-10 w-96 h-96 rounded-full bg-indigo-200/25 blur-3xl" />
          </div>

          <div className="container relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 text-center border-2 border-blue-200 shadow-xl">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-3xl bg-blue-600 flex items-center justify-center shadow-lg">
                  <Baby className="w-10 h-10 text-white" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                {tt("cta.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {tt("cta.description")}
              </p>

              <div className="flex justify-center gap-4 flex-wrap">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link to="/#marcacao">
                    <Calendar className="w-5 h-5 mr-2" />
                    {tt("cta.button")}
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-blue-300"
                >
                  <a href="tel:+351924123784">
                    <Phone className="w-5 h-5 mr-2" />
                    {tt("cta.call")}
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex justify-center gap-3 flex-wrap">
                {["🫧", "⭐", "💙", "🐳", "🦷"].map((x, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-white border border-blue-200 shadow-sm text-2xl"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default EspacoKids;