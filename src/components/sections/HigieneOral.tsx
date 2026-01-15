import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  CheckCircle2,
  Sparkles,
  AlertTriangle,
  HeartPulse,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const HigieneOral = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleBackToBlog = useCallback(() => {
    navigate("/");
    window.setTimeout(() => scrollToId("blog"), 150);
  }, [navigate, scrollToId]);

  const handleCTA = useCallback(() => {
    navigate("/");
    window.setTimeout(() => scrollToId("marcacao"), 150);
  }, [navigate, scrollToId]);

  const title = t("blog.higiene.title", {
    defaultValue: "How to maintain good daily oral hygiene",
  });
  const description = t("blog.higiene.description", {
    defaultValue:
      "Practical habits for healthier teeth and gums: brushing technique, flossing, mouthwash, diet, and when to see the dentist.",
  });

  const toc = useMemo(
    () => [
      { id: "why", label: t("blog.higiene.toc.why", { defaultValue: "Why it matters" }) },
      {
        id: "daily",
        label: t("blog.higiene.toc.daily", { defaultValue: "Daily routine (step-by-step)" }),
      },
      {
        id: "technique",
        label: t("blog.higiene.toc.technique", { defaultValue: "Brushing technique (quick guide)" }),
      },
      {
        id: "floss",
        label: t("blog.higiene.toc.floss", { defaultValue: "Flossing & interdental cleaning" }),
      },
      { id: "diet", label: t("blog.higiene.toc.diet", { defaultValue: "Food & habits" }) },
      {
        id: "warning",
        label: t("blog.higiene.toc.warning", { defaultValue: "Warning signs to watch for" }),
      },
      {
        id: "faq",
        label: t("blog.higiene.toc.faq", { defaultValue: "Myths & FAQs" }),
      },
    ],
    [t]
  );

  const share = useCallback(async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, text: description, url });
        return;
      }
      await navigator.clipboard.writeText(url);
    } catch {
      // fallback silencioso
    }
  }, [title, description]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
      </Helmet>

      <Header />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-5xl">
          <button
            type="button"
            onClick={handleBackToBlog}
            className="inline-flex items-center text-primary hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("blog.back", { defaultValue: "Back to Blog" })}
          </button>

          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                {t("blog.higiene.category", { defaultValue: "Oral Hygiene" })}
              </span>
              
              <span className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
                <Clock className="w-4 h-4" />
                {t("blog.higiene.readTime", { defaultValue: "5 min read" })}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {title}
            </h1>

            <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
              {t("blog.higiene.lead", {
                defaultValue:
                  "Small daily habits make a big difference. Here's a practical guide to keep your teeth and gums healthy — at home and between check-ups.",
              })}
            </p>
          </header>

          <div className="w-full h-64 md:h-[420px] mb-10 rounded-3xl overflow-hidden border bg-muted">
            <img
              src="/higiene-oral.png"
              alt={t("blog.higiene.imageAlt", { defaultValue: "Oral hygiene" })}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="rounded-2xl border bg-background p-5 shadow-sm">
                <p className="font-semibold mb-3">
                  {t("blog.higiene.toc.title", { defaultValue: "In this article" })}
                </p>

                <nav className="space-y-2">
                  {toc.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToId(item.id)}
                      className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      • {item.label}
                    </button>
                  ))}
                </nav>

                <div className="mt-5 pt-5 border-t">
                  <Button className="w-full" variant="cta" onClick={handleCTA}>
                    {t("blog.higiene.ctaButton", { defaultValue: "Book Appointment" })}
                  </Button>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {t("blog.higiene.toc.note", {
                      defaultValue:
                        "Need a personalized plan? We can evaluate your routine and recommend the best products and techniques.",
                    })}
                  </p>
                </div>
              </div>
            </aside>

            <section className="space-y-10">
              <div className="rounded-2xl border bg-primary/5 p-6">
                <div className="flex items-start gap-3">
                  <HeartPulse className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      {t("blog.higiene.keyTakeawaysTitle", {
                        defaultValue: "Key takeaways",
                      })}
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>
                        • {t("blog.higiene.keyTakeaway1", {
                          defaultValue: "Brush 2× daily (2 min) + interdental cleaning",
                        })}
                      </li>
                      <li>
                        • {t("blog.higiene.keyTakeaway2", {
                          defaultValue: "Limit sugary snacks & drinks",
                        })}
                      </li>
                      <li>
                        • {t("blog.higiene.keyTakeaway3", {
                          defaultValue: "Don't skip professional cleanings",
                        })}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="why" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.higiene.whyTitle", { defaultValue: "Why it matters" })}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("blog.higiene.whyText1", {
                    defaultValue:
                      "Oral health goes beyond aesthetics. Gum disease and tooth decay can lead to pain, tooth loss, and are linked to systemic conditions like cardiovascular disease and diabetes.",
                  })}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("blog.higiene.whyText2", {
                    defaultValue:
                      "The good news? Prevention is simple with the right daily habits. Here's what actually makes a difference.",
                  })}
                </p>
              </div>

              <div id="daily" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.higiene.dailyTitle", {
                    defaultValue: "Daily routine (step-by-step)",
                  })}
                </h2>

                <div className="space-y-3">
                  {[
                    {
                      title: t("blog.higiene.daily.step1.title", {
                        defaultValue: "Morning & Night: Brush for 2 minutes",
                      }),
                      text: t("blog.higiene.daily.step1.text", {
                        defaultValue:
                          "Use fluoride toothpaste and a soft-bristle brush. Cover all surfaces — outer, inner, chewing.",
                      }),
                    },
                    {
                      title: t("blog.higiene.daily.step2.title", {
                        defaultValue: "Interdental cleaning (once a day)",
                      }),
                      text: t("blog.higiene.daily.step2.text", {
                        defaultValue:
                          "Floss or use interdental brushes. Best done in the evening before brushing.",
                      }),
                    },
                    {
                      title: t("blog.higiene.daily.step3.title", {
                        defaultValue: "Optional: mouthwash",
                      }),
                      text: t("blog.higiene.daily.step3.text", {
                        defaultValue:
                          "Use only if recommended by your dentist. Not a replacement for brushing/flossing.",
                      }),
                    },
                    {
                      title: t("blog.higiene.daily.step4.title", {
                        defaultValue: "Hydrate & limit sugar",
                      }),
                      text: t("blog.higiene.daily.step4.text", {
                        defaultValue:
                          "Drink water throughout the day. Limit snacking between meals, especially sugary snacks.",
                      }),
                    },
                  ].map((step) => (
                    <div
                      key={step.title}
                      className="flex gap-3 rounded-2xl border bg-background p-5 shadow-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">{step.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="technique" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.higiene.techniqueTitle", {
                    defaultValue: "Brushing technique (quick guide)",
                  })}
                </h2>

                <div className="rounded-2xl border bg-background p-6 shadow-sm">
                  <ul className="space-y-3 text-muted-foreground">
                    <li>
                      <strong>Angle:</strong>{" "}
                      {t("blog.higiene.tech1", {
                        defaultValue:
                          "Hold brush at 45° to gum line (where teeth meet gums).",
                      })}
                    </li>
                    <li>
                      <strong>Motion:</strong>{" "}
                      {t("blog.higiene.tech2", {
                        defaultValue:
                          "Use short, gentle strokes — no aggressive scrubbing.",
                      })}
                    </li>
                    <li>
                      <strong>Coverage:</strong>{" "}
                      {t("blog.higiene.tech3", {
                        defaultValue:
                          "Outer, inner, and chewing surfaces of all teeth.",
                      })}
                    </li>
                    <li>
                      <strong>Tongue:</strong>{" "}
                      {t("blog.higiene.tech4", {
                        defaultValue:
                          "Gently brush or scrape to remove bacteria and freshen breath.",
                      })}
                    </li>
                  </ul>
                </div>
              </div>

              <div id="floss" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.higiene.flossSectionTitle", {
                    defaultValue: "Flossing & interdental cleaning",
                  })}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("blog.higiene.flossSectionText", {
                    defaultValue:
                      "Cavities and gum issues often start between teeth. If floss is difficult, interdental brushes can be a great alternative — ask your dentist which size is best for you.",
                  })}
                </p>

                <div className="rounded-2xl border bg-background p-6 shadow-sm">
                  <p className="font-semibold">
                    {t("blog.higiene.flossHowTitle", { defaultValue: "How to floss (in 3 steps)" })}
                  </p>
                  <ol className="mt-3 space-y-2 text-muted-foreground list-decimal pl-5">
                    <li>
                      {t("blog.higiene.flossHow1", {
                        defaultValue: "Slide gently between teeth and curve into a C shape.",
                      })}
                    </li>
                    <li>
                      {t("blog.higiene.flossHow2", {
                        defaultValue: "Move up and down along both sides of the tooth.",
                      })}
                    </li>
                    <li>
                      {t("blog.higiene.flossHow3", {
                        defaultValue: "Use a clean section of floss for each space.",
                      })}
                    </li>
                  </ol>
                </div>
              </div>

              <div id="diet" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.higiene.dietTitle", { defaultValue: "Food & habits" })}
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-2xl border bg-background p-6 shadow-sm">
                    <p className="font-semibold mb-2">
                      {t("blog.higiene.diet.goodTitle", { defaultValue: "Good habits" })}
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• {t("blog.higiene.diet.good1", { defaultValue: "Drink water throughout the day." })}</li>
                      <li>• {t("blog.higiene.diet.good2", { defaultValue: "Prefer snacks with less sugar (nuts, cheese, yogurt)." })}</li>
                      <li>• {t("blog.higiene.diet.good3", { defaultValue: "Chew sugar-free gum after meals (if suitable) to stimulate saliva." })}</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border bg-background p-6 shadow-sm">
                    <p className="font-semibold mb-2">
                      {t("blog.higiene.diet.limitTitle", { defaultValue: "Limit" })}
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• {t("blog.higiene.diet.limit1", { defaultValue: "Frequent sugary snacks and drinks." })}</li>
                      <li>• {t("blog.higiene.diet.limit2", { defaultValue: "Sipping soda/juice for long periods (constant acid exposure)." })}</li>
                      <li>• {t("blog.higiene.diet.limit3", { defaultValue: "Smoking (major risk for gum disease and staining)." })}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="warning" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.higiene.warningTitle", { defaultValue: "Warning signs to watch for" })}
                </h2>

                <div className="rounded-2xl border bg-destructive/5 p-6">
                  <p className="font-semibold mb-2">
                    {t("blog.higiene.warningSubtitle", {
                      defaultValue: "If you notice any of these, consider booking a check-up:",
                    })}
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    {[
                      t("blog.higiene.warning.1", { defaultValue: "Bleeding gums when brushing or flossing" }),
                      t("blog.higiene.warning.2", { defaultValue: "Persistent bad breath" }),
                      t("blog.higiene.warning.3", { defaultValue: "Tooth sensitivity or pain" }),
                      t("blog.higiene.warning.4", { defaultValue: "Swollen gums or gum recession" }),
                      t("blog.higiene.warning.5", { defaultValue: "Pain when chewing or jaw discomfort" }),
                    ].map((x) => (
                      <li key={x} className="flex gap-2">
                        <AlertTriangle className="w-4 h-4 mt-1 text-destructive" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div id="faq" className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {t("blog.higiene.faqTitle", { defaultValue: "Myths & FAQs" })}
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      q: t("blog.higiene.faq.q1", {
                        defaultValue: "If my gums bleed, should I stop flossing?",
                      }),
                      a: t("blog.higiene.faq.a1", {
                        defaultValue:
                          "Usually no. Bleeding is often a sign of inflammation. Floss gently and consistently; if bleeding persists after a week or two, get evaluated.",
                      }),
                    },
                    {
                      q: t("blog.higiene.faq.q2", {
                        defaultValue: "Is mouthwash necessary?",
                      }),
                      a: t("blog.higiene.faq.a2", {
                        defaultValue:
                          "Not always. It can help in specific situations (gum issues, high cavity risk). The best routine is brushing + interdental cleaning.",
                      }),
                    },
                    {
                      q: t("blog.higiene.faq.q3", {
                        defaultValue: "Electric toothbrush: worth it?",
                      }),
                      a: t("blog.higiene.faq.a3", {
                        defaultValue:
                          "For many people, yes — it improves consistency and plaque removal. The technique still matters.",
                      }),
                    },
                  ].map((item) => (
                    <div key={item.q} className="rounded-2xl border bg-background p-6 shadow-sm">
                      <p className="font-semibold">{item.q}</p>
                      <p className="mt-2 text-muted-foreground">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border bg-primary text-primary-foreground p-8">
                <p className="text-xl md:text-2xl font-bold">
                  {t("blog.higiene.finalCta.title", { defaultValue: "Want a personalized oral hygiene plan?" })}
                </p>
                <p className="mt-2 text-primary-foreground/90 max-w-2xl">
                  {t("blog.higiene.finalCta.text", {
                    defaultValue:
                      "We can assess your gum health, cavity risk and recommend products and techniques tailored to you.",
                  })}
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button variant="secondary" onClick={handleCTA}>
                    {t("blog.higiene.ctaButton", { defaultValue: "Book Appointment" })}
                  </Button>
                  <Button variant="outline" onClick={share} className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    <Share2 className="w-4 h-4 mr-2" />
                    {t("blog.share", { defaultValue: "Share" })}
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <span className="text-muted-foreground">
                  {t("blog.share", { defaultValue: "Share" })}
                </span>
                <Button variant="outline" size="icon" type="button" onClick={share} aria-label={t("blog.share", { defaultValue: "Share" })}>
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default HigieneOral;
