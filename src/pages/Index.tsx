import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

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
      title: "Секреты успешного мужчины",
      category: "Лучшее",
      readTime: "8 мин",
      description: "Как построить карьеру мечты и стать лидером в своей области"
    },
    {
      title: "Тренды мужской моды 2024",
      category: "Стиль", 
      readTime: "5 мин",
      description: "Что будут носить настоящие мужчины в этом сезоне"
    },
    {
      title: "Психология отношений",
      category: "Эрос",
      readTime: "12 мин",
      description: "Как понимать женщин и строить крепкие отношения"
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={32} className="text-primary" />
              <div className="flex items-center space-x-2">
                <h1 className="text-3xl font-bold">VOLT</h1>
                <div className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded border-2 border-primary">
                  18+
                </div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              {sections.slice(0, 4).map((section) => (
                <a 
                  key={section.title}
                  href="#" 
                  className="text-sm uppercase tracking-wider hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1"
                >
                  {section.title}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                <Icon name="User" size={18} className="mr-2" />
                Войти
              </Button>
              <Button className="bg-primary hover:bg-red-700 text-primary-foreground">
                <Icon name="UserPlus" size={18} className="mr-2" />
                Регистрация
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground md:hidden">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

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
                  <Button variant="ghost" className="text-primary hover:bg-primary hover:text-primary-foreground p-0">
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

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" size={28} className="text-primary" />
                <div className="flex items-center space-x-2">
                  <h3 className="text-2xl font-bold">VOLT</h3>
                  <div className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded border border-primary">
                    18+
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Брутальный журнал для настоящих мужчин. Стиль, карьера, отношения, успех.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2">
                {sections.slice(0, 4).map((section) => (
                  <li key={section.title}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>О нас</li>
                <li>Реклама</li>
                <li>Контакты</li>
                <li>Политика конфиденциальности</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 VOLT журнал. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;