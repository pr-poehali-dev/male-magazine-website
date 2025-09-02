import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const [email, setEmail] = useState("");

  const sections = [
    { emoji: "⭐", title: "Лучшее", description: "Топ контент недели", gradient: "from-primary to-red-700" },
    { emoji: "📈", title: "Тренды", description: "Что сейчас актуально", gradient: "from-red-600 to-orange-600" },
    { emoji: "📚", title: "Истории", description: "Реальные мужские истории", gradient: "from-gray-700 to-gray-900" },
    { emoji: "🕵️", title: "Инсайды", description: "Закулисная информация", gradient: "from-slate-700 to-slate-900" },
    { emoji: "🏆", title: "ТОП-рейтинги", description: "Лучшее из лучшего", gradient: "from-amber-600 to-yellow-600" },
    { emoji: "👔", title: "Стиль", description: "Мужская мода и стиль", gradient: "from-slate-800 to-black" },
    { emoji: "🎮", title: "Игры", description: "Игровые новости и обзоры", gradient: "from-blue-600 to-purple-600" },
    { emoji: "🔥", title: "Эрос", description: "18+ контент для мужчин", gradient: "from-red-700 to-red-900" }
  ];

  const featuredArticles = [
    {
      title: "Что надеть на летнюю свадьбу 2025: гид по мужскому стилю",
      category: "Стиль",
      readTime: "8 мин",
      description: "Как одеться на летнюю свадьбу мужчине: гид 2025. Советы по тканям, цветам и стилю для пляжа, сада и вечерних церемоний.",
      link: "/article/letnyaya-svadba-stil"
    },
    {
      title: "Тренды мужской моды 2024",
      category: "Стиль", 
      readTime: "5 мин",
      description: "Что будут носить настоящие мужчины в этом сезоне",
      link: "#"
    },
    {
      title: "Психология отношений",
      category: "Эрос",
      readTime: "12 мин",
      description: "Как понимать женщин и строить крепкие отношения",
      link: "#"
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header showBackButton={false} showNavigation={true} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-background via-muted to-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-muted/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/img/fc442a84-18e8-44e7-bc75-7cd917e3a022.jpg')`
          }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-primary">VOLT</span><br />
            ЖУРНАЛ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            🔥 Журнал без цензуры: тренды, скандалы, инсайды и истории, от которых горят экраны. Тут стиль встречается с эросом, а лучшие рейтинги и игры подаются с перчинкой. Для тех, кто не любит скуку.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-red-700 text-primary-foreground px-8 py-4 text-lg shadow-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Читать сейчас
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg backdrop-blur-sm">
              <Icon name="Users" size={20} className="mr-2" />
              Присоединиться
            </Button>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">РАЗДЕЛЫ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sections.map((section) => (
              <Card 
                key={section.title}
                className="group cursor-pointer bg-card hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-primary overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${section.gradient}`}></div>
                <CardHeader className="pb-2">
                  <div className="text-4xl mb-2">{section.emoji}</div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{section.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">РЕКОМЕНДУЕМ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card 
                key={index}
                className="group cursor-pointer bg-card hover:bg-muted/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {article.category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{article.description}</p>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:bg-primary hover:text-primary-foreground p-0"
                    onClick={() => window.location.href = article.link}
                  >
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-background via-card to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">ПОДПИСКА НА РАССЫЛКУ</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Получайте лучшие материалы прямо на почту. Только качественный контент, никакого спама.
          </p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-input border-border text-foreground placeholder:text-muted-foreground"
                required
              />
              <Button 
                type="submit" 
                className="bg-primary hover:bg-red-700 text-primary-foreground px-8"
              >
                <Icon name="Send" size={18} className="mr-2" />
                ПОДПИСАТЬСЯ
              </Button>
            </div>
          </form>
          <p className="text-sm text-muted-foreground mt-4">
            Никакого спама. Отписаться можно в любой момент.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;